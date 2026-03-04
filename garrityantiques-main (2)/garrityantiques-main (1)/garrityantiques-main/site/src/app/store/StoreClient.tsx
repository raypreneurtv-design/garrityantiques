"use client";

import { useState } from "react";
import Image from "next/image";
import SoldOutItems from "@/components/SoldOutItems";

/* ─────────────────────────────────────────────
   SVG Branch Border with Teacups & Spoons
   ───────────────────────────────────────────── */
const BranchBorder = () => (
    <svg
        className="branch-border"
        viewBox="0 0 400 500"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
    >
        {/* ── TOP branch ── */}
        <path d="M0,12 Q40,2 80,10 Q120,18 160,8 Q200,0 240,10 Q280,18 320,6 Q360,0 400,12"
            stroke="#D4AF37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M60,8 Q56,2 52,6" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <path d="M64,10 Q68,4 72,8" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <path d="M180,4 Q176,-2 172,4" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <path d="M184,6 Q188,0 192,5" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <path d="M310,6 Q306,0 302,5" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <path d="M314,8 Q318,2 322,7" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <g transform="translate(120, 2) scale(0.5)">
            <ellipse cx="10" cy="14" rx="8" ry="5" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
            <path d="M2,14 Q2,24 10,26 Q18,24 18,14" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
            <path d="M18,16 Q22,16 22,20 Q22,24 18,24" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
            <path d="M8,10 Q7,6 9,4" stroke="#D4AF37" strokeWidth="0.6" fill="none" opacity="0.5" />
            <path d="M12,10 Q13,5 11,3" stroke="#D4AF37" strokeWidth="0.6" fill="none" opacity="0.5" />
        </g>
        <g transform="translate(270, 0) scale(0.45)">
            <ellipse cx="8" cy="6" rx="6" ry="4" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
            <line x1="8" y1="10" x2="8" y2="30" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* ── BOTTOM branch ── */}
        <path d="M0,488 Q40,498 80,490 Q120,482 160,492 Q200,500 240,490 Q280,482 320,494 Q360,500 400,488"
            stroke="#D4AF37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M100,492 Q96,498 92,494" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <path d="M104,490 Q108,496 112,492" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <path d="M260,490 Q256,496 252,492" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <path d="M264,492 Q268,498 272,494" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <g transform="translate(200, 478) scale(0.45)">
            <ellipse cx="10" cy="14" rx="8" ry="5" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
            <path d="M2,14 Q2,24 10,26 Q18,24 18,14" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
            <path d="M18,16 Q22,16 22,20 Q22,24 18,24" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
        </g>

        {/* ── LEFT branch ── */}
        <path d="M12,0 Q2,50 10,100 Q18,150 8,200 Q0,250 10,300 Q18,350 8,400 Q2,450 12,500"
            stroke="#D4AF37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M8,80 Q2,76 4,72" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <path d="M10,84 Q4,88 6,92" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <path d="M8,280 Q2,276 4,272" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <path d="M10,284 Q4,288 6,292" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <path d="M8,420 Q2,416 4,412" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <path d="M10,424 Q4,428 6,432" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <g transform="translate(-2, 170) rotate(-15) scale(0.45)">
            <ellipse cx="8" cy="6" rx="6" ry="4" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
            <line x1="8" y1="10" x2="8" y2="30" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        <g transform="translate(-2, 360) scale(0.4)">
            <ellipse cx="10" cy="14" rx="8" ry="5" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
            <path d="M2,14 Q2,24 10,26 Q18,24 18,14" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
            <path d="M18,16 Q22,16 22,20 Q22,24 18,24" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
        </g>

        {/* ── RIGHT branch ── */}
        <path d="M388,0 Q398,50 390,100 Q382,150 392,200 Q400,250 390,300 Q382,350 392,400 Q398,450 388,500"
            stroke="#D4AF37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M392,120 Q398,116 396,112" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <path d="M390,124 Q396,128 394,132" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <path d="M392,340 Q398,336 396,332" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <path d="M390,344 Q396,348 394,352" stroke="#7a9955" strokeWidth="1.2" fill="none" />
        <g transform="translate(382, 220) rotate(15) scale(0.45)">
            <ellipse cx="8" cy="6" rx="6" ry="4" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
            <line x1="8" y1="10" x2="8" y2="30" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        <g transform="translate(378, 400) scale(0.4)">
            <ellipse cx="10" cy="14" rx="8" ry="5" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
            <path d="M2,14 Q2,24 10,26 Q18,24 18,14" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
            <path d="M18,16 Q22,16 22,20 Q22,24 18,24" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
        </g>
    </svg>
);

