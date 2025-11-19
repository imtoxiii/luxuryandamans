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
  ArrowRight,
  ChevronRight
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
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
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
      icon: <Plane className="w-6 h-6 text-blue-600" />,
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
      icon: <Passport className="w-6 h-6 text-blue-600" />,
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
      icon: <Bus className="w-6 h-6 text-blue-600" />,
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
      icon: <Backpack className="w-6 h-6 text-blue-600" />,
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
      icon: <Book className="w-6 h-6 text-blue-600" />,
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
      icon: <AlertTriangle className="w-6 h-6 text-blue-600" />,
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
      icon: <Phone className="w-6 h-6 text-blue-600" />,
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
      icon: <Sun className="w-6 h-6 text-blue-600" />,
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
      icon: <Heart className="w-6 h-6 text-blue-600" />,
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
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
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
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <SEO
        title="Travel Guide - Andaman Islands"
        description="Complete travel guide for the Andaman Islands. Learn about the best time to visit, visa requirements, local transportation, packing essentials, and more."
        keywords="andaman travel guide, andaman visa, andaman transportation, andaman weather, andaman safety"
        pathname={location.pathname}
      />
      <Header />

      {/* Modern Hero Section with Parallax */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-50 z-10" />
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1583212292454-39d2a21af845?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Andaman Guide"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
              <Book className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-medium tracking-wide uppercase">Essential Information</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-lg font-display">
              Your Ultimate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Travel Guide</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light mb-10">
              Everything you need to know for your perfect Andaman Islands adventure, curated by local experts.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#featured-destinations"
                className="px-8 py-3.5 bg-white text-blue-900 rounded-full font-bold text-sm hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Explore Destinations
              </a>
              <a
                href="#travel-tips"
                className="px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-sm hover:bg-white/20 transition-all duration-300"
              >
                Travel Tips
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="featured-destinations" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Must Visit</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Featured Destinations</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Discover the most beautiful locations across the Andaman Islands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-[2rem] shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">{dest.name}</h3>
                  <p className="text-gray-200 font-light">{dest.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section id="travel-tips" className="py-16 bg-gray-50 sticky top-20 z-30 border-b border-gray-200/50 backdrop-blur-sm bg-gray-50/90">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x">
            {sections.map((section, index) => (
              <motion.a
                key={index}
                href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex-shrink-0 snap-start bg-white px-6 py-4 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-200 group min-w-[200px] flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  {React.cloneElement(section.icon as React.ReactElement, {
                    className: "w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300"
                  })}
                </div>
                <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">{section.title}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-20">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                id={section.title.toLowerCase().replace(/\s+/g, '-')}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="scroll-mt-40"
              >
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-100">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">{section.title}</h2>
                    {section.description && (
                      <p className="text-gray-500 mt-2 text-lg">{section.description}</p>
                    )}
                  </div>
                </div>

                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100">
                  {isSeasonContent(section.content) ? (
                    // Best Time to Visit Section
                    <div>
                      {section.content.map((season, i) => (
                        <div key={i} className="border-b border-gray-100 last:border-0">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                            <div className="p-10 md:p-12 flex flex-col justify-center">
                              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">{season.season}</h3>
                              <p className="text-gray-600 mb-8 leading-relaxed">{season.description}</p>
                              <ul className="space-y-4">
                                {season.highlights.map((highlight, j) => (
                                  <li key={j} className="flex items-start text-gray-600">
                                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                                    </div>
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="relative h-64 md:h-auto">
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
                    <div className="p-10 md:p-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {Object.entries(section.content).map(([key, { items, image }], i) => (
                          <div key={i} className={`${image ? 'col-span-1' : 'col-span-1 md:col-span-2 lg:col-span-1'}`}>
                            <h3 className="text-xl font-bold text-gray-900 mb-6 capitalize flex items-center gap-3">
                              <span className="w-8 h-1 bg-blue-500 rounded-full" />
                              {key}
                            </h3>

                            {image && (
                              <div className="mb-6 rounded-2xl overflow-hidden h-48 shadow-md">
                                <img
                                  src={image}
                                  alt={key}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            )}

                            <ul className="space-y-4">
                              {items.map((item, j) => (
                                <li key={j} className="flex items-start text-gray-600 group">
                                  <ChevronRight className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                                  <span className="group-hover:text-gray-900 transition-colors">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Guide CTA */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-[128px] opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/20 shadow-2xl">
              <Book className="w-10 h-10 text-blue-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Get Your Complete Travel Guide
            </h2>
            <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
              Download our comprehensive PDF guide with offline maps, emergency contacts,
              and detailed information about the Andaman Islands.
            </p>
            <button className="inline-flex items-center px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/30 group">
              <span>Download PDF Guide</span>
              <ArrowRight className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TravelGuide;
