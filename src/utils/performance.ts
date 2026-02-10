
// Utility to detect low-end devices and optimize performance
// This is a heuristic-based approach

export const isLowEndDevice = (): boolean => {
  if (typeof window === 'undefined') return false;

  // Check for Reduced Motion preference first
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return true;

  // Hardware Concurrency (number of logic processors)
  const logicalProcessors = navigator.hardwareConcurrency;
  if (logicalProcessors && logicalProcessors <= 2) {
    return true; // Likely a very low-end device
  }

  // Device Memory (RAM in GB) - API not available in all browsers
  // @ts-ignore
  const deviceMemory = navigator.deviceMemory;
  if (deviceMemory && deviceMemory <= 2) {
    return true;
  }

  // Check for specific mobile user agents that are known to be lower end (optional/risky)
  // For now, we rely on hardware specs.

  return false;
};

// Function to apply performance optimizations
export const applyPerformanceOptimizations = () => {
  const isLowEnd = isLowEndDevice();
  
  if (isLowEnd) {
    document.documentElement.classList.add('low-power-mode');
    console.log('Low power mode enabled for performance optimization');
  } else {
    document.documentElement.classList.remove('low-power-mode');
  }
  
  return isLowEnd;
};
