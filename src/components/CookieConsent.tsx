'use client'

import { useEffect, useState } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('fg-cookie-consent')) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('fg-cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('fg-cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 800,
      backgroundColor: 'var(--forge-black)',
      borderTop: '1px solid rgba(201,168,76,0.2)',
      padding: '1.25rem 2rem',
      display: 'flex', flexWrap: 'wrap', alignItems: 'center',
      justifyContent: 'space-between', gap: '1rem',
      boxShadow: '0 -8px 40px rgba(0,0,0,0.5)',
      animation: 'cookieSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
    }}>
      <p style={{
        fontFamily: 'var(--font-source-sans), sans-serif',
        fontSize: '0.82rem', lineHeight: 1.65,
        color: 'rgba(245,237,216,0.5)',
        maxWidth: '680px', margin: 0, flex: 1,
      }}>
        We use cookies to improve your experience and analyze site traffic. By continuing, you agree to our{' '}
        <a href="/privacy-policy" style={{ color: 'rgba(201,168,76,0.7)', textDecoration: 'none' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--forge-gold)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(201,168,76,0.7)' }}
        >
          Privacy Policy
        </a>
        .
      </p>

      <div style={{ display: 'flex', gap: '0.6rem', flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            fontFamily: 'var(--font-source-sans), sans-serif',
            fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'rgba(245,237,216,0.4)',
            background: 'none',
            border: '1px solid rgba(201,168,76,0.18)',
            padding: '0.55rem 1.1rem', cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--forge-ivory)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,237,216,0.4)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.18)' }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          style={{
            fontFamily: 'var(--font-source-sans), sans-serif',
            fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--forge-black)',
            backgroundColor: 'var(--forge-gold)',
            border: 'none', padding: '0.55rem 1.4rem', cursor: 'pointer',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--forge-brass)' }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--forge-gold)' }}
        >
          Accept
        </button>
      </div>

      <style>{`
        @keyframes cookieSlideUp {
          from { transform: translateY(100%); opacity: 0 }
          to { transform: translateY(0); opacity: 1 }
        }
      `}</style>
    </div>
  )
}
