import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';
import { hotels, commonExcludes, commonPickup } from '../hotels';
import {
  arrivalPortBlair,
  havelockBeaches,
  elephantBeach,
  neilArrival,
  neilToPortBlair,
  rossNorthBay,
  baratang,
  jollyBuoy,
  departureDay,
} from '../itineraryDays';

const pb = hotels.sinclairs;
const hav = hotels.seashellHavelock;
const neil = hotels.summerSands;

const itinerary8 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  rossNorthBay(6, pb),
  baratang(7, pb),
  departureDay(8),
];

const itinerary9 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav, true),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  rossNorthBay(6, pb),
  baratang(7, pb),
  jollyBuoy(8, pb),
  departureDay(9),
];

const itinerary7 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  baratang(6, pb),
  departureDay(7),
];

export const grandEscape9d: Package = {
  title: 'Andaman Grand Escape — 8N/9D',
  description: 'The base long itinerary: Havelock, Neil, Ross, Baratang limestone caves, and Jolly Buoy — 4-star rooms, scuba for two, photoshoot included.',
  longDescription:
    'The 9 Days 8 Nights Escape base package from our itinerary set. Two nights on Havelock (scuba + Elephant Beach), Neil with the Natural Bridge, Ross & North Bay, a dedicated Baratang cave day, then Jolly Buoy and Wandoor. Havelock never drops below two nights. 4-star Sinclairs / SeaShell / Summer Sands — the long trip without Taj pricing.',
  price: 66999,
  duration: '9 days',
  groupSize: '2–8',
  category: 'Family',
  nightsPlan: '1N Port Blair · 2N Havelock · 1N Neil · 4N Port Blair',
  image: '/images/packages/luxury-escape/hero/hero.jpg',
  features: ['Jolly Buoy', 'Baratang caves', 'Three islands', 'Scuba for two', '4-star stays'],
  includes: [
    '8 nights in 4-star hotels with GST',
    'Daily breakfast',
    'Private AC vehicle including Baratang',
    'All inter-island ferries',
    'Scuba for two at Havelock with photos',
    'Elephant Beach speedboat, snorkeling, kayaking',
    'Complimentary Radhanagar photoshoot',
    'Baratang limestone caves and mangrove boat',
    'Jolly Buoy / marine park tickets',
    'Ross Island & North Bay boats',
    'Cellular Jail Light & Sound Show',
    'Airport pickup and drop',
  ],
  excludes: commonExcludes,
  itinerary: itinerary9,
  itineraries: { 7: itinerary7, 8: itinerary8, 9: itinerary9 },
  highlights: [
    { title: 'Every headline island', description: 'Havelock, Neil, Ross, Baratang, Jolly Buoy — without stealing Havelock nights.', image: '/images/packages/luxury-escape/hero/hero.jpg' },
    { title: 'Caves and corals', description: 'Baratang one day, Jolly Buoy the next. They are not combined.', image: '/images/packages/luxury-escape/hero/hero.jpg' },
    { title: 'Scuba in the quote', description: 'Two persons at Elephant Beach, photos included.', image: '/images/packages/luxury-escape/hero/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 7, pricePerPerson: 51999, title: '6N/7D — Skip Ross & Jolly Buoy' },
    { days: 8, pricePerPerson: 58999, title: '7N/8D — Skip Jolly Buoy' },
    { days: 9, pricePerPerson: 66999, title: '8N/9D — Grand escape' },
  ],
  hotels: [pb, hav, neil],
  supplements: [
    { name: 'Sea walk', price: 3500, description: 'Per person.', availability: ['Havelock', 'North Bay'] },
    { name: 'Candlelight dinner', price: 7000, description: 'Table for two on Havelock.', availability: ['Havelock'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
  slug: 'andaman-grand-escape-8n9d',
  id: 'luxury-escape',
};
