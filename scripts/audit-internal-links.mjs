/**
 * Find broken internal links, unresolved relatedPosts, and prerender tag issues.
 * Run: node scripts/audit-internal-links.mjs
 */
import fs from 'fs';
import path from 'path';
import { getAllRoutes, projectRoot } from './routes.mjs';

const issues = [];
const warns = [];
const ok = [];

function walk(dir, pred, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      if (name === 'node_modules' || name === 'dist') continue;
      walk(full, pred, acc);
    } else if (pred(name)) acc.push(full);
  }
  return acc;
}

const routes = new Set(getAllRoutes());
routes.add('/404');

// Live blog slugs (including noindex — they still 200)
const blogSlugs = new Set();
const blogDir = path.join(projectRoot, 'src', 'data', 'blog');
const blogFiles = walk(blogDir, (n) => n.endsWith('.ts'));
blogFiles.push(path.join(projectRoot, 'src', 'data', 'blogPosts.ts'));

const relatedByFile = [];
for (const file of blogFiles) {
  if (!fs.existsSync(file)) continue;
  const c = fs.readFileSync(file, 'utf8');
  for (const m of c.matchAll(/(?:slug\s*:\s*|const slug =\s*)['"]([^'"]+)['"]/g)) {
    blogSlugs.add(m[1]);
    routes.add(`/blog/${m[1]}`);
  }
  const rel = c.match(/relatedPosts\s*:\s*\[([\s\S]*?)\]/);
  if (rel) {
    const ids = [...rel[1].matchAll(/['"]([^'"]+)['"]/g)].map((x) => x[1]);
    relatedByFile.push({ file: path.relative(projectRoot, file), ids });
  }
}

const aliasFile = fs.readFileSync(path.join(projectRoot, 'src/data/blog/blogSeoConfig.ts'), 'utf8');
const aliases = {};
const aliasBlock = aliasFile.match(/relatedPostAliases[^=]*=\s*\{([\s\S]*?)\};/);
if (aliasBlock) {
  for (const m of aliasBlock[1].matchAll(/['"]([^'"]+)['"]\s*:\s*['"]([^'"]+)['"]/g)) {
    aliases[m[1]] = m[2];
  }
}

const legacyFile = fs.readFileSync(path.join(projectRoot, 'src/lib/legacyRedirects.ts'), 'utf8');
const redirectTargets = new Set();
const redirectSources = new Set();
for (const m of legacyFile.matchAll(/['"](\/[^'"]+)['"]\s*:\s*['"](\/[^'"]+)['"]/g)) {
  redirectSources.add(m[1]);
  redirectTargets.add(m[2]);
}

function normalizePath(raw) {
  let p = raw.split('#')[0].split('?')[0];
  if (!p) return null;
  if (p.includes('${') || p.includes('{')) return null;
  if (p.startsWith('http')) {
    if (p.startsWith('https://luxuryandamans.com')) {
      p = p.replace('https://luxuryandamans.com', '') || '/';
    } else return null;
  }
  if (!p.startsWith('/')) return null;
  p = p.replace(/[.,;:)\]}'"`]+$/g, '');
  if (p.length > 1) p = p.replace(/\/+$/, '');
  if (!p || p === '/' ) return p || '/';
  if (!/^\/[a-zA-Z0-9/_-]+$/.test(p)) return null;
  return p;
}

function isOk(p) {
  if (!p) return true;
  if (routes.has(p) || redirectSources.has(p) || redirectTargets.has(p)) return true;
  if (p.startsWith('/blog/') && blogSlugs.has(p.slice(6))) return true;
  // static public assets
  if (/\.(png|jpe?g|webp|svg|gif|ico|xml|txt|json|woff2?|css|js)$/i.test(p)) return true;
  if (p.startsWith('/images/') || p.startsWith('/fonts/') || p.startsWith('/assets/')) return true;
  return false;
}

