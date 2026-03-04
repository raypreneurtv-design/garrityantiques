import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Paz Garrity Antiques",
    description: "Comprehensive antique services including estate clean-outs, appraisals, consignment, and buying. Serving New England since 1974.",
};

const ServiceCard = ({
    title,
    description,
    icon
}: {
    title: string;
    description: string;
    icon: React.ReactNode
}) => (
    <div className="vintage-card mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="shrink-0 text-[var(--color-gold)] opacity-90 p-4 border border-[var(--color-gold)] rounded-full">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold mb-3 tracking-wide">{title}</h3>
                <p className="text-[var(--color-gold)] opacity-90 leading-relaxed font-light">
                    {description}
                </p>
            </div>
        </div>
    </div>
);

export default function ServicesPage() {
    return (
        <div className="py-8">
            <h1 className="section-title">Our Services</h1>

            <div className="ornate-divider">
                <span className="text-2xl">&#9884;</span>
            </div>

            <div className="max-w-4xl mx-auto px-4">
                <ServiceCard
                    title="Home & Estate Clean-Outs"
                    description="Professional and respectful handling of complete estate clean-outs. We sort, appraise, and responsibly rehome your treasured items. Whether downsizing, settling an estate, or clearing a property, we handle every detail with care and discretion."
                    icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M5 21V7l8-4 8 4v14M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11H9V10z" /><path d="M9 2v2" /></svg>}
                />
                <ServiceCard
                    title="Appraisals"
                    description="Expert evaluation of antiques, collectibles, and vintage items. With decades of experience and deep knowledge of New England antiques, we provide honest, accurate appraisals for insurance, estate planning, or resale purposes."
                    icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M11 8v6M8 11h6" /></svg>}
                />
                <ServiceCard
                    title="Consignment Services"
                    description="Let us sell your valuable items through our established channels. We handle photography, listing, pricing, and sales while you receive fair market value. Our extensive network and eBay presence ensure maximum exposure."
                    icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m2 7 10-5 10 5M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>}
                />
                <ServiceCard
                    title="Antique & Vintage Buying"
                    description="Always seeking quality antiques, vintage collectibles, and estate treasures. We offer fair prices and immediate payment for items from single pieces to entire collections. Contact us for a free evaluation."
                    icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M2 10V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4" /></svg>}
                />
                <div className="vintage-card mb-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="shrink-0 text-[var(--color-gold)] opacity-90 p-4 border border-[var(--color-gold)] rounded-full">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                        </div>
                        <div className="w-full">
                            <h3 className="text-xl font-bold mb-3 tracking-wide">Online Sales Through eBay</h3>
                            <p className="text-[var(--color-gold)] opacity-90 leading-relaxed font-light mb-6">
                                Browse our curated selection of authenticated antiques and vintage finds. Updated regularly with new estate acquisitions. Each item professionally photographed and accurately described.
                            </p>
                            <a
                                href="https://www.ebay.com/usr/hegarrman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 border-2 border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-forest-green)] transition-all duration-300 font-['Cinzel'] tracking-widest text-sm uppercase"
                            >
                                <svg width="40" height="18" viewBox="0 0 100 40" fill="none">
                                    <text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28">
                                        <tspan fill="#e53238">e</tspan>
                                        <tspan fill="#0064d2">B</tspan>
                                        <tspan fill="#f5af02">a</tspan>
                                        <tspan fill="#86b817">y</tspan>
                                    </text>
                                </svg>
                                View eBay Store &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <p className="footer-text">
                Full-service estate assistance &bull; Trusted since 1974
            </p>
        </div>
    );
}
