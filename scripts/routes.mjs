import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const projectRoot = path.resolve(__dirname, '..');

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
 * Extract slugs from a TS file.
 * Supports both:
 *   slug: 'my-slug'
 *   const slug = 'my-slug'   (shorthand property later)
 */
function extractSlugsFromFile(filePath) {
  const content = readFileSafe(filePath);
  if (!content) return [];
  const slugs = new Set();
  const patterns = [
    /slug\s*:\s*['"]([^'"\n]+)['"]/g,
    /\b(?:const|let|var)\s+slug\s*=\s*['"]([^'"\n]+)['"]/g,
  ];
  for (const regex of patterns) {
    let match;
    while ((match = regex.exec(content)) !== null) {
      if (match[1]) slugs.add(match[1].trim());
    }
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
 * Slugs marked noindex in blogSeoConfig.ts — excluded from sitemap.xml
 */
function getNoindexBlogSlugs() {
  const configFile = path.join(projectRoot, 'src', 'data', 'blog', 'blogSeoConfig.ts');
  const content = readFileSafe(configFile);
  if (!content) return [];
  const slugs = [];
  const regex = /['"]([^'"]+)['"]\s*:\s*\{[^}]*noindex:\s*true/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

/**
 * One source of truth — do not duplicate route discovery elsewhere.
 */
export function getAllRoutes() {
  const routes = new Set();

  // Main pages
  [
    '/',
    '/packages',
    '/destinations',
    '/experiences',
    '/blog',
    '/enquiry',
    '/calculator',
    '/contact',
    '/guide',
    '/travel-guide',
    '/faq',
    '/privacy',
    '/terms',
    '/sitemap',
    '/offer',
  ].forEach((r) => routes.add(r));

  // Experiences pages from directory
  const experiencesDir = path.join(projectRoot, 'src', 'pages', 'experiences');
  const experienceSlugs = listSlugsFromDir(experiencesDir);
  experienceSlugs.forEach((slug) => {
    routes.add(`/experiences/${slug}`);
  });

  // Destination static pages from directory
  // Exclude helpers / dynamic wrappers (not real URL slugs)
  const destinationsDir = path.join(projectRoot, 'src', 'pages', 'destinations');
  const destinationSlugs = listSlugsFromDir(destinationsDir, {
    exclude: [
      '[slug].tsx',
      'DestinationTemplate.tsx',
      'DestinationDetailEnhanced.tsx',
    ],
  });
  destinationSlugs.forEach((slug) => {
    let finalSlug = slug;
    if (slug === 'PortBlairDestinations') finalSlug = 'port-blair-destinations';
    if (slug === 'HavelockDestinations') finalSlug = 'havelock-destinations';
    if (slug === 'NeilDestinations') finalSlug = 'neil-destinations';
    if (slug === 'BaratangDestinations') finalSlug = 'baratang-destinations';

    routes.add(`/destinations/${finalSlug}`);
  });

  // Locations from data file
  const locationsFile = path.join(projectRoot, 'src', 'data', 'locations.ts');
  extractSlugsFromFile(locationsFile).forEach((slug) => {
    routes.add(`/locations/${slug}`);
  });

  // Packages from data file and data/packages directory
  const packagesDir = path.join(projectRoot, 'src', 'data', 'packages');
  const packageSlugs = new Set();

  try {
    if (fs.existsSync(packagesDir)) {
      const packageFiles = fs.readdirSync(packagesDir).filter((f) => f.endsWith('.ts'));
      packageFiles.forEach((file) => {
        extractSlugsFromFile(path.join(packagesDir, file)).forEach((s) => packageSlugs.add(s));
      });
    }
  } catch (e) {
    console.warn('Could not read packages directory:', e.message);
  }

  const packagesFile = path.join(projectRoot, 'src', 'data', 'packages.ts');
  extractSlugsFromFile(packagesFile).forEach((s) => packageSlugs.add(s));

  Array.from(packageSlugs).forEach((slug) => {
    routes.add(`/packages/${slug}`);
  });

  // Blog posts from data/blog/*.ts and data/blogPosts.ts
  const blogDir = path.join(projectRoot, 'src', 'data', 'blog');
  const blogSlugs = new Set();
  try {
    const blogFiles = fs.readdirSync(blogDir).filter((f) => f.endsWith('.ts') && f !== 'index.ts');
    blogFiles.forEach((file) => {
      extractSlugsFromFile(path.join(blogDir, file)).forEach((slug) => blogSlugs.add(slug));
    });
  } catch {
    // optional dir
  }
  const legacyBlogFile = path.join(projectRoot, 'src', 'data', 'blogPosts.ts');
  extractSlugsFromFile(legacyBlogFile).forEach((slug) => blogSlugs.add(slug));

  Array.from(blogSlugs).forEach((slug) => {
    if (!getNoindexBlogSlugs().includes(slug)) {
      routes.add(`/blog/${slug}`);
    }
  });

  // Redirect-only routes are intentionally omitted (/about, /experiences/luxury-beach-resorts)

  return Array.from(routes).sort((a, b) => a.localeCompare(b));
}
