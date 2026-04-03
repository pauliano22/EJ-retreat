import { Phone, Mail } from 'lucide-react'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void
    }
  }
}

export default function Footer() {
  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault()
    window.Calendly?.initPopupWidget({ url: 'https://calendly.com/ejretreats1/30min?primary_color=FF7A00' })
  }

  return (
    <footer className="bg-dark-base border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src="/images/logo.png" alt="E&J Retreats" className="h-14 w-auto bg-white rounded-lg p-1 mb-4" />
            <p className="text-white/50 text-sm leading-relaxed">
              Helping your property perform at its full revenue potential. Professional short-term rental management in Tampa, FL and beyond.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-heading font-bold text-white text-sm mb-4">Navigation</h5>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Revenue Report', href: '#revenue-report' },
                { label: 'Contact', href: 'contact.html' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/50 text-sm hover:text-orange-500 transition-colors duration-200 cursor-pointer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-heading font-bold text-white text-sm mb-4">Resources</h5>
            <ul className="space-y-2.5">
              <li>
                <a href="#revenue-report" className="text-white/50 text-sm hover:text-orange-500 transition-colors duration-200 cursor-pointer">
                  Free Revenue Report
                </a>
              </li>
              <li>
                <a href="#" onClick={openCalendly} className="text-white/50 text-sm hover:text-orange-500 transition-colors duration-200 cursor-pointer">
                  Schedule a Call
                </a>
              </li>
              <li>
                <a href="https://ejretreats.bookeddirectly.host/" target="_blank" rel="noopener noreferrer" className="text-white/50 text-sm hover:text-orange-500 transition-colors duration-200 cursor-pointer">
                  Our Properties
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-heading font-bold text-white text-sm mb-4">Contact</h5>
            <div className="space-y-3">
              <a href="tel:8136990509" className="flex items-center gap-3 text-white/50 text-sm hover:text-orange-500 transition-colors duration-200 cursor-pointer">
                <Phone className="w-4 h-4" />
                813-699-0509
              </a>
              <a href="mailto:ejretreats1@gmail.com" className="flex items-center gap-3 text-white/50 text-sm hover:text-orange-500 transition-colors duration-200 cursor-pointer">
                <Mail className="w-4 h-4" />
                ejretreats1@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-white/30 text-sm">&copy; 2025 E&J Retreats. All rights reserved.</span>
          <span className="text-white/30 text-sm">Helping your property perform at its full revenue potential.</span>
        </div>
      </div>
    </footer>
  )
}
