export default function TypingIndicator() {
  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'center', padding: '10px 0' }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            backgroundColor: 'var(--forge-bronze)',
            animation: `chatDot 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes chatDot {
          0%, 80%, 100% { opacity: 0.25; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
