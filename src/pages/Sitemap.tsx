import React from 'react';
import { motion } from 'framer-motion';
import { Map, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

interface SitemapSection {
  title: string;
  links: {
    name: string;
    path: string;
  }[];
}

const Sitemap = () => {
  const sections: SitemapSection[] = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "Travel Guide", path: "/guide" },
        { name: "Contact", path: "/contact" },
        { name: "Blog", path: "/blog" }
      ]
    },
    {
      title: "Destinations",
      links: [
        { name: "All Destinations", path: "/destinations" },
        { name: "Radhanagar Beach", path: "/destinations/radhanagar-beach" },
        { name: "Cellular Jail", path: "/destinations/cellular-jail" },
        { name: "Ross Island", path: "/destinations/ross-island" }
      ]
    },
    {
      title: "Experiences",
      links: [
        { name: "All Experiences", path: "/experiences" },
        { name: "Luxury Resorts", path: "/experiences/luxury-resorts" },
        { name: "Scuba Diving", path: "/experiences/scuba-diving" },
        { name: "Island Hopping", path: "/experiences/island-hopping" },
        { name: "Sunset Cruises", path: "/experiences/sunset-cruises" },
        { name: "Wellness Retreats", path: "/experiences/wellness-retreats" }
      ]
    },
    {
      title: "Packages",
      links: [
        { name: "All Packages", path: "/packages" },
        { name: "Luxury Island Escape", path: "/packages/luxury-island-escape" },
        { name: "Adventure Seeker", path: "/packages/adventure-seeker" },
        { name: "Family Paradise", path: "/packages/family-paradise" },
        { name: "Honeymoon Special", path: "/packages/honeymoon-special" }
      ]
    },
    {
      title: "Help & Support",
      links: [
        { name: "FAQ", path: "/faq" },
        { name: "Travel Guide", path: "/guide" },
        { name: "Price Calculator", path: "/calculator" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Sitemap"
        description="Navigate through all pages and sections of Andaman Luxury website."
      />
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-8">
              <Map className="w-8 h-8 text-azure mr-4" />
              <h1 className="text-4xl font-bold text-night">Sitemap</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h2 className="text-xl font-bold text-night mb-4">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          to={link.path}
                          className="flex items-center text-night/70 hover:text-azure transition-colors"
                        >
                          <ChevronRight className="w-4 h-4 mr-2" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sitemap;