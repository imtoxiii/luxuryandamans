import { BlogPost } from '../../types/blog';

const post: BlogPost = {
  id: 'port-blair-one-day-plan',
  title: 'Port Blair in One Day: Perfect Arrival-Day Plan',
  slug: 'port-blair-one-day-itinerary',
  excerpt:
    'Make the most of your arrival day with this relaxed Port Blair plan—history, harbour views, and a memorable evening show.',
  image:
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1935&auto=format&fit=crop',
  author: {
    name: 'Luxury Andamans Team',
    avatar: 'https://i.pravatar.cc/150?img=43',
    bio: 'Local experts crafting unforgettable island experiences across the Andaman archipelago.'
  },
  date: new Date().toISOString(),
  readTime: '5 min read',
  category: 'City Guides',
  tags: ['port blair', 'cellular jail', 'marina park', 'city guide'],
  relatedPosts: ['andaman-itinerary-7-days', 'andaman-best-time', 'andaman-food-guide'],
  content: `
## Morning
- Brunch near Aberdeen Bazaar; quick souvenir peek
- Drive to Cellular Jail; explore galleries

## Afternoon
- Break at hotel; harbour coffee
- Short walk at Marina Park

## Evening
- Cellular Jail Light & Sound show (book ahead)
- Dinner with a view

## Travel tips
- Keep a buffer between flight arrival and the show timing
- Carry ID for entry; camera rules apply

## Continue planning
- See the [7-day Andaman itinerary](/blog/7-day-andaman-itinerary)
- Check the [best time to visit](/blog/best-time-to-visit-andaman)
- Explore [packages](/packages) or [contact us](/contact)
`
};

export default post;


