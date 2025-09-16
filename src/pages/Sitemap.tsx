import React from 'react';
import { motion } from 'framer-motion';
import { Map, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { packages } from '../data/packages';
import { locations } from '../data/locations';
import { blogPosts } from '../data/blog';
import { destinations as destinationData } from '../data/destinations';

interface SitemapSection {
  title: string;
  links: {
    name: string;
    path: string;
  }[];
}

const Sitemap = () => {
  const formatTitleFromSlug = (slug: string) =>
    slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());

  const experienceSlugs = [
    'luxury-resorts',
    'scuba-diving',
    'island-hopping',
    'sunset-cruises',
    'wellness-retreats',
    'romantic-getaways',
    'family-adventures',
    'bioluminescence-kayaking',
    'sea-walk',
    'game-fishing'
  ];

  const destinationLinks = [
    { name: 'All Destinations', path: '/destinations' },
    ...destinationData.map(d => ({ name: d.name, path: `/destinations/${d.slug}` }))
  ];

  const experienceLinks = [
    { name: 'All Experiences', path: '/experiences' },
    ...experienceSlugs.map(s => ({ name: formatTitleFromSlug(s), path: `/experiences/${s}` }))
  ];

  const packageLinks = [
    { name: 'All Packages', path: '/packages' },
    ...packages.map(p => ({ name: p.title, path: `/packages/${p.slug}` }))
  ];

  const locationLinks = locations.map(l => ({ name: l.name, path: `/locations/${l.slug}` }));

  const blogLinks = [
    { name: 'Blog Home', path: '/blog' },
    ...blogPosts.map(p => ({ name: p.title, path: `/blog/${p.slug}` }))
  ];

  const sections: SitemapSection[] = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "Travel Guide", path: "/guide" },
        { name: "Contact", path: "/contact" },
        { name: "Price Calculator", path: "/calculator" },
        { name: "FAQ", path: "/faq" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" }
      ]
    },
    {
      title: "Destinations",
      links: destinationLinks
    },
    {
      title: "Experiences",
      links: experienceLinks
    },
    {
      title: "Packages",
      links: packageLinks
    },
    {
      title: "Locations",
      links: locationLinks
    },
    {
      title: "Blog Posts",
      links: blogLinks
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