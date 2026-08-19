import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const SectionIntro = ({
  title,
  script,
  children,
}: {
  title: string;
  script?: string;
  children?: ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, ease }}
    className="mb-6 text-center md:mb-8"
  >
    <h2 className="font-serif text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
      {title}
      {script ? (
        <>
          {' '}
          <span className="font-script text-[1.15em] font-normal text-slate-800">{script}</span>
        </>
      ) : null}
    </h2>
    {children ? (
      <p className="mx-auto mt-3 max-w-2xl text-[15px] font-light leading-relaxed text-slate-500 md:text-base">
        {children}
      </p>
    ) : null}
  </motion.div>
);

export default SectionIntro;
