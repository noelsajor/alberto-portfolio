import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
    title: 'About — Alberto Olivero',
    description: 'Bilingual Art Director and Illustrator with over 15 years of agency experience.'
}

export default function AboutPage() {
    return (
        <main className="mx-auto max-w-6xl px-6 py-12">
            {/* Hero Title */}
            <section className="mb-12">
                <h1 className="text-5xl font-black leading-[1.05] tracking-tight uppercase md:text-7xl lg:text-8xl">
                    SHAPING <span className="hero-highlight">BOLD</span>
                    <br />
                    <span className="hero-highlight">BRAND IDENTITIES</span>
                    <br />
                    FOR THE MODERN
                    <br />
                    CULTURE.
                </h1>
            </section>

            {/* Splash Image */}
            <section className="mb-20">
                <div className="overflow-hidden rounded-[40px]">
                    <Image
                        src="/alberto-splash.png"
                        alt="Alberto Olivero Splash"
                        width={1200}
                        height={600}
                        className="w-full object-cover"
                        priority
                    />
                </div>
            </section>

            {/* Bio Section */}
            <section className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-[1fr_3fr]">
                <div className="flex justify-start md:justify-center">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-accent md:h-40 md:w-40">
                        <Image
                            src="/avatar.png"
                            alt="Alberto Olivero Mascot"
                            width={100}
                            height={100}
                            className="w-2/3"
                        />
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="space-y-6 text-lg leading-relaxed text-dark/80 md:text-xl">
                        <p>
                            Hello, I&apos;m Alberto. For over 15 years, I&apos;ve been navigating the intersection of art, business strategy, and technology. Evolving from a traditional Graphic Designer and Illustrator into a Hybrid Creative Director, my focus is on solving complex business challenges through multidisciplinary design. I specialize in merging classic brand building with forward-looking tools —like AI content generation and motion graphics —delivering cohesive and timeless visual ecosystems.
                        </p>
                        <p>
                            My creative approach is heavily influenced by the bold lines of American traditional tattoos and the raw energy of 2000s streetwear, which I translate into mature, high-end corporate identities. When I&apos;m not directing creative projects or crafting illustrations, you can find me fine-tuning my electric bass. Just like in music, I believe great design is all about finding the perfect rhythm between structure and creativity.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/work"
                            className="inline-flex items-center justify-center bg-accent px-6 py-2 text-sm font-bold text-dark transition hover:opacity-90"
                        >
                            View Selected Work
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-black px-6 py-2 text-sm font-bold text-white transition hover:opacity-90"
                        >
                            Let&apos;s Talk About Your Brand
                        </Link>
                    </div>
                </div>
            </section>

            {/* Social Logos */}
            <section className="mb-20">
                <div className="flex flex-wrap items-center justify-between gap-8 py-10 grayscale md:justify-center md:gap-20">
                    {/* Behance */}
                    <a href="https://behance.net" target="_blank" rel="noreferrer" className="text-3xl font-black tracking-tighter transition hover:text-accent">
                        Bē
                    </a>
                    {/* Instagram */}
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-accent">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                    </a>
                    {/* LOUDER */}
                    <a href="#" className="text-2xl font-black tracking-widest uppercase transition hover:text-accent">
                        LOUDER
                    </a>
                    {/* LinkedIn */}
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-accent">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                    {/* Mascot icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent grayscale-0 transition hover:scale-110">
                        <Image
                            src="/avatar.png"
                            alt="Mascot"
                            width={30}
                            height={30}
                            className="w-2/3"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}
