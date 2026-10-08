export type Project = {
    slug: string
    name: string
    type: 'Branding' | 'Illustration' | 'Sticker Pack' | 'Packaging' | 'Character' | 'Motion' | 'Product' | 'Street Art' | 'Identity'
    role: string
    summary: string
    description?: string
    image: string
    year?: string
    client?: string
    industry?: string
    creativeWork?: string[]
    detailImages?: string[]
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
        name: 'Nuud Bites',
        type: 'Packaging',
        role: 'Art Direction + Design',
        client: 'NUUD Pleasures LLC',
        summary: 'Collectible Packaging For NUUD Exotics',
        image: '/projects/nuud-bites.webp'
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: '/projects/saavy.webp',
        year: '2025',
        industry: 'Lorem',
        creativeWork: ['Lorem ipsum', 'Lorem ipsum dolor', 'Lorem'],
        detailImages: [
            '/projects/saavy.webp',
            '/projects/louder.webp',
            '/projects/boosted.webp',
            '/projects/caribombo.webp',
            '/projects/diamonds.webp',
            '/projects/fake-cover-day.webp',
            '/projects/la-lechona.webp',
            '/projects/misa-afro.webp',
            '/projects/mito-y-comadre.webp',
            '/projects/mon-rivera.webp',
            '/projects/nuud-bites.webp',
            '/projects/rincon.webp',
            '/projects/sticker.webp',
            '/projects/gig-posters.webp'
        ]
    }
]
