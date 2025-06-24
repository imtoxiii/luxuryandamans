import { RefObject, useEffect, useState, useCallback } from 'react';

interface ScrollSection {
  ref: RefObject<HTMLElement>;
  type: 'vertical' | 'horizontal';
}

export const useScrollSequence = (sections: ScrollSection[]) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [scrollProgress, setScrollProgress] = useState(0);

  const smoothScrollTo = useCallback((element: HTMLElement, offset: number, duration: number) => {
    const start = element.scrollLeft;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smoother acceleration/deceleration
      const easeInOutCubic = (t: number) => {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const currentPosition = start + offset * easeInOutCubic(progress);
      element.scrollLeft = currentPosition;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  const handleSectionTransition = useCallback((nextIndex: number) => {
    if (nextIndex >= 0 && nextIndex < sections.length) {
      setIsScrolling(true);
      setActiveIndex(nextIndex);

      const targetSection = sections[nextIndex].ref.current;
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start'
        });

        // Add a small delay before allowing next scroll
        setTimeout(() => {
          setIsScrolling(false);
          setScrollProgress(0);
        }, 800);
      }
    }
  }, [sections]);

  useEffect(() => {
    let scrollEndTimeout: NodeJS.Timeout;
    let lastScrollTime = Date.now();
    let lastDeltaY = 0;
    let accumulatedDelta = 0;

    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      
      const currentTime = Date.now();
      const timeDiff = currentTime - lastScrollTime;
      
      // Accumulate scroll delta for smoother transitions
      accumulatedDelta += e.deltaY;
      
      // Throttle scroll events and check minimum time between scrolls
      if (timeDiff < 50 || isScrolling) return;
      
      const direction = e.deltaY > 0 ? 'down' : 'up';
      setScrollDirection(direction);

      const currentSection = sections[activeIndex];
      if (!currentSection?.ref.current) return;

      // Reset accumulated delta if direction changed
      if (Math.sign(e.deltaY) !== Math.sign(lastDeltaY)) {
        accumulatedDelta = e.deltaY;
      }
      lastDeltaY = e.deltaY;

      if (currentSection.type === 'horizontal') {
        const container = currentSection.ref.current;
        const containerWidth = container.clientWidth;
        const maxScroll = container.scrollWidth - containerWidth;
        const currentScroll = container.scrollLeft;

        // Calculate scroll progress
        const progress = currentScroll / maxScroll;
        setScrollProgress(progress);

        const isAtStart = currentScroll <= 0;
        const isAtEnd = currentScroll >= maxScroll - 10;

        if ((direction === 'up' && isAtStart) || (direction === 'down' && isAtEnd)) {
          // Transition to next/previous section
          const nextIndex = direction === 'down' ? activeIndex + 1 : activeIndex - 1;
          handleSectionTransition(nextIndex);
        } else {
          // Smooth horizontal scroll
          const scrollAmount = Math.min(Math.abs(accumulatedDelta), 100) * (direction === 'down' ? 1 : -1);
          smoothScrollTo(container, scrollAmount, 500);
        }
      } else {
        // Vertical section transition
        const nextIndex = direction === 'down' ? activeIndex + 1 : activeIndex - 1;
        handleSectionTransition(nextIndex);
      }

      lastScrollTime = currentTime;

      // Reset accumulated delta after scroll
      clearTimeout(scrollEndTimeout);
      scrollEndTimeout = setTimeout(() => {
        accumulatedDelta = 0;
      }, 150);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
      clearTimeout(scrollEndTimeout);
    };
  }, [sections, activeIndex, isScrolling, handleSectionTransition, smoothScrollTo]);

  return { activeIndex, scrollDirection, scrollProgress };
};