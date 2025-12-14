import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

export const post: BlogPost = {
    id: "andaman-nightlife-guide",
    slug: "andaman-nightlife-guide",
    title: "Andaman Nightlife Guide: Best Bars, Beach Parties, and Night Activities (2025)",
    excerpt: "Think Andaman sleeps after sunset? Think again! From candlelight dinners to lively beach bars, discover the best of Andaman's nightlife.",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e3383?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    category: "Travel Guide",
    author: defaultAuthor,
    date: "2025-03-10",
    readTime: "7 min read",
    tags: ["Nightlife", "Bars", "Food", "Havelock", "Port Blair"],
    relatedPosts: ["andaman-food-guide", "andaman-solo-trip-guide"],
    content: `
# Andaman After Dark: A Guide to Nightlife

While Andaman isn't Ibiza, it has a charming, laid-back nightlife scene that's perfect for unwinding after a day of diving. Whether you want a romantic dinner or a few cocktails with music, here's where to go.

![Andaman Nightlife](https://images.unsplash.com/photo-1514525253440-b393452e3383?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## Top Bars & Pubs

### **1. Havelock Island (Swaraj Dweep)**
Havelock is the party hub of Andaman.
- **Venom Bar:** One of the oldest and most popular. Great music and crowd.
- **Full Moon Cafe:** Famous for its chill vibe, beach seating, and great cocktails.
- **Something Different:** A beachside cafe that turns lively at night.
- **Nemo Cafe:** The party place at Havelock Island Beach Resort.

### **2. Port Blair**
Port Blair is more formal but has some great luxury bars.
- **Amaya (SeaShell):** Rooftop lounge with the best view of the bay. Perfect for a classy evening.
- **Nico Bar:** Good cocktails and city vibes.
- **Pink Fly:** A newer spot with neon lights and a younger crowd.

## Unique Night Activities

### **1. Night Kayaking (Bioluminescence)**
Paddle through the mangroves under a starry sky. If you're lucky (and it's a no-moon night), the water will glow blue with every stroke!
- **Where:** Havelock Island
- **Cost:** Approx ₹3,000 per person

### **2. Candlelight Dinner on the Beach**
The ultimate romantic experience. Many resorts set up private tables right on the sand with flowers and candles.
- **Where:** Havelock & Neil Island
- **Cost:** ₹4,000 - ₹10,000 per couple

### **3. Jungle Trekking at Night**
Guided night treks to spot nocturnal wildlife like owls, snakes, and crabs. Not for the faint-hearted!
- **Where:** Chidiya Tapu
- **Cost:** Varies by guide

## Is Alcohol Available?
**Yes.** Alcohol is available in licensed bars and restaurants. There are also government-run liquor shops (ANIIDCO) where you can buy bottles at MRP.
- **Dry Days:** National holidays and election days.

## Safety Tips
- **Transport:** Taxis can be expensive at night. Arrange a pickup with your hotel if possible.
- **Beaches:** Swimming at night is **strictly prohibited** and dangerous due to currents.
- **Dress Code:** Casual. Flip-flops are welcome almost everywhere!

**Cheers to island nights!** 🍹
  `,
    faq: [
        {
            question: "Is alcohol expensive in Andaman?",
            answer: "It's moderately priced. Slightly higher than mainland India duty-free zones, but cheaper than luxury metros."
        },
        {
            question: "Are beach parties allowed?",
            answer: "Loud music on public beaches is restricted. Most parties happen within the private beach areas of resorts/cafes."
        }
    ]
};

export default post;
