'use client'

import { useState, useRef, useCallback } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

type Testimonial = {
  author: string
  text: string
  service?: string
  location?: string
  project?: string
}

export default function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0)
  const dragStartX = useRef<number | null>(null)
  const isDragging = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const prev = useCallback(() => setIndex(i => (i - 1 + testimonials.length) % testimonials.length), [testimonials.length])
  const next = useCallback(() => setIndex(i => (i + 1) % testimonials.length), [testimonials.length])

  const onDragStart = (clientX: number) => {
    dragStartX.current = clientX
    isDragging.current = false
  }

  const onDragEnd = (clientX: number) => {
    if (dragStartX.current === null) return
    const delta = clientX - dragStartX.current
    if (Math.abs(delta) > 40) {
      if (delta < 0) next()
      else prev()
    }
    dragStartX.current = null
    isDragging.current = false
  }

  const t = testimonials[index]

  return (
    <div style={{ position: 'relative' }}>
      {/* Card */}
      <div
        ref={containerRef}
        onMouseDown={(e) => onDragStart(e.clientX)}
        onMouseUp={(e) => onDragEnd(e.clientX)}
        onMouseLeave={() => { dragStartX.current = null }}
        onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
        onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
        onClick={next}
        style={{
          backgroundColor: index % 2 === 0 ? 'var(--forge-charcoal)' : 'var(--forge-black)',
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          transition: 'background-color 0.35s ease',
          minHeight: '260px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Swipe hint */}
        <div style={{
          position: 'absolute', top: '1rem', right: '1rem',
          fontFamily: 'var(--font-source-sans), sans-serif',
          fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.35)',
          display: 'flex', alignItems: 'center', gap: '0.35rem',
        }}>
          tap or swipe
        </div>

        <div style={{ display: 'flex', gap: '2px', marginBottom: '1.25rem' }}>
          {[1,2,3,4,5].map(s => <Star key={s} size={11} fill="var(--forge-gold)" color="var(--forge-gold)" />)}
        </div>

        <p style={{
          fontFamily: 'var(--font-cormorant), serif',
          fontSize: '1.05rem', fontStyle: 'italic',
          color: 'rgba(245,237,216,0.85)', lineHeight: 1.7,
          marginBottom: '1.75rem', flex: 1,
        }}>
          &ldquo;{t.text}&rdquo;
        </p>

        <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(201,168,76,0.12)' }}>
          <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.8rem', fontWeight: 600, color: 'var(--forge-ivory)', marginBottom: '0.2rem' }}>
            {t.author}
          </div>
          {t.service && (
            <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'var(--forge-bronze)' }}>
              {t.service}
            </div>
          )}
        </div>
      </div>

      {/* Nav row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0 0' }}>
        {/* Dots */}
        <div style={{ display: 'flex', gap: '6px' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIndex(i) }}
              aria-label={`Go to review ${i + 1}`}
              style={{
                width: i === index ? '20px' : '6px',
                height: '6px',
                borderRadius: '3px',
                backgroundColor: i === index ? 'var(--forge-gold)' : 'rgba(201,168,76,0.25)',
                border: 'none', cursor: 'pointer',
                padding: 0,
                transition: 'width 0.3s ease, background-color 0.3s ease',
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous review"
            style={{
              width: '32px', height: '32px',
              border: '1px solid rgba(201,168,76,0.3)',
              background: 'none', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              color: 'rgba(201,168,76,0.6)',
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--forge-gold)'; e.currentTarget.style.color = 'var(--forge-gold)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.color = 'rgba(201,168,76,0.6)' }}
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next review"
            style={{
              width: '32px', height: '32px',
              border: '1px solid rgba(201,168,76,0.3)',
              background: 'none', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              color: 'rgba(201,168,76,0.6)',
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--forge-gold)'; e.currentTarget.style.color = 'var(--forge-gold)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.color = 'rgba(201,168,76,0.6)' }}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}
