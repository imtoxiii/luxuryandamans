import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Privacy Policy"
        description="Learn about how we collect, use, and protect your personal information at Andaman Luxury."
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
              <Shield className="w-8 h-8 text-azure mr-4" />
              <h1 className="text-4xl font-bold text-night">Privacy Policy</h1>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg space-y-8">
              {/* Privacy Policy sections */}
              <section>
                <h2 className="text-2xl font-bold text-night mb-4">Information We Collect</h2>
                <p className="text-night/70 mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-night/70">
                  <li>Name and contact information</li>
                  <li>Payment information</li>
                  <li>Travel preferences and history</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4">How We Use Your Information</h2>
                <p className="text-night/70 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-night/70">
                  <li>Process your bookings and payments</li>
                  <li>Communicate with you about your travel arrangements</li>
                  <li>Personalize your experience</li>
                  <li>Improve our services</li>
                </ul>
              </section>

              {/* Add more sections as needed */}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;