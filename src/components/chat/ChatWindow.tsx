'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { X, Check } from 'lucide-react'
import ChatMessage, { type ChatMsg } from './ChatMessage'
import ChatInput from './ChatInput'
import TypingIndicator from './TypingIndicator'

const FLOW = [
  { field: null, text: 'Welcome to Forge X. How can we help bring your renovation vision to life?' },
  { field: 'name', text: 'To connect you with the right person on our team, may I have your name?' },
  { field: 'email', text: 'And the best email address to follow up with you?' },
  { field: 'projectType', text: 'What type of project are you considering? (e.g., kitchen, bathroom, full renovation, or something else)' },
  { field: 'phone', text: 'Last question — a phone number where we can reach you? (Optional — you can skip by typing "skip")' },
  { field: null, text: 'Perfect. We have everything we need. A member of our team will reach out within one business day to schedule a private consultation. Thank you for considering Forge X.' },
]

type FlowData = { name?: string; email?: string; projectType?: string; phone?: string; message?: string }

interface Props {
  onClose: () => void
}

export default function ChatWindow({ onClose }: Props) {
  const pathname = usePathname()
  const [messages, setMessages] = useState<ChatMsg[]>([])
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FlowData>({})
  const [typing, setTyping] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [freeChat, setFreeChat] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  const addMsg = (role: 'system' | 'user', text: string) => {
    setMessages(prev => [
      ...prev,
      { id: crypto.randomUUID(), role, text, ts: new Date() },
    ])
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTyping(true)
      setTimeout(() => {
        setTyping(false)
        addMsg('system', FLOW[0].text)
        setStep(1)
      }, 900)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const handleSend = async (text: string) => {
    if (submitting) return
    addMsg('user', text)

    if (freeChat || submitted) {
      setTyping(true)
      setTimeout(() => {
        setTyping(false)
        addMsg('system', "Thank you for the additional context. A member of our team will review your message and follow up shortly.")
      }, 1000)
      return
    }

    const currentField = FLOW[step]?.field
    const newData = { ...data }

    if (currentField === 'phone' && text.toLowerCase() === 'skip') {
      newData.phone = undefined
    } else if (currentField) {
      newData[currentField as keyof FlowData] = text
    } else if (step === 0) {
      newData.message = text
    }

    setData(newData)

    const nextStep = step + 1
    setTyping(true)

    await new Promise(r => setTimeout(r, 800 + Math.random() * 400))
    setTyping(false)

    if (nextStep >= FLOW.length) {
      addMsg('system', FLOW[FLOW.length - 1].text)
      setSubmitted(true)
      setFreeChat(true)
      setSubmitting(true)

      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: 'bd8cbfa8-b0da-4871-bd72-dbdf0a9aa055',
            subject: `New Chat Inquiry — ${newData.projectType || 'General'} | Forge X GC`,
            from_name: newData.name || 'Website Visitor',
            email: newData.email || 'noreply@forgexgc.com',
            Phone: newData.phone || '—',
            'Project Type': newData.projectType || '—',
            Message: newData.message || '—',
            Source: pathname,
          }),
        })
      } catch {
        // silent fail — message already shown to user
      } finally {
        setSubmitting(false)
      }
    } else {
      addMsg('system', FLOW[nextStep].text)
      setStep(nextStep)
    }
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '5.5rem',
      right: '1.5rem',
      width: '360px',
      maxWidth: 'calc(100vw - 2rem)',
      height: '520px',
      maxHeight: 'calc(100dvh - 8rem)',
      backgroundColor: 'var(--forge-black)',
      border: '1px solid rgba(201,168,76,0.25)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      zIndex: 200,
      boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
    }}>

      {/* Header */}
      <div style={{
        padding: '1rem 1.25rem',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
        backgroundColor: 'var(--forge-charcoal)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--forge-gold)', textTransform: 'uppercase' }}>Forge X</div>
          <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.68rem', letterSpacing: '0.1em', color: 'rgba(245,237,216,0.4)', marginTop: '1px' }}>
            {submitted ? 'Inquiry received' : 'Renovation consultation'}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {submitted && <Check size={14} color="var(--forge-gold)" />}
          <button
            onClick={onClose}
            aria-label="Close chat"
            style={{ background: 'none', border: 'none', color: 'rgba(245,237,216,0.4)', cursor: 'pointer', padding: '4px', transition: 'color 0.2s ease', display: 'flex' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--forge-ivory)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,237,216,0.4)' }}
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {messages.map(msg => (
          <ChatMessage key={msg.id} msg={msg} />
        ))}
        {typing && (
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ backgroundColor: 'var(--forge-charcoal)', border: '1px solid rgba(201,168,76,0.12)', padding: '6px 12px' }}>
              <TypingIndicator />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <ChatInput
        onSend={handleSend}
        disabled={typing || submitting}
        placeholder={step === 0 ? 'Tell us about your project...' : 'Type your reply...'}
      />
    </div>
  )
}
