import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionIntro from './SectionIntro';

const testimonials = [
  {
    name: 'Diya Krishnan',
    location: 'Chennai',
    trip: 'Sisters · Oct 2025',
    rating: 5,
    comment:
      'Just the two of us — no honeymoon upsell. Havelock stay was a two-minute walk to the beach. Baratang started at 4am, brutal, but the caves were worth it.',
  },
  {
    name: 'Rahul Mehta',
    location: 'Pune',
    trip: 'Family · Dec 2025',
    rating: 4,
    comment:
      'Parents (65) and our 8-year-old. They put us on the slower ferry after dad said he gets seasick. Scuba got cancelled for swell — sea walk the next morning, no extra charge.',
  },
  {
    name: 'Sneha Rao',
    location: 'Hyderabad',
    trip: 'Couple · Feb 2026',
    rating: 5,
    comment:
      'I messaged them constantly the week before. They still replied. Radhanagar sunset was the photo we wanted. They warned us Elephant Beach visibility was low. Fish yes, magazine water no.',
  },
  {
    name: 'Nikhil Joshi',
    location: 'Jaipur',
    trip: 'Friends · Jan 2026',
    rating: 4,
    comment:
      'Four of us, one budget. They didn’t push the ₹70k package. Jolly Buoy permits were done the day before. Jet ski was extra and they said so upfront.',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

const Testimonials = () => {
  return (
    <section className="container mx-auto px-4 py-6 md:py-8">
      <SectionIntro title="Stories of" script="Paradise">
        From families, couples, and first-timers who actually took the trip.
      </SectionIntro>

      <div className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-4 md:gap-4 md:overflow-visible">
        {testimonials.map((review, index) => (
          <motion.article
            key={review.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06, ease }}
            className="flex w-[min(78vw,280px)] shrink-0 snap-start flex-col rounded-2xl border border-slate-200/80 bg-[#f7f4ef] p-4 md:w-auto md:p-5"
          >
            <div className="mb-2.5 flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < review.rating ? 'fill-amber-400 text-amber-400' : 'fill-none text-slate-300'
                  }`}
                />
              ))}
            </div>
            <p className="line-clamp-5 flex-1 text-[13px] leading-relaxed text-slate-600">
              “{review.comment}”
            </p>
            <div className="mt-4 flex items-center gap-2.5 border-t border-slate-200/70 pt-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-display font-semibold tracking-wide text-slate-700">
                {initials(review.name)}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-display font-semibold text-slate-900">
                  {review.name}
                </p>
                <p className="truncate text-[11px] text-slate-500">
                  {review.location}
                  <span className="mx-1 opacity-40">·</span>
                  {review.trip}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
