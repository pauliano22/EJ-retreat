const platforms = [
  {
    name: 'Airbnb',
    bg: 'bg-[#FF5A5F]/10',
    border: 'border-[#FF5A5F]/30',
    text: 'text-[#FF5A5F]',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c1.26 0 2.25 1.01 2.25 2.25S13.26 9 12 9 9.75 7.99 9.75 6.75 10.74 4.5 12 4.5zm5.03 11.47c-.28.9-1.37 1.53-2.66 1.53H9.63c-1.29 0-2.38-.63-2.66-1.53-.1-.33-.04-.67.17-.94l2.39-3.1c.24-.31.6-.49.97-.49s.73.18.97.49l.53.69.53-.69c.24-.31.6-.49.97-.49s.73.18.97.49l2.39 3.1c.21.27.27.61.17.94z"/>
      </svg>
    ),
  },
  {
    name: 'VRBO',
    bg: 'bg-[#1A6FBA]/10',
    border: 'border-[#1A6FBA]/30',
    text: 'text-[#1A6FBA]',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    name: 'Booking.com',
    bg: 'bg-[#003580]/10',
    border: 'border-[#003580]/30',
    text: 'text-[#003580]',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
      </svg>
    ),
  },
  {
    name: 'Expedia',
    bg: 'bg-[#FFB900]/10',
    border: 'border-[#FFB900]/30',
    text: 'text-[#c48f00]',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    ),
  },
  {
    name: 'Tripadvisor',
    bg: 'bg-[#00AA6C]/10',
    border: 'border-[#00AA6C]/30',
    text: 'text-[#00AA6C]',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    ),
  },
  {
    name: 'Hopper',
    bg: 'bg-[#6F3FF5]/10',
    border: 'border-[#6F3FF5]/30',
    text: 'text-[#6F3FF5]',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16z"/>
      </svg>
    ),
  },
  {
    name: 'Google Vacations',
    bg: 'bg-[#4285F4]/10',
    border: 'border-[#4285F4]/30',
    text: 'text-[#4285F4]',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/>
      </svg>
    ),
  },
]

export default function PlatformStrip() {
  return (
    <div className="bg-white border-y border-slate-100 py-5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap flex-shrink-0">
            Listed on 15+ platforms
          </span>
          <div className="w-px h-6 bg-slate-200 hidden sm:block flex-shrink-0" />
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {platforms.map((p) => (
              <div
                key={p.name}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-heading font-bold ${p.bg} ${p.border} ${p.text}`}
              >
                {p.svg}
                {p.name}
              </div>
            ))}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 text-xs font-heading font-bold text-slate-400 bg-slate-50">
              + 8 more
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
