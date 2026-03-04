import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us | Paz Garrity Antiques",
    description: "Learn about Paz Garrity Antiques - a New England antique business established in 1974, carrying on a family legacy of estate treasures and vintage valuables.",
};

export default function AboutPage() {
    return (
        <div className="py-8">
            {/* Heading */}
            <h1 className="section-title">About Us</h1>

            {/* Ornate Divider */}
            <div className="ornate-divider">
                <span>&#10022;</span>
            </div>

            {/* Body Text */}
            <div className="content-text">
                <p>
                    Welcome to Paz Garrity Antiques — an established & trusted New England source
                    for FRESH estate treasures, second-hand goods, historical artifacts, and curated
                    vintage valuables.
                </p>

                {/* Founder Section with Image */}
                <div className="flex flex-col items-center gap-6 mt-10 mb-10">
                    <div className="w-56 h-72 shrink-0 rounded-lg overflow-hidden border-2 border-[var(--color-gold)] shadow-lg">
                        <Image
                            src="/founder.jpg"
                            alt="Hank Garrity at flea market, 1974"
                            width={224}
                            height={288}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="mt-2">
                        With Father, Hank Garrity, the tradition began in 1974 when he had started
                        digging antique bottles and selling them at flea markets. Eventually, business
                        had developed and no sooner than later he was handling estate clean-outs with
                        his own blow-out store.
                    </p>
                </div>

                {/* Son Section with Image */}
                <div className="flex flex-col items-center gap-6 mt-10 mb-10">
                    <div className="w-56 h-72 shrink-0 rounded-lg overflow-hidden border-2 border-[var(--color-gold)] shadow-lg">
                        <Image
                            src="/son.jpg"
                            alt="Henry Garrity as a child"
                            width={224}
                            height={288}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="mt-2">
                        The legacy continues through Son, Paz Garrity. With decades of experience already
                        behind him, Son, Paz Garrity carries on the legacy flowing from one generation
                        to the next!
                    </p>
                </div>
            </div>

            {/* Footer */}
            <p className="footer-text">
                Paz Garrity Antiques &bull; Established 1974
            </p>
        </div>
    );
}
