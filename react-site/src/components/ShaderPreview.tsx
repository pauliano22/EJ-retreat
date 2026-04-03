import { Waves } from '@paper-design/shaders-react'

const options = [
  {
    name: '1. Pure CSS Gradient (recommended)',
    desc: 'Ultra-smooth, zero lag, Apple-style. Subtle color shift, no patterns.',
    el: (
      <div className="absolute inset-0 bg-[#0A0F1E]">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background: 'linear-gradient(135deg, #0A0F1E 0%, #0F1D2F 25%, #12243D 50%, #0D1825 75%, #0A0F1E 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 20s ease infinite',
          }}
        />
        <style>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </div>
    ),
  },
  {
    name: '2. CSS Gradient + Glow Orb',
    desc: 'Clean dark base with a soft floating light accent. Minimal, premium.',
    el: (
      <div className="absolute inset-0 bg-[#0A0F1E]">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(30,58,95,0.5) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 30% 60%, rgba(20,40,70,0.3) 0%, transparent 60%)',
            animation: 'orbFloat 15s ease-in-out infinite',
          }}
        />
        <style>{`
          @keyframes orbFloat {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(2%, -3%) scale(1.02); }
            66% { transform: translate(-1%, 2%) scale(0.98); }
          }
        `}</style>
      </div>
    ),
  },
  {
    name: '3. CSS Gradient + Mesh Orbs',
    desc: 'Two soft color orbs drifting. Like Apple\'s macOS wallpapers.',
    el: (
      <div className="absolute inset-0 bg-[#0A0F1E] overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(circle, #1E3A5F, transparent)',
            top: '10%',
            right: '-10%',
            animation: 'float1 18s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
          style={{
            background: 'radial-gradient(circle, #2A4A6B, transparent)',
            bottom: '10%',
            left: '-5%',
            animation: 'float2 22s ease-in-out infinite',
          }}
        />
        <style>{`
          @keyframes float1 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-40px, 30px); }
          }
          @keyframes float2 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(30px, -20px); }
          }
        `}</style>
      </div>
    ),
  },
  {
    name: '4. Sine Waves (shader)',
    desc: 'Clean sine wave lines on dark — technical, structured.',
    el: (
      <Waves
        style={{ width: '100%', height: '100%' }}
        colorFront="#1E3A5F"
        colorBack="#0A0F1E"
        frequency={3}
        amplitude={0.3}
        spacing={0.5}
        softness={0.6}
        shape={1}
        rotation={0}
        scale={1}
      />
    ),
  },
  {
    name: '5. Sine Waves (tighter)',
    desc: 'More wave lines, tighter spacing — subtle texture feel.',
    el: (
      <Waves
        style={{ width: '100%', height: '100%' }}
        colorFront="#162544"
        colorBack="#0A0F1E"
        frequency={6}
        amplitude={0.2}
        spacing={0.3}
        softness={0.8}
        shape={1}
        rotation={10}
        scale={1.2}
      />
    ),
  },
  {
    name: '6. Waves + Glow Orb Combo',
    desc: 'Sine waves with a soft floating orb for depth. Best of both.',
    el: (
      <div className="absolute inset-0">
        <Waves
          style={{ width: '100%', height: '100%' }}
          colorFront="#1A3050"
          colorBack="#0A0F1E"
          frequency={4}
          amplitude={0.25}
          spacing={0.4}
          softness={0.7}
          shape={1}
          rotation={5}
          scale={1}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 50% 50% at 65% 45%, rgba(30,58,95,0.3) 0%, transparent 70%)',
            animation: 'orbFloat 18s ease-in-out infinite',
          }}
        />
        <style>{`
          @keyframes orbFloat {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-20px, 15px); }
          }
        `}</style>
      </div>
    ),
  },
]

export default function ShaderPreview() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-8">
      <h1 className="font-heading text-3xl font-bold text-white text-center mb-2">
        Pick Your Hero Background
      </h1>
      <p className="text-white/50 text-center mb-10">
        All dark navy tones. Tell me the number you like.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {options.map((s) => (
          <div key={s.name} className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors duration-300">
            <div className="relative h-64">
              {s.el}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center px-6">
                  <h2 className="font-heading text-xl font-bold text-white">
                    See What Your Property Should Be Making
                  </h2>
                  <p className="text-white/50 text-sm mt-2">Sample hero text overlay</p>
                  <div className="mt-4 inline-flex px-5 py-2 bg-orange-500 text-white text-sm font-bold rounded-lg">
                    Get My Free Revenue Report
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 p-4">
              <h3 className="font-heading font-bold text-white text-base">{s.name}</h3>
              <p className="text-white/50 text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
