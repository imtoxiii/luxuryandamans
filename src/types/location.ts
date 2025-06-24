export interface Gallery {
  url: string;
  caption: string;
}

export interface Highlight {
  title: string;
  description: string;
  image: string;
}

export interface Activity {
  name: string;
  description: string;
  duration: string;
  price: number;
  image: string;
}

export interface Accommodation {
  name: string;
  type: string;
  priceRange: string;
  description: string;
  image: string;
}

export interface HowToReach {
  fromPortBlair?: string;
  fromMainland?: string;
  bestWayToTravel: string;
  nearestAirport: string;
  transportOptions: string[];
}

export interface BestTimeToVisit {
  peak: string;
  shoulder: string;
  avoid: string;
  weatherInfo: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: Gallery[];
  highlights: Highlight[];
  activities: Activity[];
  accommodation: Accommodation[];
  howToReach: HowToReach;
  bestTimeToVisit: BestTimeToVisit;
  tips: string[];
  coordinates: Coordinates;
}