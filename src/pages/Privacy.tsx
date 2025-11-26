import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Server, UserCheck, Bell } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-pearl">
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Luxury Andamans - How we collect, use, and protect your personal information in compliance with the Digital Personal Data Protection Act, 2023."
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
              <p className="text-white/90">Last Updated: November 26, 2025</p>
              <p className="text-sm text-white/80 mt-2">Compliant with Digital Personal Data Protection Act, 2023</p>
            </div>

            <div className="p-8 space-y-8 text-night/80">
              <section>
                <h2 className="text-2xl font-bold text-night mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-azure mr-2" />
                  1. Information We Collect
                </h2>
                <p className="mb-4">
                  At Luxury Andamans, we collect personal data necessary to provide you with seamless travel services. We are committed to transparency in our data collection practices.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Identity Data:</strong> Name, gender, date of birth, and government-issued ID details (Aadhaar/Passport) required for ferry bookings and restricted area permits.</li>
                  <li><strong>Contact Data:</strong> Email address, phone number, and residential address.</li>
                  <li><strong>Travel Data:</strong> Flight details, accommodation preferences, dietary requirements, and special requests (e.g., honeymoon arrangements, accessibility needs).</li>
                  <li><strong>Financial Data:</strong> Payment transaction details. <em>Note: We do not store complete credit/debit card numbers. All payments are processed through secure, PCI-DSS compliant gateways.</em></li>
                  <li><strong>Technical Data:</strong> IP address, browser type, and device information when you interact with our website.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-azure mr-2" />
                  2. Purpose of Data Processing
                </h2>
                <p className="mb-4">
                  We process your personal data for the following specific purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Fulfillment:</strong> To book hotels, ferries, water sports, and arrange transport. ID proofs are mandatory for ferry tickets and hotel check-ins in Andaman.</li>
                  <li><strong>Legal Compliance:</strong> To obtain necessary permits from the Andaman Administration for visiting restricted islands or protected areas.</li>
                  <li><strong>Communication:</strong> To send booking confirmations, itinerary updates, weather alerts, and ferry schedule changes.</li>
                  <li><strong>Safety & Emergency:</strong> To assist in case of medical emergencies or natural disasters during your trip.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4 flex items-center">
                  <Server className="w-6 h-6 text-azure mr-2" />
                  3. Data Sharing & Disclosure
                </h2>
                <p className="mb-4">
                  We value your privacy and do not sell your data. However, we must share specific data with trusted third parties to execute your trip:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> Hotels, private ferry operators (Makruzz, Nautika, etc.), and vehicle fleet operators.</li>
                  <li><strong>Government Authorities:</strong> Directorate of Shipping Services, Forest Department, and Police for permits and security clearances as mandated by local laws.</li>
                  <li><strong>Legal Requirements:</strong> If required by law or to protect our rights and safety.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-azure mr-2" />
                  4. Data Security & Retention
                </h2>
                <p className="mb-4">
                  We implement robust technical and organizational measures to protect your data.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Security:</strong> Data is stored on secure, encrypted servers. Access is restricted to authorized personnel only.</li>
                  <li><strong>Retention:</strong> We retain your personal data only as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4 flex items-center">
                  <UserCheck className="w-6 h-6 text-azure mr-2" />
                  5. Your Rights (Data Principal Rights)
                </h2>
                <p className="mb-4">
                  Under the Digital Personal Data Protection Act, 2023, you have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right to Access:</strong> Request a summary of your personal data being processed.</li>
                  <li><strong>Right to Correction:</strong> Request correction of inaccurate or misleading personal data.</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
                  <li><strong>Right to Grievance Redressal:</strong> Register a complaint regarding our data processing activities.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4 flex items-center">
                  <Bell className="w-6 h-6 text-azure mr-2" />
                  6. Contact & Grievance Redressal
                </h2>
                <p className="mb-4">
                  For any privacy-related concerns or to exercise your rights, please contact our Grievance Officer:
                </p>
                <div className="bg-pearl p-6 rounded-lg border border-sand/20">
                  <p className="font-bold text-lg mb-2">Grievance Officer</p>
                  <p><strong>Email:</strong> privacy@luxuryandamans.com</p>
                  <p><strong>Phone:</strong> +91 99332 15764</p>
                  <p><strong>Address:</strong> Luxury Andamans, Aberdeen Bazaar, Port Blair, Andaman & Nicobar Islands - 744101</p>
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
