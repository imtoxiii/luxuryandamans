import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://andamanluxury.com';

const routes = [
  '/',
  '/about',
  '/contact',
  '/destinations',
  '/packages',
  '/experiences',
  '/blog',
  '/faq',
  '/travel-guide',
  '/calculator',
  '/privacy',
  '/terms',
  '/sitemap',
  '/destinations/havelock-island',
  '/destinations/neil-island',
  '/destinations/port-blair',
  '/experiences/luxury-beach-resorts',
  '/experiences/scuba-diving',
  '/experiences/island-hopping',
  '/experiences/sunset-cruises',
  '/experiences/wellness-retreats',
  '/packages/luxury-island-escape',
  '/packages/adventure-seeker',
  '/packages/family-paradise',
  '/packages/honeymoon-special'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${routes.map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();