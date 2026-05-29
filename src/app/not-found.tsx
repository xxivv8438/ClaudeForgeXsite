import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      backgroundColor: 'var(--forge-black)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <div>
        <div style={{
          fontFamily: 'var(--font-cormorant), serif',
          fontSize: 'clamp(6rem, 20vw, 14rem)',
          fontWeight: 300,
          color: 'rgba(201,168,76,0.12)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
          userSelect: 'none',
        }}>
          404
        </div>

        <div style={{
          height: '1px',
          width: '3rem',
          backgroundColor: 'var(--forge-gold)',
          margin: '0 auto 2rem',
        }} />

        <h1 style={{
          fontFamily: 'var(--font-cormorant), serif',
          fontSize: 'clamp(1.75rem, 4vw, 3rem)',
          fontWeight: 300,
          color: 'var(--forge-ivory)',
          marginBottom: '1rem',
          lineHeight: 1.2,
        }}>
          Page Not Found
        </h1>

        <p style={{
          fontFamily: 'var(--font-source-sans), sans-serif',
          fontSize: '0.95rem',
          color: 'rgba(245,237,216,0.5)',
          lineHeight: 1.8,
          maxWidth: '400px',
          margin: '0 auto 2.5rem',
        }}>
          This page doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--forge-black)', backgroundColor: 'var(--forge-gold)',
              padding: '0.85rem 2rem', textDecoration: 'none', display: 'inline-block',
            }}
          >
            Return Home
          </Link>
          <Link
            href="/request-estimate"
            style={{
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--forge-ivory)', border: '1px solid rgba(245,237,216,0.35)',
              padding: '0.85rem 2rem', textDecoration: 'none', display: 'inline-block',
            }}
          >
            Get Estimate
          </Link>
        </div>
      </div>
    </div>
  )
}
