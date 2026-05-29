import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, Users, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Forge X — Our Story, Philosophy & Team',
  description: 'Forge X brings over 20 years of combined renovation experience to Baltimore, Rosedale, White Marsh, Joppatowne, and surrounding communities.',
}

const stats = [
  { value: '38', label: 'Projects Completed' },
  { value: '20+', label: 'Years of Experience' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '$0', label: 'Hidden Costs. Ever.' },
]

const values = [
  {
    icon: Award,
    title: 'Uncompromising Quality',
    body: 'Every material is selected with intention. Every joint, seam, and finish is held to the same standard — whether it will be seen or not. Quality is not a sales promise at Forge X. It is a working condition.',
  },
  {
    icon: Shield,
    title: 'Complete Transparency',
    body: 'We provide detailed proposals before work begins and structured updates throughout. Every dollar is accountable. We have built our reputation on clients who trust us with their most valuable investment — their home.',
  },
  {
    icon: Users,
    title: 'Integrated Teams',
    body: 'Our designers, project managers, and tradespeople operate as one unified team. This eliminates the miscommunication that plagues traditional design-bid-build delivery and results in better outcomes for every client.',
  },
  {
    icon: Clock,
    title: 'Respect for Your Time',
    body: 'A renovation schedule is a contract with your family. We plan with precision, staff projects appropriately, and hold ourselves accountable to timelines as firmly as we hold ourselves to quality standards.',
  },
]

