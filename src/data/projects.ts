export type Project = {
    slug: string
    name: string
    type: 'Branding' | 'Illustration' | 'Sticker Pack' | 'Packaging' | 'Character' | 'Motion' | 'Product' | 'Street Art' | 'Identity'
    role: string
    summary: string
    image: string
    year?: string
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
        image: '/projects/saavy.png'
    }
]
