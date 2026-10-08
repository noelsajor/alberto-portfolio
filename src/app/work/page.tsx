import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'

export const metadata = {
    title: 'Work — Papashongo',
    description: 'Selected branding, packaging, illustration and creative direction projects by Alberto Olivero.'
}

export default function WorkPage() {
    return (
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-24 md:pt-14">
            <header className="mb-10 space-y-4 md:mb-14">
                <h1 className="display text-5xl md:text-6xl">Work</h1>
                <p className="max-w-2xl text-sm text-dark/80 md:text-base">
                    A curated selection of branding, packaging, illustration and creative direction for brands that
                    refuse to look boring.
                </p>
            </header>

            <div className="project-grid">
                {projects.map((p) => (
                    <ProjectCard key={p.slug} project={p} />
                ))}
            </div>
        </div>
    )
}
