import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';
import { hotels, commonExcludes, commonPickup } from '../hotels';
import {
  arrivalPortBlair,
  havelockBeaches,
  elephantBeach,
  chidiyaReturn,
  departureDay,
  day,
} from '../itineraryDays';

const pb = hotels.fortuneBay;
const hav = hotels.tajExotica;

const itinerary4 = [
  arrivalPortBlair(1, pb, ['VIP airport reception']),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav, true),
  departureDay(4, false),
];

const itinerary5 = [
  arrivalPortBlair(1, pb, ['VIP airport reception', 'Welcome drinks at the suite']),
  day(
    2,
    'Port Blair, privately',
    'Port Blair',
    'Cellular Jail with a private guide, Corbyn’s Cove, and premium seating at the Light & Sound Show — no coach group.',
    [
      'Breakfast at Fortune Bay Island',
      'Cellular Jail private tour',
      'Corbyn’s Cove Beach',
      'Premium seating, Light & Sound Show',
    ],
    ['Cellular Jail', 'Corbyn’s Cove', 'Light & Sound Show'],
    pb
  ),
  havelockBeaches(3, hav, true),
  elephantBeach(4, hav, true),
  departureDay(5),
];

const itinerary6 = [
  arrivalPortBlair(1, pb, ['VIP airport reception']),
  day(
    2,
    'Port Blair, privately',
    'Port Blair',
    'Heritage morning at an easy pace, then an afternoon by the Fortune pool.',
    [
      'Cellular Jail private tour',
      'Corbyn’s Cove',
      'Premium Light & Sound Show seating',
    ],
    ['Cellular Jail', 'Corbyn’s Cove'],
    pb
  ),
  havelockBeaches(3, hav, true),
  elephantBeach(4, hav, true),
  chidiyaReturn(5, pb),
  departureDay(6),
];

export const luxury4n5d: Package = {
  title: 'Luxury Escape — 4N/5D Premium',
  description: 'Five days on Fortune Bay Island and Taj Exotica: private heritage, Radhanagar, scuba with video, and a spa hour — no Neil squeeze.',
  longDescription:
    'The deluxe 4N/5D Havelock plan, run at 5-star. One night to land at Fortune, a full Port Blair heritage day, then two nights at Taj Exotica so Radhanagar and Elephant Beach are separate. Neil is left off on purpose — five days cannot hold three islands without checkout fatigue. Room rates at Taj typically sit ₹26,000–₹42,000 a night; the package price reflects that, with a working margin, not a bait figure.',
  price: 74999,
  duration: '5 days',
  groupSize: '2–4',
  category: 'Luxury',
  nightsPlan: '2N Port Blair · 2N Havelock',
  image: '/images/packages/luxury-4n5d/hero.jpg',
  features: ['Taj Exotica', 'Fortune Bay Island', 'Scuba with video', 'Private guide', 'Spa session'],
  includes: [
    '4 nights: Fortune Resort Bay Island + Taj Exotica (or same 5-star band)',
    'Daily gourmet breakfast',
    'Private luxury vehicle',
    'Premium / Royal class ferry',
    'Scuba for two with videography',
    'Elephant Beach speedboat, snorkeling, kayaking',
    'One 60-minute spa session',
    'Radhanagar professional photoshoot',
    'Premium Light & Sound Show seating',
    'VIP-style airport handling',
    'GST and listed tickets',
  ],
  excludes: commonExcludes,
  itinerary: itinerary5,
  itineraries: { 4: itinerary4, 5: itinerary5, 6: itinerary6 },
  highlights: [
    { title: 'Taj for two nights', description: 'Enough to use the beach, the spa, and the dive desk.', image: '/images/packages/luxury-4n5d/hero.jpg' },
    { title: 'No fake Neil day', description: 'Five days, two islands, done properly.', image: '/images/packages/luxury-4n5d/hero.jpg' },
    { title: 'Scuba in the quote', description: 'Instructor, kit, and video — not an upsell at the hut.', image: '/images/packages/luxury-4n5d/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 4, pricePerPerson: 67999, title: '3N/4D — Express luxury' },
    { days: 5, pricePerPerson: 74999, title: '4N/5D — Premium' },
    { days: 6, pricePerPerson: 84999, title: '5N/6D — Extra Havelock evening' },
  ],
  hotels: [pb, hav],
  supplements: [
    { name: 'Private yacht', price: 18000, description: 'Sunset charter for the room.', availability: ['Havelock'] },
    { name: 'Additional spa', price: 4000, description: 'Extra 60-minute treatment.', availability: ['Havelock', 'Port Blair'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
  slug: 'luxury-escape-4n5d-premium',
  id: 'luxury-4n5d',
};
