import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Shield, Clock, DollarSign, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Financing — Forge X Renovation Financing Options',
  description: 'Flexible financing solutions for luxury renovations. Explore Forge X financing partnerships and payment options designed for high-quality home improvement projects.',
}

const programs = [
  {
    name: 'Renovation Line of Credit',
    rate: 'From 6.99% APR',
    term: 'Up to 15 years',
    amount: 'Up to $500,000',
    features: [
      'Revolving credit for ongoing renovation needs',
      'Draw funds as work progresses — pay interest only on drawn amounts',
      'Flexible repayment terms from 5 to 15 years',
      'No prepayment penalties',
      'Approval decision in 2–5 business days',
      'Dedicated renovation financing specialist',
    ],
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Fixed-Rate Renovation Loan',
    rate: 'From 7.49% APR',
    term: '5–10 years',
    amount: 'Up to $300,000',
    features: [
      'Predictable monthly payments from day one',
      'Fixed rate locked at approval — immune to market changes',
      'Funds disbursed at project milestones',
      'Available as secured or unsecured depending on project size',
      'No origination fee on loans over $75,000',
      'Joint application available for couples',
    ],
    highlight: false,
  },
  {
    name: 'Home Equity Renovation',
    rate: 'From 5.99% APR',
    term: 'Up to 20 years',
    amount: 'Up to $1,500,000',
    features: [
      'Lowest available rates using home equity as collateral',
      'Tax-deductible interest on qualifying renovations',
      'Extended repayment terms reduce monthly payment burden',
      'Suitable for large-scope, multi-phase projects',
      'Available for primary and secondary residences',
      'Dedicated closing coordinator for streamlined process',
    ],
    highlight: false,
  },
]

const faqs = [
  {
    q: 'Does using Forge X financing affect my project cost?',
    a: 'No. Our financing programs are offered through third-party lending partners at market-competitive rates. Your construction contract pricing is entirely separate and unaffected by your chosen payment method.',
  },
  {
    q: 'Can I finance a project that is already in planning?',
    a: 'Yes. Financing can be initiated at any point before construction begins. We recommend starting the financing application at the same time as design planning to ensure funds are available when the project is ready to proceed.',
  },
  {
    q: 'What credit score is required?',
    a: 'Qualification requirements vary by program. Generally, our renovation loan products require a minimum 680 FICO score. Home equity programs may have different requirements. Our financing partners will provide a clear picture of eligibility during the pre-qualification process.',
  },
  {
    q: 'How are funds disbursed?',
    a: 'Funds are disbursed directly to Forge X at agreed project milestones — typically at project start, mid-point completion, and final walkthrough. This protects your investment and ensures funds are applied to completed, verified work.',
  },
  {
    q: 'Is the pre-qualification process a hard credit inquiry?',
    a: 'Pre-qualification uses a soft inquiry that does not affect your credit score. A hard inquiry is only conducted if you proceed to formal loan application.',
  },
  {
    q: 'Can I finance a full-home renovation and a basement finish as a single loan?',
    a: 'Yes. Multi-scope projects can typically be consolidated into a single financing instrument, simplifying your payments and often qualifying for better terms due to the larger project size.',
  },
]

