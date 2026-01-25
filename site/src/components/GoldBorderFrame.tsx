import Image from "next/image";

export default function GoldBorderFrame() {
    return (
        <div
            className="absolute inset-0 pointer-events-none z-5 overflow-hidden hidden md:flex items-center justify-center transition-opacity duration-500"
            aria-hidden="true"
        >
            <div className="relative w-[90%] h-[90%] max-w-[900px] max-h-[600px] animate-blow">
                <Image
                    src="/gold-frame.png"
                    alt=""
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}
