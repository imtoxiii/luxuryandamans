import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';
import { hotels, commonExcludes, commonPickup } from '../hotels';
import {
  arrivalPortBlair,
  havelockBeaches,
  elephantBeachThenReturn,
  departureDay,
  chidiyaReturn,
  elephantBeach,
} from '../itineraryDays';

const pb = hotels.haywizz;
const hav = hotels.silverSand;

const itinerary4 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav),
  elephantBeachThenReturn(3, pb),
  departureDay(4, false),
];

const itinerary5 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav),
  elephantBeach(3, hav),
  chidiyaReturn(4, pb),
  departureDay(5),
];

export const shortBreak3n4d: Package = {
  title: 'Andaman Short Break — 3N/4D',
  description: 'A four-day landing: Cellular Jail, one night on Havelock for Radhanagar, Elephant Beach snorkeling, then the flight home.',
  longDescription:
    'From our Smart 3N/4D Elephant Beach Special and the Port Blair–Havelock quick plan. Four days cannot hold Neil. This keeps Cellular Jail on night one, Radhanagar on night two, and a morning reef at Elephant Beach before the return ferry. 3-star stays, private car, government or private cruise as available.',
  price: 19999,
  duration: '4 days',
  groupSize: '2–6',
  category: 'Standard',
  nightsPlan: '1N Port Blair · 1N Havelock · 1N Port Blair',
  image: '/images/packages/honeymoon-4n5d/hero.jpg',
  features: ['4-day short trip', 'Radhanagar sunset', 'Elephant Beach', '3-star hotels', 'Private car'],
  includes: [
    '3 nights in 3-star hotels with GST',
    'Daily breakfast',
    'Private AC vehicle',
    'Port Blair ↔ Havelock ferry',
    'Elephant Beach speedboat and snorkeling',
    'Cellular Jail Light & Sound Show',
    'Airport pickup and drop',
  ],
  excludes: commonExcludes,
  itinerary: itinerary4,
  itineraries: { 4: itinerary4, 5: itinerary5 },
  highlights: [
    { title: 'Built for a long weekend', description: 'Four days, two islands, no fake Neil stop.', image: '/images/packages/honeymoon-4n5d/hero.jpg' },
    { title: 'Elephant Beach in the quote', description: 'Snorkel the house reef before you sail back.', image: '/images/packages/honeymoon-4n5d/hero.jpg' },
    { title: 'Named 3-star rooms', description: 'Haywizz and Silver Sand — or the same band.', image: '/images/packages/honeymoon-4n5d/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 4, pricePerPerson: 19999, title: '3N/4D — Short break' },
    { days: 5, pricePerPerson: 24999, title: '4N/5D — Extra Havelock night' },
  ],
  hotels: [pb, hav],
  supplements: [
    { name: 'Discover Scuba', price: 4500, description: 'One dive per person at Havelock.', availability: ['Havelock'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
  slug: 'andaman-short-break-3n4d',
  id: 'honeymoon-4n5d',
};
