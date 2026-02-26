import basePosts from './andaman-7-day-itinerary';
import bestTime from './andaman-best-time';
import topThings from './andaman-top-things-to-do';
import budgetGuide from './andaman-budget-guide';
import scubaGuide from './andaman-scuba-guide';
import honeymoonGuide from './andaman-honeymoon-guide';
import { blogPosts as existingPosts } from '../blogPosts';
import type { BlogPost } from '../../types/blog';
import foodGuide from './andaman-food-guide';
import familyItinerary from './andaman-family-itinerary';
import portBlairDay from './port-blair-one-day-plan';
import delhiPlan from './delhi-to-andaman-trip-plan';
import mumbaiPlan from './mumbai-to-andaman-trip-plan';
import bangalorePlan from './bangalore-to-andaman-trip-plan';
import chennaiPlan from './chennai-to-andaman-trip-plan';
import hyderabadPlan from './hyderabad-to-andaman-trip-plan';
import kolkataPlan from './kolkata-to-andaman-trip-plan';
import punePlan from './pune-to-andaman-trip-plan';
import bioluminescence2026 from './andaman-bioluminescence-guide-2026';
import scubaPrices2026 from './andaman-scuba-prices-2026';
import budgetEmi2026 from './andaman-budget-emi-2026';
import honeymoonItin2026 from './andaman-honeymoon-itinerary-2026';
import monsoonGuide2026 from './andaman-monsoon-travel-guide-2026';
import luxuryResorts2026 from './andaman-luxury-resorts-2026';
import flightVsShip from './how-to-reach-andaman-flight-vs-ship';
import safetyGuide from './is-andaman-safe-for-tourists';
import internetGuide from './mobile-network-internet-in-andaman';
import vegFoodGuide from './vegetarian-food-in-andaman';
import permitGuide from './andaman-permit-guide-indian-tourists';
import packingGuide from './what-to-pack-for-andaman-trip';
import shoppingGuide from './shopping-in-andaman-what-to-buy';
import ferryGuide from './andaman-ferry-booking-guide';
import waterSportsPrices from './water-sports-price-list-andaman';
import baratangGuide from './how-to-visit-baratang-island';

import andamanVsLakshadweep from './andaman-vs-lakshadweep';
import andamanVsBali from './andaman-vs-bali';
import soloTripGuide from './andaman-solo-trip-guide';
import instagramSpots from './andaman-instagram-spots';
import nightlifeGuide from './andaman-nightlife-guide';
import topThings2025 from './andaman-top-things-to-do';
import andamanTourism2026 from './andaman-tourism-trends-2026';
import firstTimers2026 from './first-timers-guide-andaman-2026';
import ecoResorts2026 from './new-eco-resorts-andaman-2026';
import scuba2026 from './andaman-scuba-diving-2026';
import digitalNomad2026 from './digital-nomad-andaman-2026';
import ferryGuide2026 from './andaman-ferry-guide-2026';
import safety2026 from './is-andaman-safe-2026';
import packing2026 from './sustainable-packing-list-2026';
import couplesItinerary2026 from './andaman-couples-itinerary-2026';
import familyItinerary2026 from './andaman-family-itinerary-2026';

import scubaBeginnersGuide from './andaman-scuba-diving-beginners-guide';
import bestBeachesRanked from './best-beaches-andaman-ranked';
import packingListChecklist from './andaman-packing-list-checklist';

import newFerryServices2026 from './new-ferry-services-2026';
import bestBeachAward from './best-beach-award-2024';
import itf2026 from './island-tourism-festival-2026';
import hiddenFacts from './hidden-andaman-facts-2026';
import destinationWedding from './andaman-destination-wedding-guide-2026';
import seaWalkGuide from './andaman-sea-walk-guide-2026';
import glassBottomBoat from './andaman-glass-bottom-boat-guide-2026';
import internetGuide2026 from './andaman-internet-connectivity-guide-2026';
import vegFood2026 from './andaman-vegetarian-food-guide-2026';
import havelockVsNeil2026 from './havelock-vs-neil-island-guide-2026';
import scooterGuide2026 from './how-to-rent-scooter-andaman-2026';
import tribesGuide2026 from './what-tribes-live-in-andaman-2026';
import rainyDayGuide2026 from './what-to-do-rainy-day-andaman-2026';
import bestRestaurants2026 from './best-restaurants-in-andaman-2026';
import snorkelingGuide2026 from './andaman-snorkeling-guide-2026';
import photographyGuide2026 from './andaman-photography-guide-2026';
import tripCost2026 from './andaman-trip-cost-2026';

const newPosts: BlogPost[] = [
  newFerryServices2026,
  bestBeachAward,
  itf2026,
  hiddenFacts,
  basePosts,
  bestTime,
  topThings,
  budgetGuide,
  scubaGuide,
  honeymoonGuide,
  foodGuide,
  familyItinerary,
  portBlairDay,
  delhiPlan,
  mumbaiPlan,
  bangalorePlan,
  chennaiPlan,
  hyderabadPlan,
  kolkataPlan,
  punePlan,
  bioluminescence2026,
  scubaPrices2026,
  budgetEmi2026,
  honeymoonItin2026,
  monsoonGuide2026,
  luxuryResorts2026,
  flightVsShip,
  safetyGuide,
  internetGuide,
  vegFoodGuide,
  permitGuide,
  packingGuide,
  shoppingGuide,
  ferryGuide,
  waterSportsPrices,
  baratangGuide,
  andamanVsLakshadweep,
  andamanVsBali,
  soloTripGuide,
  instagramSpots,
  nightlifeGuide,
  topThings2025,
  andamanTourism2026,
  firstTimers2026,
  ecoResorts2026,
  scuba2026,
  digitalNomad2026,
  ferryGuide2026,
  safety2026,
  packing2026,
  couplesItinerary2026,
  familyItinerary2026,
  scubaBeginnersGuide,
  bestBeachesRanked,
  packingListChecklist,
  destinationWedding,
  seaWalkGuide,
  glassBottomBoat,
  internetGuide2026,
  vegFood2026,
  havelockVsNeil2026,
  scooterGuide2026,
  tribesGuide2026,
  rainyDayGuide2026,
  bestRestaurants2026,
  snorkelingGuide2026,
  photographyGuide2026,
  tripCost2026
];

// Merge and sort by date (newest first)
export const blogPosts: BlogPost[] = [...newPosts, ...existingPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default blogPosts;


