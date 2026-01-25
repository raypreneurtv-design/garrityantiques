import Image from "next/image";

// Reusable Service Card Component (Internal)
const ServiceCard = ({
  title,
  description,
  icon
}: {
  title: string;
  description: string;
  icon: React.ReactNode
}) => (
  <div className="vintage-card mb-8 bg-black/20 p-6 border border-[var(--color-gold-dust)] border-opacity-30 relative">
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="shrink-0 text-[var(--color-gold-dust)] opacity-90 p-4 border border-[var(--color-gold-dust)] rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3 tracking-wide text-[var(--color-primitive-light)]">{title}</h3>
        <p className="text-[var(--color-primitive-light)] opacity-90 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const StoreSectionBlock = ({
  title,
  children,
  className = ""
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`vintage-card h-full p-8 ${className}`}>
    <h3 className="text-2xl font-bold mb-6 text-center border-b border-[var(--color-gold-dust)] border-opacity-30 pb-4">
      {title}
    </h3>
    {children}
  </div>
);

const FeatureIcon = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex flex-col items-center gap-2 text-center">
    <div className="text-[var(--color-gold-dust)] opacity-90 p-3 rounded-full border border-[var(--color-gold-dust)] border-opacity-40 bg-black/20">
      {icon}
    </div>
    <span className="text-sm font-medium tracking-wide">{label}</span>
  </div>
);

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section id="home" className="spa-section relative min-h-screen flex items-center justify-center">
        <div className="text-center py-8 relative z-10">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logo.jpg"
              alt="Paz Garrity Antiques emblem"
              width={150}
              height={150}
              className="mx-auto rounded-full border-4 border-[var(--color-gold-dust)] shadow-lg"
              priority
            />
          </div>

          {/* Business Name */}
          <h1 className="hero-title">Paz Garrity Antiques</h1>

          {/* Ornate Divider */}
          <div className="ornate-divider">
            <span className="text-2xl">⚔</span>
          </div>

          {/* Tagline */}
          <p className="hero-tagline max-w-2xl mx-auto px-4">
            Established & trusted New England source for estate treasures
          </p>

          {/* Since 1974 */}
          <p className="mt-8 text-lg tracking-widest uppercase text-[var(--color-gold-dust)]">
            Since 1974
          </p>

          <div className="mt-12 animate-bounce opacity-50">
            <span className="text-3xl">↓</span>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="spa-section bg-black/10">
        <div className="max-w-5xl mx-auto px-6">

          {/* Welcome Header - Centered & Bold */}
          <h2 className="text-center text-4xl md:text-5xl font-bold text-[var(--color-gold-dust)] mb-16" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.7)' }}>
            Welcome to Paz Garrity Antiques
          </h2>

          {/* Founder Section - Left Aligned */}
          <div className="flex flex-col md:flex-row gap-8 mb-16 items-center">
            <div className="flex-1 text-left">
              <p className="text-lg leading-relaxed mb-6">
                Established in New England and built over generations, this business has been sourcing estate treasures and vintage goods since 1974.
              </p>
              <p className="text-lg leading-relaxed">
                Founder Hank Garrity began by collecting antique bottles and selling them at flea markets, eventually expanding into full estate collections and retail operations. His practical approach and consistency built the foundation.
              </p>
            </div>
            {/* Founder Image */}
            <div className="w-64 h-80 shrink-0 rounded-lg overflow-hidden border-4 border-[var(--color-gold-dust)]/50 shadow-lg">
              <Image
                src="/founder.jpg"
                alt="Hank Garrity at flea market, 1974"
                width={256}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Son Section - Right Aligned */}
          <div className="flex flex-col md:flex-row-reverse gap-8 mb-16 items-center">
            <div className="flex-1 text-right">
              <p className="text-lg leading-relaxed">
                That foundation now carries forward through his son, Henry Garrity, who continues the work with the same standards. Experience-driven, detail-oriented, and selective about what makes it to the floor.
              </p>
            </div>
            {/* Son Image */}
            <div className="w-64 h-80 shrink-0 rounded-lg overflow-hidden border-4 border-[var(--color-gold-dust)]/50 shadow-lg">
              <Image
                src="/son.jpg"
                alt="Henry Garrity as a child"
                width={256}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Closing Statement - Centered */}
          <div className="text-center mt-12">
            <p className="text-xl italic text-[var(--color-primitive-light)]/90 max-w-2xl mx-auto">
              Every item is chosen for its character, age, and story. Without exaggeration or spectacle.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="spa-section">
        <div className="main-content">
          <h2 className="section-title text-[var(--color-gold-dust)]">Our Services</h2>
          <div className="ornate-divider"><span className="text-2xl">⚜</span></div>

          <div className="max-w-4xl mx-auto px-4 mt-8">
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
          </div>
        </div>
      </section>

      {/* STORE SECTION - GOLDEN/WOODEN STYLE */}
      <section id="store" className="spa-section wood-texture">
        <div className="main-content !max-w-6xl">
          <h2 className="section-title !text-[#ffd700] drop-shadow-md">Our Store</h2>
          <div className="ornate-divider !text-[#ffd700]"><span className="text-2xl">⚜</span></div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 mt-8">
            {/* Section 1: Online Store */}
            <StoreSectionBlock title="Shop Online">
              <div className="text-center flex flex-col h-full">
                <p className="text-lg mb-2 text-[#ffd700]">eBay Store</p>
                <p className="mb-8 font-light leading-relaxed text-white/90">
                  Browse our curated selection of antiques, vintage finds, and estate
                  treasures available for purchase through our eBay store.
                </p>

                <div className="flex-grow flex items-center justify-center mb-8 bg-black/40 p-8 rounded border border-[#ffd700] border-opacity-30 shadow-inner">
                  <svg className="w-24 h-24 text-[#ffd700] opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M3 3h18v18H3z" />
                    <path d="M3 9h18" />
                    <circle cx="8" cy="15" r="2" />
                    <circle cx="16" cy="15" r="2" />
                  </svg>
                </div>

                <div className="mt-auto">
                  <a
                    href="#"
                    className="btn-gold !bg-[#ffd700] !text-[#3e2723] hover:!bg-white hover:!text-[#3e2723] w-full block py-4 text-xl tracking-widest font-bold shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VISIT OUR EBAY STORE →
                  </a>
                  <p className="mt-4 text-sm italic opacity-70 text-[#ffd700]">
                    New items added regularly
                  </p>
                </div>
              </div>
            </StoreSectionBlock>

            {/* Section 2: Physical Store */}
            <StoreSectionBlock title="Visit Our Showroom">
              <div className="flex flex-col h-full text-center">
                <div className="mb-6 space-y-1 text-white">
                  <p className="text-xl font-bold">604 Middlesex Street</p>
                  <p className="text-xl">Lowell, MA 01851</p>
                </div>

                <div className="mb-8 space-y-2 text-sm font-light text-white/90">
                  <div className="flex justify-between border-b border-[#ffd700] border-opacity-30 pb-1">
                    <span>Monday - Friday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-[#ffd700] border-opacity-30 pb-1">
                    <span>Saturday</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between opacity-70">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>

                <div className="w-full h-48 mb-8 border-2 border-[#8b4513] rounded overflow-hidden shadow-lg">
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
                  <a href="tel:978-645-7999" className="block text-lg font-bold border-2 border-[#ffd700] text-[#ffd700] p-3 hover:bg-white hover:text-[#3e2723] hover:border-white transition-all uppercase shadow-md bg-black/40">
                    Call for Appointment: 978-645-7999
                  </a>
                </div>
              </div>
            </StoreSectionBlock>
          </div>

          {/* What to Expect */}
          <div className="mt-20 mb-20 text-center text-white/90 py-12">
            <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-6 text-[#ffd700]">
              <span className="h-px w-16 bg-[#ffd700] opacity-50"></span>
              What to Expect
              <span className="h-px w-16 bg-[#ffd700] opacity-50"></span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
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

          <div className="text-center italic opacity-60 text-white pb-8">
            Whether shopping online or visiting in person, you'll find quality antiques backed by decades of expertise.
          </div>
        </div>
      </section>
    </div>
  );
}
