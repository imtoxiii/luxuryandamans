/**
 * Hotel Configuration
 * Define which hotels to load for this package
 * 
 * Add hotel names exactly as they appear in folder names
 * The system will automatically slugify them
 */

export interface HotelConfig {
  category: '3-star' | '4-star' | '5-star' | 'standard' | 'deluxe' | 'luxury' | 'budget';
  hotels: string[];
}

// Define your hotels for this package
export const hotelConfig: HotelConfig[] = [
  {
    category: '4-star',
    hotels: [
      'Symphony Palms Beach Resort',
      'Sea Shell Resort Havelock',
      'Silver Sand Beach Resort',
      'TSG Blue Resort'
    ]
  },
  {
    category: '5-star',
    hotels: [
      'Taj Exotica Resort & Spa',
      'Barefoot at Havelock',
      'Munjoh Ocean Resort'
    ]
  },
  {
    category: '3-star',
    hotels: [
      'Dolphin Resort Havelock',
      'Wild Orchid Beach Resort'
    ]
  }
];

/**
 * Room types available across hotels
 * Add custom room types here
 */
export const roomTypes = [
  'Standard Room',
  'Deluxe Room',
  'Super Deluxe',
  'Premium Suite',
  'Ocean View Suite',
  'Family Suite'
];

/**
 * How to use:
 * 1. Add hotel names to the arrays above
 * 2. Create folders in: /hotels/[category]/[hotel-slug]/
 * 3. Add images with names: 1.jpg, 2.jpg, 3.jpg, etc.
 * 4. Optionally add room type subfolders
 * 
 * Example structure:
 * hotels/
 *   4-star/
 *     symphony-palms-beach-resort/
 *       1.jpg (featured image)
 *       2.jpg
 *       3.jpg
 *       standard-room/
 *         1.jpg
 *         2.jpg
 *       deluxe-room/
 *         1.jpg
 *         2.jpg
 */
