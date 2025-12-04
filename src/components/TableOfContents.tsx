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

  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const handleChatState = (e: CustomEvent) => {
      setChatOpen(e.detail.isOpen);
      if (e.detail.isOpen) setIsExpanded(false); // Close TOC if chat opens
    };

    window.addEventListener('chatWidgetState', handleChatState as EventListener);
    return () => window.removeEventListener('chatWidgetState', handleChatState as EventListener);
  }, []);

  return (
    <div className={className}>
      {/* Floating Navigation Button - Right Bottom (Above Chat Widget) */}
      <AnimatePresence>
        {!chatOpen && (
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="fixed right-6 bottom-24 z-[40] p-3 bg-azure text-white rounded-full shadow-xl hover:bg-azure/90 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            {isExpanded ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expandable Navigation Menu */}
      <AnimatePresence>
        {isExpanded && !chatOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="fixed right-20 bottom-24 z-[40] w-64 max-h-[60vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 origin-bottom-right"
          >
            <div className="mb-3 pb-2 border-b border-gray-200">
              <h3 className="font-bold text-night text-sm">Quick Navigation</h3>
            </div>
            <nav className="space-y-1">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm ${activeId === item.id
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
