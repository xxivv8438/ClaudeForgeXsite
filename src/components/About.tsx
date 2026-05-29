'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { Award, Users, Shield, Wrench } from 'lucide-react'

const BEFORE = 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80'
const AFTER  = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80'

const stats = [
  { icon: Award, value: '20+', label: 'Years of Experience' },
  { icon: Users, value: '38', label: 'Projects Completed' },
  { icon: Shield, value: '100%', label: 'Licensed & Insured' },
  { icon: Wrench, value: 'MD', label: 'Bonded in Maryland' },
]

export default function About() {
  const sectionRef  = useRef<HTMLElement>(null)
  const sliderRef   = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(50)

  /* ── reveal observer ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  /* ── slider logic ── */
  const updatePos = useCallback((clientX: number) => {
    const el = sliderRef.current
    if (!el) return
    const { left, width } = el.getBoundingClientRect()
    setPos(Math.min(Math.max(((clientX - left) / width) * 100, 1), 99))
  }, [])

  const onMouseMove  = (e: React.MouseEvent)  => updatePos(e.clientX)
  const onTouchMove  = (e: React.TouchEvent)  => updatePos(e.touches[0].clientX)

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{ backgroundColor: 'var(--forge-cream)', padding: '7rem 2rem', overflow: 'hidden' }}
    >
      <div className="about-grid" style={{
        maxWidth: '1280px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '5rem', alignItems: 'center',
      }}>

        {/* ── Before / After slider ── */}
        <div className="reveal" style={{ position: 'relative' }}>
          <div
            ref={sliderRef}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            className="about-slider"
            style={{
              position: 'relative', overflow: 'hidden',
              aspectRatio: '4/5', cursor: 'col-resize',
              userSelect: 'none',
            }}
          >
            {/* Before image (base layer) */}
            <img
              src={BEFORE}
              alt="Before renovation"
              draggable={false}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%', objectFit: 'cover',
                filter: 'sepia(20%) contrast(1.02) brightness(0.92)',
                pointerEvents: 'none',
              }}
            />

            {/* After image (clipped from left) */}
            <img
              src={AFTER}
              alt="After renovation"
              draggable={false}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%', objectFit: 'cover',
                filter: 'sepia(8%) contrast(1.06)',
                clipPath: `inset(0 ${100 - pos}% 0 0)`,
                pointerEvents: 'none',
              }}
            />

            {/* Divider line */}
            <div style={{
              position: 'absolute', top: 0, bottom: 0,
              left: `${pos}%`, transform: 'translateX(-50%)',
              width: '2px',
              background: 'linear-gradient(to bottom, transparent 0%, var(--forge-gold) 8%, var(--forge-gold) 92%, transparent 100%)',
              pointerEvents: 'none',
              zIndex: 3,
            }}>
              {/* Handle */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '42px', height: '42px', borderRadius: '50%',
                background: 'rgba(28,25,23,0.92)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '4px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.45)',
                pointerEvents: 'none',
              }}>
                {/* Left arrow */}
                <div style={{
                  width: 0, height: 0,
                  borderTop: '5px solid transparent',
                  borderBottom: '5px solid transparent',
                  borderRight: '6px solid var(--forge-gold)',
                }} />
                {/* Right arrow */}
                <div style={{
                  width: 0, height: 0,
                  borderTop: '5px solid transparent',
                  borderBottom: '5px solid transparent',
                  borderLeft: '6px solid var(--forge-gold)',
                }} />
              </div>
            </div>

            {/* Before label */}
            <div style={{
              position: 'absolute', top: '1rem', left: '1rem',
              background: 'rgba(10,10,8,0.85)',
              padding: '0.3rem 0.75rem',
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(245,237,216,0.65)',
              zIndex: 2, pointerEvents: 'none',
              opacity: pos < 70 ? 1 : 0,
              transition: 'opacity 0.25s ease',
            }}>
              Before
            </div>

            {/* After label */}
            <div style={{
              position: 'absolute', top: '1rem', right: '1rem',
              background: 'rgba(10,10,8,0.85)',
              border: '1px solid rgba(201,168,76,0.3)',
              padding: '0.3rem 0.75rem',
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--forge-gold)',
              zIndex: 2, pointerEvents: 'none',
              opacity: pos > 30 ? 1 : 0,
              transition: 'opacity 0.25s ease',
            }}>
              After
            </div>

            {/* Gold frame accent */}
            <div className="about-frame-accent" />
          </div>

          {/* Est. badge */}
          <div className="about-bbb-badge" style={{
            background: 'rgba(28, 25, 23, 0.92)',
            border: '1px solid rgba(201, 168, 76, 0.35)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            padding: '1.25rem 1.5rem',
            zIndex: 2,
          }}>
            <div style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: '2.25rem', fontWeight: 400,
              color: 'var(--forge-gold)', lineHeight: 1,
            }}>
              2024
            </div>
            <div style={{
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--forge-beige)', marginTop: '0.25rem',
            }}>
              Est. Baltimore, MD
            </div>
          </div>
        </div>

        {/* ── Text side ── */}
        <div>
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ height: '1px', width: '2.5rem', backgroundColor: 'var(--forge-gold)' }} />
            <span style={{
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase',
              color: 'var(--forge-bronze)',
            }}>
              Our Story
            </span>
          </div>

          <h2 className="reveal reveal-delay-1" style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400,
            color: 'var(--forge-charcoal)', lineHeight: 1.2, marginBottom: '1.75rem',
          }}>
            Where Craftsmanship<br />
            <em style={{ fontStyle: 'italic', color: 'var(--forge-walnut)' }}>
              Meets Modern Construction.
            </em>
          </h2>

          <div className="reveal reveal-delay-2" style={{
            width: '3rem', height: '1px',
            background: 'linear-gradient(90deg, var(--forge-brass), var(--forge-gold))',
            marginBottom: '1.75rem',
          }} />

          <p className="reveal reveal-delay-2" style={{
            fontFamily: 'var(--font-source-sans), sans-serif',
            fontSize: '1.05rem', lineHeight: 1.85,
            color: 'rgba(28, 25, 23, 0.75)', marginBottom: '1.25rem',
          }}>
            Forge X was founded on a single belief: every home deserves to be built as if it
            will stand for a century. Established in 2024 and serving the Baltimore metro area,
            our team brings over 20 years of hands-on experience to every project.
          </p>

          <p className="reveal reveal-delay-3" style={{
            fontFamily: 'var(--font-source-sans), sans-serif',
            fontSize: '1.05rem', lineHeight: 1.85,
            color: 'rgba(28, 25, 23, 0.65)', marginBottom: '3rem',
          }}>
            Our team of master tradespeople, architects, and project managers brings
            old-world craftsmanship to every engagement — backed by the precision of modern
            engineering and premium material sourcing from across North America and Europe.
          </p>

          {/* Stats grid */}
          <div className="reveal reveal-delay-4" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem',
            borderTop: '1px solid rgba(201, 168, 76, 0.2)', paddingTop: '2rem',
          }}>
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ marginTop: '0.2rem', color: 'var(--forge-gold)', flexShrink: 0 }}>
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: '1.75rem', fontWeight: 400,
                      color: 'var(--forge-walnut)', lineHeight: 1,
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-source-sans), sans-serif',
                      fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: 'var(--forge-bronze)', marginTop: '0.2rem',
                    }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .about-grid { gap: 3rem !important; }
        }
        @media (max-width: 680px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .about-slider { aspect-ratio: 3/2 !important; }
          .about-bbb-badge { left: 0.5rem !important; bottom: 0.5rem !important; }
        }
      `}</style>
    </section>
  )
}
