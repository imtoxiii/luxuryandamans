import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, AlertCircle, CreditCard, CalendarX, Gavel, Umbrella } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Terms = () => {
  return (
    <div className="min-h-screen bg-pearl">
      <SEO
        title="Terms and Conditions"
        description="Terms and Conditions for booking tours and travel packages with Luxury Andamans."
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
                <FileCheck className="w-8 h-8 mr-3" />
                <h1 className="text-3xl font-bold">Terms & Conditions</h1>
              </div>
              <p className="text-white/90">Effective Date: November 26, 2025</p>
            </div>

            <div className="p-8 space-y-8 text-night/80">
              <section>
                <h2 className="text-2xl font-bold text-night mb-4 flex items-center">
                  <CreditCard className="w-6 h-6 text-azure mr-2" />
                  1. Booking & Payment Policy
                </h2>
                <p className="mb-4">
                  To confirm your booking with Luxury Andamans, the following payment schedule applies:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Advance Payment:</strong> 50% of the total tour cost is required at the time of booking to block rooms and ferries.</li>
                  <li><strong>Balance Payment:</strong> The remaining 50% must be cleared 15 days prior to the arrival date.</li>
                  <li><strong>Last Minute Bookings:</strong> For bookings made within 15 days of travel, 100% payment is required at the time of confirmation.</li>
                  <li><strong>Peak Season:</strong> For travel between Dec 15 and Jan 15, 100% payment is required 30 days in advance.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4 flex items-center">
                  <CalendarX className="w-6 h-6 text-azure mr-2" />
                  2. Cancellation & Refund Policy
                </h2>
                <div className="bg-pearl p-6 rounded-lg border border-sand/20">
                  <p className="mb-4 font-semibold">Standard Cancellation Charges:</p>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center border-b border-sand/10 pb-2">
                      <span>30 days or more before arrival</span>
                      <span className="font-bold text-green-600">Full Refund (minus processing fee)</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-sand/10 pb-2">
                      <span>15 to 29 days before arrival</span>
                      <span className="font-bold text-orange-500">50% Refund</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-sand/10 pb-2">
                      <span>7 to 14 days before arrival</span>
                      <span className="font-bold text-red-500">25% Refund</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Less than 7 days before arrival</span>
                      <span className="font-bold text-red-700">No Refund</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-sm bg-white p-4 rounded border border-sand/20">
                    <p className="font-bold mb-1">Important Notes:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Ferry tickets (Makruzz/Nautika) are non-refundable if cancelled within 48 hours of travel.</li>
                      <li>Peak season bookings (Dec 15 - Jan 15) are non-refundable if cancelled within 30 days of travel.</li>
                      <li>Refunds will be processed within 7-10 working days.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4 flex items-center">
                  <Umbrella className="w-6 h-6 text-azure mr-2" />
                  3. Force Majeure & Weather Disruptions
                </h2>
                <p className="mb-4">
                  The Andaman Islands are subject to tropical weather conditions. Luxury Andamans shall not be liable for any changes or cancellations due to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Ferry Cancellations:</strong> If private ferries are cancelled due to weather, we will attempt to arrange Govt ferry or reschedule. Any additional stay cost due to being stranded on an island will be borne by the guest.</li>
                  <li><strong>Activity Cancellations:</strong> Water sports are subject to weather clearance. If an activity is cancelled by the operator, a full refund for that specific activity will be provided.</li>
                  <li><strong>Itinerary Changes:</strong> We reserve the right to modify the itinerary for safety reasons. Unused services due to weather/force majeure are non-refundable.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 text-azure mr-2" />
                  4. Guest Responsibilities
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>ID Proof:</strong> Valid government ID (Aadhaar/Passport/Voter ID) is mandatory for all guests. PAN cards are NOT accepted.</li>
                  <li><strong>Foreign Nationals:</strong> Must carry a valid Passport and Indian Visa. Restricted Area Permit (RAP) is not required for standard tourist islands.</li>
                  <li><strong>Conduct:</strong> Guests are expected to respect local culture and environment. Collection of corals or shells is strictly prohibited and punishable by law.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4 flex items-center">
                  <Gavel className="w-6 h-6 text-azure mr-2" />
                  5. Jurisdiction
                </h2>
                <p className="mb-4">
                  Any disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts in Port Blair, Andaman & Nicobar Islands.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;