/**
 * Google Tag Manager DataLayer Utility
 * 
 * This utility provides functions to push events to the GTM dataLayer
 * for comprehensive tracking of user interactions.
 */

// Ensure dataLayer exists
declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Initialize dataLayer if it doesn't exist
 */
export function initDataLayer(): void {
  if (typeof window !== 'undefined' && !window.dataLayer) {
    window.dataLayer = [];
  }
}

/**
 * Push event to dataLayer
 */
export function pushToDataLayer(data: Record<string, any>): void {
  if (typeof window !== 'undefined') {
    initDataLayer();
    window.dataLayer.push(data);
  }
}

/**
 * Track page view
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  pushToDataLayer({
    event: 'page_view',
    page_path: pagePath,
    page_title: pageTitle || document.title,
    page_location: window.location.href,
  });
}

/**
 * Track phone click
 */
export function trackPhoneClick(phoneNumber: string, location?: string): void {
  pushToDataLayer({
    event: 'phone_click',
    phone_number: phoneNumber,
    location: location || window.location.pathname,
    page_path: window.location.pathname,
  });
}

/**
 * Track WhatsApp click
 */
export function trackWhatsAppClick(location?: string, serviceType?: string): void {
  pushToDataLayer({
    event: 'whatsapp_click',
    location: location || window.location.pathname,
    service_type: serviceType,
    page_path: window.location.pathname,
  });
}

/**
 * Track service detail click
 */
export function trackServiceClick(serviceName: string, serviceUrl: string): void {
  pushToDataLayer({
    event: 'service_click',
    service_name: serviceName,
    service_url: serviceUrl,
    page_path: window.location.pathname,
  });
}

/**
 * Track FAQ expand
 */
export function trackFAQExpand(question: string, faqId?: string): void {
  pushToDataLayer({
    event: 'faq_expand',
    faq_question: question,
    faq_id: faqId,
    page_path: window.location.pathname,
  });
}

/**
 * Track social media click
 */
export function trackSocialClick(platform: string, url: string): void {
  pushToDataLayer({
    event: 'social_click',
    social_platform: platform,
    social_url: url,
    page_path: window.location.pathname,
  });
}

/**
 * Track CTA button click
 */
export function trackCTAClick(ctaText: string, ctaLocation: string): void {
  pushToDataLayer({
    event: 'cta_click',
    cta_text: ctaText,
    cta_location: ctaLocation,
    page_path: window.location.pathname,
  });
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(percentage: number): void {
  pushToDataLayer({
    event: 'scroll_depth',
    scroll_percentage: percentage,
    page_path: window.location.pathname,
  });
}

/**
 * Track form submission (for future use)
 */
export function trackFormSubmit(formName: string, formLocation: string): void {
  pushToDataLayer({
    event: 'form_submit',
    form_name: formName,
    form_location: formLocation,
    page_path: window.location.pathname,
  });
}

/**
 * Track video play (for hero video)
 */
export function trackVideoPlay(videoName: string, videoLocation: string): void {
  pushToDataLayer({
    event: 'video_play',
    video_name: videoName,
    video_location: videoLocation,
    page_path: window.location.pathname,
  });
}

/**
 * Track external link click
 */
export function trackExternalLink(url: string, linkText?: string): void {
  pushToDataLayer({
    event: 'external_link_click',
    link_url: url,
    link_text: linkText,
    page_path: window.location.pathname,
  });
}

