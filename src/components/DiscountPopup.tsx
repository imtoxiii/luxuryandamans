import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, ArrowRight } from 'lucide-react';
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
            await sendTelegramMessage(`🎁 *Discount Popup Claim (Auto-Show)*\n\nPhone: ${phone}\nOffer: General Site Offer`);
            toast.success('Offer claimed! We will contact you shortly.');
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
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-sm rounded-[20px] overflow-hidden shadow-2xl bg-white"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/images/mhmb4l407dbbye0c06am.webp"
                                alt="Background"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/40 to-transparent" />
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-black/20 hover:bg-black/30 rounded-full text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="relative z-10 p-8 pt-44 flex flex-col items-center">
                            {!hasSubmitted ? (
                                <div className="w-full bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-lg">
                                    
                                    <p className="text-gray-700 text-sm mb-6 text-center">Unlock special deals for your Andaman trip!</p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="relative group">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="Enter Phone Number"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white/80"
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>Get Offer <ArrowRight className="w-5 h-5" /></>
                                            )}
                                        </button>
                                    </form>

                                    <p className="text-center mt-4 text-[12px] text-[#666]">
                                        By submitting, you agree to the offer.
                                    </p>
                                </div>
                            ) : (
                                <div className="w-full bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-lg text-center py-12">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                                        <ArrowRight className="w-8 h-8 text-white -rotate-45" /> {/* Use checkmark or similar if available, repurposing Arrow for now or just text */}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Offer Claimed!</h3>
                                    <p className="text-gray-600">
                                        Our travel expert will call you shortly.
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

