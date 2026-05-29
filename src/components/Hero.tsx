'use client'

import { useEffect, useRef } from 'react'

function getBookingSeason(): string {
  const m = new Date().getMonth()
  const y = new Date().getFullYear()
  if (m <= 1) return `Spring ${y}`
  if (m <= 4) return `Summer ${y}`
  if (m <= 7) return `Fall ${y}`
  if (m <= 10) return `Winter ${y + 1}`
  return `Spring ${y + 1}`
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const reveals = el.querySelectorAll('.reveal')
    const timer = setTimeout(() => {
      reveals.forEach((r, i) => {
        setTimeout(() => r.classList.add('revealed'), i * 150)
      })
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="grain-overlay"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'var(--forge-black)',
      }}
    >
      {/* Background image with slow zoom */}
      <div
        className="animate-hero-zoom"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transformOrigin: 'center center',
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(10,10,8,0.82) 0%, rgba(28,25,23,0.72) 50%, rgba(61,35,20,0.55) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Est. badge */}
        <div
          className="reveal"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2.5rem',
          }}
        >
          <div
            style={{
              width: '2.5rem',
              height: '1px',
              backgroundColor: 'var(--forge-gold)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: '0.85rem',
              fontStyle: 'italic',
              letterSpacing: '0.25em',
              color: 'var(--forge-gold)',
              textTransform: 'uppercase',
            }}
          >
            Est. 2024
          </span>
          <div
            style={{
              width: '2.5rem',
              height: '1px',
              backgroundColor: 'var(--forge-gold)',
            }}
          />
        </div>

        {/* Main headline */}
        <h1
          className="reveal reveal-delay-1"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: 'var(--forge-ivory)',
            maxWidth: '900px',
            marginBottom: '1.75rem',
          }}
        >
          Built With Precision.
          <br />
          <em
            style={{
              fontStyle: 'italic',
              color: 'var(--forge-gold)',
            }}
          >
            Designed To Last.
          </em>
        </h1>

        {/* Subheadline */}
        <p
          className="reveal reveal-delay-2"
          style={{
            fontFamily: 'var(--font-source-sans), sans-serif',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: 300,
            lineHeight: 1.8,
            color: 'rgba(245, 237, 216, 0.8)',
            maxWidth: '560px',
            marginBottom: '3rem',
          }}
        >
          Luxury renovations and contracting services crafted with timeless
          workmanship and modern excellence. Every project, a legacy.
        </p>

        {/* Booking status badge */}
        <div
          className="reveal reveal-delay-2"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem', padding: '0.4rem 1rem', border: '1px solid rgba(201,168,76,0.25)', backgroundColor: 'rgba(201,168,76,0.05)' }}
        >
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#4ade80', flexShrink: 0, animation: 'pulseDot 2s ease-in-out infinite' }} />
          <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.6)' }}>
            Now Booking · {getBookingSeason()}
          </span>
        </div>

        {/* CTA buttons */}
        <div
          className="reveal reveal-delay-3 hero-cta-buttons"
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <a
            href="/request-estimate"
            style={{
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--forge-black)',
              backgroundColor: 'var(--forge-gold)',
              padding: '1rem 2.5rem',
              textDecoration: 'none',
              transition: 'background-color 0.25s ease, transform 0.25s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--forge-brass)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--forge-gold)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Request Estimate
          </a>
          <a
            href="#portfolio"
            style={{
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.8rem',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--forge-ivory)',
              border: '1px solid rgba(245, 237, 216, 0.45)',
              padding: '1rem 2.5rem',
              textDecoration: 'none',
              transition: 'border-color 0.25s ease, color 0.25s ease, transform 0.25s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--forge-gold)'
              e.currentTarget.style.color = 'var(--forge-gold)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(245, 237, 216, 0.45)'
              e.currentTarget.style.color = 'var(--forge-ivory)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            View Our Work
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="reveal reveal-delay-4 hero-stats"
          style={{
            display: 'flex',
            gap: '3rem',
            marginTop: '5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(201, 168, 76, 0.2)',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '38', label: 'Projects Completed' },
            { value: '20+', label: 'Years of Experience' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: 'MD', label: 'Licensed & Insured' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: '2.25rem',
                  fontWeight: 400,
                  color: 'var(--forge-gold)',
                  lineHeight: 1,
                  marginBottom: '0.35rem',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-source-sans), sans-serif',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(245, 237, 216, 0.55)',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll-indicator"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: '2rem',
          zIndex: 2,
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-source-sans), sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(245, 237, 216, 0.4)',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '3rem',
            background: 'linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)',
          }}
        />
      </div>
    </section>
  )
}
