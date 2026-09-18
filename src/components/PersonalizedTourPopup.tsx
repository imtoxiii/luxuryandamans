import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { sendTelegramMessage, formatPersonalizedTourMessage } from '../lib/telegram';
import { redirectToThankYou } from '../lib/formSuccess';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const COUNTRY_DIAL_CODES = [
  { code: 'IN', dial: '+91', label: 'India', flag: '🇮🇳' },
  { code: 'US', dial: '+1', label: 'United States', flag: '🇺🇸' },
  { code: 'GB', dial: '+44', label: 'United Kingdom', flag: '🇬🇧' },
  { code: 'AE', dial: '+971', label: 'UAE', flag: '🇦🇪' },
  { code: 'SG', dial: '+65', label: 'Singapore', flag: '🇸🇬' },
  { code: 'AU', dial: '+61', label: 'Australia', flag: '🇦🇺' },
  { code: 'CA', dial: '+1', label: 'Canada', flag: '🇨🇦' },
  { code: 'DE', dial: '+49', label: 'Germany', flag: '🇩🇪' },
  { code: 'FR', dial: '+33', label: 'France', flag: '🇫🇷' },
  { code: 'IT', dial: '+39', label: 'Italy', flag: '🇮🇹' },
  { code: 'ES', dial: '+34', label: 'Spain', flag: '🇪🇸' },
  { code: 'NL', dial: '+31', label: 'Netherlands', flag: '🇳🇱' },
  { code: 'CH', dial: '+41', label: 'Switzerland', flag: '🇨🇭' },
  { code: 'SA', dial: '+966', label: 'Saudi Arabia', flag: '🇸🇦' },
  { code: 'QA', dial: '+974', label: 'Qatar', flag: '🇶🇦' },
  { code: 'KW', dial: '+965', label: 'Kuwait', flag: '🇰🇼' },
  { code: 'BH', dial: '+973', label: 'Bahrain', flag: '🇧🇭' },
  { code: 'OM', dial: '+968', label: 'Oman', flag: '🇴🇲' },
  { code: 'MY', dial: '+60', label: 'Malaysia', flag: '🇲🇾' },
  { code: 'TH', dial: '+66', label: 'Thailand', flag: '🇹🇭' },
  { code: 'ID', dial: '+62', label: 'Indonesia', flag: '🇮🇩' },
  { code: 'NP', dial: '+977', label: 'Nepal', flag: '🇳🇵' },
  { code: 'BD', dial: '+880', label: 'Bangladesh', flag: '🇧🇩' },
  { code: 'LK', dial: '+94', label: 'Sri Lanka', flag: '🇱🇰' },
  { code: 'PK', dial: '+92', label: 'Pakistan', flag: '🇵🇰' },
  { code: 'JP', dial: '+81', label: 'Japan', flag: '🇯🇵' },
  { code: 'KR', dial: '+82', label: 'South Korea', flag: '🇰🇷' },
  { code: 'CN', dial: '+86', label: 'China', flag: '🇨🇳' },
  { code: 'HK', dial: '+852', label: 'Hong Kong', flag: '🇭🇰' },
  { code: 'NZ', dial: '+64', label: 'New Zealand', flag: '🇳🇿' },
  { code: 'ZA', dial: '+27', label: 'South Africa', flag: '🇿🇦' },
  { code: 'BR', dial: '+55', label: 'Brazil', flag: '🇧🇷' },
  { code: 'RU', dial: '+7', label: 'Russia', flag: '🇷🇺' },
] as const;

const SESSION_KEY = 'hasSeenPersonalizedTourPopup';
const MIN_PHONE_DIGITS = 7;
const MAX_PHONE_DIGITS = 15;
/** Countdown only starts after the site is ready + user has engaged with the hero. */
const POPUP_DELAY_MS = 10000;
/** Fallback: if they stay on the hero without scrolling, start countdown after this. */
const HERO_SETTLE_MS = 2000;
/** Scroll past this fraction of the viewport to start the countdown early. */
const SCROLL_TRIGGER_RATIO = 0.3;

const inputClass =
  'w-full rounded-lg border border-sand/70 bg-pearl/50 text-night placeholder:text-night/35 focus:bg-white focus:border-lagoon focus:ring-2 focus:ring-lagoon/20 outline-none transition-all text-[15px]';

