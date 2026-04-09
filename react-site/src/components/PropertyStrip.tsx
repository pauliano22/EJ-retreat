import { motion } from 'framer-motion'

const images = [
  { src: '/images/properties/waterfront-boaters-paradise.webp', alt: 'Waterfront property' },
  { src: '/images/properties/mini-resort-pool.webp', alt: 'Resort pool property' },
  { src: '/images/properties/cocoa-ridge-retreat.webp', alt: 'Cocoa Ridge Retreat' },
  { src: '/images/beachfront-aerial.png', alt: 'Beachfront aerial view' },
]

export default function PropertyStrip() {
  return (
    <div className="w-full overflow-hidden bg-dark-base py-2">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-2"
      >
        {images.map((img) => (
          <div key={img.alt}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-48 md:h-64 object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
