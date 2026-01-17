import Image from "next/image";

export default function GoldBorderFrame() {
    return (
        <>
            {/* Left leaf border */}
            <div className="leaf-border leaf-border-left" aria-hidden="true">
                <Image
                    src="/leaf-border.png"
                    alt=""
                    width={60}
                    height={400}
                    className="leaf-image"
                    priority
                />
                <Image
                    src="/leaf-border.png"
                    alt=""
                    width={60}
                    height={400}
                    className="leaf-image"
                    priority
                />
                <Image
                    src="/leaf-border.png"
                    alt=""
                    width={60}
                    height={400}
                    className="leaf-image"
                    priority
                />
            </div>

            {/* Right leaf border */}
            <div className="leaf-border leaf-border-right" aria-hidden="true">
                <Image
                    src="/leaf-border.png"
                    alt=""
                    width={60}
                    height={400}
                    className="leaf-image"
                    priority
                />
                <Image
                    src="/leaf-border.png"
                    alt=""
                    width={60}
                    height={400}
                    className="leaf-image"
                    priority
                />
                <Image
                    src="/leaf-border.png"
                    alt=""
                    width={60}
                    height={400}
                    className="leaf-image"
                    priority
                />
            </div>

            {/* Corner leaf accents */}
            <div className="leaf-corner leaf-corner-tl" aria-hidden="true">
                <Image
                    src="/leaf-border.png"
                    alt=""
                    width={80}
                    height={150}
                    className="leaf-corner-image"
                />
            </div>
            <div className="leaf-corner leaf-corner-tr" aria-hidden="true">
                <Image
                    src="/leaf-border.png"
                    alt=""
                    width={80}
                    height={150}
                    className="leaf-corner-image"
                />
            </div>
            <div className="leaf-corner leaf-corner-bl" aria-hidden="true">
                <Image
                    src="/leaf-border.png"
                    alt=""
                    width={80}
                    height={150}
                    className="leaf-corner-image"
                />
            </div>
            <div className="leaf-corner leaf-corner-br" aria-hidden="true">
                <Image
                    src="/leaf-border.png"
                    alt=""
                    width={80}
                    height={150}
                    className="leaf-corner-image"
                />
            </div>
        </>
    );
}
