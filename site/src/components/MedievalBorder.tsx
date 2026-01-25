'use client'

export default function MedievalBorder() {
    return (
        <div className="fixed inset-0 pointer-events-none z-50" aria-hidden="true">
            {/* Outer Dark Border - Iron Frame */}
            <div className="absolute inset-0 border-[8px] border-[#1a0f0a]" style={{
                boxShadow: 'inset 0 0 15px rgba(0,0,0,0.8)'
            }} />

            {/* Middle Decorative Border - Burnished Gold */}
            <div className="absolute inset-[8px] border-[5px]" style={{
                borderImage: 'linear-gradient(135deg, #8b6914 0%, #ffd700 25%, #b8860b 50%, #ffd700 75%, #8b6914 100%) 1',
                boxShadow: 'inset 0 0 10px rgba(255,215,0,0.2), 0 0 8px rgba(0,0,0,0.5)'
            }} />

            {/* Inner Accent Border */}
            <div className="absolute inset-[13px] border-[2px] border-[#2a1810]" />

            {/* Decorative Rivets/Studs - Top */}
            <div className="absolute top-[4px] left-[80px] right-[80px] flex justify-between">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={`top-${i}`} className="w-3 h-3 rounded-full bg-gradient-to-br from-[#ffd700] to-[#8b6914]" style={{
                        boxShadow: '0 2px 4px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.3)'
                    }} />
                ))}
            </div>

            {/* Decorative Rivets/Studs - Bottom */}
            <div className="absolute bottom-[4px] left-[80px] right-[80px] flex justify-between">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={`btm-${i}`} className="w-3 h-3 rounded-full bg-gradient-to-br from-[#ffd700] to-[#8b6914]" style={{
                        boxShadow: '0 2px 4px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.3)'
                    }} />
                ))}
            </div>

            {/* Corner Shield - Top Left */}
            <div className="absolute top-[-2px] left-[-2px] w-20 h-20">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2a1810] to-[#1a0f0a] rounded-br-2xl flex items-center justify-center" style={{
                        boxShadow: '2px 2px 8px rgba(0,0,0,0.6)'
                    }}>
                        <span className="text-3xl text-[#ffd700]" style={{
                            textShadow: '0 0 10px rgba(255,215,0,0.5), 2px 2px 4px rgba(0,0,0,0.8)',
                            filter: 'drop-shadow(0 0 3px rgba(255,215,0,0.4))'
                        }}>⚜</span>
                    </div>
                </div>
            </div>

            {/* Corner Shield - Top Right */}
            <div className="absolute top-[-2px] right-[-2px] w-20 h-20">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-bl from-[#2a1810] to-[#1a0f0a] rounded-bl-2xl flex items-center justify-center" style={{
                        boxShadow: '-2px 2px 8px rgba(0,0,0,0.6)'
                    }}>
                        <span className="text-3xl text-[#ffd700]" style={{
                            textShadow: '0 0 10px rgba(255,215,0,0.5), 2px 2px 4px rgba(0,0,0,0.8)',
                            filter: 'drop-shadow(0 0 3px rgba(255,215,0,0.4))'
                        }}>⚜</span>
                    </div>
                </div>
            </div>

            {/* Corner Shield - Bottom Left */}
            <div className="absolute bottom-[-2px] left-[-2px] w-20 h-20">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-tr from-[#2a1810] to-[#1a0f0a] rounded-tr-2xl flex items-center justify-center" style={{
                        boxShadow: '2px -2px 8px rgba(0,0,0,0.6)'
                    }}>
                        <span className="text-3xl text-[#ffd700] rotate-180" style={{
                            textShadow: '0 0 10px rgba(255,215,0,0.5), 2px 2px 4px rgba(0,0,0,0.8)',
                            filter: 'drop-shadow(0 0 3px rgba(255,215,0,0.4))'
                        }}>⚜</span>
                    </div>
                </div>
            </div>

            {/* Corner Shield - Bottom Right */}
            <div className="absolute bottom-[-2px] right-[-2px] w-20 h-20">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-tl from-[#2a1810] to-[#1a0f0a] rounded-tl-2xl flex items-center justify-center" style={{
                        boxShadow: '-2px -2px 8px rgba(0,0,0,0.6)'
                    }}>
                        <span className="text-3xl text-[#ffd700] rotate-180" style={{
                            textShadow: '0 0 10px rgba(255,215,0,0.5), 2px 2px 4px rgba(0,0,0,0.8)',
                            filter: 'drop-shadow(0 0 3px rgba(255,215,0,0.4))'
                        }}>⚜</span>
                    </div>
                </div>
            </div>

            {/* Side Centerpiece - Left */}
            <div className="absolute left-[2px] top-1/2 -translate-y-1/2">
                <div className="w-6 h-20 bg-gradient-to-r from-[#1a0f0a] to-[#2a1810] flex items-center justify-center" style={{
                    clipPath: 'polygon(0 0, 100% 15%, 100% 85%, 0 100%)',
                    boxShadow: '2px 0 6px rgba(0,0,0,0.5)'
                }}>
                    <span className="text-lg text-[#ffd700]">✦</span>
                </div>
            </div>

            {/* Side Centerpiece - Right */}
            <div className="absolute right-[2px] top-1/2 -translate-y-1/2">
                <div className="w-6 h-20 bg-gradient-to-l from-[#1a0f0a] to-[#2a1810] flex items-center justify-center" style={{
                    clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)',
                    boxShadow: '-2px 0 6px rgba(0,0,0,0.5)'
                }}>
                    <span className="text-lg text-[#ffd700]">✦</span>
                </div>
            </div>
        </div>
    )
}
