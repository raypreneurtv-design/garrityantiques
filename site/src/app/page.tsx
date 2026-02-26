import Image from "next/image";
import Link from "next/link";
import SoldOutItems from "@/components/SoldOutItems";

export default function HomePage() {
  return (
    <div className="py-8">
      {/* Hero */}
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo.jpg"
            alt="Paz Garrity Antiques emblem"
            width={120}
            height={120}
            className="mx-auto rounded-full"
            priority
          />
        </div>

        {/* Business Name */}
        <h1 className="hero-title">Paz Garrity Antiques</h1>

        {/* Ornate Divider */}
        <div className="ornate-divider">
          <span>&#10022;</span>
        </div>

        {/* Tagline */}
        <p className="hero-tagline">
          Established &amp; trusted New England source for estate treasures
        </p>

        {/* Since 1974 */}
        <p className="mt-8 text-lg tracking-widest uppercase">
          ESTABLISHED 1974
        </p>
      </div>

      {/* Sold Out Items Showcase */}
      <SoldOutItems />

      {/* View All Collectibles Button */}
      <div className="mt-12 mb-8 flex justify-center">
        <Link href="/store" className="block">
          <div className="store-branch-card" style={{ padding: '0' }}>
            <svg
              viewBox="0 0 400 80"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, pointerEvents: 'none' }}
            >
              {/* Top branch */}
              <path d="M0,10 Q50,2 100,8 Q150,16 200,6 Q250,0 300,10 Q350,16 400,8"
                stroke="#D4AF37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M60,6 Q56,1 52,5" stroke="#7a9955" strokeWidth="1.2" fill="none" />
              <path d="M64,8 Q68,3 72,7" stroke="#7a9955" strokeWidth="1.2" fill="none" />
              <path d="M310,8 Q306,2 302,6" stroke="#7a9955" strokeWidth="1.2" fill="none" />
              <path d="M314,10 Q318,4 322,8" stroke="#7a9955" strokeWidth="1.2" fill="none" />
              {/* Tiny teacup top */}
              <g transform="translate(180, 0) scale(0.4)">
                <ellipse cx="10" cy="14" rx="8" ry="5" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
                <path d="M2,14 Q2,24 10,26 Q18,24 18,14" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
                <path d="M18,16 Q22,16 22,20 Q22,24 18,24" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
              </g>
              {/* Bottom branch */}
              <path d="M0,70 Q50,78 100,72 Q150,64 200,74 Q250,80 300,70 Q350,64 400,72"
                stroke="#D4AF37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M140,72 Q136,78 132,74" stroke="#7a9955" strokeWidth="1.2" fill="none" />
              <path d="M144,74 Q148,80 152,76" stroke="#7a9955" strokeWidth="1.2" fill="none" />
              {/* Tiny spoon bottom */}
              <g transform="translate(260, 62) scale(0.35)">
                <ellipse cx="8" cy="6" rx="6" ry="4" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
                <line x1="8" y1="10" x2="8" y2="30" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
              </g>
              {/* Left branch */}
              <path d="M8,0 Q2,20 8,40 Q14,60 8,80" stroke="#D4AF37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              {/* Right branch */}
              <path d="M392,0 Q398,20 392,40 Q386,60 392,80" stroke="#D4AF37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
            <div className="card-content px-12 py-6 text-center">
              <span className="font-['Cinzel'] text-xl tracking-[0.2em] text-[var(--color-gold)] uppercase hover:text-[var(--color-gold-light)] transition-colors">
                View All Collectibles →
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
