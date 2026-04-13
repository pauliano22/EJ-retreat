const platforms = [
  { name: 'Airbnb',       src: '/images/platforms/airbnb.svg',      bg: 'bg-white' },
  { name: 'VRBO',         src: '/images/platforms/vrbo.svg',         bg: 'bg-white' },
  { name: 'Booking.com',  src: '/images/platforms/booking.svg',      bg: 'bg-white' },
  { name: 'Expedia',      src: '/images/platforms/expedia.svg',      bg: 'bg-white' },
  { name: 'Tripadvisor',  src: '/images/platforms/tripadvisor.svg',  bg: 'bg-white' },
]

export default function PlatformStrip() {
  return (
    <div className="bg-slate-50 border-y border-slate-100 py-6">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap flex-shrink-0">
            Listed on 15+ platforms
          </span>
          <div className="w-px h-6 bg-slate-200 hidden sm:block flex-shrink-0" />
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-center bg-white rounded-xl border border-slate-100 shadow-sm px-5 py-2.5 h-12"
              >
                <img
                  src={p.src}
                  alt={p.name}
                  className="h-6 w-auto object-contain"
                />
              </div>
            ))}
            <div className="flex items-center justify-center bg-white rounded-xl border border-slate-100 shadow-sm px-5 py-2.5 h-12">
              <span className="text-xs font-heading font-bold text-slate-400">+ 10 more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
