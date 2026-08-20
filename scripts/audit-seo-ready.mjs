/**
 * Pre-resubmit SEO audit — sitemap, routes, social, redirects consistency.
 * Run: node scripts/audit-seo-ready.mjs
 */
import fs from 'fs';
import path from 'path';
import { getAllRoutes, projectRoot } from './routes.mjs';

const issues = [];
const ok = [];

function fail(msg) {
  issues.push(msg);
}
function pass(msg) {
  ok.push(msg);
}

// 1) Routes / sitemap shape
const routes = getAllRoutes();
if (!routes.includes('/')) fail('Missing homepage route');
else pass('Homepage in routes');

const withSlash = routes.filter((r) => r.length > 1 && r.endsWith('/'));
if (withSlash.length) fail(`Routes with trailing slash: ${withSlash.join(', ')}`);
else pass(`All ${routes.length} routes are slash-free (except /)`);

// 2) Noindex blogs must not be in sitemap routes
const config = fs.readFileSync(
  path.join(projectRoot, 'src/data/blog/blogSeoConfig.ts'),
  'utf8'
);
const noindexSlugs = [...config.matchAll(/['"]([^'"]+)['"]\s*:\s*\{[^}]*noindex:\s*true/g)].map(
  (m) => m[1]
);
const leaked = routes.filter((r) => noindexSlugs.some((s) => r === `/blog/${s}`));
if (leaked.length) fail(`Noindex blogs in sitemap routes: ${leaked.join(', ')}`);
else pass(`Noindex blogs excluded from sitemap (${noindexSlugs.length} slugs)`);

// 3) Regenerate sitemap and validate XML
const { execFileSync } = await import('child_process');
execFileSync('node', ['scripts/generate-sitemap.mjs'], {
  cwd: projectRoot,
  stdio: 'pipe',
});
const sitemapPath = path.join(projectRoot, 'public/sitemap.xml');
const xml = fs.readFileSync(sitemapPath, 'utf8');
const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (locs.length !== routes.length) {
  fail(`Sitemap URL count ${locs.length} != routes ${routes.length}`);
} else {
  pass(`Sitemap has ${locs.length} URLs matching routes`);
}

const badHost = locs.filter((u) => !u.startsWith('https://luxuryandamans.com'));
if (badHost.length) fail(`Bad host in sitemap: ${badHost.slice(0, 5).join(', ')}`);
else pass('All sitemap URLs use https://luxuryandamans.com');

const badSlash = locs.filter((u) => u !== 'https://luxuryandamans.com/' && u.endsWith('/'));
if (badSlash.length) fail(`Trailing slash in sitemap: ${badSlash.slice(0, 5).join(', ')}`);
else pass('Sitemap has no trailing-slash URLs (except /)');

const missing = routes.filter((r) => !locs.includes(`https://luxuryandamans.com${r === '/' ? '/' : r}`));
// homepage loc is https://luxuryandamans.com/
const missing2 = routes.filter((r) => {
  const expected = r === '/' ? 'https://luxuryandamans.com/' : `https://luxuryandamans.com${r}`;
  return !locs.includes(expected);
});
if (missing2.length) fail(`Routes missing from sitemap: ${missing2.slice(0, 10).join(', ')}`);
else pass('Every route appears in sitemap.xml');

// 4) Social handles — IG/FB: luxuryandamans (200). X: luxuryandaman (luxuryandamans 404s).
const filesToCheck = [
  'src/components/Footer.tsx',
  'src/components/SEO.tsx',
  'index.html',
];
const deadX = /(?:twitter|x)\.com\/luxuryandamans\b/;
const wrongIgFb = /(?:instagram|facebook)\.com\/luxuryandaman[^s]/;
for (const rel of filesToCheck) {
  const content = fs.readFileSync(path.join(projectRoot, rel), 'utf8');
  if (deadX.test(content)) fail(`Dead X/Twitter @luxuryandamans URL in ${rel}`);
  else if (wrongIgFb.test(content)) fail(`Instagram/Facebook should be luxuryandamans in ${rel}`);
  else pass(`Social handles OK in ${rel}`);
}

const seo = fs.readFileSync(path.join(projectRoot, 'src/components/SEO.tsx'), 'utf8');
if (!seo.includes("twitterHandle = '@luxuryandaman'")) fail('SEO twitterHandle should be @luxuryandaman (live X profile)');
if (!seo.includes('instagram.com/luxuryandamans')) fail('SEO sameAs Instagram wrong');
if (!seo.includes('facebook.com/luxuryandamans')) fail('SEO sameAs Facebook wrong');
if (!seo.includes('x.com/luxuryandaman')) fail('SEO sameAs X should be x.com/luxuryandaman');
if (seo.includes('twitter.com/luxuryandamans') || seo.includes('x.com/luxuryandamans')) {
  fail('SEO sameAs still points at 404 X profile luxuryandamans');
}
if (seo.includes('AggregateRating')) fail('TravelAgency still ships unsupported AggregateRating');
if (seo.includes('/packages?search=')) fail('SearchAction still points at /packages?search=');
else pass('SEO social + SearchAction + no fake AggregateRating');

