/**
 * Sitemap Generator for Destination Pages
 * Generates XML sitemap entries for all destination pages with proper priorities and change frequencies
 */

import { destinations } from '../data/destinations';

export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  images?: Array<{
    loc: string;
    title?: string;
    caption?: string;
  }>;
}

/**
 * Get priority based on destination category and popularity
 */
function getDestinationPriority(destination: typeof destinations[0]): number {
  // Port Blair destinations - highest priority (capital city)
  if (destination.category === 'port-blair') return 0.9;
  
  // Havelock destinations - very high priority (most popular)
  if (destination.category === 'havelock') return 0.95;
  
  // Neil Island destinations - high priority
  if (destination.category === 'neil') return 0.85;
  
  // Baratang destinations - medium-high priority
  if (destination.category === 'baratang') return 0.75;
  
  // Other destinations - medium priority
  return 0.7;
}

/**
 * Get change frequency based on destination type
 */
function getChangeFrequency(destination: typeof destinations[0]): SitemapEntry['changefreq'] {
  // Popular tourist spots get updated more frequently
  if (destination.category === 'port-blair' || destination.category === 'havelock') {
    return 'weekly';
  }
  
  // Other destinations update monthly
  return 'monthly';
}

/**
 * Generate sitemap entries for all destinations
 */
export function generateDestinationSitemapEntries(): SitemapEntry[] {
  const baseUrl = 'https://luxuryandamans.com';
  const lastmod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  return destinations.map(destination => ({
    url: `${baseUrl}/destinations/${destination.slug}`,
    lastmod,
    changefreq: getChangeFrequency(destination),
    priority: getDestinationPriority(destination),
    images: destination.gallery?.map(img => ({
      loc: img.url,
      title: `${destination.name} - ${img.caption}`,
      caption: img.caption,
    })) || [],
  }));
}

/**
 * Generate sitemap entries for destination category pages
 */
export function generateDestinationCategorySitemapEntries(): SitemapEntry[] {
  const baseUrl = 'https://luxuryandamans.com';
  const lastmod = new Date().toISOString().split('T')[0];
  
  const categories = [
    { slug: 'port-blair-destinations', priority: 0.9, name: 'Port Blair' },
    { slug: 'havelock-destinations', priority: 0.95, name: 'Havelock Island' },
    { slug: 'neil-destinations', priority: 0.85, name: 'Neil Island' },
    { slug: 'baratang-destinations', priority: 0.75, name: 'Baratang' },
    { slug: 'north-andaman-destinations', priority: 0.7, name: 'North Andaman' },
  ];
  
  return categories.map(category => ({
    url: `${baseUrl}/destinations/${category.slug}`,
    lastmod,
    changefreq: 'weekly' as const,
    priority: category.priority,
  }));
}

/**
 * Generate complete sitemap XML for destinations
 */
export function generateDestinationSitemapXML(): string {
  const destinationEntries = generateDestinationSitemapEntries();
  const categoryEntries = generateDestinationCategorySitemapEntries();
  const allEntries = [...categoryEntries, ...destinationEntries];
  
  const urlsetEntries = allEntries.map(entry => {
    const imageEntries = entry.images?.map(img => `
      <image:image>
        <image:loc>${img.loc}</image:loc>
        ${img.title ? `<image:title>${escapeXml(img.title)}</image:title>` : ''}
        ${img.caption ? `<image:caption>${escapeXml(img.caption)}</image:caption>` : ''}
      </image:image>`).join('') || '';
    
    return `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>${imageEntries}
  </url>`;
  }).join('');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlsetEntries}
</urlset>`;
}

/**
 * Helper function to escape XML special characters
 */
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

/**
 * Get destination statistics for monitoring
 */
export function getDestinationSitemapStats() {
  const destinations = generateDestinationSitemapEntries();
  const categories = generateDestinationCategorySitemapEntries();
  
  return {
    totalDestinations: destinations.length,
    totalCategories: categories.length,
    totalUrls: destinations.length + categories.length,
    totalImages: destinations.reduce((sum, dest) => sum + (dest.images?.length || 0), 0),
    byCategory: {
      'port-blair': destinations.filter(d => d.url.includes('port-blair')).length,
      'havelock': destinations.filter(d => d.url.includes('havelock') || d.url.includes('radhanagar') || d.url.includes('elephant')).length,
      'neil': destinations.filter(d => d.url.includes('neil') || d.url.includes('bharatpur') || d.url.includes('natural-bridge')).length,
      'baratang': destinations.filter(d => d.url.includes('baratang') || d.url.includes('limestone') || d.url.includes('mud-volcano')).length,
      'other': destinations.filter(d => 
        !d.url.includes('port-blair') && 
        !d.url.includes('havelock') && 
        !d.url.includes('radhanagar') && 
        !d.url.includes('elephant') &&
        !d.url.includes('neil') && 
        !d.url.includes('bharatpur') && 
        !d.url.includes('natural-bridge') &&
        !d.url.includes('baratang') && 
        !d.url.includes('limestone') && 
        !d.url.includes('mud-volcano')
      ).length,
    },
  };
}

/**
 * Generate robots.txt entries for destination pages
 */
export function generateDestinationRobotsTxt(): string {
  return `# Destination Pages
Sitemap: https://luxuryandamans.com/destinations-sitemap.xml

# Allow all destination pages
Allow: /destinations/*

# High-priority destinations for crawling
Crawl-delay: 0
User-agent: Googlebot
Allow: /destinations/cellular-jail
Allow: /destinations/radhanagar-beach
Allow: /destinations/elephant-beach
Allow: /destinations/ross-island
Allow: /destinations/north-bay-island
`;
}
