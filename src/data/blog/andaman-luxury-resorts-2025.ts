import { BlogPost } from '../../types/blog';

const post: BlogPost = {
  id: 'andaman-luxury-resorts-2025',
  title: 'Best Luxury Resorts in Andaman (2025): Havelock, Neil & Port Blair',
  slug: 'andaman-luxury-resorts-2025',
  excerpt:
    'Handpicked luxury resorts in Andaman for 2025 with locations, price bands, who it suits, and booking tips.',
  image:
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1887&q=80',
  author: {
    name: 'Luxury Andamans Team',
    avatar: 'https://i.pravatar.cc/150?img=29',
    bio: 'Local experts crafting unforgettable island experiences across the Andaman archipelago.'
  },
  date: new Date().toISOString(),
  readTime: '10 min read',
  category: 'Luxury',
  tags: [
    'andaman luxury resorts 2025',
    'havelock luxury',
    'neil island resorts',
    'best resorts andaman'
  ],
  relatedPosts: [
    'andaman-honeymoon-guide',
    'andaman-top-things-to-do',
    '7-day-andaman-itinerary'
  ],
  content: `
## Top Picks (Quick View)
- Havelock: Barefoot at Havelock, Taj Exotica
- Neil: Summer Sands, SeaShell Neil
- Port Blair: Fortune Bay Island, SeaShell Coral Cove

## How to Choose
Pick beach access over room category; confirm private dinner setups; check jetty distance.

## Booking Tips
Book 30–60 days in season; watch shoulder-season upgrades.

## Plan Next
- Compare with [Honeymoon Guide](/blog/andaman-honeymoon-guide) and [Top Things To Do](/blog/top-things-to-do-in-andaman)
`
};

export default post;


