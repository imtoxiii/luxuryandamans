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
  departureDay,
  baratang,
} from '../itineraryDays';

const pb = hotels.haywizz;
const hav = hotels.silverSand;
const neil = hotels.pearlPark;

const itinerary6 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  departureDay(6),
];

const itinerary7 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  rossNorthBay(6, pb),
  departureDay(7),
];

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

export const completeAndaman7d: Package = {
  title: 'Complete Andaman Circuit — 6N/7D',
  description: 'The full three-island loop on 3-star stays: Havelock reefs, Neil’s Natural Bridge, Chidiya Tapu, then Ross & North Bay before you fly.',
  longDescription:
    'From the 6 Nights 7 Days Complete Andaman plan and the Smart 6N/7D Ultimate Andaman. Same route as the luxury circuit, priced on Haywizz / Silver Sand / Pearl Park. Two nights on Havelock, one on Neil, then Ross Island instead of a third beach hotel. Scuba stays a supplement so the landing price stays in the standard band.',
  price: 35999,
  duration: '7 days',
  groupSize: '2–8',
  category: 'Standard',
  nightsPlan: '1N Port Blair · 2N Havelock · 1N Neil · 2N Port Blair',
  image: '/images/packages/standard-andaman/hero.jpg',
  features: ['Three islands', 'Ross & North Bay', 'Elephant Beach', '3-star hotels', 'Natural Bridge'],
  includes: [
    '6 nights in 3-star hotels with GST',
    'Daily breakfast',
    'Private AC vehicle',
    'All inter-island ferries',
    'Elephant Beach speedboat, snorkeling, kayaking for two',
    'Complimentary Radhanagar photoshoot',
    'Ross Island & North Bay boats',
    'Cellular Jail Light & Sound Show',
    'Airport pickup and drop',
  ],
  excludes: commonExcludes,
  itinerary: itinerary7,
  itineraries: { 6: itinerary6, 7: itinerary7, 8: itinerary8 },
  highlights: [
    { title: 'The complete loop, 3-star', description: 'Same islands as the luxury week — without Taj rates.', image: '/images/packages/standard-andaman/hero.jpg' },
    { title: 'Ross on day six', description: 'Historical boat day after Neil, not instead of Havelock.', image: '/images/packages/standard-andaman/hero.jpg' },
    { title: '8-day Baratang option', description: 'Add limestone caves when you have the extra night.', image: '/images/packages/standard-andaman/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 6, pricePerPerson: 29999, title: '5N/6D — Skip Ross' },
    { days: 7, pricePerPerson: 35999, title: '6N/7D — Complete circuit' },
    { days: 8, pricePerPerson: 42999, title: '7N/8D — Add Baratang' },
  ],
  hotels: [pb, hav, neil],
  supplements: [
    { name: 'Discover Scuba', price: 4500, description: 'Per person, Havelock.', availability: ['Havelock'] },
    { name: 'Sea walk', price: 3500, description: 'Per person, North Bay or Elephant Beach.', availability: ['Havelock', 'North Bay'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
  slug: 'complete-andaman-circuit-6n7d',
  id: 'standard-andaman',
};
