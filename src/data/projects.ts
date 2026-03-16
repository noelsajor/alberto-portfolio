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
        image: '/projects/Boosted.png'
    },
    {
        slug: 'caribombo',
        name: 'Caribombo',
        type: 'Branding',
        role: 'Art Direction + Design',
        summary: 'Visual identity design for Caribombo.',
        image: '/projects/Caribombo.png'
    },
    {
        slug: 'diamonds',
        name: 'Diamonds',
        type: 'Branding',
        role: 'Art Direction + Design',
        summary: 'Identity and branding for Diamonds.',
        image: '/projects/Diamonds.png'
    },
    {
        slug: 'fake-cover-day',
        name: 'Fake Cover Day',
        type: 'Illustration',
        role: 'Art Direction + Design',
        summary: 'Design and illustration for Fake Cover Day.',
        image: '/projects/Fake Cover Day.png'
    },
    {
        slug: 'la-lechona',
        name: 'La lechona',
        type: 'Branding',
        role: 'Art Direction + Design',
        summary: 'Branding and identity for La lechona.',
        image: '/projects/La lechona.png'
    },
    {
        slug: 'louder',
        name: 'Louder',
        type: 'Branding',
        role: 'Art Direction + Design',
        summary: 'Visual identity for Louder.',
        image: '/projects/Louder.png'
    },
    {
        slug: 'misa-afro',
        name: 'Misa Afro',
        type: 'Branding',
        role: 'Art Direction + Design',
        summary: 'Cultural project branding for Misa Afro.',
        image: '/projects/Misa Afro.png'
    },
    {
        slug: 'mito-y-comadre',
        name: 'Mito y comadre',
        type: 'Branding',
        role: 'Art Direction + Design',
        summary: 'Identity design for Mito y comadre.',
        image: '/projects/Mito y comadre.png'
    },
    {
        slug: 'mon-rivera',
        name: 'Mon rivera',
        type: 'Branding',
        role: 'Art Direction + Design',
        summary: 'Tribute branding for Mon rivera.',
        image: '/projects/Mon rivera.png'
    },
    {
        slug: 'nuud-bites',
        name: 'Nuud Bites',
        type: 'Packaging',
        role: 'Art Direction + Design',
        summary: 'Packaging design for Nuud Bites.',
        image: '/projects/Nuud Bites.png'
    },
    {
        slug: 'rincon',
        name: 'Rincon',
        type: 'Branding',
        role: 'Art Direction + Design',
        summary: 'Identity and design for Rincon.',
        image: '/projects/Rincon.png'
    },
    {
        slug: 'sticker',
        name: 'Sticker',
        type: 'Sticker Pack',
        role: 'Art Direction + Design',
        summary: 'Sticker design and production.',
        image: '/projects/Sticker .png'
    },
    {
        slug: 'gig-posters',
        name: 'gig Posters',
        type: 'Illustration',
        role: 'Art Direction + Design',
        summary: 'Poster design and illustration.',
        image: '/projects/gig Posters.png'
    },
    {
        slug: 'saavy',
        name: 'saavy',
        type: 'Identity',
        role: 'Art Direction + Design',
        summary: 'Identity design for saavy.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: '/projects/saavy.png',
        year: '2025',
        client: 'Lorem ipsum',
        industry: 'Lorem',
        creativeWork: ['Lorem ipsum', 'Lorem ipsum dolor', 'Lorem'],
        detailImages: [
            '/projects/saavy.png',
            '/projects/Louder.png',
            '/projects/Boosted.png',
            '/projects/Caribombo.png',
            '/projects/Diamonds.png',
            '/projects/Fake Cover Day.png',
            '/projects/La lechona.png',
            '/projects/Misa Afro.png',
            '/projects/Mito y comadre.png',
            '/projects/Mon rivera.png',
            '/projects/Nuud Bites.png',
            '/projects/Rincon.png',
            '/projects/Sticker .png',
            '/projects/gig Posters.png'
        ]
    }
]
