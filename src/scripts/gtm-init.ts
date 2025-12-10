/**
 * GTM Initialization Script
 * Runs on page load to track page views and set up event listeners
 */

import { trackPageView, trackPhoneClick, trackWhatsAppClick, trackSocialClick } from '../utils/gtm';

// Track page view on load
if (typeof window !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      trackPageView(window.location.pathname, document.title);
      setupEventListeners();
    });
  } else {
    trackPageView(window.location.pathname, document.title);
    setupEventListeners();
  }
}

function setupEventListeners() {
  // Track phone clicks
  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = (e.currentTarget as HTMLAnchorElement).href;
      const phoneNumber = href.replace('tel:', '');
      trackPhoneClick(phoneNumber, window.location.pathname);
    });
  });

  // Track WhatsApp clicks
  document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      trackWhatsAppClick(window.location.pathname);
    });
  });

  // Track social media clicks
  document.querySelectorAll('a[href*="instagram.com"], a[href*="facebook.com"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = (e.currentTarget as HTMLAnchorElement).href;
      let platform = 'unknown';
      if (href.includes('instagram.com')) platform = 'instagram';
      if (href.includes('facebook.com')) platform = 'facebook';
      trackSocialClick(platform, href);
    });
  });

  // Track service detail clicks
  document.querySelectorAll('a[href^="/hizmetler/"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.href;
      const serviceName = anchor.getAttribute('data-gtm-service') || anchor.textContent?.trim() || 'Unknown';
      const serviceSlug = anchor.getAttribute('data-gtm-service-slug') || '';
      
      // Import dynamically to avoid SSR issues
      import('../utils/gtm').then(({ trackServiceClick }) => {
        trackServiceClick(serviceName, href);
      });
    });
  });
}

