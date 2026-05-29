'use client'

import { ShuffleCards } from '@/components/ui/testimonial-cards'
import { TESTIMONIALS } from '@/data/testimonials'

const SHUFFLE_TESTIMONIALS = TESTIMONIALS.slice(0, 3).map((t, i) => ({
  id: i + 1,
  testimonial: t.quote,
  author: t.name,
  service: `${t.service} · ${t.location}`,
}))

export default function TestimonialsShuffleSection() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--forge-black) 0%, var(--forge-charcoal) 100%)',
      borderTop: '1px solid rgba(201,168,76,0.1)',
      borderBottom: '1px solid rgba(201,168,76,0.1)',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '7rem 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
      }}
        className="shuffle-grid"
      >
        {/* Left copy */}
        <div>
          <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', marginBottom: '2rem' }} />
          <h2 style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 300,
            color: 'var(--forge-ivory)',
            lineHeight: 1.2,
            marginBottom: '1.5rem',
          }}>
            Heard Directly<br />
            <em style={{ color: 'var(--forge-gold)', fontStyle: 'italic' }}>From Our Clients.</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-source-sans), sans-serif',
            fontSize: '0.95rem',
            lineHeight: 1.8,
            color: 'rgba(245,237,216,0.55)',
            maxWidth: '420px',
            marginBottom: '2rem',
          }}>
            Drag the card to browse client perspectives. Every word is unedited and comes from a real project conclusion.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ height: '1px', width: '1.5rem', backgroundColor: 'var(--forge-gold)', opacity: 0.5 }} />
            <span style={{
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.45)',
            }}>
              Swipe or drag to browse
            </span>
          </div>
        </div>

        {/* Right cards */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '460px',
        }}>
          <ShuffleCards testimonials={SHUFFLE_TESTIMONIALS} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .shuffle-grid { grid-template-columns: 1fr !important; }
          .shuffle-grid > div:last-child { justify-content: flex-start !important; min-height: 460px; }
        }
      `}</style>
    </section>
  )
}
