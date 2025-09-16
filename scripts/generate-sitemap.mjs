import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve project root relative to this script (Windows-safe)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const BASE_URL = 'https://luxuryandamans.com';
const nowISO = new Date().toISOString();

/**
 * Read a file if it exists
 */
function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return '';
  }
}

/**
 * Extract slugs from a TS file using a regex like slug: '...'
 */
function extractSlugsFromFile(filePath) {
  const content = readFileSafe(filePath);
  if (!content) return [];
  const slugs = new Set();
  const regex = /slug\s*:\s*['"]([^'"\n]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (match[1]) slugs.add(match[1].trim());
  }
  return Array.from(slugs);
}

/**
 * List file names (without extension) in a directory, optionally filtering
 */
function listSlugsFromDir(dir, { exclude = [] } = {}) {
  try {
    const files = fs.readdirSync(dir);
    return files
      .filter((f) => f.endsWith('.tsx'))
      .filter((f) => !exclude.includes(f))
      .map((f) => f.replace(/\.tsx$/, ''));
  } catch {
    return [];
  }
}

/**
 * Build URL entry
 */
function urlEntry(loc, { lastmod = nowISO, changefreq = 'monthly', priority = 0.6 } = {}) {
  return { loc: `${BASE_URL}${loc}`, lastmod, changefreq, priority };
}

function buildSitemapUrls() {
  const urls = [];

  // Main pages
  urls.push(
    urlEntry('/', { changefreq: 'weekly', priority: 1.0 }),
    urlEntry('/packages', { changefreq: 'weekly', priority: 0.9 }),
    urlEntry('/destinations', { changefreq: 'weekly', priority: 0.9 }),
    urlEntry('/experiences', { changefreq: 'weekly', priority: 0.8 }),
    urlEntry('/blog', { changefreq: 'daily', priority: 0.8 }),
    urlEntry('/enquiry', { changefreq: 'monthly', priority: 0.8 }),
    urlEntry('/calculator', { changefreq: 'monthly', priority: 0.7 }),
    urlEntry('/contact', { changefreq: 'monthly', priority: 0.6 }),
    urlEntry('/guide', { changefreq: 'monthly', priority: 0.6 }),
    urlEntry('/travel-guide', { changefreq: 'monthly', priority: 0.6 }),
    urlEntry('/faq', { changefreq: 'monthly', priority: 0.6 }),
    urlEntry('/privacy', { changefreq: 'yearly', priority: 0.3 }),
    urlEntry('/terms', { changefreq: 'yearly', priority: 0.3 }),
    urlEntry('/sitemap', { changefreq: 'monthly', priority: 0.5 })
  );

  // Experiences pages from directory
  const experiencesDir = path.join(projectRoot, 'src', 'pages', 'experiences');
  const experienceSlugs = listSlugsFromDir(experiencesDir);
  experienceSlugs.forEach((slug) => {
    urls.push(urlEntry(`/experiences/${slug}`, { changefreq: 'monthly', priority: 0.7 }));
  });

  // Destination static pages from directory
  const destinationsDir = path.join(projectRoot, 'src', 'pages', 'destinations');
  const destinationSlugs = listSlugsFromDir(destinationsDir, { exclude: ['[slug].tsx', 'DestinationTemplate.tsx'] });
  destinationSlugs.forEach((slug) => {
    urls.push(urlEntry(`/destinations/${slug}`, { changefreq: 'monthly', priority: 0.7 }));
  });

  // Locations from data file
  const locationsFile = path.join(projectRoot, 'src', 'data', 'locations.ts');
  const locationSlugs = extractSlugsFromFile(locationsFile);
  locationSlugs.forEach((slug) => {
    urls.push(urlEntry(`/locations/${slug}`, { changefreq: 'monthly', priority: 0.7 }));
  });

  // Packages from data file
  const packagesFile = path.join(projectRoot, 'src', 'data', 'packages.ts');
  const packageSlugs = extractSlugsFromFile(packagesFile);
  packageSlugs.forEach((slug) => {
    urls.push(urlEntry(`/packages/${slug}`, { changefreq: 'weekly', priority: 0.8 }));
  });

  // Blog posts from data/blog/*.ts and data/blogPosts.ts
  const blogDir = path.join(projectRoot, 'src', 'data', 'blog');
  let blogSlugs = new Set();
  try {
    const blogFiles = fs.readdirSync(blogDir).filter((f) => f.endsWith('.ts') && f !== 'index.ts');
    blogFiles.forEach((file) => {
      extractSlugsFromFile(path.join(blogDir, file)).forEach((slug) => blogSlugs.add(slug));
    });
  } catch {}
  const legacyBlogFile = path.join(projectRoot, 'src', 'data', 'blogPosts.ts');
  extractSlugsFromFile(legacyBlogFile).forEach((slug) => blogSlugs.add(slug));

  Array.from(blogSlugs).forEach((slug) => {
    urls.push(urlEntry(`/blog/${slug}`, { changefreq: 'monthly', priority: 0.7 }));
  });

  // Deduplicate by loc
  const unique = new Map();
  for (const u of urls) {
    unique.set(u.loc, u);
  }
  return Array.from(unique.values()).sort((a, b) => a.loc.localeCompare(b.loc));
}

function toXml(urls) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n` +
    `        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n` +
    `        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;
  const footer = `</urlset>`;
  const body = urls
    .map((u) => `\n<url>\n  <loc>${u.loc}</loc>\n  <lastmod>${u.lastmod}</lastmod>\n  <changefreq>${u.changefreq}</changefreq>\n  <priority>${u.priority.toFixed(1)}</priority>\n</url>`)
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


