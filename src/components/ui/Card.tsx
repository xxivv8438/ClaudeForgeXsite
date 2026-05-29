import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  dark?: boolean
  hover?: boolean
  className?: string
}

export default function Card({
  children,
  dark = false,
  hover = false,
  className,
}: CardProps) {
  const backgroundColor = dark ? 'var(--forge-walnut)' : 'var(--forge-cream)'
  const borderColor = dark
    ? 'rgba(201, 168, 76, 0.18)'
    : 'rgba(61, 35, 20, 0.12)'

  return (
    <div
      className={cn(className)}
      style={{
        backgroundColor,
        border: `1px solid ${borderColor}`,
        padding: '1.75rem',
        position: 'relative',
        transition: hover
          ? 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease'
          : undefined,
        cursor: hover ? 'default' : undefined,
      }}
      onMouseEnter={
        hover
          ? (e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.transform = 'translateY(-4px)'
              el.style.boxShadow = dark
                ? '0 12px 40px rgba(0, 0, 0, 0.5)'
                : '0 12px 40px rgba(61, 35, 20, 0.12)'
              el.style.borderColor = dark
                ? 'rgba(201, 168, 76, 0.35)'
                : 'rgba(61, 35, 20, 0.22)'
            }
          : undefined
      }
      onMouseLeave={
        hover
          ? (e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
              el.style.borderColor = borderColor
            }
          : undefined
      }
    >
      {/* Top-edge gold accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, var(--forge-gold), transparent)',
          opacity: dark ? 0.35 : 0.2,
        }}
      />
      {children}
    </div>
  )
}
