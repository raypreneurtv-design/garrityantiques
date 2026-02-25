import Image from "next/image";
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
    </div>
  );
}
