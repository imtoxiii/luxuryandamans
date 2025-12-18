import { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Calendar, CreditCard } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '../components/SEO';
import Header from '../components/Header';
import FeaturedPackages from '../components/FeaturedPackages';
import PopularIslands from '../components/PopularIslands';
import Destinations from '../components/Destinations';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import CardSlider from '../components/CardSlider';
import ExperienceCard from '../components/ExperienceCard';
import heroBg from '../img/pexels-nabilnaidu-106714031 (1).webp';
import { removeLoader } from '../lib/loader';

const Home = () => {
  const location = useLocation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Sliced image animation for mobile
  const [imagePart, setImagePart] = useState(0); // 0 = left, 1 = center, 2 = right
  const objectPositions = ["25% 50%", "75% 100%", "0% 25%"];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setImagePart((prev) => (prev + 1) % objectPositions.length);
      }, 3000); // change every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  // Preload hero image and hide loader when ready
  useEffect(() => {
    const img = new Image();
    img.src = heroBg;
    
    const handleLoad = () => {
      removeLoader();
    };

    if (img.complete) {
      handleLoad();
    } else {
      img.onload = handleLoad;
      img.onerror = handleLoad; // Hide loader even if image fails
    }

    // Safety timeout in case image hangs
    const timeout = setTimeout(handleLoad, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const experiences = [
    {
      title: "Budget Beach Resorts",
      description: "Affordable luxury accommodation starting from ₹2,000/night",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/experiences/luxury-resorts"
    },
    {
      title: "Scuba Diving",
      description: "Explore vibrant coral reefs and marine life",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/experiences/scuba-diving"
    },
    {
      title: "Island Hopping",
      description: "Discover hidden beaches and secluded coves",
      image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/experiences/island-hopping"
    },
    {
      title: "Sunset Cruises",
      description: "Unforgettable evenings on the Andaman Sea",
      image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/experiences/sunset-cruises"
    },
    {
      title: "Wellness Retreats",
      description: "Rejuvenate your mind, body, and soul",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/experiences/wellness-retreats"
    }
  ];



  return (
    <div className="bg-white font-sans selection:bg-blue-100 selection:text-blue-900" ref={containerRef}>
      <SEO
        title="Andaman Tour Packages 2026 | Starting ₹15,000 | Best Andaman Packages"
        description="Book best Andaman tour packages starting ₹15,000 per person. 4.8★ rated luxury honeymoon, family & adventure packages. Includes ferry, hotels, scuba diving & all activities. Free cancellation. 1000+ happy travelers."
        pathname={location.pathname}
        keywords="andaman tour packages, andaman packages 2026, best andaman packages, andaman honeymoon packages, andaman family packages, cheap andaman packages, andaman islands trip, andaman vacation packages, havelock island packages, neil island tour, andaman tourism, beach holiday india, andaman trip cost, port blair packages, andaman packages from delhi, andaman packages from chennai, andaman packages from bangalore, andaman packages from kolkata, andaman packages from mumbai, budget andaman packages, luxury andaman trip, scuba diving andaman package, water sports andaman"
        targetAudience="all"
        faqData={[
          {
            question: "How much does an Andaman tour package cost?",
            answer: "Andaman tour packages start from ₹15,000 per person for 4 nights/5 days budget packages. Standard packages cost ₹20,000-30,000, premium packages ₹35,000-50,000, and luxury packages ₹60,000+ per person. This includes accommodation, meals, ferry tickets, airport transfers, and sightseeing."
          },
          {
            question: "What is the best time to book Andaman packages?",
            answer: "The best time to visit Andaman is October to May. Book 2-3 months in advance for peak season (Dec-Jan) to get better hotel rates and ferry availability. Monsoon (June-September) offers 30-40% discounts but some water activities may be closed."
          },
          {
            question: "What is included in Andaman tour packages?",
            answer: "Most Andaman packages include: Airport transfers, inter-island ferry tickets (Port Blair-Havelock-Neil), accommodation with breakfast, sightseeing tours, and guide. Premium packages also include water activities like scuba diving, snorkeling, and sea walking. Flights are usually not included."
          },
          {
            question: "Which is the best Andaman package for couples?",
            answer: "For couples, we recommend our 5N/6D Honeymoon Package starting at ₹35,000/person. It includes romantic stays in Havelock beach resorts, private candlelight dinner, couple spa, snorkeling at Elephant Beach, and sunset cruise. Perfect for honeymoon and anniversary celebrations."
          }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Luxury Andamans",
          "description": "Best Andaman tour packages, honeymoon packages, and family vacation packages. Expert travel agency for Andaman Islands with 1000+ happy travelers.",
          "url": "https://luxuryandamans.com",
          "logo": "https://luxuryandamans.com/logo.png",
          "priceRange": "₹₹ - ₹₹₹₹",
          "areaServed": {
            "@type": "Place",
            "name": "Andaman and Nicobar Islands, India"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Andaman Tour Packages",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "TouristTrip",
                  "name": "Andaman Honeymoon Package",
                  "touristType": "Couples"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "TouristTrip",
                  "name": "Andaman Family Package",
                  "touristType": "Families"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1000"
          }
        }}
      />
      
      {/* Preload Hero Image for LCP Optimization */}
      <link rel="preload" as="image" href={heroBg} />

      <Header />

      {/* Custom Parallax Hero */}
      <section className="relative h-screen min-h-[600px] flex flex-col justify-start pt-32 md:justify-center md:pt-0 items-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />
          <img
            src={heroBg}
            alt="Andaman Paradise"
            className="w-full h-full object-cover scale-110"
            style={{
              objectPosition: window.innerWidth < 768 ? objectPositions[imagePart] : 'center',
              transition: 'object-position 1s cubic-bezier(0.4,0,0.2,1)'
            }}
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 shadow-2xl">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-bold tracking-widest uppercase">#1 Rated Andaman Agency</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-2xl font-display">
              Paradise <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-white">Found Here</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-light mb-10 drop-shadow-md">
              Experience the untouched beauty of the Andaman Islands with our curated luxury packages and bespoke itineraries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/packages"
                className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.7)] hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Explore Packages
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/enquiry"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
              >
                Plan My Trip
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/80"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      <div className="relative z-10 bg-white">
        {/* Featured Packages with improved spacing */}
        <section className="py-12 md:py-16">
          <FeaturedPackages />
        </section>

        {/* Popular Islands Section */}
        <section className="py-16 bg-white">
          <PopularIslands />
        </section>

        {/* Destinations with Parallax Effect */}
        <section className="relative py-12 md:py-16 bg-gray-50 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <Destinations />
        </section>

        {/* Experiences Section - Redesigned */}
        <section className="py-12 md:py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Unforgettable Moments</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-display">
                Curated Experiences
              </h2>
              <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Discover the best of what the Andaman Islands have to offer through our carefully curated experiences
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-[3rem] -z-10 transform rotate-1" />
              <CardSlider showDots={true} autoScroll={false}>
                {experiences.map((exp, index) => (
                  <ExperienceCard
                    key={index}
                    title={exp.title}
                    description={exp.description}
                    image={exp.image}
                    delay={index * 0.1}
                    link={exp.link}
                  />
                ))}
              </CardSlider>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Modern Instagram Feed */}
        <section className="py-12 md:py-16 bg-gray-50">
          <InstagramFeed />
        </section>

        <Newsletter />

        {/* Call to Action Section - Premium */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-blue-900">
            <img
              src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="Background"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-cyan-900/90" />
          </div>

          <div className="container relative z-10 px-4">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl border border-white/20"
              >
                <MapPin className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display leading-tight">
                Ready for Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Luxury Adventure?</span>
              </h2>

              <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Let our expert travel consultants create a bespoke itinerary tailored to your desires. From private island retreats to exclusive cultural experiences, we craft journeys that exceed expectations.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/enquiry"
                  className="px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 min-w-[200px] justify-center"
                >
                  <span>Start Planning</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/calculator"
                  className="px-10 py-5 bg-blue-800/50 border border-blue-400/30 text-white rounded-full font-bold text-lg hover:bg-blue-800/70 transition-all duration-300 backdrop-blur-md flex items-center gap-3 min-w-[200px] justify-center"
                >
                  <span>Calculate Costs</span>
                  <CreditCard className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;