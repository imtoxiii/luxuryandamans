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

const pb = hotels.haywizz;
const hav = hotels.silverSand;
const neil = hotels.pearlPark;

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
  neilToPortBlair(5, pb, false),
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

export const standardAndaman: Package = {
  title: 'Standard Andaman — 5N/6D Island Hopping',
  description: 'The classic three-island circuit on 3-star stays: Port Blair, Havelock, and Neil, with private transfers and Elephant Beach snorkeling.',
  longDescription:
    'Built from our Smart 5N/6D complete island-hopping plan. One night to land in Port Blair, two nights on Havelock so Radhanagar and Elephant Beach are not the same day, one night on Neil, and a last night back in town before the flight. 3-star hotels, daily breakfast, private AC car, and inter-island cruises. Scuba stays optional so the quote stays honest.',
  price: 29999,
  duration: '6 days',
  groupSize: '2–8',
  category: 'Standard',
  nightsPlan: '1N Port Blair · 2N Havelock · 1N Neil · 1N Port Blair',
  image: '/images/packages/standard-andaman/hero.jpg',
  features: ['3-star hotels', 'All three islands', 'Private AC car', 'Elephant Beach snorkeling', 'Daily breakfast'],
  includes: [
    '5 nights in 3-star hotels with GST (similar category if a named hotel is full)',
    'Daily breakfast (CP plan)',
    'Private AC vehicle for airport, jetty, and sightseeing',
    'Inter-island ferry tickets (Makruzz / Nautika or similar)',
    'Elephant Beach speedboat and complimentary snorkeling',
    'Kayaking for two at Elephant Beach (sea state permitting)',
    'Cellular Jail entry and Light & Sound Show',
    'All listed monument and island entry tickets',
    'Airport pickup and drop',
  ],
  excludes: commonExcludes,
  itinerary: itinerary6,
  itineraries: { 5: itinerary5, 6: itinerary6, 7: itinerary7 },
  highlights: [
    { title: 'Three islands, no rush', description: 'Havelock gets two nights so the beach and the reef are separate days.', image: '/images/packages/standard-andaman/hero.jpg' },
    { title: 'Named 3-star stays', description: 'Haywizz, Silver Sand, Pearl Park — or the same star band if sold out.', image: '/images/packages/standard-andaman/hero.jpg' },
    { title: 'Private car, not a coach', description: 'Airport, jetties, and sightseeing in your own AC vehicle.', image: '/images/packages/standard-andaman/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 5, pricePerPerson: 24999, title: '4N/5D — Port Blair & Havelock' },
    { days: 6, pricePerPerson: 29999, title: '5N/6D — Complete island hopping' },
    { days: 7, pricePerPerson: 35999, title: '6N/7D — Plus Ross & North Bay' },
  ],
  hotels: [pb, hav, neil],
  supplements: [
    { name: 'Discover Scuba (Havelock)', price: 4500, description: 'One confined-water / shore dive with instructor, per person.', availability: ['Havelock'] },
    { name: 'Jet ski (Elephant Beach)', price: 1500, description: 'One ride, pay on the beach or pre-book.', availability: ['Havelock'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
  slug: 'standard-andaman-package-5n6d',
  id: 'standard-andaman',
};
