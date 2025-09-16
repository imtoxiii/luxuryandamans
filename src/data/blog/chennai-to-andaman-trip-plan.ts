import { BlogPost } from '../../types/blog';

const post: BlogPost = {
  id: 'chennai-to-andaman-trip-plan',
  title: 'Chennai to Andaman Trip Plan: Flights, Itinerary, Budget & Tips',
  slug: 'chennai-to-andaman-trip-plan',
  excerpt:
    'The most convenient metro for Andaman. Get direct/short flights, a 6N/7D plan, and realistic budgeting from Chennai.',
  image:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1887&q=80',
  author: {
    name: 'Luxury Andamans Team',
    avatar: 'https://i.pravatar.cc/150?img=7',
    bio: 'Local experts crafting unforgettable island experiences across the Andaman archipelago.'
  },
  date: new Date().toISOString(),
  readTime: '7 min read',
  category: 'City Guides',
  tags: [
    'chennai to andaman',
    'andaman from chennai',
    'andaman packages from chennai',
    'port blair direct flights'
  ],
  relatedPosts: [
    'andaman-itinerary-7-days',
    'andaman-best-time',
    'andaman-scuba-guide'
  ],
  content: `
## Overview: Chennai → Port Blair
Shortest metro connection. Frequent direct flights in season; 2.5–3 hr non-stop.

### Fare Insight
- Book 15–30 days prior. One-way often ₹5,500–₹10,500 in shoulder months.

---

## 6N/7D Quick Plan
1N Port Blair → 3N Havelock → 2N Neil → fly back. Mirrors our [7-Day Itinerary](/blog/7-day-andaman-itinerary).

---

## Budget (Couple)
- Flights: ₹11,000–₹22,000
- Ferries: ₹6,000–₹10,000
- Hotels: ₹28,000–₹65,000
- Activities: ₹6,000–₹20,000
- Food/local: ₹8,000–₹16,000

---

## Best Time
Nov–Apr best seas; Apr & Nov are sweet spots for value.

---

## Tips
- Choose morning non-stop to catch afternoon ferries.
- Carry government ID; ferries check strictly.

---

## Plan Next
- [Scuba Guide](/blog/andaman-scuba-guide) · [Packages](/packages) · [Contact](/contact)
`
};

export default post;


