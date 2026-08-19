import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SmartImage from './SmartImage';

const ease = [0.22, 1, 0.36, 1] as const;

interface HomeMediaCardProps {
  href: string;
  image: string;
  title: string;
  description?: string;
  badge?: string;
  tags?: string[];
  reverse?: boolean;
  delay?: number;
}

const HomeMediaCard = ({
  href,
  image,
  title,
  description,
  badge,
  tags = [],
  reverse = false,
  delay = 0,
}: HomeMediaCardProps) => {
  const curveClass = reverse
    ? 'rounded-[0.85rem_2.75rem_0.85rem_2.75rem]'
    : 'rounded-[2.75rem_0.85rem_2.75rem_0.85rem]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay, ease }}
      className="h-full"
    >
      <Link
        to={href}
        className={`group relative isolate block h-[600px] overflow-hidden md:h-[640px] ${curveClass}`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-full w-full origin-center transition-transform duration-[1.3s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]">
            <SmartImage
              src={image}
              alt={title}
              containerType="card"
              className="h-full w-full object-cover"
              animateOnLoad={true}
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

        <div className="relative z-20 flex h-full flex-col justify-between p-6 md:p-7">
          <div className="flex items-start justify-between gap-3">
            {badge ? (
              <span className="rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                {badge}
              </span>
            ) : (
              <span />
            )}
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/15 text-white backdrop-blur-md transition-colors duration-400 group-hover:bg-white group-hover:text-[#041018]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-3xl">
              {title}
            </h3>
            {description && (
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/85">
                {description}
              </p>
            )}
            {tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default HomeMediaCard;
