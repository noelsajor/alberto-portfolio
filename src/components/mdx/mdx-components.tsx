import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
    h1: (props) => <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-dark" {...props} />,
    h2: (props) => <h2 className="mt-10 text-xl md:text-2xl font-bold tracking-tight text-dark" {...props} />,
    p: (props) => <p className="mt-4 leading-relaxed text-dark/80" {...props} />,
    ul: (props) => <ul className="mt-4 list-disc pl-6 text-dark/80" {...props} />,
    li: (props) => <li className="mt-2" {...props} />,
    a: (props) => <a className="underline decoration-dark/30 underline-offset-4 hover:decoration-dark" {...props} />
}
