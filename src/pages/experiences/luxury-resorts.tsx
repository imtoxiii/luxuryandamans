import { motion } from 'framer-motion';
import ExperienceLayout from '../../components/ExperienceLayout';
import { Link } from 'react-router-dom';
import { Star, Wifi, Coffee, Utensils, Car, Space as Spa, Phone, MapPin, CheckCircle, Waves, Sunset, Users, Award, Heart } from 'lucide-react';
import FaqAccordion from '../../components/FaqAccordion';

const LuxuryResortsPage = () => {
  const amenities = [
    { icon: <Wifi className="w-6 h-6" />, name: "High-speed WiFi" },
    { icon: <Coffee className="w-6 h-6" />, name: "24/7 Room Service" },
    { icon: <Utensils className="w-6 h-6" />, name: "Fine Dining" },
    { icon: <Car className="w-6 h-6" />, name: "Airport Transfer" },
    { icon: <Spa className="w-6 h-6" />, name: "Luxury Spa" },
    { icon: <Star className="w-6 h-6" />, name: "Concierge Service" }
  ];

  const resorts = [
    {
      name: "Taj Exotica Resort & Spa",
      location: "Radhanagar Beach, Havelock Island",
      description: "Experience world-class luxury amidst pristine beaches with stunning ocean views",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 5,
      priceRange: "₹35,000 - ₹1,50,000 per night",
      highlights: ["Private beach access", "Infinity pool", "World-class spa", "Fine dining restaurants", "Water sports"],
      roomTypes: ["Villas", "Luxury Suites", "Beach Cottages"],
      bestFor: "Couples, Honeymooners, Luxury travelers"
    },
    {
      name: "Barefoot at Havelock",
      location: "Beach No. 7, Havelock Island",
      description: "Eco-luxury resort offering unique island experiences with sustainable practices",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.5,
      priceRange: "₹25,000 - ₹75,000 per night",
      highlights: ["Eco-friendly design", "Beachfront location", "Organic cuisine", "Yoga sessions", "Diving center"],
      roomTypes: ["Nicobari Cottages", "Beach Villas", "Duplex Cottages"],
      bestFor: "Nature lovers, Eco-conscious travelers, Families"
    },
    {
      name: "SilverSand Beach Resort",
      location: "Havelock Island",
      description: "Contemporary luxury resort with modern amenities and pristine beachfront",
      image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.5,
      priceRange: "₹20,000 - ₹60,000 per night",
      highlights: ["Beachfront location", "Swimming pool", "Multi-cuisine restaurant", "Spa services", "Water sports"],
      roomTypes: ["Deluxe Rooms", "Beach Front Cottages", "Suites"],
      bestFor: "Families, Couples, Business travelers"
    },
    {
      name: "Jalakara Resort",
      location: "Havelock Island",
      description: "Boutique luxury resort with personalized service and unique design",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.5,
      priceRange: "₹30,000 - ₹80,000 per night",
      highlights: ["Boutique design", "Personalized service", "Infinity pool", "Rooftop restaurant", "Spa"],
      roomTypes: ["Premium Rooms", "Pool Villas", "Suites"],
      bestFor: "Couples, Design enthusiasts, Luxury travelers"
    },
    {
      name: "Munjoh Ocean Resort",
      location: "Havelock Island",
      description: "Intimate luxury resort with stunning ocean views and exceptional service",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.5,
      priceRange: "₹25,000 - ₹70,000 per night",
      highlights: ["Ocean views", "Intimate setting", "Fine dining", "Spa services", "Beach access"],
      roomTypes: ["Deluxe Rooms", "Ocean View Rooms", "Suites"],
      bestFor: "Couples, Honeymooners, Small groups"
    },
    {
      name: "SeaShell Port Blair",
      location: "Port Blair",
      description: "Luxury resort in the capital with modern amenities and easy access to attractions",
      image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      rating: 4.5,
      priceRange: "₹15,000 - ₹45,000 per night",
      highlights: ["City location", "Swimming pool", "Multi-cuisine restaurant", "Spa", "Easy access to attractions"],
      roomTypes: ["Deluxe Rooms", "Premium Rooms", "Suites"],
      bestFor: "Business travelers, Families, City explorers"
    }
  ];

  const experiences = [
    {
      icon: <Sunset className="w-6 h-6" />,
      title: "Private Sunset Dinners",
      description: "Romantic beachfront dining experiences with personalized menus"
    },
    {
      icon: <Spa className="w-6 h-6" />,
      title: "Luxury Spa Treatments",
      description: "Rejuvenating therapies using traditional and modern techniques"
    },
    {
      icon: <Waves className="w-6 h-6" />,
      title: "Water Sports",
      description: "Exclusive access to premium water sports and activities"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Romantic Experiences",
      description: "Special arrangements for couples and honeymooners"
    }
  ];

  const packages = [
    {
      name: "Honeymoon Bliss",
      duration: "5 Nights / 6 Days",
      price: "Starting from ₹1,50,000",
      includes: ["Luxury accommodation", "Private transfers", "Candlelight dinners", "Spa sessions", "Sightseeing"],
      bestFor: "Newly married couples"
    },
    {
      name: "Family Luxury",
      duration: "4 Nights / 5 Days",
      price: "Starting from ₹1,20,000",
      includes: ["Family suites", "All meals", "Kids activities", "Water sports", "Guided tours"],
      bestFor: "Families with children"
    },
    {
      name: "Wellness Retreat",
      duration: "6 Nights / 7 Days",
      price: "Starting from ₹1,80,000",
      includes: ["Premium accommodation", "Daily spa treatments", "Yoga sessions", "Healthy cuisine", "Meditation"],
      bestFor: "Wellness enthusiasts"
    }
  ];

  const faqs = [
    {
      question: "What is the best time to visit?",
      answer: "October to May offers the best weather for beach and water activities. December to February is peak season with pleasant temperatures."
    },
    {
      question: "Do resorts offer private beach access?",
      answer: "Many properties are beachfront with semi-private access; true private beaches are restricted in India. However, luxury resorts offer exclusive beach areas and premium services."
    },
    {
      question: "Can you arrange special celebrations?",
      answer: "Yes—romantic dinners, proposals, anniversaries, and more with bespoke setups. Our team specializes in creating memorable experiences for special occasions."
    },
    {
      question: "Are all-inclusive packages available?",
      answer: "Yes, we offer all-inclusive packages that cover accommodation, meals, transfers, and selected activities. These can be customized based on your preferences."
    },
    {
      question: "Is advance booking required?",
      answer: "Yes, luxury resorts in Andaman have limited availability and are in high demand, especially during peak season. We recommend booking 3-6 months in advance."
    },
    {
      question: "Are children welcome at luxury resorts?",
      answer: "Most luxury resorts welcome children and offer family-friendly amenities. However, some resorts may have age restrictions or specific policies for children."
    }
  ];

  return (
    <ExperienceLayout
      title="Luxury Beach Resorts"
      subtitle="Indulge in Paradise"
      description="Experience world-class hospitality in paradise with our carefully curated selection of luxury beach resorts. From private villas to eco-luxury retreats, find your perfect sanctuary."
      image="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      stats={{
        duration: "Flexible Stay",
        location: "Havelock & Port Blair",
        price: "From ₹15,000/night"
      }}
      slug="luxury-resorts"
      seo={{
        title: "Luxury Resorts in Andaman | 5-Star Beach Resorts & Villas",
        description: "Book the finest luxury resorts in Andaman. Taj Exotica, Barefoot, and more. Private beaches, infinity pools, and world-class hospitality. Plan your luxury escape.",
        keywords: "luxury resorts andaman, 5 star hotels andaman, taj exotica havelock, barefoot resort havelock, private pool villa andaman, luxury honeymoon andaman, best resorts in havelock"
      }}
      bookingData={{
        packageName: 'Luxury Beach Resorts',
        source: 'experience',
        slug: 'luxury-resorts'
      }}
      faqData={faqs}
    >
      {/* Amenities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 text-amber-600">
                  {amenity.icon}
                </div>
                <p className="text-gray-900 font-medium text-sm">{amenity.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resorts */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">
              Featured Luxury Resorts
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose from our handpicked selection of the finest resorts in the Andamans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resorts.map((resort, index) => (
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
                    src={resort.image}
                    alt={resort.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 text-white px-4 py-1.5 rounded-full text-sm font-bold z-20">
                    {resort.priceRange}
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-amber-600 text-white shadow-lg">
                      {resort.bestFor}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 font-display">{resort.name}</h3>
                  <div className="flex items-center mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(resort.rating)
                          ? 'fill-current'
                          : 'text-gray-600'
                          }`}
                      />
                    ))}
                    <span className="ml-2 text-gray-400 text-sm">({resort.rating})</span>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-amber-500" />
                    {resort.location}
                  </p>
                  <p className="text-gray-300 mb-6 text-sm line-clamp-2">{resort.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-white text-sm mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {resort.highlights.slice(0, 3).map((highlight, i) => (
                        <span key={i} className="text-xs bg-amber-900/50 text-amber-200 px-3 py-1 rounded-lg font-medium border border-amber-500/30">
                          {highlight}
                        </span>
                      ))}
                      {resort.highlights.length > 3 && (
                        <span className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-lg font-medium">
                          +{resort.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    to="/enquiry"
                    onClick={() => {
                      try {
                        localStorage.setItem('enquiryDetails', JSON.stringify({
                          packageName: 'Luxury Beach Resorts',
                          source: 'experience',
                          slug: 'luxury-resorts',
                          selectedActivities: [resort.name]
                        }));
                      } catch (_) { /* no-op */ }
                    }}
                    className="block w-full py-3 bg-amber-600 text-white text-center rounded-xl font-bold hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/20 hover:shadow-amber-600/40"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Experiences */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Exclusive Luxury Experiences
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Indulge in these curated experiences designed for our luxury guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                  {exp.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{exp.title}</h3>
                <p className="text-gray-600 text-center text-sm">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Curated Luxury Packages
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              All-inclusive luxury packages designed for the ultimate Andaman experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col"
              >
                <div className="bg-gray-900 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                  <h3 className="text-2xl font-bold mb-2 font-display relative z-10">{pkg.name}</h3>
                  <p className="text-amber-400 text-sm font-medium relative z-10">{pkg.duration}</p>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-amber-600">{pkg.price}</span>
                  </div>
                  <div className="mb-6 flex-grow">
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
                    <Link
                      to="/enquiry"
                      onClick={() => {
                        try {
                          localStorage.setItem('enquiryDetails', JSON.stringify({
                            packageName: 'Luxury Beach Resorts',
                            source: 'experience',
                            slug: 'luxury-resorts',
                            selectedActivities: [pkg.name]
                          }));
                        } catch (_) { /* no-op */ }
                      }}
                      className="block w-full py-3 bg-gray-900 text-white text-center rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-gray-900/20 hover:shadow-amber-600/30"
                    >
                      Book Package
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Why Book With Us</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Exclusive benefits and on-ground support for a seamless luxury stay</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-amber-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-amber-600">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Rate Assurance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We work directly with partner resorts to secure the most competitive rates and inclusions.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-amber-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-amber-600">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Concierge</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Airport assistance, private transfers, priority check-ins, and curated experiences.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-amber-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-amber-600">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our Andaman team supports you 24/7 throughout your stay.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FaqAccordion
            title="Frequently Asked Questions"
            description="Answers to common questions about luxury stays in Andaman"
            faqs={faqs}
          />
        </div>
      </section>
    </ExperienceLayout>
  );
};

export default LuxuryResortsPage;