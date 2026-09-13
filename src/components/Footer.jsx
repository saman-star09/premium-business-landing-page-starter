import { useState } from 'react'
import { Sparkles, Twitter, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

const SERVICES = [
  { label: 'Workflow automation', href: '#features' },
  { label: 'Analytics & reporting', href: '#features' },
  { label: 'Enterprise security', href: '#features' },
  { label: 'Onboarding & support', href: '#faq' },
]

const SOCIAL_LINKS = [
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com', icon: Github },
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event) => {
    event.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  const handleNavClick = (event, href) => {
    event.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="border-t border-ink-100 bg-ink-950 text-ink-300">
      <div className="section-container py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#top" onClick={(e) => handleNavClick(e, '#top')} className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              Nova
            </a>
            <p className="mt-4 max-w-xs text-sm text-ink-400">
              Nova helps modern teams launch, automate, and scale their
              operations with one beautifully simple platform.
            </p>
          </div>

          <nav aria-label="Quick links">
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-ink-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {SERVICES.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-ink-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-white">Stay in the loop</h3>
            <p className="mt-4 text-sm text-ink-400">
              Get product updates and business tips delivered monthly.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  id="footer-email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="min-w-0 flex-1 rounded-lg border border-ink-700 bg-ink-900 px-3.5 py-2.5 text-sm text-white placeholder:text-ink-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white transition-colors hover:bg-brand-700"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <p role="status" aria-live="polite" className="mt-2 text-xs text-emerald-400">
                {subscribed && "You're subscribed — thanks for joining!"}
              </p>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-ink-800 pt-8 sm:flex-row">
          <p className="text-sm text-ink-500">
            &copy; {new Date().getFullYear()} Nova, Inc. All rights reserved.
          </p>
          <ul className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 text-ink-400 transition-colors hover:bg-brand-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
