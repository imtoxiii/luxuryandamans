import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPackageCardImage } from '../lib/imageLoader';
import SmartImage from './SmartImage';

interface PackageCardProps {
  title: string;
  description: string;
  price: number;
  duration: string;
  groupSize: string;
  features: string[];
  image: string;
  slug: string;
  id?: string;
  delay?: number;
  linkSuffix?: string;
  featured?: boolean;
  category?: string;
  nightsPlan?: string;
  layout?: 'portrait' | 'landscape';
  reverse?: boolean;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(price);

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  description,
  price,
  duration,
  groupSize,
  features,
  image,
  slug,
  id,
  delay = 0,
  linkSuffix = '',
  category,
  nightsPlan,
  layout = 'portrait',
  reverse = false,
}) => {
  const cardImage = getPackageCardImage(id || slug);
  const [displayImage, setDisplayImage] = useState(image);

  useEffect(() => {
    if (cardImage) {
      const img = new Image();
      img.onload = () => setDisplayImage(cardImage);
      img.onerror = () => setDisplayImage(image);
      img.src = cardImage;
    } else {
      setDisplayImage(image);
    }
  }, [cardImage, image]);

  const curveClass = reverse
    ? 'rounded-[0.85rem_2.75rem_0.85rem_2.75rem]'
    : 'rounded-[2.75rem_0.85rem_2.75rem_0.85rem]';

  if (layout === 'landscape') {
    const imageCurve = reverse
      ? 'md:rounded-l-[4.5rem] md:rounded-r-[2.5rem] rounded-[2.5rem_2.5rem_0.9rem_0.9rem]'
      : 'md:rounded-r-[4.5rem] md:rounded-l-[2.5rem] rounded-[2.5rem_2.5rem_0.9rem_0.9rem]';
    const cardCurve = reverse
      ? 'rounded-[1.1rem_2.6rem_1.1rem_2.6rem]'
      : 'rounded-[2.6rem_1.1rem_2.6rem_1.1rem]';

    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
        className="h-full"
      >
        <Link
          to={`/packages/${slug}${linkSuffix}`}
          className={`group relative flex h-full min-h-[520px] flex-col overflow-hidden bg-white shadow-[0_18px_50px_-28px_rgba(15,40,70,0.45)] ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_-24px_rgba(15,40,70,0.4)] md:min-h-[300px] md:flex-row ${cardCurve} ${reverse ? 'md:flex-row-reverse' : ''}`}
        >
          <div className={`relative h-64 w-full shrink-0 overflow-hidden md:h-auto md:w-[44%] ${imageCurve}`}>
            <div className="h-full w-full origin-center transition-transform duration-[1.3s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
              <SmartImage
                src={displayImage}
                alt={title}
                containerType="card"
                fallbackSrc={image}
                className="h-full w-full object-cover"
                animateOnLoad={true}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            {category && (
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-800 backdrop-blur-sm">
                {category}
              </span>
            )}
          </div>

          <div className="relative flex flex-1 flex-col justify-between px-6 py-6 md:px-9 md:py-8">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-blue-600" />
                  {duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-blue-600" />
                  {groupSize}
                </span>
                {nightsPlan && (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-blue-600" />
                    {nightsPlan}
                  </span>
                )}
              </div>
              <h3 className="font-display text-2xl font-bold leading-tight text-slate-900 md:text-[1.85rem]">
                {title}
              </h3>
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-600 md:line-clamp-3">
                {description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {features.slice(0, 4).map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-end justify-between gap-4 border-t border-slate-100 pt-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">From</p>
                <p className="font-display text-3xl font-semibold leading-none text-slate-900">
                  ₹{formatPrice(price)}
                  <span className="ml-1 text-sm font-medium text-slate-400">/ person</span>
                </p>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/25 transition-transform duration-400 group-hover:rotate-12 group-hover:scale-105">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        to={`/packages/${slug}${linkSuffix}`}
        className={`group relative isolate block h-[640px] overflow-hidden ${curveClass}`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-full w-full origin-center transition-transform duration-[1.3s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]">
            <SmartImage
              src={displayImage}
              alt={title}
              containerType="card"
              fallbackSrc={image}
              className="h-full w-full object-cover"
              animateOnLoad={true}
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

        <div className="relative z-20 flex h-full flex-col justify-between p-6 md:p-7">
          <div className="flex items-start justify-between gap-3">
            <span className="rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              {category ? `${category} · ${duration}` : `${duration} · ${groupSize}`}
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/15 text-white backdrop-blur-md transition-colors duration-400 group-hover:bg-white group-hover:text-night">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          <div>
            <p className="text-sm font-medium text-white/80">From</p>
            <p className="font-display text-3xl font-semibold leading-none text-white">
              ₹{formatPrice(price)}
            </p>
            <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-3xl">
              {title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/90">
              {description}
            </p>
            {nightsPlan && (
              <p className="mt-3 text-xs font-medium tracking-wide text-cyan-100/90">{nightsPlan}</p>
            )}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {features.slice(0, 3).map((feature) => (
                <span
                  key={feature}
                  className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PackageCard;
