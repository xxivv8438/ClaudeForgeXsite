'use client'

import { useState, useRef } from 'react'
import { Send, Mic, MicOff } from 'lucide-react'

interface Props {
  onSend: (text: string) => void
  disabled?: boolean
  placeholder?: string
}

export default function ChatInput({ onSend, disabled, placeholder = 'Type your message...' }: Props) {
  const [value, setValue] = useState('')
  const [listening, setListening] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const recognitionRef = useRef<any>(null)

  const submit = () => {
    const trimmed = value.trim()
    if (!trimmed || disabled) return
    onSend(trimmed)
    setValue('')
    if (textareaRef.current) textareaRef.current.style.height = 'auto'
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submit()
    }
  }

  const handleInput = () => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 120) + 'px'
  }

  const toggleListening = () => {
    if (listening) {
      recognitionRef.current?.stop()
      setListening(false)
      return
    }
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SR) return
    const r = new SR()
    r.continuous = false
    r.interimResults = false
    r.lang = 'en-US'
    r.onresult = (e: any) => {
      const transcript = Array.from(e.results).map((res: any) => res[0].transcript).join(' ')
      setValue(prev => prev ? prev + ' ' + transcript : transcript)
    }
    r.onend = () => setListening(false)
    r.onerror = () => setListening(false)
    recognitionRef.current = r
    r.start()
    setListening(true)
  }

  const SR_SUPPORTED = typeof window !== 'undefined' &&
    ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)

  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-end',
      gap: '0.5rem',
      padding: '0.875rem 1rem',
      borderTop: '1px solid rgba(201,168,76,0.12)',
      backgroundColor: 'var(--forge-charcoal)',
    }}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        disabled={disabled}
        placeholder={listening ? 'Listening...' : placeholder}
        rows={1}
        style={{
          flex: 1,
          resize: 'none',
          overflow: 'hidden',
          backgroundColor: 'transparent',
          border: 'none',
          outline: 'none',
          fontFamily: 'var(--font-source-sans), sans-serif',
          fontSize: '0.875rem',
          lineHeight: 1.5,
          color: disabled ? 'rgba(245,237,216,0.3)' : 'var(--forge-ivory)',
          padding: '0.25rem 0',
          minHeight: '24px',
        }}
      />

      {/* Mic button — only if browser supports it */}
      {SR_SUPPORTED && (
        <button
          onClick={toggleListening}
          disabled={disabled}
          aria-label={listening ? 'Stop listening' : 'Speak message'}
          style={{
            width: '2rem',
            height: '2rem',
            border: listening ? '1px solid rgba(220,50,50,0.5)' : '1px solid rgba(201,168,76,0.2)',
            backgroundColor: listening ? 'rgba(220,50,50,0.15)' : 'transparent',
            cursor: disabled ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            position: 'relative',
            transition: 'background-color 0.2s ease, border-color 0.2s ease',
          }}
        >
          {listening
            ? <MicOff size={13} color="rgba(220,80,80,0.9)" />
            : <Mic size={13} color="rgba(201,168,76,0.6)" />
          }
          {listening && (
            <span style={{
              position: 'absolute',
              top: '4px',
              right: '4px',
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              backgroundColor: '#e05050',
              animation: 'chatMicPulse 1s ease-in-out infinite',
            }} />
          )}
        </button>
      )}

      <button
        onClick={submit}
        disabled={!value.trim() || disabled}
        aria-label="Send message"
        style={{
          width: '2rem',
          height: '2rem',
          border: 'none',
          backgroundColor: value.trim() && !disabled ? 'var(--forge-gold)' : 'rgba(201,168,76,0.15)',
          cursor: value.trim() && !disabled ? 'pointer' : 'not-allowed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'background-color 0.2s ease',
        }}
      >
        <Send size={13} color={value.trim() && !disabled ? 'var(--forge-black)' : 'rgba(201,168,76,0.35)'} />
      </button>

      <style>{`
        @keyframes chatMicPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }
      `}</style>
    </div>
  )
}
