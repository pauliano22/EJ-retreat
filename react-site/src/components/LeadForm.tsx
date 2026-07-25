import { Lock } from 'lucide-react'
import { useState } from 'react'
import AnimatedSection from './AnimatedSection'

const CRM_URL = 'https://ej-retreat.vercel.app/api/inbound-lead'
const CRM_TOKEN = 'ejr_eab9ceb7d1463a8d8ddec037474149bda7a7153b4bf3408e'

export default function LeadForm() {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const data = {
      first_name:       (form.elements.namedItem('first_name')       as HTMLInputElement).value,
      last_name:        (form.elements.namedItem('last_name')        as HTMLInputElement).value,
      email:            (form.elements.namedItem('email')            as HTMLInputElement).value,
      phone:            (form.elements.namedItem('phone')            as HTMLInputElement).value,
      property_address: (form.elements.namedItem('property_address') as HTMLInputElement).value,
      message:          (form.elements.namedItem('message')          as HTMLTextAreaElement).value,
    }

    try {
      const r = await fetch(CRM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${CRM_TOKEN}`,
        },
        body: JSON.stringify(data),
      })
      if (!r.ok) throw new Error('CRM error')
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead')
      }
      window.location.href = '/thank-you.html'
    } catch {
      setError('Something went wrong — please try again or call us at (813) 699-0509.')
      setSubmitting(false)
    }
  }

  return (
    <section id="revenue-report" className="relative py-20 md:py-28 bg-dark-base overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/3" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get Your Free Revenue Potential Report
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Compare your property's earnings against nearby listings and see your opportunity to earn more.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="John"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Smith"
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Phone <span className="text-white/30">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(813) 555-1234"
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-white/70 text-sm font-medium mb-2">Property Address</label>
                <input
                  type="text"
                  name="property_address"
                  placeholder="123 Main St, Tampa, FL 33601"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-colors duration-200"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white/70 text-sm font-medium mb-2">
                  Your last 12 months estimated revenue? <span className="text-white/30">(optional)</span>
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Number of bedrooms, current revenue, questions..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-colors duration-200 resize-none"
                />
              </div>

              {error && (
                <p className="mb-4 text-sm text-red-400 bg-red-950/40 border border-red-800/50 rounded-lg px-4 py-3">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full px-6 py-4 bg-orange-500 text-white font-heading font-bold text-base rounded-lg shadow-[0_4px_24px_rgba(255,122,0,0.35)] hover:bg-orange-600 hover:translate-y-[-1px] hover:shadow-[0_8px_32px_rgba(255,122,0,0.45)] transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting…' : 'Submit'}
              </button>
            </form>
          </div>
        </AnimatedSection>

        <p className="text-center mt-5 text-white/40 text-sm flex items-center justify-center gap-2">
          <Lock className="w-3.5 h-3.5" />
          Private report. No obligation. Takes less than 1 minute.
        </p>
      </div>
    </section>
  )
}
