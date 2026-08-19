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
  chidiyaReturn,
} from '../itineraryDays';

const pb = hotels.sinclairs;
const hav = hotels.seashellHavelock;
const neil = hotels.seashellNeil;

const itinerary5 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav),
  elephantBeach(3, hav),
  chidiyaReturn(4, pb),
  departureDay(5),
];

const itinerary6 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav),
  elephantBeach(3, hav),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  departureDay(6),
];

const itinerary7 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav),
  elephantBeach(3, hav),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  rossNorthBay(6, pb),
  departureDay(7),
];

export const familyParadise: Package = {
  title: 'Family Paradise — 5N/6D',
  description: 'The complete family circuit: Sinclairs, SeaShell Havelock, SeaShell Neil, Elephant Beach, Natural Bridge, and a Chidiya Tapu sunset — paced for kids 5+.',
  longDescription:
    'Our 5N/6D Elephant Beach & Chidiya Tapu itinerary, written for families. Same 1–2–1–1 night split as the honeymoon, with interconnecting / extra-bed rooms, a glass-bottom boat, and no forced scuba. Ross Island deer and peacocks sit on the 7-day option so the sixth morning is not another 5 a.m. alarm.',
  price: 36999,
  duration: '6 days',
  groupSize: '4–8',
  category: 'Family',
  nightsPlan: '1N Port Blair · 2N Havelock · 1N Neil · 1N Port Blair',
  image: '/images/packages/family-paradise/hero.jpg',
  features: ['Family rooms', 'Three islands', 'Glass-bottom boat', 'Kid-safe reef', 'Private car'],
  includes: [
    '5 nights in 4-star family rooms / cottages with GST',
    'Daily breakfast for all named guests',
    'Private AC family vehicle',
    'Makruzz / Nautika ferries',
    'Elephant Beach speedboat, snorkeling, child life jackets',
    'Glass-bottom boat for the family',
    'Kayaking for two adults',
    'Cellular Jail with a slower, kid-aware visit',
    'Light & Sound Show tickets',
    'Airport pickup and drop',
  ],
  excludes: [...commonExcludes, 'Babysitting'],
  itinerary: itinerary6,
  itineraries: { 5: itinerary5, 6: itinerary6, 7: itinerary7 },
  highlights: [
    { title: 'Named family hotels', description: 'Sinclairs Bayview and SeaShell — extra beds and connecting rooms as quoted.', image: '/images/packages/family-paradise/hero.jpg' },
    { title: 'Glass-bottom included', description: 'Kids see the reef without a mask panic.', image: '/images/packages/family-paradise/hero.jpg' },
    { title: 'Neil at the right length', description: 'One night: Bharatpur, Laxmanpur, Natural Bridge, then home.', image: '/images/packages/family-paradise/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 5, pricePerPerson: 30999, title: '4N/5D — Family express' },
    { days: 6, pricePerPerson: 36999, title: '5N/6D — Family paradise' },
    { days: 7, pricePerPerson: 43999, title: '6N/7D — Add Ross Island' },
  ],
  hotels: [pb, hav, neil],
  supplements: [
    { name: 'Kids birthday cake', price: 2000, description: 'Hotel cake with a name plaque.', availability: ['Havelock'] },
    { name: 'Discover Scuba (age 10+)', price: 4500, description: 'Per person.', availability: ['Havelock'] },
    { name: 'Babysitting (4 hours)', price: 1500, description: 'Subject to hotel staff, not guaranteed every night.', availability: ['Havelock', 'Port Blair'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
  slug: 'family-paradise-6-days',
  id: 'family-paradise',
};
