import Link from 'next/link'
import { SocialLinks } from '@/components/icons/SocialIcons'

const nav = [
    { href: '/work', label: 'work' },
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
                    <Link href="/#contact" className="btn-accent text-sm px-5 py-2.5">
                        Lets Talk! &gt;
                    </Link>
                </div>
            </section>

            {/* Bottom bar */}
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-10 md:flex-row md:items-center md:justify-between">
                <Link href="/" className="display text-xl text-accent" aria-label="Papashongo, home">
                    Papashongo
                </Link>
                <div className="flex flex-wrap items-center gap-6">
                    {nav.map((item, i) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={[
                                'text-sm transition hover:text-white',
                                i === 0 ? 'font-bold text-white' : 'font-medium text-white/60'
                            ].join(' ')}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <SocialLinks className="text-white [&_.social-icon]:text-white" />
                </div>
            </div>
        </footer>
    )
}
