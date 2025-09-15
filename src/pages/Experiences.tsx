import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { staggerContainer, fadeInUp } from '../lib/animations';
import { ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: "Luxury Beach Resorts",
    description: "Experience world-class hospitality in paradise",
    // localImage: '/src/assets/images/experiences/luxury-resorts.jpg', // Add your local image path here
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "luxury-resorts"
  },
  {
    title: "Scuba Diving",
    description: "Explore vibrant coral reefs and marine life",
    // localImage: '/src/assets/images/experiences/scuba-diving.jpg', // Add your local image path here
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "scuba-diving"
  },
  {
    title: "Island Hopping",
    description: "Discover hidden beaches and secluded coves",
    // localImage: '/src/assets/images/experiences/island-hopping.jpg', // Add your local image path here
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "island-hopping"
  },
  {
    title: "Sunset Cruises",
    description: "Unforgettable evenings on the Andaman Sea",
    // localImage: '/src/assets/images/experiences/sunset-cruises.jpg', // Add your local image path here
    image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "sunset-cruises"
  },
  {
    title: "Wellness Retreats",
    description: "Rejuvenate your mind, body, and soul",
    // localImage: '/src/assets/images/experiences/wellness-retreats.jpg', // Add your local image path here
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "wellness-retreats"
  },
  {
    title: "Romantic Getaways",
    description: "Create unforgettable memories with your loved one",
    // localImage: '/src/assets/images/experiences/romantic-getaways.jpg', // Add your local image path here
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "romantic-getaways"
  },
  {
    title: "Family Adventures",
    description: "Fun-filled activities for the whole family",
    // localImage: '/src/assets/images/experiences/family-adventures.jpg', // Add your local image path here
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "family-adventures"
  },
  {
    title: "Bioluminescence Kayaking",
    description: "Paddle through glowing waters on new moon nights",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "bioluminescence-kayaking"
  },
  {
    title: "Sea Walk",
    description: "Walk on the sea bed—perfect for non-swimmers",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "sea-walk"
  },
  {
    title: "Game Fishing",
    description: "Private charters targeting GT, tuna and more",
    image: "https://images.unsplash.com/photo-1469230529682-4b4f7572a2fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    slug: "game-fishing"
  }
];

const ExperiencesPage = () => {
  const location = useLocation();

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${import.meta.env.VITE_SITE_URL || 'https://luxuryandamans.com'}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Experiences',
        item: `${import.meta.env.VITE_SITE_URL || 'https://luxuryandamans.com'}${location.pathname}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Unique Experiences"
        description="Discover extraordinary experiences in the Andaman Islands. From luxury resorts and scuba diving to romantic getaways and family adventures."
        pathname={location.pathname}
        keywords="andaman experiences, scuba diving, luxury resorts, island hopping, sunset cruises, wellness retreats"
        extraStructuredData={[breadcrumbStructuredData]}
      />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden bg-gradient-to-r from-azure to-blue-600">
        {/* 
        OPTIONAL: Add hero background image
        <div className="absolute inset-0">
          <img 
            src={localImages.heroBackground}
            alt="Andaman Experiences"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-night/40 to-night/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-pearl"
            >
              <div className="flex items-center justify-center text-sm text-pearl/80 mb-4">
                <Link to="/" className="hover:text-pearl transition-colors">Home</Link>
                <ChevronRight size={16} className="mx-1" />
                <span className="font-semibold text-pearl">Experiences</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Unforgettable Experiences
              </h1>
              <p className="text-lg md:text-xl text-pearl/90 max-w-2xl mx-auto">
                Discover the magic of the Andaman Islands through carefully curated experiences
              </p>
            </motion.div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <motion.div
                key={experience.slug}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <Link to={`/experiences/${experience.slug}`}>
                  <div className="relative h-64 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent z-10" />
                    {/* 
                    TO USE LOCAL IMAGES:
                    1. Save your images to: src/assets/images/experiences/
                    2. Uncomment the line below and replace 'experience.localImage' with your local path
                    3. Comment out or remove the fallback image below
                    
                    <img
                      src={experience.localImage}
                      alt={experience.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    */}
                    
                    {/* FALLBACK ONLINE IMAGE - Remove when adding local images */}
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className="text-xl font-bold text-pearl mb-2 leading-tight">
                        {experience.title}
                      </h3>
                      <p className="text-pearl/90 text-sm leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
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