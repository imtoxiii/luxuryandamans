import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

export const post: BlogPost = {
    id: "island-tourism-festival-2026",
    slug: "island-tourism-festival-2026",
    title: "Island Tourism Festival 2026: A Cultural Extravaganza",
    excerpt: "Discover the vibrancy of Andaman at the Island Tourism Festival 2026. Ten days of culture, music, food, and festivities in Port Blair.",
    image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Events",
    author: defaultAuthor,
    date: "2025-12-15",
    readTime: "5 min read",
    tags: ["Events", "Festival", "Culture", "Port Blair", "2026"],
    relatedPosts: ["andaman-nightlife-guide", "port-blair-one-day-plan"],
    content: `
# Island Tourism Festival 2026: Celebrating the Spirit of Andaman

The biggest cultural event of the year is back! The **Island Tourism Festival (ITF) 2026** is set to light up Port Blair this January, transforming the islands into a vibrant hub of music, dance, food, and culture.

![Island Tourism Festival](https://images.unsplash.com/photo-1543051932-6ef9fecfbc80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)

## Dates & Venue
*   **Dates:** January 5th - January 14th, 2026
*   **Main Venue:** ITF Ground, Port Blair
*   **Other Venues:** Events are also held at Wimberlygunj, Havelock, and Neil Island.

## What to Expect?
ITF is a 10-day carnival that brings together artists from across India and the islands.

### 1. Cultural Performances
Witness traditional dances from various Indian states, alongside the unique tribal dances of the Nicobarese people. It's a melting pot of India's diverse heritage.

### 2. The Food Mela
Foodies, rejoice! The festival features stalls serving:
*   Authentic Andaman seafood
*   Bengali, South Indian, and North Indian delicacies
*   Local tribal cuisine

### 3. Floating Restaurant
A special attraction for 2026 is the **Floating Restaurant** at the water sports complex, offering dinner with a view of the illuminated festival grounds.

### 4. Handicrafts Exhibition
Shop for souvenirs made by local artisans:
*   Shell crafts
*   Cane and bamboo products
*   Coconut shell accessories

## Tips for Tourists
*   **Entry:** Entry to the festival is free for all.
*   **Timing:** The events usually start from 4:00 PM and go on until 10:00 PM.
*   **Stay:** Hotels in Port Blair get booked out fast during ITF. [Book your stay early](/blog/andaman-luxury-resorts-2025).

Don't miss this opportunity to see the Andaman Islands in their most festive avatar!
  `,
    faq: [
        {
            question: "Is the festival suitable for children?",
            answer: "Absolutely! There are rides, games, and kid-friendly food stalls, making it perfect for families."
        },
        {
            question: "How far is the venue from the airport?",
            answer: "The ITF Ground is just a 10-minute drive from the Veer Savarkar International Airport."
        }
    ]
};

export default post;
