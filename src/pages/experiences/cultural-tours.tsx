import { motion } from 'framer-motion';
import ExperienceLayout from '../../components/ExperienceLayout';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Camera, Calendar, Globe, Music, Utensils, CheckCircle, Info } from 'lucide-react';
import FaqAccordion from '../../components/FaqAccordion';

const CulturalToursPage = () => {
  const culturalExperiences = [
    {
      name: "Indigenous Tribal Visit",
      description: "Respectful visit to selected tribal areas to learn about ancient traditions",
      duration: "Full day",
      highlights: ["Jarawa tribe (viewing from distance)", "Onge tribe visit", "Traditional lifestyle", "Ancient knowledge"],
      image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      restrictions: "Photography restricted in some areas"
    },
    {
      name: "Cellular Jail Light & Sound Show",
      description: "Historical journey through India's freedom struggle",
      duration: "2 hours",
      highlights: ["Historical significance", "Emotional narrative", "Sound and light effects", "Architectural marvel"],
      image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      restrictions: "Evening show only"
    },
    {
      name: "Anthropological Museum Tour",
      description: "Comprehensive insight into Andaman's tribal heritage",
      duration: "2-3 hours",
      highlights: ["Tribal artifacts", "Photographs", "Cultural exhibits", "Educational experience"],
      image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      restrictions: "Museum timings: 9:00 AM - 1:00 PM, 1:30 PM - 4:30 PM"
    },
    {
      name: "Local Village Experience",
      description: "Immerse in the lifestyle of Andaman's local communities",
      duration: "4-5 hours",
      highlights: ["Traditional homes", "Local crafts", "Agricultural practices", "Community interaction"],
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      restrictions: "Modest dress required"
    }
  ];

  const packages = [
    {
      name: "Heritage Day Tour",
      duration: "Full day",
      price: "₹3,000 per person",
      includes: ["Transportation", "Guide", "Entry fees", "Lunch", "Museum visit"],
      description: "Comprehensive tour of historical sites and museums",
      experiences: ["Cellular Jail", "Anthropological Museum", "Fisheries Museum", "Samudrika Museum"]
    },
    {
      name: "Cultural Immersion Package",
      duration: "2 days",
      price: "₹7,500 per person",
      includes: ["Transportation", "Expert guide", "Entry fees", "All meals", "Cultural show", "Craft workshop"],
      description: "Deep dive into Andaman's cultural heritage",
      experiences: ["Tribal visit", "Village experience", "Cultural performance", "Craft demonstration"]
    },
    {
      name: "Custom Cultural Tour",
      duration: "Flexible",
      price: "On request",
      includes: ["Customized itinerary", "Private guide", "Transportation", "Entry fees"],
      description: "Tailored cultural experience based on your interests",
      experiences: ["Customized to preferences"]
    }
  ];

  const culturalAttractions = [
    "Cellular Jail National Memorial",
    "Anthropological Museum",
    "Samudrika Naval Museum",
    "Fisheries Museum",
    "Chatham Saw Mill",
    "Forest Museum",
    "Zoological Survey of India Museum",
    "Mini Zoo"
  ];

  const culturalPerformances = [
    "Traditional Nicobarese dance",
    "Andamanese folk music",
    "Bengali cultural performances",
    "Tamil cultural events",
    "Tribal craft demonstrations",
    "Traditional cooking demonstrations"
  ];

  const localCuisine = [
    "Seafood preparations",
    "Coconut-based dishes",
    "Tribal food specialties",
    "Bengali influences",
    "Tamil delicacies",
    "Tropical fruits"
  ];

  const etiquette = [
    "Dress modestly, especially when visiting tribal areas",
    "Always ask permission before photographing people",
    "Respect local customs and traditions",
    "Do not touch tribal artifacts without permission",
    "Maintain appropriate distance from tribal communities",
    "Follow your guide's instructions at all times",
    "Avoid giving money or food directly to tribal members",
    "Support local artisans by purchasing authentic crafts"
  ];

  const faqs = [
    {
      question: "Can we take photographs of tribal communities?",
      answer: "Photography is restricted in most tribal areas to protect their privacy and culture. Your guide will inform you where photography is permitted."
    },
    {
      question: "Are the tribal visits ethical?",
      answer: "Yes, we follow strict ethical guidelines with proper permissions. We maintain respectful distance and do not interfere with their lifestyle."
    },
    {
      question: "What is the best time to visit cultural sites?",
      answer: "October to May is ideal for cultural tours. The Cellular Jail light and sound show runs every evening in English and Hindi."
    },
    {
      question: "Are these tours suitable for children?",
      answer: "Yes, most cultural tours are family-friendly. However, tribal visits may not be suitable for very young children due to the walking involved."
    }
  ];
  return (
    <ExperienceLayout
      title="Cultural Heritage Tours"
      subtitle="Discover the Roots"
      description="Immerse yourself in the fascinating culture and history of the Andaman Islands. From ancient tribes to colonial history, explore the rich heritage of this unique archipelago."
      image="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      stats={{
        duration: "Half Day - 2 Days",
        location: "Port Blair & Surroundings",
        price: "From ₹3,000"
      }}
      slug="cultural-tours"
      seo={{
        title: "Cultural Tours in Andaman | Heritage & Tribal Experiences 2025",
        description: "Discover the rich heritage of Andaman Islands. Visit Cellular Jail, Anthropological Museum, and experience local tribal culture. Book guided heritage tours now.",
        keywords: "cultural tours andaman, cellular jail light and sound show, anthropological museum port blair, tribal tours andaman, heritage walk port blair, andaman history tour, jarawa tribe information"
      }}
      bookingData={{
        packageName: 'Cultural Heritage Tours',
        source: 'experience',
        slug: 'cultural-tours'
      }}
      faqData={faqs}
    >
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-amber-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Guides</h3>
              <p className="text-gray-600 text-sm">Knowledgeable cultural historians and anthropologists</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-amber-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                <Camera className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Authentic Experiences</h3>
              <p className="text-gray-600 text-sm">Respectful visits to tribal areas and local communities</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-amber-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                <Music className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cultural Performances</h3>
              <p className="text-gray-600 text-sm">Traditional dances, music and craft demonstrations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-amber-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                <Utensils className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Local Cuisine</h3>
              <p className="text-gray-600 text-sm">Taste authentic Andaman dishes and delicacies</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultural Experiences */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">
              Cultural Experiences
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover these incredible cultural attractions in the Andaman Islands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culturalExperiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-[2rem] overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 border border-gray-700"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-10" />
                  <img
                    src={experience.image}
                    alt={experience.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 text-white px-4 py-1.5 rounded-full text-sm font-bold z-20">
                    {experience.duration}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 font-display">{experience.name}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{experience.description}</p>
                  <div className="mb-6">
                    <h4 className="font-bold text-white text-sm mb-3">Highlights:</h4>
                    <div className="space-y-2">
                      {experience.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center text-gray-400 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-3" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {experience.restrictions && (
                    <div className="flex items-start bg-amber-900/20 border border-amber-500/20 p-4 rounded-xl">
                      <Info className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-amber-200">
                        <span className="font-bold">Note:</span> {experience.restrictions}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Cultural Tour Packages
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Choose the perfect cultural experience for your interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">{pkg.name}</h3>
                <div className="flex items-center space-x-4 mb-6 text-gray-500 text-sm">
                  <span className="flex items-center bg-gray-50 px-3 py-1 rounded-lg">
                    <Clock className="w-4 h-4 mr-2" />
                    {pkg.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{pkg.description}</p>
                
                <div className="mb-8 flex-grow">
                  <h4 className="font-bold text-gray-900 text-sm mb-3">Includes:</h4>
                  <ul className="space-y-3">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-500 text-sm">Starting from</span>
                    <span className="text-2xl font-bold text-amber-600">{pkg.price}</span>
                  </div>
                  <Link
                    to="/enquiry"
                    onClick={() => {
                      try {
                        localStorage.setItem('enquiryDetails', JSON.stringify({
                          packageName: 'Cultural Heritage Tours',
                          source: 'experience',
                          slug: 'cultural-tours',
                          selectedActivities: [pkg.name]
                        }));
                      } catch (_) { /* no-op */ }
                    }}
                    className="block w-full py-3 bg-gray-900 text-white text-center rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-gray-900/20 hover:shadow-amber-600/30"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Attractions & Performances */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Cultural Attractions</h2>
              <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100">
                <div className="grid grid-cols-1 gap-4">
                  {culturalAttractions.map((attraction, index) => (
                    <div key={index} className="flex items-center text-gray-700 p-3 hover:bg-amber-50 rounded-xl transition-colors">
                      <MapPin className="w-5 h-5 mr-4 text-amber-500" />
                      <span className="font-medium">{attraction}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Cultural Performances</h2>
              <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100">
                <div className="grid grid-cols-1 gap-4">
                  {culturalPerformances.map((performance, index) => (
                    <div key={index} className="flex items-center text-gray-700 p-3 hover:bg-amber-50 rounded-xl transition-colors">
                      <Music className="w-5 h-5 mr-4 text-amber-500" />
                      <span className="font-medium">{performance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Local Cuisine & Etiquette */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Local Cuisine</h2>
              <div className="bg-amber-50 rounded-[2rem] p-8 border border-amber-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <Utensils className="w-6 h-6 text-amber-600" />
                  </div>
                  <span className="font-bold text-xl text-gray-900">Taste of Andaman</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {localCuisine.map((dish, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-3" />
                      <span className="text-sm font-medium">{dish}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic bg-white p-4 rounded-xl border border-amber-100">
                  Our tours include opportunities to taste authentic local dishes at carefully selected restaurants.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Cultural Etiquette</h2>
              <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-bold text-xl text-gray-900">Respectful Tourism</span>
                </div>
                <ul className="space-y-4">
                  {etiquette.slice(0, 6).map((tip, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FaqAccordion
            title="Frequently Asked Questions"
            description="Everything you need to know about cultural tours in Andaman"
            faqs={faqs}
          />
        </div>
      </section>
    </ExperienceLayout>
  );
};

export default CulturalToursPage;