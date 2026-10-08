/* Shared Services / Industries chips, used on the home intro and the About page. */

export const services: { label: string; color: string }[] = [
    { label: 'Brand Design', color: 'bg-tag-green' },
    { label: 'Illustration', color: 'bg-tag-orange' },
    { label: 'Packaging', color: 'bg-tag-teal' },
    { label: 'Motion Design', color: 'bg-tag-blue' },
    { label: 'Web Design', color: 'bg-tag-pink' },
    { label: 'Creative Direction', color: 'bg-tag-red' },
    { label: 'Graphic Design', color: 'bg-tag-purple' }
]

export const industries = [
    'Music & Culture',
    'Tech / SaaS',
    'Food & Beverage',
    'Cannabis',
    'Retail',
    'Streetwear & Apparel',
    'E-Commerce'
]

export function ServiceTags() {
    return (
        <div className="space-y-3">
            <h2 className="text-sm font-bold">Services</h2>
            <ul className="flex flex-wrap gap-2">
                {services.map((s) => (
                    <li key={s.label} className={`chip ${s.color}`}>
                        {s.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export function IndustryTags() {
    return (
        <div className="space-y-3">
            <h2 className="text-sm font-bold">Industries</h2>
            <ul className="flex flex-wrap gap-2">
                {industries.map((i) => (
                    <li key={i} className="chip bg-[#FFF4CF]">
                        {i}
                    </li>
                ))}
            </ul>
        </div>
    )
}
