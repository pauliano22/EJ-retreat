import { Check } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const checklistLeft = [
  '12-month performance comparison vs nearby listings',
  'Average revenue for similar homes in your immediate area',
  'Occupancy rate benchmarks across your market',
  'Average nightly rate comparisons',
]

const checklistRight = [
  'Seasonal demand trends affecting your calendar',
  'Estimated revenue opportunity gap',
  'Listing optimization strategy recommendations',
]

export default function AuthoritySection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block font-heading text-xs font-bold tracking-[0.12em] uppercase text-orange-500 mb-3">
              What You'll Receive
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              We analyze your property using hyper-local market data within 1 mile of your listing
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-slate-100">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <ul className="space-y-4">
                {checklistLeft.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {checklistRight.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-slate-500 italic text-center mb-6">
              This level of market visibility is typically only available to large operators and institutional investors.
            </p>

            <div className="text-center">
              <a
                href="#revenue-report"
                className="inline-flex items-center px-7 py-3 bg-orange-500 text-white font-heading font-bold text-sm rounded-lg shadow-[0_4px_20px_rgba(255,122,0,0.25)] hover:bg-orange-600 hover:translate-y-[-1px] transition-all duration-200 cursor-pointer"
              >
                Get My Free Revenue Potential Report
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Dashboard preview */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500 italic mb-4">
              Preview of the professional analytics software we use to build your report
            </p>
            <img
              src="/images/dashboard-preview.png"
              alt="Property Performance Snapshot — preview of analytics software"
              loading="lazy"
              className="w-full rounded-2xl shadow-xl border border-slate-200"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
