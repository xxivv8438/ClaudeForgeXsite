'use client'

import { useEffect } from 'react'

export default function RevealInit() {
  useEffect(() => {
    document.body.classList.add('reveal-ready')
    return () => document.body.classList.remove('reveal-ready')
  }, [])
  return null
}
