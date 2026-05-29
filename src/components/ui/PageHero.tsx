'use client'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  titleItalic?: string
  subtitle?: string
  breadcrumb?: BreadcrumbItem[]
  backgroundImage?: string
}

export default function PageHero({
  title,
  titleItalic,
  subtitle,
  breadcrumb,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '50vh',
        minHeight: '360px',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Background image layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundColor: backgroundImage ? undefined : 'var(--forge-charcoal)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.04)',
          transition: 'transform 0.6s ease',
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(10, 10, 8, 0.92) 0%, rgba(10, 10, 8, 0.55) 50%, rgba(10, 10, 8, 0.3) 100%)',
        }}
      />

      {/* Grain texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundSize: '200px',
          opacity: 0.25,
          pointerEvents: 'none',
        }}
      />

      {/* Gold top border accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background:
            'linear-gradient(90deg, transparent 0%, var(--forge-gold) 40%, var(--forge-brass) 60%, transparent 100%)',
          opacity: 0.5,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          padding: '0 2rem 3rem',
        }}
      >
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
              flexWrap: 'wrap' as const,
            }}
          >
            {breadcrumb.map((crumb, index) => (
              <span
                key={crumb.label}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                {index > 0 && (
                  <span
                    style={{
                      color: 'rgba(201, 168, 76, 0.4)',
                      fontSize: '0.6rem',
                    }}
                  >
                    /
                  </span>
                )}
                {crumb.href && index < breadcrumb.length - 1 ? (
                  <a
                    href={crumb.href}
                    style={{
                      fontFamily: 'var(--font-source-sans), sans-serif',
                      fontSize: '0.7rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase' as const,
                      color: 'rgba(245, 237, 216, 0.45)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span
                    style={{
                      fontFamily: 'var(--font-source-sans), sans-serif',
                      fontSize: '0.7rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase' as const,
                      color:
                        index === breadcrumb.length - 1
                          ? 'var(--forge-gold)'
                          : 'rgba(245, 237, 216, 0.45)',
                    }}
                  >
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Gold ornament line */}
        <div
          style={{
            width: '3rem',
            height: '1px',
            background:
              'linear-gradient(90deg, var(--forge-gold), var(--forge-brass))',
            marginBottom: '1rem',
          }}
        />

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(2.25rem, 5vw, 4rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: 'var(--forge-ivory)',
            margin: 0,
          }}
        >
          {title}
          {titleItalic && (
            <>
              {' '}
              <em
                style={{
                  fontStyle: 'italic',
                  color: 'var(--forge-gold)',
                }}
              >
                {titleItalic}
              </em>
            </>
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            style={{
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '1rem',
              lineHeight: 1.65,
              color: 'rgba(245, 237, 216, 0.65)',
              marginTop: '0.875rem',
              maxWidth: '560px',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
