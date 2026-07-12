import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'

const categories = [
  'Leadership',
  'Training',
  'Workshops',
  'University activities',
  'Peace Forum participation',
  'Cafe Club leadership',
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-28 sm:py-32 bg-ink-950/40">
      <div className="section-shell">
        <SectionHeading
          eyebrow="ls ./certificates"
          title="Certificates"
          description="Earned through leadership, training, workshops, and university activities. Add your certificate images here as you collect them."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: [0.25, 1, 0.5, 1] }}
              className="group relative aspect-[4/3] rounded-2xl border border-dashed border-white/[0.14] bg-white/[0.02] flex flex-col items-center justify-center gap-3 transition-colors duration-300 hover:border-signal-cyan/40 hover:bg-white/[0.04]"
            >
              <FiAward className="text-3xl text-mist-500 group-hover:text-signal-cyan transition-colors duration-300" />
              <p className="text-sm text-mist-300 text-center px-4">{category}</p>
              <span className="font-mono text-[11px] text-mist-500">
                certificate-placeholder.png
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
