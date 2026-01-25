"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
    { href: "/", label: "Home", isAnchor: false },
    { href: "#about", label: "About", isAnchor: true },
    { href: "#services", label: "Services", isAnchor: true },
    { href: "#store", label: "Store", isAnchor: true },
    { href: "/contact", label: "Contact", isAnchor: false },
];

export default function Navigation() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Track scroll for styling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isAnchor: boolean) => {
        if (isAnchor) {
            e.preventDefault();
            setIsOpen(false);

            if (pathname !== '/') {
                router.push('/' + href);
                return;
            }

            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            setIsOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-black/70 backdrop-blur-sm'
            }`}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo/Brand - Desktop */}
                    <Link href="/" className="hidden md:block text-[var(--color-gold-dust)] font-bold text-xl tracking-wider" style={{ fontFamily: 'MedievalSharp, cursive' }}>
                        Paz Garrity Antiques
                    </Link>

                    {/* Logo/Brand - Mobile */}
                    <Link href="/" className="md:hidden text-[var(--color-gold-dust)] font-bold text-lg tracking-wide" style={{ fontFamily: 'MedievalSharp, cursive' }}>
                        PGA
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.isAnchor && pathname === '/' ? link.href : (link.isAnchor ? '/' + link.href : link.href)}
                                onClick={(e) => handleClick(e, link.href, link.isAnchor)}
                                className="nav-link-desktop"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Hamburger Button - Mobile Only */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-[var(--color-gold-dust)] focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="bg-black/95 backdrop-blur-lg border-t border-[var(--color-gold-dust)]/30 px-4 py-4">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.isAnchor && pathname === '/' ? link.href : (link.isAnchor ? '/' + link.href : link.href)}
                            onClick={(e) => handleClick(e, link.href, link.isAnchor)}
                            className="block py-3 text-center text-lg text-[var(--color-primitive-light)] hover:text-[var(--color-gold-dust)] transition-colors border-b border-[var(--color-gold-dust)]/10 last:border-b-0"
                            style={{
                                fontFamily: 'MedievalSharp, cursive',
                                animationDelay: `${index * 50}ms`
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
