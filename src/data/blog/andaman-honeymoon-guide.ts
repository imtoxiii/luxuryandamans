import { BlogPost } from '../../types/blog';

const post: BlogPost = {
  id: 'andaman-honeymoon-guide',
  title: 'Andaman Honeymoon Guide: Romantic Stays, Beaches and Experiences',
  slug: 'andaman-honeymoon-guide',
  excerpt:
    'Dreamy sunsets, private candlelight dinners and crystal lagoons—here’s how to plan a truly romantic Andaman honeymoon.',
  image:
    'https://images.unsplash.com/photo-1519822472753-2f5a6fc7682e?q=80&w=1935&auto=format&fit=crop',
  author: {
    name: 'Luxury Andamans Team',
    avatar: 'https://i.pravatar.cc/150?img=16',
    bio: 'Local experts crafting unforgettable island experiences across the Andaman archipelago.'
  },
  date: new Date().toISOString(),
  readTime: '8 min read',
  category: 'Honeymoon',
  tags: ['honeymoon', 'romantic', 'couples', 'private dinner', 'sunset'],
  relatedPosts: ['andaman-itinerary-7-days', 'andaman-best-time'],
  content: `
## Where to stay
- Beachfront villas in Havelock for sunsets
- Lagoon-view suites in Neil for slow mornings

## Romantic experiences
- Private beach dinner under the stars
- Sunset cruise with music and canapés
- Two-seater kayaking in mangroves

## Photo spots
- Radhanagar Beach wood pathway
- Natural Bridge during golden hour
- Secret coves near Kalapathar

## Plan your honeymoon
- Pick your dates with the [Best Time to Visit](/blog/best-time-to-visit-andaman)
- Use the [7-day Itinerary](/blog/7-day-andaman-itinerary) as a base
- Book romantic add-ons via [Packages](/packages) or [Contact](/contact)
`
};

export default post;


