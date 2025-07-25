import React, { useRef, useEffect } from 'react';
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
import { gsap } from 'gsap';

const Footer = () => {
  const quickLinks = [
          { name: 'Travel Guide', href: '/guide' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Packages', href: '/packages' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const destinations = [
    { name: 'Havelock Island', href: '/destinations/radhanagar-beach' },
    { name: 'Neil Island', href: '/destinations/bharatpur-beach' },
    { name: 'Port Blair', href: '/destinations/cellular-jail' },
    { name: 'Ross Island', href: '/destinations/ross-island' },
    { name: 'Barren Island', href: '/destinations/barren-island' }
  ];

  const experiences = [
    { name: 'Scuba Diving', href: '/experiences/scuba-diving' },
    { name: 'Island Hopping', href: '/experiences/island-hopping' },
    { name: 'Luxury Resorts', href: '/experiences/luxury-resorts' },
    { name: 'Wellness Retreats', href: '/experiences/wellness-retreats' },
    { name: 'Sunset Cruises', href: '/experiences/sunset-cruises' }
  ];

  const gradientTextRef = useRef(null);

  useEffect(() => {
    if (gradientTextRef.current) {
      gsap.to(gradientTextRef.current, {
        backgroundPosition: "200% center",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 3
      });
    }
  }, []);

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
            <h3 ref={gradientTextRef} className="text-2xl font-bold mb-6 bg-gradient-to-r from-azure via-lagoon to-azure bg-clip-text text-transparent" style={{ backgroundSize: '200% auto' }}>Luxury Andamans</h3>
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
                <div className="space-y-2">
                  <Link to="tel:+916297576826" className="flex items-start text-pearl/80 hover:text-pearl transition-colors">
                    <Phone className="w-5 h-5 mr-3 mt-1 glass-sunset-text" />
                    <div>
                      <p>+91 6297576826</p>
                      <p className="text-sm text-pearl/60">Primary Contact</p>
                    </div>
                  </Link>
                  <Link to="tel:+919433731478" className="flex items-start text-pearl/80 hover:text-pearl transition-colors ml-8">
                    <div>
                      <p>+91 9433731478</p>
                      <p className="text-sm text-pearl/60">Mon-Sat 9:00-18:00</p>
                    </div>
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <Mail className="text-accent-gold mt-1.5" size={20} />
                  <div>
                    <p className="font-bold text-pearl mb-1 text-lg">Email Us</p>
                    <Link to="mailto:info@luxuryandamans.com" className="flex items-start text-pearl/80 hover:text-pearl transition-colors">
                      <div className="ml-0">
                        <p>info@luxuryandamans.com</p>
                      </div>
                    </Link>
                  </div>
                </div>
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