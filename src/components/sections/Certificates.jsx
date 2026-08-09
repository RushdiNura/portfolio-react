// import { motion } from 'framer-motion'
// import { FiAward } from 'react-icons/fi'
// import SectionHeading from '../ui/SectionHeading'

// const categories = [
//   'Leadership',
//   'Training',
//   'Workshops',
//   'University activities',
//   'Peace Forum participation',
//   'Cafe Club leadership',
// ]

// export default function Certificates() {
//   return (
//     <section id="certificates" className="py-28 sm:py-32 bg-ink-950/40">
//       <div className="section-shell">
//         <SectionHeading
//           eyebrow="ls ./certificates"
//           title="Certificates"
//           description="Earned through leadership, training, workshops, and university activities. Add your certificate images here as you collect them."
//         />

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {categories.map((category, index) => (
//             <motion.div
//               key={category}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.4 }}
//               transition={{ duration: 0.45, delay: index * 0.07, ease: [0.25, 1, 0.5, 1] }}
//               className="group relative aspect-[4/3] rounded-2xl border border-dashed border-white/[0.14] bg-white/[0.02] flex flex-col items-center justify-center gap-3 transition-colors duration-300 hover:border-signal-cyan/40 hover:bg-white/[0.04]"
//             >
//               <FiAward className="text-3xl text-mist-500 group-hover:text-signal-cyan transition-colors duration-300" />
//               <p className="text-sm text-mist-300 text-center px-4">{category}</p>
//               <span className="font-mono text-[11px] text-mist-500">
//                 certificate-placeholder.png
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


// Second
/*
import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import { getCertificateImages } from "../../utils/images";
import { useState } from "react";

const placeholderCategories = [
  "Leadership",
  "Training",
  "Workshops",
  "University activities",
  "Peace Forum participation",
  "Cafe Club leadership",
];



export default function Certificates() {
  const certificates = getCertificateImages();
  const hasImages = certificates.length > 0;

  
  return (
    <section id="certificates" className="py-28 sm:py-32 bg-ink-950/40">
      <div className="section-shell">
        <SectionHeading
          eyebrow="ls ./certificates"
          title="Certificates"
          description="Earned through leadership, training, workshops, and university activities."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hasImages
            ? certificates.map((cert, index) => (
                <motion.div
                  key={cert.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08]"
                >
                  <img
                    src={cert.src}
                    alt={cert.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 to-transparent p-4">
                    <p className="text-sm text-white">{cert.title}</p>
                  </div>
                </motion.div>
              ))
            : placeholderCategories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="group relative aspect-[4/3] rounded-2xl border border-dashed border-white/[0.14] bg-white/[0.02] flex flex-col items-center justify-center gap-3"
                >
                  <FiAward className="text-3xl text-mist-500 group-hover:text-signal-cyan transition-colors duration-300" />
                  <p className="text-sm text-mist-300 text-center px-4">
                    {category}
                  </p>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}
*/



import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import { getCertificateImages } from "../../utils/images";
import { useState } from "react";

const placeholderCategories = [
  "Leadership",
  "Training",
  "Workshops",
  "University activities",
  "Peace Forum participation",
  "Cafe Club leadership",
];

const INITIAL_COUNT = 6;

export default function Certificates() {
  const certificates = getCertificateImages();
  const hasImages = certificates.length > 0;

  const [showAll, setShowAll] = useState(false)
  const visibleCertificates = showAll ? certificates : certificates.slice(0, INITIAL_COUNT)
  
  
  return (
    <section id="certificates" className="py-28 sm:py-32 bg-ink-950/40">
      <div className="section-shell">
        <SectionHeading
          eyebrow="ls ./certificates"
          title="Certificates"
          description="Earned through leadership, training, workshops, and university activities."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hasImages
            ? visibleCertificates.map((cert, index) => (
                <motion.div
                  key={cert.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08]"
                >
                  <img
                    src={cert.src}
                    alt={cert.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 to-transparent p-4">
                    <p className="text-sm text-white">{cert.title}</p>
                  </div>
                </motion.div>
              ))
            : placeholderCategories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="group relative aspect-[4/3] rounded-2xl border border-dashed border-white/[0.14] bg-white/[0.02] flex flex-col items-center justify-center gap-3"
                >
                  <FiAward className="text-3xl text-mist-500 group-hover:text-signal-cyan transition-colors duration-300" />
                  <p className="text-sm text-mist-300 text-center px-4">
                    {category}
                  </p>
                </motion.div>
              ))}

          {!showAll && certificates.length > INITIAL_COUNT && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-mist-400 text-sm mb-4 font-mono">
                + {certificates.length - INITIAL_COUNT} more certificates earned and counting
              </p>
              <button onClick={() => setShowAll(true)} className="btn-primary">
                Show all projects
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
