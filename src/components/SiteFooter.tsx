import Link from 'next/link'

export function SiteFooter() {
    return (
        <footer>
            {/* CTA Section */}
            <section className="cta-section">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <h2 className="text-4xl font-black leading-tight tracking-tight uppercase md:text-5xl lg:text-6xl">
                        Let&apos;s Craft<br />
                        Something<br />
                        Bold Together.
                    </h2>
                    <div className="mt-8">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 border-2 border-accent px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-dark focus:outline-none focus:ring-2 focus:ring-accent/50"
                        >
                            Lets Talk About Your Brand &gt;
                        </Link>
                    </div>
                </div>
            </section>

            {/* Bottom bar */}
            <div className="bg-dark text-white/70">
                <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm md:flex-row md:items-center md:justify-between">
                    <Link href="/" className="text-sm font-normal text-white">
                        Alberto <span className="font-bold">Olivero</span>
                    </Link>
                    <div className="flex flex-wrap gap-6">
                        <Link className="text-accent text-sm font-medium hover:text-white" href="/work">
                            work
                        </Link>
                        <Link className="text-white/70 text-sm font-medium hover:text-white" href="/about">
                            About
                        </Link>
                        <Link className="text-white/70 text-sm font-medium hover:text-white" href="/contact">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
