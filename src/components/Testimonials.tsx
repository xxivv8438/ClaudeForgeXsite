'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { FEATURED_TESTIMONIALS, getInitials, type Testimonial } from '@/data/testimonials'
import { supabase } from '@/lib/supabase'

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [items, setItems] = useState<Testimonial[]>(FEATURED_TESTIMONIALS)

  useEffect(() => {
    supabase
      .from('testimonials')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (error) console.error('[Testimonials] Supabase error:', error)
        if (data && data.length > 0) {
          const live: Testimonial[] = data.map(t => ({
            id: t.id,
            name: t.name,
            location: t.location,
            project: t.project || '',
            service: t.service,
            quote: t.quote,
            rating: t.rating,
            photoUrl: t.photo_url || undefined,
            featured: true,
          }))
          setItems([...live, ...FEATURED_TESTIMONIALS].slice(0, 6))
        }
      })
  }, [])

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
  }, [items])

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      style={{
        backgroundColor: 'var(--forge-charcoal)',
        padding: '7rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background quote */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-cormorant), serif',
          fontSize: '20rem',
          fontWeight: 300,
          color: 'rgba(201, 168, 76, 0.04)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        &ldquo;
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ height: '1px', width: '2.5rem', backgroundColor: 'var(--forge-gold)' }} />
            <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--forge-gold)' }}>
              Client Stories
            </span>
            <div style={{ height: '1px', width: '2.5rem', backgroundColor: 'var(--forge-gold)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 400, color: 'var(--forge-ivory)', lineHeight: 1.15 }}>
            Built on Trust
          </h2>
        </div>

        {/* Testimonial cards */}
        <div
          className="testimonials-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px', backgroundColor: 'rgba(201, 168, 76, 0.08)' }}
        >
          {items.map((t, i) => (
            <div
              key={t.id}
              className={`reveal reveal-delay-${i + 1}`}
              style={{ backgroundColor: 'var(--forge-black)', padding: '3rem 2.5rem', position: 'relative', display: 'flex', flexDirection: 'column' }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '1.5rem' }}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={13} fill="var(--forge-gold)" color="var(--forge-gold)" />
                ))}
              </div>

              {/* Gold open quote */}
              <div
                style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '5rem', lineHeight: 0.6, color: 'var(--forge-gold)', marginBottom: '1.25rem', userSelect: 'none' }}
                aria-hidden
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.2rem', fontStyle: 'italic', lineHeight: 1.7, color: 'rgba(245, 237, 216, 0.85)', flex: 1, marginBottom: '2rem' }}>
                {t.quote}
              </p>

              {/* Attribution with profile photo */}
              <div style={{ borderTop: '1px solid rgba(201, 168, 76, 0.18)', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                {/* Avatar */}
                {t.photoUrl ? (
                  <img
                    src={t.photoUrl}
                    alt={t.name}
                    style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(201,168,76,0.3)', flexShrink: 0 }}
                  />
                ) : (
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%', flexShrink: 0,
                    backgroundColor: 'rgba(201,168,76,0.12)',
                    border: '1px solid rgba(201,168,76,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: '0.9rem', fontWeight: 600, color: 'var(--forge-gold)',
                    letterSpacing: '0.05em',
                  }}>
                    {getInitials(t.name)}
                  </div>
                )}
                <div>
                  <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--forge-ivory)', marginBottom: '0.2rem' }}>
                    {t.name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--forge-bronze)' }}>
                    {t.location} · {t.project}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginTop: '3.5rem' }}>
          <Link
            href="/testimonials"
            style={{
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(245,237,216,0.55)',
              border: '1px solid rgba(201,168,76,0.2)',
              padding: '0.75rem 1.5rem', textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--forge-ivory)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,237,216,0.55)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)' }}
          >
            Read All Reviews
          </Link>
          <Link
            href="/submit-testimonial"
            style={{
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--forge-black)', backgroundColor: 'var(--forge-gold)',
              padding: '0.75rem 1.5rem', textDecoration: 'none',
              transition: 'background-color 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--forge-brass)' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--forge-gold)' }}
          >
            Share Your Experience
          </Link>
        </div>
      </div>
    </section>
  )
}
