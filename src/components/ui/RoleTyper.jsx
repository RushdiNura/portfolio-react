import { useEffect, useState } from 'react'

const ROLES = ['Software Engineer', 'Website Developer', 'Mobile App Developer']

/**
 * A restrained typewriter effect: types a role, holds, deletes, moves on.
 * No bounce, no glow — just a steady terminal-style cursor.
 */
export default function RoleTyper() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing') // typing | holding | deleting

  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    let timeout

    if (phase === 'typing') {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 55)
      } else {
        timeout = setTimeout(() => setPhase('holding'), 1400)
      }
    } else if (phase === 'holding') {
      timeout = setTimeout(() => setPhase('deleting'), 200)
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 30)
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [text, phase, roleIndex])

  return (
    <span className="font-mono text-signal-cyan">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-signal-cyan align-middle ml-1 animate-caret" />
    </span>
  )
}
