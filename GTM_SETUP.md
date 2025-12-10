# Google Tag Manager Setup Guide

## Overview

Google Tag Manager is integrated into the İkitelli Turbocu website in a **non-blocking, performance-safe** manner with **dataLayer** support for comprehensive event tracking. The GTM script loads asynchronously and does not block page rendering.

## Configuration

### GTM ID

- **Current GTM ID**: `GTM-5ZCTR3GC` (hardcoded as fallback)
- **Environment Variable**: `PUBLIC_GTM_ID` (optional, overrides hardcoded value)
- **Location**: Cloudflare Pages → Settings → Environment Variables (or `.env` file for local dev)

## Implementation Details

### Components

- **GTMHead.astro** - Initializes dataLayer and injects GTM script in `<head>`
- **GTMBody.astro** - Injects noscript fallback in `<body>`
- **BaseLayout.astro** - Contains inline event tracking script for automatic event capture
- **utils/gtm.ts** - Utility functions for manual event tracking

### DataLayer Structure

The dataLayer is automatically initialized on page load with the following structure:

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'page_path': window.location.pathname,
  'page_title': document.title,
  'page_location': window.location.href
});
```

### Automatic Event Tracking

The following events are automatically tracked via inline script in BaseLayout:

1. **Page View** - Fired on every page load
2. **Phone Click** - Fired when user clicks `tel:` links
3. **WhatsApp Click** - Fired when user clicks WhatsApp links
4. **Social Media Click** - Fired when user clicks Instagram/Facebook links
5. **Service Click** - Fired when user clicks service detail links

### Performance Features

✅ **Async loading** - Script loads asynchronously  
✅ **Non-blocking** - Does not block page rendering  
✅ **Preconnect** - DNS prefetch for googletagmanager.com  
✅ **Conditional rendering** - Only loads if GTM ID is present  
✅ **Console warning** - Warns in development if GTM ID is missing  

## Recommended GTM Tags

### 1. Google Analytics 4

**Tag Type**: Google Analytics: GA4 Configuration  
**Measurement ID**: Your GA4 Measurement ID  
**Trigger**: All Pages  

### 2. Google Ads Conversion Tracking

**Tag Type**: Google Ads: Conversion Tracking  
**Conversion ID**: Your Google Ads Conversion ID  
**Conversion Label**: Your Conversion Label  
**Trigger**: Conversion events (see below)  

### 3. Phone Click Tracking

**Tag Type**: Google Analytics: GA4 Event  
**Event Name**: `phone_click`  
**Trigger**: 
- Trigger Type: **Custom Event**
- Event name: `phone_click`

**Event Parameters** (automatically sent via dataLayer):
- `phone_number`: Phone number that was clicked
- `location`: Page path where click occurred
- `page_path`: Current page path

### 4. WhatsApp Click Tracking

**Tag Type**: Google Analytics: GA4 Event  
**Event Name**: `whatsapp_click`  
**Trigger**: 
- Trigger Type: **Custom Event**
- Event name: `whatsapp_click`

**Event Parameters** (automatically sent via dataLayer):
- `location`: Page path where click occurred
- `page_path`: Current page path

### 5. Service Click Tracking

**Tag Type**: Google Analytics: GA4 Event  
**Event Name**: `service_click`  
**Trigger**: 
- Trigger Type: **Custom Event**
- Event name: `service_click`

**Event Parameters** (automatically sent via dataLayer):
- `service_name`: Name of the service clicked
- `service_url`: URL of the service page
- `page_path`: Current page path

### 6. FAQ Expand Tracking

**Tag Type**: Google Analytics: GA4 Event  
**Event Name**: `faq_expand`  
**Trigger**: 
- Trigger Type: **Custom Event**
- Event name: `faq_expand`

**Event Parameters** (automatically sent via dataLayer):
- `faq_question`: The question that was expanded
- `faq_id`: Unique identifier for the FAQ item
- `page_path`: Current page path

### 7. Social Media Click Tracking

**Tag Type**: Google Analytics: GA4 Event  
**Event Name**: `social_click`  
**Trigger**: 
- Trigger Type: **Custom Event**
- Event name: `social_click`

**Event Parameters** (automatically sent via dataLayer):
- `social_platform`: Platform name (instagram, facebook)
- `social_url`: Full URL of the social media link
- `page_path`: Current page path

### 7. Scroll Depth Tracking

**Tag Type**: Custom HTML or Third-party tag  
**Trigger**: Scroll Depth trigger (built-in GTM trigger)  
**Configuration**:
- 25%, 50%, 75%, 90% scroll milestones
- Send to GA4 as events

### 8. Form Submission (if forms are added later)

**Tag Type**: Google Analytics: GA4 Event  
**Event Name**: `form_submit`  
**Trigger**: Form submission (configure based on form implementation)  

## DataLayer Events Reference

### Automatic Events

These events are automatically tracked by the inline script:

#### 1. Page View
```javascript
{
  'event': 'page_view',
  'page_path': '/hizmetler/turbo-tamiri',
  'page_title': 'Turbo Tamiri | İkitelli Turbocu',
  'page_location': 'https://www.ikitelliturbocu.com/hizmetler/turbo-tamiri'
}
```

#### 2. Phone Click
```javascript
{
  'event': 'phone_click',
  'phone_number': '+905326584722',
  'location': '/hizmetler/turbo-tamiri',
  'page_path': '/hizmetler/turbo-tamiri'
}
```

#### 3. WhatsApp Click
```javascript
{
  'event': 'whatsapp_click',
  'location': '/hizmetler/turbo-tamiri',
  'page_path': '/hizmetler/turbo-tamiri'
}
```

#### 4. Social Media Click
```javascript
{
  'event': 'social_click',
  'social_platform': 'instagram', // or 'facebook'
  'social_url': 'https://www.instagram.com/...',
  'page_path': '/hizmetler/turbo-tamiri'
}
```

#### 5. Service Click
```javascript
{
  'event': 'service_click',
  'service_name': 'Turbo Tamiri',
  'service_url': 'https://www.ikitelliturbocu.com/hizmetler/turbo-tamiri',
  'page_path': '/'
}
```

### Manual Event Tracking

For custom events, use the utility functions from `src/utils/gtm.ts`:

```typescript
import { trackFAQExpand, trackCTAClick, trackScrollDepth } from '../utils/gtm';

