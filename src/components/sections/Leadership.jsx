import { motion } from 'framer-motion'
import {
  FiUsers,
  FiCalendar,
  FiMessageCircle,
  FiMic,
  FiTrendingUp,
  FiCheckCircle,
} from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'

const roles = [
  {
    org: 'Cafe Club',
    title: 'Club Leader',
    duration: '3 years',
  },
  {
    org: 'Peace Forum Club',
    title: 'Core Member',
    duration: 'During studies',
  },
]

const outcomes = [
  { icon: FiUsers, label: 'Led teams' },
  { icon: FiCalendar, label: 'Organized events' },
  { icon: FiMessageCircle, label: 'Communicated effectively' },
  { icon: FiMic, label: 'Built public speaking confidence' },
  { icon: FiTrendingUp, label: 'Strengthened leadership' },
  { icon: FiCheckCircle, label: 'Improved teamwork' },
]

export default function Leadership() {
  return (
    <section id="leadership" className="py-28 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="cat leadership.log"
          title="Leadership & soft skills"
          description="Software isn't built alone — these roles at Jimma University shaped how I lead, communicate, and collaborate."
        />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
          {/* Roles */}
          <div className="space-y-5">
            {roles.map((role, index) => (
              <motion.div
                key={role.org}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 1, 0.5, 1] }}
                className="card-surface p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-signal-blue to-signal-cyan" />
                <p className="text-xs font-mono text-signal-cyan/80">{role.duration}</p>
                <h3 className="mt-2 font-display text-lg text-white font-semibold">
                  {role.title}
                </h3>
                <p className="text-mist-400 text-sm mt-1">{role.org}, Jimma University</p>
              </motion.div>
            ))}
          </div>

          {/* Outcomes grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.25, 1, 0.5, 1] }}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 transition-colors duration-300 hover:border-signal-cyan/30 hover:bg-white/[0.04]"
              >
                <outcome.icon className="text-signal-blueSoft text-lg shrink-0" />
                <span className="text-sm text-mist-200">{outcome.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
