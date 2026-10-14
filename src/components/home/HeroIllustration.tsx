'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useParallaxY } from '@/lib/useParallaxY'

// Desktop hero art split into depth layers, back to front:
// accent strip -> far (suns, sparkles) -> mid (frames, posters, fan) -> foreground line-art
// -> near (music notes, floating in front of everything).
// On scroll each layer lags behind the page in proportion to its depth, so the strip
// "peels off" the scene and sinks behind it. Every art layer carries an opaque
// backing, so nearer objects keep covering whatever sits behind them as the layers drift.
export function HeroIllustration() {
    // At the top of the page every layer sits exactly as designed.
    // Deeper layers lag more behind the page: strip (deepest) > far > mid > foreground (static) > near
    const stripY = useParallaxY(15, 900)
    const farY = useParallaxY(11, 900)
    const midY = useParallaxY(6, 900)
    // The music notes float in front of the scene, so they outrun the page
    const nearY = useParallaxY(-8, 900)

    const layerClass = 'absolute top-0 left-0 h-auto w-full will-change-transform'

    return (
        <div className="relative hidden md:-mt-[calc(31%_-_5rem)] md:block lg:-mt-[calc(34%_-_5rem)]">
            <motion.img
                src="/illustrations/hero-desktop-strip.svg"
                alt=""
                width={1440}
                height={1200}
                className={layerClass}
                style={{ y: stripY }}
                loading="lazy"
            />
            <motion.img
                src="/illustrations/hero-desktop-far.svg"
                alt=""
                width={1440}
                height={1024}
                className={layerClass}
                style={{ y: farY }}
                loading="lazy"
            />
            <motion.img
                src="/illustrations/hero-desktop-mid.svg"
                alt=""
                width={1440}
                height={1024}
                className={layerClass}
                style={{ y: midY }}
                loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/illustrations/hero-desktop-art.svg"
                alt="Illustrated studio desk of Papashongo with a character drawing at a computer, surrounded by posters, plants and a fan"
                width={1440}
                height={1024}
                className="relative w-full"
                fetchPriority="high"
            />
            <motion.img
                src="/illustrations/hero-desktop-near.svg"
                alt=""
                width={1440}
                height={1024}
                className={layerClass}
                style={{ y: nearY }}
                loading="lazy"
            />
            {/* Gated with CSS (motion-reduce:hidden), not useReducedMotion: the hook differs between server and first client render */}
            <LensGlint />
        </div>
    )
}

// Sunglasses lens outlines, in the art's 1440x1024 viewBox
const LEFT_LENS =
    'M630.48,724.68l28.22.62c1.41.03,2.38,1.47,1.84,2.77-1.68,4.13-6.04,11.44-15.63,10.91s-14.17-7.29-16.29-11.35c-.71-1.36.31-2.99,1.85-2.96Z'
const RIGHT_LENS =
    'M692.42,724.76l-28.22.62c-1.41.03-2.38,1.47-1.84,2.77,1.68,4.13,6.04,11.44,15.63,10.91s14.17-7.29,16.29-11.35c.71-1.36-.31-2.99-1.85-2.96Z'

// The glint renders once per page, so a fixed id is unique and identical on server and client
const LENS_CLIP_ID = 'hero-lens-clip'

// How many times the reflection crosses the lenses while they travel up the viewport
const GLINT_SWEEPS = 4

// A light reflection that sweeps across the flower's sunglasses several times while the
// lenses scroll from 95% to 15% of the viewport height. Clipped to the lenses, so it is
// only visible while crossing them; each sweep restarts off-lens, so the wrap never shows.
function LensGlint() {
    const lensRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: lensRef, offset: ['start 0.95', 'start 0.15'] })
    const glintX = useTransform(scrollYProgress, (p) => ((p * GLINT_SWEEPS) % 1) * 100)

    return (
        <>
            {/* Scroll anchor sitting exactly over the lenses */}
            <div ref={lensRef} className="absolute top-[70.7%] left-[43.6%] h-[1.5%] w-[4.7%]" />
            <svg
                viewBox="0 0 1440 1024"
                className="pointer-events-none absolute inset-0 h-full w-full motion-reduce:hidden"
                aria-hidden="true"
            >
                <defs>
                    <clipPath id={LENS_CLIP_ID}>
                        <path d={LEFT_LENS} />
                        <path d={RIGHT_LENS} />
                    </clipPath>
                </defs>
                <g clipPath={`url(#${LENS_CLIP_ID})`}>
                    <motion.g style={{ x: glintX }} fill="#fff">
                        <polygon points="614,720 620,720 610,744 604,744" />
                        <polygon points="623,720 625.5,720 615.5,744 613,744" />
                    </motion.g>
                </g>
            </svg>
        </>
    )
}
