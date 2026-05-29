import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageSquare, Search, PenTool, Package, HardHat, Eye, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Process — How Forge X Works',
  description: 'From first conversation to final walkthrough, every Forge X project follows a rigorous, client-first process designed to deliver exceptional results with zero surprises.',
}

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Private Consultation',
    duration: 'Week 1',
    body: 'Every Forge X engagement begins with a private, no-pressure conversation at your home or our studio. We listen before we propose. We ask about your lifestyle, your priorities, what has frustrated you in past renovation experiences, and what success looks like to you. No sales pitch. No bid pressure. Just honest conversation.',
    deliverables: ['Vision alignment session', 'Budget parameters discussion', 'Preliminary scope overview', 'Project feasibility assessment'],
  },
  {
    num: '02',
    icon: Search,
    title: 'Site Evaluation',
    duration: 'Weeks 1–2',
    body: 'Our project director and lead tradesperson conduct a thorough inspection of the existing conditions relevant to your project. We assess structural elements, existing plumbing and electrical systems, moisture conditions, and any constraints that will affect design or construction. This honest evaluation prevents costly discoveries after work has begun.',
    deliverables: ['Structural and systems assessment', 'Existing condition documentation', 'Constraint identification', 'Accurate scope development'],
  },
  {
    num: '03',
    icon: PenTool,
    title: 'Design & Planning',
    duration: 'Weeks 2–8',
    body: 'Our design team develops detailed plans, material selections, and for larger projects, 3D renderings that show exactly how the finished space will look and feel. We revise until the design is right — not just close. The plan that goes into construction is the plan you have approved in full detail. No assumptions, no interpretations.',
    deliverables: ['Architectural drawings', '3D visualizations', 'Material and finish schedule', 'Fixture and appliance specifications'],
  },
  {
    num: '04',
    icon: Package,
    title: 'Material Procurement',
    duration: 'Weeks 3–10',
    body: 'We manage all material ordering, delivery coordination, and storage logistics. Our established relationships with stone yards, cabinetmakers, tile importers, and fixture suppliers mean you access trade pricing and priority lead times. We confirm every item before demolition begins, eliminating mid-project delays caused by material shortfalls.',
    deliverables: ['All materials ordered and confirmed', 'Custom fabrication initiated', 'Delivery schedule established', 'Storage logistics coordinated'],
  },
  {
    num: '05',
    icon: HardHat,
    title: 'Construction',
    duration: 'Varies by scope',
    body: 'Our tradespeople execute the work in a logical, sequenced order that protects finished surfaces and maintains forward momentum. You receive a written daily update from your project manager. Our job sites are cleaned at the end of every working day. You can always walk your project with us — access is never restricted.',
    deliverables: ['Daily written progress updates', 'Clean job site maintained', 'Weekly client walkthroughs', 'Proactive issue communication'],
  },
  {
    num: '06',
    icon: Eye,
    title: 'Quality Inspection',
    duration: 'Final 1–2 weeks',
    body: 'Before we request a final walkthrough, our quality control team conducts a thorough inspection of every completed element. We maintain a punch list and address every item before we invite the client to walk the project. The goal is simple: the first walkthrough should feel like a celebration, not a list session.',
    deliverables: ['Internal quality audit', 'Punch list developed and cleared', 'Systems testing and commissioning', 'Final photography documentation'],
  },
  {
    num: '07',
    icon: CheckCircle,
    title: 'Final Walkthrough',
    duration: 'Project completion',
    body: 'We walk every completed element with you, explaining finishes, demonstrating systems, and answering every question. Nothing is signed off until every detail meets your expectation. After project completion, we remain available for any questions, follow-ups, or warranty items. The relationship does not end at project handover.',
    deliverables: ['Item-by-item walkthrough', 'Systems demonstration', 'Warranty documentation', 'Maintenance guide provided'],
  },
]

const guarantees = [
  { title: 'Transparent Pricing', body: 'Detailed line-item proposals before any work begins. No surprise charges, no mid-project upcharges unless you change the scope.' },
  { title: 'Licensed & Insured', body: 'All Forge X work is performed under proper permits. We carry comprehensive general liability and workers\' compensation insurance on every project.' },
  { title: 'Warranty Coverage', body: 'Our workmanship is warranted for two years. We stand behind every joint, seam, and finish. If something is not right, we make it right.' },
  { title: 'Clean Job Sites', body: 'Daily cleanup is non-negotiable. Your home is not a construction zone. We treat it with the same respect we would expect in our own homes.' },
]

