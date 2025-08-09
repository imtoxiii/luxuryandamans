/**
 * Performance and Analytics Monitoring
 * This script provides real-time performance monitoring and user analytics
 */

class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.startTime = performance.now();
    this.init();
  }

  init() {
    // Monitor page load performance
    this.monitorPageLoad();
    
    // Monitor user interactions
    this.monitorUserInteractions();
    
    // Monitor API calls
    this.monitorAPIRequests();
    
    // Monitor errors
    this.monitorErrors();
    
    // Send periodic reports
    this.startPeriodicReporting();
  }

  monitorPageLoad() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        
        this.metrics.pageLoad = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          totalTime: navigation.loadEventEnd - navigation.fetchStart,
          firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
          firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
          timestamp: new Date().toISOString()
        };
        
        console.log('📊 Page Load Metrics:', this.metrics.pageLoad);
        this.sendMetrics('page_load', this.metrics.pageLoad);
      }, 1000);
    });
  }

  monitorUserInteractions() {
    // Track form submissions
    document.addEventListener('submit', (e) => {
      const form = e.target;
      const formType = form.querySelector('[name="form_type"]')?.value || 'unknown';
      
      this.metrics.formSubmissions = this.metrics.formSubmissions || [];
      this.metrics.formSubmissions.push({
        type: formType,
        timestamp: new Date().toISOString(),
        url: window.location.pathname
      });
      
      console.log('📝 Form Submission Tracked:', formType);
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // Track milestone scroll depths
        [25, 50, 75, 100].forEach(milestone => {
          if (scrollDepth >= milestone && !this.metrics[`scroll_${milestone}`]) {
            this.metrics[`scroll_${milestone}`] = true;
            console.log(`📜 Scroll Depth: ${milestone}%`);
            this.sendMetrics('scroll_depth', { depth: milestone, url: window.location.pathname });
          }
        });
      }
    });

    // Track time on page
    let timeOnPage = 0;
    const timeTracker = setInterval(() => {
      timeOnPage += 1;
      
      // Send time milestones
      if ([30, 60, 120, 300].includes(timeOnPage)) {
        console.log(`⏱️ Time on Page: ${timeOnPage}s`);
        this.sendMetrics('time_on_page', { seconds: timeOnPage, url: window.location.pathname });
      }
    }, 1000);

    // Clear timer when leaving page
    window.addEventListener('beforeunload', () => {
      clearInterval(timeTracker);
      this.sendMetrics('session_end', { 
        totalTime: timeOnPage, 
        maxScrollDepth, 
        url: window.location.pathname 
      });
    });
  }

  monitorAPIRequests() {
    // Monitor fetch requests (email submissions)
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const startTime = performance.now();
      const url = args[0];
      
      try {
        const response = await originalFetch(...args);
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        // Track email API calls
        if (url.includes('processForm.php') || url.includes('backend')) {
          this.metrics.apiCalls = this.metrics.apiCalls || [];
          this.metrics.apiCalls.push({
            url,
            status: response.status,
            duration,
            success: response.ok,
            timestamp: new Date().toISOString()
          });
          
          console.log(`🌐 API Call: ${response.status} (${duration.toFixed(2)}ms)`);
          this.sendMetrics('api_call', { 
            endpoint: 'email', 
            status: response.status, 
            duration, 
            success: response.ok 
          });
        }
        
        return response;
      } catch (error) {
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        console.error('🚨 API Error:', error);
        this.sendMetrics('api_error', { 
          endpoint: 'email', 
          error: error.message, 
          duration 
        });
        
        throw error;
      }
    };
  }

  monitorErrors() {
    // Global error handler
    window.addEventListener('error', (event) => {
      console.error('🚨 JavaScript Error:', event.error);
      this.sendMetrics('javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack,
        url: window.location.pathname
      });
    });

    // Promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      console.error('🚨 Unhandled Promise Rejection:', event.reason);
      this.sendMetrics('promise_rejection', {
        reason: event.reason?.toString(),
        url: window.location.pathname
      });
    });
  }

  sendMetrics(type, data) {
    // In a real application, you would send this to your analytics service
    // For now, we'll just log it and store in localStorage for debugging
    
    const metric = {
      type,
      data,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      referrer: document.referrer
    };

    // Store in localStorage for debugging
    const metrics = JSON.parse(localStorage.getItem('performance_metrics') || '[]');
    metrics.push(metric);
    
    // Keep only last 100 metrics
    if (metrics.length > 100) {
      metrics.splice(0, metrics.length - 100);
    }
    
    localStorage.setItem('performance_metrics', JSON.stringify(metrics));

    // Send to Google Analytics if available
    if (typeof gtag !== 'undefined') {
      gtag('event', type, {
        custom_parameter_1: JSON.stringify(data),
        event_category: 'performance',
        transport_type: 'beacon'
      });
    }
  }

  startPeriodicReporting() {
    // Send a comprehensive report every 5 minutes
    setInterval(() => {
      const report = {
        totalMetrics: Object.keys(this.metrics).length,
        sessionDuration: Math.round((performance.now() - this.startTime) / 1000),
        currentUrl: window.location.pathname,
        memoryUsage: performance.memory ? {
          used: Math.round(performance.memory.usedJSHeapSize / 1048576),
          total: Math.round(performance.memory.totalJSHeapSize / 1048576)
        } : null
      };
      
      console.log('📊 Periodic Performance Report:', report);
      this.sendMetrics('periodic_report', report);
    }, 300000); // 5 minutes
  }

  // Public method to get current metrics
  getMetrics() {
    return {
      ...this.metrics,
      sessionDuration: Math.round((performance.now() - this.startTime) / 1000),
      timestamp: new Date().toISOString()
    };
  }

  // Public method to get metrics from localStorage
  static getStoredMetrics() {
    return JSON.parse(localStorage.getItem('performance_metrics') || '[]');
  }

  // Public method to clear stored metrics
  static clearStoredMetrics() {
    localStorage.removeItem('performance_metrics');
    console.log('🧹 Performance metrics cleared');
  }
}

// Initialize performance monitoring when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.performanceMonitor = new PerformanceMonitor();
    console.log('📊 Performance monitoring initialized');
  });
} else {
  window.performanceMonitor = new PerformanceMonitor();
  console.log('📊 Performance monitoring initialized');
}

// Export for debugging
window.PerformanceMonitor = PerformanceMonitor;
