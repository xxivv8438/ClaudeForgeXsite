'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const { scrollY, innerHeight } = window
      const { scrollHeight } = document.documentElement
      const max = scrollHeight - innerHeight
      setProgress(max > 0 ? (scrollY / max) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        width: `${progress}%`,
        background: 'linear-gradient(90deg, var(--forge-gold), var(--forge-brass))',
        zIndex: 9999,
        pointerEvents: 'none',
        transition: 'width 0.08s linear',
      }}
    />
  )
}
