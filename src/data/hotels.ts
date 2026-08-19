import type { Hotel } from './packages';

const room = (
  name: string,
  pricePerNight: number,
  description: string,
  maxOccupancy: number
) => ({ name, pricePerNight, description, maxOccupancy });

export const hotels = {
  haywizz: {
    name: 'Hotel Haywizz',
    location: 'Port Blair',
    rating: 3,
    starCategory: 3,
    amenities: ['AC Rooms', 'Restaurant', 'WiFi', 'Airport Desk', 'Room Service'],
    description: 'Reliable 3-star stay near Aberdeen Bazaar — clean rooms, easy jetty access, and a practical base for first and last nights.',
    roomTypes: [
      room('Standard AC', 2800, 'Compact twin/double with AC and attached bath', 2),
      room('Deluxe', 3600, 'Larger room with city or garden outlook', 3),
    ],
  },
  sentinel: {
    name: 'Hotel Sentinel',
    location: 'Port Blair',
    rating: 3,
    starCategory: 3,
    amenities: ['AC Rooms', 'Restaurant', 'WiFi', 'Travel Desk', 'Honeymoon Setup'],
    description: 'Comfortable city hotel with well-kept rooms and a convenient location for Cellular Jail and Corbyn’s Cove runs.',
    roomTypes: [
      room('Deluxe', 3200, 'Well-appointed double with AC', 2),
      room('Premium', 4200, 'Extra space, better view, couple-friendly setup', 2),
    ],
  },
  sinclairs: {
    name: 'Hotel Sinclairs Bayview',
    location: 'Port Blair',
    rating: 4,
    starCategory: 4,
    amenities: ['Sea View', 'Pool', 'Family Rooms', 'Restaurant', 'Kids Play Area', 'WiFi'],
    description: 'Sea-facing 4-star on the Aberdeen waterfront — spacious family rooms, a pool, and a short hop to the jetty.',
    roomTypes: [
      room('Standard Family Room', 6500, 'Double plus extra bed option for a child', 3),
      room('Deluxe Sea View', 8500, 'Wider room with bay outlook', 3),
      room('Family Connecting', 11000, 'Two rooms linked — parents and kids with privacy', 6),
    ],
  },
  lemonTree: {
    name: 'Lemon Tree Hotel Port Blair',
    location: 'Port Blair',
    rating: 4,
    starCategory: 4,
    amenities: ['Pool', 'Spa', 'Restaurant', 'Gym', 'WiFi', 'Butler on request'],
    description: 'Polished 4-star in town with a pool, consistent service, and a quiet night before early ferries.',
    roomTypes: [
      room('Superior', 7500, 'Contemporary king/twin with city view', 2),
      room('Deluxe', 9800, 'Larger room, lounge seating, couple setup', 2),
    ],
  },
  fortuneBay: {
    name: 'Fortune Resort Bay Island',
    location: 'Port Blair',
    rating: 5,
    starCategory: 5,
    amenities: ['Sea View', 'Infinity Pool', 'Spa', 'Multiple Restaurants', 'Gym', 'Concierge'],
    description: 'Port Blair’s landmark 5-star on the bay — suites, spa, and a proper first-night landing after the flight.',
    roomTypes: [
      room('Deluxe Sea View', 12000, 'Bay-facing deluxe with balcony', 2),
      room('Premium Suite', 16000, 'Separate sitting area and bay outlook', 2),
      room('Bay Villa', 21000, 'Top-category suite with lounge and sea view', 3),
    ],
  },
  silverSand: {
    name: 'Silver Sand Beach Resort',
    location: 'Havelock Island',
    rating: 3,
    starCategory: 3,
    amenities: ['Beach Access', 'Restaurant', 'WiFi', 'Travel Desk', 'Garden'],
    description: 'Popular beach-side 3-star at Govind Nagar — walkable sand, straightforward rooms, and a solid Havelock base.',
    roomTypes: [
      room('Garden Cottage', 3800, 'Simple AC cottage a short walk from the beach', 2),
      room('Beach Cottage', 5200, 'Closer to the water, morning swim distance', 2),
    ],
  },
  symphonyPalms: {
    name: 'Symphony Palms Beach Resort',
    location: 'Havelock Island',
    rating: 4,
    starCategory: 4,
    amenities: ['Beachfront', 'Pool', 'Restaurant', 'Water Sports Desk', 'WiFi'],
    description: 'Beachfront cottages on Govind Nagar — a favourite for divers and families who want sand without 5-star rates.',
    roomTypes: [
      room('Garden Cottage', 4500, 'AC cottage in the garden belt', 2),
      room('Beach Cottage', 6200, 'Steps from the water, extra sitting space', 3),
    ],
  },
  havelockIslandBeach: {
    name: 'Havelock Island Beach Resort',
    location: 'Havelock Island',
    rating: 4,
    starCategory: 4,
    amenities: ['Private Beach Stretch', 'Pool', 'Restaurant', 'Spa', 'WiFi'],
    description: 'Established 4-star on a quiet beach pocket — cottages, a pool, and easy Radhanagar access.',
    roomTypes: [
      room('Deluxe Cottage', 7200, 'Garden-facing AC cottage for two', 2),
      room('Beach Villa', 9800, 'Closer to the sand, couple-friendly layout', 2),
    ],
  },
  seashellHavelock: {
    name: 'SeaShell Havelock',
    location: 'Havelock Island',
    rating: 4,
    starCategory: 4,
    amenities: ['Beach Access', 'Pool', 'Family Cottages', 'Restaurant', 'Kids Pool', 'Spa'],
    description: 'Well-run 4-star with garden and beach cottages — the default upgrade for families and honeymooners on Havelock.',
    roomTypes: [
      room('Garden Cottage', 8500, 'Quiet garden cottage, extra bed possible', 3),
      room('Beach Cottage', 12500, 'Sand-side cottage with a sitting deck', 3),
      room('Family Villa', 16000, 'Larger villa for 4 with connecting option', 4),
    ],
  },
  barefoot: {
    name: 'Barefoot at Havelock',
    location: 'Havelock Island',
    rating: 4,
    starCategory: 4,
    amenities: ['Forest Setting', 'Dive Centre', 'Restaurant', 'Spa', 'Beach Access'],
    description: 'Eco-luxe cottages in the forest behind Radhanagar — the stay for couples who want quiet over glitter.',
    roomTypes: [
      room('Nicobari Cottage', 11000, 'Thatched cottage in the trees', 2),
      room('Andaman Villa', 15500, 'Larger villa closer to the beach trail', 2),
    ],
  },
  tajExotica: {
    name: 'Taj Exotica Resort & Spa, Andamans',
    location: 'Havelock Island',
    rating: 5,
    starCategory: 5,
    amenities: ['Private Beach', 'Infinity Pool', 'Spa', 'Butler Service', 'Fine Dining', 'Dive Desk'],
    description: 'The island’s 5-star flagship — villas in the trees, a private beach, and Taj service. Peak nights run ₹34,000–₹45,000.',
    roomTypes: [
      room('Deluxe Villa', 26000, 'Garden villa with outdoor shower and lounge', 2),
      room('Lagoon Villa', 34000, 'Larger villa nearer the water, couple spa access', 2),
      room('Beach Villa', 42000, 'Beachfront villa — the top category on property', 2),
    ],
  },
  jalakara: {
    name: 'Jalakara',
    location: 'Havelock Island',
    rating: 5,
    starCategory: 5,
    amenities: ['Pool Villas', 'Residents-only', 'Breakfast included', 'Spa', 'Design Suites'],
    description: 'Boutique hillside hideaway — pool villas, no-TV quiet, and rates from about ₹17,500 in shoulder season to ₹29,500 at Christmas.',
    roomTypes: [
      room('Design Room', 17500, 'Styled double, residents-only property', 2),
      room('Pool Villa', 25500, 'Private plunge pool, hillside outlook', 3),
    ],
  },
  pearlPark: {
    name: 'Pearl Park Beach Resort',
    location: 'Neil Island',
    rating: 3,
    starCategory: 3,
    amenities: ['Beach Access', 'Restaurant', 'WiFi', 'Bicycle Hire', 'Garden'],
    description: 'Simple 3-star on Neil — walk to Bharatpur, quiet nights, and a fair room for a one-night island stop.',
    roomTypes: [
      room('Standard', 3000, 'AC room a short walk from the beach', 2),
      room('Deluxe', 4200, 'Larger room, garden outlook', 3),
    ],
  },
  summerSands: {
    name: 'Summer Sands Beach Resort',
    location: 'Neil Island',
    rating: 4,
    starCategory: 4,
    amenities: ['Beachfront', 'Pool', 'Restaurant', 'Spa', 'WiFi'],
    description: 'Neil’s most requested 4-star — pool, sand, and an easy sunset walk to Laxmanpur.',
    roomTypes: [
      room('Deluxe Cottage', 6500, 'Garden cottage with AC and patio', 2),
      room('Beach Villa', 9000, 'Closer to the water, extra sitting space', 3),
    ],
  },
  seashellNeil: {
    name: 'SeaShell Neil',
    location: 'Neil Island',
    rating: 4,
    starCategory: 4,
    amenities: ['Beach Access', 'Pool', 'Restaurant', 'Spa', 'WiFi', 'Couple Setup'],
    description: 'Polished 4-star on Neil with a pool and beach cottages — the usual honeymoon and family upgrade on Shaheed Dweep.',
    roomTypes: [
      room('Garden Cottage', 7800, 'Quiet garden cottage for two', 2),
      room('Beach Cottage', 11000, 'Sand-side cottage with deck', 3),
    ],
  },
} satisfies Record<string, Hotel>;

export const commonExcludes = [
  'Airfare to / from Port Blair',
  'Lunch and dinner (unless a meal is named in the day plan)',
  'Optional water sports — jet ski, parasailing, sea walk, glass-bottom boat',
  'Personal expenses, laundry, tips, and beverages',
  'Travel insurance',
  'Anything not listed under inclusions',
];

export const commonPickup = [
  'Veer Savarkar International Airport, Port Blair',
  'Phoenix Bay Jetty / Haddo Wharf (ferry connections)',
];
