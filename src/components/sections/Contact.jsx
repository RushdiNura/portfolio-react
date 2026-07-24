import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend, FiCheck } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'

const initialForm = { name: '', email: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.subject.trim()) errors.subject = 'Enter a subject.'
  if (!values.message.trim()) {
    errors.message = 'Enter a message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }
  return errors
}

const contactLinks = [
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/RushdiNura",
    href: "https://github.com/RushdiNura",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/reshad-nura-529222424",
    href: "https://www.linkedin.com/in/reshad-nura-529222424/",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "rushdinurafita@gmail.com",
    href: "https://rushdinurafita@gmail.com",
  },
  { icon: FiMapPin, label: "Location", value: "Ethiopia", href: null },
];

export default function Contact() {
  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (touched[name]) {
      setErrors(validate({ ...values, [name]: value }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validation = validate(values)
    setErrors(validation)
    setTouched({ name: true, email: true, subject: true, message: true })
    if (Object.keys(validation).length === 0) {
      // Wire this up to your form backend or email service of choice.
      setSubmitted(true)
      setValues(initialForm)
      setTouched({})
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  const fieldClass = (name) =>
    `w-full rounded-lg bg-ink-800/70 border px-4 py-3 text-sm text-white placeholder:text-mist-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-signal-cyan/40 ${
      errors[name] && touched[name] ? 'border-red-400/50' : 'border-white/[0.08] focus:border-signal-cyan/50'
    }`

  return (
    <section id="contact" className="py-28 sm:py-32">
      <div className="section-shell grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
        <div>
          <SectionHeading
            eyebrow="curl -X POST /contact"
            title="Let's build something"
            description="Have a project in mind, or just want to say hello? My inbox is open."
          />

          <div className="space-y-4 mt-8">
            {contactLinks.map((link) => (
              <div key={link.label} className="flex items-center gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/[0.04] border border-white/[0.07] text-signal-blueSoft">
                  <link.icon />
                </div>
                <div>
                  <p className="text-xs font-mono text-mist-500">{link.label}</p>
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-sm text-mist-200 hover:text-signal-cyan transition-colors"
                    >
                      {link.value}
                    </a>
                  ) : (
                    <p className="text-sm text-mist-200">{link.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          onSubmit={handleSubmit}
          noValidate
          className="card-surface p-7 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-mist-400 mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your name"
                className={fieldClass('name')}
              />
              {errors.name && touched.name && (
                <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-mist-400 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="you@example.com"
                className={fieldClass('email')}
              />
              {errors.email && touched.email && (
                <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-mono text-mist-400 mb-2">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="What's this about?"
              className={fieldClass('subject')}
            />
            {errors.subject && touched.subject && (
              <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono text-mist-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tell me about your project..."
              className={`${fieldClass('message')} resize-none`}
            />
            {errors.message && touched.message && (
              <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
            {submitted ? (
              <>
                <FiCheck /> Message sent
              </>
            ) : (
              <>
                <FiSend /> Send message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
