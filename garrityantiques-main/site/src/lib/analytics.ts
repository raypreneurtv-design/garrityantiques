// Analytics utilities - GA4-ready event tracking

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}

// Track custom events
export function trackEvent(
    eventName: string,
    eventParams?: Record<string, string | number | boolean>
) {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", eventName, eventParams);
    }
    // Log in development
    if (process.env.NODE_ENV === "development") {
        console.log(`[Analytics] ${eventName}`, eventParams);
    }
}

// Pre-defined conversion events
export const analytics = {
    // Form submissions
    formSubmit: (formName: string) => {
        trackEvent("form_submit", {
            form_name: formName,
        });
    },

    // Intake form specific
    intakeFormStart: () => {
        trackEvent("intake_form_start");
    },

    intakeFormComplete: (category: string) => {
        trackEvent("generate_lead", {
            item_category: category,
        });
    },

    // eBay clicks
    ebayClick: (source: string) => {
        trackEvent("ebay_store_click", {
            click_source: source,
        });
    },

    // CTA interactions
    ctaClick: (ctaName: string, location: string) => {
        trackEvent("cta_click", {
            cta_name: ctaName,
            location: location,
        });
    },

    // Phone/contact clicks
    phoneClick: () => {
        trackEvent("phone_click");
    },

    // Page views (for SPA navigation)
    pageView: (pagePath: string, pageTitle: string) => {
        trackEvent("page_view", {
            page_path: pagePath,
            page_title: pageTitle,
        });
    },
};
