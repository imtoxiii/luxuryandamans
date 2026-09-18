import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, X, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import type { ThankYouLocationState } from '../lib/formSuccess';

const SOURCE_LABEL: Record<string, string> = {
  enquiry_page: 'enquiry',
  contact_page: 'message',
  offer_quick_enquiry: 'enquiry',
  offer_best_package: 'enquiry',
  lead_popup: 'enquiry',
  calculator: 'estimate request',
  newsletter: 'subscription',
  discount_popup: 'offer claim',
};

const isOfferSource = (source?: string) =>
  source === 'offer_quick_enquiry' || source === 'offer_best_package';

const WHATSAPP_NUMBER = '916297576826';
const WHATSAPP_TEXT = encodeURIComponent(
  'Hi Luxury Andamans! I just submitted an enquiry. Please share the best package options for my trip.'
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = ((location.state || {}) as ThankYouLocationState) || {};
  const isModal = !!state.backgroundLocation;
  const sourceLabel = SOURCE_LABEL[state.source || ''] || 'enquiry';
  const firstName = state.name?.trim().split(/\s+/)[0] || '';
  // No "View Packages" in the popup after an offer-page submission —
  // the user just came from the packages.
  const showViewPackages = !(isModal && isOfferSource(state.source));

  useEffect(() => {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'thank_you_view',
        form_source: state.source || 'direct',
      });
    } catch {
      /* noop */
    }
    if (!isModal) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [state.source, isModal]);

  const close = () => {
    const bg = state.backgroundLocation;
    const target = bg
      ? `${bg.pathname}${bg.search || ''}${bg.hash || ''}`
      : '/';
    // Replace so the back button skips the transient /thank-you entry and
    // the transition/scroll hooks stand down (see modalClose guard).
    navigate(target, { replace: true, state: { modalClose: true } });
  };

  // Modal overlay: lock background scroll + close on Escape.
  useEffect(() => {
    if (!isModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModal]);

  // Modal mode: popup over the submitting page. URL is genuinely /thank-you,
  // so GTM/GA pageviews and Ads URL-based conversions still fire.
  if (isModal) {
    return (
      <div
        className="fixed inset-0 z-[10300] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Thank you"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={close}
          className="absolute inset-0 bg-night/70 backdrop-blur-[2px]"
        />
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative w-full max-w-md overflow-hidden rounded-[28px] bg-white shadow-[0_30px_90px_-20px_rgba(4,16,24,0.6)] max-h-[90dvh] overflow-y-auto"
        >
          {/* Photo banner */}
          <div className="relative h-40 sm:h-44 shrink-0 overflow-hidden">
            <img
              src="/form.webp"
              alt="Andaman beach"
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/25 to-night/10" />
            <button
              type="button"
              onClick={close}
              aria-label="Close and continue browsing"
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 transition-colors"
            >
              <X className="w-4 h-4" strokeWidth={2.25} />
            </button>
            <div className="absolute inset-x-0 bottom-0 pb-2 text-center">
              <p className="font-script text-5xl sm:text-[3.4rem] leading-none text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]">
                Thank You{firstName ? `, ${firstName}` : ''}!
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="relative px-6 sm:px-8 pt-2 pb-7 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 320, damping: 18, delay: 0.15 }}
              className="-mt-9 mb-4 mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-lagoon to-azure flex items-center justify-center shadow-lg shadow-lagoon/30 ring-4 ring-white"
            >
              <CheckCircle2 className="w-7 h-7 text-white" />
            </motion.div>

            <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-lagoon">
              <Sparkles className="w-3.5 h-3.5" />
              {sourceLabel} received
              <Sparkles className="w-3.5 h-3.5" />
            </p>
            <p className="mt-2.5 text-[15px] leading-relaxed text-night/65">
              Our travel experts will reach out shortly with hand-picked
              options for your perfect Andaman trip.
            </p>
            <p className="mt-2 font-script text-[1.7rem] leading-none text-night/80">
              Island memories await…
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={close}
                className="w-full py-3 px-4 rounded-full font-semibold text-[15px] text-white bg-gradient-to-r from-lagoon to-azure shadow-md shadow-lagoon/25 hover:brightness-[1.05] active:scale-[0.98] transition-all"
              >
                Continue browsing
              </button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-full font-semibold text-[15px] text-white bg-[#25D366] hover:bg-[#1eb856] shadow-md shadow-green-500/25 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp us
              </a>
              {showViewPackages && (
                <Link
                  to="/packages"
                  className="inline-flex items-center justify-center gap-1.5 pt-1 text-sm font-semibold text-lagoon hover:text-azure transition-colors"
                >
                  Explore packages <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Full-page mode: direct visits, refreshes, shared links.
  return (
    <div className="min-h-screen font-sans bg-pearl">
      <SEO
        title="Thank You | Luxury Andamans"
        description="Thank you for your enquiry. Our Andaman travel experts will contact you shortly."
        pathname="/thank-you"
        noindex={true}
      />
      <Header />
      <div className="pt-32 pb-20 container mx-auto px-6 flex items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-12 text-center border border-gray-100"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-lagoon mb-2">
            {sourceLabel} received
          </p>
          <h1 className="font-script text-6xl md:text-7xl leading-tight text-night mb-4">
            Thank You{firstName ? `, ${firstName}` : ''}!
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            We&apos;ve received your {sourceLabel}. Our travel experts will contact you
            shortly to plan your perfect Andaman trip.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Need help sooner?{' '}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#1eb856] hover:underline"
            >
              Chat with us on WhatsApp
            </a>{' '}
            — we reply within minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/"
              className="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Back Home
            </Link>
            <Link
              to="/packages"
              className="px-8 py-3 bg-azure text-white rounded-xl font-semibold hover:bg-azure/90 transition-colors shadow-lg shadow-azure/20 inline-flex items-center justify-center gap-2"
            >
              View Packages <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#1eb856] transition-colors shadow-md shadow-green-500/25 inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp us
            </a>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
