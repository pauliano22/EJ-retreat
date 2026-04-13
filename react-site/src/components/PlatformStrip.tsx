const platforms = [
  { name: 'airbnb',        color: '#FF5A5F', weight: '800', italic: true  },
  { name: 'VRBO',          color: '#1A6FBA', weight: '900', italic: false },
  { name: 'booking.com',   color: '#003580', weight: '700', italic: false },
  { name: 'Expedia',       color: '#00355F', weight: '700', italic: false },
  { name: 'Tripadvisor',   color: '#00AA6C', weight: '700', italic: false },
  { name: 'Hopper',        color: '#6F3FF5', weight: '700', italic: false },
  { name: 'Google Vacation Rentals', color: '#4285F4', weight: '600', italic: false },
]

export default function PlatformStrip() {
  return (
    <div className="bg-white border-y border-slate-100 py-5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap flex-shrink-0">
            Listed on 15+ platforms
          </span>
          <div className="w-px h-5 bg-slate-200 hidden sm:block flex-shrink-0" />
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-center bg-white rounded-xl border border-slate-100 shadow-sm px-4 py-2 h-11"
              >
                <span
                  style={{
                    color: p.color,
                    fontWeight: p.weight,
                    fontStyle: p.italic ? 'italic' : 'normal',
                    fontSize: '0.85rem',
                    letterSpacing: p.name === 'VRBO' ? '0.05em' : '0',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {p.name}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-center bg-slate-50 rounded-xl border border-slate-100 px-4 py-2 h-11">
              <span className="text-xs font-heading font-bold text-slate-400">+ more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
