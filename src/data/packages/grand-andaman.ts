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
  jollyBuoy,
  departureDay,
} from '../itineraryDays';

const pb = hotels.sinclairs;
const hav = hotels.seashellHavelock;
const neil = hotels.summerSands;

const itinerary7 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  baratang(6, pb),
  departureDay(7),
];

const itinerary8 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  baratang(6, pb),
  rossNorthBay(7, pb),
  departureDay(8),
];

const itinerary9 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  rossNorthBay(6, pb),
  baratang(7, pb),
  jollyBuoy(8, pb),
  departureDay(9),
];

export const grandAndaman: Package = {
  slug: 'grand-andaman-tour',
  id: 'grand-andaman',
  title: 'Grand Andaman Tour — 7N/8D Classic',
  description: 'Port Blair, Havelock, Neil, Baratang, and Ross & North Bay — the classic long circuit with 4-star rooms and a sane night split.',
  longDescription:
    'The 7 Nights 8 Days Andaman Classic from our itinerary set: Cellular Jail, two nights on Havelock, Neil with the Natural Bridge, a dedicated Baratang cave day, then Ross and North Bay. The 9-day option is the 9D/8N Escape base plan with Jolly Buoy and Wandoor added. Havelock never drops below two nights.',
  price: 58999,
  duration: '8 days',
  groupSize: '2–8',
  category: 'Family',
  nightsPlan: '1N Port Blair · 2N Havelock · 1N Neil · 3N Port Blair',
  image: '/images/packages/grand-andaman/hero.jpg',
  features: ['Baratang caves', 'Jolly Buoy option', 'Three islands', '4-star stays', 'Ross & North Bay'],
  includes: [
    '7 nights in 4-star hotels with GST',
    'Daily breakfast',
    'Private AC vehicle including Baratang',
    'All inter-island ferries',
    'Elephant Beach speedboat, snorkeling, kayaking for two',
    'Complimentary Radhanagar photoshoot',
    'Baratang limestone caves and mangrove boat',
    'Ross Island & North Bay boats',
    'Cellular Jail Light & Sound Show',
    'Airport pickup and drop',
  ],
  excludes: commonExcludes,
  itinerary: itinerary8,
  itineraries: { 7: itinerary7, 8: itinerary8, 9: itinerary9 },
  highlights: [
    { title: 'The classic long trip', description: 'Every headline island, with Havelock still held for two nights.', image: '/images/packages/grand-andaman/hero.jpg' },
    { title: 'Baratang done right', description: 'A full cave day from Port Blair — not a rumour of a Makruzz to Havelock at noon.', image: '/images/packages/grand-andaman/hero.jpg' },
    { title: '9-day Escape', description: 'Add Jolly Buoy and Wandoor when you have the extra night.', image: '/images/packages/grand-andaman/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 7, pricePerPerson: 51999, title: '6N/7D — Skip Ross' },
    { days: 8, pricePerPerson: 58999, title: '7N/8D — Classic' },
    { days: 9, pricePerPerson: 66999, title: '8N/9D — Escape with Jolly Buoy' },
  ],
  hotels: [pb, hav, neil],
  supplements: [
    { name: 'Discover Scuba', price: 4500, description: 'Per person, Havelock.', availability: ['Havelock'] },
    { name: 'Sea walk', price: 3500, description: 'Per person.', availability: ['Havelock', 'North Bay'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
};
