import { BlogPost } from '../../types/blog';

const post: BlogPost = {
  id: 'andaman-scuba-guide',
  title: 'Scuba Diving in Andaman: Beginner to Advanced Guide',
  slug: 'andaman-scuba-diving-guide',
  excerpt:
    'Everything you need to know about scuba in Andaman—best dive sites, seasons, prices, certifications, and safety tips.',
  image:
    'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1935&auto=format&fit=crop',
  author: {
    name: 'Luxury Andamans Team',
    avatar: 'https://i.pravatar.cc/150?img=45',
    bio: 'Local experts crafting unforgettable island experiences across the Andaman archipelago.'
  },
  date: new Date().toISOString(),
  readTime: '11 min read',
  category: 'Adventure',
  tags: ['scuba', 'diving', 'padi', 'ssi', 'elephant beach', 'lighthouse reef'],
  relatedPosts: ['andaman-best-time', 'andaman-top-things-to-do'],
  content: `
## Who is this for?
First-timers, fun divers, and certification seekers—this guide covers it all.

## Top dive sites
- Lighthouse (Havelock)
- Johnny’s Gorge
- Elephant Beach Reef
- Rocky areas around Neil for macro life

## Certifications & pricing
- Discover Scuba: For beginners; shallow, instructor-led
- Open Water: 3–4 days; global certification
- Advanced: For deeper dives and specialities

## Safety tips
- Always dive with certified instructors
- Check weather and visibility reports
- Leave a minimum surface interval before flying

## Plan your dive trip
- Pick dates with our [Best Time to Visit](/blog/best-time-to-visit-andaman)
- Add non-dive days using the [7-day Itinerary](/blog/7-day-andaman-itinerary)
- Explore [Packages](/packages) or [Contact us](/contact) for custom dive plans
`
};

export default post;


