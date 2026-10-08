import Link from 'next/link'

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Copy */}
            <div className="relative z-10 mx-auto max-w-4xl px-6 pt-12 pb-10 text-center md:pt-16 md:pb-0">
                <h1 className="display text-4xl sm:text-5xl md:text-[3.4rem] lg:text-[4.2rem]">
                    Visual identities
                    <br />
                    impossible to scroll past
                    <br />
                    for brands that refuse to
                    <br />
                    look boring
                </h1>
                <div className="mt-7">
                    <Link href="/work" className="btn-accent">
                        View Selected Work
                    </Link>
                </div>
            </div>

            {/* Illustration: desktop version has empty space at the top for the copy */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/illustrations/hero-desktop.svg"
                alt="Illustrated studio desk of Papashongo with a character drawing at a computer, surrounded by posters, plants and a fan"
                width={1440}
                height={1024}
                className="hidden w-full md:-mt-[18%] md:block lg:-mt-[21%]"
                fetchPriority="high"
            />
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
