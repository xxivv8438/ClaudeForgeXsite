'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { PORTFOLIO_PROJECTS } from '@/lib/data'
import { formatCurrency } from '@/lib/utils'

const CATEGORIES = ['All', 'Kitchen Remodeling', 'Bathroom Remodeling', 'Exterior', 'Full Renovation', 'Interior']

const UNSPLASH = [
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
]

export default function PortfolioPage() {
  const [active, setActive] = useState('All')
  const [hovered, setHovered] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const filtered = active === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === active)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ backgroundColor: 'var(--forge-black)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{
        position: 'relative', height: '55vh', display: 'flex', alignItems: 'center',
        overflow: 'hidden', marginTop: '80px',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,8,0.85) 0%, rgba(61,35,20,0.6) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--forge-gold)' }}>Selected Work</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, color: 'var(--forge-ivory)', lineHeight: 1.1 }}>
            Our Portfolio
          </h1>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '1.05rem', color: 'rgba(245,237,216,0.65)', marginTop: '1rem', maxWidth: '500px' }}>
            Each project is a testament to precision craftsmanship and uncompromising quality.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div style={{ borderBottom: '1px solid rgba(201,168,76,0.15)', backgroundColor: 'var(--forge-charcoal)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '0', overflowX: 'auto' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                fontFamily: 'var(--font-source-sans), sans-serif',
                fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '1.25rem 1.5rem', background: 'none', border: 'none',
                borderBottom: active === cat ? '2px solid var(--forge-gold)' : '2px solid transparent',
                color: active === cat ? 'var(--forge-gold)' : 'rgba(245,237,216,0.5)',
                cursor: 'pointer', whiteSpace: 'nowrap', transition: 'color 0.25s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div ref={sectionRef} style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ columns: '3', columnGap: '1.5px' }} className="portfolio-grid">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative', overflow: 'hidden', breakInside: 'avoid',
                marginBottom: '1.5px', cursor: 'pointer',
                aspectRatio: i % 3 === 0 ? '3/4' : '4/3',
              }}
            >
              <img
                src={UNSPLASH[i % UNSPLASH.length]}
                alt={project.title}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'sepia(10%) contrast(1.05)',
                  transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                  transform: hovered === project.id ? 'scale(1.06)' : 'scale(1)',
                  display: 'block',
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,8,0.92) 0%, rgba(10,10,8,0.3) 50%, transparent 100%)',
                opacity: hovered === project.id ? 1 : 0,
                transition: 'opacity 0.4s ease',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.75rem',
              }}>
                <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forge-gold)', marginBottom: '0.4rem' }}>
                  {project.category}
                </span>
                <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.35rem', fontWeight: 400, color: 'var(--forge-ivory)', marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', color: 'var(--forge-bronze)' }}>
                    {project.location} · {formatCurrency(project.budget)}
                  </span>
                  <a href={`/portfolio/${project.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--forge-gold)', textDecoration: 'none' }}>
                    View <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
              {/* Always-visible chip */}
              <div style={{
                position: 'absolute', top: '1rem', left: '1rem',
                backgroundColor: 'rgba(10,10,8,0.75)', border: '1px solid rgba(201,168,76,0.3)',
                padding: '0.3rem 0.75rem',
                opacity: hovered === project.id ? 0 : 1, transition: 'opacity 0.3s ease',
              }}>
                <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forge-gold)' }}>
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .portfolio-grid { columns: 2 !important; } }
        @media (max-width: 480px) { .portfolio-grid { columns: 1 !important; } }
      `}</style>
    </div>
  )
}
