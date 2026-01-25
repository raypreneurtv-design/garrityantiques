'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'

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
    const [isMobile, setIsMobile] = useState(false)
    const animationRef = useRef<number | null>(null)
    const lastTimeRef = useRef(performance.now())

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Initialize leaves - fewer on mobile
    useEffect(() => {
        const leafCount = isMobile ? 5 : 10 // Fewer leaves on mobile
        const newLeaves: ImageLeaf[] = Array.from({ length: leafCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * -150 - 20,
            size: isMobile ? Math.random() * 35 + 25 : Math.random() * 50 + 35,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 1.5,
            speedY: isMobile ? Math.random() * 0.3 + 0.15 : Math.random() * 0.4 + 0.2,
            swayPhase: Math.random() * Math.PI * 2,
            swayAmplitude: Math.random() * 3 + 2,
            image: leafImages[Math.floor(Math.random() * leafImages.length)],
            time: 0,
        }))
        setLeaves(newLeaves)
    }, [isMobile])

    // Smooth animation using requestAnimationFrame
    const animate = useCallback(() => {
        const currentTime = performance.now()
        const deltaTime = Math.min((currentTime - lastTimeRef.current) / 16, 2) // Cap delta to prevent jumps
        lastTimeRef.current = currentTime

        setLeaves(prevLeaves =>
            prevLeaves.map(leaf => {
                const newTime = leaf.time + deltaTime * 0.015
                let newY = leaf.y + leaf.speedY * deltaTime
                const swayOffset = Math.sin(newTime + leaf.swayPhase) * leaf.swayAmplitude
                let newX = leaf.x + swayOffset * 0.015 * deltaTime
                const newRotation = leaf.rotation + leaf.rotationSpeed * deltaTime * 0.2 + Math.sin(newTime) * 0.3

                if (newY > 115) {
                    newY = -15
                    newX = Math.random() * 100
                }
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
    }, [])

    useEffect(() => {
        animationRef.current = requestAnimationFrame(animate)
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
        }
    }, [animate])

    // Scroll fade
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const fadeEnd = isMobile ? 400 : 600
            const newOpacity = Math.max(0, 1 - scrollY / fadeEnd)
            setOpacity(newOpacity)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isMobile])

    // Don't render if fully faded
    if (opacity <= 0) return null

    return (
        <div
            className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
            style={{
                opacity,
                willChange: 'opacity',
                transform: 'translateZ(0)', // GPU acceleration
            }}
        >
            {leaves.map((leaf) => (
                <div
                    key={leaf.id}
                    className="absolute"
                    style={{
                        left: `${leaf.x}%`,
                        top: `${leaf.y}%`,
                        transform: `rotate(${leaf.rotation}deg) translateZ(0)`,
                        willChange: 'transform',
                    }}
                >
                    <Image
                        src={leaf.image}
                        alt=""
                        width={leaf.size}
                        height={leaf.size}
                        className="object-contain"
                        style={{
                            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                        }}
                        unoptimized
                        priority={leaf.id < 3}
                    />
                </div>
            ))}
        </div>
    )
}