/* ─────── Feature Icon ─────── */
const FeatureIcon = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <div className="flex flex-col items-center gap-2 text-center">
        <div className="text-[var(--color-gold)] opacity-90 p-3 rounded-full border border-[var(--color-gold)] border-opacity-40">
            {icon}
        </div>
        <span className="text-sm font-medium tracking-wide">{label}</span>
    </div>
);

/* ─────── eBay Store Preview (generic look) ─────── */
const EbayStorePreview = () => (
    <div className="w-full rounded border border-[var(--color-gold)]/20 overflow-hidden mb-6">
        {/* eBay-style top bar */}
        <div className="bg-[#e5e5e5] px-4 py-2 flex items-center gap-3">
            <svg width="50" height="20" viewBox="0 0 100 40" fill="none">
                <text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28">
                    <tspan fill="#e53238">e</tspan>
                    <tspan fill="#0064d2">B</tspan>
                    <tspan fill="#f5af02">a</tspan>
                    <tspan fill="#86b817">y</tspan>
                </text>
            </svg>
            <div className="flex-1 bg-white rounded h-6 border border-gray-300"></div>
            <div className="bg-[#3665f3] text-white text-xs px-3 py-1 rounded font-bold">Search</div>
        </div>
        {/* Store header area */}
        <div className="bg-[#f7f7f7] px-4 py-3 border-b border-gray-200">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-forest-green)] border-2 border-[var(--color-gold)] flex items-center justify-center text-[var(--color-gold)] text-xs font-bold">PG</div>
                <div>
                    <p className="text-sm font-bold text-gray-800">hegarrman</p>
                    <p className="text-xs text-gray-500">99.8% positive feedback</p>
                </div>
            </div>
        </div>
        {/* Fake product grid */}
        <div className="bg-white p-3 grid grid-cols-3 gap-2">
            <div className="aspect-square bg-gray-100 rounded border border-gray-200 flex items-center justify-center overflow-hidden">
                <Image src="/sold/pulp-magazines.jpg" alt="Antique item" width={120} height={120} className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="aspect-square bg-gray-100 rounded border border-gray-200 flex items-center justify-center overflow-hidden">
                <Image src="/sold/mad-magazines.jpg" alt="Antique item" width={120} height={120} className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="aspect-square bg-gray-100 rounded border border-gray-200 flex items-center justify-center overflow-hidden">
                <Image src="/sold/birdsey-watercolor.jpg" alt="Antique item" width={120} height={120} className="w-full h-full object-cover opacity-80" />
            </div>
        </div>
        <div className="bg-white px-3 pb-3 text-center">
            <p className="text-xs text-gray-400 italic">Preview — Visit store for full listings</p>
        </div>
    </div>
);

