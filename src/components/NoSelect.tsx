'use client'

export default function NoSelect({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{ userSelect: 'none', WebkitUserSelect: 'none' } as React.CSSProperties}
      onContextMenu={(e) => e.preventDefault()}
    >
      {children}
    </div>
  )
}