// 5) Redirect / htaccess essentials
const htaccess = fs.readFileSync(path.join(projectRoot, 'public/.htaccess'), 'utf8');
for (const needle of [
  'DirectorySlash Off',
  'www\\.luxuryandamans\\.com',
  'Strip trailing slash',
  'about/?$',
  'luxury-beach-resorts',
  'index.html',
]) {
  if (!htaccess.includes(needle.replace('\\', '\\')) && !htaccess.match(new RegExp(needle))) {
    // simpler includes for non-regex needles
  }
}
if (!htaccess.includes('DirectorySlash Off')) fail('.htaccess missing DirectorySlash Off');
else pass('.htaccess DirectorySlash Off present');
if (!htaccess.includes('www\\.luxuryandamans\\.com') && !htaccess.includes('www\\.luxuryandamans')) {
  fail('.htaccess missing www→apex redirect');
} else pass('.htaccess www→apex present');
if (!htaccess.includes('^(.+)/$') && !htaccess.includes('^(.+)/$')) {
  // check strip rule
}
if (!/REQUEST_URI.*\^(.+)\//.test(htaccess) && !htaccess.includes('^(.+)/$')) {
  fail('.htaccess missing trailing-slash strip');
} else pass('.htaccess trailing-slash strip present');
if (!htaccess.includes('about/?$')) fail('.htaccess missing /about → /guide');
else pass('.htaccess /about → /guide present');
if (!htaccess.includes('ErrorDocument 404 /404.html')) fail('.htaccess should 404 via /404.html');
else pass('.htaccess ErrorDocument 404 /404.html');
if (htaccess.includes('RewriteRule ^ /index.html [L]') || htaccess.includes('RewriteRule . /index.html [L]')) {
  fail('.htaccess still SPA-fallbacks unknown URLs to /index.html (soft 404s)');
} else pass('.htaccess does not rewrite unknown URLs to homepage');

const redirects = fs.readFileSync(path.join(projectRoot, 'public/_redirects'), 'utf8');
if (!redirects.includes('www.luxuryandamans.com')) fail('_redirects missing www rule');
else pass('_redirects www rule present');
if (!redirects.includes('/*/  /:splat  301!')) fail('_redirects missing trailing-slash strip');
else pass('_redirects trailing-slash strip present');
if (!redirects.includes('/404.html')) fail('_redirects missing 404 fallback');
else pass('_redirects unknown paths → 404.html');

// 6) robots.txt
const robots = fs.readFileSync(path.join(projectRoot, 'public/robots.txt'), 'utf8');
if (!robots.includes('Sitemap: https://luxuryandamans.com/sitemap.xml')) {
  fail('robots.txt sitemap URL wrong');
} else pass('robots.txt points at canonical sitemap');
if (/^Disallow:\s*\/\s*$/m.test(robots)) fail('robots.txt blocks entire site');
else pass('robots.txt does not block site');
if (!robots.includes('Disallow: /spa-shell.html')) fail('robots.txt should block /spa-shell.html');
else pass('robots.txt blocks spa-shell.html');

const legacy = fs.readFileSync(path.join(projectRoot, 'src/lib/legacyRedirects.ts'), 'utf8');
const legacyPairs = [...legacy.matchAll(/['"](\/[^'"]+)['"]\s*:\s*['"](\/[^'"]+)['"]/g)];
for (const [, from, to] of legacyPairs) {
  const htNeedle = from.replace(/^\//, '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (!htaccess.includes(from.replace(/^\//, ''))) {
    fail(`.htaccess missing redirect for ${from}`);
  }
  if (!redirects.includes(from)) fail(`_redirects missing ${from}`);
  if (!redirects.includes(to) && to !== '/guide' && to !== '/blog') {
    // target should appear as destination
  }
}
if (legacyPairs.length) pass(`Legacy redirects synced (${legacyPairs.length} paths in .htaccess + _redirects)`);

// 7) SEO canonical normalization present
if (!seo.includes("replace(/\\/+$/, '')") && !seo.includes('replace(/\\/+$/')) {
  fail('SEO.tsx missing trailing-slash canonical normalize');
} else pass('SEO.tsx normalizes trailing slashes on canonical');

// 8) Blog listing filters noindex
const blogPage = fs.readFileSync(path.join(projectRoot, 'src/pages/Blog.tsx'), 'utf8');
if (!blogPage.includes('!post.noindex') && !blogPage.includes('indexablePosts')) {
  fail('Blog.tsx does not filter noindex posts');
} else pass('Blog.tsx filters noindex posts');

const htmlSitemap = fs.readFileSync(path.join(projectRoot, 'src/pages/Sitemap.tsx'), 'utf8');
if (!htmlSitemap.includes('!p.noindex')) fail('HTML Sitemap still lists noindex posts');
else pass('HTML Sitemap excludes noindex posts');

// Report
console.log('\n=== SEO READY AUDIT ===\n');
for (const m of ok) console.log('✓', m);
if (issues.length) {
  console.log('\nFAILURES:');
  for (const m of issues) console.log('✗', m);
  console.log(`\nResult: ${issues.length} issue(s) — fix before resubmit`);
  process.exit(1);
}
console.log(`\nResult: ALL CLEAR — ${ok.length} checks passed`);
console.log(`Sitemap ready: ${locs.length} URLs at public/sitemap.xml`);
console.log('Resubmit: https://luxuryandamans.com/sitemap.xml');
