import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';
import { hotels, commonExcludes, commonPickup } from '../hotels';
import {
  arrivalPortBlair,
  havelockBeaches,
  returnMuseumMarina,
  jollyBuoy,
  rossNorthBay,
  departureDay,
  elephantBeach,
} from '../itineraryDays';

const pb = hotels.sinclairs;
const hav = hotels.seashellHavelock;

const itinerary6 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav, true),
  returnMuseumMarina(3, pb),
  jollyBuoy(4, pb),
  rossNorthBay(5, pb),
  departureDay(6),
];

const itinerary5 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav, true),
  returnMuseumMarina(3, pb),
  jollyBuoy(4, pb),
  departureDay(5),
];

const itinerary7 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav),
  returnMuseumMarina(4, pb),
  jollyBuoy(5, pb),
  rossNorthBay(6, pb),
  departureDay(7),
];

export const jollyBuoyWandoor: Package = {
  title: 'Jolly Buoy & Wandoor — 5N/6D',
  description: 'Havelock for Radhanagar, then the marine park: Jolly Buoy corals, Wandoor Beach, Fisheries Museum, and a Ross & North Bay boat day.',
  longDescription:
    'The leftover Custom 5N/6D Wandoor & Jolly Buoy itinerary — the one that skips Neil on purpose. Jolly Buoy sits inside Mahatma Gandhi Marine National Park (plastic-free; Red Skin is the alternate if the island is closed). A Havelock night for Radhanagar, then Port Blair for the park, museum, and Ross. Best for families who want corals without a third island ferry.',
  price: 31999,
  duration: '6 days',
  groupSize: '2–8',
  category: 'Family',
  nightsPlan: '1N Port Blair · 1N Havelock · 3N Port Blair',
  image: '/images/packages/family-paradise/hero.jpg',
  features: ['Jolly Buoy Island', 'Wandoor Beach', 'Ross & North Bay', 'Marine park', 'Family rooms'],
  includes: [
    '5 nights in 4-star family hotels with GST',
    'Daily breakfast',
    'Private AC vehicle',
    'Port Blair ↔ Havelock ferry',
    'Jolly Buoy / marine park boat and tickets (Red Skin if Jolly Buoy is closed)',
    'Ross Island & North Bay boats',
    'Fisheries Museum entry',
    'Complimentary Radhanagar photoshoot',
    'Cellular Jail Light & Sound Show',
    'Airport pickup and drop',
  ],
  excludes: commonExcludes,
  itinerary: itinerary6,
  itineraries: { 5: itinerary5, 6: itinerary6, 7: itinerary7 },
  highlights: [
    { title: 'The coral-park circuit', description: 'Jolly Buoy is a national-park island — not another Havelock beach.', image: '/images/packages/family-paradise/hero.jpg' },
    { title: 'No Neil ferry', description: 'One island hop to Havelock, then boats from Port Blair.', image: '/images/packages/family-paradise/hero.jpg' },
    { title: 'Family-friendly reefs', description: 'Glass-bottom and snorkel water, with a museum afternoon for kids.', image: '/images/packages/family-paradise/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 5, pricePerPerson: 27999, title: '4N/5D — Skip Ross' },
    { days: 6, pricePerPerson: 31999, title: '5N/6D — Jolly Buoy & Wandoor' },
    { days: 7, pricePerPerson: 38999, title: '6N/7D — Extra Havelock night' },
  ],
  hotels: [pb, hav],
  supplements: [
    { name: 'Glass-bottom boat', price: 1500, description: 'Per person, Jolly Buoy or North Bay.', availability: ['Jolly Buoy', 'North Bay'] },
    { name: 'Discover Scuba', price: 4500, description: 'Per person.', availability: ['Havelock', 'North Bay'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
  slug: 'jolly-buoy-wandoor-5n6d',
  id: 'family-paradise',
};
