import { BlogPost } from '../../types/blog';

const post: BlogPost = {
  id: 'andaman-top-things-to-do',
  title: 'Top 15 Things To Do in Andaman for Every Traveler',
  slug: 'top-things-to-do-in-andaman',
  excerpt:
    'From Radhanagar sunsets to bioluminescence nights, here are the must-do experiences in Andaman for couples, families, and adventure seekers.',
  image:
    'https://images.unsplash.com/photo-1523057154210-1b07a9ff95e5?q=80&w=1935&auto=format&fit=crop',
  author: {
    name: 'Luxury Andamans Team',
    avatar: 'https://i.pravatar.cc/150?img=32',
    bio: 'Local experts crafting unforgettable island experiences across the Andaman archipelago.'
  },
  date: new Date().toISOString(),
  readTime: '8 min read',
  category: 'Experiences',
  tags: ['things to do', 'radhanagar', 'elephant beach', 'island hopping', 'bioluminescence'],
  relatedPosts: ['andaman-itinerary-7-days', 'andaman-scuba-guide'],
  content: `
## Don’t miss these classics
1. Sunset at Radhanagar Beach (Havelock)
2. Snorkeling at Elephant Beach
3. Natural Bridge walk at Neil
4. Light & Sound at Cellular Jail
5. Glass-bottom boat at North Bay

## Adventure picks
- Scuba diving (beginner and advanced)
- Kayaking through mangroves
- Night bioluminescence tours

## Slow travel ideas
- Café hopping in Havelock
- Cycling around Neil’s back roads
- Watching sunrise at Kalapathar, sunset at Laxmanpur

## What next?
- Plan with our [7-day Andaman itinerary](/blog/7-day-andaman-itinerary)
- Time your trip with the [Best Time to Visit](/blog/best-time-to-visit-andaman)
- Scuba-curious? Read the [Scuba Guide](/blog/andaman-scuba-diving-guide)
- Explore [Packages](/packages) or [Contact](/contact)`
 
};

export default post;


