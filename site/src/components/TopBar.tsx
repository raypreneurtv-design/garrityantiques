"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Facebook } from "lucide-react";

export default function TopBar() {
    return (
        <div className="border-b-2 border-[var(--color-gold)] bg-black/80 py-3 px-6 flex justify-between items-center text-[var(--color-gold)] shadow-[0_4px_12px_rgba(0,0,0,0.5)] relative z-50">
            {/* Left side: Antique Teacup SVG */}
            <div className="flex items-center space-x-2">
                <Image
                    src="/logo.jpg"
                    alt="Paz Garrity Antiques Logo"
                    width={40}
                    height={40}
                    className="rounded-full border border-[var(--color-gold)]"
                />
                <span className="font-['Cinzel'] font-semibold text-sm hidden sm:inline-block text-[var(--color-gold)] tracking-widest uppercase mt-1">
                    Est. 1974
                </span>
            </div>

            {/* Center: Call Button */}
            <div className="flex-1 flex justify-center">
                <a
                    href="tel:9786457999"
                    className="flex items-center gap-3 bg-transparent hover:bg-[var(--color-gold)] hover:text-[var(--color-forest-green)] text-[var(--color-gold)] transition-all duration-300 px-6 py-2 rounded-sm font-['Cinzel'] font-semibold active:scale-95 text-base tracking-[0.1em] uppercase"
                    aria-label="Call Garrity Antiques"
                >
                    <Phone size={16} strokeWidth={2} />
                    <span className="mt-0.5 whitespace-nowrap">978-645-7999</span>
                    <span className="ml-1 text-xs opacity-90 normal-case tracking-normal font-sans italic mt-0.5 hidden sm:inline-block">Give us a call anytime!</span>
                </a>
            </div>

            {/* Right side: Social & Email Links */}
            <div className="flex items-center space-x-3">
                <Link
                    href="mailto:pazgarrityantiques@gmail.com"
                    className="flex items-center gap-2 px-4 py-2 rounded-sm bg-black/40 text-[var(--color-gold)] font-['Cinzel'] font-medium hover:bg-[var(--color-gold)] hover:text-[var(--color-forest-green)] transition-all duration-300 shadow-sm text-xs tracking-wider uppercase"
                    aria-label="Email Us"
                >
                    <Mail size={16} />
                    <span className="hidden sm:inline mt-0.5">Email</span>
                </Link>
                <Link
                    href="https://www.facebook.com/groups/940803765274823"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-sm bg-black/40 text-[var(--color-gold)] font-['Cinzel'] font-medium hover:bg-[var(--color-gold)] hover:text-[var(--color-forest-green)] transition-all duration-300 shadow-sm text-xs tracking-wider uppercase"
                    aria-label="Visit our Facebook Group"
                >
                    <Facebook size={16} fill="currentColor" strokeWidth={0} />
                    <span className="hidden sm:inline mt-0.5">Facebook</span>
                </Link>
            </div>
        </div>
    );
}
