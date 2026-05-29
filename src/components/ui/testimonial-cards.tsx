"use client"

import * as React from 'react'
import { motion } from 'framer-motion'

interface TestimonialData {
  id: number
  testimonial: string
  author: string
  service?: string
}

interface TestimonialCardProps extends TestimonialData {
  handleShuffle: () => void
  position: 'front' | 'middle' | 'back'
}

const AVATARS = [
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=128&h=128&fit=crop&crop=face&q=80',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=128&h=128&fit=crop&crop=face&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=128&h=128&fit=crop&crop=face&q=80',
]

export function TestimonialCard({
  handleShuffle,
  testimonial,
  position,
  id,
  author,
  service,
}: TestimonialCardProps) {
  const dragRef = React.useRef(0)
  const wasDragged = React.useRef(false)
  const isFront = position === 'front'

  return (
    <motion.div
      animate={{
        rotate: position === 'front' ? '-4deg' : position === 'middle' ? '0deg' : '4deg',
        x: position === 'front' ? '0%' : position === 'middle' ? '28%' : '56%',
        zIndex: position === 'front' ? 2 : position === 'middle' ? 1 : 0,
      }}
      drag={isFront}
      dragElastic={0.35}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onPointerDown={() => { wasDragged.current = false }}
      onDrag={() => { wasDragged.current = true }}
      onDragStart={(e: any) => { dragRef.current = e.clientX }}
      onDragEnd={(e: any) => {
        if (dragRef.current - e.clientX > 120) handleShuffle()
        dragRef.current = 0
      }}
      onClick={isFront ? () => { if (!wasDragged.current) handleShuffle() } : undefined}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '320px',
        height: '420px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        padding: '2rem',
        userSelect: 'none',
        cursor: isFront ? 'pointer' : 'default',
        background: 'rgba(28, 25, 23, 0.58)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(201, 168, 76, 0.22)',
        boxShadow: isFront
          ? '0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,168,76,0.05)'
          : '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      <img
        src={AVATARS[(id - 1) % AVATARS.length]}
        alt={author}
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '1px solid rgba(201,168,76,0.3)',
          filter: 'sepia(10%) grayscale(15%)',
          pointerEvents: 'none',
          flexShrink: 0,
        }}
      />
      <div style={{
        fontFamily: 'var(--font-source-sans), sans-serif',
        fontSize: '0.62rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--forge-gold)',
        height: '1px',
        width: '2rem',
        backgroundColor: 'var(--forge-gold)',
        alignSelf: 'center',
      }} />
      <p style={{
        fontFamily: 'var(--font-cormorant), serif',
        fontSize: '1.05rem',
        fontStyle: 'italic',
        color: 'rgba(245,237,216,0.85)',
        lineHeight: 1.65,
        textAlign: 'center',
        pointerEvents: 'none',
      }}>
        &ldquo;{testimonial}&rdquo;
      </p>
      <div style={{ textAlign: 'center', pointerEvents: 'none' }}>
        <div style={{
          fontFamily: 'var(--font-source-sans), sans-serif',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.06em',
          color: 'var(--forge-ivory)',
          marginBottom: '0.2rem',
        }}>
          {author}
        </div>
        {service && (
          <div style={{
            fontFamily: 'var(--font-source-sans), sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--forge-bronze)',
          }}>
            {service}
          </div>
        )}
      </div>
      {isFront && (
        <div style={{
          position: 'absolute',
          bottom: '1.25rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontFamily: 'var(--font-source-sans), sans-serif',
          fontSize: '0.6rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.45)',
          whiteSpace: 'nowrap',
        }}>
          tap or drag to continue
        </div>
      )}
    </motion.div>
  )
}

interface ShuffleCardsProps {
  testimonials: TestimonialData[]
}

export function ShuffleCards({ testimonials }: ShuffleCardsProps) {
  const [positions, setPositions] = React.useState<Array<'front' | 'middle' | 'back'>>([
    'front', 'middle', 'back',
  ])

  const handleShuffle = () => {
    setPositions((prev) => {
      const next = [...prev] as Array<'front' | 'middle' | 'back'>
      const last = next.pop()!
      next.unshift(last)
      return next
    })
  }

  const visible = testimonials.slice(0, 3)

  return (
    <div
      style={{
        position: 'relative',
        height: '420px',
        width: '320px',
        marginLeft: '-60px',
      }}
    >
      {visible.map((t, index) => (
        <TestimonialCard
          key={t.id}
          {...t}
          handleShuffle={handleShuffle}
          position={positions[index]}
        />
      ))}
    </div>
  )
}