const team = [
  {
    name: 'James Rafferty',
    title: 'Founder & Principal',
    bio: 'James founded Forge X in 2024 after two decades building and renovating homes across the Baltimore metro area. His philosophy is simple: treat every home as if it were your own, and build every project as if it will stand for a century.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Camille Fontaine',
    title: 'Design Director',
    bio: 'Camille brings 18 years of interior and architectural design experience to every Forge X project. Trained in Paris and New York, her material intuition and spatial intelligence define the aesthetic vocabulary of the firm.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Marcus Chen',
    title: 'Director of Construction',
    bio: 'Marcus oversees all field operations, ensuring that what is designed translates flawlessly into built reality. His background includes over 20 years managing residential and light commercial projects across the Baltimore and Harford County area.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Elena Reyes',
    title: 'Client Experience Director',
    bio: 'Elena manages every client relationship from initial consultation through final walkthrough. Her role ensures that the experience of renovating with Forge X is as exceptional as the finished project itself.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
]

const milestones = [
  { year: '2024', event: 'Forge X founded in Rosedale, MD. Our team of experienced tradespeople comes together with a shared commitment to quality and honest work.' },
  { year: '2024', event: 'First kitchen renovation completed in White Marsh. Word-of-mouth referrals begin driving growth from day one.' },
  { year: '2025', event: 'Expanded service area to include Joppatowne, Middle River, and Essex. Full bathroom renovation division launched.' },
  { year: '2025', event: 'Basement finishing and smart home integration services added. 20 projects completed in our first full calendar year.' },
  { year: '2026', event: '38 projects completed and counting. Serving Baltimore, Rosedale, White Marsh, Joppatowne, and the surrounding community.' },
]

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: 'var(--forge-black)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ position: 'relative', height: '70vh', minHeight: '500px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,8,0.95) 0%, rgba(10,10,8,0.5) 50%, rgba(28,25,23,0.3) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem 5rem', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ height: '1px', width: '2.5rem', backgroundColor: 'var(--forge-gold)' }} />
            <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--forge-gold)' }}>Est. 2024</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2.75rem, 6vw, 5.5rem)', fontWeight: 300, color: 'var(--forge-ivory)', lineHeight: 1.05, maxWidth: '750px' }}>
            Built on Craft.<br />
            <em style={{ color: 'var(--forge-gold)', fontStyle: 'italic' }}>Defined by Integrity.</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,237,216,0.65)', maxWidth: '520px', marginTop: '1.5rem' }}>
            Forge X brings over 20 years of combined renovation experience to Baltimore, Rosedale, White Marsh, Joppatowne, and surrounding communities. We build homes that outlast trends and tradespeople who stand behind their work.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ backgroundColor: 'var(--forge-walnut)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2.5rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }} className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2.5rem', fontWeight: 400, color: 'var(--forge-gold)', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.6)', marginTop: '0.4rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Origin story */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="split-grid">
        <div>
          <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', marginBottom: '2rem' }} />
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--forge-ivory)', lineHeight: 1.2, marginBottom: '2rem' }}>
            Why We Build the Way We Do
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              'James Rafferty founded Forge X in 2024 with a conviction that homeowners in the Baltimore area deserved better. Clients were paying fair prices but receiving inconsistent quality, poor communication, and finished products that fell short of the vision they were sold.',
              'Forge X was built as the answer to that problem. Every operational decision — from how we hire craftspeople to how we structure our proposals — reflects a deliberate commitment to being different from the contractors our clients had dealt with before.',
              'We work with a focused roster of clients each year. Not because we are small — we are not — but because our standard of client experience requires genuine attention. Your project is never one of dozens running simultaneously. It receives our full organizational focus until it is done.',
              'The result is a firm that our clients recommend with confidence, return to for subsequent projects, and trust with homes that matter profoundly to them.',
            ].map((p, i) => (
              <p key={i} style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.975rem', lineHeight: 1.85, color: 'rgba(245,237,216,0.7)' }}>{p}</p>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" alt="Forge X craftsmanship" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(8%) contrast(1.04)' }} />
          </div>
          <div className="glass-panel" style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', padding: '1.75rem', maxWidth: '220px' }}>
            <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2.75rem', fontWeight: 300, color: 'var(--forge-gold)', lineHeight: 1 }}>20+</div>
            <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.55)', marginTop: '0.35rem' }}>Years of Experience</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: 'var(--forge-charcoal)', borderTop: '1px solid rgba(201,168,76,0.12)', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', margin: '0 auto 2rem' }} />
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--forge-ivory)' }}>
              The Principles That Guide Every Project
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }} className="values-grid">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="about-value-card glass-panel" style={{ padding: '2.5rem' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Icon size={16} color="var(--forge-gold)" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.5rem', fontWeight: 400, color: 'var(--forge-ivory)', marginBottom: '0.85rem' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.925rem', lineHeight: 1.8, color: 'rgba(245,237,216,0.6)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 2rem' }}>
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', marginBottom: '2rem' }} />
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '1rem' }}>
            The People Behind the Work
          </h2>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '1rem', color: 'rgba(245,237,216,0.55)', maxWidth: '540px', lineHeight: 1.8 }}>
            Forge X is a team of specialists who have chosen to work together because they share the same standards. Every person on a Forge X project takes personal ownership of the outcome.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="team-grid">
          {team.map((member) => (
            <div key={member.name}>
              <div style={{ aspectRatio: '3/4', overflow: 'hidden', marginBottom: '1.25rem' }}>
                <img src={member.image} alt={member.name} className="hov-img-scale" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'sepia(10%) grayscale(20%)', transition: 'transform 0.5s ease', display: 'block' }} />
              </div>
              <div style={{ height: '1px', width: '2rem', backgroundColor: 'var(--forge-gold)', marginBottom: '0.85rem' }} />
              <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.35rem', fontWeight: 400, color: 'var(--forge-ivory)', marginBottom: '0.25rem' }}>{member.name}</h3>
              <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forge-bronze)', marginBottom: '0.85rem' }}>{member.title}</div>
              <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.875rem', lineHeight: 1.75, color: 'rgba(245,237,216,0.5)' }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section style={{ backgroundColor: 'var(--forge-charcoal)', borderTop: '1px solid rgba(201,168,76,0.12)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 2rem' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', marginBottom: '2rem' }} />
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--forge-ivory)' }}>
              Our Story So Far
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {milestones.map((m, i) => (
              <div key={m.year} style={{ display: 'grid', gridTemplateColumns: '80px 1px 1fr', gap: '0 2rem', paddingBottom: i < milestones.length - 1 ? '2.5rem' : 0 }}>
                <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.1rem', fontWeight: 400, color: 'var(--forge-gold)', paddingTop: '0.1rem', textAlign: 'right' }}>{m.year}</div>
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--forge-gold)', flexShrink: 0 }} />
                  {i < milestones.length - 1 && <div style={{ width: '1px', flex: 1, backgroundColor: 'rgba(201,168,76,0.2)', marginTop: '4px' }} />}
                </div>
                <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(245,237,216,0.65)', paddingBottom: '0.5rem' }}>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--forge-walnut)', padding: '7rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', margin: '0 auto 2rem' }} />
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '1.25rem' }}>
            Ready to Work with Us?
          </h2>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,237,216,0.6)', marginBottom: '2.5rem' }}>
            Every Forge X engagement begins with a private consultation. We take time to understand your home, your vision, and your priorities before we recommend anything.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/request-estimate" className="hov-btn-gold" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forge-black)', backgroundColor: 'var(--forge-gold)', padding: '1rem 2.5rem', textDecoration: 'none', display: 'inline-block', transition: 'background-color 0.25s ease' }}>
              Request Estimate
            </Link>
            <Link href="/portfolio" className="hov-btn-outline-ivory" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.8rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forge-ivory)', border: '1px solid rgba(245,237,216,0.4)', padding: '1rem 2.5rem', textDecoration: 'none', display: 'inline-block', transition: 'border-color 0.25s ease' }}>
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .about-value-card:hover { border-color: rgba(201,168,76,0.35) !important; }
        @media (max-width: 1024px) {
          .split-grid { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
