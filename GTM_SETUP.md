# Google Tag Manager Setup Guide

## Overview

Google Tag Manager is integrated into the İkitelli Turbocu website in a **non-blocking, performance-safe** manner. The GTM script loads asynchronously and does not block page rendering.

## Environment Variable

Set the following environment variable:

- **Variable Name**: `PUBLIC_GTM_ID`
- **Example Value**: `GTM-XXXXXXX`
- **Location**: Cloudflare Pages → Settings → Environment Variables (or `.env` file for local dev)

## Implementation Details

### Components

- **GTMHead.astro** - Injects GTM script in `<head>`
- **GTMBody.astro** - Injects noscript fallback in `<body>`

Both components check for `PUBLIC_GTM_ID` and only render if present.

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
- Trigger Type: Click - All Elements
- Condition: Click Element matches CSS selector `a[href^="tel:"]`

**Additional Data** (Optional):
- `phone_number`: `{{Click URL}}`
- `location`: `{{Page Path}}`

### 4. WhatsApp Click Tracking

**Tag Type**: Google Analytics: GA4 Event  
**Event Name**: `whatsapp_click`  
**Trigger**: 
- Trigger Type: Click - All Elements
- Condition: Click Element matches CSS selector `a[href*="wa.me"]`

**Additional Data** (Optional):
- `service_type`: Extract from link text or data attributes
- `location`: `{{Page Path}}`

### 5. Service Detail Click Tracking

**Tag Type**: Google Analytics: GA4 Event  
**Event Name**: `service_detail_click`  
**Trigger**: 
- Trigger Type: Click - All Elements
- Condition: Click Element matches CSS selector containing "Detaylı Bilgi Al" or service card

**Additional Data**:
- `service_name`: Extract from card title or data attribute

### 6. FAQ Accordion Interaction

**Tag Type**: Google Analytics: GA4 Event  
**Event Name**: `faq_expand`  
**Trigger**: 
- Trigger Type: Custom Event
- Event name: Custom event fired from FAQ component (requires additional code)

**Alternative**: Use Click trigger on FAQ buttons

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

## Data Layer Events

You can push custom events to the dataLayer for more advanced tracking:

```javascript
// Example: Track service card click
dataLayer.push({
  'event': 'service_click',
  'service_name': 'Turbo Tamiri',
  'service_location': 'services_section'
});
```

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


