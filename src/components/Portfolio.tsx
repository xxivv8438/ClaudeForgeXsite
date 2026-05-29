'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Highland Estate Kitchen',
    category: 'Kitchen Remodel',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    span: 'tall',
  },
  {
    title: 'Marble Spa Retreat',
    category: 'Bathroom Renovation',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    span: 'normal',
  },
  {
    title: 'Modern Craftsman Exterior',
    category: 'Full Exterior',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    span: 'normal',
  },
  {
    title: 'Walnut & Stone Living Room',
    category: 'Interior Renovation',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
    span: 'tall',
  },
  {
    title: 'Heritage Addition',
    category: 'Home Addition',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    span: 'normal',
  },
  {
    title: 'Workshop Studio Build',
    category: 'Custom Build',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    span: 'normal',
  },
]

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      style={{
        backgroundColor: 'var(--forge-black)',
        padding: '7rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3.5rem',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
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
                Selected Work
              </span>
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
              Our Portfolio
            </h2>
          </div>
          <a
            href="#contact"
            style={{
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--forge-gold)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              borderBottom: '1px solid rgba(201, 168, 76, 0.35)',
              paddingBottom: '2px',
              transition: 'color 0.25s ease',
            }}
          >
            View All Projects
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Masonry-style grid */}
        <div
          style={{
            columns: '2',
            columnGap: '1.5px',
            display: 'block',
          }}
          className="portfolio-grid"
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                breakInside: 'avoid',
                marginBottom: '1.5px',
                cursor: 'pointer',
                aspectRatio: project.span === 'tall' ? '3/4' : '4/3',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'sepia(10%) contrast(1.05)',
                  transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: hovered === i ? 'scale(1.06)' : 'scale(1)',
                  display: 'block',
                }}
              />

              {/* Hover overlay — gradient only */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(10,10,8,0.75) 0%, rgba(10,10,8,0.15) 55%, transparent 100%)',
                  opacity: hovered === i ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                }}
              />

              {/* Hover text — no box, floats over gradient */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  opacity: hovered === i ? 1 : 0,
                  transform: hovered === i ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'opacity 0.35s ease, transform 0.35s ease',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-source-sans), sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--forge-gold)',
                    display: 'block',
                    marginBottom: '0.3rem',
                  }}
                >
                  {project.category}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: '1.3rem',
                    fontWeight: 400,
                    color: 'var(--forge-ivory)',
                    marginBottom: '0.6rem',
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-source-sans), sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--forge-gold)',
                  }}
                >
                  View Project <ArrowUpRight size={11} />
                </div>
              </div>

              {/* Always-visible category chip */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(10, 10, 8, 0.55)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(201, 168, 76, 0.35)',
                  padding: '0.3rem 0.75rem',
                  opacity: hovered === i ? 0 : 1,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-source-sans), sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--forge-gold)',
                  }}
                >
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .portfolio-grid {
            columns: 1 !important;
          }
        }
      `}</style>
    </section>
  )
}
