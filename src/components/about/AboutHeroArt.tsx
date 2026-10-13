'use client'

import { motion, type MotionValue } from 'motion/react'
import { useParallaxY } from '@/lib/useParallaxY'

// About hero depth, back to front:
// accent line -> far (small faces, sparkles) -> mid (face behind the raised arm)
// -> character (static) -> near (big yellow face, floating in front).
// Deeper layers lag behind the page, the near face outruns it.
export function AboutHeroLine() {
    const y = useParallaxY(15, 800)

    // Clipped to the line's resting box: it can sink on scroll but never reaches further
    // down than the design, so it never slides behind the bio copy below.
    return (
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-[794px] w-[1440px] -translate-x-1/2 overflow-hidden select-none md:block">
            <motion.img
                src="/lines/hero.svg"
                alt=""
                aria-hidden="true"
                width={1440}
                height={794}
                className="w-full max-w-none will-change-transform"
                style={{ y }}
            />
        </div>
    )
}

export function AboutIllustration() {
    const farY = useParallaxY(9, 800)
    const midY = useParallaxY(5, 800)
    const nearY = useParallaxY(-7, 800)

    const layerClass = 'absolute top-0 left-0 h-auto w-full will-change-transform'
    const layer = (name: string, y: MotionValue<string>) => (
        <motion.img
            src={`/illustrations/about-${name}.svg`}
            alt=""
            width={617}
            height={626}
            className={layerClass}
            style={{ y }}
            fetchPriority="high"
        />
    )

    return (
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
            {layer('far', farY)}
            {layer('mid', midY)}
            {/* The character carries an opaque backing, so it keeps covering the faces behind it */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/illustrations/about-character.svg"
                alt="Papashongo character dancing surrounded by smiling faces"
                width={617}
                height={626}
                className="relative w-full"
                fetchPriority="high"
            />
            {layer('near', nearY)}
        </div>
    )
}
