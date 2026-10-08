import Image from 'next/image'
import type { GalleryItem } from '@/data/projects'

function Frame({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
    return (
        <div className="overflow-hidden border-[1.5px] border-dark bg-[#E5E3DD]">
            <Image src={src} alt={alt} width={1600} height={1000} sizes="(min-width: 1152px) 1104px, 100vw" className="h-auto w-full" priority={priority} />
        </div>
    )
}

export function CaseStudyGallery({ items = [], projectName }: { items?: GalleryItem[]; projectName: string }) {
    if (items.length === 0) return null

    return (
        <div className="space-y-6 md:space-y-8">
            {items.map((item, i) =>
                Array.isArray(item) ? (
                    <div key={i} className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                        {item.map((src, j) => (
                            <Frame key={src} src={src} alt={`${projectName}, detail ${i + 1}.${j + 1}`} />
                        ))}
                    </div>
                ) : (
                    <Frame key={item} src={item} alt={`${projectName}, detail ${i + 1}`} />
                )
            )}
        </div>
    )
}
