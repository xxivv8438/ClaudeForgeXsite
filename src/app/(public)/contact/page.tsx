'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react'

const contactInfo = [
  { Icon: Phone, label: 'Phone', value: '(443) 272-1048', href: 'tel:+14432721048', sub: 'Mon–Fri 8am–6pm · Sat 9am–2pm' },
  { Icon: Mail, label: 'Email', value: 'info@forgexgc.com', href: 'mailto:info@forgexgc.com', sub: 'We respond within one business day' },
  { Icon: MapPin, label: 'Office', value: 'Rosedale, MD', href: null, sub: 'By appointment only' },
  { Icon: Clock, label: 'Service Area', value: 'Baltimore Metro', href: null, sub: 'Baltimore · Rosedale · White Marsh · Joppatowne · Middle River' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <div style={{ backgroundColor: 'var(--forge-black)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '45vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '80px' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,8,0.93) 0%, rgba(28,25,23,0.82) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ height: '1px', width: '2.5rem', backgroundColor: 'var(--forge-gold)' }} />
            <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--forge-gold)' }}>Get in Touch</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2.75rem, 6vw, 5.5rem)', fontWeight: 300, color: 'var(--forge-ivory)', lineHeight: 1.05, maxWidth: '720px', marginBottom: '1.25rem' }}>
            Let&apos;s Talk About<br />
            <em style={{ color: 'var(--forge-gold)', fontStyle: 'italic' }}>Your Project.</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,237,216,0.6)', maxWidth: '480px' }}>
            Every project starts with a conversation. Reach out and we will schedule a private consultation at your convenience.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 2rem', display: 'grid', gridTemplateColumns: '1fr 480px', gap: '6rem', alignItems: 'start' }} className="contact-grid">

        {/* Contact form */}
        <div>
          <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', marginBottom: '2rem' }} />
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '0.75rem' }}>
            Send Us a Message
          </h2>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.9rem', color: 'rgba(245,237,216,0.5)', marginBottom: '2.5rem', lineHeight: 1.75 }}>
            Fill in what you know. We will follow up within one business day to schedule a consultation.
          </p>

          {status === 'sent' ? (
            <div style={{ backgroundColor: 'var(--forge-charcoal)', border: '1px solid rgba(201,168,76,0.3)', padding: '3rem', textAlign: 'center' }}>
              <div style={{ width: '3rem', height: '3rem', border: '1px solid var(--forge-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Check size={20} color="var(--forge-gold)" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.75rem', color: 'var(--forge-ivory)', marginBottom: '0.75rem' }}>Message Received</h3>
              <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.9rem', color: 'rgba(245,237,216,0.55)', lineHeight: 1.75 }}>
                Thank you for reaching out. A member of our team will contact you within one business day to discuss your project and schedule a consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-two-col">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name', required: true },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', required: true },
                ].map(({ id, label, type, placeholder, required }) => (
                  <div key={id}>
                    <label htmlFor={id} style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.5)', display: 'block', marginBottom: '0.5rem' }}>{label}</label>
                    <input
                      id={id} type={type} placeholder={placeholder} required={required}
                      value={form[id as keyof typeof form]}
                      onChange={(e) => setForm(prev => ({ ...prev, [id]: e.target.value }))}
                      style={{ width: '100%', backgroundColor: 'var(--forge-charcoal)', border: '1px solid rgba(201,168,76,0.15)', padding: '0.875rem 1rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.9rem', color: 'var(--forge-ivory)', outline: 'none', transition: 'border-color 0.25s ease', boxSizing: 'border-box' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)' }}
                    />
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-two-col">
                <div>
                  <label htmlFor="phone" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.5)', display: 'block', marginBottom: '0.5rem' }}>Phone (Optional)</label>
                  <input
                    id="phone" type="tel" placeholder="(000) 000-0000"
                    value={form.phone}
                    onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
                    style={{ width: '100%', backgroundColor: 'var(--forge-charcoal)', border: '1px solid rgba(201,168,76,0.15)', padding: '0.875rem 1rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.9rem', color: 'var(--forge-ivory)', outline: 'none', transition: 'border-color 0.25s ease', boxSizing: 'border-box' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)' }}
                  />
                </div>
                <div>
                  <label htmlFor="service" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.5)', display: 'block', marginBottom: '0.5rem' }}>Service of Interest</label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => setForm(prev => ({ ...prev, service: e.target.value }))}
                    style={{ width: '100%', backgroundColor: 'var(--forge-charcoal)', border: '1px solid rgba(201,168,76,0.15)', padding: '0.875rem 1rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.9rem', color: form.service ? 'var(--forge-ivory)' : 'rgba(245,237,216,0.4)', outline: 'none', cursor: 'pointer', boxSizing: 'border-box' }}
                  >
                    <option value="">Select a service</option>
                    {['Kitchen Remodeling','Bathroom Remodeling','Full Home Renovation','Basement Finishing','Roofing','Flooring','Interior Design','Smart Home Upgrades','Painting','Plumbing / Electrical'].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.5)', display: 'block', marginBottom: '0.5rem' }}>Tell Us About Your Project</label>
                <textarea
                  id="message" rows={6} placeholder="Describe your project, timeline, and any specific questions you have..."
                  required
                  value={form.message}
                  onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                  style={{ width: '100%', backgroundColor: 'var(--forge-charcoal)', border: '1px solid rgba(201,168,76,0.15)', padding: '0.875rem 1rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.9rem', color: 'var(--forge-ivory)', outline: 'none', resize: 'vertical', transition: 'border-color 0.25s ease', boxSizing: 'border-box' }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)' }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  fontFamily: 'var(--font-source-sans), sans-serif',
                  fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'var(--forge-black)', backgroundColor: status === 'sending' ? 'var(--forge-bronze)' : 'var(--forge-gold)',
                  border: 'none', padding: '1.1rem 2.5rem',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  transition: 'background-color 0.25s ease',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={(e) => { if (status !== 'sending') e.currentTarget.style.backgroundColor = 'var(--forge-brass)' }}
                onMouseLeave={(e) => { if (status !== 'sending') e.currentTarget.style.backgroundColor = 'var(--forge-gold)' }}
              >
                <Send size={14} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* Contact info sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {contactInfo.map(({ Icon, label, value, href, sub }) => (
            <div
              key={label}
              style={{ border: '1px solid rgba(201,168,76,0.15)', padding: '1.75rem', backgroundColor: 'var(--forge-charcoal)', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}
            >
              <div style={{ width: '2.5rem', height: '2.5rem', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={15} color="var(--forge-gold)" strokeWidth={1.5} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--forge-bronze)', marginBottom: '0.3rem' }}>{label}</div>
                {href ? (
                  <a href={href} style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.2rem', color: 'var(--forge-ivory)', textDecoration: 'none', display: 'block', marginBottom: '0.3rem', transition: 'color 0.25s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--forge-gold)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--forge-ivory)' }}
                  >
                    {value}
                  </a>
                ) : (
                  <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.2rem', color: 'var(--forge-ivory)', marginBottom: '0.3rem' }}>{value}</div>
                )}
                <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.8rem', color: 'rgba(245,237,216,0.4)', lineHeight: 1.6 }}>{sub}</div>
              </div>
            </div>
          ))}

          {/* Estimate CTA */}
          <div style={{ backgroundColor: 'var(--forge-walnut)', padding: '2rem' }}>
            <h4 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.4rem', color: 'var(--forge-ivory)', marginBottom: '0.75rem' }}>
              Ready for a Full Estimate?
            </h4>
            <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(245,237,216,0.6)', marginBottom: '1.25rem' }}>
              Use our detailed estimate request form to provide project specifics and receive a comprehensive scope and budget consultation.
            </p>
            <Link href="/request-estimate" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forge-black)', backgroundColor: 'var(--forge-gold)', padding: '0.875rem 1.25rem', textDecoration: 'none', display: 'block', textAlign: 'center', transition: 'background-color 0.25s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--forge-brass)' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--forge-gold)' }}
            >
              Request Full Estimate
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
