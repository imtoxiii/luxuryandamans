import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

export const post: BlogPost = {
    id: "andaman-scuba-diving-2026",
    slug: "andaman-scuba-diving-2026",
    title: "Scuba Diving in Andaman (2026 Guide): Prices, Best Sites & Records",
    excerpt: "Andaman is aiming for Guinness World Records in diving! Here is your 2026 guide to prices, certification courses, and the best dive sites.",
    image: "https://images.pexels.com/photos/13042058/pexels-photo-13042058.jpeg",
    category: "Adventure",
    author: defaultAuthor,
    date: "2026-01-15",
    readTime: "10 min read",
    tags: ["Scuba Diving", "Adventure", "Water Sports", "2026"],
    relatedPosts: ["andaman-top-things-to-do-2025", "first-timers-guide-andaman-2026"],
    content: `
# Diving Deep: The 2026 Scuba Guide

Andaman is the diving capital of India. In 2026, the islands are pushing to become a global diving destination, with new sites opening up and a push for Guinness World Records in mass participation diving.

![Scuba Diver](https://images.pexels.com/photos/15463393/pexels-photo-15463393.jpeg)

## 2026 Price List (Estimated)
Prices have seen a slight correction due to standardized safety norms.

| Dive Type | Location | Price (approx) |
| :--- | :--- | :--- |
| **Shore Dive (Beginners)** | North Bay / Nemo Reef | ₹3,500 - ₹4,500 |
| **Boat Dive (Beginners)** | Havelock / Neil | ₹5,500 - ₹6,500 |
| **Standard Package** | **Havelock** | **₹5,000 per person** |
| **PADI Open Water Course** | Havelock | ₹26,000 - ₹28,000 |
| **Fun Dive (Certified)** | Johnny's Gorge / Dixon's | ₹4,500 per dive |

## Special 2026 Offer: ₹5,000 Scuba Package! 🤿

We have curated a special deal for 2026 travelers.
- **Price:** ₹5,000 per person
- **Location:** Havelock Island (Nemo Reef) or North Bay
- **Inclusions:** Training, Equipment, Photos & Videos, Boat Ride
- **Duration:** 45 Minutes Underwater

[**Book Your Dive Now at ₹5,000**](/contact) - *Limited slots available!*

## Top Dive Sites for 2026

### 1. Dixon's Pinnacle (Havelock)
**Level:** Advanced
**Why:** Giant Barracudas, Trevallies, and cleaning stations. It's a busy underwater city.

### 2. Johnny's Gorge (Havelock)
**Level:** Advanced
**Why:** The place to spot **White Tip Reef Sharks** and majestic Manta Rays.

### 3. Junction (Neil Island)
**Level:** Advanced
**Why:** Located between Havelock and Neil, this site has strong currents and massive soft corals.

### 4. Button Islands (New!)
**Level:** Intermediate
**Why:** Recently promoted as a key dive circuit. Pristine corals and schooling fish.

## The "Guinness" Push
The Andaman administration is organizing mass diving events in 2026 to set world records. If you are visiting in **February or March**, look out for these events—you might become a record holder!

## Safety First
- **No Fly Time:** Remember, you cannot fly for **18-24 hours** after your last dive. Plan your itinerary accordingly!
- **Medical:** If you have asthma, heart conditions, or ear issues, consult a doctor before booking.

**Ready to take the plunge?** Book your dive slot in advance to avoid disappointment!
  `,
    faq: [
        {
            question: "Do I need to know swimming?",
            answer: "For 'Introductory Dives' (DSD), NO swimming is required. An instructor holds you the entire time. For certification courses, yes, you need to swim 200m."
        },
        {
            question: "What is the minimum age?",
            answer: "10 years old is the minimum age for scuba diving."
        }
    ]
};

export default post;
