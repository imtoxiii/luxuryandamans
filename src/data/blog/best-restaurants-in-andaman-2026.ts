import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

const images = {
    main: {
        src: 'https://images.pexels.com/photos/15796414/pexels-photo-15796414.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'A beautiful seaside dinner setup in Andaman.',
        width: 1200,
        height: 800,
    }
};

const post: BlogPost = {
    id: 'best-restaurants-in-andaman-2026',
    title: 'Best Restaurants in Andaman (2026): Seafood, Cafes & Fine Dining',
    slug: 'best-restaurants-in-andaman-2026',
    excerpt:
        "From candlelit beach dinners to bustling local joints, here is your 2026 guide to the top places to eat in Port Blair, Havelock, and Neil Island.",
    image: images.main.src,
    author: defaultAuthor,
    date: new Date().toISOString(),
    readTime: '6 min read',
    category: 'Food & Drink',
    tags: [
        'best restaurants andaman 2026',
        'seafood port blair',
        'best cafes havelock',
        'candle light dinner andaman',
        'top places to eat andaman'
    ],
    relatedPosts: [
        'andaman-vegetarian-food-guide-2026',
        'andaman-nightlife-guide',
        'andaman-honeymoon-guide'
    ],
    faq: [
        {
            question: 'Do I need reservations?',
            answer:
                'For popular spots like Barefoot or Full Moon Cafe during peak season (Dec-Jan), yes, booking a table a day in advance is recommended, specially for dinner.'
        },
        {
            question: 'Is alcohol available?',
            answer:
                'Yes, most established restaurants and resorts serve alcohol. However, alcohol is not strictly served on dry days and specific timings apply.'
        },
        {
            question: 'What is the average cost for two?',
            answer:
                'A meal at a decent cafe costs ₹800-1500 for two. Fine dining or seafood platters can range from ₹2500-4000.'
        }
    ],
    content: `
## A Culinary Paradise 🦞

Andaman key food scene has evolved far beyond basic thalis. In 2026, you can find everything from wood-fired pizzas to authentic island curries. Whether you are a foodie or just hungry after a swim, here are the top picks.

---

## 1. Port Blair: The City's Best

### **New Lighthouse Restaurant**
- **Vibe:** Open-air, breezy, and lively.
- **Must Try:** Grilled Lobster, Tandoori Fish, Crab Masala.
- **Why:** It's an institution. You pick your catch fresh from the counter.

### **Amaya (SeaShell Hotel)**
- **Vibe:** Rooftop lounge with a view of the bay. Romantic.
- **Must Try:** Signature Cocktails and Seafood Platter.
- **Why:** Best view in Port Blair for a sundowner.

### **Icy Spicy**
- **Vibe:** Family-friendly, pure vegetarian.
- **Must Try:** Chaats, North Indian Thali, and Sweets.
- **Why:** A savior for vegetarians craving comfort food.

---

## 2. Havelock Island (Swaraj Dweep): Cafe Culture

### **Full Moon Cafe**
- **Vibe:** Laid-back, rustic, and hidden in the trees near the beach.
- **Must Try:** Pancakes, Fresh Juices, and Grilled Fish.
- **Why:** The ultimate chiller vibe. Great for digital nomads too.

### **Something Different – A Beachside Cafe**
- **Vibe:** Modern, colourful, and right on the beach.
- **Must Try:** Wood-fired Pizzas and Burgers.
- **Why:** They offer free pickup/drop for dinner! Great hospitality.

### **Bonova Cafe and Pub**
- **Vibe:** Upscale, air-conditioned, and chic.
- **Must Try:** Continental dishes and classic cocktails.
- **Why:** If you want a break from the heat and sand, this is it.

---

## 3. Neil Island (Shaheed Dweep): Rustic Flavors

### **Dugong (SeaShell Neil)**
- **Vibe:** Premium dining with live music often.
- **Must Try:** Dessert buffet and Indian curries.
- **Why:** Reliable quality and great service on a sleepy island.

### **Blue Sea**
- **Vibe:** Local shack style.
- **Must Try:** The "Neil Special" fish curry.
- **Why:** Authentic, cheap, and spicy.

---

## Plan Your Gourmet Trip! 
Want a hassle-free Andaman experience? Let our local experts plan your 2026 getaway. 
[**Contact Us Now**](/contact) for customized packages and best deals.
`
};

export default post;
