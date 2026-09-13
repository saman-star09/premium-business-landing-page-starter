import { Check } from 'lucide-react'

const PLANS = [
  {
    name: 'Starter',
    price: '$29',
    description: 'For individuals and small teams getting started.',
    features: ['Up to 5 team members', '10 automated workflows', 'Basic analytics', 'Email support'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$79',
    description: 'For growing businesses that need more power.',
    features: [
      'Up to 25 team members',
      'Unlimited workflows',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with custom needs.',
    features: [
      'Unlimited team members',
      'Unlimited workflows',
      'Dedicated account manager',
      'SSO & advanced security',
      'Custom SLAs',
    ],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-28" aria-label="Pricing">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Pricing</span>
          <h2 className="section-heading">Simple, transparent pricing</h2>
          <p className="section-subheading mx-auto">
            Choose the plan that fits your business. Upgrade or downgrade at
            any time.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 ${
                plan.featured
                  ? 'border-brand-600 bg-ink-900 text-white shadow-xl shadow-brand-900/20'
                  : 'border-ink-100 bg-white shadow-sm hover:shadow-lg hover:shadow-brand-900/5'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}

              <h3 className={`text-lg font-semibold ${plan.featured ? 'text-white' : 'text-ink-900'}`}>
                {plan.name}
              </h3>
              <p className={`mt-2 text-sm ${plan.featured ? 'text-ink-300' : 'text-ink-500'}`}>
                {plan.description}
              </p>

              <p className="mt-6">
                <span className={`text-4xl font-bold ${plan.featured ? 'text-white' : 'text-ink-900'}`}>
                  {plan.price}
                </span>
                {plan.price !== 'Custom' && (
                  <span className={plan.featured ? 'text-ink-300' : 'text-ink-500'}>/month</span>
                )}
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? 'text-brand-400' : 'text-brand-600'}`}
                      aria-hidden="true"
                    />
                    <span className={plan.featured ? 'text-ink-200' : 'text-ink-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 w-full ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
