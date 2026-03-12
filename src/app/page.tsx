import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/projects'

export default function HomePage() {
    return (
        <div>
            {/* Hero */}
            <section className="mx-auto max-w-6xl px-6 pt-16 pb-20">
                <h1 className="text-5xl font-black leading-[1.05] tracking-tight uppercase md:text-7xl lg:text-8xl">
                    Hybrid{' '}
                    <span className="hero-highlight">Creative</span>
                    <br />
                    Direction &amp; Visual
                    <br />
                    Strategy For
                    <br />
                    Purpose-Driven
                    <br />
                    Brands.
                </h1>
            </section>

            {/* Bio section */}
            <section className="mx-auto max-w-6xl px-6 pb-20">
                <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
                    <div className="shrink-0">
                        <Image
                            src="/avatar.png"
                            alt="Alberto Olivero avatar"
                            width={80}
                            height={80}
                            className="rounded-full"
                        />
                    </div>
                    <p className="max-w-xl text-sm leading-relaxed text-dark/70 md:text-base">
                        I Am A Bilingual Art Director And Illustrator With Over 15
                        Years Of Agency Experience. Evolving Into A Hybrid
                        Creative Director, I Seamlessly Blend Traditional Design
                        Craft With Motion Graphics And AI-Driven Tools To Build
                        Scalable, Purpose-Driven Brands.
                    </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link
                        href="/work"
                        className="inline-flex w-fit items-center justify-center rounded-full border-2 border-dark bg-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-dark/90 focus:outline-none focus:ring-2 focus:ring-dark/30"
                    >
                        View Selected Work
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex w-fit items-center justify-center rounded-full border-2 border-dark px-6 py-3 text-sm font-semibold text-dark transition hover:bg-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-dark/30"
                    >
                        Let&apos;s Talk About Your Brand
                    </Link>
                </div>
            </section>

            {/* Portfolio grid */}
            <section className="mx-auto max-w-6xl px-6 pb-20">
                <div className="project-grid">
                    {projects.map((p) => (
                        <Link
                            key={p.slug}
                            href={`/work/${p.slug}`}
                            className="project-card group"
                        >
                            <div className="overflow-hidden rounded-xl">
                                <Image
                                    src={p.image}
                                    alt={p.name}
                                    width={400}
                                    height={400}
                                    className="w-full"
                                />
                            </div>
                            <div className="mt-3 space-y-1">
                                <h3 className="text-sm font-bold text-dark">{p.name}</h3>
                                <p className="text-xs text-dark/60">{p.summary}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Social icons */}
            <section className="mx-auto max-w-6xl px-6 pb-20">
                <div className="flex items-center justify-center gap-10">
                    {/* Behance */}
                    <a href="https://behance.net" target="_blank" rel="noreferrer" className="social-icon" aria-label="Behance">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.5 11c1.38 0 2.5-1.12 2.5-2.5S8.88 6 7.5 6H3v5h4.5zm0 2H3v5h4.5c1.38 0 2.5-1.12 2.5-2.5S8.88 13 7.5 13zM3 4h4.5C9.99 4 12 6.01 12 8.5c0 1.12-.56 2.12-1.45 2.76C11.88 11.9 13 13.27 13 15c0 2.49-2.01 4.5-4.5 4.5H1V4h2zm18-1h-7v2h7V3zm-3.5 4a4.5 4.5 0 100 9c1.57 0 3-.85 3.82-2h-2.47c-.47.53-1.23.85-2.05.85-1.55 0-2.8-1.18-2.8-2.65h7.5c.13-.45.2-.9.2-1.2 0-2.49-2.01-4.5-4.2-4.5zm-2.8 3.85c.2-1.38 1.3-2.5 2.8-2.5s2.6 1.12 2.8 2.5h-5.6z"/>
                        </svg>
                    </a>
                    {/* Instagram */}
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                    </a>
                    {/* LOUDER text logo */}
                    <a href="#" className="social-icon text-sm font-black tracking-wider uppercase" aria-label="Louder">
                        LOUDER
                    </a>
                    {/* LinkedIn */}
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                    {/* Mascot */}
                    <a href="#" className="social-icon" aria-label="Mascot">
                        <Image
                            src="/avatar.png"
                            alt="Mascot"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </a>
                </div>
            </section>
        </div>
    )
}
