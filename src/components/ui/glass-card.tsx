import { cn } from "@/lib/utils"

function GlassCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="glass-card"
      className={cn(
        "flex flex-col gap-6 py-6",
        className,
      )}
      style={{
        background: 'rgba(28, 25, 23, 0.5)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(201, 168, 76, 0.18)',
        color: 'var(--forge-ivory)',
      }}
      {...props}
    />
  )
}

function GlassCardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="glass-card-header"
      className={cn(
        "grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-5 has-data-[slot=glass-card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  )
}

function GlassCardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="glass-card-title"
      className={cn("leading-none font-semibold", className)}
      style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.35rem', color: 'var(--forge-ivory)' }}
      {...props}
    />
  )
}

function GlassCardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="glass-card-description"
      className={cn("text-sm", className)}
      style={{ color: 'rgba(245,237,216,0.55)', fontFamily: 'var(--font-source-sans), sans-serif' }}
      {...props}
    />
  )
}

function GlassCardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="glass-card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  )
}

function GlassCardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="glass-card-content"
      className={cn("px-5", className)}
      {...props}
    />
  )
}

function GlassCardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="glass-card-footer"
      className={cn("flex items-center px-5 [.border-t]:pt-6", className)}
      style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}
      {...props}
    />
  )
}

export {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardAction,
  GlassCardContent,
  GlassCardFooter,
}
