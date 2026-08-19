import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { sendTelegramMessage } from '../lib/telegram';
import toast from 'react-hot-toast';

const ease = [0.22, 1, 0.36, 1] as const;

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
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease }}
      className="overflow-hidden rounded-[1.75rem] bg-[#f7f4ef] md:rounded-[2.25rem]"
    >
      <div className="grid lg:grid-cols-12">
        <div className="px-6 py-6 md:px-8 md:py-8 lg:col-span-6 lg:pr-6">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            10% off your first booking
          </h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600 md:text-[15px]">
            Seasonal packages and ferry alerts on your phone.
          </p>
        </div>

        <div className="border-t border-slate-200/80 px-6 py-6 md:px-8 md:py-8 lg:col-span-6 lg:border-l lg:border-t-0">
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="newsletter-phone"
              className="mb-2.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400"
            >
              Mobile number
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <input
                  id="newsletter-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98xxx xxxxx"
                  className="h-14 w-full rounded-full border border-slate-200 bg-white px-5 text-[15px] text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-slate-400"
                  required
                  autoComplete="tel"
                />
                {isSubmitted && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                  </motion.div>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-[#0a2740] px-7 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#041018] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                <span>{isLoading ? 'Sending...' : 'Subscribe'}</span>
                {!isLoading && <Send className="h-4 w-4" />}
              </button>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              By subscribing you agree to our Privacy Policy and WhatsApp / SMS updates.
            </p>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Newsletter;
