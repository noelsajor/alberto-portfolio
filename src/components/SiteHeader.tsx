'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Logo } from '@/components/Logo'
import { SocialLinks } from '@/components/icons/SocialIcons'

const nav = [
    { href: '/work', label: 'work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
]

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
    const pathname = usePathname()
    const active = pathname === href || (href === '/work' && pathname?.startsWith('/work'))

    return (
        <Link
            href={href}
            onClick={onClick}
            className={[
                'text-sm transition-colors',
                active ? 'font-bold text-dark' : 'font-medium text-dark/60 hover:text-dark'
            ].join(' ')}
        >
            {label}
        </Link>
    )
}

export function SiteHeader() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onResize = () => setOpen(false)
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    return (
        <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
                <Logo />

                {/* Desktop nav */}
                <nav className="hidden items-center gap-7 md:flex">
                    {nav.map((item) => (
                        <NavLink key={item.href} href={item.href} label={item.label} />
                    ))}
                </nav>

                <div className="hidden items-center gap-5 md:flex">
                    <SocialLinks />
                    <Link href="/#contact" className="btn-accent">
                        Lets Start Your Project
                    </Link>
                </div>

                {/* Mobile button */}
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden border-[1.5px] border-dark px-3 py-2 text-xs font-bold text-dark"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                >
                    {open ? 'Close' : 'Menu'}
                </button>
            </div>

            {/* Mobile menu */}
            {open ? (
                <div id="mobile-menu" className="border-t border-dark/10 bg-cream md:hidden">
                    <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-5">
                        {nav.map((item) => (
                            <NavLink key={item.href} href={item.href} label={item.label} onClick={() => setOpen(false)} />
                        ))}
                        <SocialLinks />
                        <Link href="/#contact" onClick={() => setOpen(false)} className="btn-accent w-fit">
                            Lets Start Your Project
                        </Link>
                    </div>
                </div>
            ) : null}
        </header>
    )
}
