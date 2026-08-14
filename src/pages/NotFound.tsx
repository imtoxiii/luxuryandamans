import { Link, useLocation } from 'react-router-dom';
import { motion, MotionConfig } from 'framer-motion';
import { Compass, MapPin, Package, BookOpen, ArrowRight, Home, MessageCircle, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const isPrerender =
  typeof navigator !== 'undefined' && (navigator as { webdriver?: boolean }).webdriver === true;

const links = [
  {
    to: '/packages',
    icon: Package,
    title: 'Packages',
    copy: 'Honeymoon, family, and luxury Andaman tours.',
    cta: 'View packages',
  },
  {
    to: '/destinations',
    icon: MapPin,
    title: 'Destinations',
    copy: 'Havelock, Neil, Port Blair, Baratang, and more.',
    cta: 'View destinations',
  },
  {
    to: '/blog',
    icon: BookOpen,
    title: 'Travel guides',
    copy: 'Itineraries, costs, and planning tips for 2026.',
    cta: 'Read the blog',
  },
  {
    to: '/enquiry',
    icon: MessageCircle,
    title: 'Plan with us',
    copy: 'Tell us your dates — we will chart the route.',
    cta: 'Send enquiry',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease, delay: 0.35 + i * 0.15 },
  }),
};

/** vw-based loop — same visual speed on phone and desktop */
const waveLoop = (seconds: number, reverse = false) => ({
  animate: { x: reverse ? ['-100vw', '0vw'] : ['0vw', '-100vw'] },
  transition: { duration: seconds, repeat: Infinity, ease: 'linear' as const },
});

const WaveLayer = ({
  className,
  fill,
  path,
  seconds,
  reverse = false,
}: {
  className: string;
  fill: string;
  path: string;
  seconds: number;
  reverse?: boolean;
}) => (
  <div className={`nf-wave-track ${className}`} aria-hidden>
    <motion.div className="nf-wave-strip" {...waveLoop(seconds, reverse)}>
      <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
        <path fill={fill} d={path} />
      </svg>
      <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
        <path fill={fill} d={path} />
      </svg>
    </motion.div>
  </div>
);

