'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'

const services = [
  { label: 'Kitchen Remodeling', href: '/services/kitchen-remodeling' },
  { label: 'Bathroom Remodeling', href: '/services/bathroom-remodeling' },
  { label: 'Full Home Renovation', href: '/services/full-home-renovation' },
  { label: 'Basement Finishing', href: '/services/basement-finishing' },
  { label: 'Roofing', href: '/services/roofing' },
  { label: 'Flooring', href: '/services/flooring' },
  { label: 'Interior Design', href: '/services/interior-design' },
  { label: 'Smart Home Upgrades', href: '/services/smart-home-upgrades' },
]

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Process', href: '/process' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openServices = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    setServicesOpen(true)
  }
  const closeServices = () => {
    closeTimerRef.current = setTimeout(() => setServicesOpen(false), 220)
  }
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setServicesOpen(false)
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    document.body.classList.toggle('nav-open', mobileOpen)
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('nav-open')
    }
  }, [mobileOpen])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: scrolled ? 'rgba(10,10,8,0.98)' : 'rgba(10,10,8,0.96)',
        borderBottom: '1px solid rgba(201,168,76,0.25)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'background-color 0.4s ease',
        minHeight: '96px',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '96px',
        }}>
          {/* Logo */}
          <Link href="/" style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontWeight: 600,
            color: 'var(--forge-gold)', textDecoration: 'none',
            textTransform: 'uppercase', flexShrink: 0,
            display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0,
          }}>
            <span style={{ display: 'flex', alignItems: 'center', height: '1em', overflow: 'visible', fontSize: 'clamp(1.5rem, 4vw, 2rem)', letterSpacing: '0.16em' }}>
              <span style={{ lineHeight: 1 }}>Forge</span>
              <span style={{ fontSize: '2.51em', letterSpacing: 0, lineHeight: 0.4, marginLeft: '-0.16em' }}>X</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="navbar-desktop">
            <div style={{ position: 'relative' }}>
              <button
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
                style={{
                  fontFamily: 'var(--font-source-sans), sans-serif',
                  fontSize: '0.78rem', fontWeight: 400, letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: isActive('/services') ? 'var(--forge-gold)' : 'var(--forge-ivory)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                  padding: 0, transition: 'color 0.25s ease',
                }}
              >
                Services <ChevronDown size={12} />
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                  style={{
                    position: 'absolute', top: '100%', left: '50%',
                    transform: 'translateX(-50%)', marginTop: '0.75rem',
                    backgroundColor: 'rgba(10,10,8,0.98)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                    padding: '1rem', minWidth: '220px',
                    display: 'flex', flexDirection: 'column', gap: '0.15rem', zIndex: 100,
                  }}
                >
                  <Link href="/services" style={{
                    fontFamily: 'var(--font-source-sans), sans-serif',
                    fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: 'var(--forge-gold)', textDecoration: 'none',
                    padding: '0.5rem 0.75rem',
                    borderBottom: '1px solid rgba(201,168,76,0.15)',
                    marginBottom: '0.25rem', display: 'block',
                  }}>
                    All Services
                  </Link>
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} style={{
                      fontFamily: 'var(--font-source-sans), sans-serif',
                      fontSize: '0.82rem', color: 'rgba(245,237,216,0.7)',
                      textDecoration: 'none', padding: '0.45rem 0.75rem',
                      transition: 'color 0.2s ease, background 0.2s ease', display: 'block',
                    }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--forge-ivory)'; e.currentTarget.style.background = 'rgba(201,168,76,0.06)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,237,216,0.7)'; e.currentTarget.style.background = 'none' }}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link" style={{
                fontFamily: 'var(--font-source-sans), sans-serif',
                fontSize: '0.78rem', fontWeight: 400, letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: isActive(link.href) ? 'var(--forge-gold)' : 'var(--forge-ivory)',
                textDecoration: 'none', transition: 'color 0.25s ease',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--forge-gold)' }}
                onMouseLeave={(e) => { if (!isActive(link.href)) e.currentTarget.style.color = 'var(--forge-ivory)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="navbar-ctas">
            <a href="tel:+14432721048" className="navbar-phone-cta" style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              textDecoration: 'none', flexShrink: 0,
            }}>
              <span className="navbar-phone-dot" />
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                <span style={{
                  fontFamily: 'var(--font-source-sans), sans-serif',
                  fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--forge-gold)', opacity: 0.7,
                }}>Free Consultation</span>
                <span style={{
                  fontFamily: 'var(--font-source-sans), sans-serif',
                  fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.04em',
                  color: 'var(--forge-gold)',
                }}>(443) 272-1048</span>
              </span>
            </a>
            <Link href="/request-estimate" className="navbar-estimate-btn" style={{
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--forge-black)',
              backgroundColor: 'var(--forge-gold)',
              border: '1px solid var(--forge-gold)', padding: '0.6rem 1.4rem',
              textDecoration: 'none',
              transition: 'background-color 0.25s ease, transform 0.2s ease, box-shadow 0.3s ease',
              display: 'inline-block',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--forge-brass)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--forge-gold)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Request Estimate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="navbar-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{
              background: 'none', border: 'none',
              color: mobileOpen ? 'var(--forge-gold)' : 'var(--forge-ivory)',
              cursor: 'pointer', padding: '0.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'color 0.2s ease',
            }}
          >
            {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile backdrop */}
      <div
        className="navbar-backdrop"
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          visibility: mobileOpen ? 'visible' : 'hidden',
        }}
      />

      {/* Mobile drawer */}
      <div
        className="navbar-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{ transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {/* Drawer header */}
        <div style={{
          height: '72px', flexShrink: 0,
          borderBottom: '1px solid rgba(201,168,76,0.12)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '0 1.25rem',
        }}>
          <Link href="/" style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontWeight: 600,
            color: 'var(--forge-gold)', textDecoration: 'none', textTransform: 'uppercase',
            display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0,
          }}>
            <span style={{ display: 'flex', alignItems: 'center', height: '1em', overflow: 'visible', fontSize: '1.6rem', letterSpacing: '0.16em' }}>
              <span style={{ lineHeight: 1 }}>Forge</span>
              <span style={{ fontSize: '2.51em', letterSpacing: 0, lineHeight: 0.4, marginLeft: '-0.16em' }}>X</span>
            </span>
          </Link>
          <button onClick={() => setMobileOpen(false)} style={{
            background: 'none', border: 'none', color: 'var(--forge-ivory)',
            cursor: 'pointer', padding: '0.5rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Nav items */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          {/* Services accordion */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            style={{
              width: '100%', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', padding: '1rem 1.25rem',
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              color: isActive('/services') ? 'var(--forge-gold)' : 'var(--forge-ivory)',
              background: 'none', border: 'none',
              borderBottom: '1px solid rgba(201,168,76,0.1)',
              cursor: 'pointer', textAlign: 'left', minHeight: '52px',
            }}
          >
            Services
            <ChevronDown size={14} color="var(--forge-gold)" style={{
              transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.28s ease', flexShrink: 0,
            }} />
          </button>

          <div style={{
            overflow: 'hidden',
            maxHeight: mobileServicesOpen ? '540px' : '0',
            transition: 'max-height 0.38s cubic-bezier(0.16, 1, 0.3, 1)',
            backgroundColor: 'rgba(201,168,76,0.03)',
          }}>
            <Link href="/services" style={{
              display: 'flex', alignItems: 'center',
              padding: '0.85rem 1.25rem 0.85rem 2rem', minHeight: '44px',
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--forge-gold)', textDecoration: 'none',
              borderBottom: '1px solid rgba(201,168,76,0.07)',
            }}>
              All Services
            </Link>
            {services.map((s) => (
              <Link key={s.href} href={s.href} style={{
                display: 'flex', alignItems: 'center',
                padding: '0.75rem 1.25rem 0.75rem 2rem', minHeight: '44px',
                fontFamily: 'var(--font-source-sans), sans-serif',
                fontSize: '0.88rem',
                color: isActive(s.href) ? 'var(--forge-gold)' : 'rgba(245,237,216,0.65)',
                textDecoration: 'none', borderBottom: '1px solid rgba(201,168,76,0.06)',
              }}>
                {s.label}
              </Link>
            ))}
          </div>

          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              display: 'flex', alignItems: 'center',
              padding: '1rem 1.25rem', minHeight: '52px',
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              color: isActive(link.href) ? 'var(--forge-gold)' : 'var(--forge-ivory)',
              textDecoration: 'none', borderBottom: '1px solid rgba(201,168,76,0.1)',
            }}>
              {link.label}
            </Link>
          ))}

          <Link href="/contact" style={{
            display: 'flex', alignItems: 'center',
            padding: '1rem 1.25rem', minHeight: '52px',
            fontFamily: 'var(--font-source-sans), sans-serif',
            fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase',
            color: isActive('/contact') ? 'var(--forge-gold)' : 'var(--forge-ivory)',
            textDecoration: 'none', borderBottom: '1px solid rgba(201,168,76,0.1)',
          }}>
            Contact
          </Link>
        </nav>

        {/* Drawer footer */}
        <div style={{
          padding: '1.25rem', borderTop: '1px solid rgba(201,168,76,0.15)',
          display: 'flex', flexDirection: 'column', gap: '0.75rem', flexShrink: 0,
        }}>
          <a href="tel:+14432721048" style={{
            display: 'flex', alignItems: 'center', gap: '0.65rem', minHeight: '52px',
            textDecoration: 'none',
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.25)',
            padding: '0.6rem 1rem',
          }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: 'var(--forge-gold)', flexShrink: 0,
              animation: 'phoneDotPulse 2.2s ease-in-out infinite',
            }} />
            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
              <span style={{
                fontFamily: 'var(--font-source-sans), sans-serif',
                fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--forge-gold)', opacity: 0.7,
              }}>Tap to Call — Free Consultation</span>
              <span style={{
                fontFamily: 'var(--font-source-sans), sans-serif',
                fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.04em',
                color: 'var(--forge-gold)',
              }}>(443) 272-1048</span>
            </span>
          </a>
          <Link href="/request-estimate" style={{
            fontFamily: 'var(--font-source-sans), sans-serif',
            fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--forge-black)',
            backgroundColor: 'var(--forge-gold)', padding: '0.9rem 1.25rem',
            textDecoration: 'none', display: 'flex', alignItems: 'center',
            justifyContent: 'center', minHeight: '48px',
          }}>
            Request Estimate
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes navBtnPop {
          0%, 100% { box-shadow: 0 4px 18px rgba(201,168,76,0.3); }
          50% { box-shadow: 0 6px 32px rgba(201,168,76,0.6), 0 0 0 3px rgba(201,168,76,0.15); }
        }
        .navbar-estimate-btn { animation: navBtnPop 2s ease-in-out infinite; }
        @keyframes phoneDotPulse {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(201,168,76,0.5); }
          50% { opacity: 0.85; transform: scale(1.15); box-shadow: 0 0 0 5px rgba(201,168,76,0); }
        }
        .navbar-phone-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--forge-gold); flex-shrink: 0;
          animation: phoneDotPulse 2.2s ease-in-out infinite;
        }
        .navbar-phone-cta { transition: opacity 0.2s ease; }
        .navbar-phone-cta:hover { opacity: 0.8; }
        .navbar-desktop { display: flex; align-items: center; gap: 1.75rem; }
        .navbar-ctas { display: flex; align-items: center; gap: 1rem; }
        .navbar-hamburger { display: none !important; }
        .navbar-backdrop {
          position: fixed; inset: 0; z-index: 98;
          background: rgba(0,0,0,0.65);
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        .navbar-drawer {
          position: fixed; top: 0; right: 0; bottom: 0;
          width: min(300px, 85vw);
          z-index: 99;
          background: var(--forge-black);
          border-left: 1px solid rgba(201,168,76,0.2);
          display: none;
          flex-direction: column;
          overflow-y: auto; overflow-x: hidden;
          transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @media (max-width: 900px) {
          .navbar-desktop { display: none !important; }
          .navbar-ctas { display: none !important; }
          .navbar-hamburger { display: flex !important; }
          .navbar-drawer { display: flex !important; }
        }
        @media (max-width: 1100px) and (min-width: 901px) {
          .navbar-desktop { gap: 1.25rem; }
          .navbar-desktop a, .navbar-desktop button { font-size: 0.72rem !important; }
        }
      `}</style>
    </>
  )
}