const isSiteReady = (): boolean => {
  const skeleton = document.getElementById('loading-skeleton');
  return !skeleton || skeleton.classList.contains('hidden');
};

const hasScrolledPastHero = (): boolean =>
  window.scrollY >= Math.min(window.innerHeight * SCROLL_TRIGGER_RATIO, 360);

/** Normalize local phone digits (strip trunk 0 / pasted country code for India). */
const normalizePhoneDigits = (raw: string, countryCode: string): string => {
  let digits = raw.replace(/\D/g, '');

  if (countryCode === 'IN') {
    if (digits.startsWith('91') && digits.length >= 12) {
      digits = digits.slice(2);
    }
    digits = digits.replace(/^0+/, '');
  }

  return digits;
};

const PersonalizedTourPopup = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [countryCode, setCountryCode] = useState('IN');
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const scrollLockY = useRef(0);
  const countryMenuRef = useRef<HTMLDivElement>(null);

  const selectedCountry =
    COUNTRY_DIAL_CODES.find((c) => c.code === countryCode) ?? COUNTRY_DIAL_CODES[0];

  const lockBodyScroll = () => {
    scrollLockY.current = window.scrollY;
    document.body.classList.add('no-scroll');
    document.body.style.top = `-${scrollLockY.current}px`;
  };

  const unlockBodyScroll = () => {
    document.body.classList.remove('no-scroll');
    document.body.style.top = '';
    window.scrollTo(0, scrollLockY.current);
  };

  const openPopup = (force = false) => {
    if (!force && sessionStorage.getItem(SESSION_KEY)) return;
    setIsOpen(true);
    if (window.history.state?.popup !== true) {
      window.history.pushState({ popup: true }, '');
    }
  };

  useEffect(() => {
    if (isOpen) {
      lockBodyScroll();
      return () => unlockBodyScroll();
    }
    return undefined;
  }, [isOpen]);

  useEffect(() => {
    let countdownId: number | null = null;
    let heroSettleId: number | null = null;
    let readyPollId: number | null = null;
    let countdownStarted = false;
    let readyHandled = false;
    let siteReady = isSiteReady();

    const startCountdown = () => {
      if (countdownStarted || sessionStorage.getItem(SESSION_KEY)) return;
      countdownStarted = true;

      if (heroSettleId !== null) {
        window.clearTimeout(heroSettleId);
        heroSettleId = null;
      }

      countdownId = window.setTimeout(() => {
        openPopup(false);
      }, POPUP_DELAY_MS);
    };

    const onEngaged = () => {
      if (!siteReady) return;
      startCountdown();
    };

    const markSiteReady = () => {
      siteReady = true;
      if (readyHandled) return;
      readyHandled = true;

      // User has landed on the hero after load — settle briefly, then start countdown.
      // If they scroll sooner, scroll handler starts it immediately instead.
      if (hasScrolledPastHero()) {
        onEngaged();
      } else {
        heroSettleId = window.setTimeout(() => {
          onEngaged();
        }, HERO_SETTLE_MS);
      }
    };

    const handleScroll = () => {
      if (!siteReady || countdownStarted) return;
      if (hasScrolledPastHero()) onEngaged();
    };

    const handleReveal = () => {
      markSiteReady();
    };

    // Loader already gone (e.g. soft nav / blog immediate remove)
    if (siteReady) {
      markSiteReady();
    } else {
      window.addEventListener('luxal:reveal', handleReveal);
      // Fallback poll if reveal event was missed
      readyPollId = window.setInterval(() => {
        if (isSiteReady()) {
          if (readyPollId !== null) {
            window.clearInterval(readyPollId);
            readyPollId = null;
          }
          markSiteReady();
        }
      }, 400);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleOpenEvent = () => {
      setHasSubmitted(false);
      openPopup(true);
    };

    window.addEventListener('openDiscountPopup', handleOpenEvent);
    window.addEventListener('openPersonalizedTourPopup', handleOpenEvent);

    return () => {
      if (countdownId !== null) window.clearTimeout(countdownId);
      if (heroSettleId !== null) window.clearTimeout(heroSettleId);
      if (readyPollId !== null) window.clearInterval(readyPollId);
      window.removeEventListener('luxal:reveal', handleReveal);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openDiscountPopup', handleOpenEvent);
      window.removeEventListener('openPersonalizedTourPopup', handleOpenEvent);
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      if (isOpen) {
        setIsOpen(false);
        sessionStorage.setItem(SESSION_KEY, 'true');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isOpen]);

  useEffect(() => {
    if (!isCountryOpen) return;

    const handleOutside = (event: MouseEvent | TouchEvent) => {
      if (countryMenuRef.current && !countryMenuRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsCountryOpen(false);
    };

    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isCountryOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setIsCountryOpen(false);
    sessionStorage.setItem(SESSION_KEY, 'true');
    if (window.history.state?.popup === true) {
      window.history.back();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const cleaned = value.replace(/[^\d\s-]/g, '').slice(0, 18);
      setFormData((prev) => ({ ...prev, phone: cleaned }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phoneDigits = normalizePhoneDigits(formData.phone, selectedCountry.code);

    if (!name) {
      toast.error('Please enter your name');
      return;
    }

    if (!phoneDigits) {
      toast.error('Please enter your phone number');
      return;
    }

    if (selectedCountry.code === 'IN') {
      if (phoneDigits.length !== 10) {
        toast.error('Please enter a valid 10-digit Indian mobile number');
        return;
      }
    } else if (phoneDigits.length < MIN_PHONE_DIGITS || phoneDigits.length > MAX_PHONE_DIGITS) {
      toast.error('Please enter a valid phone number');
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    try {
      const fullPhone = `${selectedCountry.dial} ${phoneDigits}`;
      const message = formatPersonalizedTourMessage({
        name,
        email: email || undefined,
        phone: fullPhone,
      });

      const success = await sendTelegramMessage(message);
      if (success) {
        toast.success('Thank you! Our experts will contact you shortly.');
        setHasSubmitted(true);
        const submittedName = name;
        setFormData({ name: '', email: '', phone: '' });
        sessionStorage.setItem(SESSION_KEY, 'true');
        setIsOpen(false);
        redirectToThankYou(navigate, 'lead_popup', { name: submittedName });
      }
      // sendTelegramMessage already toasts on failure
    } catch (error) {
      console.error('Failed to send personalized tour enquiry', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[10150] flex items-center justify-center p-3 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tour-popup-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-night/70"
          />

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 360, damping: 32 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[400px] md:max-w-[720px] max-h-[min(100dvh-1rem,720px)] overflow-hidden rounded-2xl sm:rounded-[24px] bg-white shadow-[0_25px_80px_-20px_rgba(15,40,60,0.55)] flex flex-col md:flex-row"
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-2.5 right-2.5 z-30 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/55 transition-colors md:bg-white/95 md:text-night/70 md:hover:bg-white md:shadow-md"
            >
              <X className="w-4 h-4" strokeWidth={2.25} />
            </button>

            {/* Larger hero image on mobile; side panel on desktop */}
            <div className="relative h-[38vw] max-h-[200px] min-h-[140px] sm:h-[180px] sm:max-h-none md:h-auto md:min-h-0 md:w-[44%] shrink-0 overflow-hidden">
              <img
                src="/form.webp"
                alt="Andaman travel inspiration"
                className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/5 md:to-white" />
              <div className="absolute inset-x-0 bottom-0 px-4 pb-3 md:inset-auto md:bottom-6 md:left-5 md:right-5 md:p-0">
                <p className="font-script text-[1.75rem] sm:text-[1.9rem] leading-none text-white drop-shadow-md md:text-night md:text-[2.15rem]">
                  Andamans
                </p>
                <p className="mt-1 text-[11px] text-white/85 md:text-night/50 tracking-wide">
                  Tailored island escapes
                </p>
              </div>
            </div>

            <div className="relative flex-1 min-h-0 px-4 pt-3 pb-3.5 sm:px-5 sm:pt-4 sm:pb-5 overflow-y-auto overscroll-contain">
              {!hasSubmitted ? (
                <>
                  <div className="mb-3">
                    <h2
                      id="tour-popup-title"
                      className="font-script text-[1.65rem] sm:text-[1.95rem] leading-[1.1] text-night"
                    >
                      Get Personalized Tour Packages
                    </h2>
                    <p className="mt-1 text-[12px] sm:text-[13px] text-night/50 leading-snug">
                      Our experts will send hand-picked options shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-2.5" autoComplete="on" noValidate>
                    <div>
                      <label htmlFor="popup-name" className="block text-[11px] font-semibold text-night/70 mb-0.5">
                        Full Name <span className="text-lagoon">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-lagoon/70 pointer-events-none" />
                        <input
                          id="popup-name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          autoComplete="name"
                          autoCapitalize="words"
                          enterKeyHint="next"
                          className={`${inputClass} pl-9 pr-3 py-2`}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="popup-email" className="block text-[11px] font-semibold text-night/70 mb-0.5">
                        Email{' '}
                        <span className="font-medium text-night/35">(optional)</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-lagoon/70 pointer-events-none" />
                        <input
                          id="popup-email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          autoComplete="email"
                          inputMode="email"
                          enterKeyHint="next"
                          className={`${inputClass} pl-9 pr-3 py-2`}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="popup-phone" className="block text-[11px] font-semibold text-night/70 mb-0.5">
                        Phone <span className="text-lagoon">*</span>
                      </label>
                      <div className="flex gap-1.5">
                        <div className="relative shrink-0" ref={countryMenuRef}>
                          <button
                            type="button"
                            onClick={() => setIsCountryOpen((open) => !open)}
                            aria-haspopup="listbox"
                            aria-expanded={isCountryOpen}
                            aria-label="Select country code"
                            className="h-[38px] flex items-center gap-1 px-2 rounded-lg border border-sand/70 bg-pearl/70 text-[13px] font-medium text-night hover:border-lagoon/40 transition-colors"
                          >
                            <span className="text-sm leading-none" aria-hidden>
                              {selectedCountry.flag}
                            </span>
                            <span className="tabular-nums">{selectedCountry.dial}</span>
                            <ChevronDown
                              className={`w-3 h-3 text-night/45 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`}
                            />
                          </button>

                          <AnimatePresence>
                            {isCountryOpen && (
                              <motion.ul
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 2 }}
                                role="listbox"
                                className="absolute left-0 top-full mt-1 z-40 w-[min(78vw,240px)] max-h-40 overflow-y-auto rounded-xl border border-sand/80 bg-white shadow-xl py-1"
                              >
                                {COUNTRY_DIAL_CODES.map((country) => (
                                  <li key={`${country.code}-${country.dial}-${country.label}`}>
                                    <button
                                      type="button"
                                      role="option"
                                      aria-selected={country.code === selectedCountry.code}
                                      onClick={() => {
                                        setCountryCode(country.code);
                                        setIsCountryOpen(false);
                                      }}
                                      className={`w-full flex items-center gap-2 px-2.5 py-1.5 text-left text-[13px] hover:bg-pearl transition-colors ${
                                        country.code === selectedCountry.code
                                          ? 'bg-lagoon/10 text-night font-medium'
                                          : 'text-night/80'
                                      }`}
                                    >
                                      <span className="text-sm leading-none">{country.flag}</span>
                                      <span className="flex-1 truncate">{country.label}</span>
                                      <span className="tabular-nums text-night/50">{country.dial}</span>
                                    </button>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="relative flex-1 min-w-0">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-lagoon/70 pointer-events-none" />
                          <input
                            id="popup-phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={selectedCountry.code === 'IN' ? '98765 43210' : 'Phone number'}
                            autoComplete="tel-national"
                            inputMode="numeric"
                            enterKeyHint="done"
                            className={`${inputClass} pl-9 pr-3 py-2`}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-0.5 py-2.5 px-4 rounded-lg font-semibold text-[13px] text-white bg-gradient-to-r from-lagoon to-azure shadow-md shadow-lagoon/25 hover:brightness-[1.04] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Get Personalized Tour
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-center mt-2 text-[10px] text-night/35 leading-snug">
                    By submitting, you agree to be contacted about your Andaman trip.
                  </p>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-8 px-2">
                  <div className="w-12 h-12 mb-3 rounded-full bg-lagoon/15 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-lagoon" />
                  </div>
                  <h3 className="font-script text-[2rem] text-night mb-1.5">Thank You!</h3>
                  <p className="text-[13px] text-night/55 leading-relaxed max-w-[30ch]">
                    Our travel experts will reach out shortly with hand-picked options.
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

export default PersonalizedTourPopup;
