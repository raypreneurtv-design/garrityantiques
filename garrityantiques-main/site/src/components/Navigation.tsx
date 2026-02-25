"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/store", label: "Store" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="py-4">
            <div className="nav-links">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`nav-link ${pathname === link.href ? "active" : ""}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
