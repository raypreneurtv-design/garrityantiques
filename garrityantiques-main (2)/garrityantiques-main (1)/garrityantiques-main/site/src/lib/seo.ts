// SEO utilities and JSON-LD schemas for Paz Garrity Antiques

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Paz Garrity Antiques",
    "url": "https://pazgarrityantiques.com",
    "logo": "https://pazgarrityantiques.com/logo.jpg",
    "description": "Expert antique appraisals, consignment, and vintage finds. We help you sell antiques and collectibles through eBay and direct purchase.",
    "sameAs": [
        "https://www.ebay.com/str/pazgarrityantiques"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "availableLanguage": "English"
    }
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Paz Garrity Antiques",
    "url": "https://pazgarrityantiques.com",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://pazgarrityantiques.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AntiqueStore",
    "name": "Paz Garrity Antiques",
    "image": "https://pazgarrityantiques.com/logo.jpg",
    "url": "https://pazgarrityantiques.com",
    "telephone": "+1-555-123-4567",
    "email": "hello@pazgarrityantiques.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "17:00"
        }
    ],
    "areaServed": {
        "@type": "Country",
        "name": "United States"
    }
};

export const serviceSchemas = [
    {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Antique Appraisal Review",
        "description": "Submit photos of your antiques and vintage items for an informal valuation review. Get expert insights on your items' potential value.",
        "provider": {
            "@type": "Organization",
            "name": "Paz Garrity Antiques"
        },
        "serviceType": "Antique Valuation"
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Consignment & Resale",
        "description": "We list and sell your antiques on eBay with professional photography, descriptions, and shipping. You get paid when it sells.",
        "provider": {
            "@type": "Organization",
            "name": "Paz Garrity Antiques"
        },
        "serviceType": "Consignment Sales"
    }
];

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
});

export function generatePageMetadata(
    title: string,
    description: string,
    path: string
) {
    return {
        title: `${title} | Paz Garrity Antiques`,
        description,
        openGraph: {
            title: `${title} | Paz Garrity Antiques`,
            description,
            url: `https://pazgarrityantiques.com${path}`,
            siteName: "Paz Garrity Antiques",
            locale: "en_US",
            type: "website",
        },
        alternates: {
            canonical: `https://pazgarrityantiques.com${path}`,
        },
    };
}
