export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--forge-black)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
      }}
    >
      {/* Logo */}
      <a
        href="/"
        style={{
          fontFamily: 'var(--font-cormorant), serif',
          fontSize: '1.8rem',
          fontWeight: 600,
          letterSpacing: '0.35em',
          color: 'var(--forge-gold)',
          textDecoration: 'none',
          textTransform: 'uppercase' as const,
          marginBottom: '0.5rem',
        }}
      >
        Forge X
      </a>

      {/* Ornament divider under logo */}
      <div
        style={{
          width: '3rem',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--forge-gold), transparent)',
          marginBottom: '2.5rem',
        }}
      />

      {/* Auth card */}
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          backgroundColor: 'var(--forge-charcoal)',
          border: '1px solid rgba(201, 168, 76, 0.2)',
          padding: '2.5rem',
        }}
      >
        {children}
      </div>

      {/* Footer note */}
      <p
        style={{
          marginTop: '2rem',
          fontFamily: 'var(--font-source-sans), sans-serif',
          fontSize: '0.75rem',
          letterSpacing: '0.04em',
          color: 'rgba(245, 237, 216, 0.3)',
          textAlign: 'center',
        }}
      >
        &copy; {new Date().getFullYear()} Forge X Construction. All rights reserved.
      </p>
    </div>
  )
}