// Track FAQ expand
trackFAQExpand('Turbo arızası nasıl anlaşılır?', 'faq-0');

// Track CTA click
trackCTAClick('Hemen Ara', 'hero_section');

// Track scroll depth
trackScrollDepth(50); // 50% scrolled
```

### Available Utility Functions

- `trackPageView(pagePath, pageTitle?)` - Track page views
- `trackPhoneClick(phoneNumber, location?)` - Track phone clicks
- `trackWhatsAppClick(location?, serviceType?)` - Track WhatsApp clicks
- `trackServiceClick(serviceName, serviceUrl)` - Track service clicks
- `trackFAQExpand(question, faqId?)` - Track FAQ expansions
- `trackSocialClick(platform, url)` - Track social media clicks
- `trackCTAClick(ctaText, ctaLocation)` - Track CTA button clicks
- `trackScrollDepth(percentage)` - Track scroll depth
- `trackFormSubmit(formName, formLocation)` - Track form submissions
- `trackVideoPlay(videoName, videoLocation)` - Track video plays
- `trackExternalLink(url, linkText?)` - Track external link clicks

## Testing

1. **Preview Mode**: Use GTM Preview mode to test tags
2. **GA4 DebugView**: Use GA4 DebugView to verify events
3. **Browser Console**: Check for GTM script loading (Network tab)
4. **Performance**: Verify GTM doesn't impact PageSpeed score

## Troubleshooting

### GTM Not Loading

- ✅ Check `PUBLIC_GTM_ID` is set correctly
- ✅ Check browser console for errors
- ✅ Verify GTM Container ID format (GTM-XXXXXXX)
- ✅ Check network tab for googletagmanager.com requests

### Events Not Firing

- ✅ Verify trigger conditions match CSS selectors
- ✅ Use GTM Preview mode to debug
- ✅ Check dataLayer for pushed events
- ✅ Verify GA4 Configuration tag is firing

### Performance Issues

- ✅ Ensure GTM is loading asynchronously (check script tag)
- ✅ Review number of tags (keep minimal)
- ✅ Use tag firing priorities if needed
- ✅ Monitor PageSpeed Insights for impact

## Local Development

For local development, create a `.env` file:

```env
PUBLIC_GTM_ID=GTM-XXXXXXX
```

**Note**: Never commit `.env` files to Git. They are already in `.gitignore`.

## Cloudflare Pages Setup

1. Go to Cloudflare Pages dashboard
2. Select your site
3. Navigate to Settings → Environment Variables
4. Add variable:
   - **Variable name**: `PUBLIC_GTM_ID`
   - **Value**: Your GTM Container ID
   - **Environment**: Production (and Preview if needed)
5. Redeploy your site

## Best Practices

1. **Minimize Tags**: Only enable necessary tags
2. **Use Triggers Wisely**: Avoid overly broad triggers
3. **Test Thoroughly**: Always test in Preview mode before publishing
4. **Monitor Performance**: Regularly check PageSpeed scores
5. **Use GA4 DebugView**: Verify events are firing correctly
6. **Document Changes**: Keep track of tag configurations

## Support

For GTM-specific questions, refer to:
- [Google Tag Manager Help Center](https://support.google.com/tagmanager)
- [GTM Community](https://support.google.com/tagmanager/community)



