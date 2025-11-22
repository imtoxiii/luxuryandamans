import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, AlertCircle, CreditCard, CalendarX } from 'lucide-react';
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
              <p className="text-white/90">Effective Date: November 22, 2025</p>
            </div>

            <div className="p-8 space-y-8 text-night/80">
              <section>
                <h2 className="text-2xl font-bold text-night mb-4">1. Booking & Confirmation</h2>
                <p className="mb-4">
                  By booking a tour or package with Luxury Andamans, you agree to these terms. A booking is considered confirmed only after the receipt of the advance payment and issuance of a booking confirmation email.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Advance payment of 50% is required to secure bookings.</li>
                  <li>Balance payment must be cleared 15 days prior to arrival.</li>
                  <li>For bookings made within 15 days of travel, 100% payment is required.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4 flex items-center">
                  <CalendarX className="w-6 h-6 text-azure mr-2" />
                  2. Cancellation & Refund Policy
                </h2>
                <div className="bg-pearl p-6 rounded-lg border border-sand/20">
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>30 days or more before arrival:</span>
                      <span className="font-bold text-night">90% Refund</span>
                    </li>
                    <li className="flex justify-between">
                      <span>15 to 29 days before arrival:</span>
                      <span className="font-bold text-night">50% Refund</span>
                    </li>
                    <li className="flex justify-between">
                      <span>7 to 14 days before arrival:</span>
                      <span className="font-bold text-night">25% Refund</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Less than 7 days before arrival:</span>
                      <span className="font-bold text-red-500">No Refund</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm italic">
                    Note: Refunds for ferry tickets and flight tickets will be as per the respective operator's policy. Peak season bookings (Dec 15 - Jan 15) may have stricter cancellation policies.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 text-azure mr-2" />
                  3. Travel Documents & Permits
                </h2>
                <p className="mb-4">
                  It is the guest's responsibility to carry valid government-issued ID proofs (Aadhar Card, Voter ID, Passport, etc.) for all travelers.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Indian Nationals:</strong> Valid ID proof is mandatory for ferry bookings and hotel check-ins.</li>
                  <li><strong>Foreign Nationals:</strong> Valid Passport and Indian Visa are mandatory. Restricted Area Permit (RAP) is no longer required for 30 major islands including Havelock and Neil, but registration at Port Blair airport is mandatory.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4">4. Itinerary Changes</h2>
                <p className="mb-4">
                  Luxury Andamans reserves the right to modify itineraries due to force majeure events, weather conditions, ferry cancellations, or operational reasons.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>In case of ferry cancellation due to weather, we will arrange alternative accommodation/transport, but any additional cost will be borne by the guest.</li>
                  <li>Unused activities or meals due to early departure or personal reasons are non-refundable.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4">5. Liability</h2>
                <p className="mb-4">
                  Luxury Andamans acts as an agent for hotels, transporters, and activity providers. We are not liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Delays or cancellations of flights or ferries.</li>
                  <li>Loss of luggage or personal belongings.</li>
                  <li>Personal injuries or accidents during activities (guests are advised to have travel insurance).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-night mb-4">6. Jurisdiction</h2>
                <p className="mb-4">
                  Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts in Port Blair, Andaman & Nicobar Islands.
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