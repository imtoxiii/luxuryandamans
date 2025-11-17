/**
 * Image Loader Utility
 * Dynamically loads images from package folders with nested hotel structure
 * 
 * Folder Structure:
 * packages/
 *   [package-slug]/
 *     hero/           - 1.jpg, 2.jpg, 3.jpg...
 *     gallery/        - 1.jpg, 2.jpg, 3.jpg...
 *     highlights/     - scuba-diving.jpg, beach.jpg...
 *     hotels/
 *       3-star/       - Hotel category folders
 *         [hotel-name]/  - Individual hotel folders
 *           1.jpg, 2.jpg, 3.jpg...
 *       4-star/
 *         [hotel-name]/
 *       5-star/
 *         [hotel-name]/
 *       standard/
 *         [hotel-name]/
 *       deluxe/
 *         [hotel-name]/
 *       luxury/
 *         [hotel-name]/
 */

export type HotelCategory = '3-star' | '4-star' | '5-star' | 'standard' | 'deluxe' | 'luxury' | 'budget';

export interface HotelImageSet {
  hotelName: string;
  category: HotelCategory;
  images: string[];
  thumbnail: string; // First image
}

export interface PackageImages {
  hero: string[];
  gallery: string[];
  highlights: Record<string, string>;
  hotels: HotelImageSet[];
}

/**
 * Slugify a string for use in file paths
 */
const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
};

/**
 * Get all images from a package folder
 * @param packageSlug - The package slug (e.g., 'honeymoon-5n6d')
 * @returns Object containing arrays of image paths
 */
export const getPackageImages = (packageSlug: string): PackageImages => {
  const basePath = `/images/packages/${packageSlug}`;
  
  // Default images structure
  const images: PackageImages = {
    hero: [],
    gallery: [],
    highlights: {},
    hotels: []
  };

  // Try to load hero images (1.jpg, 2.jpg, etc.)
  for (let i = 1; i <= 20; i++) {
    images.hero.push(`${basePath}/hero/${i}.jpg`);
  }

  // Try to load gallery images
  for (let i = 1; i <= 30; i++) {
    images.gallery.push(`${basePath}/gallery/${i}.jpg`);
  }

  return images;
};

/**
 * Get hotel images by category and hotel name
 * @param packageSlug - The package slug
 * @param category - Hotel category (3-star, 4-star, 5-star, standard, deluxe, luxury, budget)
 * @param hotelName - Name of the hotel (will be slugified)
 * @param maxImages - Maximum number of images to try loading (default: 20)
 * @returns Array of hotel image paths
 */
export const getHotelImages = (
  packageSlug: string,
  category: HotelCategory,
  hotelName: string,
  maxImages: number = 20
): string[] => {
  const hotelSlug = slugify(hotelName);
  const basePath = `/images/packages/${packageSlug}/hotels/${category}/${hotelSlug}`;
  const images: string[] = [];
  
  // Try to load images with numeric names
  for (let i = 1; i <= maxImages; i++) {
    images.push(`${basePath}/${i}.jpg`);
  }
  
  return images;
};

/**
 * Get hotel image set with metadata
 * @param packageSlug - The package slug
 * @param category - Hotel category
 * @param hotelName - Name of the hotel
 * @returns HotelImageSet with images and metadata
 */
export const getHotelImageSet = (
  packageSlug: string,
  category: HotelCategory,
  hotelName: string
): HotelImageSet => {
  const images = getHotelImages(packageSlug, category, hotelName);
  
  return {
    hotelName,
    category,
    images,
    thumbnail: images[0] // First image as thumbnail
  };
};

/**
 * Get all hotels from a specific category
 * This scans for hotel folders within a category
 * @param packageSlug - The package slug
 * @param category - Hotel category to scan
 * @param hotelNames - Array of hotel names to load (you provide these based on your folder names)
 * @returns Array of HotelImageSet
 */
export const getHotelsByCategory = (
  packageSlug: string,
  category: HotelCategory,
  hotelNames: string[]
): HotelImageSet[] => {
  return hotelNames.map(hotelName => 
    getHotelImageSet(packageSlug, category, hotelName)
  );
};

/**
 * Get room type images within a hotel
 * @param packageSlug - The package slug
 * @param category - Hotel category
 * @param hotelName - Name of the hotel
 * @param roomType - Room type (standard, deluxe, suite, etc.)
 * @param maxImages - Maximum number of images to try loading
 * @returns Array of room image paths
 */
export const getRoomTypeImages = (
  packageSlug: string,
  category: HotelCategory,
  hotelName: string,
  roomType: string,
  maxImages: number = 10
): string[] => {
  const hotelSlug = slugify(hotelName);
  const roomSlug = slugify(roomType);
  const basePath = `/images/packages/${packageSlug}/hotels/${category}/${hotelSlug}/${roomSlug}`;
  const images: string[] = [];
  
  // Try to load room type specific images
  for (let i = 1; i <= maxImages; i++) {
    images.push(`${basePath}/${i}.jpg`);
  }
  
  return images;
};

/**
 * Get hero images for slideshow
 * @param packageSlug - The package slug
 * @returns Array of hero image paths
 */
export const getHeroImages = (packageSlug: string): string[] => {
  const basePath = `/images/packages/${packageSlug}/hero`;
  const heroImages: string[] = [];
  
  // Try to load up to 20 hero images
  for (let i = 1; i <= 20; i++) {
    heroImages.push(`${basePath}/${i}.jpg`);
  }
  
  return heroImages;
};

/**
 * Get gallery images
 * @param packageSlug - The package slug
 * @returns Array of gallery image paths
 */
export const getGalleryImages = (packageSlug: string): string[] => {
  const basePath = `/images/packages/${packageSlug}/gallery`;
  const galleryImages: string[] = [];
  
  // Try to load up to 30 gallery images
  for (let i = 1; i <= 30; i++) {
    galleryImages.push(`${basePath}/${i}.jpg`);
  }
  
  return galleryImages;
};

/**
 * Get highlight image by name
 * @param packageSlug - The package slug
 * @param highlightName - The highlight name (will be slugified)
 * @returns Image path
 */
export const getHighlightImage = (packageSlug: string, highlightName: string): string => {
  const slug = slugify(highlightName);
  return `/images/packages/${packageSlug}/highlights/${slug}.jpg`;
};

/**
 * Get the main package card image (first hero image)
 * @param packageSlug - The package slug
 * @returns Path to the main package card image
 */
export const getPackageCardImage = (packageSlug: string): string => {
  return `/images/packages/${packageSlug}/hero/1.jpg`;
};

/**
 * Preload images for better performance
 * @param imagePaths - Array of image paths to preload
 */
export const preloadImages = (imagePaths: string[]): void => {
  imagePaths.forEach(path => {
    const img = new Image();
    img.src = path;
  });
};

/**
 * Check if image exists (client-side)
 * @param imageUrl - URL of the image to check
 * @returns Promise that resolves to true if image exists, false otherwise
 */
export const imageExists = (imageUrl: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = imageUrl;
  });
};

/**
 * Filter out non-existent images from an array
 * @param imagePaths - Array of image paths
 * @returns Promise that resolves to array of existing image paths
 */
export const filterExistingImages = async (imagePaths: string[]): Promise<string[]> => {
  const results = await Promise.all(
    imagePaths.map(async (path) => {
      const exists = await imageExists(path);
      return exists ? path : null;
    })
  );
  return results.filter((path): path is string => path !== null);
};