export default function ProcessPage() {
  return (
    <div style={{ backgroundColor: 'var(--forge-black)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '55vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '80px' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center 60%',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,8,0.93) 0%, rgba(28,25,23,0.8) 60%, rgba(61,35,20,0.5) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ height: '1px', width: '2.5rem', backgroundColor: 'var(--forge-gold)' }} />
            <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--forge-gold)' }}>How We Work</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2.75rem, 6vw, 5.5rem)', fontWeight: 300, color: 'var(--forge-ivory)', lineHeight: 1.05, maxWidth: '780px', marginBottom: '1.5rem' }}>
            A Process Built<br />
            <em style={{ color: 'var(--forge-gold)', fontStyle: 'italic' }}>Around Certainty.</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,237,216,0.65)', maxWidth: '540px' }}>
            Most renovation stress comes from uncertainty. Our process is designed to eliminate it. At every stage, you know exactly what is happening, what comes next, and what to expect.
          </p>
        </div>
      </section>

      {/* Process steps */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1px 1fr',
                  gap: '0 4rem',
                  paddingBottom: i < steps.length - 1 ? '5rem' : 0,
                  position: 'relative',
                }}
                className="process-row"
              >
                {/* Left — number & title */}
                <div style={{ textAlign: 'right', paddingTop: '0.25rem', paddingRight: '1rem' }}>
                  <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '4rem', fontWeight: 300, color: 'rgba(201,168,76,0.12)', lineHeight: 1, marginBottom: '0.5rem' }}>{step.num}</div>
                  <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--forge-bronze)', marginBottom: '0.5rem' }}>{step.duration}</div>
                  <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 400, color: 'var(--forge-ivory)', lineHeight: 1.2 }}>{step.title}</h2>
                </div>

                {/* Center line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', border: '1px solid rgba(201,168,76,0.35)', backgroundColor: 'var(--forge-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                    <Icon size={14} color="var(--forge-gold)" strokeWidth={1.5} />
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ width: '1px', flex: 1, background: 'linear-gradient(to bottom, rgba(201,168,76,0.35), rgba(201,168,76,0.08))', marginTop: '8px' }} />
                  )}
                </div>

                {/* Right — body & deliverables */}
                <div style={{ paddingLeft: '1rem', paddingTop: '0.25rem' }}>
                  <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.975rem', lineHeight: 1.85, color: 'rgba(245,237,216,0.65)', marginBottom: '1.75rem' }}>{step.body}</p>
                  <div className="glass-panel" style={{ padding: '1.25rem 1.5rem' }}>
                    <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--forge-gold)', marginBottom: '0.85rem' }}>Deliverables</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {step.deliverables.map((d) => (
                        <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                          <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--forge-gold)', flexShrink: 0 }} />
                          <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.85rem', color: 'rgba(245,237,216,0.55)' }}>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Guarantees */}
      <section style={{ backgroundColor: 'var(--forge-charcoal)', borderTop: '1px solid rgba(201,168,76,0.12)', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', margin: '0 auto 2rem' }} />
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--forge-ivory)' }}>
              Our Commitments to You
            </h2>
            <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '1rem', color: 'rgba(245,237,216,0.5)', marginTop: '1rem', maxWidth: '500px', margin: '1rem auto 0', lineHeight: 1.75 }}>
              These are not marketing claims. They are operational standards we hold ourselves to on every single project.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5px', backgroundColor: 'rgba(201,168,76,0.08)' }} className="guarantees-grid">
            {guarantees.map(({ title, body }) => (
              <div key={title} className="glass-panel" style={{ padding: '2.5rem' }}>
                <div style={{ height: '1px', width: '2rem', backgroundColor: 'var(--forge-gold)', marginBottom: '1.25rem' }} />
                <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.3rem', fontWeight: 400, color: 'var(--forge-ivory)', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.875rem', lineHeight: 1.75, color: 'rgba(245,237,216,0.55)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>
          <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', margin: '0 auto 2rem' }} />
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '1.25rem' }}>
            Ready to Begin?
          </h2>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,237,216,0.55)', marginBottom: '2.5rem' }}>
            The first step is a conversation. Tell us about your project and we will schedule a private consultation at your convenience — in your home or our studio.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/request-estimate" className="hov-btn-gold" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forge-black)', backgroundColor: 'var(--forge-gold)', padding: '1rem 2.5rem', textDecoration: 'none', display: 'inline-block', transition: 'background-color 0.25s ease' }}>
              Request Estimate
            </Link>
            <Link href="/about" className="hov-btn-outline-ivory" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.8rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forge-ivory)', border: '1px solid rgba(245,237,216,0.35)', padding: '1rem 2.5rem', textDecoration: 'none', display: 'inline-block', transition: 'border-color 0.25s ease' }}>
              About Forge X
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .process-row { grid-template-columns: 1fr !important; }
          .guarantees-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .guarantees-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
