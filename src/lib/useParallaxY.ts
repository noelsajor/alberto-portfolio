'use client'

import { useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react'

/**
 * Vertical parallax offset driven by page scroll: 0% at the top of the page, `distance`
 * (a percentage of the element's own height) once the page has scrolled `scrollRange` px.
 * Positive values lag behind the page (deeper layers), negative values outrun it (nearer).
 *
 * Reduced motion is resolved inside the motion value instead of by toggling the `style`
 * prop, so the server render and the first client render always match.
 */
export function useParallaxY(distance: number, scrollRange: number): MotionValue<string> {
    const reduceMotion = useReducedMotion()
    const { scrollY } = useScroll()
    return useTransform(scrollY, (y) => {
        if (reduceMotion) return '0%'
        const progress = Math.min(Math.max(y / scrollRange, 0), 1)
        return `${progress * distance}%`
    })
}
