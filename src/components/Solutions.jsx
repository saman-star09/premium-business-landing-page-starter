import { Building2, Rocket, Users } from 'lucide-react'

const SOLUTIONS = [
  {
    icon: Rocket,
    title: 'For startups',
    description:
      'Move fast without breaking things. Get up and running in an afternoon, not a quarter.',
  },
  {
    icon: Building2,
    title: 'For enterprises',
    description:
      'Advanced controls, SSO, and dedicated support built for organizations at scale.',
  },
  {
    icon: Users,
    title: 'For agencies',
    description:
      'Manage multiple clients from a single workspace with white-label reporting built in.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="bg-white py-20 sm:py-28" aria-label="Solutions">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Solutions</span>
          <h2 className="section-heading">Built for every kind of team</h2>
          <p className="section-subheading mx-auto">
            Whatever stage your business is at, Nova adapts to how you already
            work.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {SOLUTIONS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-start gap-4 rounded-2xl border border-ink-100 p-6 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
              <p className="text-sm text-ink-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
