import fs from 'fs';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAllRoutes, projectRoot } from './routes.mjs';

const DIST = path.join(projectRoot, 'dist');
const PREFERRED_PORT = Number(process.env.PRERENDER_PORT) || 4179;
const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY) || 3;
const ROUTE_TIMEOUT_MS = Number(process.env.PRERENDER_TIMEOUT_MS) || 60000;
const MAX_FAILURE_RATIO = 0.15;
const MAX_ABSOLUTE_FAILURES = 20;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.map': 'application/json',
  '.webmanifest': 'application/manifest+json',
};

function contentType(filePath) {
  return MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
}

/**
 * Static server for dist/ with SPA fallback to the ORIGINAL Vite shell
 * (kept in memory). Never serve a previously prerendered index.html as the
 * client bootstrap — that would poison other routes with homepage HTML and
 * a stale data-prerender-ready attribute.
 */
function startStaticServer(spaShellHtml) {
  const server = http.createServer((req, res) => {
    try {
      const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);

      // Always serve the pristine SPA shell for document navigations that
      // are not already-written prerender files (assets, etc.).
      // For prerender we visit routes before their output files exist, so
      // fallback to spaShellHtml. Do NOT read dist/index.html from disk.
      if (urlPath === '/' || urlPath === '/index.html') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(spaShellHtml);
        return;
      }

      let filePath = path.join(DIST, urlPath);

      if (!filePath.startsWith(DIST)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }

      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        // Prefer directory index only for assets/folders that aren't the
        // route we're currently prerendering into — during the crawl those
        // folders usually don't exist yet.
        const dirIndex = path.join(filePath, 'index.html');
        if (fs.existsSync(dirIndex)) {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          fs.createReadStream(dirIndex).pipe(res);
          return;
        }
      }

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        res.writeHead(200, { 'Content-Type': contentType(filePath) });
        fs.createReadStream(filePath).pipe(res);
        return;
      }

      // SPA fallback: pristine Vite shell so React Router can render the route
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(spaShellHtml);
    } catch (err) {
      res.writeHead(500);
      res.end(String(err));
    }
  });

  return new Promise((resolve, reject) => {
    const tryListen = (port, attemptsLeft) => {
      const onError = (err) => {
        server.off('error', onError);
        if (err.code === 'EADDRINUSE' && attemptsLeft > 0) {
          tryListen(port + 1, attemptsLeft - 1);
        } else {
          reject(err);
        }
      };
      server.once('error', onError);
      server.listen(port, '127.0.0.1', () => {
        server.off('error', onError);
        const addr = server.address();
        const boundPort = addr && typeof addr === 'object' ? addr.port : port;
        if (!boundPort || boundPort < 1) {
          reject(new Error(`Invalid bound port: ${boundPort}`));
          return;
        }
        resolve({ server, port: boundPort });
      });
    };
    tryListen(PREFERRED_PORT, 20);
  });
}

function routeToOutputPath(route) {
  if (route === '/') {
    return path.join(DIST, 'index.html');
  }
  const segments = route.replace(/^\//, '').split('/');
  return path.join(DIST, ...segments, 'index.html');
}

/**
 * Prefer Helmet-managed tags; drop stale static homepage meta that Vite's
 * index.html left in <head> when duplicates remain.
 */
function cleanupCapturedHtml(html, route) {
  let out = html;

  // Remove prerender signal so deployed HTML doesn't short-circuit a future run
  out = out.replace(/\s*data-prerender-ready="[^"]*"/g, '');
  out = out.replace(/\s*data-prerender-path="[^"]*"/g, '');

  // If multiple canonicals, keep the one matching this route (else last)
  const canonicals = [...out.matchAll(/<link[^>]+rel=["']canonical["'][^>]*>/gi)];
  if (canonicals.length > 1) {
    const matchIdx = canonicals.findIndex((m) => m[0].includes(route === '/' ? 'luxuryandamans.com/"' : route));
    const keep = matchIdx >= 0 ? matchIdx : canonicals.length - 1;
    canonicals.forEach((m, i) => {
      if (i !== keep) out = out.replace(m[0], '');
    });
  }

  // If multiple meta descriptions, keep the last (Helmet)
  const descs = [...out.matchAll(/<meta[^>]+name=["']description["'][^>]*>/gi)];
  if (descs.length > 1) {
    for (let i = 0; i < descs.length - 1; i++) {
      out = out.replace(descs[i][0], '');
    }
  }

  // Multiple og:url / og:title / og:description — keep last of each
  for (const prop of ['og:url', 'og:title', 'og:description']) {
    const re = new RegExp(`<meta[^>]+property=["']${prop}["'][^>]*>`, 'gi');
    const matches = [...out.matchAll(re)];
    if (matches.length > 1) {
      for (let i = 0; i < matches.length - 1; i++) {
        out = out.replace(matches[i][0], '');
      }
    }
  }

  // Ensure doctype
  if (!/^<!DOCTYPE/i.test(out)) {
    out = '<!DOCTYPE html>\n' + out;
  }

  return out;
}

async function prerenderRoute(browser, baseUrl, route) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 800 });
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const url = req.url();
      const type = req.resourceType();
      if (
        type === 'media' ||
        /google-analytics|googletagmanager|googleadservices|facebook|hotjar|clarity|doubleclick|gtag\/js/i.test(
          url
        )
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });

    const url = `${baseUrl}${route === '/' ? '/' : route}`;
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: ROUTE_TIMEOUT_MS });

    // Wait until App marks this exact pathname ready and title is no longer the static homepage default.
    await page.waitForFunction(
      (expectedPath) => {
        const ready = document.documentElement.getAttribute('data-prerender-ready') === 'true';
        const markedPath = document.documentElement.getAttribute('data-prerender-path');
        if (!ready || markedPath !== expectedPath) return false;
        if (expectedPath === '/') return true;

        const title = document.title || '';
        // Static index.html homepage title only — Offer page legitimately mentions ₹14,999
        const stillDefault =
          /^Andaman Tour Packages 2026\s*\|\s*Starting/i.test(title);

        return Boolean(title) && !stillDefault;
      },
      { timeout: ROUTE_TIMEOUT_MS },
      route
    );

    // Extra settle for Helmet tag flush
    await new Promise((r) => setTimeout(r, 250));

    const raw = await page.evaluate(() => document.documentElement.outerHTML);
    const html = cleanupCapturedHtml(raw, route);

    const outPath = routeToOutputPath(route);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html, 'utf8');

    const title = await page.title();
    return { route, ok: true, title, outPath };
  } catch (err) {
    return { route, ok: false, error: err?.message || String(err) };
  } finally {
    await page.close().catch(() => {});
  }
}

