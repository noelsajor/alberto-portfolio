import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'

export function ProjectGrid() {
    return (
        <section className="mx-auto max-w-6xl px-6 pb-24" aria-label="Selected work">
            <div className="project-grid">
                {projects.map((p) => (
                    <ProjectCard key={p.slug} project={p} />
                ))}
            </div>
        </section>
    )
}
