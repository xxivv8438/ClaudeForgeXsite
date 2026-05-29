'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We begin with an in-depth discovery session at your property — listening to your vision, understanding your lifestyle, and assessing structural realities.',
  },
  {
    number: '02',
    title: 'Design & Planning',
    description:
      'Our architects and designers translate your vision into detailed blueprints, 3D renderings, and a precise material specification with transparent pricing.',
  },
  {
    number: '03',
    title: 'Master Craftsmanship',
    description:
      'Our vetted master tradespeople execute every phase with exacting standards. You receive weekly progress reports and have direct access to your project manager.',
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description:
      'We conduct a meticulous punch-list inspection before handover. Your home receives a 5-year workmanship warranty — because we build to last.',
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="process"
      style={{
        backgroundColor: 'var(--forge-black)',
        padding: '7rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative vertical line */}
      <div
        aria-hidden
        className="process-vertical-line"
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '1px',
          background:
            'linear-gradient(to bottom, transparent, rgba(201,168,76,0.12) 20%, rgba(201,168,76,0.12) 80%, transparent)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '1.25rem',
            }}
          >
            <div style={{ height: '1px', width: '2.5rem', backgroundColor: 'var(--forge-gold)' }} />
            <span
              style={{
                fontFamily: 'var(--font-source-sans), sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--forge-gold)',
              }}
            >
              How We Work
            </span>
            <div style={{ height: '1px', width: '2.5rem', backgroundColor: 'var(--forge-gold)' }} />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
              fontWeight: 400,
              color: 'var(--forge-ivory)',
              lineHeight: 1.15,
            }}
          >
            Our Process
          </h2>
        </div>

        {/* Steps */}
        <div
          className="process-steps-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '0',
            position: 'relative',
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                padding: '2.5rem 2rem',
                borderLeft: i > 0 ? '1px solid rgba(201, 168, 76, 0.14)' : 'none',
                borderTop: '1px solid rgba(201, 168, 76, 0.08)',
                borderRight: '1px solid rgba(201, 168, 76, 0.06)',
                borderBottom: '1px solid rgba(201, 168, 76, 0.08)',
                background: 'rgba(28, 25, 23, 0.42)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                position: 'relative',
                transition: 'background 0.3s ease, border-color 0.3s ease',
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: '4.5rem',
                  fontWeight: 300,
                  lineHeight: 1,
                  color: 'rgba(255, 255, 255, 0.55)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {step.number}
              </div>

              {/* Gold accent */}
              <div
                style={{
                  width: '2rem',
                  height: '1px',
                  backgroundColor: 'var(--forge-gold)',
                  marginBottom: '1.25rem',
                }}
              />

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: 'var(--forge-ivory)',
                  marginBottom: '0.85rem',
                  lineHeight: 1.25,
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-source-sans), sans-serif',
                  fontSize: '0.9rem',
                  lineHeight: 1.8,
                  color: 'rgba(245, 237, 216, 0.55)',
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .process-steps-grid { grid-template-columns: 1fr !important; }
          .process-steps-grid > div { border-left: none !important; border-top: 1px solid rgba(201,168,76,0.1) !important; }
        }
      `}</style>
    </section>
  )
}
