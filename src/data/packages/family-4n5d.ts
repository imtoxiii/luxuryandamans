import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';
import { hotels, commonExcludes, commonPickup } from '../hotels';
import {
  arrivalPortBlair,
  havelockBeaches,
  elephantBeach,
  chidiyaReturn,
  departureDay,
  neilArrival,
  neilToPortBlair,
} from '../itineraryDays';

const pb = hotels.sinclairs;
const hav = hotels.seashellHavelock;
const neil = hotels.seashellNeil;

const itinerary4 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav),
  elephantBeach(3, hav),
  departureDay(4, false),
];

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

export const family4n5d: Package = {
  title: 'Family Fun — 4N/5D Quick Getaway',
  description: 'A short family run: Sinclairs in Port Blair, SeaShell on Havelock, Elephant Beach snorkeling, and a last-evening Chidiya Tapu sunset. Neil waits for a longer trip.',
  longDescription:
    'Mapped from the Smart 4N/5D and Deluxe 4N/5D family-friendly plans. With children, four nights cannot hold Neil without a checkout every morning. This keeps 2 nights on Havelock so Elephant Beach is a full morning, not a dash. Family rooms at Sinclairs and SeaShell, glass-bottom optional as a supplement, life jackets on the speedboat.',
  price: 27999,
  duration: '5 days',
  groupSize: '4–8',
  category: 'Family',
  nightsPlan: '1N Port Blair · 2N Havelock · 1N Port Blair',
  image: '/images/packages/family-4n5d/hero.jpg',
  features: ['Family rooms', 'Kid-safe snorkeling', '2N Havelock', 'Private car', 'Chidiya Tapu'],
  includes: [
    '4 nights in 4-star family hotels with GST (extra bed as quoted)',
    'Daily breakfast for the family',
    'Private AC vehicle — no shared coach',
    'Inter-island ferry',
    'Elephant Beach speedboat with snorkeling and child life jackets',
    'Kayaking for two adults',
    'Cellular Jail visit and Light & Sound Show',
    'Airport pickup and drop',
  ],
  excludes: [...commonExcludes, 'Extra bed charges if a third adult shares'],
  itinerary: itinerary5,
  itineraries: { 4: itinerary4, 5: itinerary5, 6: itinerary6 },
  highlights: [
    { title: 'Havelock held for two nights', description: 'Kids are not ferry-hopping three islands in five days.', image: '/images/packages/family-4n5d/hero.jpg' },
    { title: 'Sinclairs + SeaShell', description: 'Family rooms and a kids’ pool — named, not “similar 3-star”.', image: '/images/packages/family-4n5d/hero.jpg' },
    { title: 'Snorkel, not scuba pressure', description: 'Elephant Beach reef in shallow water. Scuba stays optional.', image: '/images/packages/family-4n5d/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 4, pricePerPerson: 23999, title: '3N/4D — Ultra short' },
    { days: 5, pricePerPerson: 27999, title: '4N/5D — Family fun' },
    { days: 6, pricePerPerson: 34999, title: '5N/6D — Add Neil' },
  ],
  hotels: [pb, hav],
  supplements: [
    { name: 'Glass-bottom boat', price: 1500, description: 'Per person, Elephant Beach.', availability: ['Havelock'] },
    { name: 'Kids birthday cake', price: 2000, description: 'Hotel bakery cake, evening reveal.', availability: ['Havelock', 'Port Blair'] },
    { name: 'Discover Scuba (age 10+)', price: 4500, description: 'Per person, with instructor.', availability: ['Havelock'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
  slug: 'family-fun-4n5d-quick-getaway',
  id: 'family-4n5d',
};
