import AnimatedSection from './AnimatedSection'

export default function ReportPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block font-heading text-xs font-bold tracking-[0.12em] uppercase text-orange-500 mb-3">
              Report Preview
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              See exactly where your property stands
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-900 mb-4">
              Example Owner-Provided Revenue
            </h3>
            <p className="text-slate-500 mb-8">
              This is an example of the comparison report we prepare using your property's actual performance data.
            </p>
            <a
              href="#revenue-report"
              className="inline-flex items-center px-7 py-3 bg-orange-500 text-white font-heading font-bold text-sm rounded-lg shadow-[0_4px_20px_rgba(255,122,0,0.25)] hover:bg-orange-600 hover:translate-y-[-1px] transition-all duration-200 cursor-pointer"
            >
              Get My Free Revenue Potential Report
            </a>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-lg">
              <div className="space-y-5">
                <div className="flex items-center justify-between py-4 border-b border-slate-200">
                  <span className="text-slate-600 font-medium">Property Revenue (12 months)</span>
                  <span className="font-heading font-bold text-xl text-slate-900">$115,300</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-slate-200">
                  <span className="text-slate-600 font-medium">Nearby Market Average</span>
                  <span className="font-heading font-bold text-xl text-slate-900">$151,100</span>
                </div>
                <div className="flex items-center justify-between py-4">
                  <span className="text-slate-600 font-medium">Opportunity Gap</span>
                  <span className="font-heading font-bold text-2xl text-green-500">+$35,800</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
