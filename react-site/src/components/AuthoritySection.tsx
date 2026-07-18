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
                href="/free-report.html"
                className="inline-flex items-center px-7 py-3 bg-orange-500 text-white font-heading font-bold text-sm rounded-lg shadow-[0_4px_20px_rgba(255,122,0,0.25)] hover:bg-orange-600 hover:translate-y-[-1px] transition-all duration-200 cursor-pointer"
              >
                Get My Free Revenue Potential Report
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Live report preview */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12">
            <p className="text-sm text-slate-500 italic text-center mb-4">
              Preview of what your report will include
            </p>
            <div style={{ background: '#09090f', borderRadius: 14, border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', textAlign: 'left', fontSize: 13 }}>

              {/* Topbar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 18px', background: 'linear-gradient(90deg,#1a1b2e,#141524)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <img src="/images/logo.png" alt="E&J Retreats" style={{ height: 22 }} />
                  <span style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Revenue Analysis</span>
                </div>
                <div style={{ background: 'rgba(255,122,0,0.15)', border: '1px solid rgba(255,122,0,0.3)', borderRadius: 20, padding: '3px 12px', fontSize: 11, color: '#FF7A00', fontWeight: 700, fontFamily: 'Montserrat,sans-serif' }}>
                  Managed by E&amp;J Retreats
                </div>
              </div>

              {/* Address */}
              <div style={{ padding: '6px 18px', fontSize: 10, color: 'rgba(255,255,255,0.28)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                1450 Gulf to Bay Blvd, Clearwater, FL 33755 &nbsp;·&nbsp; Powered by AirDNA
              </div>

              {/* Main two-column grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px' }}>

                {/* Left: report content */}
                <div style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}>

                  {/* 4 Stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {[
                      { label: 'Projected Annual', val: '$223,400', sub: 'Realistic estimate', color: '#FF7A00' },
                      { label: 'Occupancy Rate',   val: '55.8%',    sub: 'Market average',    color: '#e8e8f0' },
                      { label: 'Avg Daily Rate',   val: '$1,100',   sub: 'Comp-based target', color: '#e8e8f0' },
                      { label: 'RevPAR',           val: '$614',     sub: 'Revenue per avail. night', color: '#22c55e' },
                    ].map((s, i) => (
                      <div key={i} style={{ padding: '14px 16px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Montserrat,sans-serif', marginBottom: 5 }}>{s.label}</div>
                        <div style={{ fontSize: 20, fontWeight: 800, color: s.color, fontFamily: 'Montserrat,sans-serif', lineHeight: 1 }}>{s.val}</div>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{s.sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* Executive Summary */}
                  <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: 9, fontFamily: 'Montserrat,sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>Executive Summary</div>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 }}>
                      This 4-unit multiplex sits in a high-demand Clearwater corridor with consistent 55%+ occupancy and $1,100+ average daily rates. Market comparables show the property can realistically generate $195K–$285K annually. Professional management with dynamic pricing and multi-platform distribution is the primary driver of that upside.
                    </p>
                  </div>

                  {/* 8 Key Findings */}
                  <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: 9, fontFamily: 'Montserrat,sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>8 Key Findings</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                      {[
                        ['01', 'High-demand market sustains 55%+ occupancy with Feb–Mar peak rates near 100%.'],
                        ['02', 'Premium ADR of $1,100 achievable based on 12+ comparable luxury properties nearby.'],
                        ['03', '4-unit multiplex structure creates multiple revenue streams and strong diversification.'],
                        ['04', 'Significant revenue gap vs. top comps — $75K+ upside available.'],
                        ['05', 'Dynamic pricing in Aug–Sep low season recovers 15–20% of lost revenue.'],
                        ['06', 'Top comps achieve $297,900+ annually, confirming strong ceiling potential.'],
                        ['07', 'RevPAR of $614 signals room for improvement through professional rate management.'],
                        ['08', 'Professionally managed properties in this submarket average 57% more revenue.'],
                      ].map(([num, text]) => (
                        <div key={num} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 7, padding: '8px 10px', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                          <span style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 9, fontWeight: 800, color: '#FF7A00', flexShrink: 0, marginTop: 1 }}>{num}</span>
                          <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.5 }}>{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Seasonal Chart */}
                  <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: 9, fontFamily: 'Montserrat,sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: 10 }}>Seasonal Revenue Breakdown</div>
                    <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 60 }}>
                      {[
                        ['Jan', 52, 'mid'], ['Feb', 100, 'peak'], ['Mar', 97, 'peak'], ['Apr', 72, 'mid'],
                        ['May', 65, 'mid'], ['Jun', 58, 'mid'], ['Jul', 48, 'mid'], ['Aug', 29, 'low'],
                        ['Sep', 29, 'low'], ['Oct', 42, 'mid'], ['Nov', 50, 'mid'], ['Dec', 55, 'mid'],
                      ].map(([mo, h, tier]) => (
                        <div key={mo as string} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, height: '100%', justifyContent: 'flex-end' }}>
                          <div style={{ width: '100%', background: '#FF7A00', borderRadius: '2px 2px 0 0', height: `${h}%`, opacity: tier === 'peak' ? 1 : tier === 'mid' ? 0.55 : 0.22, minHeight: 2 }} />
                          <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.28)' }}>{mo}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Revenue Scenarios */}
                  <div style={{ padding: '14px 18px' }}>
                    <div style={{ fontSize: 9, fontFamily: 'Montserrat,sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginBottom: 10 }}>Revenue Scenarios — With E&amp;J Retreats Management</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {[
                        { label: 'Conservative', val: '$195,000', w: '65%', hl: false },
                        { label: 'Realistic',    val: '$223,400', w: '75%', hl: true },
                        { label: 'Optimistic',   val: '$285,000', w: '96%', hl: false },
                      ].map((s) => (
                        <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.4)', width: 70, flexShrink: 0 }}>{s.label}</span>
                          <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 4, height: 8, overflow: 'hidden' }}>
                            <div style={{ width: s.w, height: '100%', background: '#FF7A00', borderRadius: 4, opacity: s.hl ? 1 : 0.45 }} />
                          </div>
                          <span style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 12, fontWeight: 700, color: s.hl ? '#FF7A00' : 'rgba(255,255,255,0.55)', width: 64, textAlign: 'right', flexShrink: 0 }}>{s.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: checklist sidebar */}
                <div style={{ padding: '18px 16px' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#e8e8f0', fontFamily: 'Montserrat,sans-serif', marginBottom: 4 }}>What's included in your free report</div>
                  <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginBottom: 14, lineHeight: 1.5 }}>Everything you need to make a confident decision about your property.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {[
                      ['12-Month Revenue Projection', 'Full year estimated earnings based on live market data'],
                      ['Occupancy Rate Benchmarks', 'How your property stacks up against the local STR market'],
                      ['Average Daily Rate vs. Comps', 'Pricing analysis against comparable listings in your submarket'],
                      ['RevPAR Analysis', 'Revenue per available room — the core metric driving true profitability'],
                      ['Executive Summary', 'Plain-English breakdown of what the numbers mean for your property'],
                      ['8 Key Findings', 'Specific insights on demand, pricing, and competitive positioning'],
                      ['Market Opportunity Analysis', 'Demand trends, revenue gap vs. top performers, and management advantage'],
                      ['7 Expert Recommendations', 'Actionable steps to close the gap between current and peak revenue'],
                      ['3 Revenue Scenarios', 'Conservative, realistic, and optimistic projections with clear assumptions'],
                      ['Seasonal Demand Analysis', 'Month-by-month trends so you can plan pricing and availability'],
                      ['Comparable Properties Breakdown', 'What top STRs in your area are doing — and how to beat them'],
                      ['E&J Management Advantage', 'Side-by-side comparison: self-managed average vs. professionally managed'],
                    ].map(([title, desc]) => (
                      <div key={title} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                          <svg width="8" height="8" viewBox="0 0 12 12"><polyline points="2 6 5 9 10 3" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 600, color: '#e8e8f0' }} dangerouslySetInnerHTML={{ __html: title }} />
                          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', lineHeight: 1.4, marginTop: 1 }}>{desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 18, textAlign: 'center' }}>
                    <a href="/free-report.html" style={{ display: 'inline-block', background: '#FF7A00', color: '#fff', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: 12, padding: '10px 18px', borderRadius: 8, textDecoration: 'none' }}>
                      Get My Free Report ↑
                    </a>
                    <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', marginTop: 6 }}>Free · No obligation · Takes 30 seconds</p>
                  </div>
                </div>
              </div>

              {/* Watermark */}
              <div style={{ padding: '8px 18px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: 9, color: 'rgba(255,255,255,0.2)', fontFamily: 'Montserrat,sans-serif' }}>
                Prepared by E&amp;J Retreats &nbsp;·&nbsp; Data powered by AirDNA &nbsp;·&nbsp; ejretreats.com
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
