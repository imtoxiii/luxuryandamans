import { motion } from 'framer-motion';
import ExperienceLayout from '../../components/ExperienceLayout';
import { Link } from 'react-router-dom';
import { Cog as Yoga, Space as Spa, Heart, Clock, Users, MapPin, CheckCircle, Star, Utensils, Sun, Moon, Wind } from 'lucide-react';
import FaqAccordion from '../../components/FaqAccordion';

const WellnessRetreatsPage = () => {
  const programs = [
    {
      name: "Luxury Andaman Team",
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
      image: "/favicon.png",
      bestFor: "Spiritual seekers, Beginners",
      location: "Havelock Island",
      highlights: ["Certified instructors", "Beachfront practice", "All levels", "Workshops"],
      sessions: ["Morning yoga", "Meditation", "Breathwork", "Yoga philosophy"]
    },
    {
      name: "Luxury Andaman Team",
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
      image: "/favicon.png",
      bestFor: "Stress relief, Couples",
      location: "Neil Island",
      highlights: ["Ayurvedic treatments", "Massages", "Detox programs", "Beauty treatments"],
      sessions: ["Massage therapy", "Ayurveda", "Detox", "Beauty treatments"]
    },
    {
      name: "Luxury Andaman Team",
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
      image: "/favicon.png",
      bestFor: "Digital fatigue, Stress management",
      location: "Long Island",
      highlights: ["Device-free", "Nature immersion", "Mindfulness", "Creative expression"],
      sessions: ["Nature walks", "Mindfulness", "Creative workshops", "Journaling"]
    },
    {
      name: "Luxury Andaman Team",
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
      image: "/favicon.png",
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
      name: "Luxury Andaman Team",
      description: "Private villas with direct beach access and ocean views",
      image: "/favicon.png",
      features: ["Ocean view", "Private terrace", "King bed", "Outdoor shower"]
    },
    {
      name: "Luxury Andaman Team",
      description: "Cozy cottages nestled in tropical gardens",
      image: "/favicon.png",
      features: ["Garden view", "Private balcony", "Queen bed", "Indoor garden"]
    },
    {
      name: "Luxury Andaman Team",
      description: "Spacious suites designed for optimal relaxation",
      image: "/favicon.png",
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
      name: "Luxury Andaman Team",
      rating: 5,
      comment: "The yoga retreat was transformative. The instructors were amazing, and the beachfront setting was perfect for relaxation. I left feeling completely rejuvenated.",
      location: "New York"
    },
    {
      name: "Luxury Andaman Team",
      rating: 5,
      comment: "We did the spa & wellness package as a couple and it was incredible. The massages were amazing and the healthy food was delicious. Already planning our next visit!",
      location: "Mumbai"
    },
    {
      name: "Luxury Andaman Team",
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
    <ExperienceLayout
      title="Wellness Retreats"
      subtitle="Rejuvenate in Paradise"
      description="Reconnect with your inner self through our curated wellness retreats. From yoga and meditation to Ayurvedic healing, find your path to holistic well-being."
      image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      stats={{
        duration: "3-7 Days",
        location: "Havelock & Neil",
        price: "From ₹35,000/person"
      }}
      slug="wellness-retreats"
      seo={{
        title: "Wellness Retreats in Andaman | Yoga, Spa & Ayurveda 2025",
        description: "Rejuvenate with wellness retreats in Andaman Islands. Choose from yoga, spa, digital detox and Ayurvedic programs. Beachfront accommodation, healthy meals, expert guidance.",
        keywords: "wellness retreat andaman, yoga retreat andaman, spa retreat andaman, ayurvedic retreat andaman, detox retreat andaman, luxury wellness andaman, meditation retreat andaman"
      }}
      bookingData={{
        packageName: 'Wellness Retreats',
        source: 'experience',
        slug: 'wellness-retreats'
      }}
      faqData={faqs}
    >
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">
              Wellness Programs
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose your path to wellness and rejuvenation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
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
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-green-600 text-white shadow-lg">
                      {program.bestFor}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:w-3/5 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 font-display">{program.name}</h3>
                      <div className="flex items-center text-green-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {program.duration}
                        <span className="mx-2">•</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        {program.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-white">{program.price}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">{program.description}</p>

                  <div className="mb-6 flex-grow">
                    <h4 className="font-bold text-white text-sm mb-3">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.highlights.map((highlight, i) => (
                        <span key={i} className="text-xs bg-green-900/50 text-green-200 px-3 py-1 rounded-lg font-medium border border-green-500/30">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-white text-sm mb-3">Includes:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {program.includes.slice(0, 4).map((item, i) => (
                        <div key={i} className="flex items-center text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-700">
                    <div className="flex items-center text-green-300 text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="font-medium">Sessions: {program.sessions.length}</span>
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
                        } catch { /* no-op */ }
                      }}
                      className="px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
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

      {/* Accommodations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Wellness Accommodations
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Stay in our serene accommodations designed for optimal relaxation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
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
                    src={accommodation.image}
                    alt={accommodation.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                    <h3 className="text-xl font-bold text-white mb-1 font-display">{accommodation.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{accommodation.description}</p>
                  <div className="space-y-2">
                    {accommodation.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-500 text-sm">
                        <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                        <span>{feature}</span>
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
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 font-display">Daily Schedule & Diet</h2>
            <p className="text-gray-500">A gentle rhythm for body and mind</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-green-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-green-600" />
                Sample Daily Schedule
              </h3>
              <div className="space-y-4">
                {dailySchedule.map((item, index) => (
                  <div key={index} className="flex border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                    <div className="pr-4 w-24 flex-shrink-0">
                      <p className="text-sm font-bold text-green-600">{item.time}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900">{item.activity}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-green-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <Utensils className="w-5 h-5 mr-2 text-green-600" />
                Wholesome Nutrition
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">Philosophy</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Chef-curated vegetarian and seafood options with fresh island produce. Our nutrition-focused menu supports your wellness journey.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">Dietary Options</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Vegan, gluten-free, dairy-free, and Ayurvedic-friendly options available. We accommodate food allergies with advance notice.</p>
                </div>
                <div className="flex items-center bg-green-50 p-4 rounded-xl">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  <span className="text-sm font-medium text-green-800">All nutritious meals included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Guest Experiences
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Hear from our guests about their wellness transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 relative"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating
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

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FaqAccordion
            title="Frequently Asked Questions"
            description="Everything you need to know about wellness retreats in Andaman"
            faqs={faqs}
          />
        </div>
      </section>
    </ExperienceLayout>
  );
};

export default WellnessRetreatsPage;