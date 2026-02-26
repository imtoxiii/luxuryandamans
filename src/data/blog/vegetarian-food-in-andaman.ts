import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

const slug = 'vegetarian-food-in-andaman';
const imagePath = `/blog-assets/${slug}/`;

const images = {
  main: {
    src: 'https://images.pexels.com/photos/6158116/pexels-photo-6158116.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Delicious South Indian vegetarian thali served in Andaman',
    width: 1200,
    height: 800,
  },
  restaurant: {
    src: 'https://images.pexels.com/photos/137089/pexels-photo-137089.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Cozy vegetarian friendly cafe in Havelock',
    width: 800,
    height: 533,
  },
  fruits: {
    src: 'https://images.pexels.com/photos/137089/pexels-photo-137089.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Fresh tropical fruits and coconuts available in Andaman markets',
    width: 800,
    height: 533,
  },
};

const post: BlogPost = {
  id: 'vegetarian-food-in-andaman',
  title: 'Vegetarian Food in Andaman: A Complete Guide for 2025',
  slug: 'vegetarian-food-in-andaman',
  excerpt:
    'Worried that Andaman is only for seafood lovers? Think again! Discover the best pure veg restaurants, Jain food options, and what to eat in Port Blair and Havelock.',
  image: images.main.src,
  author: defaultAuthor,
  date: new Date().toISOString(),
  readTime: '7 min read',
  category: 'Food & Drink',
  tags: [
    'vegetarian food in andaman',
    'pure veg restaurants port blair',
    'jain food andaman',
    'veg food havelock',
    'indian food andaman',
    'best restaurants andaman',
  ],
  relatedPosts: ['andaman-food-guide', 'andaman-family-itinerary', 'andaman-luxury-resorts-2025'],
  faq: [
    {
      question: 'Is vegetarian food easily available in Andaman?',
      answer:
        '**Yes.** While Andaman is famous for seafood, it has a large settler population from Bengal and South India, so vegetarian food (North Indian, South Indian, and Bengali veg) is widely available everywhere.'
    },
    {
      question: 'Are there Pure Veg restaurants?',
      answer:
        'Yes, Port Blair has several famous pure veg restaurants like **Annapurna** and **Icy Spicy**. Havelock and Neil also have pure veg options, though fewer in number.'
    },
    {
      question: 'Can I get Jain food in Andaman?',
      answer:
        'Yes. Many hotels and restaurants understand Jain dietary requirements (no onion, no garlic). It is best to inform your hotel or chef in advance, and they will happily customize meals for you.'
    },
    {
      question: 'Is veg food expensive in Andaman?',
      answer:
        'It is slightly more expensive than the mainland because most vegetables are imported from Chennai or Kolkata. However, it is still very affordable compared to international destinations.'
    },
    {
      question: 'What are the must-try veg dishes?',
      answer:
        'Don\'t miss the fresh **coconut water**, tropical fruits (mangoes, bananas, papayas), and South Indian breakfasts (Idli, Dosa) which are authentic and delicious.'
    }
  ],
  content: `
## A Vegetarian's Paradise? Yes, Really! 🥗

A common myth about the Andaman Islands is that you will struggle if you don't eat fish. This couldn't be further from the truth.

Thanks to a diverse population of settlers from Tamil Nadu, West Bengal, Kerala, and Andhra Pradesh, Andaman offers a rich variety of vegetarian cuisine. Whether you crave a crispy Dosa, a comforting Dal Tadka, or a spicy Paneer curry, you will find it here.

---

## Best Places for Vegetarians 🍽️

### In Port Blair
Port Blair is the capital and has the most options.
1.  **Annapurna Cafeteria (Aberdeen Bazar):** A legendary spot for authentic South Indian pure veg food. Their Dosas and Thalis are a must-try.
2.  **Icy Spicy:** Excellent North Indian vegetarian food, chaats, and sweets. A favorite among families.
3.  **Kattabomman:** Famous for early morning tiffin (breakfast) – Idli, Vada, and Pongal.

### In Havelock (Swaraj Dweep)
Havelock is more tourist-centric, with multi-cuisine cafes.
1.  **Something Different:** A popular cafe that serves great veg options (pizzas, pastas, and Indian).
2.  **Anju Coco:** Famous for its massive menu. Their veg breakfast platters and pancakes are a hit.
3.  **Welcome Restaurant:** A budget-friendly spot in the market serving simple, homely Indian veg meals.

<img src="https://images.pexels.com/photos/6158116/pexels-photo-6158116.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="${images.restaurant.alt}" width="${images.restaurant.width}" height="${images.restaurant.height}" />

### In Neil Island (Shaheed Dweep)
Neil is known as the "Vegetable Bowl" of Andaman because lots of farming happens here!
1.  **Dugong:** The restaurant at SeaShell Neil serves fantastic veg buffets.
2.  **Local Dhabas:** In the Neil market, you'll find small stalls selling fresh fruit salads and coconut water.

---

## Jain Food Availability 🥬
If you follow a Jain diet, you don't need to carry instant noodles.
- **Hotels:** Most 3-star and above hotels (like Taj Exotica, Silver Sand, SeaShell) are happy to prepare Jain meals on request.
- **Restaurants:** Places like Annapurna in Port Blair serve Jain-friendly options.
- **Tip:** Always mention *"No Onion, No Garlic"* clearly while ordering, as "Veg" usually implies standard Indian veg with onion/garlic.

---

## What to Eat: Local Veg Delights
Since you are on a tropical island, make the most of the local produce!
- **Green Coconuts:** Sweet, hydrating, and available at every corner for ₹40-60.
- **Tropical Fruits:** Look out for local bananas, papayas, and in summer, the sweetest mangoes.
- **Tubers:** Tapioca and sweet potato dishes are traditional to the settlers.

<img src="https://images.pexels.com/photos/17249035/pexels-photo-17249035/free-photo-of-exotic-fruit-on-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="${images.fruits.alt}" width="${images.fruits.width}" height="${images.fruits.height}" />

## Conclusion
Vegetarians need not worry. You will be well-fed and happy in Andaman. In fact, a simple meal of hot rice, dal, and a vegetable stir-fry by the beach often tastes better than any fancy dinner!

---
*Planning a food trip? Check out our [Andaman Food Guide](/blog/andaman-food-guide) for more culinary secrets.*
`,
};

export default post;
