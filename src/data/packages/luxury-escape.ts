import { Package } from '../packages';
import { commonPaymentPolicy, commonTips, commonCancellationPolicy, commonTerms } from '../commonPolicies';
import { hotels, commonExcludes, commonPickup } from '../hotels';
import {
  arrivalPortBlair,
  havelockBeaches,
  elephantBeach,
  neilArrival,
  neilToPortBlair,
  rossNorthBay,
  jollyBuoy,
  baratang,
  departureDay,
} from '../itineraryDays';

const pb = hotels.fortuneBay;
const hav = hotels.tajExotica;
const neil = hotels.seashellNeil;

const itinerary6 = [
  arrivalPortBlair(1, pb, ['VIP airport reception']),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav, true),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  departureDay(6),
];

const itinerary7 = [
  arrivalPortBlair(1, pb, ['VIP airport reception', 'Welcome drinks']),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav, true),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  rossNorthBay(6, pb),
  departureDay(7),
];

const itinerary9 = [
  arrivalPortBlair(1, pb, ['VIP airport reception', 'Welcome drinks', 'Briefing with your concierge']),
  havelockBeaches(2, hav, true),
  elephantBeach(3, hav, true),
  neilArrival(4, neil),
  neilToPortBlair(5, pb, true),
  rossNorthBay(6, pb),
  baratang(7, pb),
  jollyBuoy(8, pb),
  departureDay(9),
];

export const luxuryEscape: Package = {
  title: 'Luxury Island Escape — 6N/7D',
  description: 'Ultra-luxury complete Andaman: Taj Exotica, Fortune Bay Island, scuba with video, spa, and the three-island circuit with Ross & North Bay.',
  longDescription:
    'The Complete Andaman 7-day plan at 5-star. Two nights at Taj Exotica on Havelock, SeaShell Neil, Fortune in Port Blair, then Ross and North Bay before you fly. The 9-day option adds Baratang limestone caves and Jolly Buoy — the same arc as our 9 Days 8 Nights Escape base itinerary, without turning Havelock into a one-night stop.',
  price: 96999,
  duration: '7 days',
  groupSize: '2–4',
  category: 'Luxury',
  nightsPlan: '1N Port Blair · 2N Havelock · 1N Neil · 2N Port Blair',
  image: '/images/packages/luxury-escape/hero/hero.jpg',
  features: ['Taj Exotica', '5-star Port Blair', 'Scuba with video', 'Spa', 'Ross & North Bay'],
  includes: [
    '6 nights in 5-star / upper-4-star resorts with GST',
    'Daily gourmet breakfast',
    'Private luxury vehicle throughout',
    'Royal / premium class ferries',
    'Scuba for two with professional videography',
    'Elephant Beach speedboat, snorkeling, kayaking',
    'Two 60-minute spa sessions',
    'One candlelight dinner',
    'Radhanagar photoshoot',
    'Ross Island & North Bay boats',
    'Personal concierge on the islands',
    'All listed tickets and GST',
  ],
  excludes: commonExcludes,
  itinerary: itinerary7,
  itineraries: { 6: itinerary6, 7: itinerary7, 9: itinerary9 },
  highlights: [
    { title: 'The full circuit, 5-star', description: 'Havelock still gets two nights. Extra days add islands, they do not steal Havelock.', image: '/images/packages/luxury-escape/hero/hero.jpg' },
    { title: '9-day Escape option', description: 'Baratang and Jolly Buoy when you have the week to match the base itinerary.', image: '/images/packages/luxury-escape/hero/hero.jpg' },
    { title: 'Named villas', description: 'Taj, Fortune, SeaShell Neil — room categories listed with nightly bands.', image: '/images/packages/luxury-escape/hero/hero.jpg' },
  ],
  terms: commonTerms,
  paymentPolicy: commonPaymentPolicy,
  tips: commonTips,
  pricingOptions: [
    { days: 6, pricePerPerson: 86999, title: '5N/6D — Three islands' },
    { days: 7, pricePerPerson: 96999, title: '6N/7D — Complete luxury' },
    { days: 9, pricePerPerson: 118999, title: '8N/9D — Escape: Baratang + Jolly Buoy' },
  ],
  hotels: [pb, hav, neil],
  supplements: [
    { name: 'Private yacht sunset', price: 18000, description: 'Charter for your room.', availability: ['Havelock'] },
    { name: 'Jalakara upgrade (Havelock)', price: 12000, description: 'Swap Taj nights to Jalakara pool villa where dates allow, per night difference approx.', availability: ['Havelock'] },
  ],
  pickupLocations: commonPickup,
  cancellationPolicy: commonCancellationPolicy,
  slug: 'luxury-island-escape-7-days',
  id: 'luxury-escape',
};
