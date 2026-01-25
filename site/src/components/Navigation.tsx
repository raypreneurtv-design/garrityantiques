"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isAnchor: boolean) => {
        if (isAnchor) {
            e.preventDefault();

            // If we're on a different page (like /contact), navigate to home first
            if (pathname !== '/') {
                router.push('/' + href);
                return;
            }

            // Smooth scroll to the element
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <nav className="py-4">
            <div className="nav-links">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.isAnchor && pathname === '/' ? link.href : (link.isAnchor ? '/' + link.href : link.href)}
                        onClick={(e) => handleClick(e, link.href, link.isAnchor)}
                        className={`nav-link ${pathname === link.href ? "active" : ""}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
