'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

type Leaf = {
    id: number
    left: number
    delay: number
    duration: number
    rotate: number
    scale: number
}

export default function FallingLeaves() {
    const [leaves, setLeaves] = useState<Leaf[]>([])

    useEffect(() => {
        // Generate random leaves on client side to avoid hydration mismatch
        const newLeaves: Leaf[] = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100, // Random horizontal position
            delay: Math.random() * 15, // Random start delay
            duration: 15 + Math.random() * 15, // Slow duration (15-30s)
            rotate: Math.random() * 360, // Random initial rotation
            scale: 0.5 + Math.random() * 0.5, // Random size
        }))
        setLeaves(newLeaves)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {leaves.map((leaf) => (
                <div
                    key={leaf.id}
                    className="absolute -top-20 opacity-0 animate-falling-leaf"
                    style={{
                        left: `${leaf.left}%`,
                        animationDelay: `${leaf.delay}s`,
                        animationDuration: `${leaf.duration}s`,
                    }}
                >
                    <Image
                        src="/leaf-border.png"
                        alt=""
                        width={40}
                        height={40}
                        className="object-contain"
                        style={{
                            transform: `rotate(${leaf.rotate}deg) scale(${leaf.scale})`,
                            filter: 'brightness(0) blur(1px)', // Shadow effect
                            opacity: 0.3, // 30% visible (shadow)
                        }}
                    />
                </div>
            ))}
        </div>
    )
}
