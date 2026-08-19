import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';
import { hotels, commonExcludes, commonPickup } from '../hotels';
import {
  arrivalPortBlair,
  havelockBeaches,
  elephantBeach,
  chidiyaReturn,
  rossNorthBay,
  departureDay,
} from '../itineraryDays';

const pb = hotels.haywizz;
const hav = hotels.silverSand;

const itinerary5 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav),
  chidiyaReturn(4, pb),
  departureDay(5),
];

const itinerary6 = [
  arrivalPortBlair(1, pb),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav),
  chidiyaReturn(4, pb),
  rossNorthBay(5, pb),
  departureDay(6),
];

export const havelockExtendedExplore: Package = {
  title: 'Havelock Extended Explore — 5N/6D',
  description: 'Two nights on Havelock for Radhanagar and Elephant Beach, then Chidiya Tapu and a Ross & North Bay day — no Neil ferry.',
  longDescription:
    'The 5 Nights 6 Days Extended Explore itinerary. Havelock gets two nights so the beach and the reef are separate. Back in Port Blair: Chidiya Tapu sunset, then Ross Island and North Bay. For travellers who want more Havelock and the historical islands, without a third check-in on Neil.',
  price: 28999,
  duration: '6 days',
  groupSize: '2–6',
  category: 'Standard',
  nightsPlan: '1N Port Blair · 2N Havelock · 2N Port Blair',
  image: '/images/packages/adventure-thrill/hero.jpg',
  features: ['2N Havelock', 'Elephant Beach', 'Chidiya Tapu', 'Ross Island', 'No Neil hop'],
  includes: [
    '5 nights in 3-star hotels with GST',
    'Daily breakfast',
    'Private AC vehicle',
    'Port Blair ↔ Havelock ferry',
    'Elephant Beach speedboat and snorkeling',
    'Kayaking for two',
    'Complimentary Radhanagar photoshoot',
    'Ross Island & North Bay boats',
    'Cellular Jail Light & Sound Show',
    'Airport pickup and drop',
  ],
  excludes: commonExcludes,
  itinerary: itinerary6,
  itineraries: { 5: itinerary5, 6: itinerary6 },
  highlights: [
    { title: 'Havelock held for two nights', description: 'Radhanagar one day, Elephant Beach the next.', image: '/images/packages/adventure-thrill/hero.jpg' },
    { title: 'Ross without Neil', description: 'The historical boat day sits after Chidiya Tapu, not instead of the beach.', image: '/images/packages/adventure-thrill/hero.jpg' },
    { title: 'Fewer ferry queues', description: 'One return crossing from Havelock — then boats from Port Blair.', image: '/images/packages/adventure-thrill/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 5, pricePerPerson: 24999, title: '4N/5D — Skip Ross' },
    { days: 6, pricePerPerson: 28999, title: '5N/6D — Extended explore' },
  ],
  hotels: [pb, hav],
  supplements: [
    { name: 'Discover Scuba', price: 4500, description: 'Per person, Elephant Beach.', availability: ['Havelock'] },
    { name: 'Jet ski', price: 1500, description: 'One ride.', availability: ['Havelock'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
  slug: 'havelock-extended-explore-5n6d',
  id: 'adventure-thrill',
};
