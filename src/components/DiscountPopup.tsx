import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { sendTelegramMessage } from '../lib/telegram';
import toast from 'react-hot-toast';

const DiscountPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        // Show popup after 15 seconds
        const timer = setTimeout(() => {
            setIsOpen(true);
            // Push state to handle back button closing on mobile
            if (window.history.state?.popup !== true) {
                window.history.pushState({ popup: true }, '');
            }
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            if (isOpen) {
                setIsOpen(false);
                // Prevent default back behavior if needed, though popstate usually means it already happened
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
        // If we pushed state, we should go back to keep history clean, 
        // but checking history.state is tricky. 
        // Safest is just to close. If user presses back later, they go back to previous page.
        if (window.history.state?.popup === true) {
            window.history.back();
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!phone) return;

        setIsSubmitting(true);
        try {
            await sendTelegramMessage(`🎁 *New Discount Claim*\n\nPhone: ${phone}\nOffer: 10% OFF`);
            toast.success('Discount code sent to your phone!');
            setHasSubmitted(true);
            setTimeout(() => {
                setIsOpen(false);
                if (window.history.state?.popup === true) {
                    window.history.back();
                }
            }, 3000);
        } catch (error) {
            console.error('Failed to send discount claim', error);
            toast.error('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 100 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 100 }}
                        className="relative w-full max-w-md bg-white sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 p-2 bg-black/20 hover:bg-black/30 backdrop-blur-md rounded-full transition-colors z-50 text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex flex-col">
                            {/* Header Image/Gradient */}
                            <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 p-8 text-center relative overflow-hidden">
                                {/* Decorative Elements */}
                                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                                    <div className="absolute top-[-20%] left-[-20%] w-64 h-64 bg-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
                                    <div className="absolute bottom-[-20%] right-[-20%] w-64 h-64 bg-indigo-400/30 rounded-full blur-3xl animate-pulse delay-700"></div>
                                    <div className="absolute top-10 right-10 w-4 h-4 bg-yellow-300 rounded-full animate-bounce"></div>
                                    <div className="absolute bottom-10 left-10 w-3 h-3 bg-pink-300 rounded-full animate-ping"></div>
                                </div>

                                <div className="relative z-10">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl mb-4 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 transform rotate-3 hover:rotate-6 transition-transform duration-300">
                                        <Gift className="w-10 h-10 text-white drop-shadow-md" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
                                        <span className="inline-block animate-bounce delay-100">1</span>
                                        <span className="inline-block animate-bounce delay-200">0</span>
                                        <span className="inline-block animate-bounce delay-300">%</span>
                                        <span className="ml-2">OFF</span>
                                    </h2>
                                    <p className="text-purple-100 font-medium text-lg">Your Dream Vacation Awaits!</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 bg-white">
                                {!hasSubmitted ? (
                                    <>
                                        <div className="flex items-center justify-center gap-2 mb-6 text-gray-600 bg-purple-50 py-2 px-4 rounded-full w-fit mx-auto">
                                            <Sparkles className="w-4 h-4 text-purple-500" />
                                            <span className="text-sm font-medium">Limited Time Offer</span>
                                        </div>

                                        <p className="text-gray-600 text-center mb-6">
                                            Unlock an exclusive <strong>10% discount</strong> on your first booking.
                                        </p>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="relative group">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                                                <input
                                                    type="tel"
                                                    inputMode="numeric"
                                                    pattern="[0-9]*"
                                                    autoComplete="tel"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    placeholder="Enter mobile number"
                                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-lg font-medium placeholder:font-normal"
                                                    required
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                                            >
                                                {isSubmitting ? 'Unlocking...' : 'Claim My Discount'}
                                                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                                            </button>
                                        </form>
                                        <p className="text-xs text-gray-400 text-center mt-4">
                                            *By claiming, you agree to receive a call from our expert.
                                        </p>
                                    </>
                                ) : (
                                    <div className="text-center py-8">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                                        >
                                            <Gift className="w-10 h-10 text-green-600" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Discount Unlocked!</h3>
                                        <p className="text-gray-600">
                                            Our travel expert will call you shortly with your special offer.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DiscountPopup;
