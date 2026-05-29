import type { Metadata } from 'next'
import Link from 'next/link'
import { TESTIMONIALS } from '@/data/testimonials'
import { Star } from 'lucide-react'
import TestimonialsShuffleSection from '@/components/sections/TestimonialsShuffleSection'
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel'
import NoSelect from '@/components/NoSelect'

export const metadata: Metadata = {
  title: 'Client Testimonials — Forge X',
  description: 'What Forge X clients say about their renovation experience. Real projects, real outcomes, real words from homeowners across Baltimore, Rosedale, White Marsh, and Joppatowne.',
}

const allTestimonials = TESTIMONIALS.map(t => ({
  author: `${t.name}, ${t.location}`,
  text: t.quote,
  service: t.service,
  location: t.location,
  project: t.project,
}))

const platformReviews = [
  { platform: 'Google', rating: '4.9', count: '27 reviews' },
  { platform: 'Facebook', rating: '5.0', count: '14 reviews' },
  { platform: 'Yelp', rating: '4.8', count: '9 reviews' },
  { platform: 'Houzz', rating: '5.0', count: '5 reviews' },
]

export default function TestimonialsPage() {
  return (
    <NoSelect>
    <div style={{ backgroundColor: 'var(--forge-black)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '80px' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,8,0.93) 0%, rgba(28,25,23,0.8) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ height: '1px', width: '2.5rem', backgroundColor: 'var(--forge-gold)' }} />
            <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--forge-gold)' }}>Client Words</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2.75rem, 6vw, 5.5rem)', fontWeight: 300, color: 'var(--forge-ivory)', lineHeight: 1.05, maxWidth: '720px', marginBottom: '1.5rem' }}>
            What Our Clients<br />
            <em style={{ color: 'var(--forge-gold)', fontStyle: 'italic' }}>Actually Say.</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,237,216,0.65)', maxWidth: '500px' }}>
            Every review below comes from a real homeowner at the conclusion of their Forge X project. No edits, no selection bias — just honest accounts of working with us.
          </p>
        </div>
      </section>

      {/* Platform ratings bar */}
      <div style={{ backgroundColor: 'var(--forge-walnut)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }} className="platform-grid">
          {platformReviews.map(({ platform, rating, count }) => (
            <div key={platform} style={{ textAlign: 'center', padding: '1rem', borderRight: '1px solid rgba(201,168,76,0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
              <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.4)', marginBottom: '0.25rem' }}>{platform}</div>
              <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2rem', fontWeight: 400, color: 'var(--forge-gold)', lineHeight: 1 }}>{rating}</div>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={10} fill="var(--forge-gold)" color="var(--forge-gold)" />)}
              </div>
              <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', color: 'rgba(245,237,216,0.45)' }}>{count}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Shuffle cards */}
      <TestimonialsShuffleSection />

      {/* Featured testimonial */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 2rem' }}>
        <div className="glass-panel" style={{ padding: '4rem', marginBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '8rem', color: 'rgba(201,168,76,0.06)', position: 'absolute', top: '-1rem', left: '2rem', lineHeight: 1 }}>&ldquo;</div>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px' }}>
            <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forge-gold)', marginBottom: '1.5rem' }}>Featured Review</div>
            <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', fontStyle: 'italic', color: 'var(--forge-ivory)', lineHeight: 1.6, marginBottom: '2rem' }}>
              &ldquo;We have been through renovations before and always came away exhausted and disappointed by something. Forge X was different from the first conversation. They anticipated every problem before it became one. The kitchen is beyond what we imagined — our friends and family cannot believe it is the same house.&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ height: '1px', width: '2rem', backgroundColor: 'var(--forge-gold)' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.78rem', fontWeight: 600, color: 'var(--forge-ivory)', letterSpacing: '0.05em' }}>Margaret & Charles D.</div>
                <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', color: 'var(--forge-bronze)' }}>Rosedale, MD · Kitchen Remodeling</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials carousel — tap or drag to cycle */}
        <TestimonialsCarousel testimonials={allTestimonials.filter(Boolean) as {author: string; text: string; service?: string; location?: string; project?: string}[]} />
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--forge-walnut)', padding: '7rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', margin: '0 auto 2rem' }} />
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '1.25rem' }}>
            Add Your Name to This List
          </h2>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,237,216,0.6)', marginBottom: '2.5rem' }}>
            Every client above started with a consultation. So does every Forge X project. The conversation is free, honest, and entirely without obligation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/request-estimate" className="hov-btn-gold" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forge-black)', backgroundColor: 'var(--forge-gold)', padding: '1rem 2.5rem', textDecoration: 'none', display: 'inline-block', transition: 'background-color 0.25s ease' }}>
              Request Estimate
            </Link>
            <Link href="/submit-testimonial" className="hov-btn-outline-ivory" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.8rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forge-ivory)', border: '1px solid rgba(245,237,216,0.35)', padding: '1rem 2.5rem', textDecoration: 'none', display: 'inline-block', transition: 'border-color 0.25s ease' }}>
              Share Your Experience
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .platform-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
    </NoSelect>
  )
}
