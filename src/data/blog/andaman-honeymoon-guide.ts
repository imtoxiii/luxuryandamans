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
  faq: [
    {
      question: "Which is the best island in Andaman for a honeymoon?",
      answer: "Havelock Island (Swaraj Dweep) is widely considered the best for honeymoons due to its stunning beaches like Radhanagar, luxury resorts, and abundance of romantic activities like candlelight dinners and scuba diving for couples."
    },
    {
      question: "How many days are enough for an Andaman honeymoon?",
      answer: "A 5 to 7-day trip is ideal for a relaxed and romantic honeymoon. This allows enough time to explore Havelock and Neil Islands, enjoy water sports, and have plenty of leisure time without feeling rushed."
    },
    {
      question: "What is the average cost for an Andaman honeymoon package?",
      answer: "A good quality 5-6 day honeymoon package can range from ₹40,000 to ₹80,000 per person, including flights, 4-star accommodation, private cruises, water activities, and romantic dinners. Budget options are also available starting from ₹25,000."
    },
    {
      question: "Is Andaman better than Goa for a honeymoon?",
      answer: "Andaman offers a more serene, secluded, and exotic experience with cleaner beaches and world-class diving, making it ideal for a romantic escape. Goa is more commercialized with a vibrant nightlife. For a pure nature-focused and romantic trip, Andaman is the better choice."
    }
  ],
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


