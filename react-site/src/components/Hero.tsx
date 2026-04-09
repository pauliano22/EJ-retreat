import { motion, useSpring, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import HeroShader from './HeroShader'

function AnimatedValue({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) spring.set(value)
  }, [isInView, spring, value])

  useEffect(() => {
    const unsubscribe = spring.on('change', (v) => setDisplay(Math.round(v)))
    return unsubscribe
  }, [spring])

  return <span ref={ref}>${display.toLocaleString()}</span>
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroShader />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              See What Your Property Should Be Making
            </h1>

            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-lg">
              We compare your property against 20+ nearby short-term rentals with similar bed and bath counts using professional STR market analytics.
            </p>

            <a
              href="#revenue-report"
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-heading font-bold text-base rounded-lg shadow-[0_4px_24px_rgba(255,122,0,0.35)] hover:bg-orange-600 hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(255,122,0,0.45)] transition-all duration-300 cursor-pointer"
            >
              Get My Free Revenue Report
            </a>

            <p className="mt-4 text-sm text-white/35">
              No obligation. No contracts. Just data.
            </p>
          </motion.div>

          {/* Right: Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-3xl p-7 shadow-[0_8px_40px_rgba(0,0,0,0.2)]"
          >
            <div className="text-xs uppercase tracking-widest font-heading font-bold text-orange-500 mb-5">
              Revenue Comparison Preview
            </div>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-4">
                <div className="text-xs text-white/40 mb-2">Your Property</div>
                <div className="text-2xl font-heading font-bold text-white">
                  <AnimatedValue value={115300} />
                </div>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-4">
                <div className="text-xs text-white/40 mb-2">Market Average</div>
                <div className="text-2xl font-heading font-bold text-white">
                  <AnimatedValue value={151100} duration={1.8} />
                </div>
              </div>
            </div>

            <div className="bg-orange-500/[0.08] border border-orange-500/15 rounded-2xl p-4 text-center">
              <div className="text-xs text-orange-500/60 mb-1">Potential Increase</div>
              <div className="text-3xl font-heading font-bold text-orange-500 flex items-center justify-center gap-2">
                <ArrowUp className="w-5 h-5" />
                +<AnimatedValue value={35800} duration={2} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
