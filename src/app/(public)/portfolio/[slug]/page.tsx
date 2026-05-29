import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PORTFOLIO_PROJECTS } from '@/lib/data'
import { formatCurrency } from '@/lib/utils'
import { ArrowLeft, MapPin, Clock, DollarSign, Tag } from 'lucide-react'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = PORTFOLIO_PROJECTS.find(p => p.slug === slug)
  return { title: project ? `${project.title} — Forge X Portfolio` : 'Project' }
}

const IMAGES = [
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
  'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80',
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
]

export default async function PortfolioProjectPage({ params }: Props) {
  const { slug } = await params
  const project = PORTFOLIO_PROJECTS.find(p => p.slug === slug)
  if (!project) notFound()

  const related = PORTFOLIO_PROJECTS.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <div style={{ backgroundColor: 'var(--forge-black)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: '65vh', overflow: 'hidden' }}>
        <img src={IMAGES[0]} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(10%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,8,0.92) 0%, rgba(10,10,8,0.4) 60%, transparent 100%)' }} />
        <div style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1280px', padding: '0 2rem' }}>
          <a href="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forge-gold)', textDecoration: 'none', marginBottom: '1rem' }}>
            <ArrowLeft size={12} /> All Projects
          </a>
          <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forge-gold)', marginBottom: '0.75rem' }}>{project.category}</div>
          <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, color: 'var(--forge-ivory)', lineHeight: 1.1, marginBottom: '1.5rem' }}>{project.title}</h1>
          {/* Stats */}
          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { icon: MapPin, label: project.location },
              { icon: Clock, label: project.duration },
              { icon: DollarSign, label: formatCurrency(project.budget) },
              { icon: Tag, label: project.category },
            ].map(({ icon: Icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon size={14} color="var(--forge-gold)" />
                <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.85rem', color: 'rgba(245,237,216,0.75)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem' }}>
        {/* Image gallery */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5px', marginBottom: '5rem' }}>
          {IMAGES.slice(0, 4).map((src, i) => (
            <div key={i} style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
              <img src={src} alt={`${project.title} ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(8%) contrast(1.04)' }} />
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '5rem', alignItems: 'start' }}>
          {/* Main content */}
          <div>
            <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', marginBottom: '2rem' }} />
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 400, color: 'var(--forge-ivory)', marginBottom: '1.5rem' }}>Project Story</h2>
            <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '1rem', lineHeight: 1.85, color: 'rgba(245,237,216,0.7)', marginBottom: '1.5rem' }}>{project.description}</p>
            <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.5rem', color: 'var(--forge-ivory)', marginBottom: '1rem', marginTop: '2.5rem' }}>The Challenge</h3>
            <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '1rem', lineHeight: 1.85, color: 'rgba(245,237,216,0.65)' }}>{project.challenge}</p>

            {/* Before / After */}
            <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.5rem', color: 'var(--forge-ivory)', margin: '2.5rem 0 1rem' }}>Before & After</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5px' }}>
              {(['Before', 'After'] as const).map((label, i) => (
                <div key={label} style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img src={IMAGES[i + 1]} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: label === 'Before' ? 'sepia(40%) brightness(0.8)' : 'sepia(8%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(10,10,8,0.7)', padding: '0.75rem 1rem' }}>
                    <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: label === 'Before' ? 'var(--forge-bronze)' : 'var(--forge-gold)' }}>{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ position: 'sticky', top: '100px' }}>
            {/* Materials */}
            <div style={{ backgroundColor: 'var(--forge-charcoal)', border: '1px solid rgba(201,168,76,0.15)', padding: '2rem', marginBottom: '1.5rem' }}>
              <h4 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.25rem', color: 'var(--forge-ivory)', marginBottom: '1.25rem' }}>Materials Used</h4>
              {project.materialsUsed.map(m => (
                <div key={m} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.65rem' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--forge-gold)', marginTop: '0.55rem', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.875rem', color: 'rgba(245,237,216,0.65)' }}>{m}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            {project.testimonial && (
              <div style={{ backgroundColor: 'var(--forge-walnut)', padding: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '3.5rem', color: 'var(--forge-gold)', lineHeight: 0.6, marginBottom: '1rem' }}>&ldquo;</div>
                <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(245,237,216,0.85)', lineHeight: 1.65, marginBottom: '1.25rem' }}>{project.testimonial.text}</p>
                <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--forge-bronze)' }}>{project.testimonial.author}</div>
              </div>
            )}
          </div>
        </div>

        {/* Related Projects */}
        <div style={{ marginTop: '6rem', borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2rem', color: 'var(--forge-ivory)', marginBottom: '2.5rem' }}>Related Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5px' }}>
            {related.map((p, i) => (
              <a key={p.id} href={`/portfolio/${p.slug}`} style={{ textDecoration: 'none', display: 'block', position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
                <img src={IMAGES[(i + 2) % IMAGES.length]} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(10%)', transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,8,0.85) 0%, transparent 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forge-gold)', marginBottom: '0.3rem' }}>{p.category}</div>
                  <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.2rem', color: 'var(--forge-ivory)' }}>{p.title}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '6rem 2rem 2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '1rem' }}>Ready to Start Your Project?</h2>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', color: 'rgba(245,237,216,0.55)', marginBottom: '2rem' }}>Let us bring the same level of craft to your home.</p>
          <a href="/get-quote" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forge-black)', backgroundColor: 'var(--forge-gold)', padding: '1rem 2.5rem', textDecoration: 'none', display: 'inline-block' }}>
            Request Estimate
          </a>
        </div>
      </div>
    </div>
  )
}
