import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES, PORTFOLIO_PROJECTS } from '@/lib/data'
import { Check, Clock, DollarSign, ArrowRight, ArrowLeft, ChefHat, Bath, Layers, Home, LayoutGrid, Paintbrush, Wrench, Zap, Sparkles, Cpu } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  ChefHat, Bath, Layers, Home, LayoutGrid, Paintbrush, Wrench, Zap, Sparkles, Cpu,
}

const serviceImages: Record<string, string[]> = {
  'kitchen-remodeling': [
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80',
  ],
  'bathroom-remodeling': [
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1600&q=80',
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80',
  ],
  'basement-finishing': [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
  ],
  'roofing': [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80',
  ],
  'flooring': [
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80',
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80',
  ],
}

const fallbackImages = [
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80',
  'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80',
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80',
]

const procesSteps = [
  { num: '01', title: 'Consultation', body: 'A private meeting to understand your vision, priorities, and budget parameters. No pressure, no sales pitch.' },
  { num: '02', title: 'Site Evaluation', body: 'Our team assesses the existing conditions — structure, systems, and constraints — to inform an accurate scope.' },
  { num: '03', title: 'Design & Planning', body: 'Detailed plans, material selections, and 3D renderings are developed and refined until the vision is right.' },
  { num: '04', title: 'Construction', body: 'Our tradespeople execute the scope with daily updates, clean job sites, and proactive communication.' },
  { num: '05', title: 'Final Walkthrough', body: 'We walk the project with you item by item. Nothing is signed off until every detail meets your standard.' },
]

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find(s => s.slug === slug)
  return {
    title: service ? `${service.name} — Forge X` : 'Service',
    description: service?.description,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = SERVICES.find(s => s.slug === slug)
  if (!service) notFound()

  const Icon = iconMap[service.icon] || Home
  const images = serviceImages[slug] || fallbackImages
  const related = SERVICES.filter(s => s.slug !== slug).slice(0, 3)
  const relatedProjects = PORTFOLIO_PROJECTS.filter(p =>
    p.category.toLowerCase().includes(service.name.toLowerCase().split(' ')[0])
  ).slice(0, 2)

  return (
    <div style={{ backgroundColor: 'var(--forge-black)', minHeight: '100vh' }}>

      {/* Cinematic hero */}
      <section style={{ position: 'relative', height: '75vh', minHeight: '560px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${images[0]})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,8,0.96) 0%, rgba(10,10,8,0.55) 45%, rgba(28,25,23,0.2) 100%)' }} />

        {/* Back link */}
        <Link href="/services" className="hov-gold" style={{
          position: 'absolute', top: '6rem', left: '2rem',
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem',
          letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.6)',
          textDecoration: 'none', zIndex: 2, transition: 'color 0.25s ease',
        }}>
          <ArrowLeft size={12} /> All Services
        </Link>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem 5rem', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ width: '2rem', height: '2rem', border: '1px solid rgba(201,168,76,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon size={14} color="var(--forge-gold)" strokeWidth={1.5} />
            </div>
            <div style={{ height: '1px', width: '2rem', backgroundColor: 'var(--forge-gold)' }} />
            <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--forge-gold)' }}>Forge X Service</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 300, color: 'var(--forge-ivory)', lineHeight: 1.05, maxWidth: '780px', marginBottom: '1.5rem' }}>
            {service.name}
          </h1>
          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={13} color="var(--forge-gold)" strokeWidth={1.5} />
              <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.82rem', color: 'rgba(245,237,216,0.65)' }}>{service.timeline}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <DollarSign size={13} color="var(--forge-gold)" strokeWidth={1.5} />
              <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.82rem', color: 'rgba(245,237,216,0.65)' }}>{service.priceRange}</span>
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Overview + features */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '5rem', padding: '6rem 0', alignItems: 'start' }} className="detail-grid">
          <div>
            <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', marginBottom: '2rem' }} />
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '1.5rem' }}>
              The Forge X Approach to {service.name}
            </h2>
            <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '1rem', lineHeight: 1.9, color: 'rgba(245,237,216,0.68)', marginBottom: '2.5rem' }}>
              {service.description}
            </p>

            {/* Gallery strip */}
            {images.length > 1 && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5px', marginBottom: '3rem' }}>
                {images.slice(1).map((src, i) => (
                  <div key={i} style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                    <img src={src} alt={`${service.name} ${i + 1}`} className="hov-img-scale" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(8%) contrast(1.04)', transition: 'transform 0.5s ease' }} />
                  </div>
                ))}
              </div>
            )}

            {/* Process */}
            <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.75rem', fontWeight: 400, color: 'var(--forge-ivory)', marginBottom: '2rem' }}>
              How We Work
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {procesSteps.map((step, i) => (
                <div key={step.num} style={{ display: 'grid', gridTemplateColumns: '48px 1px 1fr', gap: '0 1.5rem', paddingBottom: i < procesSteps.length - 1 ? '2rem' : 0 }}>
                  <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.1rem', color: 'var(--forge-gold)', textAlign: 'right', paddingTop: '2px' }}>{step.num}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--forge-gold)', flexShrink: 0 }} />
                    {i < procesSteps.length - 1 && <div style={{ width: '1px', flex: 1, backgroundColor: 'rgba(201,168,76,0.2)', marginTop: '4px' }} />}
                  </div>
                  <div style={{ paddingBottom: '0.5rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.15rem', color: 'var(--forge-ivory)', marginBottom: '0.35rem' }}>{step.title}</h4>
                    <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.875rem', lineHeight: 1.75, color: 'rgba(245,237,216,0.55)' }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Features */}
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h4 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.25rem', color: 'var(--forge-ivory)', marginBottom: '1.5rem' }}>What's Included</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {service.features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <Check size={13} color="var(--forge-gold)" strokeWidth={2} style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.875rem', color: 'rgba(245,237,216,0.68)', lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote CTA */}
            <div style={{ backgroundColor: 'var(--forge-walnut)', padding: '2rem' }}>
              <h4 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.35rem', color: 'var(--forge-ivory)', marginBottom: '0.75rem' }}>
                Start Your {service.name} Project
              </h4>
              <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(245,237,216,0.6)', marginBottom: '1.5rem' }}>
                Tell us about your project. We will schedule a private consultation at your convenience.
              </p>
              <Link href="/request-estimate" className="hov-btn-gold" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forge-black)', backgroundColor: 'var(--forge-gold)', padding: '0.875rem 1.5rem', textDecoration: 'none', display: 'block', textAlign: 'center', transition: 'background-color 0.25s ease' }}>
                Request Estimate
              </Link>
              <a href="tel:+14432721048" className="hov-ivory" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.78rem', letterSpacing: '0.06em', color: 'rgba(245,237,216,0.5)', textDecoration: 'none', display: 'block', textAlign: 'center', marginTop: '1rem', transition: 'color 0.25s ease' }}>
                or call (443) 272-1048
              </a>
            </div>

            {/* Price / timeline */}
            <div className="glass-dark" style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--forge-bronze)', marginBottom: '0.4rem' }}>Timeline</div>
                <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.15rem', color: 'var(--forge-ivory)' }}>{service.timeline}</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--forge-bronze)', marginBottom: '0.4rem' }}>Investment</div>
                <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1rem', color: 'var(--forge-ivory)' }}>{service.priceRange}</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {service.faqs.length > 0 && (
          <section style={{ padding: '4rem 0 6rem', borderTop: '1px solid rgba(201,168,76,0.12)' }}>
            <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', marginBottom: '2rem' }} />
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '3rem' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5px', backgroundColor: 'rgba(201,168,76,0.08)' }} className="faq-grid">
              {service.faqs.map(({ q, a }) => (
                <div key={q} className="glass-panel" style={{ padding: '2rem 2.25rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.2rem', fontWeight: 400, color: 'var(--forge-ivory)', marginBottom: '0.85rem', lineHeight: 1.4 }}>{q}</h4>
                  <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.9rem', lineHeight: 1.8, color: 'rgba(245,237,216,0.6)' }}>{a}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section style={{ backgroundColor: 'var(--forge-charcoal)', borderTop: '1px solid rgba(201,168,76,0.12)', padding: '6rem 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', marginBottom: '1.5rem' }} />
                <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--forge-ivory)' }}>
                  {service.name} Projects
                </h2>
              </div>
              <Link href="/portfolio" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forge-gold)', textDecoration: 'none' }}>
                All Work <ArrowRight size={12} />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5px' }} className="related-grid">
              {relatedProjects.map((p, i) => (
                <Link key={p.id} href={`/portfolio/${p.slug}`} style={{ textDecoration: 'none', position: 'relative', display: 'block', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img src={fallbackImages[i % fallbackImages.length]} alt={p.title} className="hov-img-scale" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(10%)', transition: 'transform 0.5s ease' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,8,0.85) 0%, transparent 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.75rem' }}>
                    <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forge-gold)', marginBottom: '0.35rem' }}>{p.location}</div>
                    <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.35rem', color: 'var(--forge-ivory)' }}>{p.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '6rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', marginBottom: '1.5rem' }} />
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 300, color: 'var(--forge-ivory)' }}>Other Services</h2>
          </div>
          <Link href="/services" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forge-gold)', textDecoration: 'none' }}>
            All Services <ArrowRight size={12} />
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5px', backgroundColor: 'rgba(201,168,76,0.08)' }} className="related-services-grid">
          {related.map((s) => {
            const RelIcon = iconMap[s.icon] || Home
            return (
              <Link key={s.id} href={`/services/${s.slug}`} className="glass-panel hov-border-visible" style={{ textDecoration: 'none', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', borderBottom: '2px solid transparent', transition: 'border-color 0.3s ease, background 0.3s ease' }}>
                <div style={{ width: '2rem', height: '2rem', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <RelIcon size={13} color="var(--forge-gold)" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.2rem', color: 'var(--forge-ivory)' }}>{s.name}</h3>
                <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.85rem', color: 'rgba(245,237,216,0.5)', lineHeight: 1.65 }}>{s.shortDesc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--forge-gold)', marginTop: 'auto', paddingTop: '0.75rem' }}>
                  View Service <ArrowRight size={10} />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .detail-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr !important; }
          .related-grid { grid-template-columns: 1fr !important; }
          .related-services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
