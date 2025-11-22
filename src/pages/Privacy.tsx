import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-pearl">
      <SEO 
        title="Privacy Policy"
        description="Privacy Policy for Luxury Andamans - How we collect, use, and protect your personal information."
      />
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="bg-azure p-8 text-white">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 mr-3" />
                <h1 className="text-3xl font-bold">Privacy Policy</h1>
              </div>
              <p className="text-white/90">Last Updated: November 22, 2025</p>
            </div>

            <div className="p-8 space-y-8 text-night/80">
              <section>
                <h2 className="text-2xl font-bold text-night mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-azure mr-2" />
                  1. Information We Collect
                </h2>
                <p className="mb-4">
                  At Luxury Andamans, we collect information to provide you with the best possible travel experience. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and government-issued ID (for permits and ferry bookings).</li>
                  <li><strong>Travel Details:</strong> Flight schedules, accommodation preferences, dietary requirements, and special requests.</li>
                  <li><strong>Payment Information:</strong> Transaction details and payment history (we do not store complete credit card numbers).</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, and device information when you visit our website.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-azure mr-2" />
                  2. How We Use Your Information
                </h2>
                <p className="mb-4">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Booking & Reservations:</strong> To book hotels, ferries, activities, and secure necessary permits for your Andaman trip.</li>
                  <li><strong>Communication:</strong> To send booking confirmations, itinerary updates, and important travel alerts.</li>
                  <li><strong>Customer Support:</strong> To assist you before, during, and after your trip.</li>
                  <li><strong>Legal Compliance:</strong> To comply with local regulations regarding tourism in the Andaman & Nicobar Islands.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-azure mr-2" />
                  3. Data Protection & Security
                </h2>
                <p className="mb-4">
                  We implement robust security measures to protect your personal data. Your information is stored on secure servers, and access is restricted to authorized personnel only. We do not sell your personal information to third parties.
                </p>
                <p>
                  We may share necessary details with trusted partners (hotels, ferry operators, transport providers) solely for the purpose of fulfilling your travel arrangements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4">4. Cookies and Tracking</h2>
                <p className="mb-4">
                  Our website uses cookies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4">5. Your Rights</h2>
                <p className="mb-4">
                  You have the right to access, correct, or request deletion of your personal data. If you wish to exercise these rights, please contact our privacy team.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4">6. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-pearl p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@luxuryandamans.com</p>
                  <p><strong>Phone:</strong> +91 99332 15764</p>
                  <p><strong>Address:</strong> Port Blair, Andaman & Nicobar Islands, India</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
