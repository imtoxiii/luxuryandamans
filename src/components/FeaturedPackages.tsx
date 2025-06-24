import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CardSlider from './CardSlider';
import PackageCard from './PackageCard';

const FeaturedPackages = () => {
  const packages = [
    {
      title: "Luxury Island Escape",
      description: "5 nights of pure luxury at Havelock's finest resorts with world-class amenities",
      price: 125000,
      duration: "6 days",
      groupSize: "2-4",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      features: ["All-inclusive luxury resort", "Private beach access", "Spa treatments", "Fine dining"],
      slug: "luxury-island-escape"
    },
    {
      title: "Adventure Seeker",
      description: "Discover the underwater wonders and thrilling adventures of the Andamans",
      price: 85000,
      duration: "4 days",
      groupSize: "1-2",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      features: ["Professional scuba diving", "Snorkeling expeditions", "Island hopping tours", "Adventure activities"],
      slug: "adventure-seeker"
    },
    {
      title: "Family Paradise",
      description: "Perfect getaway for the whole family with activities for all ages",
      price: 150000,
      duration: "7 days",
      groupSize: "4-6",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      features: ["Kid-friendly activities", "Family suite rooms", "Guided nature tours", "Cultural experiences"],
      slug: "family-paradise"
    },
    {
      title: "Honeymoon Special",
      description: "Romantic escape for newlyweds with intimate and exclusive experiences",
      price: 175000,
      duration: "8 days",
      groupSize: "2",
      image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      features: ["Candlelit beach dinners", "Couple spa treatments", "Private beach picnic", "Romantic villa"],
      slug: "honeymoon-special"
    },
    {
      title: "Cultural Explorer",
      description: "Immerse yourself in the rich history and culture of the Andaman Islands",
      price: 95000,
      duration: "5 days",
      groupSize: "2-6",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      features: ["Historical site visits", "Local cultural experiences", "Museum tours", "Traditional dining"],
      slug: "cultural-explorer"
    }
  ];

  return (
    <section className="bg-pearl">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title-spacing text-center"
        >
                          <span className="glass-sunset-text text-sm font-bold uppercase tracking-wider mb-3 block">
            Curated Experiences
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-night mb-6">
            Featured Packages
          </h2>
          <p className="text-night/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of luxury vacation packages, 
            each crafted to provide an unforgettable Andaman experience
          </p>
        </motion.div>

        <div className="section-content-spacing">
          {/* Horizontal Scrolling Cards - Shows 3 on desktop, 2 on tablet, 1 on mobile */}
          <div className="mb-8">
            <CardSlider showDots={true} autoScroll={false}>
            {packages.map((pkg, index) => (
                <PackageCard
                key={index}
                  title={pkg.title}
                  description={pkg.description}
                  price={pkg.price}
                  duration={pkg.duration}
                  groupSize={pkg.groupSize}
                  features={pkg.features}
                  image={pkg.image}
                  slug={pkg.slug}
                  delay={index * 0.1}
                />
            ))}
          </CardSlider>
        </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
          <Link
            to="/packages"
              className="btn-primary inline-flex items-center group"
          >
            <span>View All Packages</span>
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;