import Image from "next/image";

export default function GoldBorderFrame() {
    return (
        <>
            {/* Left leaf border - vertical strip */}
            <div className="leaf-border leaf-border-left" aria-hidden="true">
                <div className="leaf-strip">
                    <Image
                        src="/leaf-border.png"
                        alt=""
                        width={45}
                        height={300}
                        className="leaf-image"
                        priority
                    />
                    <Image
                        src="/leaf-border.png"
                        alt=""
                        width={45}
                        height={300}
                        className="leaf-image"
                        priority
                    />
                    <Image
                        src="/leaf-border.png"
                        alt=""
                        width={45}
                        height={300}
                        className="leaf-image"
                        priority
                    />
                </div>
            </div>

            {/* Right leaf border - vertical strip */}
            <div className="leaf-border leaf-border-right" aria-hidden="true">
                <div className="leaf-strip">
                    <Image
                        src="/leaf-border.png"
                        alt=""
                        width={45}
                        height={300}
                        className="leaf-image"
                        priority
                    />
                    <Image
                        src="/leaf-border.png"
                        alt=""
                        width={45}
                        height={300}
                        className="leaf-image"
                        priority
                    />
                    <Image
                        src="/leaf-border.png"
                        alt=""
                        width={45}
                        height={300}
                        className="leaf-image"
                        priority
                    />
                </div>
            </div>
        </>
    );
}
