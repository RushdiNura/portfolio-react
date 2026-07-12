import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { skillGroups } from '../../data/skills'

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(skillGroups[0].id)
  const group = skillGroups.find((g) => g.id === activeGroup)

  return (
    <section id="skills" className="py-28 sm:py-32 bg-ink-950/40">
      <div className="section-shell">
        <SectionHeading
          eyebrow="ls ./skills"
          title="What I work with"
          description="A stack I've picked deliberately for shipping maintainable products end to end — from interface to database."
        />

        {/* Tabs styled like open editor tabs */}
        <div className="flex flex-wrap gap-1 border-b border-white/[0.07] mb-10">
          {skillGroups.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveGroup(g.id)}
              className={`relative px-4 py-3 font-mono text-xs sm:text-sm transition-colors duration-300 ${
                activeGroup === g.id ? 'text-white' : 'text-mist-400 hover:text-mist-200'
              }`}
            >
              {g.label}
              {activeGroup === g.id && (
                <motion.span
                  layoutId="skills-tab-underline"
                  className="absolute left-0 right-0 -bottom-px h-[2px] bg-signal-cyan"
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                />
              )}
            </button>
          ))}
        </div>

        <p className="path-label mb-6">{group.path}</p>

        <AnimatePresence mode="wait">
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {group.items.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card-surface p-5 group transition-transform duration-300 hover:-translate-y-1 hover:border-signal-cyan/30"
              >
                <skill.icon className="text-2xl text-mist-200 group-hover:text-signal-cyan transition-colors duration-300" />
                <p className="mt-4 font-medium text-white text-sm">{skill.name}</p>
                <div className="mt-3 h-1 w-full rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.05, ease: [0.25, 1, 0.5, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-signal-blue to-signal-cyan"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
