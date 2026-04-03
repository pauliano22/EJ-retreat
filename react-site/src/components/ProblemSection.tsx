import { TrendingUp, CalendarDays, Bot, Sun } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const problems = [
  { icon: TrendingUp, text: 'Pricing changes constantly' },
  { icon: CalendarDays, text: 'Demand shifts weekly' },
  { icon: Bot, text: 'Platform algorithms evolve quietly' },
  { icon: Sun, text: 'Seasonality impacts listing visibility' },
]

export default function ProblemSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="inline-block font-heading text-xs font-bold tracking-[0.12em] uppercase text-orange-500 mb-3">
            The Problem
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12">
            Most short-term rentals earn less than they should
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {problems.map((item, i) => (
            <AnimatedSection key={item.text} delay={i * 0.1}>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-orange-500/30 hover:shadow-lg transition-all duration-300 cursor-default group">
                <div className="w-12 h-12 bg-orange-light rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-orange-500/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-orange-500" />
                </div>
                <span className="text-slate-700 font-medium">{item.text}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="text-slate-500 max-w-xl mx-auto mb-8">
            Most owners never see the gap between their performance and the market average.
          </p>
          <a
            href="#revenue-report"
            className="inline-flex items-center px-7 py-3 bg-orange-500 text-white font-heading font-bold text-sm rounded-lg shadow-[0_4px_20px_rgba(255,122,0,0.25)] hover:bg-orange-600 hover:translate-y-[-1px] transition-all duration-200 cursor-pointer"
          >
            Check My Property Performance
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
