import fs from 'fs';
import path from 'path';
import { getAllRoutes, projectRoot } from './routes.mjs';

function oldExtract(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const slugs = new Set();
  for (const m of content.matchAll(/slug\s*:\s*['"]([^'"\n]+)['"]/g)) slugs.add(m[1]);
  return slugs;
}

const blogDir = path.join(projectRoot, 'src/data/blog');
const old = new Set();
for (const f of fs.readdirSync(blogDir).filter((x) => x.endsWith('.ts') && x !== 'index.ts')) {
  for (const s of oldExtract(path.join(blogDir, f))) old.add(s);
}
const legacy = fs.readFileSync(path.join(projectRoot, 'src/data/blogPosts.ts'), 'utf8');
for (const m of legacy.matchAll(/slug\s*:\s*['"]([^'"\n]+)['"]/g)) old.add(m[1]);

const newly = getAllRoutes()
  .filter((r) => r.startsWith('/blog/'))
  .filter((r) => !old.has(r.replace('/blog/', '')))
  .sort();

console.log('Newly added to sitemap (were missing due to const slug =):');
for (const u of newly) console.log(' +', u);
console.log('count', newly.length);
console.log('total routes', getAllRoutes().length);
