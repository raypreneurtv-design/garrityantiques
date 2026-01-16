import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Store | Paz Garrity Antiques",
    description: "Visit our physical showroom in Lowell, MA or shop our curated eBay collection online. Quality antiques and vintage treasures.",
};

const StoreSection = ({
    title,
    children,
    className = ""
}: {
    title: string;
    children: React.ReactNode;
    className?: string;
}) => (
    <div className={`vintage-card h-full ${className}`}>
        <div className="card-corner corner-top-left"></div>
        <div className="card-corner corner-top-right"></div>
        <div className="card-corner corner-bottom-left"></div>
        <div className="card-corner corner-bottom-right"></div>

        <h3 className="text-2xl font-bold mb-6 text-center border-b border-[var(--color-gold)] border-opacity-30 pb-4">
            {title}
        </h3>
        {children}
    </div>
);

const FeatureIcon = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <div className="flex flex-col items-center gap-2 text-center">
        <div className="text-[var(--color-gold)] opacity-90 p-3 rounded-full border border-[var(--color-gold)] border-opacity-40">
            {icon}
        </div>
        <span className="text-sm font-medium tracking-wide">{label}</span>
    </div>
);

export default function StorePage() {
    return (
        <div className="py-8">
            {/* Heading */}
            <h1 className="section-title">Our Store</h1>

            {/* Ornate Divider - Fleur-de-lis */}
            <div className="ornate-divider">
                <span className="text-2xl">⚜</span>
            </div>

            <div className="max-w-6xl mx-auto px-4">

                {/* Main Split Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">

                    {/* Section 1: Online Store */}
                    <StoreSection title="Shop Online">
                        <div className="text-center flex flex-col h-full">
                            <p className="text-lg mb-2 text-[var(--color-gold-light)]">eBay Store</p>
                            <p className="mb-8 font-light leading-relaxed">
                                Browse our curated selection of antiques, vintage finds, and estate
                                treasures available for purchase through our eBay store.
                            </p>

                            <div className="flex-grow flex items-center justify-center mb-8 bg-black/20 p-8 rounded border border-[var(--color-gold)] border-opacity-20">
                                {/* Visual placeholder for eBay store */}
                                <svg className="w-24 h-24 text-[var(--color-gold)] opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <path d="M3 3h18v18H3z" />
                                    <path d="M3 9h18" />
                                    <circle cx="8" cy="15" r="2" />
                                    <circle cx="16" cy="15" r="2" />
                                </svg>
                            </div>

                            <div className="mt-auto">
                                <a
                                    href="#"
                                    className="btn-gold w-full block py-4 text-xl tracking-widest hover:bg-[var(--color-gold)] hover:text-[var(--color-forest-green)]"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    VISIT OUR EBAY STORE →
                                </a>
                                <p className="mt-4 text-sm italic opacity-70">
                                    New items added regularly
                                </p>
                            </div>
                        </div>
                    </StoreSection>

                    {/* Section 2: Physical Store */}
                    <StoreSection title="Visit Our Showroom">
                        <div className="flex flex-col h-full text-center">
                            <div className="mb-6 space-y-1">
                                <p className="text-xl font-bold">604 Middlesex Street</p>
                                <p className="text-xl">Lowell, MA 01851</p>
                            </div>

                            <div className="mb-8 space-y-2 text-sm font-light">
                                <div className="flex justify-between border-b border-[var(--color-gold)] border-opacity-20 pb-1">
                                    <span>Monday - Friday</span>
                                    <span>10:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between border-b border-[var(--color-gold)] border-opacity-20 pb-1">
                                    <span>Saturday</span>
                                    <span>10:00 AM - 5:00 PM</span>
                                </div>
                                <div className="flex justify-between opacity-70">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>

                            <p className="mb-8 font-light leading-relaxed">
                                Visit our physical location to browse our rotating inventory.
                                Our showroom features items not yet listed online, giving in-person
                                visitors first access to new acquisitions.
                            </p>

                            {/* Google Maps Embed */}
                            <div className="w-full h-48 mb-8 border border-[var(--color-gold)] border-opacity-30 rounded overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.663162383849!2d-71.3283!3d42.6334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3a46a6f6f6f6f%3A0x6f6f6f6f6f6f6f6f!2s604%20Middlesex%20St%2C%20Lowell%2C%20MA%2001851!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>

                            <div className="mt-auto">
                                <a href="tel:978-645-7999" className="block text-lg font-bold border-2 border-[var(--color-gold)] p-3 hover:bg-[var(--color-gold)] hover:text-[var(--color-forest-green)] transition-all uppercase">
                                    Call for Appointment: 978-645-7999
                                </a>
                            </div>
                        </div>
                    </StoreSection>
                </div>

                {/* What to Expect Section */}
                <div className="mb-16 text-center">
                    <h2 className="text-2xl font-bold mb-8 flex items-center justify-center gap-4">
                        <span className="h-px w-12 bg-[var(--color-gold)] opacity-50"></span>
                        What to Expect
                        <span className="h-px w-12 bg-[var(--color-gold)] opacity-50"></span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        <FeatureIcon
                            label="Rotating Inventory"
                            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" /></svg>}
                        />
                        <FeatureIcon
                            label="Authenticated Items"
                            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>}
                        />
                        <FeatureIcon
                            label="Expert Staff"
                            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>}
                        />
                        <FeatureIcon
                            label="Fair Pricing"
                            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}
                        />
                        <FeatureIcon
                            label="Estate Evaluations"
                            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>}
                        />
                    </div>
                </div>

            </div>

            {/* Footer */}
            <p className="footer-text">
                Whether shopping online or visiting in person, you'll find quality antiques backed by decades of expertise.
            </p>
        </div>
    );
}
