'use client'

import { FormEvent, useState } from 'react'
import { contactInfo } from '@/data/site'

/**
 * Interim delivery: builds a mailto: link with the form content.
 * Swap `handleSubmit` for a fetch() to a form backend (Formspree, Web3Forms,
 * or an /api/contact route with Resend) once one is chosen.
 */
export function ContactForm() {
    const [sent, setSent] = useState(false)

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const name = String(data.get('name') ?? '')
        const mail = String(data.get('mail') ?? '')
        const phone = String(data.get('phone') ?? '')
        const subject = String(data.get('subject') ?? 'New project')
        const message = String(data.get('message') ?? '')

        const body = [`Name: ${name}`, `Mail: ${mail}`, phone ? `Phone: ${phone}` : null, '', message]
            .filter((l) => l !== null)
            .join('\n')

        window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        setSent(true)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Name" name="name" type="text" required autoComplete="name" />
                <Field label="Mail" name="mail" type="email" required autoComplete="email" />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
                <Field label="Subject" name="subject" type="text" />
            </div>
            <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-bold">
                    Message
                </label>
                <textarea id="message" name="message" rows={6} required className="field resize-y" />
            </div>
            <div className="flex items-center gap-4">
                <button type="submit" className="btn-accent bg-[#FFF4CF] px-6 py-2.5 text-sm">
                    Send Message
                </button>
                {sent ? <p className="text-xs text-dark/70">Opening your mail app…</p> : null}
            </div>
        </form>
    )
}

function Field({
    label,
    name,
    type,
    required,
    autoComplete
}: {
    label: string
    name: string
    type: string
    required?: boolean
    autoComplete?: string
}) {
    return (
        <div>
            <label htmlFor={name} className="mb-1.5 block text-xs font-bold">
                {label}
            </label>
            <input id={name} name={name} type={type} required={required} autoComplete={autoComplete} className="field" />
        </div>
    )
}
