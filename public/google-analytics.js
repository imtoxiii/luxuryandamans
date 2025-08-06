// Google Analytics 4 Configuration - Optimized for Performance
// Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics 4 Measurement ID

(function() {
  // Defer analytics loading until after critical resources
  function loadAnalytics() {
    // Load Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GA_MEASUREMENT_ID', {
    // Enhanced tracking for SEO
    page_title: document.title,
    page_location: window.location.href,
    content_group1: 'Andaman Tourism', // Content category
    custom_map: {
      'custom_parameter_1': 'package_type',
      'custom_parameter_2': 'user_intent'
    }
  });

  // Enhanced Ecommerce Tracking for Package Bookings
  function trackPackageView(packageName, packagePrice, packageCategory) {
    gtag('event', 'view_item', {
      currency: 'INR',
      value: packagePrice,
      items: [{
        item_id: packageName.toLowerCase().replace(/\s+/g, '-'),
        item_name: packageName,
        category: packageCategory,
        price: packagePrice,
        quantity: 1
      }]
    });
  }

  function trackEnquiry(packageName, packagePrice) {
    gtag('event', 'generate_lead', {
      currency: 'INR',
      value: packagePrice,
      items: [{
        item_id: packageName.toLowerCase().replace(/\s+/g, '-'),
        item_name: packageName,
        price: packagePrice
      }]
    });
  }

  function trackBooking(packageName, packagePrice, bookingValue) {
    gtag('event', 'purchase', {
      transaction_id: 'booking_' + Date.now(),
      currency: 'INR',
      value: bookingValue,
      items: [{
        item_id: packageName.toLowerCase().replace(/\s+/g, '-'),
        item_name: packageName,
        price: packagePrice,
        quantity: 1
      }]
    });
  }

  // SEO Event Tracking
  function trackSEOEvents() {
    // Track scroll depth for content engagement
    let scrollDepths = [25, 50, 75, 100];
    let scrolled = [];

    window.addEventListener('scroll', function() {
      let scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      scrollDepths.forEach(function(depth) {
        if (scrollPercent >= depth && scrolled.indexOf(depth) === -1) {
          scrolled.push(depth);
          gtag('event', 'scroll', {
            event_category: 'engagement',
            event_label: depth + '%',
            value: depth
          });
        }
      });
    });

    // Track external link clicks
    document.addEventListener('click', function(e) {
      if (e.target.tagName === 'A' && e.target.hostname !== window.location.hostname) {
        gtag('event', 'click', {
          event_category: 'external_link',
          event_label: e.target.href,
          transport_type: 'beacon'
        });
      }
    });

    // Track internal navigation
    document.addEventListener('click', function(e) {
      if (e.target.tagName === 'A' && e.target.hostname === window.location.hostname) {
        gtag('event', 'click', {
          event_category: 'internal_link',
          event_label: e.target.href,
          transport_type: 'beacon'
        });
      }
    });

    // Track form interactions
    const forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: form.getAttribute('id') || 'unknown_form',
          transport_type: 'beacon'
        });
      });
    });

    // Track CTA button clicks
    const ctaButtons = document.querySelectorAll('[data-cta]');
    ctaButtons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        gtag('event', 'cta_click', {
          event_category: 'conversion',
          event_label: button.getAttribute('data-cta') || button.textContent,
          transport_type: 'beacon'
        });
      });
    });
  }

  // Initialize tracking when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackSEOEvents);
  } else {
    trackSEOEvents();
  }

    // Make tracking functions globally available
    window.trackPackageView = trackPackageView;
    window.trackEnquiry = trackEnquiry;
    window.trackBooking = trackBooking;
  }

  // Load analytics after page load to avoid blocking render
  if (document.readyState === 'complete') {
    // If page is already loaded, load analytics immediately
    setTimeout(loadAnalytics, 100);
  } else {
    // Otherwise wait for page load
    window.addEventListener('load', function() {
      setTimeout(loadAnalytics, 100);
    });
  }

  // Fallback: Load analytics after 3 seconds regardless
  setTimeout(loadAnalytics, 3000);
})();

// Facebook Pixel Configuration (optional)
// Replace 'FB_PIXEL_ID' with your actual Facebook Pixel ID
/*
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', 'FB_PIXEL_ID');
fbq('track', 'PageView');
*/ 