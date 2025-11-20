import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  description: string;
  image: string;
  delay: number;
  link?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, description, image, delay, link }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const getPath = (title: string) => {
    if (link) return link;
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    return `/experiences/${slug}`;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="h-full"
    >
      <Link 
        to={getPath(title)}
        className="card-modern group h-full block cursor-pointer select-none overflow-hidden flex flex-col min-h-[400px] md:min-h-[450px] relative"
      >
        <div className="relative flex-1 overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/30 to-transparent 
                       group-hover:from-night/90 group-hover:via-night/40 transition-all duration-700 ease-out z-10" 
          />
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            draggable="false"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-20"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="space-y-3">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-pearl leading-tight"
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {title}
              </motion.h3>
              <motion.p 
                className="text-pearl/90 text-sm md:text-base leading-relaxed"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {description}
              </motion.p>
              <motion.div 
                className="flex items-center text-pearl/90 text-sm font-medium mt-4"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <span className="mr-2">Explore Experience</span>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Enhanced decorative element */}
          <motion.div 
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full
                       flex items-center justify-center z-20"
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ 
              opacity: 1, 
              scale: 1,
              rotate: 10,
              backgroundColor: "rgba(255, 255, 255, 0.15)"
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </motion.div>
        </div>
        
        {/* Enhanced border animation */}
        <motion.div
          className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
          whileHover={{
            borderColor: "rgba(255, 255, 255, 0.3)",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
          }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  );
};

export default ExperienceCard;