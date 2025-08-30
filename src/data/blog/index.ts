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

const newPosts: BlogPost[] = [
  basePosts,
  bestTime,
  topThings,
  budgetGuide,
  scubaGuide,
  honeymoonGuide,
  foodGuide,
  familyItinerary,
  portBlairDay
];

// Merge and sort by date (newest first)
export const blogPosts: BlogPost[] = [...newPosts, ...existingPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default blogPosts;


