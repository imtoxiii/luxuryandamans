import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';
import { hotels, commonExcludes, commonPickup } from '../hotels';
import {
  arrivalPortBlair,
  havelockBeaches,
  neilArrival,
  neilToPortBlair,
  departureDay,
  elephantBeach,
} from '../itineraryDays';

const pb = hotels.sentinel;
const hav = hotels.havelockIslandBeach;
const neil = hotels.summerSands;

const itinerary5 = [
  arrivalPortBlair(1, pb, ['Flower garland welcome']),
  havelockBeaches(2, hav, true),
  neilArrival(3, neil),
  neilToPortBlair(4, pb, true),
  departureDay(5),
];

const itinerary6 = [
  arrivalPortBlair(1, pb, ['Flower garland welcome']),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  departureDay(6),
];

export const neilIslandSpecial: Package = {
  title: 'Neil Island Special — 4N/5D',
  description: 'Three islands in five days: Port Blair, a Havelock sunset at Radhanagar, then Neil for Bharatpur, Laxmanpur, and the Natural Rock Bridge.',
  longDescription:
    'Our 4 Nights 5 Days Neil Island Special. It is a paced squeeze — one night each on Havelock and Neil — for couples who will not skip Shaheed Dweep. Radhanagar photoshoot is included. Elephant Beach sits on the 6-day option so the five-day plan is not three checkouts plus a speedboat.',
  price: 26999,
  duration: '5 days',
  groupSize: '2–4',
  category: 'Honeymoon',
  nightsPlan: '1N Port Blair · 1N Havelock · 1N Neil · 1N Port Blair',
  image: '/images/packages/romantic-hideaway/hero/hero.jpg',
  features: ['Neil Island night', 'Natural Rock Bridge', 'Radhanagar photoshoot', 'Three islands', '4-star cottages'],
  includes: [
    '4 nights in 3/4-star hotels with GST',
    'Daily breakfast',
    'Private AC car',
    'All three inter-island ferries',
    'Complimentary couple photoshoot at Radhanagar',
    'Cellular Jail Light & Sound Show',
    'Natural Rock Bridge visit',
    'Airport pickup and drop',
  ],
  excludes: commonExcludes,
  itinerary: itinerary5,
  itineraries: { 5: itinerary5, 6: itinerary6 },
  highlights: [
    { title: 'Neil is why you book this', description: 'Bharatpur, Laxmanpur, and the rock bridge — not a 40-minute drive-by.', image: '/images/packages/romantic-hideaway/hero/hero.jpg' },
    { title: 'Three islands, five days', description: 'Honest pacing: one night each on Havelock and Neil.', image: '/images/packages/romantic-hideaway/hero/hero.jpg' },
    { title: 'Photoshoot included', description: 'A photographer on Radhanagar sand.', image: '/images/packages/romantic-hideaway/hero/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 5, pricePerPerson: 26999, title: '4N/5D — Neil special' },
    { days: 6, pricePerPerson: 33999, title: '5N/6D — Add Elephant Beach' },
  ],
  hotels: [pb, hav, neil],
  supplements: [
    { name: 'Candlelight dinner', price: 7000, description: 'Table for two on Havelock or Neil.', availability: ['Havelock', 'Neil'] },
    { name: 'Discover Scuba', price: 4500, description: 'Per person.', availability: ['Havelock'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
  slug: 'neil-island-special-4n5d',
  id: 'romantic-hideaway',
};
