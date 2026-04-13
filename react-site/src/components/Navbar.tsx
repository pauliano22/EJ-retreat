import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Properties', href: 'https://ejretreats.bookeddirectly.host/', external: true },
  { label: 'Our Management', href: 'management.html' },
  { label: 'Contact', href: 'contact.html' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-base/95 backdrop-blur-xl shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <nav className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="E&J Retreats" className="h-16 w-auto bg-white rounded-lg p-1" />
              <span className="hidden lg:block text-xs text-slate-400 max-w-[180px] leading-tight">
                Helping your property perform at its full revenue potential
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="font-heading text-sm font-semibold text-slate-300 hover:text-orange-500 transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#revenue-report"
                className="hidden lg:inline-flex items-center px-6 py-2.5 bg-orange-500 text-white font-heading font-bold text-sm rounded-lg shadow-[0_4px_20px_rgba(255,122,0,0.25)] hover:bg-orange-600 hover:translate-y-[-1px] transition-all duration-200 cursor-pointer"
              >
                Get Free Revenue Report
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-white p-2 cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile nav drawer */}
      <nav
        className={`fixed top-0 right-0 w-72 h-full bg-dark-base z-50 p-8 pt-24 flex flex-col gap-2 shadow-[-4px_0_30px_rgba(0,0,0,0.3)] transition-transform duration-300 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            onClick={() => setMobileOpen(false)}
            className="font-heading text-base font-semibold text-slate-200 py-3 border-b border-slate-800 hover:text-orange-500 transition-colors cursor-pointer"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#revenue-report"
          onClick={() => setMobileOpen(false)}
          className="mt-6 w-full text-center px-6 py-4 bg-orange-500 text-white font-heading font-bold rounded-lg shadow-[0_4px_20px_rgba(255,122,0,0.25)] hover:bg-orange-600 transition-all duration-200 cursor-pointer"
        >
          Get Free Revenue Report
        </a>
      </nav>
    </>
  )
}
