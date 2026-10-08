import type { Project } from '@/data/projects'

/** URL-safe slug for a tag label: "Tech / SaaS" -> "tech-saas". */
export function tagSlug(label: string) {
    return label
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
}

/** Projects without explicit creativeWork still match a service through their type. */
const typeToService: Partial<Record<Project['type'], string>> = {
    Branding: 'Brand Design',
    Identity: 'Brand Design',
    Illustration: 'Illustration',
    Packaging: 'Packaging',
    Motion: 'Motion Design',
    Character: 'Illustration',
    'Sticker Pack': 'Illustration',
    'Street Art': 'Illustration'
}

export function projectServices(p: Project): string[] {
    const explicit = p.creativeWork ?? []
    const fromType = typeToService[p.type]
    return fromType && !explicit.includes(fromType) ? [...explicit, fromType] : explicit
}

export function matchesService(p: Project, serviceSlug: string) {
    return projectServices(p).some((s) => tagSlug(s) === serviceSlug)
}

export function matchesIndustry(p: Project, industrySlug: string) {
    return p.industry ? tagSlug(p.industry) === industrySlug : false
}

export function filterProjects(projects: Project[], filter: { service?: string; industry?: string }) {
    return projects.filter(
        (p) => (!filter.service || matchesService(p, filter.service)) && (!filter.industry || matchesIndustry(p, filter.industry))
    )
}
