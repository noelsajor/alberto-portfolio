/** One gallery block: a single full-width image, or a row of images shown side by side. */
export type GalleryItem = string | string[]

export type Project = {
    slug: string
    name: string
    type: 'Branding' | 'Illustration' | 'Sticker Pack' | 'Packaging' | 'Character' | 'Motion' | 'Product' | 'Street Art' | 'Identity'
    role: string
    /** One-line description shown on cards. */
    summary: string
    /** Card label, e.g. "NUUD Pleasures LLC". Falls back to name. */
    client?: string
    /** Case study headline. Falls back to name. */
    title?: string
    /** Case study body; blank lines separate paragraphs. */
    description?: string
    /** Square thumbnail for cards. */
    image: string
    /** Wide hero for the case study page. Falls back to image. */
    hero?: string
    year?: string
    industry?: string
    creativeWork?: string[]
    gallery?: GalleryItem[]
}

export const projects: Project[] = [
    {
        slug: 'boosted',
        name: 'Boosted',
        type: 'Branding',
        role: 'Art Direction + Design',
        summary: 'Brand identity and visual language for Boosted.',
        image: '/projects/boosted.webp'
    },
    {
        slug: 'caribombo',
        name: 'Caribombo',
        type: 'Branding',
        role: 'Art Direction + Design',
        client: 'Caribombo - Carlos Guillen',
        summary: 'Visual Identity & Press Kit For Womex 2023 Selection',
        image: '/projects/caribombo.webp'
    },
    {
        slug: 'diamonds',
        name: 'Diamonds',
        type: 'Branding',
        role: 'Art Direction + Design',
        summary: 'Identity and branding for Diamonds.',
        image: '/projects/diamonds.webp'
    },
    {
        slug: 'fake-cover-day',
        name: 'Fake Cover Day',
        type: 'Illustration',
        role: 'Art Direction + Design',
        summary: 'Design and illustration for Fake Cover Day.',
        image: '/projects/fake-cover-day.webp'
    },
    {
        slug: 'la-lechona',
        name: 'La lechona',
        type: 'Branding',
        role: 'Art Direction + Design',
        summary: 'Branding and identity for La lechona.',
        image: '/projects/la-lechona.webp'
    },
    {
        slug: 'louder',
        name: 'Louder',
        type: 'Branding',
        role: 'Art Direction + Design',
        summary: 'Visual identity for Louder.',
        image: '/projects/louder.webp'
    },
    {
        slug: 'misa-afro',
        name: 'Misa Afro',
        type: 'Branding',
        role: 'Art Direction + Design',
        summary: 'Cultural project branding for Misa Afro.',
        image: '/projects/misa-afro.webp'
    },
    {
        slug: 'mito-y-comadre',
        name: 'Mito y comadre',
        type: 'Branding',
        role: 'Art Direction + Design',
        client: 'ZZK Records - Mito y Comadre',
        summary: 'Guajirando European Tour - Poster Design',
        image: '/projects/mito-y-comadre.webp'
    },
    {
        slug: 'mon-rivera',
        name: 'Mon rivera',
        type: 'Branding',
        role: 'Art Direction + Design',
        client: 'Galletas Calientes - Caribombo',
        summary: 'MON RIVERA Meets Caribombo - EP Vinil & Visualizer',
        image: '/projects/mon-rivera.webp'
    },
    {
        slug: 'nuud-bites',
        name: 'Nuud Exotics',
        type: 'Packaging',
        role: 'Creative Direction + Illustration',
        client: 'NUUD Pleasures LLC',
        title: 'Packaging for Pre Rolls NUUD Exotic',
        summary: 'Collectible Packaging For NUUD Exotics',
        description:
            'Nuud Pleasures needed a standout presence for a special edition product line launched exclusively for the Exxxotica Expo 2023 convention, where the brand was featured as an official exhibitor. They brought me on for full creative direction of a limited edition Delta 9 pre roll line. The system spans four SKUs, Gush Mintz, Runtz, Sour Diesel, and Medallin, each carrying its own unique color personality while sharing one cohesive illustrated concept.\n\n' +
            'The visual core is a face wearing sunglasses that reflect the product info, lips holding a lit joint, and a recurring diamond motif tied directly to the formula\'s Liquid Diamond feature. The result is a collection built to stand out on the shelf, designed to be collected rather than just consumed.\n\n' +
            'I led the full system, from the initial illustrated concept through final production across all four cans, making sure every variation held up on its own and as part of the complete set.',
        image: '/projects/nuud-bites.webp',
        hero: '/projects/nuud-bites/hero.webp',
        year: '2025',
        industry: 'Cannabis',
        creativeWork: ['Graphic Design', 'Illustration', 'Creative Direction'],
        gallery: [
            '/projects/nuud-bites/lineup.webp',
            '/projects/nuud-bites/lids.webp',
            '/projects/nuud-bites/pattern.webp',
            '/projects/nuud-bites/row-1.webp',
            '/projects/nuud-bites/row-2.webp',
            '/projects/nuud-bites/row-3.webp',
            '/projects/nuud-bites/row-4.webp',
            ['/projects/nuud-bites/label-gush-mintz.webp', '/projects/nuud-bites/label-medallin.webp'],
            ['/projects/nuud-bites/label-sour-diesel.webp', '/projects/nuud-bites/label-runtz.webp']
        ]
    },
    {
        slug: 'rincon',
        name: 'Rincon',
        type: 'Branding',
        role: 'Art Direction + Design',
        summary: 'Identity and design for Rincon.',
        image: '/projects/rincon.webp'
    },
    {
        slug: 'sticker',
        name: 'Sticker',
        type: 'Sticker Pack',
        role: 'Art Direction + Design',
        summary: 'Sticker design and production.',
        image: '/projects/sticker.webp'
    },
    {
        slug: 'gig-posters',
        name: 'gig Posters',
        type: 'Illustration',
        role: 'Art Direction + Design',
        summary: 'Poster design and illustration.',
        image: '/projects/gig-posters.webp'
    },
    {
        slug: 'saavy',
        name: 'saavy',
        type: 'Identity',
        role: 'Art Direction + Design',
        client: 'Saavy Defi LLC',
        summary: 'Visual Identity & Press Kit For Womex 2023 Selection',
        image: '/projects/saavy.webp'
    }
]
