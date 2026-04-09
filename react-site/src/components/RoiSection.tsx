import AnimatedSection from './AnimatedSection'

export default function RoiSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <span className="inline-block font-heading text-xs font-bold tracking-[0.12em] uppercase text-orange-500 mb-3">
              Return on Investment
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Management that often pays for itself
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Many owners discover their property is earning below nearby comparable listings. Even modest improvements in pricing strategy, listing exposure, and calendar positioning often cover our management fee while increasing overall income.
            </p>
            <a
              href="#revenue-report"
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-heading font-bold text-base rounded-lg shadow-[0_4px_24px_rgba(255,122,0,0.35)] hover:bg-orange-600 hover:translate-y-[-2px] transition-all duration-300 cursor-pointer"
            >
              See What My Property Should Be Making
            </a>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <img
              src="/images/Untitled design (1).jpg"
              alt="Comparable short-term rental listings report"
              loading="lazy"
              className="w-full shadow-xl"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
