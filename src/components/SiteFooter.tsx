import Link from 'next/link'

export function SiteFooter() {
    return (
        <footer>
            {/* CTA Section */}
            <section className="cta-section">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <h2 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-tight uppercase md:text-7xl">
                        LETS BUILD<br />
                        GREAT THINGS<br />
                        TOGETHER
                    </h2>
                    <div className="mt-8">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-accent px-5 py-2 text-sm font-bold text-dark transition hover:opacity-90"
                        >
                            Lets Talk! &gt;
                        </Link>
                    </div>
                </div>
            </section>

            {/* Bottom bar */}
            <div className="bg-black text-white/50">
                <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-xs md:flex-row md:items-center md:justify-between">
                    <Link href="/" className="text-sm font-normal text-white">
                        Alberto <span className="font-bold text-accent">Olivero</span>
                    </Link>
                    <div className="flex flex-wrap gap-10">
                        <Link className="text-accent text-sm font-bold transition hover:text-white" href="/work">
                            work
                        </Link>
                        <Link className="text-white/60 text-sm font-medium transition hover:text-white" href="/about">
                            About
                        </Link>
                        <Link className="text-white/60 text-sm font-medium transition hover:text-white" href="/contact">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
