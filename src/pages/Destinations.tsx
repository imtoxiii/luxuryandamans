import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { staggerContainer, fadeInUp } from '../lib/animations';

const DestinationsPage = () => {
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
        name: 'Destinations',
        item: `${import.meta.env.VITE_SITE_URL || 'https://luxuryandamans.com'}${location.pathname}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Luxury Destinations"
        description="Explore the most beautiful destinations in the Andaman Islands. Discover pristine beaches, crystal-clear waters, and exclusive resorts across Havelock, Neil Island, and more."
        pathname={location.pathname}
        keywords="andaman destinations, havelock island, neil island, port blair, Honeymoon destinations, luxury resorts, beach destinations"
        extraStructuredData={[breadcrumbStructuredData]}
      />
      <Header />
      
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-cyan-500 text-white pt-24 pb-12 md:pt-28 md:pb-16">
        {/* 
        OPTIONAL: Add background image
        <div className="absolute inset-0">
          <img 
            src={localImages.heroBackground}
            alt="Andaman Destinations"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        */}
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center text-sm text-blue-200 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={16} className="mx-1" />
              <span className="font-semibold text-white">Destinations</span>
          </div>
            <h1 className="text-4xl md:text-5xl font-bold">Explore Our Islands</h1>
            <p className="mt-2 text-lg text-blue-100 max-w-2xl">From bustling capitals to serene, untouched beaches, find your paradise.</p>
          </motion.div>
        </div>
      </div>

      {/* Destinations Grid */}
      <motion.section
        variants={staggerContainer(0.1, 0.2)}
        initial="initial"
        animate="animate"
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <motion.div
                key={dest.slug}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                <div className="relative h-48 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    {/* 
                    NOTE: Destination images come from the destinations data file.
                    To use local images for destinations, update the image URLs in:
                    src/data/destinations.ts
                    
                    Example:
                    - Save images to: src/assets/images/destinations/
                    - Update image paths in destinations.ts from:
                      image: "https://images.unsplash.com/..."
                    - To:
                      image: "/src/assets/images/destinations/cellular-jail.jpg"
                      
                    Each destination also has gallery images and highlight images
                    that should be updated in the same manner.
                    */}
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  <div className="absolute bottom-3 left-3 right-3 z-20">
                    <h3 className="text-white font-bold text-xl mb-1 leading-tight">{dest.name}</h3>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4 h-10 line-clamp-2">{dest.description}</p>

                  <div className="space-y-1 mb-4">
                    {dest.activities.slice(0, 2).map((activity, i) => (
                      <div key={i} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                        <span className="text-xs">{activity}</span>
                        </div>
                      ))}
                    {dest.activities.length > 2 && (
                       <div className="text-xs text-cyan-500 font-medium">
                        +{dest.activities.length - 2} more activities
                    </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <Link
                      to={`/destinations/${dest.slug}`}
                      className="w-full block text-center py-2.5 bg-gradient-to-r from-azure to-blue-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium"
                    >
                      Explore Destination
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

export default DestinationsPage;