import { getAllRoutes } from './routes.mjs';
import fs from 'fs';
import path from 'path';
import { projectRoot } from './routes.mjs';

const routes = new Set(getAllRoutes());
const config = fs.readFileSync(
  path.join(projectRoot, 'src/data/blog/blogSeoConfig.ts'),
  'utf8'
);

// Collect all blog slugs from data
const blogSlugs = new Set();
const blogDir = path.join(projectRoot, 'src/data/blog');
for (const f of fs.readdirSync(blogDir).filter((x) => x.endsWith('.ts'))) {
  const c = fs.readFileSync(path.join(blogDir, f), 'utf8');
  for (const m of c.matchAll(/slug\s*:\s*['"]([^'"]+)['"]/g)) blogSlugs.add(m[1]);
}
const legacy = fs.readFileSync(path.join(projectRoot, 'src/data/blogPosts.ts'), 'utf8');
for (const m of legacy.matchAll(/slug\s*:\s*['"]([^'"]+)['"]/g)) blogSlugs.add(m[1]);

const entries = [...config.matchAll(/['"]([^'"]+)['"]\s*:\s*\{([^}]+)\}/g)];
let broken = 0;
for (const m of entries) {
  const slug = m[1];
  const body = m[2];
  if (!body.includes('noindex: true')) continue;
  const can = body.match(/canonicalSlug:\s*['"]([^'"]+)['"]/);
  if (!can) {
    console.log('noindex, no canonical:', slug);
    continue;
  }
  const target = can[1];
  const inRoutes = routes.has(`/blog/${target}`);
  const inBlog = blogSlugs.has(target);
  const status = inRoutes ? 'OK (in sitemap)' : inBlog ? 'WARN (exists but noindex/missing from sitemap)' : 'BROKEN';
  if (status.startsWith('BROKEN') || status.startsWith('WARN')) broken++;
  console.log(`${status}: ${slug} -> ${target}`);
}
console.log(broken === 0 ? '\nAll canonical targets OK' : `\nIssues: ${broken}`);
process.exit(broken ? 1 : 0);
