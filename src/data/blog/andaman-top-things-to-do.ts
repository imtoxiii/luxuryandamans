import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

export const post: BlogPost = {
  id: "andaman-top-things-to-do-2025",
  slug: "andaman-top-things-to-do-2025",
  title: "Top 25 Things to Do in Andaman: The Ultimate 2025 Bucket List",
  excerpt: "From walking on the sea floor to exploring active volcanoes, here is the definitive list of must-do experiences in Andaman for 2025.",
  image: 'https://images.pexels.com/photos/35252466/pexels-photo-35252466/free-photo-of-group-of-divers-exploring-underwater-depths.jpeg?auto=compress&cs=tinysrgb&w=1200',
  category: "Travel Guide",
  author: defaultAuthor,
  date: "2025-01-15",
  readTime: "15 min read",
  tags: ["Activities", "Bucket List", "Adventure", "Guide", "2025"],
  relatedPosts: ["andaman-scuba-guide", "andaman-instagram-spots", "andaman-nightlife-guide"],
  content: `
# The Ultimate Andaman Bucket List for 2025

Planning a trip to Andaman? Don't just sit on the beach (though you should do that too). Here are the top 25 experiences that define an Andaman vacation in 2025.

![Andaman Adventure](https://images.pexels.com/photos/14565669/pexels-photo-14565669.jpeg?auto=compress&cs=tinysrgb&w=1200)

## Water Sports & Adventure
1. **Scuba Diving:** Dive with Nemo at Havelock or Neil. No swimming skills needed for introductory dives!
2. **Sea Walking:** Walk on the ocean floor at North Bay or Elephant Beach.
3. **Snorkeling:** Float above colorful reefs. Best spots: Elephant Beach, Bharatpur Beach.
4. **Kayaking:** Paddle through the silent mangroves of Havelock.
5. **Night Kayaking:** Witness the magical bioluminescence (glowing water).
6. **Parasailing:** Get a bird's eye view of the coastline at Corbyn's Cove or Elephant Beach.
7. **Jet Skiing:** Feel the speed on the waves.
8. **Glass Bottom Boat:** See the corals without getting wet (great for kids/seniors).
9. **Semi-Submarine Ride:** A step up from glass bottom boats, giving a submarine-like view.
10. **Game Fishing:** Go deep-sea fishing for Tuna and Barracuda.

## Nature & Sightseeing
11. **Radhanagar Beach Sunset:** Watch the sun dip below the horizon at Asia's best beach.
12. **Limestone Caves:** Take a boat ride through mangroves to reach these ancient caves in Baratang.
13. **Mud Volcanoes:** See the rare geological phenomenon in Baratang.
14. **Barren Island:** Visit South Asia's only active volcano (chartered boat required).
15. **Natural Bridge:** Marvel at the rock formation on Neil Island.
16. **Chidiya Tapu:** Birdwatching and trekking to Munda Pahad for sunset.
17. **Ross Island (Netaji Subhash Chandra Bose Dweep):** Explore the British ruins and meet the friendly deer.
18. **Mount Harriet:** Trek to the highest point in South Andaman.

## History & Culture
19. **Cellular Jail:** Visit the National Memorial and watch the Light & Sound show.
20. **Anthropological Museum:** Learn about the indigenous tribes of the islands.
21. **Chatham Saw Mill:** Visit one of the oldest saw mills in Asia.

## Leisure & Food
22. **Seafood Feast:** Eat fresh crab, lobster, and prawn at a local shack.
23. **Island Hopping:** Take a private boat to uninhabited islands.
24. **Beach Picnic:** Pack a lunch and find a secluded spot on Long Island.
25. **Shopping:** Buy shell handicrafts and pearls at Aberdeen Bazaar.

**How many can you tick off?**
  `,
  faq: [
    {
      question: "What is the #1 must-do activity?",
      answer: "Scuba Diving. Even if you do it only once in your life, do it in Andaman."
    },
    {
      question: "Are these activities safe?",
      answer: "Yes, adventure sports in Andaman are regulated and operators follow safety standards. Always listen to your instructor."
    }
  ]
};

export default post;
