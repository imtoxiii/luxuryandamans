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

const pb = hotels.sentinel;
const hav = hotels.havelockIslandBeach;
const neil = hotels.summerSands;

const itinerary4 = [
  arrivalPortBlair(1, pb, ['Flower garland welcome']),
  havelockBeaches(2, hav, true),
  chidiyaReturn(3, pb),
  departureDay(4, false),
];

const itinerary5 = [
  arrivalPortBlair(1, pb, ['Flower garland welcome']),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav),
  chidiyaReturn(4, pb),
  departureDay(5),
];

const itinerary6 = [
  arrivalPortBlair(1, pb, ['Flower garland welcome']),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  departureDay(6),
];

export const honeymoon4n5d: Package = {
  title: '4N/5D Andaman Honeymoon Special',
  description: 'A compact deluxe honeymoon: Port Blair history, two nights on Havelock, Radhanagar photoshoot, Elephant Beach, and a Chidiya Tapu sunset.',
  longDescription:
    'Drawn from our 4 Nights 5 Days Deluxe itinerary. Couples with five days should not squeeze Neil in — you would check out every morning. This plan holds Havelock for two nights so the cruise, Radhanagar, and Elephant Beach each have air. 4-star cottages, private car, couple photoshoot, and flower setup on arrival.',
  price: 34999,
  duration: '5 days',
  groupSize: '2',
  category: 'Honeymoon',
  nightsPlan: '1N Port Blair · 2N Havelock · 1N Port Blair',
  image: '/images/packages/honeymoon-4n5d/hero.jpg',
  features: ['4-star cottages', 'Radhanagar photoshoot', 'Elephant Beach', 'Private transfers', 'Flower setup'],
  includes: [
    '4 nights in 4-star hotels / beach cottages with GST',
    'Daily breakfast',
    'Private AC car throughout',
    'Premium ferry (Makruzz / Nautika)',
    'Complimentary couple photoshoot at Radhanagar',
    'Elephant Beach speedboat and snorkeling',
    'Kayaking for two',
    'Flower bed / room setup on first Havelock night',
    'Cellular Jail Light & Sound Show',
    'Airport pickup and drop',
  ],
  excludes: commonExcludes,
  itinerary: itinerary5,
  itineraries: { 4: itinerary4, 5: itinerary5, 6: itinerary6 },
  highlights: [
    { title: 'Two nights on Havelock', description: 'The beach and the reef are not crammed into one afternoon.', image: '/images/packages/honeymoon-4n5d/hero.jpg' },
    { title: 'Radhanagar photoshoot', description: 'A photographer on Asia’s most photographed sand — included.', image: '/images/packages/honeymoon-4n5d/hero.jpg' },
    { title: 'Chidiya Tapu close', description: 'Last evening on the southern tip, not in a souvenir shop.', image: '/images/packages/honeymoon-4n5d/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 4, pricePerPerson: 29999, title: '3N/4D — Quick couple getaway' },
    { days: 5, pricePerPerson: 34999, title: '4N/5D — Deluxe honeymoon' },
    { days: 6, pricePerPerson: 42999, title: '5N/6D — Add Neil Island' },
  ],
  hotels: [pb, hav],
  supplements: [
    { name: 'Candlelight dinner', price: 7000, description: 'Beach or jetty-side table for two.', availability: ['Havelock'] },
    { name: 'Discover Scuba', price: 4500, description: 'One dive per person with instructor.', availability: ['Havelock'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
  slug: '4n5d-andaman-honeymoon-special',
  id: 'honeymoon-4n5d',
};
