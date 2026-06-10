import { X, Check } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const diyList = [
  'Research and subscribe to the right AI pricing tools',
  'Learn AirDNA and pull market data for your area',
  'Build a revenue model and actually know how to read it',
  'Set up and sync a channel manager across 15+ platforms',
  'Monitor competitor pricing and adjust your rates daily',
  'Stay current as platform algorithms change every few months',
  'Analyze which amenities actually move the needle in your market',
  'Respond to guests, handle reviews, manage turnovers',
  'Do it all over again - every single week',
]

const ejList = [
  'AI revenue projections built for your exact property',
  'AirDNA market analysis and deal underwriting',
  'Real-time dynamic pricing, adjusted daily',
  'Listed and synced across 15+ booking channels',
  'Smart amenity recommendations for your specific market',
  'Full guest communication and review management',
  'Investment deal analysis before you buy',
  'Monthly performance reports with market benchmarks',
  'A human team running it all - every day',
]

export default function UrgencySection() {
  return (
    <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block font-heading text-xs font-bold tracking-[0.12em] uppercase text-orange-500 mb-3">
              The Reality
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
              You've heard about AI. You know it matters.<br className="hidden md:block" />
              You're just not going to become an AI expert<br className="hidden md:block" />
              on top of everything else.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              The operators already using AI to manage pricing, analyze markets, and optimize portfolios are pulling ahead every month. The gap doesn't stay the same - it grows. And the learning curve to catch up is steep.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {/* DIY column */}
          <AnimatedSection delay={0.1}>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 h-full">
              <p className="font-heading font-bold text-sm text-white/40 uppercase tracking-widest mb-6">
                To do it yourself, you'd need to:
              </p>
              <ul className="space-y-4">
                {diyList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <X className="w-3 h-3 text-red-400" />
                    </div>
                    <span className="text-white/45 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-white/25 text-xs italic">
                And keep up with it as it all keeps changing.
              </p>
            </div>
          </AnimatedSection>

          {/* E&J column */}
          <AnimatedSection delay={0.2}>
            <div className="bg-orange-500/[0.06] border border-orange-500/20 rounded-3xl p-8 h-full">
              <p className="font-heading font-bold text-sm text-orange-500 uppercase tracking-widest mb-6">
                Or hand it to E&J Retreats:
              </p>
              <ul className="space-y-4">
                {ejList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-orange-500/60 text-xs italic">
                Already built. Already running. You just get the results.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <p className="text-white/40 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              We've spent months building, testing, and running this stack so you don't have to. Every AI tool. Every algorithm. Every data source. You give us the property - we do the rest.
            </p>
            <a
              href="#revenue-report"
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-heading font-bold text-base rounded-lg shadow-[0_4px_24px_rgba(255,122,0,0.35)] hover:bg-orange-600 hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(255,122,0,0.45)] transition-all duration-300 cursor-pointer"
            >
              Let Us Handle It - Get My Free Report
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
