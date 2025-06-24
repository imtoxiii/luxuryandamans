import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Packages', href: '/packages' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const destinations = [
    { name: 'Havelock Island', href: '/destinations/havelock' },
    { name: 'Neil Island', href: '/destinations/neil' },
    { name: 'Port Blair', href: '/destinations/port-blair' },
    { name: 'Ross Island', href: '/destinations/ross' },
    { name: 'Barren Island', href: '/destinations/barren' }
  ];

  const experiences = [
    { name: 'Scuba Diving', href: '/experiences/scuba-diving' },
    { name: 'Island Hopping', href: '/experiences/island-hopping' },
    { name: 'Beach Activities', href: '/experiences/beach-activities' },
    { name: 'Water Sports', href: '/experiences/water-sports' },
    { name: 'Sunset Cruises', href: '/experiences/sunset-cruises' }
  ];

  return (
    <footer className="bg-night text-pearl">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Luxury Andamans</h3>
            <p className="text-pearl/80 mb-6">
              Your gateway to the most exclusive experiences in the Andaman Islands.
              Discover paradise with our curated luxury travel services.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="w-10 h-10 rounded-full bg-azure/10 flex items-center justify-center hover:bg-azure/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link to="#" className="w-10 h-10 rounded-full bg-azure/10 flex items-center justify-center hover:bg-azure/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="#" className="w-10 h-10 rounded-full bg-azure/10 flex items-center justify-center hover:bg-azure/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-pearl/80 hover:text-pearl transition-colors inline-flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Popular Destinations</h4>
            <ul className="space-y-3">
              {destinations.map((dest, index) => (
                <li key={index}>
                  <Link 
                    to={dest.href} 
                    className="text-pearl/80 hover:text-pearl transition-colors inline-flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <Link to="tel:+919876543210" className="flex items-start text-pearl/80 hover:text-pearl transition-colors">
                  <Phone className="w-5 h-5 mr-3 mt-1 glass-sunset-text" />
                  <div>
                    <p>+91 987 654 3210</p>
                    <p className="text-sm text-pearl/60">Mon-Sat 9:00-18:00</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="mailto:info@andamanluxury.com" className="flex items-start text-pearl/80 hover:text-pearl transition-colors">
                  <Mail className="w-5 h-5 mr-3 mt-1 glass-sunset-text" />
                  <div>
                    <p>info@andamanluxury.com</p>
                    <p className="text-sm text-pearl/60">24/7 Online Support</p>
                  </div>
                </Link>
              </li>
              <li className="flex items-start text-pearl/80">
                <MapPin className="w-5 h-5 mr-3 mt-1 glass-sunset-text" />
                <div>
                  <p>Marine Hill Road, Port Blair</p>
                  <p className="text-sm text-pearl/60">Andaman & Nicobar Islands</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-azure/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-pearl/60 text-sm">
              © 2025 Luxury Andamans. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-pearl/60 hover:text-pearl text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-pearl/60 hover:text-pearl text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-pearl/60 hover:text-pearl text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;