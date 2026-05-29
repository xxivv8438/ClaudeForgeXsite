'use client'

import { useState, FormEvent } from 'react'
import { SERVICES } from '@/lib/data'
import { CheckCircle, Send } from 'lucide-react'

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

interface ContactFormProps {
  /** Dark background variant — labels and inputs adapt accordingly */
  dark?: boolean
  /** Optional heading shown inside the form card */
  heading?: string
}

export default function ContactForm({
  dark = true,
  heading,
}: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const labelColor = dark
    ? 'rgba(245, 237, 216, 0.6)'
    : 'var(--forge-bronze)'
  const inputBg = dark ? 'rgba(10, 10, 8, 0.5)' : 'var(--forge-cream)'
  const inputBorder = dark
    ? 'rgba(201, 168, 76, 0.2)'
    : 'rgba(61, 35, 20, 0.2)'
  const inputColor = dark ? 'var(--forge-ivory)' : 'var(--forge-charcoal)'
  const inputFocusBorder = 'var(--forge-gold)'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (error) setError(null)
  }

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget.style.borderColor = inputFocusBorder
    e.currentTarget.style.outline = 'none'
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget.style.borderColor = inputBorder
  }

  const inputBaseStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: inputBg,
    border: `1px solid ${inputBorder}`,
    color: inputColor,
    fontFamily: 'var(--font-source-sans), sans-serif',
    fontSize: '0.9rem',
    padding: '0.75rem 1rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    borderRadius: '1px',
    boxSizing: 'border-box' as const,
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-source-sans), sans-serif',
    fontSize: '0.65rem',
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    color: labelColor,
    marginBottom: '0.4rem',
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    // Basic validation beyond HTML5
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all required fields.')
      return
    }

    setSubmitting(true)

    // Simulate network request (replace with actual API call)
    await new Promise<void>((resolve) => setTimeout(resolve, 1200))

    setSubmitting(false)
    setSubmitted(true)
    setForm(initialState)
  }

  // ── Success state ─────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '3rem 2rem',
          gap: '1rem',
        }}
      >
        <CheckCircle
          size={48}
          style={{ color: 'var(--forge-gold)', strokeWidth: 1.25 }}
        />
        <h3
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: '1.75rem',
            fontWeight: 400,
            color: dark ? 'var(--forge-ivory)' : 'var(--forge-charcoal)',
            margin: 0,
          }}
        >
          Thank You
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-source-sans), sans-serif',
            fontSize: '0.9rem',
            lineHeight: 1.7,
            color: labelColor,
            maxWidth: '380px',
          }}
        >
          Your inquiry has been received. A member of the Forge X team will
          reach out within one business day to discuss your project.
        </p>
        <div
          style={{
            width: '3rem',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, var(--forge-gold), transparent)',
            marginTop: '0.5rem',
          }}
        />
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          style={{
            fontFamily: 'var(--font-source-sans), sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase' as const,
            color: 'var(--forge-gold)',
            background: 'none',
            border: '1px solid rgba(201, 168, 76, 0.3)',
            padding: '0.6rem 1.5rem',
            cursor: 'pointer',
            marginTop: '0.5rem',
          }}
        >
          Send Another Inquiry
        </button>
      </div>
    )
  }

  // ── Form ──────────────────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
      {/* Optional heading */}
      {heading && (
        <div style={{ marginBottom: '1.75rem' }}>
          <h3
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: '1.6rem',
              fontWeight: 400,
              color: dark ? 'var(--forge-ivory)' : 'var(--forge-charcoal)',
              margin: '0 0 0.5rem 0',
            }}
          >
            {heading}
          </h3>
          <div
            style={{
              width: '2.5rem',
              height: '1px',
              background:
                'linear-gradient(90deg, var(--forge-gold), var(--forge-brass))',
            }}
          />
        </div>
      )}

      {/* Two-column row: name + email */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '1rem',
        }}
      >
        {/* Name */}
        <div>
          <label htmlFor="contact-name" style={labelStyle}>
            Full Name <span style={{ color: 'var(--forge-gold)' }}>*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            placeholder="Your full name"
            style={inputBaseStyle}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" style={labelStyle}>
            Email Address <span style={{ color: 'var(--forge-gold)' }}>*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            placeholder="you@example.com"
            style={inputBaseStyle}
          />
        </div>
      </div>

      {/* Two-column row: phone + service */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '1rem',
        }}
      >
        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" style={labelStyle}>
            Phone Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="(555) 000-0000"
            style={inputBaseStyle}
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="contact-service" style={labelStyle}>
            Service of Interest
          </label>
          <select
            id="contact-service"
            name="service"
            value={form.service}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
              ...inputBaseStyle,
              appearance: 'none' as const,
              WebkitAppearance: 'none' as const,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23C9A84C' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.875rem center',
              paddingRight: '2.5rem',
              cursor: 'pointer',
              colorScheme: dark ? ('dark' as const) : ('light' as const),
            }}
          >
            <option value="">Select a service…</option>
            {SERVICES.map((svc) => (
              <option key={svc.id} value={svc.slug}>
                {svc.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div style={{ marginBottom: '1.25rem' }}>
        <label htmlFor="contact-message" style={labelStyle}>
          Project Description{' '}
          <span style={{ color: 'var(--forge-gold)' }}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
          rows={5}
          placeholder="Tell us about your project — scope, timeline, and any specific goals or concerns…"
          style={{
            ...inputBaseStyle,
            resize: 'vertical' as const,
            minHeight: '120px',
          }}
        />
      </div>

      {/* Error message */}
      {error && (
        <p
          role="alert"
          style={{
            fontFamily: 'var(--font-source-sans), sans-serif',
            fontSize: '0.8rem',
            color: 'oklch(0.577 0.245 27.325)',
            marginBottom: '1rem',
          }}
        >
          {error}
        </p>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={submitting}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontFamily: 'var(--font-source-sans), sans-serif',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.14em',
          textTransform: 'uppercase' as const,
          color: submitting ? 'rgba(10, 10, 8, 0.5)' : 'var(--forge-black)',
          backgroundColor: submitting
            ? 'var(--forge-brass)'
            : 'var(--forge-gold)',
          border: 'none',
          padding: '0.875rem 2rem',
          cursor: submitting ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.25s ease, opacity 0.25s ease',
          opacity: submitting ? 0.75 : 1,
        }}
        onMouseEnter={(e) => {
          if (!submitting) {
            e.currentTarget.style.backgroundColor = 'var(--forge-brass)'
          }
        }}
        onMouseLeave={(e) => {
          if (!submitting) {
            e.currentTarget.style.backgroundColor = 'var(--forge-gold)'
          }
        }}
      >
        <Send size={14} strokeWidth={1.75} />
        {submitting ? 'Sending…' : 'Send Inquiry'}
      </button>

      {/* Privacy note */}
      <p
        style={{
          fontFamily: 'var(--font-source-sans), sans-serif',
          fontSize: '0.7rem',
          color: dark ? 'rgba(245, 237, 216, 0.25)' : 'rgba(61, 35, 20, 0.4)',
          marginTop: '0.875rem',
          lineHeight: 1.5,
        }}
      >
        Your information is kept strictly confidential and will never be shared
        with third parties. By submitting, you agree to be contacted regarding
        your project.
      </p>
    </form>
  )
}
