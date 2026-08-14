import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { getAllRoutes, projectRoot } from './routes.mjs';

const BASE_URL = 'https://luxuryandamans.com';
const nowISO = new Date().toISOString();

/**
 * lastmod strategy — Google ignores (or distrusts) lastmod when every URL
 * claims to change on every build. Instead we report honest dates:
 *   1. Blog posts   → the post's own `date` field from its data file
 *   2. Other routes → last git commit touching the page/data source file
 *   3. Fallback     → file mtime, then build time
 */

const gitDateCache = new Map();

function gitLastModified(relFilePath) {
  if (gitDateCache.has(relFilePath)) return gitDateCache.get(relFilePath);
  let result = null;
  try {
    const out = execFileSync(
      'git',
      ['log', '-1', '--format=%cI', '--', relFilePath],
      { cwd: projectRoot, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
    ).trim();
    if (out) result = out;
  } catch {
    // git unavailable (e.g. CI artifact build) — fall through to mtime
  }
  if (!result) {
    try {
      result = fs.statSync(path.join(projectRoot, relFilePath)).mtime.toISOString();
    } catch {
      result = null;
    }
  }
  gitDateCache.set(relFilePath, result);
  return result;
}

/** Clamp future dates to now so lastmod is always plausible */
function clampToNow(iso) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return (d.getTime() > Date.now() ? new Date() : d).toISOString();
}

function fileLastmod(...relPaths) {
  const dates = relPaths
    .map((p) => gitLastModified(p))
    .filter(Boolean)
    .map((d) => new Date(d).getTime());
  if (!dates.length) return null;
  return clampToNow(new Date(Math.max(...dates)).toISOString());
}

/**
 * Map slug → publish date by scanning blog data files.
 * Each `slug:` is paired with the nearest `date:` in the same object literal.
 */
function buildBlogDateMap() {
  const map = new Map();
  const dirs = [path.join(projectRoot, 'src', 'data', 'blog')];
  const files = [];
  for (const dir of dirs) {
    try {
      fs.readdirSync(dir)
        .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
        .forEach((f) => files.push(path.join(dir, f)));
    } catch {
      /* optional */
    }
  }
  const legacy = path.join(projectRoot, 'src', 'data', 'blogPosts.ts');
  if (fs.existsSync(legacy)) files.push(legacy);

  for (const file of files) {
    let content = '';
    try {
      content = fs.readFileSync(file, 'utf8');
    } catch {
      continue;
    }
    const slugMatches = [
      ...content.matchAll(/slug\s*:\s*['"]([^'"\n]+)['"]/g),
      ...content.matchAll(/\b(?:const|let|var)\s+slug\s*=\s*['"]([^'"\n]+)['"]/g),
    ];
    const dateMatches = [...content.matchAll(/date\s*:\s*['"]([^'"\n]+)['"]/g)];
    for (const slugMatch of slugMatches) {
      const slug = slugMatch[1].trim();
      if (map.has(slug)) continue;
      // nearest date after the slug, else nearest before (fields live in the same object)
      let best = null;
      let bestDist = Infinity;
      for (const dm of dateMatches) {
        const dist = Math.abs(dm.index - slugMatch.index);
        if (dist < bestDist) {
          bestDist = dist;
          best = dm[1];
        }
      }
      if (best) {
        const parsed = new Date(best);
        if (!Number.isNaN(parsed.getTime())) {
          map.set(slug, clampToNow(parsed.toISOString()));
        }
      }
    }
  }
  return map;
}

/** Find which data file defines a package slug (for git-date lookup) */
function buildPackageFileMap() {
  const map = new Map();
  const dir = path.join(projectRoot, 'src', 'data', 'packages');
  try {
    for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.ts'))) {
      const content = fs.readFileSync(path.join(dir, f), 'utf8');
      for (const m of content.matchAll(/slug\s*:\s*['"]([^'"\n]+)['"]/g)) {
        if (!map.has(m[1].trim())) map.set(m[1].trim(), `src/data/packages/${f}`);
      }
    }
  } catch {
    /* optional */
  }
  return map;
}

const STATIC_PAGE_FILES = {
  '/': 'src/pages/Home.tsx',
  '/packages': 'src/pages/Packages.tsx',
  '/destinations': 'src/pages/Destinations.tsx',
  '/experiences': 'src/pages/Experiences.tsx',
  '/contact': 'src/pages/Contact.tsx',
  '/guide': 'src/pages/About.tsx',
  '/travel-guide': 'src/pages/TravelGuide.tsx',
  '/faq': 'src/pages/FAQ.tsx',
  '/privacy': 'src/pages/Privacy.tsx',
  '/terms': 'src/pages/Terms.tsx',
  '/sitemap': 'src/pages/Sitemap.tsx',
  '/offer': 'src/pages/Offer.tsx',
  '/enquiry': 'src/components/Enquiry.tsx',
  '/calculator': 'src/pages/PricingCalculator.tsx',
};

