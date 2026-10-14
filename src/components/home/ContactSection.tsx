import { ContactForm } from '@/components/home/ContactForm'

export function ContactSection() {
    return (
        <section id="contact" className="relative overflow-hidden scroll-mt-24">
            {/* Background line */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/lines/contact.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-24 w-[1440px] max-w-none -translate-x-1/2 select-none"
            />

            <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-28">
                <h2 className="display mx-auto max-w-2xl text-balance text-center text-4xl md:text-5xl">
                    Ready to build something impossible to ignore?
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-center text-base leading-relaxed text-dark/80 md:text-lg">
                    Drop your details, timeline, and goals below. Let&rsquo;s make it count.
                </p>

                <div className="mx-auto mt-10 max-w-2xl border-[1.5px] border-dark p-6 md:p-10">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}
