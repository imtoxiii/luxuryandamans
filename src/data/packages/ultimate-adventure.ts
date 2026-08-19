import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';
import { hotels, commonExcludes, commonPickup } from '../hotels';
import {
  arrivalPortBlair,
  havelockBeaches,
  elephantBeach,
  neilArrival,
  neilToPortBlair,
  baratang,
  rossNorthBay,
  departureDay,
} from '../itineraryDays';

const pb = hotels.sinclairs;
const hav = hotels.seashellHavelock;
const neil = hotels.summerSands;

const itinerary6 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav),
  elephantBeach(3, hav, true),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  departureDay(6),
];

const itinerary7 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav),
  elephantBeach(3, hav, true),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  baratang(6, pb),
  departureDay(7),
];

const itinerary8 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav),
  elephantBeach(3, hav, true),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  baratang(6, pb),
  rossNorthBay(7, pb),
  departureDay(8),
];

export const ultimateAdventure: Package = {
  slug: 'ultimate-andaman-adventure',
  id: 'ultimate-adventure',
  title: 'Ultimate Andaman Adventure — 6N/7D Baratang',
  description: 'Three islands plus a full Baratang day: limestone caves, mangrove creek, scuba at Elephant Beach, and 4-star family-capable stays.',
  longDescription:
    'Taken from the 6 Nights 7 Days Baratang Complete Andaman itinerary — with the night split fixed. Baratang is a full day from Port Blair (early convoy, mangrove boat, caves, evening return). It is not bolted onto a Havelock ferry morning. Scuba at Elephant Beach is included; Ross & North Bay sit on the 8-day option so day 6 stays a cave day, not a double-header.',
  price: 54999,
  duration: '7 days',
  groupSize: '2–6',
  category: 'Luxury',
  nightsPlan: '1N Port Blair · 2N Havelock · 1N Neil · 2N Port Blair',
  image: '/images/packages/ultimate-adventure/hero.jpg',
  features: ['Baratang caves', 'Scuba included', 'Three islands', '4-star stays', 'Mangrove safari'],
  includes: [
    '6 nights in 4-star hotels with GST',
    'Daily breakfast',
    'Private AC vehicle including the Baratang convoy run',
    'Inter-island ferries',
    'Scuba for two at Havelock',
    'Elephant Beach speedboat, snorkeling, kayaking',
    'Baratang limestone caves, mangrove boat, and park tickets',
    'Cellular Jail Light & Sound Show',
    'Airport pickup and drop',
  ],
  excludes: commonExcludes,
  itinerary: itinerary7,
  itineraries: { 6: itinerary6, 7: itinerary7, 8: itinerary8 },
  highlights: [
    { title: 'Baratang as its own day', description: 'Caves and mangroves need a 4 a.m. start. We do not fake a same-day Havelock landing.', image: '/images/packages/ultimate-adventure/hero.jpg' },
    { title: 'Still two nights Havelock', description: 'The adventure add-on does not steal beach time.', image: '/images/packages/ultimate-adventure/hero.jpg' },
    { title: 'Scuba in', description: 'One Havelock dive included for two people.', image: '/images/packages/ultimate-adventure/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 6, pricePerPerson: 47999, title: '5N/6D — Without Baratang' },
    { days: 7, pricePerPerson: 54999, title: '6N/7D — Baratang complete' },
    { days: 8, pricePerPerson: 61999, title: '7N/8D — Add Ross & North Bay' },
  ],
  hotels: [pb, hav, neil],
  supplements: [
    { name: 'Sea walk', price: 3500, description: 'Per person, Elephant Beach or North Bay.', availability: ['Havelock'] },
    { name: 'Game fishing', price: 18000, description: 'Half-day shared boat, up to 4 guests.', availability: ['Havelock'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
};
