'use client'

import { useEffect, useState, useRef } from 'react'
import { X, Mail } from 'lucide-react'

const DISCOUNT_CODE = 'FORGE5'
const ACCESS_KEY = 'bd8cbfa8-b0da-4871-bd72-dbdf0a9aa055'

export default function EmailPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const shownRef = useRef(false)

  const showPopup = () => {
    if (shownRef.current) return
    if (sessionStorage.getItem('fg-popup-dismissed')) return
    shownRef.current = true
    setVisible(true)
  }

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem('fg-popup-dismissed', '1')
  }

  useEffect(() => {
    if (sessionStorage.getItem('fg-popup-dismissed')) return

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0

    if (isTouch) {
      const timer = setTimeout(showPopup, 3000)
      return () => clearTimeout(timer)
    } else {
      const onMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 5) showPopup()
      }
      document.addEventListener('mouseleave', onMouseLeave)
      return () => document.removeEventListener('mouseleave', onMouseLeave)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email || submitting) return
    setSubmitting(true)
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New Lead — 5% Discount Claimed | Forge X GC`,
          from_name: 'Website Visitor',
          email,
          'Discount Code': DISCOUNT_CODE,
          'Lead Source': 'Exit Intent / Email Popup',
        }),
      })
    } catch {
      // silent — still show success to user
    } finally {
      setSubmitting(false)
      setSubmitted(true)
      setTimeout(dismiss, 3500)
    }
  }

  if (!visible) return null

  return (
    <>
      <div
        onClick={dismiss}
        style={{
          position: 'fixed', inset: 0, zIndex: 900,
          background: 'rgba(0,0,0,0.65)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          animation: 'epFadeIn 0.3s ease',
        }}
      />

      <div style={{
        position: 'fixed', zIndex: 901,
        bottom: 0, left: 0, right: 0,
        maxWidth: '500px', margin: '0 auto',
        backgroundColor: 'var(--forge-charcoal)',
        borderTop: '2px solid var(--forge-gold)',
        borderLeft: '1px solid rgba(201,168,76,0.25)',
        borderRight: '1px solid rgba(201,168,76,0.25)',
        padding: '2.5rem 2rem 2.25rem',
        animation: 'epSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <button
          onClick={dismiss}
          aria-label="Close"
          style={{
            position: 'absolute', top: '1rem', right: '1rem',
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'rgba(245,237,216,0.3)',
            display: 'flex', padding: '0.25rem',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--forge-ivory)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,237,216,0.3)' }}
        >
          <X size={16} />
        </button>

        {!submitted ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ height: '1px', width: '2rem', backgroundColor: 'var(--forge-gold)' }} />
              <span style={{
                fontFamily: 'var(--font-source-sans), sans-serif',
                fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--forge-gold)',
              }}>
                Exclusive Offer
              </span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(1.6rem, 4vw, 2.1rem)', fontWeight: 400,
              color: 'var(--forge-ivory)', lineHeight: 1.15, marginBottom: '0.65rem',
            }}>
              Before You Go — Take 5% Off
            </h2>

            <p style={{
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.875rem', lineHeight: 1.7,
              color: 'rgba(245,237,216,0.5)', marginBottom: '1.5rem',
            }}>
              Enter your email and we&rsquo;ll send you a 5% discount on your first Forge X project estimate.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '200px', position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Mail size={13} color="rgba(201,168,76,0.45)" style={{ position: 'absolute', left: '0.75rem', pointerEvents: 'none' }} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  style={{
                    width: '100%', paddingLeft: '2.25rem', paddingRight: '0.75rem',
                    paddingTop: '0.72rem', paddingBottom: '0.72rem',
                    fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.875rem',
                    backgroundColor: 'rgba(245,237,216,0.05)',
                    border: '1px solid rgba(201,168,76,0.22)',
                    color: 'var(--forge-ivory)', outline: 'none', boxSizing: 'border-box',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.22)' }}
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                style={{
                  fontFamily: 'var(--font-source-sans), sans-serif',
                  fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  backgroundColor: 'var(--forge-gold)', color: 'var(--forge-black)',
                  border: 'none', cursor: submitting ? 'default' : 'pointer',
                  padding: '0.72rem 1.5rem', whiteSpace: 'nowrap',
                  transition: 'background-color 0.2s ease',
                  opacity: submitting ? 0.7 : 1,
                }}
                onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = 'var(--forge-brass)' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--forge-gold)' }}
              >
                {submitting ? 'Sending...' : 'Claim 5% Off'}
              </button>
            </form>

            <p style={{
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.65rem', color: 'rgba(245,237,216,0.2)',
              marginTop: '0.85rem',
            }}>
              No spam. Unsubscribe anytime. Valid on new estimates only.
            </p>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '0.75rem 0' }}>
            <div style={{ height: '1px', width: '2.5rem', backgroundColor: 'var(--forge-gold)', margin: '0 auto 1.5rem' }} />
            <h2 style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: '1.9rem', fontWeight: 400,
              color: 'var(--forge-ivory)', marginBottom: '0.65rem',
            }}>
              Your discount is on the way.
            </h2>
            <p style={{
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.875rem', color: 'rgba(245,237,216,0.5)',
              marginBottom: '1.25rem', lineHeight: 1.65,
            }}>
              Use code below when booking your estimate with Forge X.
            </p>
            <div style={{
              display: 'inline-block',
              border: '1px solid rgba(201,168,76,0.4)',
              padding: '0.6rem 1.75rem',
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.2em',
              color: 'var(--forge-gold)',
            }}>
              {DISCOUNT_CODE}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes epFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes epSlideUp { from { transform: translateY(110%) } to { transform: translateY(0) } }
      `}</style>
    </>
  )
}
