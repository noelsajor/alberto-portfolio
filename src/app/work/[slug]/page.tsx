import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import { mdxComponents } from '@/components/mdx/mdx-components'
import { getCaseStudyBySlug, getCaseStudySlugs } from '@/lib/mdx'
import { projects } from '@/data/projects'

export function generateStaticParams() {
    const mdxSlugs = getCaseStudySlugs().map((slug) => ({ slug }))
    const projectSlugs = projects.map((p) => ({ slug: p.slug }))

    // Merge both, deduplicate
    const allSlugs = new Map<string, { slug: string }>()
    for (const s of [...mdxSlugs, ...projectSlugs]) {
        allSlugs.set(s.slug, s)
    }
    return Array.from(allSlugs.values())
}

export default async function CaseStudyPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const data = getCaseStudyBySlug(slug)
    const project = projects.find((p) => p.slug === slug)

    if (!data && !project) return notFound()

    return (
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-10">
            <Link href="/work" className="text-sm font-semibold text-dark/70 hover:text-dark">
                ← Back to work
            </Link>

            <header className="space-y-4">
                <p className="text-xs font-semibold tracking-wide text-dark/50 uppercase">
                    {data?.frontmatter.type ?? project?.type ?? 'Case Study'}
                </p>
                <h1 className="text-3xl font-black tracking-tight uppercase md:text-4xl">
                    {data?.frontmatter.title ?? project?.name}
                </h1>
                {(data?.frontmatter.role ?? project?.role) && (
                    <p className="text-dark/70">{data?.frontmatter.role ?? project?.role}</p>
                )}
                {(data?.frontmatter.summary ?? project?.summary) && (
                    <p className="max-w-2xl text-dark/70">{data?.frontmatter.summary ?? project?.summary}</p>
                )}
            </header>

            {project && (
                <div className="max-w-lg">
                    <Image
                        src={project.image}
                        alt={project.name}
                        width={600}
                        height={600}
                        className="w-full rounded-xl"
                    />
                </div>
            )}

            {data && (
                <article className="prose max-w-none">
                    <MDXRemote
                        source={data.content}
                        components={mdxComponents}
                        options={{
                            mdxOptions: {
                                remarkPlugins: [remarkGfm],
                                rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]
                            }
                        }}
                    />
                </article>
            )}
        </div>
    )
}
