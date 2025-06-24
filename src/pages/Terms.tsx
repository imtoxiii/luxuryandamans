import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Terms = () => {
  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Terms of Service"
        description="Read our terms of service and understand your rights and responsibilities when using Andaman Luxury services."
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
              <FileText className="w-8 h-8 text-azure mr-4" />
              <h1 className="text-4xl font-bold text-night">Terms of Service</h1>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg space-y-8">
              {/* Terms of Service sections */}
              <section>
                <h2 className="text-2xl font-bold text-night mb-4">Acceptance of Terms</h2>
                <p className="text-night/70">
                  By accessing and using our services, you agree to be bound by these terms and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4">Booking and Cancellation</h2>
                <ul className="list-disc pl-6 space-y-2 text-night/70">
                  <li>All bookings are subject to availability</li>
                  <li>Cancellations must be made at least 7 days in advance</li>
                  <li>Refunds are processed within 5-7 business days</li>
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

export default Terms;