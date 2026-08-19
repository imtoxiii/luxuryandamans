import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';
import { hotels, commonExcludes, commonPickup } from '../hotels';
import {
  arrivalPortBlair,
  havelockBeaches,
  neilArrival,
  neilToPortBlair,
  departureDay,
  rossNorthBay,
  elephantBeach,
} from '../itineraryDays';

const pb = hotels.lemonTree;
const hav = hotels.barefoot;
const neil = hotels.summerSands;

const itinerary5 = [
  arrivalPortBlair(1, pb, ['Bouquet at the airport']),
  havelockBeaches(2, hav, true),
  neilArrival(3, neil),
  neilToPortBlair(4, pb, true),
  departureDay(5),
];

const itinerary6 = [
  arrivalPortBlair(1, pb, ['Bouquet at the airport']),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  departureDay(6),
];

const itinerary7 = [
  arrivalPortBlair(1, pb, ['Bouquet at the airport']),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  rossNorthBay(6, pb),
  departureDay(7),
];

export const romanticHideaway: Package = {
  slug: 'romantic-island-hideaway',
  id: 'romantic-hideaway',
  title: 'Romantic Island Hideaway — Neil & Natural Bridge',
  description: 'A quieter 5N/6D for couples who want Barefoot-style Havelock, a full Neil sunset, the Natural Bridge, and Ross Island — without stacking water sports.',
  longDescription:
    'Mapped from our 5N/6D Neil & Natural Bridge itinerary, with Havelock held for two nights so Barefoot is not a one-night checkout. Neil still gets Bharatpur, Laxmanpur, and the rock bridge at low tide. Ross and North Bay sit on the 7-day option. Candlelight dinner and a couple spa hour are included.',
  price: 47999,
  duration: '6 days',
  groupSize: '2',
  category: 'Honeymoon',
  nightsPlan: '1N Port Blair · 2N Havelock · 1N Neil · 1N Port Blair',
  image: '/images/packages/romantic-hideaway/hero/hero.jpg',
  features: ['Barefoot Havelock', 'Neil Natural Bridge', 'Candlelight dinner', 'Couple spa', 'Ross Island'],
  includes: [
    '5 nights in 4-star / eco-luxe cottages with GST',
    'Daily breakfast',
    'Private AC car',
    'Premium ferry tickets',
    'Complimentary Radhanagar photoshoot',
    'One candlelight dinner',
    'Couple spa (60 minutes)',
    'Flower setup on arrival',
    'Ross Island & North Bay boat',
    'Airport pickup and drop',
  ],
  excludes: commonExcludes,
  itinerary: itinerary6,
  itineraries: { 5: itinerary5, 6: itinerary6, 7: itinerary7 },
  highlights: [
    { title: 'Neil is the point', description: 'Natural Bridge and Laxmanpur get a proper morning, not a 40-minute stop.', image: '/images/packages/romantic-hideaway/hero/hero.jpg' },
    { title: 'Barefoot, not a party hotel', description: 'Forest cottages behind Radhanagar — quieter than Govind Nagar strip.', image: '/images/packages/romantic-hideaway/hero/hero.jpg' },
    { title: 'Spa and a table for two', description: 'Candlelight dinner and a 60-minute couple treatment included.', image: '/images/packages/romantic-hideaway/hero/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 5, pricePerPerson: 41999, title: '4N/5D — Neil special' },
    { days: 6, pricePerPerson: 47999, title: '5N/6D — Hideaway' },
    { days: 7, pricePerPerson: 55999, title: '6N/7D — Add Elephant Beach' },
  ],
  hotels: [pb, hav, neil],
  supplements: [
    { name: 'Private sunset cruise', price: 12000, description: 'Charter for two, weather permitting.', availability: ['Havelock'] },
    { name: 'Discover Scuba', price: 4500, description: 'One dive per person.', availability: ['Havelock'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
};
