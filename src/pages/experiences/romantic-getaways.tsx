import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Moon, Gift, Camera, Clock, Users, MapPin, CheckCircle, Star, Calendar, Sparkles, Sunset, Diamond } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import FaqAccordion from '../../components/FaqAccordion';

const RomanticGetawaysPage = () => {
  const packages = [
    {
      name: "Honeymoon Bliss",
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
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Newlyweds",
      location: "Havelock Island",
      highlights: ["Private villa", "Couples spa", "Romantic dinners", "Sunset cruise"],
      special: "Honeymoon surprise gift"
    },
    {
      name: "Anniversary Escape",
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
      image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Couples celebrating anniversaries",
      location: "Neil Island",
      highlights: ["Seaview suite", "Professional photoshoot", "Beach picnic", "Special cake"],
      special: "Personalized anniversary gift"
    },
    {
      name: "Proposal Paradise",
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
      image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Couples ready to engage",
      location: "Long Island",
      highlights: ["Beach proposal setup", "Photography", "Champagne", "Beach villa"],
      special: "Proposal planning assistance"
    },
    {
      name: "Babymoon Bliss",
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
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
      name: "Radhanagar Beach",
      description: "Voted one of Asia's best beaches, perfect for sunset strolls",
      image: "https://images.unsplash.com/photo-1540202404-1b627c1926c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Sunset viewing, photography"
    },
    {
      name: "Kalapathar Beach",
      description: "Secluded beach with crystal clear waters and fewer crowds",
      image: "https://images.unsplash.com/photo-1510629487420-2c5c9c7726f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Privacy, peaceful walks"
    },
    {
      name: "Elephant Beach",
      description: "Pristine beach with coral reefs and water activities",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bestFor: "Water activities, snorkeling"
    }
  ];

  const testimonials = [
    {
      name: "Anjali & Rohan",
      rating: 5,
      comment: "Our honeymoon was beyond perfect! The private villa with pool was incredible, and the candlelight dinner on the beach was so romantic. The staff went above and beyond to make us feel special.",
      location: "Delhi"
    },
    {
      name: "Priya & Alok",
      rating: 5,
      comment: "We celebrated our 10th anniversary with the Anniversary Escape package. The professional photoshoot was amazing, and we have beautiful memories. Already planning to return for our 15th!",
      location: "Bangalore"
    },
    {
      name: "Neha & Karan",
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
    <div className="min-h-screen bg-pearl">
      <SEO
        title="Romantic Getaways in Andaman | Honeymoon & Anniversary Packages"
        description="Plan the perfect romantic getaway in Andaman. Choose from honeymoon, anniversary, proposal and babymoon packages with private villas, beach dining, spa treatments and more."
        keywords="romantic getaway andaman, honeymoon andaman, anniversary packages andaman, proposal destination andaman, couples vacation andaman"
        targetAudience="honeymoon"
        pathname="/experiences/romantic-getaways"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Romantic Getaways"
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
                Romantic Getaways
              </h1>
              <p className="text-xl text-pearl/90 mb-8">
                Create unforgettable memories with your loved one.
              </p>
              <Link
                to="/enquiry"
                onClick={() => {
                  try {
                    localStorage.setItem('enquiryDetails', JSON.stringify({
                      packageName: 'Romantic Getaways',
                      source: 'experience',
                      slug: 'romantic-getaways'
                    }));
                  } catch (_) { /* no-op */ }
                }}
                className="inline-flex items-center px-8 py-4 glass-sunset-button text-pearl rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Plan Your Escape
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Romantic Experiences */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">Romantic Experiences</h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Discover the special moments we create for you and your loved one
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-azure/10 rounded-full flex items-center justify-center mx-auto mb-4 text-azure">
                  {experience.icon}
                </div>
                <h3 className="text-xl font-bold text-night mb-2">{experience.title}</h3>
                <p className="text-night/70 text-center">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Romantic Spots */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pearl mb-4">Most Romantic Spots</h2>
            <p className="text-pearl/70 max-w-2xl mx-auto">
              Discover the most beautiful locations for your romantic moments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {romanticSpots.map((spot, index) => (
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
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-night mb-2">{spot.name}</h3>
                  <p className="text-night/70 mb-2">{spot.description}</p>
                  <div className="flex items-center text-night/60">
                    <Heart className="w-4 h-4 mr-2" />
                    <span className="text-sm">{spot.bestFor}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-night mb-4">
              Romantic Packages
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Choose the perfect setting for your romantic story.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
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
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 glass-sunset-badge px-4 py-2 z-20">
                    {pkg.price}
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-azure/90 text-pearl">
                      {pkg.bestFor}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-night mb-2">{pkg.name}</h3>
                  <div className="flex items-center space-x-4 mb-4 text-night/60">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {pkg.location}
                    </span>
                  </div>
                  <p className="text-night/70 mb-4">{pkg.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.map((highlight, i) => (
                        <span key={i} className="text-xs bg-azure/10 text-azure px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-night mb-2">Includes:</h4>
                    <div className="space-y-1">
                      {pkg.includes.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center text-night/60">
                          <CheckCircle className="w-3 h-3 mr-2 text-azure" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                      {pkg.includes.length > 3 && (
                        <div className="text-xs text-azure">+{pkg.includes.length - 3} more</div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-night">Special:</h4>
                    <span className="text-sm text-azure">{pkg.special}</span>
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
              Love Stories
            </h2>
            <p className="text-night/70 max-w-2xl mx-auto">
              Hear from couples who created unforgettable memories with us
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

      {/* Add-ons & Tips */}
      <section className="py-20 bg-night">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-pearl mb-2">Add-ons & Tips</h2>
            <p className="text-pearl/70">Personalize your romantic escape</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center mb-4">
                <Sparkles className="w-5 h-5 mr-2 text-azure" />
                <h3 className="text-lg font-semibold text-night">Romantic Add-ons</h3>
              </div>
              <p className="text-night/70">Private yacht sunset, beachfront cabana dinners, flower décor, and more.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 mr-2 text-azure" />
                <h3 className="text-lg font-semibold text-night">Best Time</h3>
              </div>
              <p className="text-night/70">Plan around new moon for starry nights and calmer seas.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center mb-4">
                <Camera className="w-5 h-5 mr-2 text-azure" />
                <h3 className="text-lg font-semibold text-night">Photo Sessions</h3>
              </div>
              <p className="text-night/70">Golden-hour shoots at Radhanagar or Kalapathar for timeless memories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion
        title="Frequently Asked Questions"
        description="Everything you need to know about romantic getaways in Andaman"
        faqs={faqs}
      />

      <Footer />
    </div>
  );
};

export default RomanticGetawaysPage; 