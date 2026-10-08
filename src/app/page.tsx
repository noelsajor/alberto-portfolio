import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { Hero } from '@/components/home/Hero'
import { Intro } from '@/components/home/Intro'

export default function HomePage() {
    return (
        <div>
            <Hero />
            <Intro />

            {/* Portfolio grid */}
            <section className="mx-auto max-w-6xl px-6 pb-20">
                <div className="project-grid">
                    {projects.map((p) => (
                        <Link key={p.slug} href={`/work/${p.slug}`} className="project-card group">
                            <div className="thumb">
                                <Image src={p.image} alt={p.name} width={400} height={400} className="w-full" />
                            </div>
                            <div className="mt-3 space-y-1">
                                <h3 className="text-xs font-bold uppercase text-dark">{p.name}</h3>
                                <p className="text-xs text-dark/70">{p.summary}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}
