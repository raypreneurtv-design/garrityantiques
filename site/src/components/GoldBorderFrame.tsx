export default function GoldBorderFrame() {
    return (
        <>
            {/* Outer gold border frame */}
            <div className="gold-border-frame" aria-hidden="true" />

            {/* Corner decorations */}
            <div className="fixed top-6 left-6 text-[var(--color-gold)] text-4xl z-10 pointer-events-none" aria-hidden="true">
                ❧
            </div>
            <div className="fixed top-6 right-6 text-[var(--color-gold)] text-4xl z-10 pointer-events-none scale-x-[-1]" aria-hidden="true">
                ❧
            </div>
            <div className="fixed bottom-6 left-6 text-[var(--color-gold)] text-4xl z-10 pointer-events-none scale-y-[-1]" aria-hidden="true">
                ❧
            </div>
            <div className="fixed bottom-6 right-6 text-[var(--color-gold)] text-4xl z-10 pointer-events-none scale-[-1]" aria-hidden="true">
                ❧
            </div>
        </>
    );
}
