import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { staggerContainer, fadeInUp } from '../lib/animations';

const experiences = [
  {
    title: "Luxury Beach Resorts",
    description: "Experience world-class hospitality in paradise",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "luxury-resorts"
  },
  {
    title: "Scuba Diving",
    description: "Explore vibrant coral reefs and marine life",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "scuba-diving"
  },
  {
    title: "Island Hopping",
    description: "Discover hidden beaches and secluded coves",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "island-hopping"
  },
  {
    title: "Sunset Cruises",
    description: "Unforgettable evenings on the Andaman Sea",
    image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "sunset-cruises"
  },
  {
    title: "Wellness Retreats",
    description: "Rejuvenate your mind, body, and soul",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "wellness-retreats"
  },
  {
    title: "Romantic Getaways",
    description: "Create unforgettable memories with your loved one",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "romantic-getaways"
  },
  {
    title: "Family Adventures",
    description: "Fun-filled activities for the whole family",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "family-adventures"
  }
];

const ExperiencesPage = () => {
  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Luxury Experiences"
        description="Discover unforgettable luxury experiences in the Andaman Islands. From scuba diving to sunset cruises, create lasting memories with our curated activities."
        keywords="andaman experiences, luxury activities, scuba diving, island hopping, sunset cruises, wellness retreats"
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Andaman Experiences"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/60 to-night/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-pearl mb-6"
            >
              Unforgettable Experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-pearl/90"
            >
              Create lasting memories with our curated activities
            </motion.p>
          </div>
        </div>
      </div>

      {/* Experiences Grid */}
      <motion.section
        variants={staggerContainer(0.1, 0.3)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-night mb-12 text-center">Our Experiences</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.slug}
                variants={fadeInUp}
              >
                <Link 
                  to={`/experiences/${exp.slug}`}
                  className="block bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-night/20 group-hover:bg-night/40 transition-all duration-500 z-10" />
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-night mb-2">{exp.title}</h3>
                    <p className="text-night/70">{exp.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ExperiencesPage;