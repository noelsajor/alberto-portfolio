import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/data/projects'

export function ProjectCard({ project: p }: { project: Project }) {
    return (
        <Link href={`/work/${p.slug}`} className="project-card group">
            <div className="thumb">
                <Image src={p.image} alt={p.name} width={400} height={400} className="w-full" />
            </div>
            <div className="mt-3 space-y-1">
                <h3 className="text-xs font-bold uppercase tracking-wide text-dark">{p.client ?? p.name}</h3>
                <p className="text-xs leading-snug text-dark/75">{p.summary}</p>
            </div>
        </Link>
    )
}
