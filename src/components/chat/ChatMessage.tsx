export type MessageRole = 'system' | 'user'

export interface ChatMsg {
  id: string
  role: MessageRole
  text: string
  ts: Date
}

interface Props {
  msg: ChatMsg
}

export default function ChatMessage({ msg }: Props) {
  const isSystem = msg.role === 'system'
  const time = msg.ts.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isSystem ? 'flex-start' : 'flex-end',
        gap: '4px',
      }}
    >
      <div
        style={{
          maxWidth: '85%',
          padding: '0.7rem 1rem',
          backgroundColor: isSystem ? 'var(--forge-charcoal)' : 'var(--forge-walnut)',
          border: isSystem ? '1px solid rgba(201,168,76,0.12)' : '1px solid rgba(201,168,76,0.25)',
          fontFamily: 'var(--font-source-sans), sans-serif',
          fontSize: '0.875rem',
          lineHeight: 1.6,
          color: isSystem ? 'rgba(245,237,216,0.85)' : 'var(--forge-ivory)',
        }}
      >
        {msg.text}
      </div>
      <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.65rem', color: 'rgba(245,237,216,0.25)', paddingLeft: '2px', paddingRight: '2px' }}>
        {time}
      </span>
    </div>
  )
}
