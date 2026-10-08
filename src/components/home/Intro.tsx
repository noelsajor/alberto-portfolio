import Image from 'next/image'
import { ServiceTags, IndustryTags } from '@/components/Tags'

export function Intro() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] md:gap-16 lg:grid-cols-[1fr_1.6fr]">
                {/* Mascot */}
                <div className="flex md:justify-center">
                    <div className="flex h-36 w-36 items-center justify-center rounded-full border-[1.5px] border-dark bg-accent md:h-44 md:w-44">
                        <Image src="/avatar.png" alt="Papashongo mascot" width={120} height={120} className="w-[62%]" />
                    </div>
                </div>

                {/* Copy + tags */}
                <div className="space-y-8">
                    <p className="max-w-xl text-sm leading-relaxed text-dark/80 md:text-base">
                        In a digital landscape drowning in gray minimalism, your brand needs more than clean lines to
                        stand out. It needs attitude. I combine strategic art direction with vibrant illustration and a
                        distinct cultural voice to build visual ecosystems that demand attention.
                    </p>
                    <ServiceTags />
                    <IndustryTags />
                </div>
            </div>
        </section>
    )
}
