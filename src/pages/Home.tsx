import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ExperienceCard from '../components/ExperienceCard';
import WeatherWidget from '../components/WeatherWidget';
import Destinations from '../components/Destinations';
import FeaturedPackages from '../components/FeaturedPackages';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import CardSlider from '../components/CardSlider';
import { staggerContainer, fadeInUp } from '../lib/animations';

const Home = () => {
  const experiences = [
    {
      title: "Luxury Beach Resorts",
      description: "Experience world-class hospitality in paradise",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/experiences/luxury-beach-resorts"
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
        title="Luxury Travel Experiences in Andaman Islands"
        description="Experience the ultimate luxury travel in the Andaman Islands with our curated packages, private beach resorts, and exclusive experiences. Book your dream vacation today."
        keywords="luxury travel, andaman islands, beach resorts, island hopping, scuba diving, private beaches, luxury accommodation"
      />
      
      <Header />
      
      {/* Hero component now contains its own content area */}
      <Hero />
      
      {/* Additional page content sections - these will appear after the hero animation */}
      <div className="relative z-50 bg-white">
        {/* Experiences Section */}
        <motion.section 
          variants={staggerContainer(0.2, 0.5)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white py-16"
        >
          <div className="container">
            <motion.div
              variants={fadeInUp}
              className="section-title-spacing text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-night mb-4">
                Unforgettable Experiences
              </h2>
              <p className="text-night/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Discover the best of what the Andaman Islands have to offer through our carefully curated experiences
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="section-content-spacing">
              <CardSlider showDots={true} autoScroll={false}>
                {experiences.map((exp, index) => (
                  <Link key={index} to={exp.link} className="block">
                    <ExperienceCard
                      title={exp.title}
                      description={exp.description}
                      image={exp.image}
                      delay={index * 0.1}
                    />
                  </Link>
                ))}
              </CardSlider>
            </motion.div>
          </div>
        </motion.section>

        {/* Destinations Section */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white"
        >
          <Destinations />
        </motion.div>

        {/* Featured Packages Section */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white"
        >
          <FeaturedPackages />
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white"
        >
          <Testimonials />
        </motion.div>

        {/* Instagram Feed Section */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white"
        >
          <InstagramFeed />
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white"
        >
          <Newsletter />
        </motion.div>

        {/* Call to Action Section */}
        <motion.section 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="relative py-12 md:py-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 via-emerald-400 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl float-animation">
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
        </motion.section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;