'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

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
                'text-sm font-medium transition-colors',
                active ? 'text-accent' : 'text-dark/70 hover:text-dark'
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
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                <Link href="/" className="text-base font-normal tracking-tight text-dark">
                    Alberto <span className="font-bold">Olivero</span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    {nav.map((item) => (
                        <NavLink key={item.href} href={item.href} label={item.label} />
                    ))}
                </nav>

                {/* Mobile button */}
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden rounded-md border border-dark/15 bg-dark/5 px-3 py-2 text-sm font-semibold text-dark transition hover:bg-dark/10 focus:outline-none focus:ring-2 focus:ring-dark/30"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                >
                    {open ? 'Close' : 'Menu'}
                </button>
            </div>

            {/* Divider line */}
            <div className="mx-auto max-w-6xl px-6">
                <div className="border-t border-dark/10" />
            </div>

            {/* Mobile menu */}
            {open ? (
                <div id="mobile-menu" className="border-t border-dark/10 bg-white md:hidden">
                    <div className="mx-auto max-w-6xl px-6 py-4">
                        <div className="flex flex-col gap-4">
                            {nav.map((item) => (
                                <NavLink key={item.href} href={item.href} label={item.label} onClick={() => setOpen(false)} />
                            ))}
                        </div>
                    </div>
                </div>
            ) : null}
        </header>
    )
}
