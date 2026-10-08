import Link from 'next/link'

/**
 * Wordmark placeholder. Replace the inner text with the official
 * PAPASHONGO SVG once it is available (keep the Link wrapper).
 */
export function Logo({ className = '' }: { className?: string }) {
    return (
        <Link href="/" className={`display text-xl tracking-tight ${className}`} aria-label="Papashongo, home">
            Papashongo
        </Link>
    )
}
