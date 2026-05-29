'use client'

import Link from 'next/link'
import { Camera, Globe, Share2, MessageSquare, Phone, Mail, MapPin } from 'lucide-react'

const companyLinks = [
  { label: 'About Forge X', href: '/about' },
  { label: 'Our Process', href: '/process' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Share Your Experience', href: '/submit-testimonial' },
  { label: 'Blog', href: '/blog' },
]

const serviceLinks = [
  { label: 'Kitchen Remodeling', href: '/services/kitchen-remodeling' },
  { label: 'Bathroom Remodeling', href: '/services/bathroom-remodeling' },
  { label: 'Full Home Renovation', href: '/services/full-home-renovation' },
  { label: 'Basement Finishing', href: '/services/basement-finishing' },
  { label: 'Roofing', href: '/services/roofing' },
  { label: 'Flooring', href: '/services/flooring' },
  { label: 'Interior Design', href: '/services/interior-design' },
  { label: 'Smart Home', href: '/services/smart-home-upgrades' },
]

const certifications = [
  'Fully Licensed & Insured',
  'Locally Owned & Operated',
  'Quality Work Guaranteed',
  'Bonded for Your Protection',
  'Free Estimates Available',
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'var(--forge-black)', borderTop: '1px solid rgba(201, 168, 76, 0.2)' }}>
      {/* Main footer */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem 4rem' }}>
        <div
          className="footer-grid"
          style={{
            display: 'grid',
          }}
        >
          {/* Brand column */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontWeight: 600,
                color: 'var(--forge-gold)',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 0,
                marginBottom: '1.25rem',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', height: '1em', overflow: 'visible', fontSize: '2.2rem', letterSpacing: '0.16em' }}>
                <span style={{ lineHeight: 1 }}>Forge</span>
                <span style={{ fontSize: '2.51em', letterSpacing: 0, lineHeight: 0.4, marginLeft: '-0.16em' }}>X</span>
              </span>
            </Link>
            <p
              style={{
                fontFamily: 'var(--font-source-sans), sans-serif',
                fontSize: '0.88rem',
                lineHeight: 1.8,
                color: 'rgba(245, 237, 216, 0.45)',
                marginBottom: '1.75rem',
              }}
            >
              Luxury renovation and general contracting. Built with precision, designed to last generations.
            </p>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
              {[
                { Icon: Phone, text: '(443) 272-1048', href: 'tel:+14432721048' },
                { Icon: Mail, text: 'info@forgexgc.com', href: 'mailto:info@forgexgc.com' },
                { Icon: MapPin, text: 'Baltimore · Rosedale · White Marsh · Joppatowne', href: null },
              ].map(({ Icon, text, href }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Icon size={13} color="var(--forge-bronze)" strokeWidth={1.5} />
                  {href ? (
                    <a
                      href={href}
                      style={{
                        fontFamily: 'var(--font-source-sans), sans-serif',
                        fontSize: '0.82rem',
                        color: 'rgba(245, 237, 216, 0.5)',
                        textDecoration: 'none',
                        transition: 'color 0.25s ease',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--forge-ivory)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245, 237, 216, 0.5)' }}
                    >
                      {text}
                    </a>
                  ) : (
                    <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.82rem', color: 'rgba(245, 237, 216, 0.5)' }}>
                      {text}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { Icon: Camera, label: 'Instagram' },
                { Icon: Globe, label: 'Facebook' },
                { Icon: Share2, label: 'LinkedIn' },
                { Icon: MessageSquare, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: '2rem',
                    height: '2rem',
                    border: '1px solid rgba(201, 168, 76, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(245, 237, 216, 0.4)',
                    transition: 'border-color 0.25s ease, color 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--forge-gold)'
                    e.currentTarget.style.color = 'var(--forge-gold)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.2)'
                    e.currentTarget.style.color = 'rgba(245, 237, 216, 0.4)'
                  }}
                >
                  <Icon size={13} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forge-gold)', marginBottom: '1.5rem' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-source-sans), sans-serif',
                      fontSize: '0.875rem',
                      color: 'rgba(245, 237, 216, 0.45)',
                      textDecoration: 'none',
                      transition: 'color 0.25s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--forge-ivory)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245, 237, 216, 0.45)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forge-gold)', marginBottom: '1.5rem' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-source-sans), sans-serif',
                      fontSize: '0.875rem',
                      color: 'rgba(245, 237, 216, 0.45)',
                      textDecoration: 'none',
                      transition: 'color 0.25s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--forge-ivory)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245, 237, 216, 0.45)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forge-gold)', marginBottom: '1.5rem' }}>
              Certifications
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {certifications.map((cert) => (
                <li key={cert} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--forge-gold)', marginTop: '0.55rem', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.82rem', color: 'rgba(245, 237, 216, 0.45)' }}>{cert}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div style={{ marginTop: '2.5rem' }}>
              <Link
                href="/request-estimate"
                style={{
                  fontFamily: 'var(--font-source-sans), sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--forge-black)',
                  backgroundColor: 'var(--forge-gold)',
                  padding: '0.75rem 1.25rem',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'background-color 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--forge-brass)' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--forge-gold)' }}
              >
                Request Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(201, 168, 76, 0.12)' }}>
        <div
          className="footer-bottom"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1rem', fontStyle: 'italic', color: 'rgba(245, 237, 216, 0.3)' }}>
            Crafted with integrity by Forge X.
          </p>
          <div className="footer-bottom-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link href="/privacy-policy" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', letterSpacing: '0.08em', color: 'rgba(245,237,216,0.3)', textDecoration: 'none', transition: 'color 0.25s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--forge-ivory)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,237,216,0.3)' }}
            >
              Privacy Policy
            </Link>
            <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', letterSpacing: '0.05em', color: 'rgba(245, 237, 216, 0.22)' }}>
              © {currentYear} Forge X Construction. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid { grid-template-columns: 280px 1fr 1fr 220px; gap: 4rem; }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .footer-bottom { flex-direction: column !important; text-align: center !important; }
          .footer-bottom-links { flex-direction: column !important; gap: 0.5rem !important; align-items: center !important; }
        }
      `}</style>
    </footer>
  )
}
