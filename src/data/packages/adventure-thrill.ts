import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';
import { hotels, commonExcludes, commonPickup } from '../hotels';
import {
  havelockBeaches,
  elephantBeach,
  neilToPortBlair,
  departureDay,
  rossNorthBay,
  day,
} from '../itineraryDays';

const hav = hotels.symphonyPalms;
const neil = hotels.pearlPark;
const pbCity = hotels.sentinel;

const itinerary5 = [
  day(
    1,
    'Arrival · Corbyn’s Cove jet ski',
    'Port Blair',
    'Land, drop bags, then Corbyn’s Cove for a jet-ski run and Cellular Jail in the evening.',
    [
      'Airport pickup and hotel check-in',
      'Corbyn’s Cove — jet ski included',
      'Cellular Jail and Light & Sound Show',
    ],
    ['Corbyn’s Cove', 'Cellular Jail'],
    pbCity,
    ['Welcome drink']
  ),
  havelockBeaches(2, hav),
  elephantBeach(3, hav, true),
  day(
    4,
    'Return · Chidiya Tapu trek',
    'Port Blair',
    'Afternoon ferry back, then a short coastal walk at Chidiya Tapu for sunset.',
    [
      'Morning dive shop / beach time',
      'Ferry to Port Blair',
      'Chidiya Tapu sunset trail',
    ],
    ['Chidiya Tapu'],
    pbCity
  ),
  departureDay(5, false),
];

const itinerary6 = [
  day(
    1,
    'Arrival · Corbyn’s Cove jet ski',
    'Port Blair',
    'Airport to hotel, then Corbyn’s Cove water time and Cellular Jail after dark.',
    [
      'Airport pickup',
      'Corbyn’s Cove — jet ski included',
      'Cellular Jail Light & Sound Show',
    ],
    ['Corbyn’s Cove', 'Cellular Jail'],
    pbCity,
    ['Welcome drink']
  ),
  havelockBeaches(2, hav),
  elephantBeach(3, hav, true),
  day(
    4,
    'Havelock to Neil · night kayak',
    'Neil Island',
    'Ferry to Neil after the reef morning. Laxmanpur sunset, then a bioluminescence kayak when the plankton is showing.',
    [
      'Late-morning ferry Havelock → Neil',
      'Bharatpur swim',
      'Laxmanpur sunset',
      'Night kayaking (season and glow permitting)',
    ],
    ['Bharatpur Beach', 'Laxmanpur Beach'],
    neil
  ),
  neilToPortBlair(5, pbCity, true),
  departureDay(6),
];

const itinerary7 = [
  ...itinerary6.slice(0, 5),
  rossNorthBay(6, pbCity),
  departureDay(7),
];

export const adventureThrill: Package = {
  title: 'Andaman Adventure Thrill — 6 Days',
  description: 'Scuba, Elephant Beach, jet ski, and a Neil night kayak — 4-star beach cottages, two nights on Havelock so the dives are not rushed.',
  longDescription:
    'Built from the 5N/6D Extended Explore and Elephant Beach plans, then loaded with the activities people actually book: jet ski at Corbyn’s Cove, scuba at Elephant Beach, snorkeling, kayaking, and a Neil bioluminescence paddle when the water lights up. Symphony Palms as the Havelock base — dive-desk convenient, not a villa spa.',
  price: 45999,
  duration: '6 days',
  groupSize: '2–6',
  category: 'Luxury',
  nightsPlan: '1N Port Blair · 2N Havelock · 1N Neil · 1N Port Blair',
  image: '/images/packages/adventure-thrill/hero.jpg',
  features: ['Scuba included', 'Jet ski', 'Night kayaking', 'Elephant Beach', 'Three islands'],
  includes: [
    '5 nights in 3/4-star beach resorts with GST',
    'Daily breakfast',
    'Private AC vehicle',
    'Inter-island ferries',
    'Scuba for two at Havelock (photos included)',
    'Elephant Beach speedboat, snorkeling, kayaking',
    'One jet-ski ride at Corbyn’s Cove',
    'Night kayaking on Neil (season permitting; mangrove kayak substitute otherwise)',
    'Cellular Jail Light & Sound Show',
    'Airport pickup and drop',
  ],
  excludes: commonExcludes,
  itinerary: itinerary6,
  itineraries: { 5: itinerary5, 6: itinerary6, 7: itinerary7 },
  highlights: [
    { title: 'Scuba is not extra', description: 'One proper Havelock dive in the package, not a beach tout.', image: '/images/packages/adventure-thrill/hero.jpg' },
    { title: 'Night kayak on Neil', description: 'Bioluminescence when the plankton is up; mangrove kayak if it is not.', image: '/images/packages/adventure-thrill/hero.jpg' },
    { title: 'Two nights Havelock', description: 'Dive day is not the same day as the ferry.', image: '/images/packages/adventure-thrill/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 5, pricePerPerson: 39999, title: '4N/5D — Adventure express' },
    { days: 6, pricePerPerson: 45999, title: '5N/6D — Adventure thrill' },
    { days: 7, pricePerPerson: 52999, title: '6N/7D — Add Ross & North Bay' },
  ],
  hotels: [pbCity, hav, neil],
  supplements: [
    { name: 'Sea walk', price: 3500, description: 'Helmet dive at Elephant Beach or North Bay, per person.', availability: ['Havelock'] },
    { name: 'Game fishing half-day', price: 18000, description: 'Shared charter, per boat (up to 4).', availability: ['Havelock'] },
    { name: 'Open Water course', price: 25000, description: 'PADI OW, extra days required.', availability: ['Havelock'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
  slug: 'andaman-adventure-thrill-6-days',
  id: 'adventure-thrill',
};
