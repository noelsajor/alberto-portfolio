import Link from 'next/link'

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Copy */}
            <div className="relative z-10 mx-auto max-w-6xl px-6 pt-12 pb-10 text-center md:pt-16 md:pb-0">
                <h1 className="display mx-auto max-w-[22ch] text-balance text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem]">
                    Visual identities impossible to scroll past for brands that refuse to look boring
                </h1>
                <div className="mt-8">
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
                className="hidden w-full md:-mt-[23%] md:block lg:-mt-[26%]"
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
