import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, ArrowRight, Gift, Sparkles } from 'lucide-react';
import { sendTelegramMessage } from '../lib/telegram';
import toast from 'react-hot-toast';

const DiscountPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        // Show popup after 10 seconds
        const timer = setTimeout(() => {
            const hasSeenPopup = sessionStorage.getItem('hasSeenDiscountPopup');
            if (!hasSeenPopup) {
                setIsOpen(true);
                if (window.history.state?.popup !== true) {
                    window.history.pushState({ popup: true }, '');
                }
            }
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handlePopState = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('hasSeenDiscountPopup', 'true');
        if (window.history.state?.popup === true) {
            window.history.back();
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!phone) return;

        setIsSubmitting(true);
        try {
            await sendTelegramMessage(`🎁 *Discount Popup Claim*\n\nPhone: ${phone}\nOffer: FLAT 15% OFF + Free Candle Light Dinner`);
            toast.success('Offer claimed! We will call you shortly.');
            setHasSubmitted(true);
            setTimeout(() => {
                handleClose();
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
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-purple-900/40 backdrop-blur-xl shadow-2xl"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500 rounded-full blur-[100px] opacity-50 pointer-events-none" />
                        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-pink-500 rounded-full blur-[100px] opacity-50 pointer-events-none" />

                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-8 relative z-0 text-center">
                            {!hasSubmitted ? (
                                <>
                                    <motion.div 
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring" }}
                                        className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 rotate-3"
                                    >
                                        <Gift className="w-10 h-10 text-white" />
                                    </motion.div>

                                    <h2 className="text-3xl font-bold text-white mb-2 font-display">
                                        Exclusive Offer
                                    </h2>
                                    <p className="text-purple-200 mb-8 text-sm leading-relaxed">
                                        Get <span className="font-bold text-white">FLAT 15% OFF</span> + Free Candle Light Dinner on your first booking!
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="relative group">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300 group-focus-within:text-white transition-colors" />
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="Enter Phone Number"
                                                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/10 rounded-xl text-white placeholder:text-purple-200/50 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:bg-white/20 transition-all"
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white rounded-xl font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                'Claiming...'
                                            ) : (
                                                <>
                                                    Claim Reward <ArrowRight className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                    
                                    <p className="mt-4 text-xs text-purple-300/60">
                                        *Limited time offer. Valid for new bookings only.
                                    </p>
                                </>
                            ) : (
                                <div className="py-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30"
                                    >
                                        <Sparkles className="w-10 h-10 text-white" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Offer Claimed!</h3>
                                    <p className="text-purple-200">
                                        Our travel expert will call you shortly to apply your discount.
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DiscountPopup;

