import { Check, X } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const coreIncluded = [
  'Distribution to 15+ booking channels',
  'Dynamic pricing strategy & revenue optimization',
  'Booking management',
  'Listing optimization & performance reporting',
  'Strategic OTA promotion management',
]

const coreExcluded = [
  'Cleaner coordination',
  'Maintenance coordination',
  'Turnovers & supplies',
  '24/7 guest messaging & calendar management',
]

const fullServiceExtra = [
  'Cleaner scheduling & quality control',
  'Maintenance coordination & repairs',
  'Turnovers, restocking supplies, inspections',
  '24/7 guest messaging & calendar management',
]

const comparisonRows = [
  { feature: '15+ Channel Distribution', core: true, full: true },
  { feature: 'Dynamic Pricing', core: true, full: true },
  { feature: 'Booking Management', core: true, full: true },
  { feature: 'Listing Optimization', core: true, full: true },
  { feature: 'OTA Promotions', core: true, full: true },
  { feature: '24/7 Messaging', core: false, full: true },
  { feature: 'Cleaner Coordination', core: false, full: true },
  { feature: 'Maintenance & Repairs', core: false, full: true },
  { feature: 'Turnover Oversight', core: false, full: true },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block font-heading text-xs font-bold tracking-[0.12em] uppercase text-orange-500 mb-3">
              Pricing
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Choose the level of support that fits your goals
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Whether you want expert revenue optimization while staying involved locally, or completely hands-off management, we have an option that fits your ownership style.
            </p>
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Core */}
          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Core Management</h3>
              <div className="font-heading text-5xl font-extrabold text-orange-500 mb-2">10%</div>
              <p className="text-slate-500 text-sm mb-6">
                Professional revenue strategy without outsourcing local operations
              </p>

              <div className="text-xs uppercase tracking-widest font-heading font-bold text-slate-400 mb-3">Included</div>
              <ul className="space-y-3 mb-6">
                {coreIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-xs uppercase tracking-widest font-heading font-bold text-red-400 mb-3">Owner Handles</div>
              <ul className="space-y-3 mb-8">
                {coreExcluded.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-slate-500 italic mb-6 mt-auto">
                Perfect for experienced hosts who want stronger performance without full outsourcing
              </p>
              <a
                href="#revenue-report"
                className="w-full text-center px-6 py-3.5 bg-orange-500 text-white font-heading font-bold text-sm rounded-lg shadow-[0_4px_20px_rgba(255,122,0,0.25)] hover:bg-orange-600 transition-all duration-200 cursor-pointer"
              >
                Get My Free Revenue Potential Report
              </a>
            </div>
          </AnimatedSection>

          {/* Full Service */}
          <AnimatedSection delay={0.2}>
            <div className="relative bg-white rounded-3xl p-8 border border-blue-500 shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-orange-500 text-white text-xs font-heading font-bold rounded-full shadow-[0_4px_16px_rgba(255,122,0,0.4)]">
                Most Popular Option
              </div>

              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2 mt-2">Full Service Management</h3>
              <div className="font-heading text-5xl font-extrabold text-orange-500 mb-2">15%</div>
              <p className="text-slate-500 text-sm mb-6">
                Completely hands-off ownership with optimized performance
              </p>

              <div className="text-xs uppercase tracking-widest font-heading font-bold text-slate-400 mb-3">
                Includes everything in Core, plus:
              </div>
              <ul className="space-y-3 mb-8">
                {fullServiceExtra.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-slate-500 italic mb-6 mt-auto">
                Perfect for owners who want passive vacation rental income
              </p>
              <a
                href="#revenue-report"
                className="w-full text-center px-6 py-3.5 bg-orange-500 text-white font-heading font-bold text-sm rounded-lg shadow-[0_4px_20px_rgba(255,122,0,0.25)] hover:bg-orange-600 transition-all duration-200 cursor-pointer"
              >
                Get My Free Revenue Potential Report
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Comparison Table */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left p-5 font-heading font-bold text-slate-900">Feature</th>
                  <th className="text-center p-5 font-heading font-bold text-slate-900">Core (10%)</th>
                  <th className="text-center p-5 font-heading font-bold text-orange-500">Full Service (15%)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-slate-100 last:border-0">
                    <td className="p-4 text-slate-700 text-sm">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.core ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-slate-300 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="text-center text-slate-500 mt-8 max-w-2xl mx-auto">
            Most properties we analyze earn enough additional revenue through optimization to offset management costs entirely.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
