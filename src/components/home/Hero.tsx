import Link from 'next/link'
import { HeroIllustration } from '@/components/home/HeroIllustration'

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Copy */}
            <div className="relative z-10 mx-auto max-w-6xl px-6 pt-12 pb-10 text-center md:pt-16 md:pb-0">
                <h1 className="display mx-auto max-w-[22ch] text-balance text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem]">
                    Visual identities for brands that refuse to blend in.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-dark/80 md:text-lg">
                    I combine strategic art direction, vibrant illustration, motion design, and bold colors to build
                    visual identities that command the room.
                </p>
                <div className="mt-8">
                    <Link href="/work" className="btn-accent">
                        View Selected Work
                    </Link>
                </div>
            </div>

            {/* Illustration: desktop version has empty space at the top for the copy */}
            <HeroIllustration />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/illustrations/hero-mobile.svg"
                alt=""
                width={722}
                height={645}
                className="w-full md:hidden"
                fetchPriority="high"
            />
        </section>
    )
}
