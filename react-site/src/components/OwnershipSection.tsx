import { Tag, SlidersHorizontal, Megaphone, BarChart3, CalendarCheck, Monitor } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const features = [
  { icon: Tag, text: 'Pricing strategy' },
  { icon: SlidersHorizontal, text: 'Platform/OTA listing and optimization' },
  { icon: Megaphone, text: 'Promotional strategies to drive bookings' },
  { icon: BarChart3, text: 'Revenue reporting' },
  { icon: CalendarCheck, text: 'Minimum stay & gap night strategies/automations' },
  { icon: Monitor, text: 'Full PMS and direct booking website set up' },
]

export default function OwnershipSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="inline-block font-heading text-xs font-bold tracking-[0.12em] uppercase text-orange-500 mb-3">
            How We Help
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10">
            Effortless ownership. Stronger returns.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          {features.map((item, i) => (
            <AnimatedSection key={item.text} delay={i * 0.08}>
              <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-5 py-4 border border-slate-100 hover:border-orange-500/30 transition-all duration-300 cursor-default">
                <item.icon className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-slate-700 text-sm font-medium text-left">{item.text}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <p className="text-slate-500 max-w-lg mx-auto mb-8">
            So your property performs at its full revenue potential.
          </p>
          <a
            href="#revenue-report"
            className="inline-flex items-center px-7 py-3 bg-orange-500 text-white font-heading font-bold text-sm rounded-lg shadow-[0_4px_20px_rgba(255,122,0,0.25)] hover:bg-orange-600 hover:translate-y-[-1px] transition-all duration-200 cursor-pointer"
          >
            See My Revenue Opportunity
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
