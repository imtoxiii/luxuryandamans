import React from 'react';
import { motion } from 'framer-motion';
import { Sunset, Ship, Wine, Camera, Clock, Users, MapPin, Music, Utensils, CheckCircle, Heart, Star } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import FaqAccordion from '../../components/FaqAccordion';

const SunsetCruisesPage = () => {
  const cruises = [
    {
      name: "Luxury Sunset Dinner Cruise",
      duration: "3 hours",
      price: "₹7,500 per person",
      includes: [
        "5-course gourmet dinner",
        "Welcome drinks",
        "Live music",
        "Professional photography",
        "Unlimited beverages"
      ],
      description: "Experience a romantic evening with fine dining and stunning views",
      image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Couples, Special occasions",
      departure: "Port Blair",
      highlights: ["Gourmet dining", "Live entertainment", "Sunset views", "Professional photography"]
    },
    {
      name: "Private Yacht Experience",
      duration: "4 hours",
      price: "₹15,000 per person",
      includes: [
        "Private yacht",
        "Champagne and canapés",
        "Personal butler",
        "Customized route",
        "Personal photographer"
      ],
      description: "Exclusive private yacht cruise for special occasions",
      image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Honeymooners, Anniversaries, Proposals",
      departure: "Port Blair",
      highlights: ["Complete privacy", "Customized route", "Premium service", "Champagne celebration"]
    },
    {
      name: "Catamaran Sunset Cruise",
      duration: "2.5 hours",
      price: "₹4,500 per person",
      includes: [
        "Snacks and beverages",
        "Music system",
        "Swimming opportunity",
        "Sunset viewing",
        "Group activities"
      ],
      description: "Fun-filled catamaran cruise with swimming and sunset viewing",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Groups, Families, Young travelers",
      departure: "Havelock Island",
      highlights: ["Swimming opportunity", "Group activities", "Music", "Affordable fun"]
    },
    {
      name: "Traditional Sailing Experience",
      duration: "3 hours",
      price: "₹5,500 per person",
      includes: [
        "Traditional sailboat",
        "Local snacks and drinks",
        "Cultural performance",
        "Storytelling session",
        "Sunset viewing"
      ],
      description: "Experience Andaman's maritime culture on a traditional sailing boat",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Culture enthusiasts, Families",
      departure: "Neil Island",
      highlights: ["Cultural experience", "Traditional sailing", "Local cuisine", "Storytelling"]
    }
  ];

  const experiences = [
    {
      icon: <Music className="w-6 h-6" />,
      title: "Live Entertainment",
      description: "Enjoy live music and cultural performances during your cruise"
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Gourmet Dining",
      description: "Savor multi-course meals prepared by expert chefs"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photography Service",
      description: "Professional photographers capture your perfect moments"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Romantic Setup",
      description: "Special arrangements for couples and honeymooners"
    }
  ];

  const testimonials = [
    {
      name: "Priya & Raj",
      rating: 5,
      comment: "The sunset dinner cruise was the highlight of our honeymoon. The food was exceptional and the views were breathtaking!",
      location: "Mumbai"
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "The private yacht experience was worth every penny. Our guide was knowledgeable and the crew was attentive to every detail.",
      location: "Singapore"
    },
    {
      name: "The Sharma Family",
      rating: 5,
      comment: "Our kids loved the catamaran cruise. Swimming in the ocean during sunset was an unforgettable experience for all of us.",
      location: "Delhi"
    }
  ];

  const knowBeforeYouGo = [
    "Light jacket recommended; evenings can be breezy",
    "Boarding closes 15 minutes before departure",
    "Alcohol served to guests 21+ only; carry valid ID",
    "Weather may affect sailing times for safety",
    "Inform about dietary restrictions at booking",
    "Carry motion sickness medication if needed",
    "Cameras are allowed but bring waterproof protection",
    "Follow safety instructions from the crew at all times"
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO
        title="Sunset Cruises in Andaman | Romantic Evening Cruises | Book Now"
        description="Enjoy romantic sunset cruises in Andaman Islands. Luxury dinner cruises, private yachts, catamaran rides. Starting ₹4,500 per person. Book online."
        keywords="sunset cruise andaman, andaman sunset cruise, dinner cruise port blair, private yacht andaman, catamaran cruise havelock, romantic cruise andaman, evening cruise andaman, sailing cruise andaman, sunset point andaman, andaman sea cruise"
        targetAudience="all"
        pathname="/experiences/sunset-cruises"
        image="https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Sunset Cruises"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/60 to-night/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-pearl mb-6">
                Sunset Cruises
              </h1>
              <p className="text-xl text-pearl/90 mb-8">
                Unforgettable evenings on the Andaman Sea with stunning sunset views
              </p>
              <Link
                to="/enquiry"
                onClick={() => {
                  try {
                    localStorage.setItem('enquiryDetails', JSON.stringify({
                      packageName: 'Sunset Cruises',
                      source: 'experience',
                      slug: 'sunset-cruises'
                    }));
                  } catch (_) { /* no-op */ }
                }}
                className="inline-flex items-center px-8 py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Book Your Cruise
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sunset className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Perfect Timing</h3>
              <p className="text-night/70">Optimal sunset viewing</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ship className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Luxury Vessels</h3>
              <p className="text-night/70">Modern, comfortable boats</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wine className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Fine Dining</h3>
              <p className="text-night/70">Gourmet cuisine at sea</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-azure" />
              </div>
              <h3 className="text-lg font-semibold text-night mb-2">Photo Moments</h3>
              <p className="text-night/70">Perfect sunset shots</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cruise Options */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">
              Sunset Cruise Options
            </h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Choose your perfect sunset experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cruises.map((cruise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-night/20 group-hover:bg-night/40 transition-all duration-500 z-10" />
                  <img
                    src={cruise.image}
                    alt={cruise.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2 z-20">
                    {cruise.price}
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-azure/90 text-pearl">
                      {cruise.bestFor}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-night mb-2">{cruise.name}</h3>
                  <div className="flex items-center space-x-4 mb-4 text-night/60">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {cruise.duration}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {cruise.departure}
                    </span>
                  </div>
                  <p className="text-night/70 mb-4">{cruise.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cruise.highlights.slice(0, 3).map((highlight, i) => (
                        <span key={i} className="text-xs bg-azure/10 text-azure px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                      {cruise.highlights.length > 3 && (
                        <span className="text-xs bg-night/10 text-night/60 px-2 py-1 rounded">
                          +{cruise.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Includes:</h4>
                    <div className="space-y-1">
                      {cruise.includes.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center text-night/60">
                          <CheckCircle className="w-3 h-3 mr-2 text-azure" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                      {cruise.includes.length > 3 && (
                        <div className="text-xs text-azure">+{cruise.includes.length - 3} more</div>
                      )}
                    </div>
                  </div>
                  <Link
                    to="/enquiry"
                    onClick={() => {
                      try {
                        localStorage.setItem('enquiryDetails', JSON.stringify({
                          packageName: 'Sunset Cruises',
                          source: 'experience',
                          slug: 'sunset-cruises',
                          selectedActivities: [cruise.name]
                        }));
                      } catch (_) { /* no-op */ }
                    }}
                    className="inline-flex items-center px-4 py-2 bg-azure text-pearl rounded-lg hover:bg-opacity-90 transition-all w-full justify-center"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">
              Premium Cruise Experiences
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Enjoy these special experiences during your sunset cruise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4 text-azure">
                  {exp.icon}
                </div>
                <h3 className="text-xl font-bold text-night mb-2">{exp.title}</h3>
                <p className="text-night/70">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-azure/5 to-blue-600/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">
              Guest Experiences
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              See what our guests have to say about their sunset cruise experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-sunset fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-night/70 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-night">{testimonial.name}</h4>
                    <p className="text-night/60 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Know Before You Go */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-night mb-2">Know Before You Go</h2>
            <p className="text-night/70">Plan for a smooth evening on the sea</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center mb-4">
                <Ship className="w-5 h-5 mr-2 text-azure" />
                <span className="font-semibold text-night">Booking & Boarding</span>
              </div>
              <ul className="space-y-3 text-night/80">
                {knowBeforeYouGo.slice(0, 4).map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-azure flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center mb-4">
                <Sunset className="w-5 h-5 mr-2 text-azure" />
                <span className="font-semibold text-night">During the Cruise</span>
              </div>
              <ul className="space-y-3 text-night/80">
                {knowBeforeYouGo.slice(4, 8).map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-azure flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="Frequently Asked Questions"
        description="Everything you need to know about sunset cruises in Andaman"
        faqs={[
          {
            question: "What is the best time for sunset cruises?",
            answer: "The best time is October to May when the weather is pleasant and the sea is calm. Cruises typically depart 1-2 hours before sunset to ensure you get the best views."
          },
          {
            question: "Are sunset cruises suitable for children?",
            answer: "Yes, sunset cruises are family-friendly. We recommend the catamaran cruise for families as it offers swimming opportunities and group activities that children enjoy."
          },
          {
            question: "What should we wear for the cruise?",
            answer: "Light, comfortable clothing is recommended. Bring a light jacket as it can get breezy on the water. For swimming opportunities, bring swimwear and a towel."
          },
          {
            question: "Are vegetarian and vegan meal options available?",
            answer: "Yes, we offer vegetarian, vegan, and other dietary options. Please inform us about your dietary restrictions at the time of booking."
          },
          {
            question: "What happens if the weather is bad?",
            answer: "In case of bad weather, the cruise may be rescheduled or canceled for safety reasons. You will be notified in advance and offered a full refund or an alternative date."
          },
          {
            question: "Is alcohol included in the cruise packages?",
            answer: "Most packages include welcome drinks and some beverages. Premium packages may include unlimited beverages. Alcohol is served only to guests 21+ with valid ID."
          }
        ]}
      />

      <Footer />
    </div>
  );
};

export default SunsetCruisesPage;