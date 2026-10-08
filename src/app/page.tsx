import { Hero } from '@/components/home/Hero'
import { Intro } from '@/components/home/Intro'
import { ProjectGrid } from '@/components/home/ProjectGrid'
import { ContactSection } from '@/components/home/ContactSection'

export default function HomePage() {
    return (
        <div>
            <Hero />
            <Intro />
            <ProjectGrid />
            <ContactSection />
        </div>
    )
}
