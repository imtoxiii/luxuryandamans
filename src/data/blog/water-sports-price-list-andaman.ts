import { BlogPost } from '../../types/blog';

const slug = 'water-sports-price-list-andaman';
const imagePath = `/blog-assets/${slug}/`;

const images = {
  main: {
    src: `${imagePath}water-sports-collage.jpg`,
    alt: 'Collage of jet ski, parasailing, and sea walk activities in Andaman',
    width: 1200,
    height: 800,
  },
  seaWalk: {
    src: `${imagePath}sea-walk-north-bay.jpg`,
    alt: 'Tourist doing underwater sea walk at North Bay',
    width: 800,
    height: 533,
  },
  parasailing: {
    src: `${imagePath}parasailing-havelock.jpg`,
    alt: 'Parasailing high above the blue waters of Havelock',
    width: 800,
    height: 533,
  },
};

const post: BlogPost = {
  id: 'water-sports-price-list-andaman',
  title: 'Andaman Water Sports Price List 2025: Jet Ski, Sea Walk, Parasailing Costs',
  slug: 'water-sports-price-list-andaman',
  excerpt:
    'Budgeting for adventure? Here is the updated 2025 price list for all water sports in Andaman, including Scuba, Sea Walk, Parasailing, and Jet Skiing.',
  image: images.main.src,
  author: {
    name: 'Luxury Andamans Team',
    avatar: 'https://i.pravatar.cc/150?img=55',
    bio: 'Adrenaline junkies tracking the best deals for you.'
  },
  date: new Date().toISOString(),
  readTime: '4 min read',
  category: 'Adventure',
  tags: [
    'water sports price andaman',
    'sea walk cost',
    'parasailing price havelock',
    'jet ski price andaman',
    'scuba diving cost',
    'glass bottom boat price',
  ],
  relatedPosts: ['andaman-scuba-guide', 'andaman-scuba-prices-2025', 'andaman-top-things-to-do'],
  faq: [
    {
      question: 'How much does Sea Walk cost?',
      answer:
        'Sea Walk typically costs between **₹3,500 to ₹4,000** per person. It is available at North Bay (Port Blair) and Elephant Beach (Havelock).'
    },
    {
      question: 'What is the price of Parasailing?',
      answer:
        'Parasailing costs around **₹3,000 to ₹3,500** per person. The best places are Corbyn\'s Cove (Port Blair) and Elephant Beach (Havelock).'
    },
    {
      question: 'Is Scuba Diving expensive?',
      answer:
        'A beginner "Discover Scuba Dive" (DSD) usually costs **₹3,500 for shore dives** and **₹5,500 for boat dives**. Certification courses start from ₹24,000.'
    },
    {
      question: 'Can non-swimmers do these activities?',
      answer:
        '**Yes!** Sea Walk, Scuba Diving (DSD), Glass Bottom Boat, and Semi-Submarine do NOT require swimming skills.'
    },
    {
      question: 'Where can I do Jet Skiing?',
      answer:
        'Jet Ski rides are available at Corbyn\'s Cove, North Bay, Elephant Beach, and Bharatpur Beach. Prices range from **₹600 to ₹1,000** depending on the duration.'
    }
  ],
  content: `
## Budgeting for Adventure 💸

Andaman is the water sports capital of India. But how much should you set aside for these thrills?

Here is a comprehensive price list for the 2024-2025 season. *Note: Prices are approximate and can vary slightly by operator and season.*

---

## 1. Scuba Diving 🤿
*See our detailed [Scuba Price Guide](/blog/andaman-scuba-prices-2025) for more.*
- **Shore Dive (Beginner):** ₹3,500 - ₹4,000
- **Boat Dive (Beginner):** ₹5,500 - ₹6,500
- **Fun Dive (Certified):** ₹2,500 - ₹3,500 per dive

## 2. Sea Walk 🚶‍♂️
Walk on the ocean floor with a helmet. No swimming needed!
- **North Bay (Port Blair):** ₹3,500 - ₹4,000
- **Elephant Beach (Havelock):** ₹3,500 - ₹4,000
- **Includes:** Photos and video (usually).

<img src="${images.seaWalk.src}" alt="${images.seaWalk.alt}" width="${images.seaWalk.width}" height="${images.seaWalk.height}" />

## 3. Parasailing 🪂
Fly high above the sea.
- **Corbyn's Cove / North Bay:** ₹3,000 - ₹3,500
- **Havelock (Elephant Beach):** ₹3,500 - ₹4,000

<img src="${images.parasailing.src}" alt="${images.parasailing.alt}" width="${images.parasailing.width}" height="${images.parasailing.height}" />

## 4. Surface Water Sports 🚤
- **Jet Ski:** ₹600 - ₹1,000 (per ride/person)
- **Banana Boat Ride:** ₹600 - ₹800 per person
- **Sofa Ride:** ₹600 - ₹800 per person
- **Speed Boat Ride:** ₹500 - ₹1,000 per person

## 5. For Families & Kids 👨‍👩‍👧
- **Glass Bottom Boat:** ₹600 - ₹1,000 per person
- **Semi-Submarine (Coral Safari):** ₹1,850 - ₹2,500 per person
- **Dolphin Glass Bottom Boat:** ₹2,000 - ₹2,500

## 6. Kayaking 🛶
- **Day Kayaking:** ₹2,500 - ₹3,000
- **Night Kayaking (Bioluminescence):** ₹3,000 - ₹4,000

---

## Tips to Save Money 💰
1.  **Combo Packs:** Many operators at Elephant Beach offer combos (e.g., Sea Walk + Jet Ski + Banana Boat) for a discounted price.
2.  **Pre-book:** Booking online can sometimes get you a small discount compared to spot booking in peak season.
3.  **Negotiate:** For group activities like Jet Ski or Banana Boat, you might get a deal if you are a large group.

---
*Ready to dive in? Check out our [Experiences](/experiences) page to book these activities.*
`,
};

export default post;
