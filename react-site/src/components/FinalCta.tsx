import AnimatedSection from './AnimatedSection'

const images = [
  { src: '/images/properties/waterfront-pool-oasis.webp', alt: 'Pool oasis property' },
  { src: '/images/properties/tampa-bay-getaway-pool.webp', alt: 'Tampa getaway with pool' },
  { src: '/images/properties/desert-oasis-retreat.webp', alt: 'Desert oasis retreat' },
]

export default function FinalCta() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-dark-base to-dark-surface overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto px-6 text-center z-10">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Find out what your property should really be making
          </h2>
          <a
            href="#revenue-report"
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-heading font-bold text-base rounded-lg shadow-[0_4px_24px_rgba(255,122,0,0.35)] hover:bg-orange-600 hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(255,122,0,0.45)] transition-all duration-300 cursor-pointer"
          >
            Get My Free Revenue Potential Report
          </a>
        </AnimatedSection>
      </div>

      {/* Property images strip */}
      <div className="mt-16 grid grid-cols-3">
        {images.map((img) => (
          <div key={img.alt}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-48 md:h-64 object-cover opacity-60"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
