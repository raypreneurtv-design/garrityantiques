import type { Metadata } from "next";

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
                <span>✦</span>
            </div>

            {/* Body Text */}
            <div className="content-text">
                <p>
                    Welcome to Paz Garrity Antiques — an established & trusted New England source
                    for FRESH estate treasures, second-hand goods, historical artifacts, and curated
                    vintage valuables.
                </p>

                <p className="mt-6">
                    With Father, Hank Garrity, the tradition began in 1974 when he had started
                    picking antique bottles and selling them at flea markets. Eventually, business
                    had developed and no sooner than later he was handling estate clean-outs with
                    his own blow-out store.
                </p>

                <p className="mt-6">
                    The legacy continues through Son, Paz Garrity. With decades of experience already
                    behind him, Son, Paz Garrity carries on the legacy flowing from one generation
                    to the next!
                </p>
            </div>

            {/* Footer */}
            <p className="footer-text">
                Paz Garrity Antiques • Since 1974
            </p>
        </div>
    );
}
