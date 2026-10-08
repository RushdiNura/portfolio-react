// import { motion } from 'framer-motion'
// import { FiGithub, FiExternalLink } from 'react-icons/fi'

// export default function ProjectCard({ project, index }) {
//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.25, 1, 0.5, 1] }}
//       className="card-surface group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-signal-blue/30"
//     >
//       {/* Image placeholder rendered as an abstract, code-inspired pattern rather than a stock photo */}
//       <div className="relative h-40 border-b border-white/[0.06] bg-ink-700/60 overflow-hidden">
//         <div
//           className="absolute inset-0 opacity-40"
//           style={{
//             backgroundImage:
//               'repeating-linear-gradient(135deg, rgba(37,99,235,0.18) 0px, rgba(37,99,235,0.18) 1px, transparent 1px, transparent 14px)',
//           }}
//         />
//         <span className="absolute bottom-3 left-4 font-mono text-[11px] text-mist-400">
//           /projects/{project.id}
//         </span>
//       </div>

//       <div className="p-6 flex flex-col flex-1">
//         <h3 className="font-display text-lg text-white font-semibold">{project.name}</h3>
//         <p className="mt-1 text-xs font-mono text-signal-cyan/80">{project.tagline}</p>
//         <p className="mt-3 text-sm text-mist-400 leading-relaxed flex-1">
//           {project.description}
//         </p>

//         <div className="mt-5 flex flex-wrap gap-2">
//           {project.tech.map((t) => (
//             <span key={t} className="tag-chip">
//               {t}
//             </span>
//           ))}
//         </div>

//         <div className="mt-6 flex items-center gap-4 pt-4 border-t border-white/[0.06]">
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noreferrer"
//             className="underline-link inline-flex items-center gap-1.5 text-sm"
//           >
//             <FiGithub /> Code
//           </a>
//           <a
//             href={project.demo}
//             target="_blank"
//             rel="noreferrer"
//             className="underline-link inline-flex items-center gap-1.5 text-sm"
//           >
//             <FiExternalLink /> Live demo
//           </a>
//         </div>
//       </div>
//     </motion.article>
//   )
// }

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { getProjectImage } from "../../utils/images";

export default function ProjectCard({ project, index }) {
  const image = getProjectImage(project.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
        ease: [0.25, 1, 0.5, 1],
      }}
      className="card-surface group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-signal-blue/30"
    >
      <div className="relative h-44 border-b border-white/[0.06] bg-ink-700/60 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(37,99,235,0.18) 0px, rgba(37,99,235,0.18) 1px, transparent 1px, transparent 14px)",
              }}
            />
            <span className="absolute bottom-3 left-4 font-mono text-[11px] text-mist-400">
              /projects/{project.id}
            </span>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg text-white font-semibold">
          {project.name}
        </h3>
        <p className="mt-1 text-xs font-mono text-signal-cyan/80">
          {project.tagline}
        </p>
        <p className="mt-3 text-sm text-mist-400 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tag-chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 pt-4 border-t border-white/[0.06]">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="underline-link inline-flex items-center gap-1.5 text-sm"
          >
            <FiGithub /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="underline-link inline-flex items-center gap-1.5 text-sm"
          >
            <FiExternalLink /> Live demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}