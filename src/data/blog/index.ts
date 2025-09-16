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
import bioluminescence2025 from './andaman-bioluminescence-guide-2025';
import scubaPrices2025 from './andaman-scuba-prices-2025';
import budgetEmi2025 from './andaman-budget-emi-2025';
import honeymoonItin2025 from './andaman-honeymoon-itinerary-2025';
import monsoonGuide2025 from './andaman-monsoon-travel-guide-2025';
import luxuryResorts2025 from './andaman-luxury-resorts-2025';

const newPosts: BlogPost[] = [
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
  bioluminescence2025,
  scubaPrices2025,
  budgetEmi2025,
  honeymoonItin2025,
  monsoonGuide2025,
  luxuryResorts2025
];

// Merge and sort by date (newest first)
export const blogPosts: BlogPost[] = [...newPosts, ...existingPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default blogPosts;


