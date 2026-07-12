import { motion } from 'framer-motion'
import { FiCode, FiServer, FiSmartphone } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'

const milestones = [
  {
    when: 'Jimma University',
    title: 'B.Sc. in Software Engineering',
    description:
      'Built a foundation in software design, data structures, and engineering practice — and took on leadership roles alongside the coursework.',
  },
  {
    when: 'Present',
    title: 'Software Engineer',
    description:
      'Focused on creating scalable applications using modern technologies, working across the full stack and into mobile.',
    tracks: [
      { icon: FiCode, label: 'Frontend Development' },
      { icon: FiServer, label: 'Backend Development' },
      { icon: FiSmartphone, label: 'Mobile Development' },
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 sm:py-32 bg-ink-950/40">
      <div className="section-shell">
        <SectionHeading
          eyebrow="git log --graph --all"
          title="Experience"
          description="How my time at university turned into a focused engineering practice."
        />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-signal-blue/60 via-white/10 to-transparent" />

          <div className="space-y-14">
            {milestones.map((m, index) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
                className="relative"
              >
                <span className="absolute -left-8 sm:-left-10 top-1.5 h-3.5 w-3.5 rounded-full bg-ink-900 border-2 border-signal-cyan" />
                <p className="path-label mb-2">{m.when}</p>
                <h3 className="font-display text-xl text-white font-semibold">{m.title}</h3>
                <p className="mt-2 max-w-2xl text-mist-400 leading-relaxed">
                  {m.description}
                </p>

                {m.tracks && (
                  <div className="mt-5 grid sm:grid-cols-3 gap-4 max-w-2xl">
                    {m.tracks.map((t) => (
                      <div
                        key={t.label}
                        className="card-surface p-4 flex items-center gap-3"
                      >
                        <t.icon className="text-signal-blueSoft text-lg shrink-0" />
                        <span className="text-sm text-mist-200">{t.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
