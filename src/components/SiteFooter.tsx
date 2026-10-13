import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SocialLinks } from '@/components/icons/SocialIcons'
import { LogoMark } from '@/components/Logo'

const nav = [
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
]

export function SiteFooter() {
    return (
        <footer className="cta-section">
            {/* CTA */}
            <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
                <h2 className="display max-w-2xl text-5xl md:text-6xl lg:text-7xl">
                    Lets build
                    <br />
                    great things
                    <br />
                    together
                </h2>
                <div className="mt-8">
                    <Link href="/#contact" className="btn-accent btn-on-dark">
                        Lets Talk! &gt;
                    </Link>
                </div>
            </section>

            {/* Bottom bar */}
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-8 md:flex-row md:items-center md:justify-between">
                <Link href="/" className="inline-flex items-center text-accent" aria-label="Papashongo, home">
                    <LogoMark className="h-6 w-auto md:h-7" />
                </Link>
                <div className="flex flex-wrap items-center gap-8">
                    {nav.map((item, i) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={[
                                'text-lg transition hover:text-white',
                                i === 0 ? 'font-bold text-white' : 'font-medium text-white/60'
                            ].join(' ')}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <SocialLinks />
                </div>
            </div>

            {/* Legal + development credit */}
            <div className="mx-auto max-w-6xl px-6 pb-10">
                <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:justify-between">
                    <p>&copy; {new Date().getFullYear()} Papashongo. All rights reserved.</p>
                    <p>
                        Developed by{' '}
                        <a
                            href="https://www.noelsajor.com"
                            target="_blank"
                            rel="noopener"
                            className="group inline-flex items-center gap-0.5 font-medium text-white/70 underline-offset-4 transition hover:text-white hover:underline"
                        >
                            Noelsajor
                            <ArrowUpRight
                                aria-hidden="true"
                                className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                strokeWidth={2.25}
                            />
                            <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
