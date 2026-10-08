import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { CaseStudyGallery } from '@/components/CaseStudyGallery'
import { ProjectCard } from '@/components/ProjectCard'
import { Tag, serviceColor, serviceHref, industryHref } from '@/components/Tags'

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)
    if (!project) return {}
    return {
        title: `${project.title ?? project.name} — Papashongo`,
        description: project.summary
    }
}

/** Up to three other projects: same type first, then the rest in catalogue order. */
function relatedTo(slug: string, type: string) {
    const others = projects.filter((p) => p.slug !== slug)
    return [...others.filter((p) => p.type === type), ...others.filter((p) => p.type !== type)].slice(0, 3)
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)
    if (!project) return notFound()

    const paragraphs = (project.description ?? '').split(/\n\s*\n/).filter(Boolean)
    const related = relatedTo(project.slug, project.type)

    return (
        <article className="mx-auto max-w-6xl px-6 pt-8 pb-24 md:pt-12">
            {/* Hero */}
            <div className="overflow-hidden border-[1.5px] border-dark bg-[#E5E3DD]">
                <Image
                    src={project.hero ?? project.image}
                    alt={project.name}
                    width={1600}
                    height={700}
                    sizes="(min-width: 1152px) 1104px, 100vw"
                    className="aspect-[16/9] w-full object-cover md:aspect-[2.3/1]"
                    priority
                />
            </div>

            {/* Title */}
            <header className="mt-10 md:mt-14">
                {project.client ? (
                    <p className="text-xs font-bold uppercase tracking-wide text-dark/80 md:text-sm">{project.client}</p>
                ) : null}
                <h1 className="display mt-3 max-w-4xl text-4xl sm:text-5xl md:text-[3.4rem] lg:text-[4rem]">
                    {project.title ?? project.name}
                </h1>
            </header>

            {/* Meta + description */}
            <section className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-[1fr_2fr] md:gap-16 lg:grid-cols-[1fr_1.6fr]">
                <dl className="space-y-7">
                    {project.industry ? (
                        <div>
                            <dt className="mb-2 text-sm font-bold">Industry</dt>
                            <dd>
                                <Tag label={project.industry} href={industryHref(project.industry)} color="bg-[#FFF4CF]" />
                            </dd>
                        </div>
                    ) : null}
                    {project.year ? (
                        <div>
                            <dt className="mb-1 text-sm font-bold">Year</dt>
                            <dd className="text-sm">{project.year}</dd>
                        </div>
                    ) : null}
                    <div>
                        <dt className="mb-2 text-sm font-bold">Creative Work</dt>
                        <dd className="flex flex-wrap gap-2">
                            {(project.creativeWork ?? [project.role]).map((w) => (
                                <Tag key={w} label={w} href={serviceHref(w)} color={serviceColor(w)} />
                            ))}
                        </dd>
                    </div>
                </dl>

                <div className="max-w-xl space-y-5 text-sm leading-relaxed text-dark/80 md:text-base">
                    {paragraphs.length > 0 ? paragraphs.map((t, i) => <p key={i}>{t}</p>) : <p>{project.summary}</p>}
                </div>
            </section>

            {/* Gallery */}
            {project.gallery?.length ? (
                <section className="mt-14 md:mt-20" aria-label="Project gallery">
                    <CaseStudyGallery items={project.gallery} projectName={project.name} />
                </section>
            ) : null}

            {/* Related */}
            {related.length > 0 ? (
                <section className="mt-20 md:mt-28" aria-labelledby="related-heading">
                    <h2 id="related-heading" className="display text-3xl md:text-4xl">
                        You might also like
                    </h2>
                    <div className="project-grid mt-8">
                        {related.map((p) => (
                            <ProjectCard key={p.slug} project={p} />
                        ))}
                    </div>
                </section>
            ) : null}

            <div className="mt-16">
                <Link href="/work" className="text-sm font-bold uppercase tracking-wide hover:underline">
                    ← Back to all projects
                </Link>
            </div>
        </article>
    )
}
