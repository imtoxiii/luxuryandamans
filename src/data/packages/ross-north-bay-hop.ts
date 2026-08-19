import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';
import { hotels, commonExcludes, commonPickup } from '../hotels';
import {
  arrivalPortBlair,
  havelockBeaches,
  chidiyaReturn,
  rossNorthBay,
  departureDay,
  elephantBeach,
} from '../itineraryDays';

const pb = hotels.haywizz;
const hav = hotels.symphonyPalms;

const itinerary5 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav),
  chidiyaReturn(3, pb),
  rossNorthBay(4, pb),
  departureDay(5),
];

const itinerary4 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav),
  rossNorthBay(3, pb),
  departureDay(4, false),
];

const itinerary6 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav),
  elephantBeach(3, hav),
  chidiyaReturn(4, pb),
  rossNorthBay(5, pb),
  departureDay(6),
];

export const rossNorthBayHop: Package = {
  title: 'Ross & North Bay Hop — 4N/5D',
  description: 'Port Blair and Havelock, then a full boat day to Ross Island ruins and North Bay corals — Chidiya Tapu sunset on the way back.',
  longDescription:
    'From our 4 Nights 5 Days Island Hopping and Custom Port Blair & Havelock plans. No Neil. The extra Port Blair night is for Ross Island (deer, peacocks, colonial ruins) and North Bay reef. Havelock is one proper beach night at Radhanagar; add a fifth night if you want Elephant Beach without rushing the boat day.',
  price: 24999,
  duration: '5 days',
  groupSize: '2–6',
  category: 'Standard',
  nightsPlan: '1N Port Blair · 1N Havelock · 2N Port Blair',
  image: '/images/packages/grand-andaman/hero.jpg',
  features: ['Ross Island', 'North Bay corals', 'Chidiya Tapu', 'Radhanagar', '3-star hotels'],
  includes: [
    '4 nights in 3-star hotels with GST',
    'Daily breakfast',
    'Private AC vehicle',
    'Port Blair ↔ Havelock ferry',
    'Ross Island & North Bay boat tickets',
    'Cellular Jail Light & Sound Show',
    'Airport pickup and drop',
  ],
  excludes: commonExcludes,
  itinerary: itinerary5,
  itineraries: { 4: itinerary4, 5: itinerary5, 6: itinerary6 },
  highlights: [
    { title: 'Ross is the extra island', description: 'Ruins, deer, and peacocks — not another beach transfer.', image: '/images/packages/grand-andaman/hero.jpg' },
    { title: 'North Bay reef', description: 'Coral viewing off Port Blair without a Neil ferry.', image: '/images/packages/grand-andaman/hero.jpg' },
    { title: 'Chidiya Tapu close', description: 'Sunset at the southern tip on the return evening.', image: '/images/packages/grand-andaman/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 4, pricePerPerson: 21999, title: '3N/4D — Skip Chidiya' },
    { days: 5, pricePerPerson: 24999, title: '4N/5D — Ross & North Bay hop' },
    { days: 6, pricePerPerson: 30999, title: '5N/6D — Add Elephant Beach' },
  ],
  hotels: [pb, hav],
  supplements: [
    { name: 'Sea walk (North Bay)', price: 3500, description: 'Helmet dive, per person.', availability: ['North Bay'] },
    { name: 'Discover Scuba', price: 4500, description: 'Per person, Havelock or North Bay.', availability: ['Havelock', 'North Bay'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
  slug: 'ross-north-bay-hop-4n5d',
  id: 'grand-andaman',
};
