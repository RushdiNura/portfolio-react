import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollTop = () =>
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-white/[0.06] bg-ink-950">
      <div className="section-shell py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-white font-medium">
            <span className="text-signal-cyan">&gt;_</span> rushdi.nura
          </p>
          <p className="text-sm text-mist-400 mt-1 font-mono">
            © 2026 Rushdi Nura — Built with React.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/RushdiNura"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-mist-300 hover:text-signal-cyan transition-colors text-lg"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rushdi-rushdinura-7882a52b4/"
            aria-label="LinkedIn"
            className="text-mist-300 hover:text-signal-cyan transition-colors text-lg"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://rushdinurafita@gmail.com"
            aria-label="Email"
            className="text-mist-300 hover:text-signal-cyan transition-colors text-lg"
          >
            <FiMail />
          </a>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="ml-2 grid place-items-center h-9 w-9 rounded-full border border-white/10 text-mist-300 hover:text-signal-cyan hover:border-signal-cyan/60 transition-colors"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
