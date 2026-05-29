'use client'

import { useEffect, useRef } from 'react'
import {
  Home,
  ChefHat,
  Bath,
  Hammer,
  Layers,
  TreePine,
  PlusSquare,
  Building2,
} from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Custom Renovations',
    description:
      'Full-scale residential transformations executed with surgical precision and premium materials sourced from around the world.',
    timeline: 'From 8 weeks',
    material: 'Custom materials',
  },
  {
    icon: ChefHat,
    title: 'Kitchen Remodeling',
    description:
      'Culinary sanctuaries designed for those who demand the finest — bespoke cabinetry, stone countertops, professional-grade finishes.',
    timeline: 'From 4 weeks',
    material: 'Marble / Quartz',
  },
  {
    icon: Bath,
    title: 'Bathroom Remodeling',
    description:
      'Spa-caliber bathrooms crafted with hand-selected tile, solid brass fixtures, and seamless stone surrounds.',
    timeline: 'From 3 weeks',
    material: 'Brass / Stone',
  },
  {
    icon: Hammer,
    title: 'Roofing',
    description:
      'Heritage roofing systems built to endure generations — slate, standing seam metal, and premium architectural shingles.',
    timeline: 'From 2 weeks',
    material: 'Slate / Metal',
  },
  {
    icon: Layers,
    title: 'Premium Flooring',
    description:
      'Wide-plank hardwoods, natural stone, and reclaimed timber laid with meticulous attention to grain, pattern, and finish.',
    timeline: 'From 1 week',
    material: 'Oak / Walnut / Stone',
  },
  {
    icon: TreePine,
    title: 'Exterior Work',
    description:
      'Curb appeal elevated to artistry — masonry, stonework, custom millwork, and landscape integration for lasting first impressions.',
    timeline: 'From 3 weeks',
    material: 'Natural Stone',
  },
  {
    icon: PlusSquare,
    title: 'Home Additions',
    description:
      'Architecturally cohesive expansions designed to feel as though they were always part of the original structure.',
    timeline: 'From 12 weeks',
    material: 'Site-matched materials',
  },
  {
    icon: Building2,
    title: 'Full Transformations',
    description:
      'Complete home reimaginations from foundation to finish — the ultimate expression of Forge X craftsmanship.',
    timeline: 'From 20 weeks',
    material: 'All premium materials',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        backgroundColor: 'var(--forge-charcoal)',
        padding: '7rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section header */}
        <div className="reveal" style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '1.25rem',
            }}
          >
            <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)' }} />
            <span
              style={{
                fontFamily: 'var(--font-source-sans), sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--forge-gold)',
              }}
            >
              What We Build
            </span>
            <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)' }} />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
              fontWeight: 400,
              color: 'var(--forge-ivory)',
              lineHeight: 1.2,
            }}
          >
            Our Craft
          </h2>
        </div>

        {/* Service grid */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5px',
            backgroundColor: 'rgba(201, 168, 76, 0.12)',
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`reveal reveal-delay-${(i % 4) + 1}`}
                style={{
                  backgroundColor: 'var(--forge-walnut)',
                  padding: '2.5rem 2rem',
                  cursor: 'default',
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.backgroundColor = '#2d1a0e'
                  el.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.backgroundColor = 'var(--forge-walnut)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                {/* Top gold accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--forge-gold), transparent)',
                    opacity: 0.6,
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    border: '1px solid rgba(201, 168, 76, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: 'var(--forge-gold)',
                  }}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: '1.45rem',
                    fontWeight: 500,
                    color: 'var(--forge-ivory)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.25,
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-source-sans), sans-serif',
                    fontSize: '0.9rem',
                    lineHeight: 1.75,
                    color: 'rgba(245, 237, 216, 0.6)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {service.description}
                </p>

                {/* Meta */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(201, 168, 76, 0.15)',
                    paddingTop: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-source-sans), sans-serif',
                      fontSize: '0.7rem',
                      letterSpacing: '0.08em',
                      color: 'var(--forge-gold)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {service.timeline}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: '0.85rem',
                      fontStyle: 'italic',
                      color: 'var(--forge-bronze)',
                    }}
                  >
                    {service.material}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
