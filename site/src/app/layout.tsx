import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import GoldBorderFrame from "@/components/GoldBorderFrame";
import FallingLeaves from "@/components/FallingLeaves";

export const metadata: Metadata = {
  title: "Paz Garrity Antiques | New England Estate Treasures Since 1974",
  description: "Paz Garrity Antiques - an established & trusted New England source for estate treasures, second-hand goods, historical artifacts, and curated vintage valuables since 1974.",
  keywords: "antiques, estate treasures, New England antiques, vintage, Lowell MA, estate clean-outs, antique appraisals",
  openGraph: {
    title: "Paz Garrity Antiques | New England Estate Treasures Since 1974",
    description: "Established & trusted New England source for estate treasures and curated vintage valuables since 1974.",
    url: "https://pazgarrityantiques.com",
    siteName: "Paz Garrity Antiques",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="texture-overlay" aria-hidden="true" />
        <FallingLeaves />
        <GoldBorderFrame />
        <div className="page-container">
          <Navigation />
          <main className="main-content welcome-animate">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
