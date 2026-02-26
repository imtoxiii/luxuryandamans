import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

const slug = 'shopping-in-andaman-what-to-buy';
const imagePath = `/blog-assets/${slug}/`;

const images = {
  main: {
    src: 'https://images.pexels.com/photos/1320674/pexels-photo-1320674.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Colorful shell handicrafts and souvenirs in a Port Blair shop',
    width: 1200,
    height: 800,
  },
  market: {
    src: 'https://images.pexels.com/photos/34519397/pexels-photo-34519397/free-photo-of-tropical-palm-tree-on-maldivian-beach.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Bustling Aberdeen Bazaar in Port Blair',
    width: 800,
    height: 533,
  },
  handicrafts: {
    src: 'https://images.pexels.com/photos/5390337/pexels-photo-5390337.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Handcrafted wooden items and coconut shell products',
    width: 800,
    height: 533,
  },
};

const post: BlogPost = {
  id: 'shopping-in-andaman-what-to-buy',
  title: 'Shopping in Andaman: Best Souvenirs & Markets in Port Blair',
  slug: 'shopping-in-andaman-what-to-buy',
  excerpt:
    'Want to take a piece of the islands home? Find out what to buy in Andaman, from shell handicrafts to spices, and the best markets to find them.',
  image: images.main.src,
  author: defaultAuthor,
  date: new Date().toISOString(),
  readTime: '5 min read',
  category: 'Lifestyle',
  tags: [
    'shopping in andaman',
    'what to buy in port blair',
    'andaman souvenirs',
    'sagarika emporium',
    'aberdeen bazaar',
    'shell handicrafts',
  ],
  relatedPosts: ['what-to-pack-for-andaman-trip', 'andaman-top-things-to-do', 'vegetarian-food-in-andaman'],
  faq: [
    {
      question: 'What is famous to buy in Andaman?',
      answer:
        'Andaman is famous for **shell handicrafts** (lamps, jewelry, bowls), **pearls**, **wooden artifacts** (made from Padauk wood), **spices**, and **coconut products**.'
    },
    {
      question: 'Can I take sea shells back home?',
      answer:
        '**Be careful!** You can only take shells bought from authorized shops that provide a receipt. Picking up shells/corals from the beach and taking them to the airport is **illegal** and can lead to heavy fines and confiscation.'
    },
    {
      question: 'Where is the best place to shop in Port Blair?',
      answer:
        '**Aberdeen Bazaar** is the main market. For authentic government-certified handicrafts, visit **Sagarika Government Emporium**.'
    },
    {
      question: 'Are things expensive in Andaman?',
      answer:
        'Souvenirs can be reasonably priced if you bargain in local shops. Fixed-price government shops are slightly costlier but guarantee quality and legality.'
    },
    {
      question: 'Can I buy tribal artifacts?',
      answer:
        'You can buy replicas or tribal-themed art sold in shops. However, buying genuine artifacts directly from tribes is illegal and impossible as interaction is banned.'
    }
  ],
  content: `
## Retail Therapy, Island Style 🛍️

Shopping in Andaman isn't about malls and designer brands. It's about quaint little shops smelling of the ocean, selling treasures crafted by local artisans.

Whether you want a gift for family or a memento for yourself, here is your guide to shopping in the islands.

---

## Top Things to Buy 🐚

### 1. Shell Handicrafts
The most iconic souvenir. You'll find everything from earrings and necklaces to intricate lampshades and bowls made of sea shells.
*   **Tip:** Always keep the purchase receipt. Airport security checks for it.

### 2. Pearls
Andaman is a hub for pearl culture. You can find beautiful pearl necklaces and rings.
*   **Where:** Sagarika Emporium or reputed jewelry shops in Aberdeen Bazaar.

### 3. Wooden Artifacts
Look for items made from **Padauk wood**, a timber unique to the islands known for its reddish/dark color. Tables, bowls, and decorative pieces are popular.

### 4. Spices
Like Kerala, Andaman grows excellent spices. Look for fresh black pepper, cloves, cinnamon, and cardamom.

### 5. Coconut Handicrafts
Bowls, spoons, and lamps made from coconut shells are eco-friendly and beautiful.

<img src="https://images.pexels.com/photos/17249035/pexels-photo-17249035/free-photo-of-exotic-fruit-on-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="${images.handicrafts.alt}" width="${images.handicrafts.width}" height="${images.handicrafts.height}" />

---

## Best Shopping Spots 📍

### 1. Sagarika Government Emporium (Port Blair)
*   **Best for:** Authentic handicrafts, fixed prices, guaranteed receipts.
*   **Why go:** It's run by the Industries Department. You know you aren't buying fake or illegal items.

### 2. Aberdeen Bazaar (Port Blair)
*   **Best for:** Bargain hunting, clothes, and general supplies.
*   **Vibe:** Chaotic, colorful, and lively. The heart of the city.

### 3. MG Road (Port Blair)
*   **Best for:** Mid-range shops selling souvenirs, clothes, and essentials.

### 4. Market No. 3 (Havelock)
*   **Best for:** Beach clothes, sarongs, and small trinkets.
*   **Vibe:** Laid-back island market.

<img src="https://images.pexels.com/photos/6158116/pexels-photo-6158116.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="${images.market.alt}" width="${images.market.width}" height="${images.market.height}" />

---

## Important: The "No-No" List 🚫
To protect the fragile ecosystem, the administration is strict.
*   **DO NOT** pick up shells or dead corals from the beach.
*   **DO NOT** buy shells from roadside vendors who can't give a receipt.
*   **DO NOT** try to smuggle coral pieces in your luggage. Airport scanners will find them, and you will be fined.

---
*Shopping is fun, but memories are better. Book an [Experience](/experiences) to create moments that last forever.*
`,
};

export default post;
