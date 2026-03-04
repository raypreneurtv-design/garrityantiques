'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollAnimateProps {
    children: ReactNode
    className?: string
    direction?: 'up' | 'left' | 'right'
    delay?: number
}

export default function ScrollAnimate({
    children,
    className = '',
    direction = 'up',
    delay = 0
}: ScrollAnimateProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true)
                    }, delay)
                    observer.unobserve(entry.target)
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [delay])

    const animationClass = direction === 'up'
        ? 'animate-on-scroll'
        : direction === 'left'
            ? 'animate-left'
            : 'animate-right'

    return (
        <div
            ref={ref}
            className={`${animationClass} ${isVisible ? 'visible' : ''} ${className}`}
        >
            {children}
        </div>
    )
}