async function mapPool(items, concurrency, worker) {
  const results = [];
  let index = 0;

  async function run() {
    while (index < items.length) {
      const i = index++;
      results[i] = await worker(items[i], i);
    }
  }

  const runners = Array.from({ length: Math.min(concurrency, items.length) }, () => run());
  await Promise.all(runners);
  return results;
}

async function main() {
  const spaIndexPath = path.join(DIST, 'index.html');
  if (!fs.existsSync(spaIndexPath)) {
    console.error('dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  // Snapshot the Vite-built shell BEFORE any prerender overwrites it
  // Prefer spa-shell.html if a previous run saved it; otherwise snapshot index.html
  const shellCachePath = path.join(DIST, 'spa-shell.html');
  let spaShellHtml;
  if (fs.existsSync(shellCachePath)) {
    spaShellHtml = fs.readFileSync(shellCachePath, 'utf8');
  } else {
    spaShellHtml = fs.readFileSync(spaIndexPath, 'utf8');
    // Only cache if this looks like the Vite shell (no prerendered root content)
    if (!spaShellHtml.includes('data-prerender-path') && spaShellHtml.includes('<div id="root"></div>')) {
      fs.writeFileSync(shellCachePath, spaShellHtml, 'utf8');
    }
  }

  let puppeteer;
  try {
    puppeteer = (await import('puppeteer')).default;
  } catch {
    console.error('puppeteer is not installed. Run: npm install -D puppeteer');
    process.exit(1);
  }

  // Optional: PRERENDER_ONLY=/blog,/offer for targeted re-runs
  const only = (process.env.PRERENDER_ONLY || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  let routes = getAllRoutes().filter((r) => r !== '/');
  routes.push('/');
  if (only.length) {
    routes = routes.filter((r) => only.includes(r));
    console.log(`PRERENDER_ONLY active: ${routes.join(', ')}`);
  }

  console.log(`Prerendering ${routes.length} routes (concurrency=${CONCURRENCY})…`);

  const { server, port } = await startStaticServer(spaShellHtml);
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`Serving dist on ${baseUrl}`);

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    let results = await mapPool(routes, CONCURRENCY, async (route) => {
      const result = await prerenderRoute(browser, baseUrl, route);
      if (result.ok) {
        console.log(`  ✓ ${route} — ${result.title}`);
      } else {
        console.error(`  ✗ ${route} — ${result.error}`);
      }
      return result;
    });

    // One retry pass for transient timeouts (heavy pages / concurrency pressure)
    const firstFailures = results.filter((r) => !r.ok);
    if (firstFailures.length) {
      console.log(`\nRetrying ${firstFailures.length} failed route(s)…`);
      const retries = await mapPool(
        firstFailures.map((f) => f.route),
        Math.min(2, CONCURRENCY),
        async (route) => {
          const result = await prerenderRoute(browser, baseUrl, route);
          if (result.ok) {
            console.log(`  ✓ (retry) ${route} — ${result.title}`);
          } else {
            console.error(`  ✗ (retry) ${route} — ${result.error}`);
          }
          return result;
        }
      );
      const byRoute = new Map(results.map((r) => [r.route, r]));
      retries.forEach((r) => byRoute.set(r.route, r));
      results = routes.map((route) => byRoute.get(route));
    }

    const failures = results.filter((r) => !r.ok);
    const successes = results.length - failures.length;

    console.log(`\nPrerender complete: ${successes}/${results.length} succeeded.`);
    if (failures.length) {
      console.error('Failed routes:');
      failures.forEach((f) => console.error(`  - ${f.route}: ${f.error}`));
    }

    const failRatio = failures.length / results.length;
    if (failures.length > MAX_ABSOLUTE_FAILURES || failRatio > MAX_FAILURE_RATIO) {
      console.error(
        `Too many prerender failures (${failures.length}, ${(failRatio * 100).toFixed(1)}%). Failing build.`
      );
      process.exit(1);
    }
  } finally {
    if (browser) await browser.close().catch(() => {});
    await new Promise((resolve) => server.close(resolve));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
