import Link from 'next/link'
import Image from 'next/image'
import { ServiceTags, IndustryTags } from '@/components/Tags'

export const metadata = {
    title: 'About — Papashongo',
    description:
        'Alberto Olivero, Art Director and Illustrator with over 15 years navigating the intersection of art, business strategy and technology.'
}

export default function AboutPage() {
    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="relative">
                {/* Background line */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/lines/hero.svg"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-0 hidden w-[1440px] max-w-none -translate-x-1/2 select-none md:block"
                />

                <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-10 pb-6 md:grid-cols-[1.1fr_1fr] md:gap-8 md:pt-16 md:pb-10">
                    <div className="md:pl-8">
                        <h1 className="display text-4xl sm:text-5xl md:text-[3.2rem] lg:text-[3.6rem]">
                            Hello!{' '}
                            <span role="img" aria-label="waving hand">
                                👋
                            </span>{' '}
                            I&apos;m
                            <br />
                            Alberto, Art
                            <br />
                            Director &amp;
                            <br />
                            Illustrator.
                        </h1>
                        <div className="mt-8">
                            <Link href="/work" className="btn-accent">
                                View Selected Work
                            </Link>
                        </div>
                    </div>

                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/illustrations/about.svg"
                        alt="Papashongo character dancing surrounded by smiling faces"
                        width={617}
                        height={626}
                        className="mx-auto w-full max-w-md md:max-w-none"
                        fetchPriority="high"
                    />
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
                                For over 15 years, I have navigated the intersection of art, business strategy, and
                                technology. Evolving from a traditional background into a hybrid Creative Director and
                                Illustrator, my focus is solving complex business challenges through multidisciplinary
                                design.
                            </p>
                            <p>
                                I specialize in merging classic brand building with forward-looking tools, like AI
                                content generation and motion graphics, delivering cohesive and timeless visual
                                ecosystems.
                            </p>
                            <p>
                                My creative approach is heavily influenced by the bold lines of American traditional
                                tattoos and the raw energy of 2000s streetwear, which I translate into mature, high-end
                                corporate and cultural identities.
                            </p>
                            <p>
                                When I am not directing creative projects or crafting illustrations, you can find me
                                fine-tuning my electric bass. Just like in music, I believe great design is all about
                                finding the perfect rhythm between structure and creativity.
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
