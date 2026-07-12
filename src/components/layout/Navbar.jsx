import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { useActiveSection } from '../../hooks/useActiveSection'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { activeId, scrolled } = useActiveSection(LINKS.map((l) => l.id))

  const handleNavClick = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-900/85 backdrop-blur-md border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="section-shell flex items-center justify-between">
        <button
          onClick={() => handleNavClick('home')}
          className="font-display text-lg font-semibold tracking-tight text-white"
          aria-label="Go to home section"
        >
          <span className="text-signal-cyan">&gt;_</span> rushdi<span className="text-signal-blueSoft">.</span>nura
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`font-mono text-[13px] tracking-wide transition-colors duration-300 ${
                  activeId === link.id
                    ? 'text-signal-cyan'
                    : 'text-mist-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNavClick('contact')}
          className="hidden lg:inline-flex btn-ghost !py-2 !px-4 text-xs"
        >
          Let&rsquo;s talk
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-mist-100 text-2xl p-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="lg:hidden overflow-hidden border-t border-white/[0.06] bg-ink-900/95 backdrop-blur-md"
          >
            <ul className="section-shell flex flex-col py-4">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left py-3 font-mono text-sm border-b border-white/[0.04] ${
                      activeId === link.id ? 'text-signal-cyan' : 'text-mist-200'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
