import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Plane, 
  Book, 
  Sun, 
  CreditCard, 
  Import as Passport, 
  Backpack, 
  Bus, 
  Phone, 
  AlertTriangle, 
  Heart, 
  ArrowRight 
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

interface SeasonContent {
  season: string;
  description: string;
  highlights: string[];
  image: string;
}

interface StandardContent {
  [key: string]: {
    items: string[];
    image?: string;
  };
}

interface Section {
  title: string;
  icon: React.ReactNode;
  content: SeasonContent[] | StandardContent;
  description?: string;
}

const TravelGuide = () => {
  const location = useLocation();
  
  // Ensure page loads from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const sections: Section[] = [
    {
      title: "Best Time to Visit",
      icon: <Calendar className="w-8 h-8 text-azure" />,
      description: "Plan your trip during the ideal season for the best experience",
      content: [
        {
          season: "Peak Season (November to April)",
          description: "Perfect weather with clear skies and calm seas. Ideal for water activities.",
          highlights: [
            "Average temperature: 24°C to 30°C",
            "Clear underwater visibility",
            "Perfect for beach activities",
            "Higher rates and advance booking required"
          ],
          image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          season: "Off Season (May to October)",
          description: "Occasional rain with humid weather. Good for budget travelers.",
          highlights: [
            "Occasional rainfall",
            "Lower tourist crowds",
            "Better rates on accommodation",
            "Some water activities may be limited"
          ],
          image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      title: "Getting There",
      icon: <Plane className="w-8 h-8 text-azure" />,
      description: "Everything you need to know about reaching the Andaman Islands",
      content: {
        flights: {
          items: [
            "Direct flights from major Indian cities to Port Blair",
            "Major airlines: Air India, Vistara, IndiGo",
            "Flight duration: 2-2.5 hours from Chennai/Kolkata",
            "International travelers need to connect via mainland India"
          ],
          image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        tips: {
          items: [
            "Book flights at least 2-3 months in advance",
            "Morning flights have better visibility for landing",
            "Keep a buffer day for connecting flights"
          ]
        }
      }
    },
    {
      title: "Visa Requirements",
      icon: <Passport className="w-8 h-8 text-azure" />,
      content: {
        indian: {
          items: [
            "No special permit required for Indian nationals",
            "Valid government ID proof needed",
            "Photography permits for some locations"
          ]
        },
        foreign: {
          items: [
            "Valid Indian visa required",
            "Restricted Area Permit (RAP) needed",
            "RAP issued on arrival for 30 days",
            "Some islands require additional permits"
          ]
        }
      }
    },
    {
      title: "Local Transportation",
      icon: <Bus className="w-8 h-8 text-azure" />,
      content: {
        options: {
          items: [
            "Government ferries between islands",
            "Private luxury boats",
            "Auto rickshaws in Port Blair",
            "Rental scooters on larger islands",
            "Private taxis and car rentals"
          ]
        },
        tips: {
          items: [
            "Book ferry tickets in advance",
            "Government ferries are economical",
            "Private boats offer flexibility",
            "Some resorts provide transfers"
          ]
        }
      }
    },
    {
      title: "Packing Essentials",
      icon: <Backpack className="w-8 h-8 text-azure" />,
      content: {
        clothing: {
          items: [
            "Light cotton clothes",
            "Swimwear",
            "Sun hat and sunglasses",
            "Light rain jacket",
            "Comfortable walking shoes"
          ]
        },
        essentials: {
          items: [
            "Sunscreen (SPF 50+)",
            "Insect repellent",
            "First-aid kit",
            "Power bank",
            "Universal adapter"
          ]
        },
        documents: {
          items: [
            "ID proof",
            "Travel insurance",
            "Hotel bookings",
            "Ferry tickets",
            "Cash and cards"
          ]
        }
      }
    },
    {
      title: "Local Customs",
      icon: <Book className="w-8 h-8 text-azure" />,
      content: {
        etiquette: {
          items: [
            "Respect local tribal areas",
            "Modest dress at religious places",
            "Ask before photographing locals",
            "Remove shoes at temples"
          ]
        },
        culture: {
          items: [
            "Mix of Indian and Southeast Asian culture",
            "Multiple languages spoken",
            "Rich colonial history",
            "Diverse local cuisine"
          ]
        }
      }
    },
    {
      title: "Safety Tips",
      icon: <AlertTriangle className="w-8 h-8 text-azure" />,
      content: {
        general: {
          items: [
            "Follow water safety guidelines",
            "Stay hydrated",
            "Use reef-safe sunscreen",
            "Keep emergency contacts handy"
          ]
        },
        water: {
          items: [
            "Check weather before water activities",
            "Follow lifeguard instructions",
            "Use life jackets during water sports",
            "Avoid remote beaches alone"
          ]
        }
      }
    },
    {
      title: "Emergency Contacts",
      icon: <Phone className="w-8 h-8 text-azure" />,
      content: {
        numbers: {
          items: [
            "Police: 100",
            "Ambulance: 102",
            "Tourist Police: +91-3192-232194",
            "Coast Guard: +91-3192-232714"
          ]
        },
        hospitals: {
          items: [
            "GB Pant Hospital, Port Blair",
            "Andaman Hospital, Port Blair",
            "Primary Health Centers on major islands"
          ]
        }
      }
    },
    {
      title: "Weather Guide",
      icon: <Sun className="w-8 h-8 text-azure" />,
      content: {
        summer: {
          items: [
            "March to May",
            "Temperature: 24°C to 37°C",
            "High humidity",
            "Perfect for beach activities"
          ]
        },
        monsoon: {
          items: [
            "June to September",
            "Frequent rainfall",
            "Rough seas possible",
            "Some activity restrictions"
          ]
        },
        winter: {
          items: [
            "October to February",
            "Pleasant temperatures",
            "Clear skies",
            "Best time for outdoor activities"
          ]
        }
      }
    },
    {
      title: "Cultural Tips",
      icon: <Heart className="w-8 h-8 text-azure" />,
      content: {
        customs: {
          items: [
            "Respect local traditions",
            "Dress modestly at religious sites",
            "Ask permission before photography",
            "Remove shoes at temples"
          ]
        },
        etiquette: {
          items: [
            "Greet with 'Namaste'",
            "Use right hand for eating",
            "Respect local customs",
            "Be mindful of noise levels"
          ]
        }
      }
    },
    {
      title: "Money Matters",
      icon: <CreditCard className="w-8 h-8 text-azure" />,
      content: {
        currency: {
          items: [
            "Indian Rupee (INR)",
            "Major cards accepted",
            "ATMs in main towns",
            "Carry some cash"
          ]
        },
        expenses: {
          items: [
            "Budget: ₹3000-5000/day",
            "Mid-range: ₹5000-10000/day",
            "Luxury: ₹10000+/day",
            "Activity costs extra"
          ]
        }
      }
    }
  ];

  const isSeasonContent = (content: any): content is SeasonContent[] => {
    return Array.isArray(content) && content.length > 0 && 'season' in content[0];
  };

  const featuredDestinations = [
    {
      name: "Havelock Island",
      image: "https://images.unsplash.com/photo-1583212292454-39d2a21af845?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Home to the famous Radhanagar Beach"
    },
    {
      name: "Neil Island",
      image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Perfect for nature lovers and peace seekers"
    },
    {
      name: "Port Blair",
      image: "https://images.unsplash.com/photo-1584507305093-a4e42d1632c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "The gateway to the Andaman Islands"
    }
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Travel Guide - Andaman Islands"
        description="Complete travel guide for the Andaman Islands. Learn about the best time to visit, visa requirements, local transportation, packing essentials, and more."
        keywords="andaman travel guide, andaman visa, andaman transportation, andaman weather, andaman safety"
        pathname={location.pathname}
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1583212292454-39d2a21af845?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Andaman Islands Travel Guide"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/60 to-night/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-pearl mb-6">
              Your Ultimate Guide to Paradise
            </h1>
            <p className="text-xl text-pearl/90 mb-8">
              Everything you need to know for your perfect Andaman Islands adventure
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a 
                href="#featured-destinations" 
                                      className="px-8 py-4 glass-sunset-button"
              >
                Explore Destinations
              </a>
              <a 
                href="#travel-tips" 
                className="px-8 py-4 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Travel Tips
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Featured Destinations */}
      <section id="featured-destinations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-night mb-4">Featured Destinations</h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Discover the most beautiful locations across the Andaman Islands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-pearl mb-2">{dest.name}</h3>
                  <p className="text-pearl/90">{dest.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section id="travel-tips" className="py-12 bg-pearl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sections.slice(0, 4).map((section, index) => (
              <motion.a
                key={index}
                href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all group text-center"
              >
                <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-azure/20 transition-colors">
                  {section.icon}
                </div>
                <h3 className="text-lg font-semibold text-night mb-2">{section.title}</h3>
                {section.description && (
                  <p className="text-sm text-night/70">{section.description}</p>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                id={section.title.toLowerCase().replace(/\s+/g, '-')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-azure/10 rounded-full flex items-center justify-center">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-night">{section.title}</h2>
                    {section.description && (
                      <p className="text-night/70 mt-1">{section.description}</p>
                    )}
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  {isSeasonContent(section.content) ? (
                    // Best Time to Visit Section
                    <div>
                      {section.content.map((season, i) => (
                        <div key={i} className="border-b border-gray-100 last:border-0">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                            <div>
                              <h3 className="text-xl font-semibold text-night mb-3">{season.season}</h3>
                              <p className="text-night/70 mb-4">{season.description}</p>
                              <ul className="space-y-3">
                                {season.highlights.map((highlight, j) => (
                                  <li key={j} className="flex items-center text-night/70">
                                    <span className="w-2 h-2 glass-sunset-dot mr-2" />
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="relative h-64 rounded-lg overflow-hidden">
                              <img
                                src={season.image}
                                alt={season.season}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Other Sections
                    <div className="p-8">
                      {Object.entries(section.content).map(([key, { items, image }], i) => (
                        <div key={i} className="mb-8 last:mb-0">
                          <div className={`grid grid-cols-1 ${image ? 'md:grid-cols-2' : ''} gap-8`}>
                            <div>
                              <h3 className="text-xl font-semibold text-night mb-4 capitalize">{key}</h3>
                              <ul className="space-y-3">
                                {items.map((item, j) => (
                                  <li key={j} className="flex items-center text-night/70">
                                    <span className="w-2 h-2 glass-sunset-dot mr-2" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {image && (
                              <div className="relative h-64 rounded-lg overflow-hidden">
                                <img
                                  src={image}
                                  alt={key}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Guide CTA */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Book className="w-10 h-10 text-azure" />
            </div>
            <h2 className="text-4xl font-bold text-pearl mb-4">
              Get Your Complete Travel Guide
            </h2>
            <p className="text-pearl/80 mb-8">
              Download our comprehensive PDF guide with offline maps, emergency contacts, 
              and detailed information about the Andaman Islands.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 group">
              <span>Download PDF Guide</span>
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TravelGuide;
