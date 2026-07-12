import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

const INITIAL_COUNT = 6

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT)

  return (
    <section id="projects" className="py-28 sm:py-32">
      <div className="section-shell">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-4">
          <SectionHeading
            eyebrow="git log --oneline"
            title="Featured projects"
            description="A selection of what I've shipped across web and mobile — each one built to solve a real, specific problem."
          />
          <a href="https://github.com/RushdiNura" target="_blank" rel="noreferrer" className="btn-ghost mb-12">
            <FiGithub /> All repositories
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {!showAll && projects.length > INITIAL_COUNT && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-mist-400 text-sm mb-4 font-mono">
              + {projects.length - INITIAL_COUNT} more projects completed and counting
            </p>
            <button onClick={() => setShowAll(true)} className="btn-primary">
              Show all projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
