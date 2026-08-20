import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

const quickLinks = [
  { name: 'Logistics Guide', href: '/guide' },
  { name: 'Itinerary Guide', href: '/travel-guide' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Experiences', href: '/experiences' },
  { name: 'Packages', href: '/packages' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Trip Calculator', href: '/calculator' },
  { name: 'Contact', href: '/contact' },
  { name: 'Best Travel Agency', href: '/blog/best-travel-agency-andaman-2026' },
  { name: 'Packages from India', href: '/blog/andaman-packages-from-india-2026' },
  { name: 'Havelock Travel Guide', href: '/blog/havelock-island-travel-guide-2026' },
  { name: 'International Visitors', href: '/blog/andaman-islands-international-travel-guide-2026' },
  { name: 'India e-Visa & Andaman', href: '/blog/india-evisa-andaman-trip-2026' },
  { name: 'Havelock Island', href: '/locations/havelock-island' },
  { name: 'Neil Island', href: '/locations/neil-island' },
  { name: 'Port Blair', href: '/locations/port-blair' },
];

const destinationLinks = [
  { name: 'Port Blair Guide', href: '/destinations/port-blair-destinations' },
  { name: 'Havelock Guide', href: '/destinations/havelock-destinations' },
  { name: 'Neil Island Guide', href: '/destinations/neil-destinations' },
  { name: 'Baratang Guide', href: '/destinations/baratang-destinations' },
  { name: 'Cellular Jail', href: '/destinations/cellular-jail' },
  { name: 'Ross Island', href: '/destinations/ross-island' },
  { name: 'North Bay Island', href: '/destinations/north-bay-island' },
  { name: 'Radhanagar Beach', href: '/destinations/radhanagar-beach' },
  { name: 'Elephant Beach', href: '/destinations/elephant-beach' },
  { name: 'Bharatpur Beach', href: '/destinations/bharatpur-beach' },
  { name: 'Natural Bridge', href: '/destinations/natural-bridge' },
  { name: 'Limestone Caves', href: '/destinations/limestone-caves' },
  { name: 'Mud Volcano (Baratang)', href: '/destinations/mud-volcano' },
  { name: 'Ross & Smith Islands', href: '/destinations/ross-smith-islands' },
  { name: 'Barren Island', href: '/destinations/barren-island' },
];

const experienceLinks = [
  { name: 'Scuba Diving', href: '/experiences/scuba-diving' },
  { name: 'Bioluminescence Kayaking', href: '/experiences/bioluminescence-kayaking' },
  { name: 'Luxury Beach Resorts', href: '/experiences/luxury-resorts' },
  { name: 'Island Hopping', href: '/experiences/island-hopping' },
  { name: 'Sunset Cruises', href: '/experiences/sunset-cruises' },
  { name: 'Wellness Retreats', href: '/experiences/wellness-retreats' },
  { name: 'Romantic Getaways', href: '/experiences/romantic-getaways' },
  { name: 'Family Adventures', href: '/experiences/family-adventures' },
  { name: 'Sea Walk', href: '/experiences/sea-walk' },
  { name: 'Game Fishing', href: '/experiences/game-fishing' },
  { name: 'Snorkeling', href: '/experiences/snorkeling' },
  { name: 'Jungle Trekking', href: '/experiences/trekking' },
  { name: 'Cultural Tours', href: '/experiences/cultural-tours' },
  { name: 'Bird Watching', href: '/experiences/bird-watching' },
  { name: 'Mangrove Creek Safari', href: '/experiences/mangrove-creek' },
  { name: 'Parasailing', href: '/experiences/parasailing' },
  { name: 'Jet Skiing', href: '/experiences/jet-ski' },
];

const social = [
  { href: 'https://www.instagram.com/luxuryandamans', label: 'Instagram', Icon: Instagram },
  { href: 'https://www.facebook.com/luxuryandamans', label: 'Facebook', Icon: Facebook },
  { href: 'https://x.com/luxuryandaman', label: 'Twitter', Icon: Twitter },
];

const FooterColumn = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 md:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left md:pointer-events-none md:py-0"
        aria-expanded={open}
      >
        <h4 className="font-serif text-xl font-semibold text-slate-900">{title}</h4>
        <ChevronDown
          className={`h-4 w-4 text-slate-400 transition-transform duration-300 md:hidden ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`${open ? 'block pb-5' : 'hidden'} md:block md:pb-0 md:pt-4`}>
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#f7f4ef] text-slate-900">
      <div className="container mx-auto px-4 py-10 md:px-6 md:py-14">
        <div className="mb-10 flex flex-col gap-6 border-b border-slate-200/80 pb-8 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <Link to="/" className="inline-block">
              <span className="block font-serif text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Luxury <span className="font-script text-[1.15em] font-normal text-slate-800">Andamans</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-slate-500 md:text-[15px]">
              Port Blair–based agency for honeymoon, family, and custom island trips.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {social.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="tel:+916297576826"
              className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900"
            >
              <Phone className="h-4 w-4" />
              +91 62975 76826
            </a>
            <span className="hidden text-slate-300 sm:inline">·</span>
            <a
              href="mailto:info@luxuryandamans.com"
              className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900"
            >
              <Mail className="h-4 w-4" />
              info@luxuryandamans.com
            </a>
            <Link
              to="/enquiry"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0a2740] px-5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#041018] sm:ml-2"
            >
              Plan my trip
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-2 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4 lg:col-span-3">
            <div className="mb-5 flex items-start gap-2.5 text-sm text-slate-500">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
              <span>
                Marine Hill Road, Port Blair
                <span className="mt-0.5 block text-xs text-slate-400">Andaman & Nicobar Islands</span>
              </span>
            </div>
            <p className="text-sm text-slate-500">
              <span className="block font-medium text-slate-700">+91 94337 31478</span>
              <span className="text-xs text-slate-400">Mon–Sat 9:00–18:00</span>
            </p>
          </div>

          <div className="md:col-span-8 lg:col-span-9">
            <div className="grid md:grid-cols-3 md:gap-8">
              <FooterColumn title="Explore">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-1">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-[13px] leading-snug text-slate-500 transition-colors hover:text-slate-900"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>

              <FooterColumn title="Islands">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-1">
                  {destinationLinks.map((dest) => (
                    <li key={dest.href}>
                      <Link
                        to={dest.href}
                        className="text-[13px] leading-snug text-slate-500 transition-colors hover:text-slate-900"
                      >
                        {dest.name}
                      </Link>
                    </li>
                  ))}
                  <li className="col-span-2 md:col-span-1">
                    <Link
                      to="/destinations"
                      className="inline-flex items-center gap-1 text-[13px] font-medium text-slate-800 transition-colors hover:text-slate-900"
                    >
                      View all destinations
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                </ul>
              </FooterColumn>

              <FooterColumn title="Experiences">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-1">
                  {experienceLinks.map((experience) => (
                    <li key={experience.href}>
                      <Link
                        to={experience.href}
                        className="text-[13px] leading-snug text-slate-500 transition-colors hover:text-slate-900"
                      >
                        {experience.name}
                      </Link>
                    </li>
                  ))}
                  <li className="col-span-2 md:col-span-1">
                    <Link
                      to="/experiences"
                      className="inline-flex items-center gap-1 text-[13px] font-medium text-slate-800 transition-colors hover:text-slate-900"
                    >
                      View all experiences
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200/80">
        <div className="container mx-auto flex flex-col items-start justify-between gap-3 px-4 py-4 md:flex-row md:items-center md:px-6">
          <p className="text-xs text-slate-400 md:text-sm">
            © 2026 Luxury Andamans. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/privacy" className="text-xs text-slate-400 transition-colors hover:text-slate-700 md:text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-slate-400 transition-colors hover:text-slate-700 md:text-sm">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-xs text-slate-400 transition-colors hover:text-slate-700 md:text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
