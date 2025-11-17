// Import individual package files
// Honeymoon Packages
import { honeymoon5n6d } from './packages/honeymoon-5n6d';
import { honeymoon4n5d } from './packages/honeymoon-4n5d';

// Luxury Packages
import { luxuryEscape } from './packages/luxury-escape';
import { luxury4n5d } from './packages/luxury-4n5d';

// Family Packages
import { familyParadise } from './packages/family-paradise';
import { family4n5d } from './packages/family-4n5d';

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
  honeymoon5n6d,      // 6 days - Time mapped
  
  // Luxury Packages - sorted by duration
  luxury4n5d,         // 5 days - Premium
  luxuryEscape,       // 7 days - Ultra luxury
  
  // Family Packages - sorted by duration
  family4n5d,         // 5 days - Quick family fun
  familyParadise,     // 6 days - Complete family
  
  // Standard Package - Best value
  standardAndaman     // 6 days - Budget friendly
];
