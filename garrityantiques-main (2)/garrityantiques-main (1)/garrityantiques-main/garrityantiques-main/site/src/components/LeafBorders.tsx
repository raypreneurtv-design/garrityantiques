'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const LEAF_COUNT = 8

export default function LeafBorders() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(true)
    }, [])

    return (
        <>
            {/* Left leaf border */}
            <div className={`leaf-border leaf-border-left ${visible ? 'visible' : ''}`} aria-hidden="true">
                <div className="leaf-strip">
                    {Array.from({ length: LEAF_COUNT }).map((_, i) => (
                        <Image key={i} src="/leaf-border.png" alt="" width={45} height={300} className="leaf-image" />
                    ))}
                </div>
            </div>

            {/* Right leaf border */}
            <div className={`leaf-border leaf-border-right ${visible ? 'visible' : ''}`} aria-hidden="true">
                <div className="leaf-strip">
                    {Array.from({ length: LEAF_COUNT }).map((_, i) => (
                        <Image key={i} src="/leaf-border.png" alt="" width={45} height={300} className="leaf-image" />
                    ))}
                </div>
            </div>
        </>
    )
}
