import fs from 'fs';
import http from 'http';
import path from 'path';
import { getAllRoutes, projectRoot } from './routes.mjs';
import {
  PRERENDER_CONFIG,
  getRouteTimeout,
  partitionRoutes,
  shouldAbortPrerenderRequest,
} from './prerenderConfig.mjs';

const DIST = path.join(projectRoot, 'dist');

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

function startStaticServer(spaShellHtml) {
  const server = http.createServer((req, res) => {
    try {
      const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);

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
    tryListen(PRERENDER_CONFIG.preferredPort, 20);
  });
}

function routeToOutputPath(route) {
  if (route === '/') {
    return path.join(DIST, 'index.html');
  }
  const segments = route.replace(/^\//, '').split('/');
  return path.join(DIST, ...segments, 'index.html');
}

function cleanupCapturedHtml(html, route) {
  let out = html;

  out = out.replace(/\s*data-prerender-ready="[^"]*"/g, '');
  out = out.replace(/\s*data-prerender-path="[^"]*"/g, '');

  // Analytics <script> tags injected by the delayed loader must not be baked
  // into the static HTML (they would then load on the critical path).
  out = out.replace(/<script[^>]+data-delayed-analytics[^>]*>\s*<\/script>/gi, '');

  // The homepage hero preloads come from the static shell — on every other
  // route they force visitors to download ~66-188KB of unused hero image.
  if (route !== '/') {
    out = out.replace(/<link[^>]+rel=["']preload["'][^>]*hero-home[^>]*>/gi, '');
  }

  const canonicals = [...out.matchAll(/<link[^>]+rel=["']canonical["'][^>]*>/gi)];
  if (canonicals.length > 1) {
    const matchIdx = canonicals.findIndex((m) =>
      m[0].includes(route === '/' ? 'luxuryandamans.com/"' : route)
    );
    const keep = matchIdx >= 0 ? matchIdx : canonicals.length - 1;
    canonicals.forEach((m, i) => {
      if (i !== keep) out = out.replace(m[0], '');
    });
  }

  // Keep only the LAST occurrence (Helmet's, page-specific) of every meta that
  // exists both in the static shell and in the Helmet output.
  const dedupeByName = [
    'description',
    'keywords',
    'robots',
    'author',
    'theme-color',
    'twitter:title',
    'twitter:description',
    'twitter:image',
    'twitter:image:alt',
    'twitter:card',
    'twitter:site',
    'twitter:creator',
  ];
  for (const name of dedupeByName) {
    const re = new RegExp(`<meta[^>]+name=["']${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>`, 'gi');
    const matches = [...out.matchAll(re)];
    if (matches.length > 1) {
      for (let i = 0; i < matches.length - 1; i++) {
        out = out.replace(matches[i][0], '');
      }
    }
  }

  const dedupeByProperty = [
    'og:url',
    'og:title',
    'og:description',
    'og:image',
    'og:image:width',
    'og:image:height',
    'og:image:alt',
    'og:type',
    'og:site_name',
    'og:locale',
  ];
  for (const prop of dedupeByProperty) {
    const re = new RegExp(`<meta[^>]+property=["']${prop.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>`, 'gi');
    const matches = [...out.matchAll(re)];
    if (matches.length > 1) {
      for (let i = 0; i < matches.length - 1; i++) {
        out = out.replace(matches[i][0], '');
      }
    }
  }

  if (!/^<!DOCTYPE/i.test(out)) {
    out = '<!DOCTYPE html>\n' + out;
  }

  return out;
}

function waitForRouteReady(page, route, timeoutMs) {
  return page.waitForFunction(
    (expectedPath) => {
      const ready = document.documentElement.getAttribute('data-prerender-ready') === 'true';
      const markedPath = document.documentElement.getAttribute('data-prerender-path');
      if (!ready || markedPath !== expectedPath) return false;
      if (expectedPath === '/') return true;

      const title = document.title || '';
      const stillShell = /^Andaman Tour Packages 2026\s*\|\s*(Starting|From)/i.test(title);
      return Boolean(title) && !stillShell;
    },
    { timeout: timeoutMs },
    route
  );
}

async function prerenderRoute(browser, baseUrl, route) {
  const timeoutMs = getRouteTimeout(route);
  const page = await browser.newPage();

  try {
    await page.setViewport({ width: 1280, height: 800 });
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const url = req.url();
      const type = req.resourceType();
      if (shouldAbortPrerenderRequest(url, type, baseUrl)) {
        req.abort();
      } else {
        req.continue();
      }
    });

    const url = `${baseUrl}${route === '/' ? '/' : route}`;
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: timeoutMs });
    await waitForRouteReady(page, route, timeoutMs);
    await new Promise((r) => setTimeout(r, 200));

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
  const results = new Array(items.length);
  let index = 0;

  async function run() {
    while (index < items.length) {
      const i = index++;
      results[i] = await worker(items[i], i);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => run())
  );
  return results;
}

async function prerenderBatch(browser, baseUrl, routes, concurrency, label) {
  if (!routes.length) return [];

  if (label) console.log(`\n${label}`);

  return mapPool(routes, concurrency, async (route) => {
    const result = await prerenderRoute(browser, baseUrl, route);
    if (result.ok) {
      console.log(`  ✓ ${route} — ${result.title}`);
    } else {
      console.error(`  ✗ ${route} — ${result.error}`);
    }
    return result;
  });
}

async function main() {
  const spaIndexPath = path.join(DIST, 'index.html');
  if (!fs.existsSync(spaIndexPath)) {
    console.error('dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  const shellCachePath = path.join(DIST, 'spa-shell.html');
  let spaShellHtml;
  if (fs.existsSync(shellCachePath)) {
    spaShellHtml = fs.readFileSync(shellCachePath, 'utf8');
  } else {
    spaShellHtml = fs.readFileSync(spaIndexPath, 'utf8');
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

  const { standard, heavy } = partitionRoutes(routes);
  console.log(
    `Prerendering ${routes.length} routes (${standard.length} standard @ concurrency ${PRERENDER_CONFIG.concurrency.standard}, ${heavy.length} heavy @ concurrency ${PRERENDER_CONFIG.concurrency.heavy})…`
  );

  const { server, port } = await startStaticServer(spaShellHtml);
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`Serving dist on ${baseUrl}`);

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    const standardResults = await prerenderBatch(
      browser,
      baseUrl,
      standard,
      PRERENDER_CONFIG.concurrency.standard
    );

    const heavyResults = await prerenderBatch(
      browser,
      baseUrl,
      heavy,
      PRERENDER_CONFIG.concurrency.heavy,
      `Heavy routes (${heavy.length}) — large lazy chunks, processed sequentially:`
    );

    let results = [...standardResults, ...heavyResults];

    const firstFailures = results.filter((r) => !r.ok);
    if (firstFailures.length) {
      console.log(`\nRetrying ${firstFailures.length} failed route(s) at concurrency 1…`);
      const retries = await prerenderBatch(
        browser,
        baseUrl,
        firstFailures.map((f) => f.route),
        1
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
    if (
      failures.length > PRERENDER_CONFIG.maxAbsoluteFailures ||
      failRatio > PRERENDER_CONFIG.maxFailureRatio
    ) {
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
