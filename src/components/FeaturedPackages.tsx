
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CardSlider from './CardSlider';
import PackageCard from './PackageCard';
import SectionIntro from './SectionIntro';

const featuredPackagesItemsPerView = (width: number) => (width >= 768 ? 3 : 1);

const FeaturedPackages = () => {
  const packages = [
    {
      title: "Luxury Island Escape",
      description: "Ultra-luxury 7-day experience with 5-star resorts, premium activities, and personalized service",
      price: 96999,
      duration: "7 days",
      groupSize: "2-4",
      image: "/images/packages/luxury-escape/hero/hero.jpg",
      features: ["5-star luxury resorts", "Premium scuba diving", "Private transfers", "Gourmet dining"],
      slug: "luxury-island-escape-7-days",
      id: "luxury-escape"
    },
    {
      title: "Luxury Adventure",
      description: "Experience premium luxury in a compact 5-day package with exclusive water activities",
      price: 74999,
      duration: "5 days",
      groupSize: "2",
      image: "/images/packages/luxury-4n5d/hero.jpg",
      features: ["Premium scuba diving", "Private beach access", "Spa treatments", "5-star accommodation"],
      slug: "luxury-escape-4n5d-premium",
      id: "luxury-4n5d"
    },
    {
      title: "Family Paradise",
      description: "Perfect family vacation with kid-friendly activities, comfortable accommodations, and fun for all ages",
      price: 36999,
      duration: "6 days",
      groupSize: "4-6",
      image: "/images/packages/family-paradise/hero.jpg",
      features: ["Kid-friendly activities", "Family rooms", "Safe water sports", "Educational experiences"],
      slug: "family-paradise-6-days",
      id: "family-paradise"
    },
    {
      title: "Honeymoon Special",
      description: "Perfect 5 nights 6 days romantic itinerary with time-optimized schedule for couples",
      price: 44999,
      duration: "6 days",
      groupSize: "2",
      image: "/images/packages/honeymoon-5n6d/hero/hero.jpg",
      features: ["Candlelit beach dinners", "Couple spa treatments", "Private beach picnic", "Romantic villa"],
      slug: "5n6d-andaman-time-mapped-honeymoon",
      id: "honeymoon-5n6d"
    },
    {
      title: "Standard Andaman",
      description: "Budget-friendly complete Andaman tour covering all major attractions",
      price: 29999,
      duration: "6 days",
      groupSize: "2-6",
      image: "/images/packages/standard-andaman/hero.jpg",
      features: ["All major islands covered", "Essential water activities", "Comfortable hotels", "Complete sightseeing"],
      slug: "standard-andaman-package-5n6d",
      id: "standard-andaman"
    }
  ].sort((a, b) => a.price - b.price);

  return (
    <div className="relative">
      <div className="container mx-auto px-4">
        <SectionIntro title="Featured" script="Packages">
          Sorted by price — swipe for the rest.
        </SectionIntro>

        <div className="relative">
          <div className="mb-5">
            <CardSlider
              showDots={true}
              autoScroll={false}
              getItemsPerView={featuredPackagesItemsPerView}
            >
              {packages.map((pkg, index) => (
                <PackageCard
                  key={pkg.slug}
                  title={pkg.title}
                  description={pkg.description}
                  price={pkg.price}
                  duration={pkg.duration}
                  groupSize={pkg.groupSize}
                  features={pkg.features}
                  image={pkg.image}
                  slug={pkg.slug}
                  id={pkg.id}
                  delay={index * 0.1}
                  reverse={index % 2 === 1}
                />
              ))}
            </CardSlider>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 rounded-full bg-[#0a2740] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#041018]"
            >
              View all packages
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPackages;