
// Import all images from src/assets/images/destinations
// We use a glob pattern to match all image files within the destinations folder structure
// eager: true returns the module directly. We want the URL.
// In Vite, for assets, the default export of the module is the URL string.
const destinationImagesGlob = import.meta.glob('/src/assets/images/destinations/**/*.{jpg,jpeg,png,webp}', { eager: true });

/**
 * Get all images for a specific destination slug
 * @param slug The destination slug (folder name)
 * @returns Array of image URLs
 */
export const getDestinationImages = (slug: string): string[] => {
  const images: string[] = [];
  // Normalize slug to lowercase just in case
  const normalizedSlug = slug.toLowerCase();
  
  // We look for the slug segment in the path. 
  // The path keys from import.meta.glob are usually like "/src/assets/images/destinations/slug/image.jpg"
  const slugSegment = `/destinations/${normalizedSlug}/`;

  for (const path in destinationImagesGlob) {
    if (path.toLowerCase().includes(slugSegment)) {
      const module = destinationImagesGlob[path] as { default: string };
      if (module && module.default) {
        images.push(module.default);
      } else if (typeof destinationImagesGlob[path] === 'string') {
        // Fallback if configured to return strings directly
        images.push(destinationImagesGlob[path] as unknown as string);
      }
    }
  }
  
  // Sort images to ensure consistent order (e.g. by filename)
  images.sort();
  
  if (images.length === 0 && import.meta.env.DEV) {
    console.warn(`[getDestinationImages] No images found for slug: ${slug}. Checked path segment: ${slugSegment}`);
  }

  return images;
};

/**
 * Get a mapping of all destination slugs to their images
 * @returns Record<slug, images[]>
 */
export const getAllDestinationImages = (): Record<string, string[]> => {
  const mapping: Record<string, string[]> = {};
  
  for (const path in destinationImagesGlob) {
    // Extract slug from path: .../destinations/<slug>/<filename>
    const parts = path.split('/');
    const destIndex = parts.findIndex(p => p === 'destinations');
    
    if (destIndex !== -1 && parts.length > destIndex + 2) {
      const slug = parts[destIndex + 1];
      if (!mapping[slug]) {
        mapping[slug] = [];
      }
      
      const module = destinationImagesGlob[path] as { default: string };
      if (module && module.default) {
        mapping[slug].push(module.default);
      } else if (typeof destinationImagesGlob[path] === 'string') {
        mapping[slug].push(destinationImagesGlob[path] as unknown as string);
      }
    }
  }
  
  return mapping;
};

/**
 * Get a specific highlight image for a destination
 * @param slug The destination slug
 * @param highlightTitle The title of the highlight
 * @param index The index of the highlight (0-based)
 * @param fallbackUrl The fallback URL if no image is found
 * @returns The resolved image URL
 */
export const getHighlightImage = (slug: string, highlightTitle: string, index: number, fallbackUrl: string): string => {
  const images = getDestinationImages(slug);
  
  if (images.length === 0) return fallbackUrl;

  // 1. Try to match by title (normalized)
  // e.g. title "National Memorial" -> look for "national-memorial" or "national_memorial"
  const normalizedTitle = highlightTitle.toLowerCase().replace(/[^a-z0-9]/g, '');
  const titleMatch = images.find(img => {
    const imgName = img.split('/').pop()?.toLowerCase().replace(/[^a-z0-9]/g, '') || '';
    return imgName.includes(normalizedTitle);
  });
  
  if (titleMatch) return titleMatch;

  // 2. Try to match by index convention: highlight-1.jpg, highlight_1.jpg, etc.
  // We look for "highlight" and the index number (1-based)
  const indexMatch = images.find(img => {
    const lower = img.toLowerCase();
    return lower.includes('highlight') && (lower.includes(`${index + 1}`) || lower.includes(`-${index + 1}`) || lower.includes(`_${index + 1}`));
  });

  if (indexMatch) return indexMatch;

  // 3. Fallback to the original URL if it's not empty and not a placeholder
  if (fallbackUrl && !fallbackUrl.includes('unsplash')) return fallbackUrl;

  // 4. Last resort: return a random image from the folder to ensure we show SOMETHING from the destination
  // Use index modulo length to consistently pick an image
  return images[index % images.length] || fallbackUrl;
};
