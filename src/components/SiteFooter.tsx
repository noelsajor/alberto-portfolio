import Link from 'next/link'
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
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-10 md:flex-row md:items-center md:justify-between">
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
                    <SocialLinks className="text-white [&_.social-icon]:text-white" />
                </div>
            </div>
        </footer>
    )
}