// Collect links from ts/tsx
const srcFiles = walk(path.join(projectRoot, 'src'), (n) => /\.(tsx|ts)$/.test(n));
const linkHits = [];
for (const file of srcFiles) {
  const c = fs.readFileSync(file, 'utf8');
  const rel = path.relative(projectRoot, file);
  for (const m of c.matchAll(/(?:to|href)\s*=\s*['"](\/[^'"]+)['"]/g)) {
    linkHits.push({ file: rel, href: m[1] });
  }
  for (const m of c.matchAll(/\]\((\/[^)]+)\)/g)) {
    linkHits.push({ file: rel, href: m[1] });
  }
  for (const m of c.matchAll(/luxuryandamans\.com(\/[^\s"'<>)\\]+)/g)) {
    linkHits.push({ file: rel, href: m[1] });
  }
}

const brokenLinks = [];
for (const { file, href } of linkHits) {
  const p = normalizePath(href);
  if (!isOk(p)) brokenLinks.push({ file, href: p });
}

if (brokenLinks.length) {
  issues.push(`Broken internal links (${brokenLinks.length}):`);
  for (const b of brokenLinks.slice(0, 40)) issues.push(`  ${b.file} → ${b.href}`);
} else ok.push(`All ${linkHits.length} extracted internal links resolve`);

// relatedPosts
let missingRelated = 0;
for (const { file, ids } of relatedByFile) {
  for (const id of ids) {
    const key = aliases[id] || id;
    const found = blogSlugs.has(key) || blogSlugs.has(id);
    if (!found) {
      missingRelated++;
      issues.push(`relatedPosts miss: ${file} → ${id}`);
    }
  }
}
if (!missingRelated) ok.push('All relatedPosts ids resolve to a live slug (or alias)');

// Redirect targets exist
for (const t of redirectTargets) {
  if (!routes.has(t) && t !== '/blog' && t !== '/guide' && !blogSlugs.has(t.replace('/blog/', ''))) {
    issues.push(`Redirect target missing: ${t}`);
  }
}
ok.push('Legacy redirect targets checked');

// Prerender HTML checks
const dist = path.join(projectRoot, 'dist');
if (!fs.existsSync(dist)) {
  warns.push('dist/ missing — run npm run build before deploy');
} else {
  const htmlFiles = [];
  function walkHtml(dir) {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      const st = fs.statSync(full);
      if (st.isDirectory()) walkHtml(full);
      else if (name === 'index.html' || name === '404.html') htmlFiles.push(full);
    }
  }
  walkHtml(dist);

  let dupTitle = 0;
  let dupCanon = 0;
  let emptyRoot = 0;
  let missingCanon = 0;
  const samples = [];

  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, 'utf8');
    const titles = [...html.matchAll(/<title[^>]*>([^<]*)<\/title>/gi)];
    const canons = [...html.matchAll(/rel=["']canonical["'][^>]*href=["']([^"']+)["']/gi)];
    const rel = path.relative(dist, file).replace(/\\/g, '/');

    if (titles.length > 1) {
      const unique = new Set(titles.map((t) => t[1].trim()));
      if (unique.size > 1) {
        dupTitle++;
        if (samples.length < 8) samples.push(`dup title ${rel}: ${[...unique].join(' || ')}`);
      }
    }
    if (canons.length > 1) {
      const unique = new Set(canons.map((t) => t[1]));
      if (unique.size > 1) {
        dupCanon++;
        if (samples.length < 8) samples.push(`dup canonical ${rel}: ${[...unique].join(' || ')}`);
      }
    }
    if (!canons.length && !rel.includes('404')) missingCanon++;
    if (!/<div id="root"[^>]*>[\s\S]{80,}/.test(html) && rel !== 'index.html') {
      // homepage still has content in shell; inner pages need prerendered root
      if (!html.includes('min-h-screen') && !html.includes('font-sans')) emptyRoot++;
    }
    const robotsNoindex = /name=["']robots["'][^>]*noindex/i.test(html);
    const googleIndex = /name=["']googlebot["'][^>]*content=["'][^"']*index,\s*follow/i.test(html);
    if (robotsNoindex && googleIndex) {
      issues.push(`googlebot index conflicts with robots noindex: ${rel}`);
    }
  }

  if (dupTitle) issues.push(`Conflicting <title> tags in ${dupTitle} HTML files`);
  else ok.push(`No conflicting titles in ${htmlFiles.length} prerendered HTML files`);
  if (dupCanon) issues.push(`Conflicting canonicals in ${dupCanon} HTML files`);
  else ok.push('No conflicting canonical hrefs in prerendered HTML');
  if (missingCanon) warns.push(`${missingCanon} HTML files missing canonical`);
  if (emptyRoot) issues.push(`${emptyRoot} prerendered pages look empty (Googlebot risk)`);
  else ok.push('Prerendered pages contain rendered body HTML');
  for (const s of samples) warns.push(s);

  // Spot-check new URLs exist as files
  const must = [
    'blog/andaman-from-singapore-2026/index.html',
    'blog/havelock-island-travel-guide-2026/index.html',
    'blog/india-evisa-andaman-trip-2026/index.html',
    '404.html',
  ];
  for (const m of must) {
    if (fs.existsSync(path.join(dist, m))) ok.push(`dist/${m} exists`);
    else issues.push(`Missing prerender file dist/${m}`);
  }

  const missingPages = getAllRoutes().filter((route) => {
    const file =
      route === '/'
        ? path.join(dist, 'index.html')
        : path.join(dist, ...route.replace(/^\//, '').split('/'), 'index.html');
    return !fs.existsSync(file);
  });
  if (missingPages.length) {
    issues.push(
      `Sitemap routes missing prerender HTML (${missingPages.length}): ${missingPages.slice(0, 8).join(', ')}`
    );
  } else {
    ok.push('Every sitemap URL has prerendered HTML in dist/');
  }
}

console.log('\n=== INTERNAL LINK / CRAWL AUDIT ===\n');
for (const m of ok) console.log('✓', m);
if (warns.length) {
  console.log('\nWARNINGS:');
  for (const m of warns) console.log('!', m);
}
if (issues.length) {
  console.log('\nFAILURES:');
  for (const m of issues) console.log('✗', m);
  process.exit(1);
}
console.log('\nResult: ALL CLEAR');
process.exit(0);