export default function FinancingPage() {
  return (
    <div style={{ backgroundColor: 'var(--forge-black)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '80px' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,8,0.93) 0%, rgba(28,25,23,0.82) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ height: '1px', width: '2.5rem', backgroundColor: 'var(--forge-gold)' }} />
            <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--forge-gold)' }}>Financing Options</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2.75rem, 6vw, 5.5rem)', fontWeight: 300, color: 'var(--forge-ivory)', lineHeight: 1.05, maxWidth: '760px', marginBottom: '1.5rem' }}>
            Your Vision<br />
            <em style={{ color: 'var(--forge-gold)', fontStyle: 'italic' }}>On Your Terms.</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,237,216,0.65)', maxWidth: '520px' }}>
            Forge X has partnered with premier renovation lending specialists to offer competitive financing programs that make your project achievable on a timeline that works for your financial situation.
          </p>
        </div>
      </section>

      {/* Why finance */}
      <section style={{ backgroundColor: 'var(--forge-charcoal)', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }} className="benefits-grid">
          {[
            { Icon: DollarSign, title: 'Preserve Liquid Capital', body: 'Keep savings working in higher-yield accounts while financing the renovation at competitive rates.' },
            { Icon: Clock, title: 'Don\'t Delay Your Vision', body: 'Start the project now rather than accumulating funds over years. Your home is your largest asset — invest in it sooner.' },
            { Icon: Shield, title: 'Milestone-Based Disbursement', body: 'Funds release at project milestones, ensuring your investment is tied to verified, completed work.' },
            { Icon: Check, title: 'Increase Home Value', body: 'A well-executed renovation typically returns 60–80% of its cost at resale — often immediately in strong markets.' },
          ].map(({ Icon, title, body }) => (
            <div key={title} style={{ padding: '2rem', borderRight: '1px solid rgba(201,168,76,0.1)' }}>
              <div style={{ width: '2rem', height: '2rem', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Icon size={14} color="var(--forge-gold)" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.2rem', color: 'var(--forge-ivory)', marginBottom: '0.6rem' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.875rem', lineHeight: 1.75, color: 'rgba(245,237,216,0.5)' }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 2rem' }}>
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', marginBottom: '2rem' }} />
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '0.75rem' }}>
            Available Programs
          </h2>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.95rem', color: 'rgba(245,237,216,0.5)', maxWidth: '500px', lineHeight: 1.75 }}>
            Rates and terms are indicative. Final terms are determined at underwriting based on creditworthiness and project details.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5px', backgroundColor: 'rgba(201,168,76,0.08)' }} className="programs-grid">
          {programs.map((prog) => (
            <div
              key={prog.name}
              className={prog.highlight ? undefined : 'glass-panel'}
            style={{
                backgroundColor: prog.highlight ? 'var(--forge-walnut)' : undefined,
                padding: '2.5rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {prog.badge && (
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', backgroundColor: 'var(--forge-gold)', padding: '0.3rem 0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forge-black)' }}>{prog.badge}</span>
                </div>
              )}
              <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.4rem', fontWeight: 400, color: 'var(--forge-ivory)', marginBottom: '1.5rem' }}>{prog.name}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { label: 'Rate', value: prog.rate },
                  { label: 'Term', value: prog.term },
                  { label: 'Amount', value: prog.amount, span: true },
                ].map(({ label, value, span }) => (
                  <div key={label} style={{ gridColumn: span ? 'span 2' : '1' }}>
                    <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forge-bronze)', marginBottom: '0.25rem' }}>{label}</div>
                    <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.2rem', color: 'var(--forge-gold)' }}>{value}</div>
                  </div>
                ))}
              </div>
              <div style={{ height: '1px', backgroundColor: 'rgba(201,168,76,0.15)', marginBottom: '1.5rem' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
                {prog.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <Check size={12} color="var(--forge-gold)" strokeWidth={2} style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.875rem', color: 'rgba(245,237,216,0.6)', lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/request-estimate" className="hov-btn-gold" style={{ marginTop: '2rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forge-black)', backgroundColor: 'var(--forge-gold)', padding: '0.9rem', textDecoration: 'none', display: 'block', textAlign: 'center', transition: 'background-color 0.25s ease' }}>
                Get Pre-Qualified
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: 'var(--forge-charcoal)', borderTop: '1px solid rgba(201,168,76,0.12)', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 2rem' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', marginBottom: '2rem' }} />
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--forge-ivory)' }}>Financing Questions</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5px', backgroundColor: 'rgba(201,168,76,0.08)' }} className="faq-grid">
            {faqs.map(({ q, a }) => (
              <div key={q} className="glass-panel" style={{ padding: '2rem 2.25rem' }}>
                <h4 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.2rem', fontWeight: 400, color: 'var(--forge-ivory)', marginBottom: '0.75rem', lineHeight: 1.4 }}>{q}</h4>
                <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.9rem', lineHeight: 1.8, color: 'rgba(245,237,216,0.6)' }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="cta-split">
        <div>
          <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', marginBottom: '2rem' }} />
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            Ready to Discuss Your Financing Options?
          </h2>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,237,216,0.55)', marginBottom: '2.5rem' }}>
            Our team can walk you through financing options alongside your project consultation. There is no commitment required to have the conversation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/request-estimate" className="hov-btn-gold" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forge-black)', backgroundColor: 'var(--forge-gold)', padding: '1rem 2.25rem', textDecoration: 'none', display: 'inline-block', transition: 'background-color 0.25s ease' }}>
              Request Estimate
            </Link>
            <Link href="/contact" className="hov-btn-outline-ivory" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forge-ivory)', border: '1px solid rgba(245,237,216,0.35)', padding: '1rem 2.25rem', textDecoration: 'none', display: 'inline-block', transition: 'border-color 0.25s ease' }}>
              Contact Us
            </Link>
          </div>
        </div>
        <div className="glass-panel" style={{ padding: '2.5rem' }}>
          <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forge-gold)', marginBottom: '1.25rem' }}>Speak With Our Team</div>
          <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.15rem', fontStyle: 'italic', color: 'rgba(245,237,216,0.8)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
            &ldquo;We can review your project scope and budget together, then walk you through which financing option provides the best structure for your situation.&rdquo;
          </p>
          <div style={{ height: '1px', width: '2rem', backgroundColor: 'var(--forge-gold)', marginBottom: '1rem' }} />
          <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.8rem', color: 'var(--forge-ivory)', marginBottom: '0.25rem' }}>James Rafferty</div>
          <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', color: 'var(--forge-bronze)', marginBottom: '1.5rem' }}>Founder & Principal, Forge X</div>
          <a href="tel:+14432721048" className="hov-ivory" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.88rem', color: 'var(--forge-gold)', textDecoration: 'none', transition: 'color 0.25s ease' }}>
            <Phone size={14} strokeWidth={1.5} /> (443) 272-1048
          </a>
        </div>
      </section>

      <p style={{ textAlign: 'center', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.75rem', color: 'rgba(245,237,216,0.2)', padding: '0 2rem 4rem' }}>
        * APR ranges shown are for illustrative purposes only. Actual rates, terms, and approval are determined by our lending partners based on individual creditworthiness, project scope, and collateral. Forge X is not a lender and does not guarantee financing approval.
      </p>

      <style>{`
        @media (max-width: 1024px) {
          .programs-grid { grid-template-columns: 1fr !important; }
          .cta-split { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .faq-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
