import React from 'react';
import { motion } from 'framer-motion';
import { Flower2, Cog as Yoga, Space as Spa, Heart, Clock, Users, MapPin, CheckCircle, Star, Calendar, Utensils, Sun, Moon, Wind } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import FaqAccordion from '../../components/FaqAccordion';

const WellnessRetreatsPage = () => {
  const programs = [
    {
      name: "Yoga & Meditation Retreat",
      duration: "5 days",
      price: "₹45,000 per person",
      includes: [
        "Daily yoga sessions",
        "Guided meditation",
        "Healthy meals",
        "Beachfront accommodation",
        "Workshops and masterclasses"
      ],
      description: "Reconnect with yourself through yoga and meditation",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Spiritual seekers, Beginners",
      location: "Havelock Island",
      highlights: ["Certified instructors", "Beachfront practice", "All levels", "Workshops"],
      sessions: ["Morning yoga", "Meditation", "Breathwork", "Yoga philosophy"]
    },
    {
      name: "Spa & Wellness Package",
      duration: "3 days",
      price: "₹35,000 per person",
      includes: [
        "Daily spa treatments",
        "Wellness consultations",
        "Organic meals",
        "Luxury accommodation",
        "Personalized wellness plan"
      ],
      description: "Indulge in rejuvenating spa treatments and wellness activities",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Stress relief, Couples",
      location: "Neil Island",
      highlights: ["Ayurvedic treatments", "Massages", "Detox programs", "Beauty treatments"],
      sessions: ["Massage therapy", "Ayurveda", "Detox", "Beauty treatments"]
    },
    {
      name: "Digital Detox Retreat",
      duration: "4 days",
      price: "₹40,000 per person",
      includes: [
        "No electronic devices",
        "Nature activities",
        "Mindfulness sessions",
        "Eco-accommodation",
        "Creative workshops"
      ],
      description: "Disconnect to reconnect with yourself and nature",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Digital fatigue, Stress management",
      location: "Long Island",
      highlights: ["Device-free", "Nature immersion", "Mindfulness", "Creative expression"],
      sessions: ["Nature walks", "Mindfulness", "Creative workshops", "Journaling"]
    },
    {
      name: "Ayurvedic Rejuvenation",
      duration: "7 days",
      price: "₹60,000 per person",
      includes: [
        "Ayurvedic consultations",
        "Panchakarma treatments",
        "Specialized diet",
        "Herbal medicines",
        "Yoga and meditation"
      ],
      description: "Ancient healing practices for complete rejuvenation",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Holistic healing, Chronic conditions",
      location: "Port Blair",
      highlights: ["Traditional healing", "Personalized", "Medicinal herbs", "Panchakarma"],
      sessions: ["Ayurvedic consultations", "Panchakarma", "Herbal treatments", "Yoga"]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Stress Reduction",
      description: "Release tension and find inner peace through guided practices"
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Improved Breathing",
      description: "Learn breathing techniques that enhance lung capacity and calm the mind"
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Increased Energy",
      description: "Recharge your body and mind with holistic wellness practices"
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "Better Sleep",
      description: "Develop healthy sleep patterns through relaxation techniques"
    }
  ];

  const accommodations = [
    {
      name: "Beachfront Villas",
      description: "Private villas with direct beach access and ocean views",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      features: ["Ocean view", "Private terrace", "King bed", "Outdoor shower"]
    },
    {
      name: "Garden Cottages",
      description: "Cozy cottages nestled in tropical gardens",
      image: "https://images.unsplash.com/photo-1522071740424-8b337d0dfa46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      features: ["Garden view", "Private balcony", "Queen bed", "Indoor garden"]
    },
    {
      name: "Wellness Suites",
      description: "Spacious suites designed for optimal relaxation",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      features: ["Spa access", "Meditation space", "King bed", "Luxury amenities"]
    }
  ];

  const dailySchedule = [
    {
      time: "6:00 AM",
      activity: "Sunrise Yoga",
      description: "Gentle yoga session to greet the day"
    },
    {
      time: "7:30 AM",
      activity: "Healthy Breakfast",
      description: "Nutritious breakfast with fresh local ingredients"
    },
    {
      time: "9:00 AM",
      activity: "Wellness Workshop",
      description: "Interactive session on health and wellness topics"
    },
    {
      time: "11:00 AM",
      activity: "Spa Treatment",
      description: "Rejuvenating spa therapies and treatments"
    },
    {
      time: "1:00 PM",
      activity: "Wellness Lunch",
      description: "Balanced meal designed for optimal health"
    },
    {
      time: "3:00 PM",
      activity: "Beach Walk",
      description: "Mindful walking meditation along the beach"
    },
    {
      time: "5:00 PM",
      activity: "Meditation Session",
      description: "Guided meditation for mental clarity"
    },
    {
      time: "7:00 PM",
      activity: "Dinner",
      description: "Healthy dinner with ocean views"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      rating: 5,
      comment: "The yoga retreat was transformative. The instructors were amazing, and the beachfront setting was perfect for relaxation. I left feeling completely rejuvenated.",
      location: "New York"
    },
    {
      name: "Rahul & Priya Sharma",
      rating: 5,
      comment: "We did the spa & wellness package as a couple and it was incredible. The massages were amazing and the healthy food was delicious. Already planning our next visit!",
      location: "Mumbai"
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "The digital detox retreat was exactly what I needed. Being disconnected from technology in such a beautiful setting helped me find clarity I'd been missing.",
      location: "Singapore"
    }
  ];

  const faqs = [
    {
      question: "Are beginners welcome in yoga sessions?",
      answer: "Absolutely! Our programs cater to all levels from beginners to advanced practitioners. Our certified instructors provide personalized attention to ensure everyone benefits from the sessions."
    },
    {
      question: "Can dietary restrictions be accommodated?",
      answer: "Yes, we can accommodate various dietary requirements including vegetarian, vegan, gluten-free, and specific allergies. Please inform us in advance so we can prepare accordingly."
    },
    {
      question: "What is included in the retreat package?",
      answer: "Our retreat packages include accommodation, all meals, scheduled activities and sessions, use of facilities, and airport transfers. Specific inclusions vary by program, so check the details of your selected package."
    },
    {
      question: "Is there free time for personal activities?",
      answer: "Yes, we balance structured activities with free time for personal relaxation, exploration, or reflection. You'll have several hours each day to spend as you wish."
    },
    {
      question: "What should I bring to the retreat?",
      answer: "Bring comfortable clothing for activities, swimwear, sunscreen, personal toiletries, and any medications. We provide yoga mats and all necessary equipment. Avoid bringing unnecessary electronics, especially for digital detox programs."
    },
    {
      question: "Can I extend my stay after the retreat?",
      answer: "Yes, we offer post-retreat stay options at special rates. You can extend your stay to continue enjoying the facilities and serene environment. Contact us for availability and rates."
    },
    {
      question: "Are the retreats suitable for solo travelers?",
      answer: "Absolutely! Many of our guests are solo travelers. The group activities provide opportunities to connect with like-minded individuals while still respecting personal space and quiet time."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 2-3 months in advance, especially for peak season (November to February). This ensures availability and allows us to prepare for any special requirements you may have."
    }
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO
        title="Wellness Retreats in Andaman | Yoga, Spa & Ayurveda | Book Now"
        description="Rejuvenate with wellness retreats in Andaman Islands. Choose from yoga, spa, digital detox and Ayurvedic programs. Beachfront accommodation, healthy meals, expert guidance."
        keywords="wellness retreat andaman, yoga retreat andaman, spa retreat andaman, ayurvedic retreat andaman, detox retreat andaman"
        targetAudience="luxury"
        pathname="/experiences/wellness-retreats"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Wellness Retreats"
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
                Wellness Retreats
              </h1>
              <p className="text-xl text-pearl/90 mb-8">
                Rejuvenate your mind, body, and soul in paradise
              </p>
              <Link
                to="/enquiry"
                onClick={() => {
                  try {
                    localStorage.setItem('enquiryDetails', JSON.stringify({
                      packageName: 'Wellness Retreats',
                      source: 'experience',
                      slug: 'wellness-retreats'
                    }));
                  } catch (_) { /* no-op */ }
                }}
                className="inline-flex items-center px-8 py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Book Your Retreat
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">Experience Wellness Benefits</h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Discover the transformative effects of our wellness programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* Programs Section */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">
              Wellness Programs
            </h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Choose your path to wellness and rejuvenation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
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
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2 z-20">
                    {program.price}
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-azure/90 text-pearl">
                      {program.bestFor}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-night mb-2">{program.name}</h3>
                  <div className="flex items-center space-x-4 mb-4 text-night/60">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {program.duration}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {program.location}
                    </span>
                  </div>
                  <p className="text-night/70 mb-4">{program.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {program.highlights.map((highlight, i) => (
                        <span key={i} className="text-xs bg-azure/10 text-azure px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Sessions:</h4>
                    <div className="flex flex-wrap gap-1">
                      {program.sessions.map((session, i) => (
                        <span key={i} className="text-xs bg-night/10 text-night/60 px-2 py-1 rounded">
                          {session}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Includes:</h4>
                    <div className="space-y-1">
                      {program.includes.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center text-night/60">
                          <CheckCircle className="w-3 h-3 mr-2 text-azure" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                      {program.includes.length > 3 && (
                        <div className="text-xs text-azure">+{program.includes.length - 3} more</div>
                      )}
                    </div>
                  </div>
                  <Link
                    to="/enquiry"
                    onClick={() => {
                      try {
                        localStorage.setItem('enquiryDetails', JSON.stringify({
                          packageName: 'Wellness Retreats',
                          source: 'experience',
                          slug: 'wellness-retreats',
                          selectedActivities: [program.name]
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

      {/* Accommodations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">Wellness Accommodations</h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Stay in our serene accommodations designed for optimal relaxation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
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
                    src={accommodation.image}
                    alt={accommodation.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-night mb-2">{accommodation.name}</h3>
                  <p className="text-night/70 mb-4">{accommodation.description}</p>
                  <div className="space-y-2">
                    {accommodation.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-night/60">
                        <CheckCircle className="w-3 h-3 mr-2 text-azure" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule & Diet */}
      <section className="py-20 bg-gradient-to-br from-azure/5 to-blue-600/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-night mb-2">Daily Schedule & Diet</h2>
            <p className="text-night/70">A gentle rhythm for body and mind</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-semibold text-night mb-4">Sample Daily Schedule</h3>
              <div className="space-y-3">
                {dailySchedule.map((item, index) => (
                  <div key={index} className="flex border-b border-gray-100 pb-3 last:border-b-0">
                    <div className="pr-4">
                      <p className="text-sm font-semibold text-azure">{item.time}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-night">{item.activity}</p>
                      <p className="text-xs text-night/60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-lg font-semibold text-night mb-4">Wholesome Nutrition</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-night mb-2">Philosophy</h4>
                  <p className="text-night/70 text-sm">Chef-curated vegetarian and seafood options with fresh island produce. Our nutrition-focused menu supports your wellness journey.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-night mb-2">Dietary Options</h4>
                  <p className="text-night/70 text-sm">Vegan, gluten-free, dairy-free, and Ayurvedic-friendly options available. We accommodate food allergies with advance notice.</p>
                </div>
                <div className="flex items-center">
                  <Utensils className="w-5 h-5 mr-2 text-azure" />
                  <span className="text-sm text-night/60">All meals included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">
              Guest Experiences
            </h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Hear from our guests about their wellness transformations
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

      {/* FAQs */}
      <FaqAccordion
        title="Frequently Asked Questions"
        description="Everything you need to know about wellness retreats in Andaman"
        faqs={faqs}
      />

      <Footer />
    </div>
  );
};

export default WellnessRetreatsPage;