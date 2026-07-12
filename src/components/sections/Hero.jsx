import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload } from 'react-icons/fi'
import RoleTyper from '../ui/RoleTyper'
import cvFile from "../../assets/Rushdi-Nura-CV.pdf";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Subtle code-editor dot grid, not a glow orb */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p variants={item} className="path-label mb-6">
            <span className="text-signal-blueSoft">$</span> whoami
          </motion.p>

          <motion.p variants={item} className="text-mist-300 text-lg mb-2">
            Hello, I&rsquo;m
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white"
          >
            Rushdi Nura
          </motion.h1>

          <motion.div variants={item} className="mt-5 h-8 text-xl sm:text-2xl font-medium">
            <RoleTyper />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-mist-300 text-base sm:text-lg leading-relaxed"
          >
            I build scalable web applications and modern mobile apps with clean
            architecture, intuitive user experiences, and maintainable code.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a href={cvFile} download="Rushdi-Nura-CV.pdf" className="btn-primary">
              <FiDownload /> Download CV
            </a>
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-ghost"
            >
              View Projects <FiArrowDown className="text-sm" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-mist-400"
      >
        <span className="font-mono text-[11px] tracking-widest uppercase">scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-mist-400 to-transparent" />
      </motion.div>
    </section>
  )
}
