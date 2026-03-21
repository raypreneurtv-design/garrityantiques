"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#2c3e2e] text-[#fdfbf6] border-t-4 border-[#cca762] mt-16 z-10 relative">
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                    {/* Brand & Intro */}
                    <div className="space-y-4 flex flex-col items-center md:items-start">
                        <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-[#cca762] to-[#e8d59b] bg-clip-text text-transparent">
                            Paz Garrity Antiques
                        </h3>
                        <p className="text-[#a8b8aa] text-sm leading-relaxed max-w-[280px]">
                            An established & trusted New England source for estate treasures, historical artifacts, and curated vintage valuables since 1974.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a
                                href="https://www.facebook.com/groups/940803765274823"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-[#3d5440] hover:bg-[#cca762] flex items-center justify-center transition-colors"
                                aria-label="Facebook Group"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="mailto:pazgarrityantiques@gmail.com"
                                className="w-10 h-10 rounded-full bg-[#3d5440] hover:bg-[#cca762] flex items-center justify-center transition-colors"
                                aria-label="Email Us"
                            >
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-xl font-semibold text-[#e8d59b]">Explore</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-[#a8b8aa] hover:text-[#cca762] transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/store" className="text-[#a8b8aa] hover:text-[#cca762] transition-colors">Curated Store</Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-[#a8b8aa] hover:text-[#cca762] transition-colors">Our Services</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-[#a8b8aa] hover:text-[#cca762] transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-[#a8b8aa] hover:text-[#cca762] transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-xl font-semibold text-[#e8d59b]">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start justify-center md:justify-start space-x-3 text-[#a8b8aa]">
                                <MapPin className="text-[#cca762] shrink-0 mt-1" size={18} />
                                <span>Serving New England<br />Based in Lowell, MA</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start space-x-3 text-[#a8b8aa]">
                                <Phone className="text-[#cca762] shrink-0" size={18} />
                                <a href="tel:9786457999" className="hover:text-[#cca762] transition-colors">
                                    978-645-7999
                                </a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start space-x-3 text-[#a8b8aa]">
                                <Mail className="text-[#cca762] shrink-0" size={18} />
                                <a href="mailto:pazgarrityantiques@gmail.com" className="hover:text-[#cca762] transition-colors break-all">
                                    pazgarrityantiques@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[#3d5440] text-center text-[#a8b8aa] text-sm">
                    <p>&copy; {currentYear} Paz Garrity Antiques. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
