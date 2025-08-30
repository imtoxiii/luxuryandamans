import { BlogPost } from '../../types/blog';

const post: BlogPost = {
  id: 'andaman-family-itinerary',
  title: 'Andaman with Family: Easy 5-Day Itinerary with Kids',
  slug: 'andaman-family-itinerary',
  excerpt:
    'A relaxed 5-day plan covering Port Blair, Havelock, and Neil with kid-friendly beaches, short transfers, and flexible activities.',
  image:
    'https://images.unsplash.com/photo-1543648973-11ac2031fd0d?q=80&w=1935&auto=format&fit=crop',
  author: {
    name: 'Luxury Andamans Team',
    avatar: 'https://i.pravatar.cc/150?img=36',
    bio: 'Local experts crafting unforgettable island experiences across the Andaman archipelago.'
  },
  date: new Date().toISOString(),
  readTime: '7 min read',
  category: 'Family Travel',
  tags: ['family', 'kids', 'itinerary', 'beaches', 'port blair', 'havelock', 'neil'],
  relatedPosts: ['andaman-top-things-to-do', 'andaman-best-time'],
  content: `
## Why families love this route
- Short ferry hops, safe lagoons, and plenty of downtime.

## Day-by-day
- Day 1: Port Blair arrival, Cellular Jail show (optional for young kids)
- Day 2: Ferry to Havelock; Radhanagar sunset; early dinner
- Day 3: Elephant Beach by boat; glass-bottom ride; nap + ice cream
- Day 4: Ferry to Neil; Bharatpur lagoon; cycle rental; Natural Bridge (sunset)
- Day 5: Return to Port Blair; airport

## Kid-friendly tips
- Pack snacks, floaters, hats, and mineral sunscreen
- Book early morning ferries to match nap times
- Choose ground-floor rooms near the beach

## Next steps
See our [Top Things To Do in Andaman](/blog/top-things-to-do-in-andaman) and [Best Time to Visit](/blog/best-time-to-visit-andaman). Ready to plan? Check [packages](/packages) or [contact us](/contact).
`
};

export default post;


