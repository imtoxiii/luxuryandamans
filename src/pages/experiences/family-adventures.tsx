import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Sun, Zap, Mountain, Clock, Users, MapPin, CheckCircle, Star, Calendar, Shield, Camera, Fish, Trees } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import FaqAccordion from '../../components/FaqAccordion';

const FamilyAdventuresPage = () => {
  // Local image paths - Add your images to src/assets/images/experiences/family-adventures/
  const localImages = {
    // heroImage: '/src/assets/images/experiences/family-adventures/hero.jpg',
    // glassBottomBoat: '/src/assets/images/experiences/family-adventures/glass-bottom-boat.jpg',
    // jungleSafari: '/src/assets/images/experiences/family-adventures/jungle-safari.jpg',
    // Replace these with your local image paths
  };

  const activities = [
    {
      name: "Glass-Bottom Boat Tour",
      duration: "2 hours",
      price: "₹8,000 for 4",
      includes: [
        "Coral reef viewing",
        "Fish feeding",
        "Safety gear for all ages",
        "On-board guide",
        "Educational commentary"
      ],
      description: "Explore the underwater world without getting wet.",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Families with young children",
      location: "North Bay Island",
      highlights: ["No swimming required", "Educational", "Safe for all ages", "Marine life viewing"],
      ageGroup: "All ages"
    },
    {
      name: "Jungle Safari & Trekking",
      duration: "4 hours",
      price: "₹12,000 for 4",
      includes: [
        "Guided jungle trek",
        "Bird watching",
        "Packed lunch & refreshments",
        "Safe for kids",
        "Nature education"
      ],
      description: "Discover the lush green forests of the Andamans.",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Nature-loving families",
      location: "Mount Harriet",
      highlights: ["Wildlife spotting", "Educational", "Easy trails", "Packed lunch"],
      ageGroup: "5+ years"
    },
    {
      name: "Beach Adventure Day",
      duration: "6 hours",
      price: "₹15,000 for 4",
      includes: [
        "Beach games and activities",
        "Sandcastle building contest",
        "Picnic lunch",
        "Snorkeling equipment",
        "Beach sports equipment"
      ],
      description: "A full day of fun and games on pristine beaches.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Active families",
      location: "Radhanagar Beach",
      highlights: ["Beach games", "Snorkeling", "Sandcastle contest", "Picnic lunch"],
      ageGroup: "All ages"
    },
    {
      name: "Island Discovery Tour",
      duration: "8 hours",
      price: "₹20,000 for 4",
      includes: [
        "Speedboat transfers",
        "Island hopping",
        "Lunch at beachside restaurant",
        "Photography service",
        "Educational guide"
      ],
      description: "Explore multiple islands in one exciting day.",
      image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Adventurous families",
      location: "Havelock & Neil Islands",
      highlights: ["Multiple islands", "Speedboat rides", "Beachside lunch", "Photography"],
      ageGroup: "3+ years"
    }
  ];

  const familyBenefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      description: "All activities designed with family safety as top priority"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Memory Making",
      description: "Create unforgettable family moments in paradise"
    },
    {
      icon: <Fish className="w-6 h-6" />,
      title: "Educational Fun",
      description: "Learn about marine life and nature while having fun"
    },
    {
      icon: <Trees className="w-6 h-6" />,
      title: "Nature Connection",
      description: "Disconnect from screens and reconnect with nature"
    }
  ];

  const ageAppropriate = [
    {
      age: "Toddlers (2-4 years)",
      activities: ["Beach play", "Glass-bottom boat tour", "Nature walks"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      age: "Kids (5-12 years)",
      activities: ["Snorkeling", "Jungle trek", "Beach games", "Island hopping"],
      image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      age: "Teens (13+ years)",
      activities: ["Kayaking", "Sea walking", "Game fishing", "Adventure sports"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const testimonials = [
    {
      name: "The Sharma Family",
      rating: 5,
      comment: "Our family adventure was incredible! The kids loved the glass-bottom boat tour, and the beach day was perfect for all ages. The guides were patient and engaging with the children.",
      location: "Delhi"
    },
    {
      name: "Emily & Tom with Kids",
      rating: 5,
      comment: "As a family with different age children, we appreciated how the activities were tailored to each age group. The jungle safari was educational and fun for everyone.",
      location: "London"
    },
    {
      name: "The Patels",
      rating: 5,
      comment: "The island discovery tour was the highlight of our trip! The kids loved the speedboat rides, and the beachside lunch was delicious. Highly recommend for families.",
      location: "Ahmedabad"
    }
  ];

  const faqs = [
    {
      question: "Are the activities safe for young children?",
      answer: "Yes, all our family activities are designed with safety as the top priority. We provide appropriate safety gear, and our guides are trained to work with children of all ages."
    },
    {
      question: "Can we customize activities for our family's interests?",
      answer: "Absolutely! We can create customized itineraries based on your family's interests and the ages of your children. Just let us know your preferences when booking."
    },
    {
      question: "What should we pack for family activities?",
      answer: "We recommend packing sun hats, reef-safe sunscreen, quick-dry clothing, water shoes, swimwear, towels, and any personal medications. For young children, bring extra snacks and entertainment for travel time."
    },
    {
      question: "Are meals provided during the activities?",
      answer: "Full-day activities include lunch, and half-day activities include light refreshments. We can accommodate dietary restrictions with advance notice. Please inform us of any allergies or special requirements."
    },
    {
      question: "What if the weather is bad on the day of our activity?",
      answer: "Activities are weather-dependent for safety. In case of bad weather, we offer rescheduling options or alternative indoor activities. We monitor conditions closely and make decisions in your family's best interest."
    },
    {
      question: "Can grandparents participate in the activities?",
      answer: "Yes, many of our activities are suitable for all generations. We can recommend the most appropriate activities based on mobility and fitness levels. Please let us know about any physical limitations when booking."
    },
    {
      question: "Are there any medical restrictions for the activities?",
      answer: "Some activities may have medical restrictions, particularly water-based activities. Please inform us of any medical conditions, mobility issues, or special needs when booking so we can recommend suitable activities."
    },
    {
      question: "Do you provide life jackets for children?",
      answer: "Yes, we provide appropriately sized life jackets for all ages, including infants and toddlers. All water activities require life jackets to be worn at all times."
    },
    {
      question: "How far in advance should we book family activities?",
      answer: "We recommend booking at least 2-3 weeks in advance, especially during peak season (November to February). This ensures availability and allows us to prepare for any special requirements your family may have."
    },
    {
      question: "Can we combine multiple activities in one day?",
      answer: "Yes, we can create combined itineraries with multiple activities in one day. We'll ensure there's enough time between activities and that the schedule is appropriate for your family's energy levels and interests."
    }
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO
        title="Family Adventures in Andaman | Kid-Friendly Activities | Book Now"
        description="Plan the perfect family vacation in Andaman with kid-friendly activities. Glass-bottom boat tours, jungle safaris, beach games and more. Safe, educational fun for all ages."
        keywords="family activities andaman, kids activities andaman, family vacation andaman, child-friendly andaman, family adventure andaman"
        targetAudience="family"
        pathname="/experiences/family-adventures"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* LOCAL IMAGE PLACEHOLDER - Replace with your image */}
        {/* <img 
          src={localImages.heroImage}
          alt="Family Adventures"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
        
        {/* FALLBACK ONLINE IMAGE - Remove when adding local image */}
        <img 
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Family Adventures"
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
                Family Adventures
              </h1>
              <p className="text-xl text-pearl/90 mb-8">
                Fun-filled activities and adventures for the whole family.
              </p>
              <Link
                to="/enquiry"
                onClick={() => {
                  try {
                    localStorage.setItem('enquiryDetails', JSON.stringify({
                      packageName: 'Family Adventures',
                      source: 'experience',
                      slug: 'family-adventures'
                    }));
                  } catch (_) { /* no-op */ }
                }}
                className="inline-flex items-center px-8 py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Book Your Adventure
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Family Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">Family Adventure Benefits</h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Discover why our family adventures create lasting memories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {familyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4 text-azure">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-night mb-2">{benefit.title}</h3>
                <p className="text-night/70 text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Appropriate Activities */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">Age-Appropriate Activities</h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Perfect activities for every age group in your family
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ageAppropriate.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-night/20 group-hover:bg-night/40 transition-all duration-500 z-10" />
                  <img
                    src={group.image}
                    alt={group.age}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-night mb-2">{group.age}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.activities.map((activity, i) => (
                      <span key={i} className="text-xs bg-azure/10 text-azure px-2 py-1 rounded">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">
              Family Activities
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Choose an adventure that your family will cherish forever.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
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
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2 z-20">
                    {activity.price}
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-azure/90 text-pearl">
                      {activity.bestFor}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-night mb-2">{activity.name}</h3>
                  <div className="flex items-center space-x-4 mb-4 text-night/60">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {activity.duration}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {activity.location}
                    </span>
                  </div>
                  <p className="text-night/70 mb-4">{activity.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {activity.highlights.map((highlight, i) => (
                        <span key={i} className="text-xs bg-azure/10 text-azure px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Includes:</h4>
                    <div className="space-y-1">
                      {activity.includes.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center text-night/60">
                          <CheckCircle className="w-3 h-3 mr-2 text-azure" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                      {activity.includes.length > 3 && (
                        <div className="text-xs text-azure">+{activity.includes.length - 3} more</div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-night">Age Group:</h4>
                    <span className="text-sm text-azure">{activity.ageGroup}</span>
                  </div>
                  <Link
                    to="/enquiry"
                    onClick={() => {
                      try {
                        localStorage.setItem('enquiryDetails', JSON.stringify({
                          packageName: 'Family Adventures',
                          source: 'experience',
                          slug: 'family-adventures',
                          selectedActivities: [activity.name]
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

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-azure/5 to-blue-600/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">
              Family Stories
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Hear from families who created unforgettable memories with us
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

      {/* Good to Know */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-pearl mb-2">Good to Know</h2>
            <p className="text-pearl/70">Helpful information for families traveling with kids</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 mr-2 text-azure" />
                <h3 className="text-lg font-semibold text-night">Best Season</h3>
              </div>
              <p className="text-night/70">October to May offers calm seas and great visibility for outdoor fun.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center mb-4">
                <Sun className="w-5 h-5 mr-2 text-azure" />
                <h3 className="text-lg font-semibold text-night">What to Pack</h3>
              </div>
              <p className="text-night/70">Sun hats, reef-safe sunscreen, quick-dry clothing, water shoes, and snacks.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center mb-4">
                <Shield className="w-5 h-5 mr-2 text-azure" />
                <h3 className="text-lg font-semibold text-night">Age Guidance</h3>
              </div>
              <p className="text-night/70">Most activities are suitable for 5+ with parental supervision; ask us for details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="Frequently Asked Questions"
        description="Everything you need to know about family adventures in Andaman"
        faqs={faqs}
      />

      <Footer />
    </div>
  );
};

export default FamilyAdventuresPage; 