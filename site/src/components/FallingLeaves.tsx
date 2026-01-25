'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// Leaf images array
const leafImages = ['/leaf-1.png', '/leaf-2.png', '/leaf-3.png', '/leaf-4.png']

type ImageLeaf = {
    id: number
    x: number
    y: number
    size: number
    rotation: number
    rotationSpeed: number
    speedY: number
    swayPhase: number
    swayAmplitude: number
    image: string
    time: number
}

export default function FallingLeaves() {
    const [leaves, setLeaves] = useState<ImageLeaf[]>([])
    const [opacity, setOpacity] = useState(1)
    const animationRef = useRef<number | null>(null)

    // Initialize leaves on mount
    useEffect(() => {
        const initLeaves = () => {
            const newLeaves: ImageLeaf[] = Array.from({ length: 10 }).map((_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * -200 - 20, // Start well above screen
                size: Math.random() * 50 + 35, // 35-85px
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 1.5, // Slower rotation
                speedY: Math.random() * 0.4 + 0.2, // Faster falling (0.2-0.6)
                swayPhase: Math.random() * Math.PI * 2, // Random starting phase
                swayAmplitude: Math.random() * 3 + 2, // How far left-right (2-5%)
                image: leafImages[Math.floor(Math.random() * leafImages.length)],
                time: 0,
            }))
            setLeaves(newLeaves)
        }
        initLeaves()
    }, [])

    // Animation loop
    useEffect(() => {
        let lastTime = performance.now()

        const animate = (currentTime: number) => {
            const deltaTime = (currentTime - lastTime) / 16 // Normalize to ~60fps
            lastTime = currentTime

            setLeaves(prevLeaves =>
                prevLeaves.map(leaf => {
                    const newTime = leaf.time + deltaTime * 0.02 // Slow time progression
                    let newY = leaf.y + leaf.speedY * deltaTime

                    // Wavy left-to-right motion using sine wave
                    const swayOffset = Math.sin(newTime + leaf.swayPhase) * leaf.swayAmplitude
                    let newX = leaf.x + swayOffset * 0.02 * deltaTime

                    // Gentle rotation following the sway
                    const newRotation = leaf.rotation + leaf.rotationSpeed * deltaTime * 0.3 + Math.sin(newTime) * 0.5

                    // Reset if off screen
                    if (newY > 115) {
                        newY = -20
                        newX = Math.random() * 100
                    }
                    // Wrap horizontally
                    if (newX > 105) newX = -5
                    if (newX < -5) newX = 105

                    return {
                        ...leaf,
                        y: newY,
                        x: newX,
                        rotation: newRotation,
                        time: newTime,
                    }
                })
            )

            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
        }
    }, [])

    // Scroll fade
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const fadeEnd = 600
            const newOpacity = Math.max(0, 1 - scrollY / fadeEnd)
            setOpacity(newOpacity)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-700"
            style={{ opacity }}
        >
            {leaves.map((leaf) => (
                <div
                    key={leaf.id}
                    className="absolute"
                    style={{
                        left: `${leaf.x}%`,
                        top: `${leaf.y}%`,
                        transform: `rotate(${leaf.rotation}deg)`,
                        transition: 'none',
                        willChange: 'transform, left, top',
                    }}
                >
                    <Image
                        src={leaf.image}
                        alt=""
                        width={leaf.size}
                        height={leaf.size}
                        className="object-contain"
                        style={{
                            filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.4))',
                        }}
                        unoptimized
                    />
                </div>
            ))}
        </div>
    )
}
