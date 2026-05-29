'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  LayoutDashboard,
  Users,
  FileSignature,
  FolderKanban,
  UserCog,
  Layers,
  LogOut,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react'

const navItems = [
  { label: 'Overview', href: '/admin', icon: LayoutDashboard },
  { label: 'Leads', href: '/admin/leads', icon: Users },
  { label: 'Quotes', href: '/admin/quotes', icon: FileSignature },
  { label: 'Projects', href: '/admin/projects', icon: FolderKanban },
  { label: 'Team', href: '/admin/team', icon: UserCog },
  { label: 'CMS', href: '/admin/cms', icon: Layers },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/admin') return pathname === '/admin'
    return pathname.startsWith(href)
  }

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: 'var(--forge-black)',
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: '260px',
          minWidth: '260px',
          backgroundColor: 'var(--forge-walnut)',
          borderRight: '1px solid rgba(201, 168, 76, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 40,
          overflowY: 'auto',
        }}
      >
        {/* Sidebar header */}
        <div
          style={{
            padding: '1.75rem 1.5rem',
            borderBottom: '1px solid rgba(201, 168, 76, 0.15)',
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: '1.4rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: 'var(--forge-gold)',
              textDecoration: 'none',
              textTransform: 'uppercase' as const,
              display: 'block',
            }}
          >
            Forge X
          </Link>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              marginTop: '0.35rem',
            }}
          >
            <ShieldCheck size={11} style={{ color: 'rgba(201, 168, 76, 0.6)' }} />
            <p
              style={{
                fontFamily: 'var(--font-source-sans), sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: 'rgba(201, 168, 76, 0.6)',
              }}
            >
              Admin Console
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav
          style={{
            flex: 1,
            padding: '1.25rem 0.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = isActive(href)
            return (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.65rem 0.875rem',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-source-sans), sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: active ? 600 : 400,
                  letterSpacing: '0.03em',
                  color: active ? 'var(--forge-gold)' : 'rgba(245, 237, 216, 0.55)',
                  backgroundColor: active
                    ? 'rgba(201, 168, 76, 0.12)'
                    : 'transparent',
                  borderLeft: active
                    ? '2px solid var(--forge-gold)'
                    : '2px solid transparent',
                  transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
                }}
              >
                <Icon
                  size={16}
                  strokeWidth={active ? 2 : 1.5}
                  style={{ flexShrink: 0 }}
                />
                {label}
                {active && (
                  <ChevronRight
                    size={12}
                    style={{ marginLeft: 'auto', opacity: 0.6 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Sidebar footer */}
        <div
          style={{
            padding: '1rem 0.75rem',
            borderTop: '1px solid rgba(201, 168, 76, 0.12)',
          }}
        >
          <Link
            href="/login"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.65rem 0.875rem',
              borderRadius: '2px',
              textDecoration: 'none',
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '0.85rem',
              letterSpacing: '0.03em',
              color: 'rgba(245, 237, 216, 0.35)',
              transition: 'color 0.2s ease',
            }}
          >
            <LogOut size={16} strokeWidth={1.5} style={{ flexShrink: 0 }} />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          marginLeft: '260px',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        {/* Top bar */}
        <header
          style={{
            height: '64px',
            borderBottom: '1px solid rgba(201, 168, 76, 0.1)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 2rem',
            backgroundColor: 'rgba(10, 10, 8, 0.7)',
            backdropFilter: 'blur(8px)',
            position: 'sticky',
            top: 0,
            zIndex: 30,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck
              size={14}
              style={{ color: 'var(--forge-gold)', opacity: 0.7 }}
            />
            <span
              style={{
                fontFamily: 'var(--font-source-sans), sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase' as const,
                color: 'rgba(245, 237, 216, 0.3)',
              }}
            >
              {navItems.find((item) => isActive(item.href))?.label ?? 'Admin'}
            </span>
          </div>
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-source-sans), sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                color: 'rgba(201, 168, 76, 0.5)',
                padding: '0.2rem 0.6rem',
                border: '1px solid rgba(201, 168, 76, 0.2)',
              }}
            >
              Admin
            </span>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                backgroundColor: 'var(--forge-walnut)',
                border: '1px solid rgba(201, 168, 76, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: '0.9rem',
                color: 'var(--forge-gold)',
              }}
            >
              A
            </div>
          </div>
        </header>

        {/* Page content */}
        <main
          style={{
            flex: 1,
            padding: '2rem',
            overflowY: 'auto',
          }}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
