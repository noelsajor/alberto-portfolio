import Link from 'next/link'

export const metadata = {
    title: 'Contact — Alberto Olivero',
    description: 'Get in touch with Alberto Olivero.'
}

export default function ContactPage() {
    return (
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-6">
            <h1 className="text-3xl font-black tracking-tight uppercase md:text-4xl">Contact</h1>
            <p className="max-w-2xl text-dark/70">
                Want to chat about a creative project or collaboration? Let&apos;s talk about your brand.
            </p>

            <div className="space-y-3">
                <Link className="block text-dark/80 hover:text-dark font-medium" href="mailto:hello@albertoolivero.com">
                    hello@albertoolivero.com
                </Link>
                <Link
                    className="block text-dark/80 hover:text-dark font-medium"
                    href="https://www.linkedin.com/in/albertoolivero"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </Link>
                <Link
                    className="block text-dark/80 hover:text-dark font-medium"
                    href="https://www.behance.net/albertoolivero"
                    target="_blank"
                    rel="noreferrer"
                >
                    Behance
                </Link>
            </div>
        </div>
    )
}
