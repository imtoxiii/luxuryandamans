import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';
import { hotels, commonExcludes, commonPickup } from '../hotels';
import {
  arrivalPortBlair,
  havelockBeaches,
  elephantBeach,
  neilArrival,
  neilToPortBlair,
  departureDay,
  rossNorthBay,
  day,
} from '../itineraryDays';

const pb = hotels.fortuneBay;
const hav = hotels.tajExotica;
const neil = hotels.seashellNeil;

const itinerary6 = [
  arrivalPortBlair(1, pb, ['VIP lounge-style airport reception', 'Welcome drinks at the suite']),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav, true),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  departureDay(6),
];

const itinerary7 = [
  arrivalPortBlair(1, pb, ['VIP airport reception with garland', 'Welcome drinks at the suite']),
  day(
    2,
    'Port Blair heritage at an easy pace',
    'Port Blair',
    'A private guide for Cellular Jail, Corbyn’s Cove, and a museum hour — then premium seating at the Light & Sound Show.',
    [
      'Leisurely breakfast at Fortune Bay Island',
      'Cellular Jail with a private guide',
      'Corbyn’s Cove — swim or simply sit',
      'Anthropological Museum if energy remains',
      'Premium seating at the Light & Sound Show',
    ],
    ['Cellular Jail', 'Corbyn’s Cove', 'Light & Sound Show'],
    pb
  ),
  havelockBeaches(3, hav, true),
  elephantBeach(4, hav, true),
  neilArrival(5, neil),
  neilToPortBlair(6, pb, true),
  departureDay(7),
];

const itinerary8 = [
  ...itinerary7.slice(0, 6),
  rossNorthBay(7, pb),
  departureDay(8),
];

export const luxuryHoneymoon: Package = {
  title: 'Luxury Honeymoon Bliss — 6N/7D',
  description: 'Fortune Bay Island, Taj Exotica villas, and SeaShell Neil — scuba with video, spa, candlelight dinner, and the full three-island arc.',
  longDescription:
    'The 6 Nights 7 Days Complete Andaman circuit, run on 5-star and upper-4-star rooms. Port Blair at Fortune, Havelock at Taj Exotica (villas from about ₹26,000 a night in shoulder season), Neil at SeaShell. Scuba with videography, a 60-minute couple spa, candlelight dinner, and a photographer on Radhanagar are in the quote — not a menu of “ask us later”.',
  price: 89999,
  duration: '7 days',
  groupSize: '2',
  category: 'Honeymoon',
  nightsPlan: '2N Port Blair · 2N Havelock · 1N Neil · 1N Port Blair',
  image: '/images/packages/luxury-honeymoon/hero/hero.jpg',
  features: ['Taj Exotica villas', 'Fortune Bay Island', 'Scuba with video', 'Couple spa', 'Candlelight dinner'],
  includes: [
    '6 nights: Fortune Bay Island + Taj Exotica + SeaShell Neil (or same star band)',
    'Daily breakfast',
    'Private luxury car for all road transfers',
    'Royal / premium class ferry',
    'Scuba for two with instructor photos and video',
    'Elephant Beach private-style speedboat, snorkeling, kayaking',
    'Couple spa (60 minutes)',
    'One candlelight dinner',
    'Flower setup, cake, and welcome drinks',
    'Professional Radhanagar photoshoot',
    'Personal coordinator on the islands',
    'All listed tickets and GST',
  ],
  excludes: commonExcludes,
  itinerary: itinerary7,
  itineraries: { 6: itinerary6, 7: itinerary7, 8: itinerary8 },
  highlights: [
    { title: 'Taj on Havelock', description: 'Two nights in a villa — the stay most luxury quotes are actually about.', image: '/images/packages/luxury-honeymoon/hero/hero.jpg' },
    { title: 'Scuba is in the price', description: 'Not a ₹5,000 surprise on the beach.', image: '/images/packages/luxury-honeymoon/hero/hero.jpg' },
    { title: 'Neil still included', description: 'A night at SeaShell Neil so the third island is not a day trip.', image: '/images/packages/luxury-honeymoon/hero/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 6, pricePerPerson: 79999, title: '5N/6D — Compact luxury' },
    { days: 7, pricePerPerson: 89999, title: '6N/7D — Bliss' },
    { days: 8, pricePerPerson: 99999, title: '7N/8D — Add Ross & North Bay' },
  ],
  hotels: [pb, hav, neil],
  supplements: [
    { name: 'Private yacht sunset', price: 18000, description: 'Charter for two, weather and jetty slot permitting.', availability: ['Havelock'] },
    { name: 'Extra spa hour', price: 4500, description: 'Additional 60-minute treatment per person.', availability: ['Havelock'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
  slug: 'luxury-honeymoon-bliss-7-days',
  id: 'luxury-honeymoon',
};
