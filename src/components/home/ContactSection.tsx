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
                <h2 className="display mx-auto max-w-xl text-center text-4xl md:text-5xl">
                    Lets talk about
                    <br />
                    your project
                </h2>

                <div className="mx-auto mt-10 max-w-2xl border-[1.5px] border-dark bg-cream p-6 md:p-10">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}
