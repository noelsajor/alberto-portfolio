import { ContactForm } from '@/components/home/ContactForm'
import { contactInfo } from '@/data/site'

export const metadata = {
    title: 'Contact — Papashongo',
    description: 'Get in touch with Alberto Olivero (Papashongo) to talk about your brand or creative project.'
}

export default function ContactPage() {
    return (
        <div className="relative overflow-hidden">
            {/* Background line */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/lines/contact.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-16 hidden w-[1440px] max-w-none -translate-x-1/2 select-none md:block"
            />

            <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pt-14 pb-24 md:grid-cols-[1fr_1.15fr] md:gap-16 md:pt-20 md:pb-32">
                {/* Left: title + direct contact */}
                <div className="flex flex-col justify-between gap-12">
                    <h1 className="display text-5xl md:text-6xl">Contact me</h1>

                    <address className="space-y-6 not-italic">
                        <a
                            href={`mailto:${contactInfo.email}`}
                            className="block text-xl font-bold text-dark underline decoration-2 underline-offset-8 transition hover:decoration-accent md:text-2xl"
                        >
                            {contactInfo.emailDisplay}
                        </a>
                        <a
                            href={`tel:${contactInfo.phone}`}
                            className="block text-xl font-bold text-dark transition hover:text-dark/70 md:text-2xl"
                        >
                            {contactInfo.phoneDisplay}
                        </a>
                    </address>
                </div>

                {/* Right: form */}
                <div className="border-[1.5px] border-dark p-6 md:p-9">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
