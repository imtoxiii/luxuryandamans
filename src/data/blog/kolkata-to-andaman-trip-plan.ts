import { BlogPost } from '../../types/blog';

const slug = 'kolkata-to-andaman-trip-plan';

const images = {
  main: {
    src: `/blog-assets/${slug}/kolkata-to-andaman-flight-view.jpg`,
    alt: 'An airplane flying over the Bay of Bengal, representing the short flight from Kolkata to the Andamans.',
    width: 1920,
    height: 1080
  },
  imageOne: {
    src: `/blog-assets/${slug}/radhanagar-beach-havelock.jpg`,
    alt: 'Tourists relaxing on the white sands of Radhanagar Beach in Havelock Island.',
    width: 1200,
    height: 800
  }
};

const post: BlogPost = {
  id: slug,
  title: 'Kolkata to Andaman Trip (2025): A Complete Guide to Flights, Itinerary & Budget',
  slug: slug,
  excerpt:
    'As the closest metro city, Kolkata is the perfect gateway to the Andamans. Our 2025 guide covers direct flights, a detailed 7-day itinerary, a realistic budget, and special tips for travelers from Kolkata.',
  image: images.main.src,
  author: {
    name: 'Luxury Andamans Team',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: 'Local experts crafting unforgettable island experiences across the Andaman archipelago.'
  },
  date: new Date().toISOString(),
  readTime: '11 min read',
  category: 'City Guides',
  tags: [
    'kolkata to andaman',
    'andaman from kolkata',
    'andaman packages from kolkata',
    'direct flights to port blair',
    'andaman trip cost',
    'west bengal to andaman'
  ],
  relatedPosts: [
    '7-day-andaman-itinerary',
    'andaman-best-time',
    'andaman-family-itinerary'
  ],
  content: `
## Your Quickest Escape to Paradise: The Kolkata to Andaman Guide

For the people of Kolkata, the Andaman Islands are practically a weekend getaway extension. As the closest major metro city, Kolkata offers the fastest and often cheapest flights to this tropical haven. If you're planning to trade the city's vibrant culture for tranquil beaches, this guide is your perfect starting point, covering everything from flight tips to a fantastic itinerary for 2025.

## Flights: The Kolkata Advantage - Quick & Direct

Kolkata (CCU) is geographically blessed when it comes to reaching Port Blair (IXZ).

- **Direct Flights:** Numerous direct flights are available, especially during the peak season. Airlines like IndiGo and Air India are popular choices.
- **Shortest Flight Time:** The non-stop flight takes only about 2 hours and 15 minutes. You can leave in the morning and be on an island beach by the afternoon!
- **Booking Advice:** For the best fares (often between ₹5,000 - ₹10,000 one-way in shoulder season), book your tickets at least 30-45 days in advance.

## A Perfect 7-Day Itinerary from Kolkata

This plan is designed to maximize your vacation time, blending popular sights with relaxation.

- **Day 1: Arrival & History:** Take an early flight from Kolkata. Arrive in Port Blair, check in, and spend the evening at the Cellular Jail for the inspiring Light and Sound Show.
- **Day 2: Two-Island Tour:** Embark on a day trip to Ross Island to see colonial ruins and then to North Bay Island for its iconic lighthouse and water activities like sea walking.
- **Day 3: Journey to Havelock & Beach Bliss:** Take a morning ferry to Havelock Island. After checking in, head straight to Radhanagar Beach to witness a world-famous sunset.
- **Day 4: Snorkeling & Adventure:** Visit Elephant Beach via a thrilling speedboat ride. Spend the day snorkeling in the clear waters and exploring the rich coral reefs.
- **Day 5: Serene Neil Island:** Take a ferry to the laid-back Neil Island. Visit the Natural Bridge in the evening during low tide and watch the sunset from Laxmanpur Beach.
- **Day 6: Island Exploration & Return:** Enjoy the morning at Bharatpur Beach, known for its calm waters. Take an afternoon ferry back to Port Blair for a relaxed final evening.
- **Day 7: Departure:** Depending on your flight time, you can do some last-minute souvenir shopping before heading to the airport for your quick flight back to Kolkata.

![${images.imageOne.alt}](${images.imageOne.src})

## Budgeting Your Trip: A Couple's Guide from Kolkata

Here's what a comfortable 7-day trip for two could look like.

- **Return Flights:** ₹20,000 - ₹38,000 (the biggest factor is your booking time)
- **Inter-Island Ferries:** ₹8,000 - ₹12,000
- **Accommodation:** ₹30,000 - ₹70,000
- **Activities & Water Sports:** ₹10,000 - ₹25,000
- **Food & Local Transport:** ₹12,000 - ₹20,000

**Total Estimated Cost for a Couple:** ₹80,000 - ₹1,65,000

## Tips for Kolkata Travelers

- **Puja Holidays:** The Andamans are a fantastic destination for the Durga Puja holidays, but book everything (flights, hotels, ferries) months in advance as it's a peak travel period.
- **Seafood Delights:** If you love Bengali cuisine, you'll be in heaven with the fresh seafood here. Don't miss trying the local fish curries and grilled seafood.
- **Carry Cash:** While Port Blair has plenty of ATMs, they become scarce on Havelock and Neil. Carry enough cash for a smoother experience.

Ready to plan? Check out our [Family Itinerary](/blog/andaman-family-itinerary) for more ideas or browse our all-inclusive [Andaman Packages](/packages).
`,
  faq: [
    {
      question: 'How long is the direct flight from Kolkata to Port Blair?',
      answer:
        'The direct flight from Kolkata (CCU) to Port Blair (IXZ) is the shortest from any Indian metro city, taking only about 2 hours and 15 minutes.'
    },
    {
      question: 'Is travelling by ship from Kolkata to Andaman a good idea?',
      answer:
        'While passenger ships are available, they are not recommended for tourists. The journey is long (3-4 days) and lacks the comforts of a cruise. Flying is a far more practical and time-efficient option for a vacation.'
    },
    {
      question: 'Will I find Bengali food in the Andaman Islands?',
      answer:
        'Yes, due to a significant Bengali population, you will find many restaurants and eateries serving delicious Bengali cuisine, especially fish-based dishes like `macher jhol` and fresh seafood fries, particularly in Port Blair and Havelock.'
    },
    {
      question: 'Is it a good idea to visit Andaman during the Durga Puja holidays?',
      answer:
        'Absolutely! The weather in October is generally beautiful, making it a perfect time to visit. However, this is a very popular period for tourists from West Bengal, so you must book flights and hotels at least 3-4 months in advance to avoid high prices and sold-out rooms.'
    },
    {
      question: 'Which is the best island for a family trip: Havelock or Neil?',
      answer:
        'Havelock has more resorts, restaurants, and activities, making it a great base with lots to do. Neil Island is quieter and more rustic, perfect for relaxation. A good family itinerary usually includes 2-3 days in Havelock and 1-2 days in Neil to experience both.'
    }
  ]
};

export default post;


