export interface Destination {
  name: string;
  description: string;
  longDescription: string;
  image: string;
  activities: string[];
  highlights: {
    title: string;
    description: string;
    image: string;
  }[];
  bestTimeToVisit: string;
  howToReach: string;
  slug: string;
}

export const destinations: Destination[] = [
  {
    name: "Havelock Island",
    description: "Home to the famous Radhanagar Beach",
    longDescription: "Havelock Island, officially known as Swaraj Dweep, is the most popular tourist destination in the Andamans. Known for its pristine beaches, crystal-clear waters, and world-class diving spots.",
    image: "https://images.unsplash.com/photo-1505881502353-a1986add3762?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    activities: ["Scuba Diving", "Beach Walks", "Sunset Views", "Kayaking", "Snorkeling"],
    highlights: [
      {
        title: "Radhanagar Beach",
        description: "Ranked as Asia's best beach, perfect for swimming and sunsets",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Elephant Beach",
        description: "Popular for snorkeling and water sports",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "October to May",
    howToReach: "2-hour ferry ride from Port Blair",
    slug: "havelock-island"
  },
  {
    name: "Neil Island",
    description: "Perfect for nature lovers and peace seekers",
    longDescription: "Neil Island, now known as Shaheed Dweep, is a smaller, less crowded island known for its pristine beaches, clear waters, and laid-back atmosphere. It's perfect for those seeking tranquility.",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    activities: ["Snorkeling", "Glass Bottom Boats", "Cave Exploration", "Beach Hopping", "Cycling"],
    highlights: [
      {
        title: "Natural Bridge",
        description: "Unique coral formation connecting two islands",
        image: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Bharatpur Beach",
        description: "Perfect for snorkeling and swimming",
        image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "October to May",
    howToReach: "2-hour ferry ride from Port Blair",
    slug: "neil-island"
  },
  {
    name: "Port Blair",
    description: "The gateway to the Andaman Islands",
    longDescription: "Port Blair, the capital city of the Andaman and Nicobar Islands, is a historical hub featuring the infamous Cellular Jail and other colonial remnants. It serves as the main entry point to the islands.",
    image: "https://images.unsplash.com/photo-1640618792277-b91f3199f6a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    activities: ["Historical Tours", "Local Culture", "Shopping", "Museum Visits", "Water Sports"],
    highlights: [
      {
        title: "Cellular Jail",
        description: "Historic colonial prison with light and sound show",
        image: "https://images.unsplash.com/photo-1584507305093-a4e42d1632c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Aberdeen Bazaar",
        description: "Main shopping area with local markets",
        image: "https://images.unsplash.com/photo-1555921015-5532091f6026?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "October to May",
    howToReach: "Direct flights from major Indian cities",
    slug: "port-blair"
  },
  {
    name: "Barren Island",
    description: "Home to India's only active volcano",
    longDescription: "Barren Island is a small uninhabited volcanic island located in the Andaman Sea. It hosts India's only active volcano, which has been showing intermittent activity since its first recorded eruption in 1787.",
    image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    activities: ["Volcano Viewing", "Boat Tours", "Marine Life", "Photography"],
    highlights: [
      {
        title: "Active Volcano",
        description: "Witness the majestic active volcano from a safe distance",
        image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Marine Ecosystem",
        description: "Unique marine life thriving in volcanic waters",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "December to March",
    howToReach: "Special boat tours from Port Blair (permits required)",
    slug: "barren-island"
  },
  {
    name: "Ross Island",
    description: "The erstwhile administrative headquarters of the British",
    longDescription: "Ross Island, officially known as Netaji Subhas Chandra Bose Island, is a small island located just a few kilometers from Port Blair. It was the administrative headquarters of the British in the Andaman Islands and is now a popular tourist destination with its ruins of colonial-era buildings.",
    image: "https://images.unsplash.com/photo-1616428373638-7a9bdecbe342?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    activities: ["Historical Walk", "Deer Feeding", "Light & Sound Show", "Museum Visit", "Beach Exploration"],
    highlights: [
      {
        title: "British Ruins",
        description: "Explore the remnants of the British colonial past",
        image: "https://images.unsplash.com/photo-1616428373638-7a9bdecbe342?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Japanese Bunkers",
        description: "Discover the bunkers built during World War II",
        image: "https://images.unsplash.com/photo-1616428373638-7a9bdecbe342?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    bestTimeToVisit: "October to May",
    howToReach: "Short ferry ride from Port Blair",
    slug: "ross-island"
  }
];