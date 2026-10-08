/** Full-width autoplaying (muted, looping) video block. */
export type GalleryVideo = { video: string; poster?: string }

/** One gallery block: a full-width image, a row of images shown side by side, or a video. */
export type GalleryItem = string | string[] | GalleryVideo

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
        role: 'Creative Direction + Graphic Design',
        client: 'Caribombo - Carlos Guillen',
        title: 'Visual Identity & Press Kit for WOMEX 2023 Selection',
        summary: 'Visual Identity & Press Kit For Womex 2023 Selection',
        description:
            'Carlos Guillén, known as Caribombo, was selected to represent Venezuela and Colombia at WOMEX 2023, the leading global platform for world music. Rooted in Gaita de Tambora and Afro-Venezuelan and Afro-Colombian tradition, he needed a visual identity that communicated that before the first note played.\n\n' +
            'I designed his logo, a compact press kit, and business cards for networking at the event. The wordmark blends playful geometric shapes with a vibrant tropical palette of yellow, green, magenta, and blue, translating the rhythm and joy of his music into visual language.',
        image: '/projects/caribombo.webp',
        hero: '/projects/caribombo/hero.webp',
        year: '2023',
        industry: 'Music & Culture',
        creativeWork: ['Graphic Design', 'Illustration', 'Creative Direction'],
        gallery: [
            '/projects/caribombo/wordmark.webp',
            ['/projects/caribombo/poster.webp', '/projects/caribombo/hero.webp'],
            '/projects/caribombo/business-cards.webp',
            '/projects/caribombo/palette.webp',
            '/projects/caribombo/pattern.webp',
            ['/projects/caribombo/trifold-folded.webp', '/projects/caribombo/portrait.webp'],
            '/projects/caribombo/trifold-front.webp',
            '/projects/caribombo/trifold-back.webp',
            '/projects/caribombo/trifold-stack.webp'
        ]
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
        name: 'Mito y Comadre',
        type: 'Illustration',
        role: 'Creative Direction + Illustration',
        client: 'ZZK Records - Mito y Comadre',
        title: 'Mito y Comadre: European Tour Poster Design',
        summary: 'Guajirando European Tour - Poster Design',
        description:
            "Mito y Comadre's Guajirando Tour was much more than a standard concert series. It was an intense celebration of Colombian and Venezuelan roots and identity. As the creative director and illustrator for the project, my mission was to design a visual language that spoke as loudly and powerfully as their music.\n\n" +
            'Inspired by psychedelic aesthetics and retro poster art, the project is built on vibrant colors, hypnotic gazes, and dynamic compositions. Each poster in the series acts as a window into a sensory journey, bridging the mysticism of the myth with the closeness of the comadre through a colorful, irreverent, and deeply magnetic illustrative style.',
        image: '/projects/mito-y-comadre.webp',
        hero: '/projects/mito-y-comadre/hero.webp',
        year: '2025',
        industry: 'Music & Culture',
        creativeWork: ['Illustration', 'Creative Direction'],
        gallery: [
            '/projects/mito-y-comadre/poster-lyon.webp',
            '/projects/mito-y-comadre/poster-barcelona.webp',
            '/projects/mito-y-comadre/poster-paris.webp',
            '/projects/mito-y-comadre/poster-general.webp'
        ]
    },
    {
        slug: 'mon-rivera',
        name: 'Mon Rivera Meets Caribombo',
        type: 'Illustration',
        role: 'Creative Direction + Illustration',
        client: 'Galletas Calientes - Caribombo',
        title: 'Mon Rivera Meets Caribombo | EP Vinil + Visualizer',
        summary: 'MON RIVERA Meets Caribombo - EP Vinil & Visualizer',
        description:
            "Mon Rivera was one of the pioneers who, ahead of many of salsa's biggest legends, arrived in New York and paved the way for the generation that followed. Lluvia con Nieve RMX bridges that legacy with Caribombo's current sound, delivering a remix that speaks to foundational salsa from a contemporary Afro-Caribbean identity.\n\n" +
            'The project became a physical vinyl release, limited to just 25 units, created in collaboration with Caribombo and Galletas Calientes. I designed the full EP artwork, cover, back cover, tracklist, and animated visualizer, building an original illustrated world of landscape, character, and a recurring bee that carries through every piece, from the vinyl itself to the social media rollout.\n\n' +
            'Note: the back cover credits Artwork by Alberto Olivero (Elbrto). Elbrto was my pseudonym until 2023, before rebranding as Papashongo.',
        image: '/projects/mon-rivera.webp',
        hero: '/projects/mon-rivera/hero.webp',
        year: '2023',
        industry: 'Music & Culture',
        creativeWork: ['Graphic Design', 'Illustration', 'Creative Direction'],
        gallery: [
            { video: '/projects/mon-rivera/visualizer.mp4', poster: '/projects/mon-rivera/visualizer-poster.webp' },
            '/projects/mon-rivera/vinyl.webp',
            '/projects/mon-rivera/vinyl-hands.webp',
            '/projects/mon-rivera/cover.webp',
            '/projects/mon-rivera/back-cover.webp',
            '/projects/mon-rivera/record-bin.webp',
            '/projects/mon-rivera/facebook.webp'
        ]
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
        name: 'Saavy',
        type: 'Illustration',
        role: 'Graphic Design + Illustration',
        client: 'Saavy Defi LLC',
        title: 'Saavy: Web SaaS Illustrations',
        summary: 'Custom Illustration System For A DeFi Credit Platform',
        description:
            'Complex credit protocols in the tech space often struggle to communicate their value clearly without sounding overly technical or dry. Saavy solves this by offering credit lines that do not require liquidation and automatically self-repay, allowing users to obtain funds without selling assets or worrying about periodic payments.\n\n' +
            "Recently, I had the pleasure of collaborating with Saavy on their website, where I created several impactful and attractive illustrations. These custom illustrations were designed to do the heavy lifting, explaining complex mechanics and highlighting the platform's main advantages while giving the brand a friendly, distinct visual personality.\n\n" +
            'Working on the Saavy project was a rewarding experience, allowing me to help convey innovative financial concepts through vibrant illustration. I am excited to continue collaborating with them on future projects and contribute to their ongoing growth.',
        image: '/projects/saavy.webp',
        hero: '/projects/saavy/hero.webp',
        year: '2023',
        industry: 'Tech / SaaS',
        creativeWork: ['Graphic Design', 'Illustration'],
        gallery: [
            '/projects/saavy/landing.webp',
            '/projects/saavy/features.webp',
            '/projects/saavy/hands.webp',
            '/projects/saavy/walking.webp',
            ['/projects/saavy/calculator.webp', '/projects/saavy/handshake.webp'],
            '/projects/saavy/vision-map.webp',
            '/projects/saavy/banner.webp'
        ]
    }
]
