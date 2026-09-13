import { Play, Star } from 'lucide-react'

const BRAND_LOGOS = ['Acme', 'Vertex', 'Northwind', 'Orbital', 'Lumen']

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-28"
      aria-label="Introduction"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center blur-3xl"
      >
        <div className="aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-brand-300 via-brand-100 to-accent-200 opacity-40" />
      </div>

      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            <Star className="h-3.5 w-3.5 fill-brand-500 text-brand-500" aria-hidden="true" />
            New: AI-powered workflows are here
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink-900 sm:text-6xl">
            Grow your business{' '}
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
              faster than ever
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink-500">
            Nova helps modern teams launch, automate, and scale their operations
            with a single, beautifully simple platform — no engineering
            headcount required.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary px-8 py-3.5 text-base">
              Start Free Trial
            </a>
            <a href="#demo" className="btn-secondary px-8 py-3.5 text-base">
              <Play className="h-4 w-4" aria-hidden="true" />
              Watch Demo
            </a>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-4xl animate-fade-in">
          <p className="text-center text-sm font-medium text-ink-400">
            Trusted by 500+ businesses worldwide
          </p>

          <div className="mt-3 flex items-center justify-center gap-1" role="img" aria-label="Rated 5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70 grayscale">
            {BRAND_LOGOS.map((brand) => (
              <span
                key={brand}
                className="text-xl font-bold tracking-tight text-ink-400"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
