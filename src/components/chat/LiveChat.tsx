'use client'

import { useState } from 'react'
import { MessageSquare, X } from 'lucide-react'
import ChatWindow from './ChatWindow'

export default function LiveChat() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Chat window */}
      {open && <ChatWindow onClose={() => setOpen(false)} />}

      {/* Floating trigger button */}
      <div className="chat-float-root" style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 199 }}>
        {/* Label */}
        {!open && (
          <div
            style={{
              position: 'absolute',
              right: 'calc(100% + 0.75rem)',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(28, 25, 23, 0.55)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(201,168,76,0.3)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
              padding: '0.45rem 0.85rem',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              opacity: 0,
              animation: 'chatLabelFade 0.4s ease 1.5s forwards',
            }}
          >
            <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', letterSpacing: '0.08em', color: 'rgba(245,237,216,0.65)' }}>
              Chat with us
            </span>
          </div>
        )}

        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close chat' : 'Open chat'}
          style={{
            width: '3.25rem',
            height: '3.25rem',
            borderRadius: '50%',
            backgroundColor: open ? 'var(--forge-charcoal)' : 'var(--forge-gold)',
            border: `1px solid ${open ? 'rgba(201,168,76,0.35)' : 'var(--forge-gold)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.25s ease, transform 0.2s ease, border-color 0.25s ease',
            boxShadow: open ? 'none' : '0 8px 32px rgba(201,168,76,0.25)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
        >
          {open
            ? <X size={18} color="rgba(245,237,216,0.7)" />
            : <MessageSquare size={18} color="var(--forge-black)" />
          }
        </button>
      </div>

      <style>{`
        @keyframes chatLabelFade {
          from { opacity: 0; transform: translateY(-50%) translateX(4px); }
          to   { opacity: 1; transform: translateY(-50%) translateX(0); }
        }
        /* Move chat up when mobile nav drawer opens, back down when closed */
        .chat-float-root { transition: bottom 0.38s cubic-bezier(0.16, 1, 0.3, 1); }
        body.nav-open .chat-float-root { bottom: 10rem !important; }
      `}</style>
    </>
  )
}
