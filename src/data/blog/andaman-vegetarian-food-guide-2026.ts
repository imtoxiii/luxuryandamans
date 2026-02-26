import { BlogPost } from '../../types/blog';
import { defaultAuthor } from './author';

const images = {
    main: {
        src: 'https://images.pexels.com/photos/5945867/pexels-photo-5945867.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'A delicious Indian vegetarian thali with regional specialties and fresh salads.',
        width: 1200,
        height: 800,
    }
};

const post: BlogPost = {
    id: 'andaman-vegetarian-food-guide-2026',
    title: 'Is Andaman Good for Vegetarians? 2026 Veg Food Guide',
    slug: 'andaman-vegetarian-food-guide-2026',
    excerpt:
        "Worried about finding green food on a seafood lover's island? Don't stress. Andaman's vegetarian scene has exploded. From pure veg restaurants to Jain options, here is the 2026 list.",
    image: images.main.src,
    author: defaultAuthor,
    date: new Date().toISOString(),
    readTime: '6 min read',
    category: 'Food & Drink',
    tags: [
        'vegetarian food andaman',
        'pure veg restaurants port blair',
        'best veg food havelock',
        'jain food andaman',
        'andaman food guide 2026'
    ],
    relatedPosts: [
        'andaman-food-guide',
        'andaman-family-itinerary-2026',
        'andaman-budget-guide'
    ],
    faq: [
        {
            question: 'Is it hard to find vegetarian food in Andaman?',
            answer:
                'Not at all. While seafood is famous, every single restaurant offers a robust North Indian, South Indian, and Continental vegetarian menu due to the high number of domestic tourists.'
        },
        {
            question: 'Are there pure vegetarian restaurants?',
            answer:
                'Yes! Annapurna and Icy Spicy in Port Blair are fully vegetarian. Many new cafes in Havelock also cater exclusively to plant-based diets.'
        },
        {
            question: 'Can I get Jain food?',
            answer:
                'Most hotels understand Jain dietary requirements (no onion/garlic). It is best to inform the chef in advance, but places like Annapurna serve Jain thalis daily.'
        }
    ],
    content: `
## Don't Panic, It's Not Just Fish! 🥦

A common misconception is that island life means only seafood. But Andaman is part of India! With tourists pouring in from Gujarat, Bengal, and Tamil Nadu, the vegetarian food scene is thriving in 2026.

You won't just survive on bread and butter; you will feast on paneer butter masala, crispy dosas, and tropical salads.

---

## Top Vegetarian-Friendly Restaurants (2026 Edition)

### 1. Port Blair
- **Annapurna (Aberdeen Bazaar):** A legend. Pure veg South Indian tiffin and North Indian meals. Crowded but worth the wait.
- **Icy Spicy:** A modern multi-cuisine pure veg restaurant. Great for families. Try their chaaters and pasta.
- **New Lighthouse Restaurant:** Famous for seafood but has a separate kitchen section for vegetarians ensuring no cross-contamination.

### 2. Havelock Island (Swaraj Dweep)
- **Something Different:** A beachside cafe with a massive veg menu. Their wood-fired pizzas are a hit.
- **Full Moon Cafe:** Offers excellent vegan and vegetarian salads, smoothies, and pancakes. Very Instagrammable.
- **Anju Coco:** While they serve seafood, their vegetarian thalis and paneer dishes are top-rated by travelers.

### 3. Neil Island (Shaheed Dweep)
- **Garden View Restaurant:** A small, family-run place known for home-style vegetarian curries.
- **Dugong:** The restaurant at SeaShell resort has a fantastic buffet spread with 50% vegetarian options.

---

## Must-Try Vegetarian Dishes in Andaman
When you see "local food," it's usually fish. But don't miss these:
- **Tropical Fruit Salad:** Papaya, pineapple, mango, and banana. Incredibly fresh.
- **Coconut Curry:** Ask for the veg version. The coconut milk base is divine.
- **Banana Flower Sabzi:** A rare local delicacy often cooked in Bengali style. Ask your hotel chef if they can make it.

---

## A Note for Vegans 🥑
Veganism is growing in popularity here. Coconut milk is a staple, making dairy-free requests easy. Smoothies, fruit bowls, and vegetable stir-fries are available almost everywhere.

---

## Plan Your Dream Trip! 
Want a hassle-free Andaman experience? Let our local experts plan your 2026 getaway. 
[**Contact Us Now**](/contact) for customized packages and best deals.
`
};

export default post;
