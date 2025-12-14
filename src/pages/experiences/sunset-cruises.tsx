import { motion } from 'framer-motion';
import ExperienceLayout from '../../components/ExperienceLayout';
import { Link } from 'react-router-dom';
import { Sunset, Ship, Wine, Camera, Clock, Users, MapPin, Music, Utensils, CheckCircle, Heart, Star, Calendar, Shield } from 'lucide-react';
import FaqAccordion from '../../components/FaqAccordion';

const SunsetCruisesPage = () => {
  const cruises = [
    {
      name: "Luxury Andaman Team",
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
      image: "/favicon.png",
      bestFor: "Couples, Special occasions",
      departure: "Port Blair",
      highlights: ["Gourmet dining", "Live entertainment", "Sunset views", "Professional photography"]
    },
    {
      name: "Luxury Andaman Team",
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
      image: "/favicon.png",
      bestFor: "Honeymooners, Anniversaries, Proposals",
      departure: "Port Blair",
      highlights: ["Complete privacy", "Customized route", "Premium service", "Champagne celebration"]
    },
    {
      name: "Luxury Andaman Team",
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
      image: "/favicon.png",
      bestFor: "Groups, Families, Young travelers",
      departure: "Havelock Island",
      highlights: ["Swimming opportunity", "Group activities", "Music", "Affordable fun"]
    },
    {
      name: "Luxury Andaman Team",
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
      image: "/favicon.png",
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
      name: "Luxury Andaman Team",
      rating: 5,
      comment: "The sunset dinner cruise was the highlight of our honeymoon. The food was exceptional and the views were breathtaking!",
      location: "Mumbai"
    },
    {
      name: "Luxury Andaman Team",
      rating: 5,
      comment: "The private yacht experience was worth every penny. Our guide was knowledgeable and the crew was attentive to every detail.",
      location: "Singapore"
    },
    {
      name: "Luxury Andaman Team",
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
    <ExperienceLayout
      title="Sunset Cruises"
      subtitle="Sail into the Sunset"
      description="Unforgettable evenings on the Andaman Sea with stunning sunset views. Choose from luxury dinner cruises, private yachts, or fun catamaran rides."
      image="https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      stats={{
        duration: "2-4 Hours",
        location: "Port Blair & Havelock",
        price: "From ₹4,500"
      }}
      slug="sunset-cruises"
      seo={{
        title: "Sunset Cruises in Andaman | Romantic Dinner & Private Yacht 2025",
        description: "Enjoy romantic sunset cruises in Andaman Islands. Luxury dinner cruises, private yachts, catamaran rides. Starting ₹4,500 per person. Book online.",
        keywords: "sunset cruise andaman, andaman sunset cruise, dinner cruise port blair, private yacht andaman, catamaran cruise havelock, romantic cruise andaman, evening cruise andaman, sailing cruise andaman, sunset point andaman, andaman sea cruise"
      }}
      bookingData={{
        packageName: 'Sunset Cruises',
        source: 'experience',
        slug: 'sunset-cruises'
      }}
      faqData={[
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
                <Sunset className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Perfect Timing</h3>
              <p className="text-gray-600 text-sm">Optimal sunset viewing</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-amber-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                <Ship className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Luxury Vessels</h3>
              <p className="text-gray-600 text-sm">Modern, comfortable boats</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-amber-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                <Wine className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fine Dining</h3>
              <p className="text-gray-600 text-sm">Gourmet cuisine at sea</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-amber-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                <Camera className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Photo Moments</h3>
              <p className="text-gray-600 text-sm">Perfect sunset shots</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cruise Options */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">
              Sunset Cruise Options
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose your perfect sunset experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cruises.map((cruise, index) => (
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
                    src={cruise.image}
                    alt={cruise.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 text-white px-4 py-1.5 rounded-full text-sm font-bold z-20">
                    {cruise.price}
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-amber-600 text-white shadow-lg">
                      {cruise.bestFor}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 font-display">{cruise.name}</h3>
                  <div className="flex items-center space-x-4 mb-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-amber-400" />
                      {cruise.duration}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-amber-400" />
                      {cruise.departure}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm">{cruise.description}</p>
                  <div className="mb-4">
                    <h4 className="font-bold text-white text-sm mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cruise.highlights.slice(0, 3).map((highlight, i) => (
                        <span key={i} className="text-xs bg-amber-900/50 text-amber-200 px-3 py-1 rounded-lg font-medium border border-amber-500/30">
                          {highlight}
                        </span>
                      ))}
                      {cruise.highlights.length > 3 && (
                        <span className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-lg font-medium">
                          +{cruise.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-white text-sm mb-2">Includes:</h4>
                    <div className="space-y-2">
                      {cruise.includes.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                      {cruise.includes.length > 3 && (
                        <div className="text-xs text-amber-400 font-medium pl-6">+{cruise.includes.length - 3} more</div>
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

      {/* Experiences Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Premium Cruise Experiences
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Enjoy these special experiences during your sunset cruise
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Guest Experiences
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              See what our guests have to say about their sunset cruise experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-amber-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
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

      {/* Know Before You Go */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Know Before You Go</h2>
            <p className="text-gray-500">Plan for a smooth evening on the sea</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <Ship className="w-6 h-6 text-amber-600" />
                </div>
                <span className="font-bold text-xl text-gray-900">Booking & Boarding</span>
              </div>
              <ul className="space-y-4">
                {knowBeforeYouGo.slice(0, 4).map((tip, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <Sunset className="w-6 h-6 text-amber-600" />
                </div>
                <span className="font-bold text-xl text-gray-900">During the Cruise</span>
              </div>
              <ul className="space-y-4">
                {knowBeforeYouGo.slice(4, 8).map((tip, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
        </div>
      </section>
    </ExperienceLayout>
  );
};

export default SunsetCruisesPage;