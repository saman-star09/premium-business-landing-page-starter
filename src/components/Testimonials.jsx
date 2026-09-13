import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      "Nova cut our onboarding time in half. What used to take weeks now takes days, and our team actually enjoys using it.",
    name: 'Amara Chen',
    title: 'COO, Northwind Retail',
    initials: 'AC',
  },
  {
    quote:
      "The analytics alone paid for the subscription in the first month. We finally have visibility into what's actually working.",
    name: 'Diego Fernández',
    title: 'Head of Growth, Orbital Labs',
    initials: 'DF',
  },
  {
    quote:
      'Support is incredibly responsive and the platform just works. It feels like it was built by people who understand our workflow.',
    name: 'Priya Nair',
    title: 'Founder, Lumen Studio',
    initials: 'PN',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-ink-50/60 py-20 sm:py-28" aria-label="Testimonials">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-heading">Loved by teams everywhere</h2>
          <p className="section-subheading mx-auto">
            Don&apos;t just take our word for it — hear from businesses already
            growing with Nova.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ quote, name, title, initials }) => (
            <figure
              key={name}
              className="flex h-full flex-col justify-between rounded-2xl border border-ink-100 bg-white p-8 shadow-sm"
            >
              <div>
                <div className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 text-ink-600">
                  <p>&ldquo;{quote}&rdquo;</p>
                </blockquote>
              </div>

              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700"
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">{name}</p>
                  <p className="text-sm text-ink-500">{title}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
