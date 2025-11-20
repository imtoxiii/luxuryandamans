
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import CardSlider from './CardSlider';
import PackageCard from './PackageCard';

const FeaturedPackages = () => {
  const packages = [
    {
      title: "Luxury Island Escape",
      description: "Ultra-luxury 7-day experience with 5-star resorts, premium activities, and personalized service",
      price: 85000,
      duration: "7 days",
      groupSize: "2-4",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      features: ["5-star luxury resorts", "Premium scuba diving", "Private transfers", "Gourmet dining"],
      slug: "luxury-island-escape-7-days"
    },
    {
      title: "Luxury Adventure",
      description: "Experience premium luxury in a compact 5-day package with exclusive water activities",
      price: 65000,
      duration: "5 days",
      groupSize: "2",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      features: ["Premium scuba diving", "Private beach access", "Spa treatments", "5-star accommodation"],
      slug: "luxury-escape-4n5d-premium"
    },
    {
      title: "Family Paradise",
      description: "Perfect family vacation with kid-friendly activities, comfortable accommodations, and fun for all ages",
      price: 32000,
      duration: "6 days",
      groupSize: "4-6",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      features: ["Kid-friendly activities", "Family rooms", "Safe water sports", "Educational experiences"],
      slug: "family-paradise-6-days"
    },
    {
      title: "Honeymoon Special",
      description: "Perfect 5 nights 6 days romantic itinerary with time-optimized schedule for couples",
      price: 38000,
      duration: "6 days",
      groupSize: "2",
      image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      features: ["Candlelit beach dinners", "Couple spa treatments", "Private beach picnic", "Romantic villa"],
      slug: "5n6d-andaman-time-mapped-honeymoon"
    },
    {
      title: "Standard Andaman",
      description: "Budget-friendly complete Andaman tour covering all major attractions",
      price: 25000,
      duration: "6 days",
      groupSize: "2-6",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      features: ["All major islands covered", "Essential water activities", "Comfortable hotels", "Complete sightseeing"],
      slug: "standard-andaman-package-5n6d"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-blue-600 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 fill-blue-600" />
            <span className="text-sm font-bold tracking-wide uppercase">Curated Experiences</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-display tracking-tight">
            Featured Packages
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Discover our handpicked selection of luxury vacation packages,
            each crafted to provide an unforgettable Andaman experience.
          </p>
        </motion.div>

        <div className="relative">
          {/* Horizontal Scrolling Cards - Shows 3 on desktop, 2 on tablet, 1 on mobile */}
          <div className="mb-12">
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
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link
              to="/packages"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-xl group"
            >
              <span>View All Packages</span>
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPackages;