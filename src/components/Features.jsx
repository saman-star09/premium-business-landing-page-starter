import { Zap, ShieldCheck, BarChart3 } from 'lucide-react'

const FEATURES = [
  {
    icon: Zap,
    title: 'Blazing-fast automation',
    description:
      'Automate repetitive workflows in minutes with drag-and-drop tools built for non-technical teams.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    description:
      'SOC 2 Type II compliance, end-to-end encryption, and granular permissions keep your data safe.',
  },
  {
    icon: BarChart3,
    title: 'Real-time analytics',
    description:
      'Track every metric that matters with live dashboards and reports that update as things happen.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-ink-50/60 py-20 sm:py-28" aria-label="Features">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Features</span>
          <h2 className="section-heading">Everything you need to scale</h2>
          <p className="section-subheading mx-auto">
            Powerful, flexible tools designed to help your business move faster
            without adding complexity.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl border border-ink-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink-900">{title}</h3>
              <p className="mt-2 text-ink-500">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
