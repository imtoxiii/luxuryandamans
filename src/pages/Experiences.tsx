import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { staggerContainer, fadeInUp } from '../lib/animations';
import { ChevronRight } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Luxury Experiences"
        description="Discover unforgettable luxury experiences in the Andaman Islands. From scuba diving to sunset cruises, create lasting memories with our curated activities."
        keywords="andaman experiences, luxury activities, scuba diving, island hopping, sunset cruises, wellness retreats"
      />
      <Header />
      
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-cyan-500 text-white pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center text-sm text-blue-200 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={16} className="mx-1" />
              <span className="font-semibold text-white">Experiences</span>
          </div>
            <h1 className="text-4xl md:text-5xl font-bold">Unforgettable Experiences</h1>
            <p className="mt-2 text-lg text-blue-100 max-w-2xl">Dive into adventure, relax in style, and create memories that last a lifetime.</p>
          </motion.div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp) => (
              <motion.div
                key={exp.slug}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                <div className="relative h-48 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                   <div className="absolute bottom-3 left-3 right-3 z-20">
                    <h3 className="text-white font-bold text-xl mb-1 leading-tight">{exp.title}</h3>
                  </div>
                </div>
                
                <div className="p-4 flex flex-col">
                  <p className="text-gray-600 text-sm mb-4 flex-grow h-10 line-clamp-2">{exp.description}</p>
                  <div className="mt-4">
                    <Link
                      to={`/experiences/${exp.slug}`}
                      className="w-full block text-center py-2.5 bg-gradient-to-r from-azure to-blue-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
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