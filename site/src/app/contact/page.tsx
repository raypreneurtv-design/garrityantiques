import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Paz Garrity Antiques",
    description: "Contact Paz Garrity Antiques in Lowell, MA. Estate clean-outs, appraisals, and antique buying services.",
};

export default function ContactPage() {
    return (
        <div className="py-8">
            {/* Heading */}
            <h1 className="section-title">Contact Us</h1>

            {/* Ornate Divider */}
            <div className="ornate-divider">
                <span>✦</span>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
                <p className="mb-6">
                    <strong>Address:</strong><br />
                    604 Middlesex Street<br />
                    Lowell, MA 01851
                </p>

                <p className="mb-6">
                    <strong>Phone:</strong><br />
                    <a href="tel:978-645-7999">978-645-7999</a>
                </p>

                <p className="mb-6">
                    <strong>Email:</strong><br />
                    <a href="mailto:pazgarrityantiques@gmail.com">pazgarrityantiques@gmail.com</a>
                </p>
            </div>

            {/* Footer */}
            <p className="footer-text">
                We respond within 24 hours
            </p>
        </div>
    );
}
