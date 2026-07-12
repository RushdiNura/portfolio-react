import { motion } from 'framer-motion'
import { FiCode, FiSmartphone, FiCompass } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'

const focusAreas = [
  {
    icon: FiCode,
    title: 'Website Development',
    description:
      'Building responsive, performant interfaces and the APIs that power them, from first component to production.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Application Development',
    description:
      'Designing and shipping cross-platform mobile apps with Flutter, focused on smooth, native-feeling interactions.',
  },
  {
    icon: FiCompass,
    title: 'Continuous Learning',
    description:
      'Deepening my knowledge of software architecture, backend systems, and UI/UX with every project I take on.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-32">
      <div className="section-shell grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="cat about.md" title="A little about me" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
            className="space-y-5 text-mist-300 leading-relaxed"
          >
            <p>
              I graduated with a degree in Software Engineering from{' '}
              <span className="text-white font-medium">Jimma University</span>, where I
              built the foundation for how I approach building software today.
            </p>
            <p>
              I specialize in{' '}
              <span className="text-signal-cyan">website development</span> and{' '}
              <span className="text-signal-cyan">mobile application development</span>,
              and I enjoy building practical software solutions that solve real-world
              problems for the people who use them.
            </p>
            <p>
              I continuously invest in my craft — deepening my understanding of
              software engineering, backend development, frontend technologies,
              mobile development, UI/UX, and software architecture, one project at a
              time.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-5 content-start">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="card-surface p-6 flex items-start gap-4 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-signal-blue/10 text-signal-blueSoft border border-signal-blue/20">
                <area.icon className="text-lg" />
              </div>
              <div>
                <h3 className="font-display text-white font-medium">{area.title}</h3>
                <p className="mt-1.5 text-sm text-mist-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