const NotFound = () => {
  const { pathname } = useLocation();
  const lostPath = pathname && pathname !== '/404' ? pathname : null;

  return (
    <div className="bg-[#07111f] font-sans text-white">
      <SEO
        title="Page Not Found | Luxury Andamans"
        description="The page you’re looking for doesn’t exist. Explore Andaman packages, destinations, and travel guides on Luxury Andamans."
        pathname="/404"
        noindex={true}
      />
      <style>{`
        .nf-hero {
          position: relative;
          min-height: 100svh;
          overflow: hidden;
        }
        .nf-stars, .nf-stars-2 {
          position: absolute; inset: 0; pointer-events: none;
          background-repeat: no-repeat;
        }
        .nf-stars {
          background-image:
            radial-gradient(1.5px 1.5px at 8% 18%, rgba(255,255,255,.9) 50%, transparent 51%),
            radial-gradient(2px 2px at 22% 8%, rgba(255,255,255,.7) 50%, transparent 51%),
            radial-gradient(1px 1px at 36% 22%, rgba(255,255,255,.55) 50%, transparent 51%),
            radial-gradient(1.5px 1.5px at 48% 6%, rgba(255,255,255,.8) 50%, transparent 51%),
            radial-gradient(2px 2px at 62% 16%, rgba(255,255,255,.5) 50%, transparent 51%),
            radial-gradient(1px 1px at 74% 9%, rgba(255,255,255,.85) 50%, transparent 51%),
            radial-gradient(1.5px 1.5px at 88% 20%, rgba(255,255,255,.6) 50%, transparent 51%),
            radial-gradient(1px 1px at 14% 42%, rgba(255,255,255,.45) 50%, transparent 51%),
            radial-gradient(2px 2px at 91% 38%, rgba(255,255,255,.7) 50%, transparent 51%),
            radial-gradient(1.5px 1.5px at 5% 70%, rgba(255,255,255,.4) 50%, transparent 51%);
          animation: nf-twinkle 8s ease-in-out infinite;
        }
        .nf-stars-2 {
          background-image:
            radial-gradient(1px 1px at 18% 28%, rgba(180,230,255,.7) 50%, transparent 51%),
            radial-gradient(1.5px 1.5px at 41% 14%, rgba(180,230,255,.5) 50%, transparent 51%),
            radial-gradient(2px 2px at 57% 32%, rgba(255,200,160,.55) 50%, transparent 51%),
            radial-gradient(1px 1px at 79% 24%, rgba(180,230,255,.65) 50%, transparent 51%),
            radial-gradient(1.5px 1.5px at 33% 48%, rgba(255,255,255,.4) 50%, transparent 51%),
            radial-gradient(1px 1px at 96% 58%, rgba(180,230,255,.5) 50%, transparent 51%);
          animation: nf-twinkle 10s ease-in-out infinite reverse;
        }
        .nf-glow {
          position: absolute; left: 50%; top: 12%; width: 90vw; max-width: 780px; height: 90vw; max-height: 780px;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(0,145,155,.32) 0%, rgba(28,91,147,.14) 38%, transparent 68%);
          pointer-events: none;
        }
        .nf-horizon {
          position: absolute; left: 0; right: 0; bottom: 22%; height: 42%;
          background: radial-gradient(ellipse at 50% 100%, rgba(255,125,89,.28) 0%, rgba(28,91,147,.2) 42%, transparent 72%);
          pointer-events: none;
        }
        .nf-wave-track {
          position: absolute; left: 0; right: 0; bottom: 0;
          overflow: hidden; pointer-events: none;
        }
        .nf-wave-a { height: 42%; z-index: 2; }
        .nf-wave-b { height: 34%; bottom: -1%; z-index: 3; }
        .nf-wave-c { height: 26%; bottom: -2%; z-index: 4; }
        .nf-wave-strip {
          display: flex; width: 200vw; height: 100%;
          will-change: transform;
        }
        .nf-wave-strip svg { flex: 0 0 100vw; width: 100vw; height: 100%; display: block; }
        .nf-boat { position: absolute; bottom: 22%; left: 10%; width: 88px; z-index: 5; }
        .nf-island { position: absolute; right: 4%; bottom: 28%; width: min(52vw, 300px); z-index: 5; }
        .nf-beam {
          position: absolute; right: calc(4% + min(26vw, 150px)); bottom: 46%;
          width: min(48vw, 340px); height: 10px; z-index: 4;
          transform-origin: right center;
          background: linear-gradient(90deg, transparent, rgba(255,236,190,.7) 55%, rgba(255,236,190,.08));
          clip-path: polygon(0 40%, 100% 0, 100% 100%, 0 60%);
        }
        .nf-shimmer {
          background: linear-gradient(100deg, #fff 12%, #9ee7ee 38%, #fff 52%, #ffd0b5 78%, #fff 100%);
          background-size: 220% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        @keyframes nf-twinkle { 0%,100% { opacity:.45 } 50% { opacity:1 } }
      `}</style>

      <Header />

      {/* MotionConfig keeps the ocean loop slow on phones (CSS * rules were snapping it) */}
      <MotionConfig reducedMotion="never">
        <section className="nf-hero bg-gradient-to-b from-[#07111f] via-[#0c2748] to-[#0a4a58]" aria-labelledby="nf-title">
          <div className="nf-glow" aria-hidden />
          <div className="nf-horizon" aria-hidden />
          <div className="nf-stars" aria-hidden />
          <div className="nf-stars-2" aria-hidden />

          <motion.div
            className="nf-beam"
            aria-hidden
            animate={{ rotate: [14, -26, 14], opacity: [0.22, 0.55, 0.22] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.svg
            className="nf-island"
            viewBox="0 0 280 160"
            fill="none"
            aria-hidden
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ellipse cx="150" cy="138" rx="110" ry="16" fill="#041018" opacity=".45" />
            <path d="M28 128c22-28 52-44 92-44 48 0 78 18 122 44H28z" fill="#16323e" />
            <path d="M48 128c18-18 40-28 72-28 38 0 62 12 98 28H48z" fill="#1e4d4a" />
            <rect x="168" y="54" width="10" height="42" rx="1" fill="#f2ece4" />
            <rect x="165" y="46" width="16" height="10" rx="1" fill="#ff7d59" />
            <circle cx="173" cy="51" r="3" fill="#ffe9b0" />
            <path d="M92 92c0-28 8-48 8-48s10 14 14 48c-8 0-16 0-22 0z" fill="#0d3b32" />
            <path d="M86 70c18-4 28 6 28 6s-14 8-30 6c0 0 2-8 2-12z" fill="#14786a" />
            <path d="M118 86c0-22 6-38 6-38s8 12 11 38c-6 0-12 0-17 0z" fill="#0d3b32" />
            <path d="M112 68c14-3 22 5 22 5s-10 6-24 5c0 0 2-6 2-10z" fill="#1a9b88" />
          </motion.svg>

          <motion.svg
            className="nf-boat"
            viewBox="0 0 80 50"
            fill="none"
            aria-hidden
            animate={{ x: [0, 12, 0], y: [0, -6, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M14 34l8-20 2 20H14z" fill="#f2ece4" />
            <path d="M24 14l18 20H24V14z" fill="#ffffff" opacity=".9" />
            <path d="M8 36c8 8 56 8 64 0H8z" fill="#16325c" />
            <path d="M12 36c6 5 50 5 56 0H12z" fill="#1c5b93" />
          </motion.svg>

          <WaveLayer
            className="nf-wave-a"
            fill="#0a3d52"
            path="M0,80 C180,140 360,20 540,80 C720,140 900,20 1080,80 C1260,140 1380,40 1440,70 L1440,180 L0,180 Z"
            seconds={55}
          />
          <WaveLayer
            className="nf-wave-b"
            fill="#082f44"
            path="M0,90 C240,20 420,150 660,90 C900,30 1080,140 1320,80 C1380,70 1420,80 1440,86 L1440,180 L0,180 Z"
            seconds={70}
            reverse
          />
          <WaveLayer
            className="nf-wave-c"
            fill="#061825"
            path="M0,100 C200,150 400,50 700,110 C980,160 1200,60 1440,110 L1440,180 L0,180 Z"
            seconds={48}
          />

          <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 pb-16 pt-24">
            <div className="relative mb-5 h-32 w-32 sm:mb-8 sm:h-48 sm:w-48 md:h-56 md:w-56">
              <motion.svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 200 200"
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              >
                <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="1" />
                <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(158,231,238,.28)" strokeWidth="1" strokeDasharray="2 10" />
                <path d="M100 12 L104 28 H96 Z" fill="#ff7d59" />
                <text x="100" y="24" textAnchor="middle" fill="rgba(255,255,255,.7)" fontSize="10" fontFamily="sans-serif">N</text>
                <text x="186" y="104" textAnchor="middle" fill="rgba(255,255,255,.45)" fontSize="10">E</text>
                <text x="100" y="190" textAnchor="middle" fill="rgba(255,255,255,.45)" fontSize="10">S</text>
                <text x="16" y="104" textAnchor="middle" fill="rgba(255,255,255,.45)" fontSize="10">W</text>
              </motion.svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h1
                  id="nf-title"
                  className="nf-shimmer font-display text-5xl font-bold leading-none tracking-tight sm:text-6xl md:text-7xl"
                  animate={{ backgroundPosition: ['140% 0', '-140% 0'] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  style={{ backgroundSize: '220% 100%' }}
                >
                  404
                </motion.h1>
              </div>
            </div>

            <motion.div
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 sm:mb-6 sm:px-4 sm:py-2"
              initial={isPrerender ? false : 'hidden'}
              animate="show"
              custom={0}
              variants={fade}
            >
              <Compass className="h-3.5 w-3.5 shrink-0 text-lagoon sm:h-4 sm:w-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/80 sm:text-xs sm:tracking-[0.22em]">Off the chart</span>
            </motion.div>

            <motion.h2
              className="max-w-[18ch] text-center font-display text-[1.7rem] font-semibold leading-tight sm:max-w-2xl sm:text-4xl md:text-5xl"
              initial={isPrerender ? false : 'hidden'}
              animate="show"
              custom={1}
              variants={fade}
            >
              This island isn’t on the map
            </motion.h2>

            <motion.p
              className="mt-3 max-w-md px-1 text-center text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base"
              initial={isPrerender ? false : 'hidden'}
              animate="show"
              custom={2}
              variants={fade}
            >
              The page you’re looking for drifted off course
              {lostPath ? (
                <>
                  {' '}
                  (<span className="inline-block max-w-full break-all font-medium text-white/90">{lostPath}</span>)
                </>
              ) : null}
              .
            </motion.p>

            <motion.a
              href="#nf-options"
              className="mt-10 flex flex-col items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70"
              initial={isPrerender ? false : 'hidden'}
              animate="show"
              custom={3}
              variants={fade}
            >
              <motion.span
                animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="flex flex-col items-center gap-1"
              >
                Scroll for routes
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </motion.a>
          </div>
        </section>
      </MotionConfig>

      <section id="nf-options" className="relative z-10 scroll-mt-24 bg-[#061825] px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-center text-sm text-white/60 sm:text-base">
            Sail home, or pick a new island below.
          </p>

          <div className="mb-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              to="/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-night sm:text-base"
            >
              <Home className="h-4 w-4 shrink-0" />
              Back to Home
            </Link>
            <Link
              to="/packages"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white sm:text-base"
            >
              Browse packages
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group rounded-2xl border border-white/10 bg-white/10 p-4 text-left sm:p-5"
              >
                <item.icon className="mb-2 h-5 w-5 text-lagoon sm:mb-3" />
                <h3 className="font-display text-base font-semibold text-white sm:text-lg">{item.title}</h3>
                <p className="mt-1 mb-2 text-xs leading-relaxed text-white/65 sm:mb-3 sm:text-sm">{item.copy}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-sand sm:text-sm">
                  {item.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
