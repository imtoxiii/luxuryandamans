import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

const imagePath = '/img/blog/glass-bottom/';

const images = {
  main: {
    src: 'https://images.pexels.com/photos/14565669/pexels-photo-14565669.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Tourists enjoying the coral reefs through a glass bottom boat in Andaman.',
    width: 1200,
    height: 800,
  }
};

const post: BlogPost = {
  id: 'andaman-glass-bottom-boat-guide-2026',
  title: 'Glass Bottom Boat Rides: See Underwater Without Getting Wet (2026)',
  slug: 'andaman-glass-bottom-boat-guide-2026',
  excerpt:
    "Don't want to snorkel? A Glass Bottom Boat ride is the perfect way to witness Andaman's colorful coral reefs while staying completely dry. Ideal for kids and seniors.",
  image: images.main.src,
  author: defaultAuthor,
  date: new Date().toISOString(),
  readTime: '6 min read',
  category: 'Family Friendly',
  tags: [
    'glass bottom boat',
    'coral reef viewing',
    'family activities andaman',
    'north bay ride',
    'jolly buoy island'
  ],
  relatedPosts: [
    'top-things-to-do-andaman-2026',
    'andaman-family-itinerary-2026',
    'new-eco-resorts-andaman-2026'
  ],
  faq: [
    {
      question: 'Is it safe for pregnant women and small children?',
      answer:
        'Yes, it is very safe and stable. However, those prone to seasickness should take medication beforehand.'
    },
    {
      question: 'How long is the ride?',
      answer:
        'Typically between 15 to 30 minutes, depending on the transparency of the water and the operator.'
    },
    {
      question: 'Can we see turtles?',
      answer:
        'Yes! Especially around Jolly Buoy Island and North Bay, turtle sightings are quite common.'
    }
  ],
  content: `
## Why Opt for a Glass Bottom Boat?

For many, the thought of putting on a mask and snorkel is intimidating. Or maybe you just want to keep your hair dry for dinner. The Glass Bottom Boat is your answer.

It's essentially a boat with a transparent section (usually high-strength glass or acrylic) in the hull. You sit around the glass panel and look straight down into the ocean as the boat glides over the reefs.

---

## Best Spots for Glass Bottom Rides in 2026

### 1. Jolly Buoy / Red Skin Island (Wandoor)
- **Status:** Open for limited months (check permits).
- **Quality:** This is a Marine National Park. The corals here are the healthiest and most vibrant in all of Andaman.
- **Verdict:** Must-do if open.

### 2. North Bay Island
- **Status:** Open year-round.
- **Quality:** Good coral diversity and fish life. Very convenient from Port Blair.
- **Verdict:** Great for a quick glimpse.

### 3. Neil Island (Bharatpur Beach)
- **Status:** Accessible all day.
- **Quality:** Stunning shallow-water corals.
- **Verdict:** Perfect for families staying on Neil Island.

---

## 2026 Pricing

Prices are fairly standard across islands.

| Location | Standard Boat | Semi-Submarine | Note |
| :--- | :--- | :--- | :--- |
| **North Bay** | ₹600 - ₹1,000 | ₹1,800 - ₹2,500 | Shared ride |
| **Neil Island** | ₹500 - ₹1,000 | N/A | Local operators |
| **Jolly Buoy** | ₹800 - ₹1,200 | N/A | Permit required |

*Semi-Submarine (Coral Safari): Offers a better view with inclined windows, feeling like you are inside the reef.*

---

## Tips for the Best View
1. **Go Early:** Morning sunlight makes the water clearer and colors pop.
2. **Avoid Full Moon:** Tides are higher, potentially making water turbid.
3. **Ask the Boatman:** Request them to take you to "Turtle Point" if possible.
4. **Motion Sickness:** Even if you don't swim, look down at moving objects can cause nausea. Keep your head up occasionally.

---

## Plan Your Dream Trip! 
Want a hassle-free Andaman experience? Let our local experts plan your 2026 getaway. 
[**Contact Us Now**](/contact) for customized packages and best deals.
`
};

export default post;
