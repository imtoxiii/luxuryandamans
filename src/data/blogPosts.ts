import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: "hidden-beaches",
    title: "Top 10 Hidden Beaches in the Andamans",
    slug: "top-10-hidden-beaches-andamans",
    excerpt: "Discover secluded paradise spots away from the tourist crowds",
    content: `
      The Andaman Islands are home to some of the most pristine and secluded beaches in the world. While popular spots like Radhanagar Beach draw crowds, there are numerous hidden gems waiting to be discovered.

      ## 1. Butler Bay Beach, Little Andaman
      Nestled on the western coast of Little Andaman, Butler Bay Beach is a surfer's paradise with pristine white sand and perfect waves. The beach is relatively unknown to tourists, making it an ideal spot for those seeking solitude.

      ## 2. Lalaji Bay Beach, Long Island
      Accessible only by a 2-hour trek through dense forest or by boat, Lalaji Bay Beach offers crystal clear waters and abundant marine life. The journey itself is an adventure, making the destination even more rewarding.

      ## 3. Guitar Island Beach
      This guitar-shaped island features a stunning beach with coral reefs perfect for snorkeling. Its remote location ensures few visitors and untouched natural beauty.

      ## 4. Karmatang Beach, Mayabunder
      Known for its turtle nesting sites, Karmatang Beach offers a unique wildlife experience along with its scenic beauty. Visit between December and February to witness turtle nesting.

      ## 5. Avis Island Beach
      A small, uninhabited island with a circular beach offering excellent snorkeling opportunities. The surrounding waters are rich in coral life and tropical fish.

      ## Best Time to Visit
      - October to May is ideal for beach exploration
      - Early mornings offer the best photography opportunities
      - Check tide tables for the best swimming conditions

      ## Essential Tips
      - Carry sufficient water and snacks
      - Wear reef-safe sunscreen
      - Respect local wildlife and marine ecosystems
      - Some beaches require permits - plan ahead
      - Consider hiring local guides for hidden spots
    `,
    image: "https://images.unsplash.com/photo-1583212292454-39d2a21af845?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      bio: "Travel writer specializing in off-beat destinations"
    },
    date: "2025-02-15",
    readTime: "5 min read",
    category: "Travel Guide",
    tags: ["beaches", "hidden gems", "travel tips", "adventure"],
    relatedPosts: ["diving-guide", "island-hopping-guide"]
  },
  {
    id: "diving-guide",
    title: "A Diver's Guide to Marine Life",
    slug: "divers-guide-marine-life",
    excerpt: "Exploring the underwater wonders of the Andaman Sea",
    content: `
      The Andaman Sea is a treasure trove of marine biodiversity, offering some of the best diving experiences in the world. From vibrant coral reefs to mysterious shipwrecks, every dive promises a new adventure.

      ## Best Diving Spots

      ### 1. Dixon's Pinnacle
      - Depth: 18-40m
      - Known for: Barracudas, snappers, and manta rays
      - Difficulty: Advanced
      
      ### 2. Johnny's Gorge
      - Depth: 25-35m
      - Known for: Grey reef sharks and eagle rays
      - Difficulty: Advanced

      ### 3. The Wall
      - Depth: 12-35m
      - Known for: Coral formations and macro life
      - Difficulty: Intermediate

      ## Marine Life Guide

      ### Coral Species
      The Andamans host over 200 species of coral, including:
      - Staghorn coral
      - Brain coral
      - Table coral
      - Soft corals

      ### Fish Species
      Common sightings include:
      - Clownfish
      - Parrotfish
      - Lionfish
      - Moray eels
      - Butterflyfish

      ## Conservation Tips
      - Maintain proper buoyancy
      - Never touch marine life
      - Use reef-safe sunscreen
      - Follow responsible diving practices
      - Support local conservation efforts

      ## Best Time for Diving
      - October to May offers the best visibility
      - December to February has the calmest seas
      - Early morning dives often provide the best conditions
    `,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      bio: "PADI certified diving instructor with 10+ years experience"
    },
    date: "2025-02-10",
    readTime: "8 min read",
    category: "Diving",
    tags: ["scuba diving", "marine life", "underwater", "conservation"],
    relatedPosts: ["hidden-beaches", "sunset-photography"]
  },
  {
    id: "local-cuisine",
    title: "Local Cuisine: A Taste of the Islands",
    slug: "local-cuisine-taste-of-islands",
    excerpt: "Exploring the unique flavors of Andaman cuisine",
    content: `
      Andamanese cuisine is a delightful fusion of Indian, Southeast Asian, and colonial influences, with seafood playing a starring role. The islands' culinary heritage reflects its diverse cultural history and abundant natural resources.

      ## Signature Dishes

      ### 1. Fish Curry
      The Andamanese fish curry is unlike any other, featuring:
      - Fresh caught local fish
      - Coconut milk base
      - Local spices and herbs
      - Served with steamed rice

      ### 2. Grilled Lobster
      A luxury dish prepared with:
      - Local spiny lobster
      - Garlic butter sauce
      - Fresh herbs
      - Grilled to perfection

      ## Local Ingredients

      ### Seafood
      - Red snapper
      - King prawns
      - Mud crabs
      - Tuna
      - Barracuda

      ### Tropical Fruits
      - Mangoes
      - Coconuts
      - Passion fruit
      - Jackfruit
      - Local berries

      ## Where to Eat

      ### Fine Dining
      - Lighthouse Restaurant, Port Blair
      - Full Moon Café, Havelock
      - Sea Shell, Neil Island

      ### Local Eateries
      - Aberdeen Bazaar food stalls
      - Beach shacks
      - Night markets

      ## Cooking Classes
      Learn to prepare local dishes at:
      - Barefoot Resort
      - Port Blair Culinary School
      - Local home cooking experiences
    `,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: {
      name: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      bio: "Food critic and culinary tour guide"
    },
    date: "2025-02-05",
    readTime: "6 min read",
    category: "Food & Culture",
    tags: ["food", "cuisine", "local culture", "restaurants"],
    relatedPosts: ["luxury-resorts", "cultural-guide"]
  },
  {
    id: "sunset-photography",
    title: "Capturing the Perfect Andaman Sunset",
    slug: "capturing-perfect-andaman-sunset",
    excerpt: "Expert tips for photographing stunning island sunsets",
    content: `
      The Andaman Islands offer some of the most spectacular sunset views in the world. Here's your complete guide to capturing these magical moments.

      ## Best Locations for Sunset Photography

      ### 1. Radhanagar Beach, Havelock
      - Known for unobstructed views
      - Natural framing with palm trees
      - Golden hour starts around 5 PM

      ### 2. Chidiya Tapu, Port Blair
      - Elevated viewpoint
      - Silhouette opportunities
      - Less crowded than beaches

      ## Camera Settings

      ### Golden Hour
      - Aperture: f/8 to f/11
      - ISO: 100-400
      - Shutter Speed: 1/125 to 1/60
      - White Balance: Cloudy/Shade

      ### Blue Hour
      - Aperture: f/4 to f/5.6
      - ISO: 400-800
      - Shutter Speed: 1/60 to 1/30
      - White Balance: Auto

      ## Essential Equipment
      - Tripod
      - ND filters
      - Wide-angle lens
      - Lens cleaning kit
      - Remote shutter

      ## Pro Tips
      - Arrive 30 minutes before sunset
      - Use foreground elements
      - Check weather forecasts
      - Experiment with silhouettes
      - Consider time-lapse sequences
    `,
    image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: {
      name: "Alex Turner",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      bio: "Professional photographer specializing in landscape and travel photography"
    },
    date: "2025-01-28",
    readTime: "7 min read",
    category: "Photography",
    tags: ["photography", "sunset", "travel tips", "landscapes"],
    relatedPosts: ["hidden-beaches", "island-life"]
  },
  {
    id: "cultural-guide",
    title: "Cultural Heritage of the Andamans",
    slug: "cultural-heritage-andamans",
    excerpt: "Exploring the rich cultural tapestry of the islands",
    content: `
      The Andaman Islands are not just about beautiful beaches and marine life; they're home to a rich cultural heritage that spans thousands of years.

      ## Indigenous Tribes

      ### Great Andamanese
      - One of the oldest civilizations
      - Traditional hunting techniques
      - Unique language family
      - Current status and preservation

      ### Jarawa Community
      - Protected tribal areas
      - Traditional lifestyle
      - Conservation efforts
      - Respectful tourism guidelines

      ## Colonial History

      ### British Era
      - Cellular Jail history
      - Freedom struggle
      - Architectural heritage
      - Historical significance

      ## Modern Culture

      ### Festivals
      - Island Tourism Festival
      - Beach Festival
      - Local celebrations
      - Cultural performances

      ## Art Forms
      - Traditional crafts
      - Shell work
      - Wood carving
      - Contemporary arts

      ## Preservation Efforts
      - Cultural museums
      - Heritage sites
      - Education initiatives
      - Community programs
    `,
    image: "https://images.unsplash.com/photo-1584507305093-a4e42d1632c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: {
      name: "Dr. Rajesh Kumar",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      bio: "Cultural historian and anthropologist specializing in Andaman studies"
    },
    date: "2025-01-20",
    readTime: "10 min read",
    category: "Culture",
    tags: ["culture", "history", "tribes", "heritage"],
    relatedPosts: ["local-cuisine", "island-life"]
  },
  {
    id: "island-hopping-guide",
    title: "Ultimate Island Hopping Guide",
    slug: "ultimate-island-hopping-guide",
    excerpt: "Plan the perfect island-hopping adventure in the Andamans",
    content: `
      Island hopping in the Andamans is an adventure of a lifetime. Here's your comprehensive guide to exploring multiple islands efficiently and enjoyably.

      ## Planning Your Route

      ### Popular Circuits
      1. Port Blair → Havelock → Neil → Port Blair
      2. Port Blair → Ross Island → North Bay → Port Blair
      3. Port Blair → Baratang → Long Island → Port Blair

      ## Transportation

      ### Ferry Services
      - Government ferries (economical)
      - Private ferries (faster, more comfortable)
      - Helicopter services (premium)
      - Booking procedures

      ## Accommodation Options

      ### Budget
      - Local guesthouses
      - Beach huts
      - Hostels

      ### Luxury
      - Beach resorts
      - Private villas
      - Boutique hotels

      ## Essential Tips
      - Book ferries in advance
      - Check weather conditions
      - Carry motion sickness medication
      - Plan buffer days
      - Pack light but smart
    `,
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      bio: "Travel blogger and adventure enthusiast"
    },
    date: "2025-01-15",
    readTime: "9 min read",
    category: "Travel Guide",
    tags: ["island hopping", "travel tips", "adventure", "planning"],
    relatedPosts: ["hidden-beaches", "luxury-resorts"]
  }
];