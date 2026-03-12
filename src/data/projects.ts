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
        slug: 'brand-identity-system',
        name: 'Brand Identity System',
        type: 'Branding',
        role: 'Art Direction + Design',
        summary: 'Lorem Ipsum Dolor Sit Amet',
        image: '/projects/project-1.png'
    },
    {
        slug: 'pop-art-collection',
        name: 'Pop Art Collection',
        type: 'Illustration',
        role: 'Illustration + Creative',
        summary: 'Lorem Ipsum Dolor Sit Amet',
        image: '/projects/project-2.png'
    },
    {
        slug: 'sticker-pack-design',
        name: 'Sticker Pack Design',
        type: 'Sticker Pack',
        role: 'Design + Production',
        summary: 'Lorem Ipsum Dolor Sit Amet',
        image: '/projects/project-3.png'
    },
    {
        slug: 'coffee-brand-packaging',
        name: 'Coffee Brand Packaging',
        type: 'Packaging',
        role: 'Branding + Packaging',
        summary: 'Lorem Ipsum Dolor Sit Amet',
        image: '/projects/project-4.png'
    },
    {
        slug: 'character-design',
        name: 'Character Design',
        type: 'Character',
        role: '3D + Character Design',
        summary: 'Lorem Ipsum Dolor Sit Amet',
        image: '/projects/project-5.png'
    },
    {
        slug: 'motion-graphics',
        name: 'Motion Graphics',
        type: 'Motion',
        role: 'Motion + Effects',
        summary: 'Lorem Ipsum Dolor Sit Amet',
        image: '/projects/project-6.png'
    },
    {
        slug: 'product-packaging',
        name: 'Product Packaging',
        type: 'Product',
        role: 'Design + Photography',
        summary: 'Lorem Ipsum Dolor Sit Amet',
        image: '/projects/project-7.png'
    },
    {
        slug: 'street-art-mural',
        name: 'Street Art Mural',
        type: 'Street Art',
        role: 'Art Direction + Mural',
        summary: 'Lorem Ipsum Dolor Sit Amet',
        image: '/projects/project-8.png'
    },
    {
        slug: 'visual-identity',
        name: 'Visual Identity',
        type: 'Identity',
        role: 'Creative Direction',
        summary: 'Lorem Ipsum Dolor Sit Amet',
        image: '/projects/project-9.png'
    }
]
