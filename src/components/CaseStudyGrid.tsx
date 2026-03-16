import Image from 'next/image'

interface CaseStudyGridProps {
    images?: string[]
}

export function CaseStudyGrid({ images = [] }: CaseStudyGridProps) {
    if (images.length === 0) return null

    return (
        <div className="space-y-8 md:space-y-12">
            {/* Row 1: Full width */}
            {images[0] && (
                <div className="overflow-hidden rounded-2xl bg-gray-100">
                    <Image src={images[0]} alt="Project Image" width={1200} height={800} className="w-full object-cover" />
                </div>
            )}

            {/* Row 2: Two columns */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                {images.slice(1, 3).map((img, i) => (
                    <div key={i} className="overflow-hidden rounded-2xl bg-gray-100 aspect-square">
                        <Image src={img} alt="Project Image" width={600} height={600} className="h-full w-full object-cover" />
                    </div>
                ))}
            </div>

            {/* Row 3: Full width */}
            {images[3] && (
                <div className="overflow-hidden rounded-2xl bg-gray-100">
                    <Image src={images[3]} alt="Project Header" width={1200} height={600} className="w-full object-cover" />
                </div>
            )}

            {/* Row 4: Two columns */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                {images.slice(4, 6).map((img, i) => (
                    <div key={i} className="overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5]">
                        <Image src={img} alt="Project Image" width={600} height={750} className="h-full w-full object-cover" />
                    </div>
                ))}
            </div>

            {/* Row 5: Complex Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 md:grid-rows-2">
                <div className="md:col-span-2 overflow-hidden rounded-2xl bg-gray-100 aspect-video md:aspect-auto">
                    {images[6] && <Image src={images[6]} alt="Project Detail" width={800} height={400} className="h-full w-full object-cover" />}
                </div>
                <div className="md:row-span-2 overflow-hidden rounded-2xl bg-gray-100 aspect-square md:aspect-auto">
                    {images[7] && <Image src={images[7]} alt="Project Detail Large" width={400} height={800} className="h-full w-full object-cover" />}
                </div>
                <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-square md:aspect-auto">
                    {images[8] && <Image src={images[8]} alt="Project Mini" width={400} height={400} className="h-full w-full object-cover" />}
                </div>
                <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-square md:aspect-auto">
                    {images[9] && <Image src={images[9]} alt="Project Mini" width={400} height={400} className="h-full w-full object-cover" />}
                </div>
            </div>

            {/* Row 6: Four columns */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
                {images.slice(10, 14).map((img, i) => (
                    <div key={i} className="overflow-hidden rounded-2xl bg-gray-100 aspect-square">
                        <Image src={img} alt="Logo Variation" width={300} height={300} className="h-full w-full object-cover" />
                    </div>
                ))}
            </div>

            {/* Row 7: Full width */}
            {images[14] && (
                <div className="overflow-hidden rounded-2xl bg-gray-100">
                    <Image src={images[14]} alt="Application Header" width={1200} height={600} className="w-full object-cover" />
                </div>
            )}
        </div>
    )
}
