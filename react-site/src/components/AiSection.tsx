import { motion } from 'framer-motion'
import { Brain, TrendingUp, MapPin, Sparkles, BarChart3, Building2 } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const capabilities = [
  {
    icon: TrendingUp,
    title: 'AI Revenue Projections',
    body: 'We build personalized revenue models for your property using 12+ months of comparable listing data, local demand signals, and seasonal trend analysis - not generic averages.',
  },
  {
    icon: BarChart3,
    title: 'Investment Deal Analysis',
    body: 'Evaluating a potential STR purchase? We run every deal through AirDNA market data and AI analysis to project revenue, occupancy, ADR, and cap rate before you close.',
  },
  {
    icon: MapPin,
    title: 'Market Intelligence',
    body: 'We identify underpriced markets, emerging demand trends, and specific property types that are outperforming - giving you data-backed insight to guide your next acquisition.',
  },
  {
    icon: Sparkles,
    title: 'Smart Amenity Recommendations',
    body: "Our AI analyzes which amenities generate the highest booking premiums in your specific market. We tell you exactly what to add - and what's not worth the investment.",
  },
  {
    icon: Brain,
    title: 'Real-Time Dynamic Pricing',
    body: 'Rates are re-evaluated daily by algorithms tracking competitor pricing, local events, weather, demand velocity, and days-until-arrival. The right rate, every night.',
  },
  {
    icon: Building2,
    title: 'Portfolio Optimization',
    body: 'Managing multiple properties? We aggregate performance data across your entire portfolio, benchmark each asset, and surface optimization opportunities at every level.',
  },
]

export default function AiSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block font-heading text-xs font-bold tracking-[0.12em] uppercase text-orange-500 mb-3">
              AI-Powered Management
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
              Most operators use gut instinct.<br className="hidden md:block" /> We use AI.
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto text-lg leading-relaxed">
              We've built a full AI intelligence layer on top of our management platform - from initial revenue projections to ongoing portfolio analysis. This is what separates top-earning properties from the rest.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <AnimatedSection key={cap.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:border-orange-500/40 hover:bg-white/[0.07] transition-colors duration-300 h-full"
              >
                <div className="w-11 h-11 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                  <cap.icon className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-heading font-bold text-white text-base mb-2">{cap.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{cap.body}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="mt-14 bg-orange-500/[0.08] border border-orange-500/20 rounded-3xl p-8 md:p-10 text-center">
            <p className="text-xs font-heading font-bold uppercase tracking-widest text-orange-500 mb-3">
              Start with a free AI revenue projection
            </p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
              See exactly what your property should be earning
            </h3>
            <p className="text-white/50 max-w-lg mx-auto mb-7 text-sm leading-relaxed">
              We run your address through our AI analysis stack - comparing it against 20+ nearby properties - and deliver a full revenue breakdown. Free, no obligation, in minutes.
            </p>
            <a
              href="/free-report.html"
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-heading font-bold text-base rounded-lg shadow-[0_4px_24px_rgba(255,122,0,0.35)] hover:bg-orange-600 hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(255,122,0,0.45)] transition-all duration-300 cursor-pointer"
            >
              Get My Free AI Revenue Report
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
