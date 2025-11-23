import React, { useState } from 'react';
import { Phone, Send, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { sendTelegramMessage } from '../lib/telegram';
import toast from 'react-hot-toast';

const Newsletter = () => {
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) {
      setIsLoading(true);
      
      const message = `
<b>📱 New Newsletter Subscription</b>

<b>Phone:</b> ${phone}
      `;

      const success = await sendTelegramMessage(message);

      if (success) {
        setIsSubmitted(true);
        setPhone('');
        toast.success('Successfully subscribed!');
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        toast.error('Failed to subscribe. Please try again.');
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[128px] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />

            <div className="text-center relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg rotate-3"
              >
                <Phone className="w-10 h-10 text-white" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-200 mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-bold tracking-wide uppercase">Join Our Community</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
                  Get Exclusive Travel Offers
                </h2>
                <p className="text-blue-100/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Subscribe to our updates and receive <span className="text-white font-semibold">10% off</span> your first booking,
                  plus stay updated with our latest packages and seasonal offers directly on your phone.
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto"
              >
                <div className="relative flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative group">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      className="w-full px-8 py-5 rounded-full bg-white/10 border border-white/10 text-white placeholder-blue-200/50 focus:bg-white/15 focus:border-blue-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                      required
                    />
                    {isSubmitted && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute right-6 top-1/2 -translate-y-1/2"
                      >
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      </motion.div>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-bold text-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{isLoading ? 'Sending...' : 'Subscribe'}</span>
                    {!isLoading && <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />}
                  </motion.button>
                </div>
              </motion.form>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 text-sm text-blue-200/60"
              >
                By subscribing, you agree to our Privacy Policy and consent to receive updates via WhatsApp/SMS.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;