import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Loader2, CheckCircle2 } from 'lucide-react'

const CONTACT_DETAILS = [
  { icon: Mail, label: 'Email', value: 'hello@novahq.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: MapPin, label: 'Address', value: '123 Market Street, San Francisco, CA' },
  { icon: Clock, label: 'Working hours', value: 'Mon – Fri, 9am – 6pm PST' },
]

const SERVICES = [
  'General inquiry',
  'Product demo',
  'Technical support',
  'Partnership',
  'Billing',
]

const INITIAL_FORM = { name: '', email: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')

    // Simulated submission — swap with a real API call.
    await new Promise((resolve) => setTimeout(resolve, 1400))

    setStatus('success')
    setForm(INITIAL_FORM)
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-28" aria-label="Contact us">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-heading">Let&apos;s talk about your business</h2>
          <p className="section-subheading mx-auto">
            Have a question or ready to get started? Send us a message and our
            team will get back to you within one business day.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            {CONTACT_DETAILS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink-400">{label}</p>
                  <p className="mt-0.5 text-base font-medium text-ink-900">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                className="mt-1.5 block w-full rounded-lg border border-ink-200 px-4 py-2.5 text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                className="mt-1.5 block w-full rounded-lg border border-ink-200 px-4 py-2.5 text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                placeholder="jane@company.com"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-ink-700">
                Service
              </label>
              <select
                id="service"
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="mt-1.5 block w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                className="mt-1.5 block w-full resize-none rounded-lg border border-ink-200 px-4 py-2.5 text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                placeholder="Tell us a bit about what you need..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>

            <p role="status" aria-live="polite" className="min-h-[1.25rem] text-sm">
              {status === 'success' && (
                <span className="flex items-center gap-1.5 text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Thanks! We&apos;ll be in touch shortly.
                </span>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
