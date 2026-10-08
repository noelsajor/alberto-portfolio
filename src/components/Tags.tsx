import Link from 'next/link'
import { tagSlug } from '@/lib/tags'

/* Shared Services / Industries chips. Each chip links to the filtered Work page. */

export const services: { label: string; color: string }[] = [
    { label: 'Brand Design', color: 'bg-tag-green' },
    { label: 'Illustration', color: 'bg-tag-orange' },
    { label: 'Packaging', color: 'bg-tag-teal' },
    { label: 'Motion Design', color: 'bg-tag-blue' },
    { label: 'Web Design', color: 'bg-tag-pink' },
    { label: 'Creative Direction', color: 'bg-tag-red' },
    { label: 'Graphic Design', color: 'bg-tag-purple' }
]

/** Chip color for a service label; outlined cream when unknown. */
export function serviceColor(label: string) {
    return services.find((s) => s.label.toLowerCase() === label.toLowerCase())?.color ?? 'bg-[#FFF4CF]'
}

export const industries = [
    'Music & Culture',
    'Tech / SaaS',
    'Food & Beverage',
    'Cannabis',
    'Retail',
    'Streetwear & Apparel',
    'E-Commerce'
]

export function serviceHref(label: string) {
    return `/work?service=${tagSlug(label)}`
}

export function industryHref(label: string) {
    return `/work?industry=${tagSlug(label)}`
}

type TagProps = { label: string; href: string; color: string; active?: boolean; dimmed?: boolean }

export function Tag({ label, href, color, active, dimmed }: TagProps) {
    return (
        <Link
            href={href}
            aria-current={active ? 'page' : undefined}
            className={['chip', color, active ? 'chip-active' : '', dimmed ? 'chip-dimmed' : ''].join(' ')}
        >
            {label}
        </Link>
    )
}

export function ServiceTags({ active, heading = 'Services' }: { active?: string; heading?: string }) {
    return (
        <div className="space-y-3">
            <h2 className="text-base font-bold">{heading}</h2>
            <ul className="flex flex-wrap gap-2.5">
                {services.map((s) => {
                    const slug = tagSlug(s.label)
                    return (
                        <li key={s.label}>
                            <Tag label={s.label} href={serviceHref(s.label)} color={s.color} active={active === slug} dimmed={!!active && active !== slug} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export function IndustryTags({ active, heading = 'Industries' }: { active?: string; heading?: string }) {
    return (
        <div className="space-y-3">
            <h2 className="text-base font-bold">{heading}</h2>
            <ul className="flex flex-wrap gap-2.5">
                {industries.map((i) => {
                    const slug = tagSlug(i)
                    return (
                        <li key={i}>
                            <Tag label={i} href={industryHref(i)} color="bg-[#FFF4CF]" active={active === slug} dimmed={!!active && active !== slug} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
