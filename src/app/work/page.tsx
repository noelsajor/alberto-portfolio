import Link from 'next/link'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'
import { ServiceTags, IndustryTags, services, industries } from '@/components/Tags'
import { filterProjects, tagSlug } from '@/lib/tags'

type SearchParams = Promise<{ service?: string | string[]; industry?: string | string[] }>

function first(v: string | string[] | undefined) {
    return Array.isArray(v) ? v[0] : v
}

function labelFor(slug: string | undefined, list: string[]) {
    return slug ? list.find((l) => tagSlug(l) === slug) : undefined
}

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
    const sp = await searchParams
    const label = labelFor(first(sp.service), services.map((s) => s.label)) ?? labelFor(first(sp.industry), industries)
    return {
        title: `${label ? `${label} — ` : ''}Work — Papashongo`,
        description: 'Selected branding, packaging, illustration and creative direction projects by Alberto Olivero.'
    }
}

export default async function WorkPage({ searchParams }: { searchParams: SearchParams }) {
    const sp = await searchParams
    const service = first(sp.service)
    const industry = first(sp.industry)
    const serviceLabel = labelFor(service, services.map((s) => s.label))
    const industryLabel = labelFor(industry, industries)
    const activeLabel = serviceLabel ?? industryLabel
    const filtered = activeLabel ? filterProjects(projects, { service, industry }) : projects

    return (
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-24 md:pt-14">
            <header className="mb-10 space-y-6 md:mb-14">
                <div className="space-y-4">
                    <h1 className="display text-5xl md:text-6xl">{activeLabel ?? 'Work'}</h1>
                    <p className="max-w-2xl text-dark/80">
                        {activeLabel ? (
                            <>
                                {filtered.length} {filtered.length === 1 ? 'project' : 'projects'} in {activeLabel}.{' '}
                                <Link href="/work" className="font-bold underline underline-offset-4 hover:text-dark">
                                    View all work
                                </Link>
                            </>
                        ) : (
                            'A curated selection of branding, packaging, illustration and creative direction for brands that refuse to look boring.'
                        )}
                    </p>
                </div>

                {/* Filters */}
                <div className="space-y-6 border-t-[1.5px] border-dark/15 pt-6">
                    <ServiceTags active={serviceLabel ? service : undefined} heading="Filter by service" />
                    <IndustryTags active={industryLabel ? industry : undefined} heading="Filter by industry" />
                </div>
            </header>

            {filtered.length > 0 ? (
                <div className="project-grid">
                    {filtered.map((p) => (
                        <ProjectCard key={p.slug} project={p} />
                    ))}
                </div>
            ) : (
                <p className="text-dark/70">
                    No projects tagged with {activeLabel} yet.{' '}
                    <Link href="/work" className="font-bold underline underline-offset-4">
                        See all work
                    </Link>
                </p>
            )}
        </div>
    )
}
