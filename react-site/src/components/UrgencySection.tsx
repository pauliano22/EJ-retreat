import { Zap, TrendingUp, CalendarDays } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const items = [
  { icon: Zap, text: 'Pricing algorithms evolve' },
  { icon: TrendingUp, text: 'Competition improves listings' },
  { icon: CalendarDays, text: 'Demand shifts seasonally' },
]

export default function UrgencySection() {
  return (
    <section className="relative py-20 md:py-28 bg-dark-base overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/3" />

      <div className="relative max-w-[1200px] mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="inline-block font-heading text-xs font-bold tracking-[0.12em] uppercase text-orange-500 mb-3">
            Don't Wait
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 max-w-3xl mx-auto">
            If your property is underperforming the market, the gap usually increases over time
          </h2>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {items.map((item, i) => (
            <AnimatedSection key={item.text} delay={i * 0.1}>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4">
                <item.icon className="w-5 h-5 text-orange-500" />
                <span className="text-white/80 font-medium">{item.text}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="text-white/50 mb-8">
            The sooner you identify the gap, the faster you can close it.
          </p>
          <a
            href="#revenue-report"
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-heading font-bold text-base rounded-lg shadow-[0_4px_24px_rgba(255,122,0,0.35)] hover:bg-orange-600 hover:translate-y-[-2px] transition-all duration-300 cursor-pointer"
          >
            Check My Revenue Gap
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
