import { motion } from 'framer-motion'

/**
 * Every section opens the same way: a monospace "path" (the signature
 * wayfinding device for this portfolio) followed by a display heading
 * and an optional supporting line.
 */
export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className={`mb-12 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <p className="path-label mb-3 flex items-center gap-2 justify-start">
        <span className="text-signal-blueSoft">$</span> {eyebrow}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-mist-300 leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
