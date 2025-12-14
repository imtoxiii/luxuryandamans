import { motion } from 'framer-motion';
import ExperienceLayout from '../../components/ExperienceLayout';
import { Link } from 'react-router-dom';
import { Heart, Moon, Gift, Camera, Clock, Users, MapPin, CheckCircle, Star, Calendar, Sparkles, Sunset, Diamond } from 'lucide-react';
import FaqAccordion from '../../components/FaqAccordion';

const RomanticGetawaysPage = () => {
  const packages = [
    {
      name: "Luxury Andaman Team",
      duration: "7 days",
      price: "₹85,000 per couple",
      includes: [
        "Private villa with pool",
        "Couples spa treatment",
        "Candlelight dinners",
        "Sunset cruise",
        "Airport transfers",
        "Decorated room on arrival"
      ],
      description: "An unforgettable honeymoon experience in paradise.",
      image: "/favicon.png",
      bestFor: "Newlyweds",
      location: "Havelock Island",
      highlights: ["Private villa", "Couples spa", "Romantic dinners", "Sunset cruise"],
      special: "Honeymoon surprise gift"
    },
    {
      name: "Luxury Andaman Team",
      duration: "4 days",
      price: "₹55,000 per couple",
      includes: [
        "Seaview suite",
        "Celebratory cake & wine",
        "Private beach picnic",
        "Professional photoshoot",
        "Couples massage",
        "Romantic decor in room"
      ],
      description: "Rekindle the romance with a special anniversary celebration.",
      image: "/favicon.png",
      bestFor: "Couples celebrating anniversaries",
      location: "Neil Island",
      highlights: ["Seaview suite", "Professional photoshoot", "Beach picnic", "Special cake"],
      special: "Personalized anniversary gift"
    },
    {
      name: "Luxury Andaman Team",
      duration: "3 days",
      price: "₹65,000 per couple",
      includes: [
        "Luxury beachfront villa",
        "Private beach setup for proposal",
        "Professional photographer",
        "Champagne celebration",
        "Couples spa treatment",
        "Romantic dinner on beach"
      ],
      description: "Create the perfect setting for your proposal in paradise.",
      image: "/favicon.png",
      bestFor: "Couples ready to engage",
      location: "Long Island",
      highlights: ["Beach proposal setup", "Photography", "Champagne", "Beach villa"],
      special: "Proposal planning assistance"
    },
    {
      name: "Luxury Andaman Team",
      duration: "5 days",
      price: "₹75,000 per couple",
      includes: [
        "Beachfront suite",
        "Prenatal massage for mother",
        "Gentle couple's activities",
        "Healthy gourmet meals",
        "Romantic movie nights",
        "Private beach time"
      ],
      description: "Relax and reconnect before your little one arrives.",
      image: "/favicon.png",
      bestFor: "Expecting couples",
      location: "Port Blair",
      highlights: ["Prenatal massage", "Healthy meals", "Gentle activities", "Peaceful environment"],
      special: "Baby-friendly amenities"
    }
  ];

  const experiences = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Private Beach Dining",
      description: "Enjoy intimate dinners on secluded beaches with personalized menus"
    },
    {
      icon: <Sunset className="w-6 h-6" />,
      title: "Sunset Cruises",
      description: "Sail into the golden hour aboard our luxury boats with champagne"
    },
    {
      icon: <Diamond className="w-6 h-6" />,
      title: "Couples Spa Treatments",
      description: "Indulge in side-by-side massages and rejuvenating spa therapies"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Professional Photoshoots",
      description: "Capture your memories with professional photographers at stunning locations"
    }
  ];

  const romanticSpots = [
    {
      name: "Luxury Andaman Team",
      description: "Voted one of Asia's best beaches, perfect for sunset strolls",
      image: "/favicon.png",
      bestFor: "Sunset viewing, photography"
    },
    {
      name: "Luxury Andaman Team",
      description: "Secluded beach with crystal clear waters and fewer crowds",
      image: "/favicon.png",
      bestFor: "Privacy, peaceful walks"
    },
    {
      name: "Luxury Andaman Team",
      description: "Pristine beach with coral reefs and water activities",
      image: "/favicon.png",
      bestFor: "Water activities, snorkeling"
    }
  ];

  const testimonials = [
    {
      name: "Luxury Andaman Team",
      rating: 5,
      comment: "Our honeymoon was beyond perfect! The private villa with pool was incredible, and the candlelight dinner on the beach was so romantic. The staff went above and beyond to make us feel special.",
      location: "Delhi"
    },
    {
      name: "Luxury Andaman Team",
      rating: 5,
      comment: "We celebrated our 10th anniversary with the Anniversary Escape package. The professional photoshoot was amazing, and we have beautiful memories. Already planning to return for our 15th!",
      location: "Bangalore"
    },
    {
      name: "Luxury Andaman Team",
      rating: 5,
      comment: "The Proposal Paradise package exceeded our expectations! The beach setup was magical, and the photographer captured the moment perfectly. She said yes! Thank you for making our engagement unforgettable.",
      location: "Mumbai"
    }
  ];

  const faqs = [
    {
      question: "Can we customize our romantic package?",
      answer: "Yes, we specialize in creating personalized romantic experiences. Let us know your preferences, special occasions, and any surprises you're planning, and we'll customize the package accordingly."
    },
    {
      question: "Are the locations private for romantic activities?",
      answer: "We arrange private settings for dinners, beach picnics, and special moments. While beaches are public, we select secluded areas and arrange setups that provide privacy and intimate atmosphere."
    },
    {
      question: "Can you arrange special proposals?",
      answer: "Absolutely! We specialize in creating magical proposal experiences. From beach decorations at sunset to arranging for photographers to capture the moment, we'll help you plan the perfect proposal."
    },
    {
      question: "What is the best time to visit for a romantic getaway?",
      answer: "October to May offers the best weather for romantic activities. Visit during new moon phases for starry nights and clearer ocean views. February and March are particularly popular for honeymoons."
    },
    {
      question: "Are packages all-inclusive?",
      answer: "Our romantic packages include accommodation, selected meals, and mentioned activities. Additional services can be added. We provide detailed inclusions for each package to avoid any surprises."
    },
    {
      question: "Can special dietary requirements be accommodated?",
      answer: "Yes, we can accommodate various dietary requirements including vegetarian, vegan, gluten-free, and specific allergies. Please inform us in advance so we can prepare accordingly for your romantic meals."
    },
    {
      question: "Is airport transfer included?",
      answer: "All our romantic packages include airport transfers. Private luxury vehicles ensure a comfortable start to your romantic getaway."
    },
    {
      question: "How far in advance should we book?",
      answer: "We recommend booking at least 2-3 months in advance, especially for peak season (November to February) and special occasions. This ensures availability and allows us to prepare for any special requirements."
    },
    {
      question: "Can we extend our stay after the package ends?",
      answer: "Yes, you can extend your stay at special rates. Many couples add extra days to their packages to simply relax or explore more of the islands at a leisurely pace."
    },
    {
      question: "Are the packages suitable for LGBTQ+ couples?",
      answer: "Absolutely! We welcome all couples and create inclusive romantic experiences for everyone. The Andaman Islands are generally accepting, and our team is committed to providing equal, respectful service to all guests."
    }
  ];

  return (
    <ExperienceLayout
      title="Romantic Getaways"
      subtitle="Love in Paradise"
      description="Create unforgettable memories with your loved one in the Andaman Islands. From secluded beaches to private dinners, we craft the perfect romantic escape."
      image="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      stats={{
        duration: "3-7 Days",
        location: "Havelock, Neil & More",
        price: "From ₹55,000/couple"
      }}
      slug="romantic-getaways"
      seo={{
        title: "Romantic Getaways & Honeymoon Packages in Andaman | 2025 Specials",
        description: "Plan your dream honeymoon or romantic escape in Andaman. Private beach dinners, luxury villas, sunset cruises & couple spa treatments. Customize your package today.",
        keywords: "andaman honeymoon packages, romantic getaways andaman, couple tour packages andaman, candlelight dinner havelock, luxury honeymoon resorts andaman, beach wedding andaman"
      }}
      bookingData={{
        packageName: 'Romantic Getaways',
        source: 'experience',
        slug: 'romantic-getaways'
      }}
      faqData={faqs}
    >
      {/* Romantic Experiences */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-pink-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600">
                  {experience.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{experience.title}</h3>
                <p className="text-gray-600 text-sm">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">
              Romantic Packages
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the perfect setting for your romantic story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
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
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-pink-600 text-white shadow-lg">
                      {pkg.bestFor}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:w-3/5 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 font-display">{pkg.name}</h3>
                      <div className="flex items-center text-pink-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {pkg.duration}
                        <span className="mx-2">•</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        {pkg.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-white">{pkg.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">{pkg.description}</p>
                  
                  <div className="mb-6 flex-grow">
                    <h4 className="font-bold text-white text-sm mb-3">Includes:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pkg.includes.map((item, i) => (
                        <div key={i} className="flex items-center text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-pink-500 flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-700">
                    <div className="flex items-center text-pink-300 text-sm">
                      <Gift className="w-4 h-4 mr-2" />
                      <span className="font-medium">Special: {pkg.special}</span>
                    </div>
                    <Link
                      to="/enquiry"
                      onClick={() => {
                        try {
                          localStorage.setItem('enquiryDetails', JSON.stringify({
                            packageName: 'Romantic Getaways',
                            source: 'experience',
                            slug: 'romantic-getaways',
                            selectedActivities: [pkg.name]
                          }));
                        } catch (_) { /* no-op */ }
                      }}
                      className="px-6 py-2 bg-pink-600 text-white rounded-lg font-bold hover:bg-pink-700 transition-colors shadow-lg shadow-pink-600/20"
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

      {/* Romantic Spots */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Most Romantic Spots
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Discover the most beautiful locations for your romantic moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {romanticSpots.map((spot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-10" />
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                    <h3 className="text-xl font-bold text-white mb-1 font-display">{spot.name}</h3>
                    <div className="flex items-center text-pink-300 text-sm">
                      <Heart className="w-3 h-3 mr-1 fill-current" />
                      {spot.bestFor}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{spot.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Love Stories
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Hear from couples who created unforgettable memories with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-pink-100 relative"
              >
                <div className="absolute top-8 right-8 text-pink-100">
                  <Heart className="w-12 h-12 fill-current" />
                </div>
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
                <p className="text-gray-600 mb-6 italic leading-relaxed relative z-10">"{testimonial.comment}"</p>
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

      {/* Add-ons & Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Add-ons & Tips</h2>
            <p className="text-gray-500">Personalize your romantic escape</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 text-center hover:bg-pink-50 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-pink-500">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Romantic Add-ons</h3>
              <p className="text-gray-600 text-sm">Private yacht sunset, beachfront cabana dinners, flower décor, and more.</p>
            </div>
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 text-center hover:bg-pink-50 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-pink-500">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Best Time</h3>
              <p className="text-gray-600 text-sm">Plan around new moon for starry nights and calmer seas.</p>
            </div>
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 text-center hover:bg-pink-50 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-pink-500">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Photo Sessions</h3>
              <p className="text-gray-600 text-sm">Golden-hour shoots at Radhanagar or Kalapathar for timeless memories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FaqAccordion
            title="Frequently Asked Questions"
            description="Everything you need to know about romantic getaways in Andaman"
            faqs={faqs}
          />
        </div>
      </section>
    </ExperienceLayout>
  );
};

export default RomanticGetawaysPage;