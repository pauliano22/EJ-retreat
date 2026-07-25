import AnimatedSection from './AnimatedSection'

const cases = [
  {
    label: 'Case Study #1',
    tag: 'Vacation Rental — Florida',
    headline: 'Sitting at $0 for 3 months. First month with us: $12,000.',
    problem: 'A property owner came to us after their rental sat completely empty for three months straight — zero bookings, zero revenue. The property itself was a goldmine: great location, solid amenities. The problem was entirely operational.',
    actions: [
      'Listed on 15+ booking platforms (had been on just one)',
      'Implemented our dynamic pricing system with real-time market data',
      'Rewrote and fully optimized the listing — copy, photos, titles',
      'Set up automated guest communication and backend operations',
    ],
    result: '$12,000',
    resultSub: 'First month under E&J management',
    outcome: 'The property has been consistently booked ever since. What looked like a struggling asset was simply being mismanaged — the demand was always there.',
    accent: '#FF7A00',
  },
  {
    label: 'Case Study #2',
    tag: 'Duplex — Palm Harbor, FL',
    headline: 'Previous manager had them on Airbnb only. We changed that.',
    problem: 'These owners were frustrated with their previous property management company — and for good reason. Despite paying management fees, their Palm Harbor duplex was only listed on a single platform. The revenue potential was being cut in half.',
    actions: [
      'Immediately listed on Vrbo, Booking.com, and 12+ additional channels',
      'Launched our full dynamic pricing strategy across all platforms',
      'Overhauled listings with optimized copy and channel-specific content',
      'Built out the complete operations backend for seamless management',
    ],
    result: '+$5,000',
    resultSub: 'Additional income in their very first month with us',
    outcome: 'One platform versus many — that gap alone explained most of the missed revenue. Switching to E&J wasn\'t just a better experience, it was an immediate income increase.',
    accent: '#22c55e',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#09090f]">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block font-heading text-xs font-bold tracking-[0.12em] uppercase text-orange-500 mb-3">
              Real Results
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              What happens when we take over.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              These aren't projections. These are actual outcomes from real properties we manage.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="relative bg-[#111118] rounded-3xl border border-white/[0.07] overflow-hidden flex flex-col h-full">

                {/* Top accent bar */}
                <div className="h-1" style={{ background: c.accent }} />

                <div className="p-8 flex flex-col gap-6 flex-1">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-heading text-xs font-bold tracking-widest uppercase text-white/30">{c.label}</span>
                      <span className="font-heading text-xs font-semibold px-2.5 py-1 rounded-full border text-white/50 border-white/10">{c.tag}</span>
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-snug">
                      {c.headline}
                    </h3>
                  </div>

                  {/* Problem */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {c.problem}
                  </p>

                  {/* What we did */}
                  <div>
                    <p className="font-heading text-xs font-bold tracking-widest uppercase mb-3" style={{ color: c.accent }}>
                      What we did
                    </p>
                    <ul className="space-y-2.5">
                      {c.actions.map((a, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                          <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" fill={c.accent} fillOpacity="0.15"/>
                            <polyline points="4.5 8 7 10.5 11.5 5.5" fill="none" stroke={c.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Result callout */}
                  <div className="rounded-2xl p-5 border" style={{ background: `${c.accent}10`, borderColor: `${c.accent}30` }}>
                    <div className="font-heading text-4xl font-extrabold mb-1" style={{ color: c.accent }}>
                      {c.result}
                    </div>
                    <div className="text-sm text-white/50 font-medium">{c.resultSub}</div>
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">{c.outcome}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-10 text-center">
            <p className="text-slate-400 mb-5">
              Want to see what your property <span className="text-white font-semibold">should</span> be earning?
            </p>
            <a
              href="/free-report.html"
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-heading font-bold text-sm rounded-xl shadow-[0_4px_30px_rgba(255,122,0,0.3)] hover:bg-orange-600 hover:translate-y-[-2px] transition-all duration-200"
            >
              Get My Free Revenue Report →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
