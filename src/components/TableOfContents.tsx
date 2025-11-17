import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
  level?: number;
}

interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

const TableOfContents = ({ items, className = '' }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px',
      }
    );

    // Observe all sections
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsExpanded(false); // Close menu after navigation
    }
  };

  return (
    <div className={className}>
      {/* Floating Navigation Button - Left Center */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-azure text-white rounded-full shadow-xl hover:bg-azure/90 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={false}
      >
        {isExpanded ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      {/* Expandable Navigation Menu */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="fixed left-20 top-1/2 -translate-y-1/2 z-50 w-64 max-h-[70vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-4"
          >
            <div className="mb-3 pb-2 border-b border-gray-200">
              <h3 className="font-bold text-night text-sm">Quick Navigation</h3>
            </div>
            <nav className="space-y-1">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm ${
                    activeId === item.id
                      ? 'bg-azure/10 text-azure font-semibold border-l-2 border-azure'
                      : 'text-night/70 hover:bg-gray-50 hover:text-night'
                  } ${item.level === 2 ? 'ml-4 text-xs' : ''}`}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TableOfContents;
