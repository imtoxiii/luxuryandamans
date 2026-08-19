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
import { jollyBuoyWandoor } from './packages/jolly-buoy-wandoor';
import { grandEscape9d } from './packages/grand-escape-9d';

// Standard Packages
import { standardAndaman } from './packages/standard-andaman';
import { shortBreak3n4d } from './packages/short-break-3n4d';
import { neilIslandSpecial } from './packages/neil-island-special';
import { rossNorthBayHop } from './packages/ross-north-bay-hop';
import { havelockExtendedExplore } from './packages/havelock-extended-explore';
import { completeAndaman7d } from './packages/complete-andaman-7d';

export type PackageCategory = 'Standard' | 'Luxury' | 'Honeymoon' | 'Family';

export interface Hotel {
  name: string;
  location: string;
  rating: number;
  image?: string;
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

export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
  activities: string[];
  hotel?: Hotel;
  meals: string[];
  sightseeing: string[];
  location?: string;
}

export interface Package {
  title: string;
  description: string;
  longDescription: string;
  price: number;
  duration: string;
  groupSize: string;
  category: PackageCategory;
  nightsPlan: string;
  image: string;
  features: string[];
  includes: string[];
  excludes: string[];
  itinerary: ItineraryDay[];
  itineraries?: Record<number, ItineraryDay[]>;
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
  id?: string; // Links to folder name in src/assets/images/packages
}

export const packages: Package[] = [
  // Honeymoon
  honeymoon4n5d,
  neilIslandSpecial,
  romanticHideaway,
  honeymoon5n6d,
  luxuryHoneymoon,

  // Luxury
  luxury4n5d,
  adventureThrill,
  ultimateAdventure,
  luxuryEscape,

  // Family
  family4n5d,
  familyParadise,
  jollyBuoyWandoor,
  grandAndaman,
  grandEscape9d,

  // Standard
  shortBreak3n4d,
  rossNorthBayHop,
  standardAndaman,
  havelockExtendedExplore,
  completeAndaman7d,
];
