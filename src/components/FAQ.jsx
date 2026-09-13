import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    question: 'Can I try Nova before committing to a plan?',
    answer:
      'Yes — every plan starts with a 14-day free trial, no credit card required. You can cancel anytime during the trial with no charge.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer:
      'Yes, switching to annual billing saves you 20% compared to paying monthly, on any plan.',
  },
  {
    question: 'Can I change or cancel my plan later?',
    answer:
      'Absolutely. You can upgrade, downgrade, or cancel your subscription at any time from your account settings — no phone calls required.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Nova is SOC 2 Type II compliant. All data is encrypted in transit and at rest, and you control granular access permissions for every team member.',
  },
  {
    question: 'Do you offer support during onboarding?',
    answer:
      'Every new account gets a guided onboarding session, plus access to our help center and priority email support.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="bg-ink-50/60 py-20 sm:py-28" aria-label="Frequently asked questions">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-heading">Frequently asked questions</h2>
          <p className="section-subheading mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our
            team below.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-ink-200 rounded-2xl border border-ink-100 bg-white px-6">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-ink-900 marker:content-none">
                {faq.question}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-ink-400 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-ink-500">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
