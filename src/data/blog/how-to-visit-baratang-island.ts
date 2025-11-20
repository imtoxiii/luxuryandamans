import { BlogPost } from '../../types/blog';

const slug = 'how-to-visit-baratang-island';
const imagePath = `/blog-assets/${slug}/`;

const images = {
  main: {
    src: `${imagePath}baratang-mangrove-tunnel.jpg`,
    alt: 'Boat passing through the dense mangrove tunnel at Baratang Island',
    width: 1200,
    height: 800,
  },
  limestone: {
    src: `${imagePath}limestone-caves-inside.jpg`,
    alt: 'Natural limestone formations inside the Baratang caves',
    width: 800,
    height: 533,
  },
  convoy: {
    src: `${imagePath}jarawa-reserve-road.jpg`,
    alt: 'The road through the Jarawa Tribal Reserve',
    width: 800,
    height: 533,
  },
};

const post: BlogPost = {
  id: 'how-to-visit-baratang-island',
  title: 'How to Visit Baratang Island: Limestone Caves & Mud Volcano Guide (2025)',
  slug: 'how-to-visit-baratang-island',
  excerpt:
    'Planning a trip to the Limestone Caves? Here is everything you need to know about the Baratang permit, the Jarawa Reserve convoy timings, and how to book your tickets.',
  image: images.main.src,
  author: {
    name: 'Luxury Andamans Team',
    avatar: 'https://i.pravatar.cc/150?img=33',
    bio: 'Explorers of the hidden gems of the archipelago.'
  },
  date: new Date().toISOString(),
  readTime: '6 min read',
  category: 'Adventure',
  tags: [
    'baratang island tour',
    'limestone caves andaman',
    'mud volcano baratang',
    'jarawa reserve convoy timings',
    'how to reach baratang from port blair',
  ],
  relatedPosts: ['andaman-permit-guide-indian-tourists', 'port-blair-one-day-plan', 'andaman-top-things-to-do'],
  faq: [
    {
      question: 'How do I reach Baratang from Port Blair?',
      answer:
        'You must take a cab or bus from Port Blair. The journey takes about 3-4 hours and passes through the Jarawa Tribal Reserve. You must travel in a convoy.'
    },
    {
      question: 'What are the convoy timings?',
      answer:
        'There are usually 4 convoys daily from the Jirkatang check post: **6:00 AM, 9:00 AM, 12:00 PM, and 2:30 PM**. You cannot enter the reserve outside these times.'
    },
    {
      question: 'Do I need a permit for Baratang?',
      answer:
        'Yes, Indian nationals need a permit which can be obtained at the Jirkatang check post. Foreign nationals need a RAP (Restricted Area Permit) which is usually included in their visa/arrival stamp, but check current rules.'
    },
    {
      question: 'Can we see the Jarawa tribe?',
      answer:
        'You might see them while passing through the reserve, but **interacting, photographing, or offering food to them is strictly prohibited and a punishable offense.**'
    },
    {
      question: 'Is Baratang open every day?',
      answer:
        'The Limestone Caves are generally closed on **Mondays**. Always check the latest schedule before planning.'
    }
  ],
  content: `
## The Hidden Gem of North & Middle Andaman 🌿

Baratang Island, located about 100km from Port Blair, offers a completely different experience from the beaches of Havelock. It is famous for its **Limestone Caves** and **Mud Volcanoes**, but the journey itself—through the dense tropical forest of the Jarawa Reserve—is the real highlight.

---

## How to Reach Baratang 🚗

The only way to reach Baratang is by road from Port Blair.
1.  **Port Blair to Jirkatang (1.5 hrs):** Start early (around 3:30 AM or 4:00 AM) to catch the first convoy.
2.  **Jirkatang Check Post:** Submit your ID and get the permit.
3.  **The Convoy (1.5 hrs):** Vehicles move in a line through the Jarawa Tribal Reserve. No overtaking or stopping allowed.
4.  **Middle Strait Jetty:** Cross the creek on a vehicle ferry.
5.  **Baratang Jetty:** You have arrived!

### ⚠️ Important: The Convoy System
You cannot just drive through the reserve anytime. You must join one of the convoys at Jirkatang:
- **6:00 AM** (Most popular, allows full day sightseeing)
- **9:00 AM**
- **12:00 PM**
- **2:30 PM**

*Tip: Aim for the 6:00 AM convoy to avoid the midday heat and return by evening.*

---

## Top Attractions in Baratang

### 1. Limestone Caves 🔦
From the Baratang jetty, you take a small fiber boat through a **magical mangrove tunnel**. It’s a 20-minute ride followed by a 1.5km trek (easy flat walk) to reach the caves.
- **What to see:** massive stalactites and stalagmites formed over millions of years.
- **Note:** It gets dark inside; carry a torch or use your phone light.

<img src="${images.limestone.src}" alt="${images.limestone.alt}" width="${images.limestone.width}" height="${images.limestone.height}" />

### 2. Mud Volcano 🌋
A rare geological phenomenon where mud bubbles out of the ground due to natural gas.
- **How to reach:** A short jeep ride from the jetty.
- **Verdict:** It's a small bubbling puddle, not a massive eruption. Interesting for geology buffs, but don't expect lava!

### 3. Parrot Island 🦜
A tiny island that hosts thousands of parrots at sunset.
- **Best time:** Sunset.
- **Note:** Requires an overnight stay in Baratang as you will miss the return convoy to Port Blair.

---

## Rules of the Jarawa Reserve 🚫
The road passes through the home of the indigenous Jarawa tribe. To protect them:
1.  **NO Photography/Video:** Strictly enforced. Cameras can be confiscated.
2.  **NO Stopping:** Vehicles must keep moving.
3.  **NO Interaction:** Do not wave or try to talk to the tribespeople.
4.  **NO Food:** Do not offer any food or items.

---

## Sample Itinerary (Day Trip) 🗓️
- **03:30 AM:** Depart Port Blair.
- **05:30 AM:** Reach Jirkatang check post.
- **06:00 AM:** Enter convoy.
- **08:00 AM:** Reach Baratang. Breakfast.
- **09:00 AM:** Boat to Limestone Caves.
- **11:30 AM:** Visit Mud Volcano.
- **12:30 PM:** Lunch.
- **02:30 PM:** Catch the return convoy.
- **05:30 PM:** Back in Port Blair.

---
*Baratang is an adventure! Wear comfortable shoes and carry plenty of water. Need a cab? [Contact us](/contact) to book your private car for the trip.*
`,
};

export default post;