const DESTINATION_HUB_FILES = {
  'port-blair-destinations': 'src/pages/destinations/PortBlairDestinations.tsx',
  'havelock-destinations': 'src/pages/destinations/HavelockDestinations.tsx',
  'neil-destinations': 'src/pages/destinations/NeilDestinations.tsx',
  'baratang-destinations': 'src/pages/destinations/BaratangDestinations.tsx',
};

function createLastmodResolver() {
  const blogDates = buildBlogDateMap();
  const packageFiles = buildPackageFileMap();
  const newestBlogDate = [...blogDates.values()].sort().pop() || null;

  return function lastmodForPath(pathname) {
    if (pathname.startsWith('/blog/')) {
      const slug = pathname.replace('/blog/', '');
      return blogDates.get(slug) || fileLastmod('src/data/blog') || nowISO;
    }
    if (pathname === '/blog') {
      return newestBlogDate || fileLastmod('src/pages/Blog.tsx') || nowISO;
    }
    if (pathname.startsWith('/packages/')) {
      const slug = pathname.replace('/packages/', '');
      const file = packageFiles.get(slug);
      return fileLastmod(...(file ? [file] : []), 'src/data/packages.ts') || nowISO;
    }
    if (pathname.startsWith('/destinations/')) {
      const slug = pathname.replace('/destinations/', '');
      const hubFile = DESTINATION_HUB_FILES[slug];
      const pageFile = hubFile || `src/pages/destinations/${slug}.tsx`;
      return fileLastmod(pageFile, 'src/data/destinations.ts') || nowISO;
    }
    if (pathname.startsWith('/locations/')) {
      return fileLastmod('src/data/locations.ts') || nowISO;
    }
    if (pathname.startsWith('/experiences/')) {
      const slug = pathname.replace('/experiences/', '');
      return fileLastmod(`src/pages/experiences/${slug}.tsx`) || nowISO;
    }
    const staticFile = STATIC_PAGE_FILES[pathname];
    if (staticFile) {
      return fileLastmod(staticFile) || nowISO;
    }
    return nowISO;
  };
}

function priorityForPath(pathname) {
  if (pathname === '/') return { changefreq: 'weekly', priority: 1.0 };
  if (pathname === '/packages' || pathname === '/destinations') {
    return { changefreq: 'weekly', priority: 0.9 };
  }
  if (pathname === '/experiences' || pathname === '/blog') {
    return { changefreq: 'daily', priority: 0.8 };
  }
  if (pathname.startsWith('/packages/')) {
    return { changefreq: 'weekly', priority: 0.8 };
  }
  if (pathname === '/enquiry') return { changefreq: 'monthly', priority: 0.8 };
  if (pathname === '/calculator') return { changefreq: 'monthly', priority: 0.7 };
  if (
    pathname.startsWith('/experiences/') ||
    pathname.startsWith('/destinations/') ||
    pathname.startsWith('/locations/') ||
    pathname.startsWith('/blog/')
  ) {
    return { changefreq: 'monthly', priority: 0.7 };
  }
  if (pathname === '/privacy' || pathname === '/terms') {
    return { changefreq: 'yearly', priority: 0.3 };
  }
  if (pathname === '/sitemap') return { changefreq: 'monthly', priority: 0.5 };
  if (pathname === '/offer') return { changefreq: 'weekly', priority: 0.8 };
  return { changefreq: 'monthly', priority: 0.6 };
}

function buildSitemapUrls() {
  const lastmodForPath = createLastmodResolver();
  return getAllRoutes().map((pathname) => {
    const { changefreq, priority } = priorityForPath(pathname);
    return {
      loc: `${BASE_URL}${pathname}`,
      lastmod: lastmodForPath(pathname),
      changefreq,
      priority,
    };
  });
}

function toXml(urls) {
  const header =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n` +
    `        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n` +
    `        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;
  const footer = `</urlset>`;
  const body = urls
    .map(
      (u) =>
        `\n<url>\n  <loc>${u.loc}</loc>\n  <lastmod>${u.lastmod}</lastmod>\n  <changefreq>${u.changefreq}</changefreq>\n  <priority>${u.priority.toFixed(1)}</priority>\n</url>`
    )
    .join('\n');
  return `${header}\n${body}\n\n${footer}\n`;
}

function writeFileEnsureDir(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

function main() {
  const urls = buildSitemapUrls();
  const xml = toXml(urls);

  const publicPath = path.join(projectRoot, 'public', 'sitemap.xml');
  writeFileEnsureDir(publicPath, xml);

  // Also write to dist if it exists, to ensure immediate deploy coverage
  const distPath = path.join(projectRoot, 'dist', 'sitemap.xml');
  if (fs.existsSync(path.join(projectRoot, 'dist'))) {
    writeFileEnsureDir(distPath, xml);
  }

  console.log(`Generated sitemap with ${urls.length} URLs.`);
}

main();