/* ─────── Main Store Component ─────── */
export default function StoreClient() {
    const [showSoldOut, setShowSoldOut] = useState(false);

    return (
        <div className="py-8 relative">
            <h1 className="section-title">Our Store</h1>

            <div className="ornate-divider">
                <span className="text-2xl">&#9884;</span>
            </div>

            <div className="max-w-6xl mx-auto px-4">

                {/* ─── Sold Out Toggle Button (TOP, with preview) ─── */}
                <div className="mb-12 text-center flex flex-col items-center">
                    <button
                        onClick={() => setShowSoldOut(!showSoldOut)}
                        className="relative group bg-transparent border-2 border-[var(--color-gold)] px-10 py-5 cursor-pointer overflow-hidden transition-all duration-500 hover:bg-[var(--color-gold)]/10 mb-4"
                    >
                        <div className="absolute top-0 right-0 -mr-6 -mt-2 z-10 bg-gradient-to-br from-[#8b1a1a] via-[#c0392b] to-[#8b1a1a] text-[#fdf6e3] font-['Cinzel'] text-[0.6rem] font-bold tracking-widest px-8 py-1 rotate-45 shadow-md border-b border-white/20">
                            SOLD
                        </div>
                        <span className="font-['Cinzel'] text-xl tracking-widest text-[var(--color-gold)] group-hover:text-[var(--color-gold-light)] transition-colors">
                            {showSoldOut ? "HIDE SOLD OUT ITEMS" : "VIEW SOLD OUT ITEMS"}
                        </span>
                    </button>

                    {/* Preview thumbnails when collapsed */}
                    {!showSoldOut && (
                        <div className="flex gap-3 mt-2 opacity-70">
                            <div className="w-16 h-16 rounded border border-[var(--color-gold)]/30 overflow-hidden">
                                <Image src="/sold/pulp-magazines.jpg" alt="Preview" width={64} height={64} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-16 h-16 rounded border border-[var(--color-gold)]/30 overflow-hidden">
                                <Image src="/sold/mad-magazines.jpg" alt="Preview" width={64} height={64} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-16 h-16 rounded border border-[var(--color-gold)]/30 overflow-hidden">
                                <Image src="/sold/birdsey-watercolor.jpg" alt="Preview" width={64} height={64} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-16 h-16 rounded border border-[var(--color-gold)]/30 overflow-hidden">
                                <Image src="/sold/minstrel-poster.jpg" alt="Preview" width={64} height={64} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-16 h-16 rounded border border-[var(--color-gold)]/30 overflow-hidden">
                                <Image src="/sold/cynic-magazines.jpg" alt="Preview" width={64} height={64} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Sold Out Items Section */}
                <div className={`transition-all duration-700 overflow-hidden ${showSoldOut ? 'max-h-[5000px] opacity-100 mb-12' : 'max-h-0 opacity-0'}`}>
                    <SoldOutItems />
                </div>

                {/* ─── Store Cards Grid ─── */}
                <div className="grid md:grid-cols-2 gap-10 mb-16">
                    {/* ─── Online Store ─── */}
                    <div className="store-branch-card">
                        <BranchBorder />
                        <div className="card-content" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', margin: '4px', padding: '2rem' }}>
                            <h3 className="text-2xl font-bold mb-6 text-center border-b border-[var(--color-gold)]/30 pb-4">
                                Shop Online
                            </h3>
                            <div className="text-center flex flex-col h-full">
                                <p className="text-lg mb-2 text-[var(--color-gold-light)]">eBay Store</p>
                                <p className="mb-6 font-light leading-relaxed">
                                    Browse our curated selection of antiques, vintage finds, and estate
                                    treasures available for purchase through our eBay store.
                                </p>

                                {/* eBay Store Preview */}
                                <EbayStorePreview />

                                <a
                                    href="https://www.ebay.com/usr/hegarrman"
                                    className="btn-gold w-full block py-4 text-xl tracking-widest hover:bg-[var(--color-gold)] hover:text-[var(--color-forest-green)]"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textAlign: 'center', fontSize: '1rem', lineHeight: '1.6' }}
                                >
                                    VISIT OUR EBAY STORE &rarr;
                                </a>
                                <p className="mt-4 text-sm italic opacity-70">
                                    New items added regularly
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ─── Physical Store ─── */}
                    <div className="store-branch-card">
                        <BranchBorder />
                        <div className="card-content" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', margin: '4px', padding: '2rem' }}>
                            <h3 className="text-2xl font-bold mb-6 text-center border-b border-[var(--color-gold)]/30 pb-4">
                                Visit Our Showroom
                            </h3>
                            <div className="flex flex-col text-center h-full">
                                <div className="mb-6 space-y-1">
                                    <p className="text-xl font-bold">604 Middlesex Street</p>
                                    <p className="text-xl">Lowell, MA 01851</p>
                                </div>

                                <div className="mb-8 space-y-2 text-sm font-light">
                                    <div className="flex justify-between border-b border-[var(--color-gold)]/20 pb-1">
                                        <span>Monday - Friday</span>
                                        <span>10:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between border-b border-[var(--color-gold)]/20 pb-1">
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
                                <div className="w-full h-64 mb-4 border border-[var(--color-gold)]/30 rounded overflow-hidden">
                                    <iframe
                                        src="https://maps.google.com/maps?q=Garrity+Antiques,604+Middlesex+St,Lowell,MA+01851&hl=en&z=16&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        title="Paz Garrity Antiques location"
                                    ></iframe>
                                </div>

                                <a
                                    href="tel:978-645-7999"
                                    className="btn-gold w-full block py-4 tracking-widest hover:bg-[var(--color-gold)] hover:text-[var(--color-forest-green)] mt-auto"
                                    style={{ textAlign: 'center', fontSize: '1rem', lineHeight: '1.6' }}
                                >
                                    Call for Appointment<br />978-645-7999
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What to Expect */}
                <div className="mb-16 text-center mt-16">
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

            <p className="footer-text">
                Whether shopping online or visiting in person, you&apos;ll find quality antiques backed by decades of expertise.
            </p>
        </div>
    );
}
