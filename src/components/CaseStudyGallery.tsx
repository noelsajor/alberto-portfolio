import Image from 'next/image'
import type { GalleryItem, GalleryVideo } from '@/data/projects'

function Frame({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="overflow-hidden bg-[#E5E3DD]">
            <Image src={src} alt={alt} width={1600} height={1000} sizes="(min-width: 1152px) 1104px, 100vw" className="h-auto w-full" />
        </div>
    )
}

function VideoFrame({ video, poster }: GalleryVideo) {
    return (
        <div className="overflow-hidden bg-[#E5E3DD]">
            {/* Muted + inline so it autoplays like a visualizer loop */}
            <video src={video} poster={poster} autoPlay muted loop playsInline preload="metadata" className="h-auto w-full" />
        </div>
    )
}

export function CaseStudyGallery({ items = [], projectName }: { items?: GalleryItem[]; projectName: string }) {
    if (items.length === 0) return null

    return (
        <div className="space-y-6 md:space-y-8">
            {items.map((item, i) => {
                if (Array.isArray(item)) {
                    return (
                        <div key={i} className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                            {item.map((src, j) => (
                                <Frame key={src} src={src} alt={`${projectName}, detail ${i + 1}.${j + 1}`} />
                            ))}
                        </div>
                    )
                }
                if (typeof item === 'object') return <VideoFrame key={item.video} {...item} />
                return <Frame key={item} src={item} alt={`${projectName}, detail ${i + 1}`} />
            })}
        </div>
    )
}
