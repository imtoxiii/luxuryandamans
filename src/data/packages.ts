// Import individual package files
// Honeymoon Packages
import { honeymoon5n6d } from './packages/honeymoon-5n6d';
import { honeymoon4n5d } from './packages/honeymoon-4n5d';
import { romanticHideaway } from './packages/romantic-hideaway';
import { luxuryHoneymoon } from './packages/luxury-honeymoon';

// Luxury Packages
import { luxuryEscape } from './packages/luxury-escape';
import { luxury4n5d } from './packages/luxury-4n5d';
import { ultimateAdventure } from './packages/ultimate-adventure';
import { adventureThrill } from './packages/adventure-thrill';

// Family Packages
import { familyParadise } from './packages/family-paradise';
import { family4n5d } from './packages/family-4n5d';
import { grandAndaman } from './packages/grand-andaman';

// Standard Package
import { standardAndaman } from './packages/standard-andaman';

export interface Hotel {
  name: string;
  location: string;
  rating: number;
  image: string;
  amenities: string[];
  description: string;
  starCategory?: 3 | 4 | 5;
  images?: string[];
  roomTypes?: {
    name: string;
    code?: string;
    pricePerNight?: number;
    description?: string;
    maxOccupancy?: number;
  }[];
}

export interface PricingOption {
  days: number;
  pricePerPerson: number;
  title: string;
}

export interface Supplement {
  name: string;
  price: number;
  description: string;
  availability: string[];
}

export interface Package {
  title: string;
  description: string;
  longDescription: string;
  price: number;
  duration: string;
  groupSize: string;
  image: string;
  features: string[];
  includes: string[];
  excludes: string[];
  itinerary: {
    day: string;
    title: string;
    description: string;
    activities: string[];
    hotel?: Hotel;
    meals: string[];
    sightseeing: string[];
  }[];
  highlights: {
    title: string;
    description: string;
    image: string;
  }[];
  terms: string[];
  paymentPolicy?: string[];
  tips?: string[];
  pricingOptions: PricingOption[];
  hotels: Hotel[];
  supplements: Supplement[];
  pickupLocations: string[];
  cancellationPolicy: string[];
  slug: string;
}

export const packages: Package[] = [
  // Honeymoon Packages - sorted by duration
  honeymoon4n5d,      // 5 days - Quick honeymoon
  romanticHideaway,   // 6 days - Romantic Hideaway
  honeymoon5n6d,      // 6 days - Time mapped
  luxuryHoneymoon,    // 7 days - New Luxury

  // Luxury Packages - sorted by duration
  luxury4n5d,         // 5 days - Premium
  ultimateAdventure,  // 7 days - Adventure
  luxuryEscape,       // 7 days - Ultra luxury
  adventureThrill,    // 6 days - New Adventure

  // Family Packages - sorted by duration
  family4n5d,         // 5 days - Quick family fun
  familyParadise,     // 6 days - Complete family
  grandAndaman,       // 8 days - Grand Tour

  // Standard Package - Best value
  standardAndaman     // 6 days - Budget friendly
];
