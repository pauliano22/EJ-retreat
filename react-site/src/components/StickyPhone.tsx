import { useState, useEffect, useRef } from 'react'
import { Phone, Calendar, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void
    }
  }
}

export default function StickyPhone() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (window.innerWidth <= 768) {
      window.location.href = 'tel:8136990509'
    } else {
      setOpen(!open)
    }
  }

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault()
    window.Calendly?.initPopupWidget({ url: 'https://calendly.com/ejretreats1/30min?primary_color=FF7A00' })
    setOpen(false)
  }

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-72 bg-dark-base border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h5 className="font-heading font-bold text-white text-sm">Get in Touch</h5>
              <button
                onClick={() => setOpen(false)}
                className="text-white/50 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <a
              href="tel:8136990509"
              className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <div className="text-white text-sm font-medium">Call or Text</div>
                <div className="text-white/50 text-xs">813-699-0509</div>
              </div>
            </a>

            <a
              href="#"
              onClick={openCalendly}
              className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <div className="text-white text-sm font-medium">Schedule a Call</div>
                <div className="text-white/50 text-xs">Pick a time that works</div>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB button */}
      <button
        onClick={handleToggle}
        className="relative w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(255,122,0,0.4)] hover:bg-orange-600 hover:shadow-[0_6px_28px_rgba(255,122,0,0.5)] transition-all duration-300 cursor-pointer group"
        aria-label="Contact us"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-orange-500/30 animate-ping" />
        <Phone className="w-6 h-6 text-white relative z-10" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 whitespace-nowrap bg-dark-base text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Call for a quick revenue estimate
        </span>
      </button>
    </div>
  )
}
