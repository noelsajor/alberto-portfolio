import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/projects'

export const metadata = {
    title: 'Work — Alberto Olivero',
    description: 'Selected creative direction and visual strategy projects.'
}

export default function WorkPage() {
    return (
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-10">
            <header className="space-y-3">
                <h1 className="text-3xl font-black tracking-tight uppercase md:text-4xl">Work</h1>
                <p className="max-w-2xl text-dark/70">
                    A curated selection of creative direction, branding, and visual strategy projects
                    for purpose-driven brands.
                </p>
            </header>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                    <Link
                        key={p.slug}
                        href={`/work/${p.slug}`}
                        className="group rounded-2xl border border-dark/10 bg-white p-4 transition hover:shadow-lg hover:border-dark/20 focus:outline-none focus:ring-2 focus:ring-dark/30"
                    >
                        <div className="overflow-hidden rounded-xl">
                            <Image
                                src={p.image}
                                alt={p.name}
                                width={400}
                                height={400}
                                className="w-full aspect-square object-cover transition group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-4 space-y-2">
                            <p className="text-xs font-semibold tracking-wide text-dark/50 uppercase">{p.type}</p>
                            <h2 className="text-lg font-bold tracking-tight">{p.name}</h2>
                            <p className="text-sm text-dark/70">{p.summary}</p>
                            <p className="text-sm font-semibold text-accent">View project →</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
