import { SimplexNoise } from '@paper-design/shaders-react'

export default function HeroShader() {
  return (
    <div className="absolute inset-0 z-0 bg-[#0A0F1E]">
      <SimplexNoise
        style={{ width: '100%', height: '100%' }}
        colors={['#0C1B2A', '#0E3B5E', '#1A6B7A', '#0A4D68', '#0D2E4A']}
        speed={0.1}
        scale={1}
        minPixelRatio={0.5}
      />
    </div>
  )
}
