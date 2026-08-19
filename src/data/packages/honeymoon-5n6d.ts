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
  chidiyaReturn,
  rossNorthBay,
} from '../itineraryDays';

const pb = hotels.lemonTree;
const hav = hotels.seashellHavelock;
const neil = hotels.seashellNeil;

const itinerary5 = [
  arrivalPortBlair(1, pb, ['Flower garland welcome']),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav),
  chidiyaReturn(4, pb),
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

const itinerary7 = [
  arrivalPortBlair(1, pb, ['Flower garland welcome']),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  rossNorthBay(6, pb),
  departureDay(7),
];

export const honeymoon5n6d: Package = {
  title: '5N/6D Andaman Honeymoon — Elephant Beach & Chidiya Tapu',
  description: 'The balanced couple circuit: Port Blair, two nights Havelock, a night on Neil, Radhanagar photoshoot, and a Chidiya Tapu sunset.',
  longDescription:
    'This is our 5 Nights 6 Days Elephant Beach & Chidiya Tapu plan — the ratio most Andaman operators actually run for couples. 1–2–1–1 nights so you are not checking out every dawn. 4-star SeaShell-band stays, private car, premium ferry, snorkeling, kayaking, and a photographer on Radhanagar. Scuba remains a supplement so the landing price stays clean.',
  price: 44999,
  duration: '6 days',
  groupSize: '2',
  category: 'Honeymoon',
  nightsPlan: '1N Port Blair · 2N Havelock · 1N Neil · 1N Port Blair',
  image: '/images/packages/honeymoon-5n6d/hero/hero.jpg',
  features: ['4-star SeaShell stays', 'Three islands', 'Couple photoshoot', 'Elephant Beach', 'Chidiya Tapu sunset'],
  includes: [
    '5 nights in 4-star beach resorts with GST',
    'Daily breakfast',
    'Private AC car for all road moves',
    'Premium inter-island ferry',
    'Complimentary couple photoshoot at Radhanagar',
    'Elephant Beach speedboat, snorkeling, and kayaking for two',
    'Flower setup on the first Havelock night',
    'Cellular Jail Light & Sound Show',
    'All listed entry tickets',
    'Airport pickup and drop',
  ],
  excludes: commonExcludes,
  itinerary: itinerary6,
  itineraries: { 5: itinerary5, 6: itinerary6, 7: itinerary7 },
  highlights: [
    { title: 'The 1–2–1–1 night split', description: 'Havelock is the heart of the trip. Neil is a night, not a drive-by.', image: '/images/packages/honeymoon-5n6d/hero/hero.jpg' },
    { title: 'Named 4-star rooms', description: 'Lemon Tree, SeaShell Havelock, SeaShell Neil — or the same band.', image: '/images/packages/honeymoon-5n6d/hero/hero.jpg' },
    { title: 'Chidiya Tapu on the way home', description: 'Last sunset at the southern tip, not another ferry queue.', image: '/images/packages/honeymoon-5n6d/hero/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 5, pricePerPerson: 38999, title: '4N/5D — Skip Neil' },
    { days: 6, pricePerPerson: 44999, title: '5N/6D — Classic honeymoon' },
    { days: 7, pricePerPerson: 51999, title: '6N/7D — Add Ross & North Bay' },
  ],
  hotels: [pb, hav, neil],
  supplements: [
    { name: 'Candlelight dinner', price: 7000, description: 'Private table for two on Havelock.', availability: ['Havelock'] },
    { name: 'Discover Scuba', price: 4500, description: 'One dive per person.', availability: ['Havelock'] },
    { name: 'Flower bed decoration', price: 3000, description: 'Extra floral setup on a second night.', availability: ['Havelock', 'Neil'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
  slug: '5n6d-andaman-time-mapped-honeymoon',
  id: 'honeymoon-5n6d',
};
