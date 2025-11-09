import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ExperienceCard from '../components/ExperienceCard';
import Destinations from '../components/Destinations';
import FeaturedPackages from '../components/FeaturedPackages';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import CardSlider from '../components/CardSlider';

const Home = () => {
  const location = useLocation();
  const floatingIconRef = useRef(null);
  
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
    <div className="bg-white">
      <SEO 
        title="Best Andaman Islands Tour Packages 2025 | Starting ₹15,000 | Book Now"
        description="#1 Andaman tour packages with 4.8★ rating. Pristine beaches, scuba diving, premium resorts & honeymoon specials. 1000+ happy travelers. Free cancellation. Book today!"
        pathname={location.pathname}
        keywords="andaman tour packages, andaman islands packages, andaman packages 2025, best andaman packages, andaman honeymoon packages, scuba diving andaman, havelock island packages, neil island tour, radhanagar beach, andaman tourism, beach vacation india, island hopping packages, andaman resorts booking, cheap andaman packages, premium andaman packages, andaman family packages, port blair tour, cellular jail visit, andaman packages from delhi, andaman packages from chennai, andaman packages from kolkata, affordable andaman tour, value for money andaman trip"
        targetAudience="all"
      />
      
      <Header />
      <Hero />
      
      {/* All content loads immediately - no delays */}
      <div className="relative z-50 bg-white">
        <FeaturedPackages />
        <Destinations />

        {/* Experiences Section */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="section-title-spacing text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-night mb-4">
                Unforgettable Experiences
              </h2>
              <p className="text-night/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Discover the best of what the Andaman Islands have to offer through our carefully curated experiences
              </p>
            </div>
            
            <div className="section-content-spacing">
              <CardSlider showDots={true} autoScroll={false}>
                {experiences.map((exp, index) => (
                  <Link key={index} to={exp.link} className="block">
                    <ExperienceCard
                      title={exp.title}
                      description={exp.description}
                      image={exp.image}
                      delay={0}
                    />
                  </Link>
                ))}
              </CardSlider>
            </div>
          </div>
        </section>

        <Testimonials />
        <InstagramFeed />
        <Newsletter />

        {/* Call to Action Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div ref={floatingIconRef} className="w-20 h-20 bg-gradient-to-br from-emerald-500 via-emerald-400 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <ArrowRight className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 heading-luxury leading-tight">
                Ready for Your <span className="text-transparent bg-gradient-to-r from-emerald-400 to-yellow-500 bg-clip-text"> Luxury Adventure?</span>
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-luxury">
                Let our expert travel consultants create a bespoke itinerary tailored to your desires. From private island retreats to exclusive cultural experiences, we craft journeys that exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/enquiry" className="btn-primary-luxury inline-flex items-center group min-w-[240px] justify-center">
                  <span>Start Planning</span>
                  <ArrowRight className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link to="/calculator" className="btn-secondary-luxury inline-flex items-center group min-w-[240px] justify-center">
                  <span>Calculate Costs</span>
                  <ArrowRight className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" />
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