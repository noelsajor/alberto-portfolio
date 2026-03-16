import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { CaseStudyGrid } from '@/components/CaseStudyGrid'

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }))
}

export default async function CaseStudyPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)

    if (!project) return notFound()

    return (
        <main className="mx-auto max-w-6xl px-6 py-12">
            {/* Hero Splash */}
            <section className="mb-12 overflow-hidden rounded-[40px]">
                <Image
                    src={project.image}
                    alt={project.name}
                    width={1200}
                    height={600}
                    className="w-full object-cover aspect-[2/1]"
                    priority
                />
            </section>

            {/* Header / Intro */}
            <section className="mb-20">
                <div className="max-w-4xl">
                    <h1 className="text-5xl font-black tracking-tight uppercase md:text-7xl lg:text-8xl">
                        {project.name}
                    </h1>
                    
                    <div className="mt-8 space-y-8">
                        <p className="text-xl font-bold leading-tight md:text-2xl">
                            {project.summary}
                        </p>
                        
                        <div className="text-lg leading-relaxed text-dark/80 whitespace-pre-wrap">
                            {project.description}
                        </div>
                    </div>
                </div>

                {/* Metadata Row */}
                <div className="mt-16 grid grid-cols-2 gap-8 border-t border-dark/10 pt-10 md:grid-cols-4">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-dark/50 mb-2">Client</p>
                        <p className="text-sm font-medium">{project.client ?? 'N/A'}</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-dark/50 mb-2">Industry</p>
                        <p className="text-sm font-medium">{project.industry ?? 'N/A'}</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-dark/50 mb-2">Year</p>
                        <p className="text-sm font-medium">{project.year ?? 'N/A'}</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-dark/50 mb-2">Creative Work</p>
                        <ul className="text-sm font-medium">
                            {project.creativeWork?.map((work, i) => (
                                <li key={i}>{work}</li>
                            )) ?? <li>{project.role}</li>}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Project Grid */}
            <section className="mb-20">
                <CaseStudyGrid images={project.detailImages} />
            </section>

            {/* Back Button */}
            <div className="pb-20">
                <Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-accent">
                    ← Back to all projects
                </Link>
            </div>
        </main>
    )
}
