import { motion } from 'framer-motion';
import ExperienceLayout from '../../components/ExperienceLayout';
import { Link } from 'react-router-dom';
import { Sun, Clock, Users, MapPin, CheckCircle, Star, Calendar, Shield, Camera, Fish, Trees } from 'lucide-react';
import FaqAccordion from '../../components/FaqAccordion';

const FamilyAdventuresPage = () => {
  const activities = [
    {
      name: "Luxury Andaman Team",
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
      image: "/favicon.png",
      bestFor: "Families with young children",
      location: "North Bay Island",
      highlights: ["No swimming required", "Educational", "Safe for all ages", "Marine life viewing"],
      ageGroup: "All ages"
    },
    {
      name: "Luxury Andaman Team",
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
      image: "/favicon.png",
      bestFor: "Nature-loving families",
      location: "Mount Harriet",
      highlights: ["Wildlife spotting", "Educational", "Easy trails", "Packed lunch"],
      ageGroup: "5+ years"
    },
    {
      name: "Luxury Andaman Team",
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
      image: "/favicon.png",
      bestFor: "Active families",
      location: "Radhanagar Beach",
      highlights: ["Beach games", "Snorkeling", "Sandcastle contest", "Picnic lunch"],
      ageGroup: "All ages"
    },
    {
      name: "Luxury Andaman Team",
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
      image: "/favicon.png",
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
      image: "/favicon.png"
    },
    {
      age: "Kids (5-12 years)",
      activities: ["Snorkeling", "Jungle trek", "Beach games", "Island hopping"],
      image: "/favicon.png"
    },
    {
      age: "Teens (13+ years)",
      activities: ["Kayaking", "Sea walking", "Game fishing", "Adventure sports"],
      image: "/favicon.png"
    }
  ];

  const testimonials = [
    {
      name: "Luxury Andaman Team",
      rating: 5,
      comment: "Our family adventure was incredible! The kids loved the glass-bottom boat tour, and the beach day was perfect for all ages. The guides were patient and engaging with the children.",
      location: "Delhi"
    },
    {
      name: "Luxury Andaman Team",
      rating: 5,
      comment: "As a family with different age children, we appreciated how the activities were tailored to each age group. The jungle safari was educational and fun for everyone.",
      location: "London"
    },
    {
      name: "Luxury Andaman Team",
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
    <ExperienceLayout
      title="Family Adventures"
      subtitle="Fun for Everyone"
      description="Create unforgettable memories with fun-filled activities and adventures designed for the whole family. Safe, educational, and exciting experiences for all ages."
      image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      stats={{
        duration: "Half Day - Full Day",
        location: "Port Blair & Islands",
        price: "From ₹8,000/family"
      }}
      slug="family-adventures"
      seo={{
        title: "Family Adventures in Andaman | Kid-Friendly Activities 2026",
        description: "Plan the perfect family vacation in Andaman. Glass-bottom boat rides, jungle treks, and beach fun for kids. Safe, educational, and exciting adventures for all ages.",
        keywords: "family activities andaman, things to do with kids andaman, family vacation packages andaman, glass bottom boat andaman, kid friendly beaches andaman, family adventure tours"
      }}
      bookingData={{
        packageName: 'Family Adventures',
        source: 'experience',
        slug: 'family-adventures'
      }}
      faqData={faqs}
    >
      {/* Family Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {familyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">
              Family Activities
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose an adventure that your family will cherish forever
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-[2rem] overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 border border-gray-700 flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-10" />
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-blue-600 text-white shadow-lg">
                      {activity.bestFor}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:w-3/5 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 font-display">{activity.name}</h3>
                      <div className="flex items-center text-blue-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {activity.duration}
                        <span className="mx-2">•</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        {activity.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-white">{activity.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">{activity.description}</p>
                  
                  <div className="mb-6 flex-grow">
                    <h4 className="font-bold text-white text-sm mb-3">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activity.highlights.map((highlight, i) => (
                        <span key={i} className="text-xs bg-blue-900/50 text-blue-200 px-3 py-1 rounded-lg font-medium border border-blue-500/30">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-white text-sm mb-3">Includes:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activity.includes.slice(0, 4).map((item, i) => (
                        <div key={i} className="flex items-center text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-700">
                    <div className="flex items-center text-blue-300 text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="font-medium">Age: {activity.ageGroup}</span>
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
                        } catch { /* no-op */ }
                      }}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Appropriate Activities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Age-Appropriate Fun
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Perfect activities for every age group in your family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ageAppropriate.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-10" />
                  <img
                    src={group.image}
                    alt={group.age}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                    <h3 className="text-xl font-bold text-white mb-1 font-display">{group.age}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {group.activities.map((activity, i) => (
                      <span key={i} className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-lg font-medium border border-blue-100">
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

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Family Stories
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Hear from families who created unforgettable memories with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-100 relative"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'text-amber-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.comment}"</p>
                <div className="flex items-center border-t border-gray-100 pt-4">
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Good to Know */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Good to Know</h2>
            <p className="text-gray-500">Helpful information for families traveling with kids</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 text-center hover:bg-blue-50 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-blue-500">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Best Season</h3>
              <p className="text-gray-600 text-sm">October to May offers calm seas and great visibility for outdoor fun.</p>
            </div>
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 text-center hover:bg-blue-50 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-blue-500">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">What to Pack</h3>
              <p className="text-gray-600 text-sm">Sun hats, reef-safe sunscreen, quick-dry clothing, water shoes, and snacks.</p>
            </div>
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 text-center hover:bg-blue-50 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-blue-500">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Age Guidance</h3>
              <p className="text-gray-600 text-sm">Most activities are suitable for 5+ with parental supervision; ask us for details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FaqAccordion
            title="Frequently Asked Questions"
            description="Everything you need to know about family adventures in Andaman"
            faqs={faqs}
          />
        </div>
      </section>
    </ExperienceLayout>
  );
};

export default FamilyAdventuresPage;