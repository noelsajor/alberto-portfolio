import Link from 'next/link'
import Image from 'next/image'
import { ServiceTags, IndustryTags } from '@/components/Tags'
import { AboutHeroLine, AboutIllustration } from '@/components/about/AboutHeroArt'

export const metadata = {
    title: 'About — Papashongo',
    description:
        'Alberto Olivero builds visual identities for brands with something real to say, with over 12 years combining brand design and illustration.'
}

export default function AboutPage() {
    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="relative">
                {/* Background line */}
                <AboutHeroLine />

                <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-10 pb-6 md:grid-cols-[1.1fr_1fr] md:gap-8 md:pt-16 md:pb-10">
                    <div className="md:pl-8">
                        <h1 className="display text-balance text-[2.1rem] sm:text-5xl md:text-[2.6rem] lg:text-[3rem]">
                            Sup! I&rsquo;m Alberto Olivero. I build visual identities for brands with something real
                            to say.
                        </h1>
                        <div className="mt-8">
                            <Link href="/work" className="btn-accent">
                                View Selected Work
                            </Link>
                        </div>
                    </div>

                    <AboutIllustration />
                </div>
            </section>

            {/* Bio */}
            <section className="relative">
                {/* Background line (left side) */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/lines/about.svg"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-10 top-24 hidden w-[600px] max-w-none select-none md:block lg:w-[720px]"
                />

                <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-[1fr_2fr] md:gap-16 md:py-24 lg:grid-cols-[1fr_1.6fr]">
                    <div className="flex md:justify-center">
                        <div className="flex h-32 w-32 items-center justify-center rounded-full border-[1.5px] border-dark bg-accent md:h-40 md:w-40">
                            <Image src="/avatar.webp" alt="Papashongo mascot" width={110} height={110} className="w-[62%]" />
                        </div>
                    </div>

                    <div className="space-y-10">
                        <div className="max-w-xl space-y-5 text-sm leading-relaxed text-dark/80 md:text-base">
                            <p>
                                Most visual identities play it safe, buried in muted colors and sanitized templates. I
                                build sharp, unapologetic visual systems for brands that refuse to blend in.
                            </p>
                            <p>
                                With over 12 years combining brand design and illustration, I don&rsquo;t just decorate
                                brands &mdash; I construct visual systems with real cultural weight. From record labels
                                and tech platforms to CPG products and streetwear lines, I translate strategic creative
                                direction into undeniable market presence.
                            </p>
                            <p>
                                My work cuts straight through quiet, gray minimalism. Rooted in Afro-Caribbean color, the
                                bold lines of American traditional tattoos, and 2000s streetwear energy, I bring raw
                                visual grit into high-impact brand direction.
                            </p>
                            <p>
                                Great branding isn&rsquo;t about asking for permission or chasing ephemeral trends.
                                It&rsquo;s about establishing clear creative structure, owning your visual identity, and
                                executing with absolute confidence.
                            </p>
                        </div>

                        <ServiceTags />
                        <IndustryTags />
                    </div>
                </div>
            </section>
        </div>
    )
}
