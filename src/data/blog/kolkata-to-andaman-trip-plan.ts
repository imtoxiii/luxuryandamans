import { BlogPost } from '../../types/blog';

const post: BlogPost = {
  id: 'kolkata-to-andaman-trip-plan',
  title: 'Kolkata to Andaman Trip Plan: Flights, Itinerary, Budget & Tips',
  slug: 'kolkata-to-andaman-trip-plan',
  excerpt:
    'Exactly how to plan your Kolkata to Andaman holiday: direct/short flights, a proven 7-day itinerary, and a no-nonsense budget.',
  image:
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1887&q=80',
  author: {
    name: 'Luxury Andamans Team',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: 'Local experts crafting unforgettable island experiences across the Andaman archipelago.'
  },
  date: new Date().toISOString(),
  readTime: '7 min read',
  category: 'City Guides',
  tags: [
    'kolkata to andaman',
    'andaman from kolkata',
    'andaman packages from kolkata',
    'port blair direct flight'
  ],
  relatedPosts: [
    'andaman-itinerary-7-days',
    'andaman-best-time',
    'andaman-family-itinerary'
  ],
  faq: [
    {
      question: 'Are there direct flights from Kolkata to Port Blair?',
      answer: 'Yes, seasonal directs operate. Otherwise 1-stop via Chennai is common and still quick.'
    }
  ],
  content: `
## Overview: Kolkata → Port Blair
One of the closest metros. Non-stop in season (~2 hrs 15 mins). Otherwise 1-stop via Chennai.

### Booking Insight
- Book 15–30 days prior. One-way fares ₹5,000–₹10,000 in shoulder months.

---

## 6N/7D Suggested Plan
1N Port Blair → 3N Havelock → 2N Neil → depart. See [7-Day Itinerary](/blog/7-day-andaman-itinerary).

---

## Couple Budget Range
- Flights: ₹10,000–₹22,000
- Ferries: ₹6,000–₹10,000
- Hotels: ₹28,000–₹65,000
- Activities: ₹6,000–₹20,000
- Food/local: ₹8,000–₹16,000

---

## Best Time
Nov–Apr calm seas; late Oct and Apr offer value.

---

## Tips
- Morning directs help catch same-day ferries.
- Keep ID handy at ports and jetties.

---

## Plan Next
- [Family Itinerary](/blog/andaman-family-itinerary) · [Packages](/packages) · [Contact](/contact)
`
};

export default post;


