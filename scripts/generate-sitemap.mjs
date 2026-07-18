import fs from 'fs';
import path from 'path';
import { getAllRoutes, projectRoot } from './routes.mjs';

const BASE_URL = 'https://luxuryandamans.com';
const nowISO = new Date().toISOString();

/**
 * Build URL entry
 */
function urlEntry(loc, { lastmod = nowISO, changefreq = 'monthly', priority = 0.6 } = {}) {
  return { loc: `${BASE_URL}${loc}`, lastmod, changefreq, priority };
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
  return getAllRoutes().map((pathname) => urlEntry(pathname, priorityForPath(pathname)));
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
