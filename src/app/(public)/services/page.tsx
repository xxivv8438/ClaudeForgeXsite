import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES } from '@/lib/data'
import { ArrowRight, ChefHat, Bath, Layers, Home, LayoutGrid, Paintbrush, Wrench, Zap, Sparkles, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services — Forge X Luxury Renovation & Contracting',
  description: 'From kitchen remodeling and bathroom renovation to full-home transformations and smart home integration. Explore the full scope of Forge X craftsmanship.',
}

const iconMap: Record<string, React.ElementType> = {
  ChefHat, Bath, Layers, Home, LayoutGrid, Paintbrush, Wrench, Zap, Sparkles, Cpu,
}

const heroImages = [
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
]

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: 'var(--forge-black)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '55vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '80px' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center 40%',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,8,0.92) 0%, rgba(28,25,23,0.78) 60%, rgba(61,35,20,0.5) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ height: '1px', width: '2.5rem', backgroundColor: 'var(--forge-gold)' }} />
            <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--forge-gold)' }}>What We Build</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2.75rem, 6vw, 5.5rem)', fontWeight: 300, color: 'var(--forge-ivory)', lineHeight: 1.05, maxWidth: '720px', marginBottom: '1.5rem' }}>
            Every Service.<br />
            <em style={{ color: 'var(--forge-gold)', fontStyle: 'italic' }}>One Standard.</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,237,216,0.65)', maxWidth: '520px' }}>
            Forge X delivers ten distinct services under one roof, each held to the same exacting standard of precision and material quality. Whatever the scope, the craft is the same.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 2rem' }}>
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', marginBottom: '2rem' }} />
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '0.75rem' }}>
            Our Complete Service Offering
          </h2>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.95rem', color: 'rgba(245,237,216,0.5)', maxWidth: '520px', lineHeight: 1.75 }}>
            Each service is delivered by a specialist team. You work with people who do this — and only this — every day.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5px', backgroundColor: 'rgba(201,168,76,0.08)' }} className="services-grid">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Home
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                style={{ textDecoration: 'none', backgroundColor: 'var(--forge-black)', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}
              >
                {/* Image */}
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={heroImages[i % heroImages.length]}
                    alt={service.name}
                    className="hov-img-scale-lg"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(10%) brightness(0.85)', transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,8,0.7) 0%, transparent 60%)' }} />
                </div>

                {/* Content */}
                <div style={{ padding: '1.75rem 2rem 2rem', flex: 1, display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(201,168,76,0.1)', transition: 'border-color 0.3s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ width: '2rem', height: '2rem', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={14} color="var(--forge-gold)" strokeWidth={1.5} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--forge-bronze)' }}>{service.timeline}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.4rem', fontWeight: 400, color: 'var(--forge-ivory)', marginBottom: '0.6rem', lineHeight: 1.2 }}>{service.name}</h3>
                  <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(245,237,216,0.5)', marginBottom: '1.25rem', flex: 1 }}>{service.shortDesc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
                    <span style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1rem', fontStyle: 'italic', color: 'var(--forge-bronze)' }}>{service.priceRange}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forge-gold)' }}>
                      Explore <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Why Forge X */}
      <section style={{ backgroundColor: 'var(--forge-charcoal)', borderTop: '1px solid rgba(201,168,76,0.12)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="split-grid">
          <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80" alt="Forge X quality" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(12%)' }} />
          </div>
          <div>
            <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', marginBottom: '2rem' }} />
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '2rem', lineHeight: 1.2 }}>
              The Forge X Difference
            </h2>
            {[
              { title: 'One Team, All Trades', body: 'Every scope — framing, electrical, plumbing, tile, millwork — is performed by Forge X tradespeople or our vetted specialty partners, all under one contract and one guarantee.' },
              { title: 'Firm Proposals, No Surprises', body: 'Our detailed proposals lock in scope and price before work begins. Change orders happen only when you change the project — not because we underpriced it to win the bid.' },
              { title: 'Premium Materials, Direct Access', body: 'We have established relationships with premium material suppliers, stone yards, and custom cabinetmakers. You access trade pricing and quality not available through retail channels.' },
            ].map(({ title, body }) => (
              <div key={title} style={{ marginBottom: '1.75rem', paddingBottom: '1.75rem', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
                <h4 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.2rem', color: 'var(--forge-ivory)', marginBottom: '0.5rem' }}>{title}</h4>
                <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.9rem', lineHeight: 1.75, color: 'rgba(245,237,216,0.55)' }}>{body}</p>
              </div>
            ))}
            <Link href="/request-estimate" className="hov-btn-gold" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forge-black)', backgroundColor: 'var(--forge-gold)', padding: '1rem 2.25rem', textDecoration: 'none', display: 'inline-block', transition: 'background-color 0.25s ease' }}>
              Request Estimate
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .split-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
