interface SectionHeaderProps {
  eyebrow?: string
  title: string
  titleItalic?: string
  subtitle?: string
  centered?: boolean
  dark?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  titleItalic,
  subtitle,
  centered = false,
  dark = false,
}: SectionHeaderProps) {
  const textAlign = centered ? ('center' as const) : ('left' as const)
  const headingColor = dark ? 'var(--forge-ivory)' : 'var(--forge-charcoal)'
  const subtitleColor = dark
    ? 'rgba(245, 237, 216, 0.55)'
    : 'var(--forge-bronze)'
  const eyebrowColor = 'var(--forge-gold)'

  return (
    <div
      style={{
        textAlign,
        maxWidth: centered ? '680px' : undefined,
        margin: centered ? '0 auto' : undefined,
      }}
    >
      {/* Eyebrow label */}
      {eyebrow && (
        <p
          style={{
            fontFamily: 'var(--font-source-sans), sans-serif',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase' as const,
            color: eyebrowColor,
            marginBottom: '0.875rem',
          }}
        >
          {eyebrow}
        </p>
      )}

      {/* Gold ornament line */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: centered ? 'center' : 'flex-start',
          gap: centered ? '0.75rem' : '0',
          marginBottom: '1rem',
        }}
      >
        {centered && (
          <div
            style={{
              flex: 1,
              maxWidth: '3rem',
              height: '1px',
              background:
                'linear-gradient(90deg, transparent, var(--forge-gold))',
            }}
          />
        )}
        <div
          style={{
            width: centered ? '0.35rem' : '3rem',
            height: centered ? '0.35rem' : '1px',
            background: centered
              ? 'var(--forge-gold)'
              : 'linear-gradient(90deg, var(--forge-gold), var(--forge-brass))',
            borderRadius: centered ? '50%' : '0',
            flexShrink: 0,
          }}
        />
        {centered && (
          <div
            style={{
              flex: 1,
              maxWidth: '3rem',
              height: '1px',
              background:
                'linear-gradient(90deg, var(--forge-gold), transparent)',
            }}
          />
        )}
      </div>

      {/* Heading */}
      <h2
        style={{
          fontFamily: 'var(--font-cormorant), serif',
          fontSize: 'clamp(2rem, 4vw, 3.25rem)',
          fontWeight: 400,
          lineHeight: 1.12,
          color: headingColor,
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
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          style={{
            fontFamily: 'var(--font-source-sans), sans-serif',
            fontSize: '1rem',
            lineHeight: 1.75,
            color: subtitleColor,
            marginTop: '1rem',
            maxWidth: centered ? '560px' : '540px',
            marginLeft: centered ? 'auto' : undefined,
            marginRight: centered ? 'auto' : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
