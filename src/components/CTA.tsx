'use client'

import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, MapPin, Check, ChevronRight, ChevronLeft, Upload, MousePointer, Mic } from 'lucide-react'

const services = [
  'Kitchen Remodeling',
  'Bathroom Remodeling',
  'Full Home Renovation',
  'Basement Finishing',
  'Roofing',
  'Flooring',
  'Interior Design',
  'Smart Home Upgrades',
  'Painting',
  'Plumbing or Electrical',
  'Multiple Services',
  'Not Sure Yet',
]

const finishLevels = [
  {
    id: 'standard',
    label: 'Premium',
    desc: 'High-quality materials above builder grade. Our entry-level offering.',
    range: '$30k–$80k',
  },
  {
    id: 'luxury',
    label: 'Luxury',
    desc: 'Designer selections, custom cabinetry, and imported stone.',
    range: '$80k–$250k',
  },
  {
    id: 'ultra',
    label: 'Ultra Luxury',
    desc: 'No budget ceiling. Bespoke fabrication and rare materials.',
    range: '$250k+',
  },
]

const budgetRanges = [
  'Under $30,000',
  '$30,000 – $75,000',
  '$75,000 – $150,000',
  '$150,000 – $300,000',
  '$300,000 – $600,000',
  '$600,000+',
  'Flexible / not sure',
]

const timelines = [
  'As soon as possible',
  'Within 3 months',
  '3–6 months',
  '6–12 months',
  'Over 1 year',
  'Not sure yet',
]

const steps = [
  { num: 1, label: 'Service' },
  { num: 2, label: 'Scope' },
  { num: 3, label: 'Finish' },
  { num: 4, label: 'Budget' },
  { num: 5, label: 'Contact' },
]

type FormData = {
  services: string[]
  rooms: string[]
  sqft: string
  notes: string
  finishLevel: string
  budget: string
  timeline: string
  name: string
  email: string
  phone: string
  address: string
  howHeard: string
}

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const [step, setStep] = useState(1)
  const [maxStep, setMaxStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const recognitionRef = useRef<any>(null)
  const [form, setForm] = useState<FormData>({
    services: [],
    rooms: [],
    sqft: '',
    notes: '',
    finishLevel: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    howHeard: '',
  })
  const [photos, setPhotos] = useState<File[]>([])
  const photoInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const set = <K extends keyof FormData>(key: K, val: FormData[K]) =>
    setForm(prev => ({ ...prev, [key]: val }))

  const toggleService = (s: string) => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter(x => x !== s)
        : [...prev.services, s],
    }))
  }

  const toggleRoom = (room: string) => {
    setForm(prev => ({
      ...prev,
      rooms: prev.rooms.includes(room)
        ? prev.rooms.filter(r => r !== room)
        : [...prev.rooms, room],
    }))
  }

  const canProceed = () => {
    if (step === 1) return form.services.length > 0
    if (step === 2) return form.rooms.length > 0 && !!form.sqft.trim() && !!form.notes.trim()
    if (step === 3) return !!form.finishLevel
    if (step === 4) return !!form.budget && !!form.timeline
    if (step === 5) return !!form.name && !!form.email && !!form.phone
    return false
  }

  const stepHint = () => {
    if (step === 1) return 'Select at least one service above'
    if (step === 2) {
      if (form.rooms.length === 0) return 'Select at least one room or area'
      if (!form.sqft.trim()) return 'Enter approximate square footage'
      if (!form.notes.trim()) return 'Add a project description'
    }
    if (step === 3) return 'Choose a finish level above'
    if (step === 4) return !form.budget ? 'Select a budget range' : 'Select a start timeline'
    if (step === 5) return !form.name ? 'Enter your full name' : !form.email ? 'Enter your email address' : 'Enter your phone number'
    return ''
  }

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop()
      setIsListening(false)
      return
    }
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SR) return
    const recognition = new SR()
    recognition.continuous = true
    recognition.interimResults = false
    recognition.lang = 'en-US'
    recognition.onresult = (e: any) => {
      let transcript = ''
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) transcript += e.results[i][0].transcript
      }
      if (transcript) setForm(prev => ({ ...prev, notes: prev.notes + (prev.notes ? ' ' : '') + transcript }))
    }
    recognition.onend = () => setIsListening(false)
    recognition.onerror = () => setIsListening(false)
    recognitionRef.current = recognition
    recognition.start()
    setIsListening(true)
  }

  useEffect(() => {
    if (step !== 2 && recognitionRef.current) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }, [step])

  const mountedRef = useRef(false)
  useEffect(() => {
    if (!mountedRef.current) { mountedRef.current = true; return }
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [step])

  const handleSubmit = async () => {
    setSubmitting(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'bd8cbfa8-b0da-4871-bd72-dbdf0a9aa055',
          subject: `New Estimate Request — ${form.services.join(', ')} | Forge X GC`,
          from_name: form.name,
          email: form.email,
          Services: form.services.join(', '),
          'Finish Level': form.finishLevel,
          Budget: form.budget,
          Timeline: form.timeline,
          Rooms: form.rooms.join(', '),
          'Square Footage': form.sqft,
          'Project Description': form.notes,
          Phone: form.phone || '—',
          'Project Location': form.address || '—',
          'How Heard': form.howHeard || '—',
          ...(photos.length > 0 && { 'Photos Attached': photos.map(f => f.name).join(', ') }),
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        alert('Submission failed. Please call us at (443) 272-1048.')
      }
    } catch {
      alert('Network error. Please call us at (443) 272-1048.')
    } finally {
      setSubmitting(false)
    }
  }

  const goNext = () => {
    if (!canProceed()) return
    const next = step + 1
    setStep(next)
    setMaxStep(prev => Math.max(prev, next))
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'rgba(245, 237, 216, 0.05)',
    border: '1px solid rgba(201, 168, 76, 0.18)',
    padding: '0.75rem 1rem',
    fontFamily: 'var(--font-source-sans), sans-serif',
    fontSize: '0.88rem',
    color: 'var(--forge-ivory)',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.25s ease',
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--forge-walnut)',
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=60)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(61,35,20,0.95) 0%, rgba(28,25,23,0.9) 100%)',
        }}
      />

      <div
        className="cta-main-grid"
        style={{
          position: 'relative',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '7rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}
      >
        {/* Left: CTA copy */}
        <div style={{ paddingTop: '1rem' }}>
          <div
            className="reveal"
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}
          >
            <div style={{ height: '1px', width: '2.5rem', backgroundColor: 'var(--forge-gold)' }} />
            <span
              style={{
                fontFamily: 'var(--font-source-sans), sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--forge-gold)',
              }}
            >
              Start Your Project
            </span>
          </div>

          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: 'var(--forge-ivory)',
              marginBottom: '1.5rem',
            }}
          >
            Start Your
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--forge-gold)' }}>Dream Project</em>
          </h2>

          <p
            className="reveal reveal-delay-2"
            style={{
              fontFamily: 'var(--font-source-sans), sans-serif',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'rgba(245, 237, 216, 0.7)',
              marginBottom: '2.5rem',
              maxWidth: '440px',
            }}
          >
            Begin with a complimentary design consultation. We listen, we plan, and we
            deliver — on time, on budget, beyond expectation.
          </p>

          <div
            className="reveal reveal-delay-3"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
          >
            {[
              { icon: Phone, label: '(443) 272-1048', href: 'tel:+14432721048' },
              { icon: Mail, label: 'info@forgexgc.com', href: 'mailto:info@forgexgc.com' },
              { icon: MapPin, label: 'Baltimore · Rosedale · White Marsh · Joppatowne', href: '#' },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontFamily: 'var(--font-source-sans), sans-serif',
                  fontSize: '0.95rem',
                  color: 'rgba(245, 237, 216, 0.75)',
                  textDecoration: 'none',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--forge-gold)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245, 237, 216, 0.75)' }}
              >
                <Icon size={16} strokeWidth={1.5} color="var(--forge-gold)" />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Multi-step form */}
        <div
          className="reveal reveal-delay-2 cta-form-panel"
          style={{
            backgroundColor: 'rgba(10, 10, 8, 0.58)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(201, 168, 76, 0.22)',
            padding: '2rem',
          }}
        >
          {submitted ? (
            /* Success state */
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{
                width: '4rem', height: '4rem',
                border: '1px solid var(--forge-gold)', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 2rem',
              }}>
                <Check size={22} color="var(--forge-gold)" />
              </div>
              <div style={{ height: '1px', width: '2.5rem', backgroundColor: 'var(--forge-gold)', margin: '0 auto 1.5rem' }} />
              <h3 style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: '1.75rem', fontWeight: 300,
                color: 'var(--forge-ivory)', marginBottom: '0.75rem',
              }}>
                Request Received
              </h3>
              <p style={{
                fontFamily: 'var(--font-source-sans), sans-serif',
                fontSize: '0.9rem', lineHeight: 1.8,
                color: 'rgba(245,237,216,0.6)', marginBottom: '2rem',
              }}>
                Thank you, {form.name.split(' ')[0]}. We will reach out within one business day to schedule your private consultation.
              </p>
              <div style={{
                backgroundColor: 'rgba(245, 237, 216, 0.04)',
                border: '1px solid rgba(201,168,76,0.15)',
                padding: '1.25rem', textAlign: 'left',
              }}>
                {[
                  { label: 'Services', value: form.services.join(', ') },
                  { label: 'Finish Level', value: form.finishLevel },
                  { label: 'Budget', value: form.budget },
                  { label: 'Timeline', value: form.timeline },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.45rem 0', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
                    <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--forge-bronze)' }}>{label}</span>
                    <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.85rem', color: 'var(--forge-ivory)' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Progress stepper */}
              <div style={{ display: 'flex', marginBottom: '2rem', gap: 0 }}>
                {steps.map((s, i) => (
                  <div key={s.num} style={{ display: 'flex', alignItems: 'center', flex: i < steps.length - 1 ? 1 : 'none' }}>
                    <button
                      onClick={() => { if (s.num <= maxStep) setStep(s.num) }}
                      style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem',
                        background: 'none', border: 'none',
                        cursor: s.num <= maxStep ? 'pointer' : 'default',
                        padding: '0 0 0.75rem',
                        borderBottom: `2px solid ${step === s.num ? 'var(--forge-gold)' : s.num <= maxStep ? 'rgba(201,168,76,0.35)' : 'transparent'}`,
                        minWidth: '52px',
                      }}
                    >
                      <div style={{
                        width: '1.5rem', height: '1.5rem', borderRadius: '50%',
                        backgroundColor: s.num !== step && s.num <= maxStep ? 'var(--forge-gold)' : 'transparent',
                        border: `1px solid ${s.num <= maxStep ? 'var(--forge-gold)' : 'rgba(201,168,76,0.2)'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'background-color 0.25s ease, border-color 0.25s ease',
                      }}>
                        {s.num !== step && s.num <= maxStep
                          ? <Check size={9} color="var(--forge-black)" strokeWidth={2.5} />
                          : <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', color: step === s.num ? 'var(--forge-gold)' : 'rgba(245,237,216,0.3)' }}>{s.num}</span>
                        }
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-source-sans), sans-serif',
                        fontSize: '0.58rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: step === s.num ? 'var(--forge-gold)' : s.num <= maxStep ? 'rgba(245,237,216,0.55)' : 'rgba(245,237,216,0.3)',
                        whiteSpace: 'nowrap',
                        transition: 'color 0.25s ease',
                      }}>{s.label}</span>
                    </button>
                    {i < steps.length - 1 && (
                      <div style={{ flex: 1, height: '1px', backgroundColor: s.num < maxStep ? 'rgba(201,168,76,0.3)' : 'rgba(201,168,76,0.12)', marginBottom: '0.75rem', transition: 'background-color 0.3s ease' }} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step content */}
              <div style={{ minHeight: '280px' }}>

                {/* Step 1: Service */}
                {step === 1 && (
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.5rem', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '0.35rem' }}>
                      What are you looking to build?
                    </h3>
                    <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.82rem', color: 'rgba(245,237,216,0.4)', marginBottom: '1rem' }}>
                      Select all that apply.
                    </p>
                    {form.services.length === 0 && (
                      <div className="step1-hint" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                        marginBottom: '1.25rem',
                        padding: '0.4rem 0.75rem',
                        border: '1px solid rgba(201,168,76,0.3)',
                        backgroundColor: 'rgba(201,168,76,0.07)',
                      }}>
                        <MousePointer size={11} color="var(--forge-gold)" />
                        <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--forge-gold)' }}>
                          Tap a category to begin
                        </span>
                      </div>
                    )}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem' }} className="cta-service-grid">
                      {services.map(s => {
                        const selected = form.services.includes(s)
                        return (
                          <button
                            key={s}
                            onClick={() => toggleService(s)}
                            style={{
                              fontFamily: 'var(--font-source-sans), sans-serif',
                              fontSize: '0.78rem',
                              color: selected ? 'var(--forge-black)' : 'rgba(245,237,216,0.7)',
                              backgroundColor: selected ? 'var(--forge-gold)' : 'rgba(245, 237, 216, 0.05)',
                              border: `1px solid ${selected ? 'var(--forge-gold)' : 'rgba(201,168,76,0.15)'}`,
                              padding: '0.75rem 0.75rem',
                              cursor: 'pointer',
                              textAlign: 'left',
                              transition: 'all 0.2s ease',
                              lineHeight: 1.3,
                              display: 'flex', alignItems: 'center',
                              justifyContent: 'space-between', gap: '0.35rem',
                            }}
                            onMouseEnter={(e) => {
                              if (!selected) {
                                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'
                                e.currentTarget.style.color = 'var(--forge-ivory)'
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!form.services.includes(s)) {
                                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'
                                e.currentTarget.style.color = 'rgba(245,237,216,0.7)'
                              }
                            }}
                          >
                            <span style={{ lineHeight: 1.3 }}>{s}</span>
                            {selected && <Check size={11} color="var(--forge-black)" strokeWidth={2.5} style={{ flexShrink: 0 }} />}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Step 2: Scope */}
                {step === 2 && (
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.5rem', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '0.35rem' }}>
                      Tell us more about the scope
                    </h3>
                    <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.82rem', color: 'rgba(245,237,216,0.4)', marginBottom: '1.5rem' }}>
                      All fields required except photos.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div>
                        <label style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.4)', display: 'block', marginBottom: '0.6rem' }}>
                          Rooms or areas involved <span style={{ color: 'var(--forge-gold)' }}>*</span>
                        </label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {['Kitchen','Primary Bathroom','Guest Bathroom','Powder Room','Primary Bedroom','Living Room','Dining Room','Basement','Garage','Exterior','Full Home','Other'].map(room => (
                            <button key={room} onClick={() => toggleRoom(room)} style={{
                              fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.75rem',
                              color: form.rooms.includes(room) ? 'var(--forge-black)' : 'rgba(245,237,216,0.6)',
                              backgroundColor: form.rooms.includes(room) ? 'var(--forge-gold)' : 'transparent',
                              border: `1px solid ${form.rooms.includes(room) ? 'var(--forge-gold)' : 'rgba(201,168,76,0.2)'}`,
                              padding: '0.4rem 0.75rem', cursor: 'pointer', transition: 'all 0.2s ease',
                            }}>
                              {room}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="cta-sqft" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.4)', display: 'block', marginBottom: '0.4rem' }}>
                          Approximate square footage <span style={{ color: 'var(--forge-gold)' }}>*</span>
                        </label>
                        <input id="cta-sqft" type="text" placeholder="e.g. 400 sq ft kitchen, or 3,200 sq ft full home"
                          value={form.sqft} onChange={(e) => set('sqft', e.target.value)}
                          style={inputStyle}
                          onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)' }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.18)' }}
                        />
                      </div>
                      <div>
                        <label htmlFor="cta-notes" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.4)', display: 'block', marginBottom: '0.35rem' }}>
                          Project description <span style={{ color: 'var(--forge-gold)' }}>*</span>
                        </label>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.68rem', fontStyle: 'italic', color: isListening ? 'rgba(220,100,100,0.7)' : 'rgba(201,168,76,0.4)', transition: 'color 0.25s ease', margin: 0 }}>
                            {isListening ? 'Listening — speak freely' : "Speak to add description — don't worry about mistakes"}
                          </p>
                          <button
                            onClick={toggleListening}
                            style={{
                              display: 'flex', alignItems: 'center', gap: '0.3rem', flexShrink: 0,
                              background: 'none',
                              border: `1px solid ${isListening ? 'rgba(220,80,80,0.55)' : 'rgba(201,168,76,0.25)'}`,
                              color: isListening ? 'rgba(220,100,100,0.9)' : 'rgba(201,168,76,0.65)',
                              padding: '0.25rem 0.6rem', cursor: 'pointer',
                              fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.65rem', letterSpacing: '0.06em',
                              transition: 'all 0.25s ease', marginLeft: '0.75rem',
                            }}
                          >
                            {isListening
                              ? <><span className="mic-dot" /> Stop</>
                              : <><Mic size={10} /> Speak</>
                            }
                          </button>
                        </div>
                        <textarea id="cta-notes" rows={3} placeholder="Describe your vision, specific features, or any relevant context..."
                          value={form.notes} onChange={(e) => set('notes', e.target.value)}
                          style={{ ...inputStyle, resize: 'vertical', borderColor: isListening ? 'rgba(220,80,80,0.4)' : 'rgba(201,168,76,0.18)' }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = isListening ? 'rgba(220,80,80,0.4)' : 'rgba(201,168,76,0.45)' }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = isListening ? 'rgba(220,80,80,0.4)' : 'rgba(201,168,76,0.18)' }}
                        />
                      </div>
                      <div>
                        <label style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.4)', display: 'block', marginBottom: '0.4rem' }}>
                          Project photos (optional)
                        </label>
                        <input
                          ref={photoInputRef}
                          type="file"
                          multiple
                          accept="image/jpeg,image/png,application/pdf"
                          style={{ display: 'none' }}
                          onChange={(e) => { if (e.target.files) setPhotos(Array.from(e.target.files)) }}
                        />
                        <div
                          style={{ border: '1px dashed rgba(201,168,76,0.2)', padding: '1.75rem', textAlign: 'center', cursor: 'pointer', backgroundColor: 'rgba(245,237,216,0.03)', transition: 'border-color 0.25s ease' }}
                          onClick={() => photoInputRef.current?.click()}
                          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)' }}
                          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)' }}
                          onDragOver={(e) => { e.preventDefault(); e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)' }}
                          onDragLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)' }}
                          onDrop={(e) => {
                            e.preventDefault()
                            e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'
                            const dropped = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/') || f.type === 'application/pdf')
                            if (dropped.length) setPhotos(prev => [...prev, ...dropped])
                          }}
                        >
                          <Upload size={20} color="var(--forge-bronze)" strokeWidth={1.5} style={{ margin: '0 auto 0.5rem', display: 'block' }} />
                          {photos.length > 0 ? (
                            <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.78rem', color: 'rgba(245,237,216,0.65)', lineHeight: 1.6 }}>
                              {photos.map((f, i) => <div key={i}>{f.name}</div>)}
                            </div>
                          ) : (
                            <>
                              <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.8rem', color: 'rgba(245,237,216,0.35)' }}>
                                Drop photos here or click to upload
                              </div>
                              <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', color: 'rgba(245,237,216,0.22)', marginTop: '0.25rem' }}>
                                JPG, PNG, PDF up to 20MB each
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Finish level */}
                {step === 3 && (
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.5rem', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '0.35rem' }}>
                      What finish level are you envisioning?
                    </h3>
                    <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.82rem', color: 'rgba(245,237,216,0.4)', marginBottom: '1.5rem' }}>
                      This helps us calibrate materials, tradespeople, and budget range.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {finishLevels.map(({ id, label, desc, range }) => (
                        <button
                          key={id}
                          onClick={() => set('finishLevel', label)}
                          style={{
                            textAlign: 'left', padding: '1.25rem 1.5rem', cursor: 'pointer',
                            backgroundColor: form.finishLevel === label ? 'rgba(61,35,20,0.7)' : 'rgba(245, 237, 216, 0.04)',
                            border: `1px solid ${form.finishLevel === label ? 'var(--forge-gold)' : 'rgba(201,168,76,0.15)'}`,
                            transition: 'all 0.2s ease',
                            display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'start',
                          }}
                          onMouseEnter={(e) => {
                            if (form.finishLevel !== label) e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'
                          }}
                          onMouseLeave={(e) => {
                            if (form.finishLevel !== label) e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'
                          }}
                        >
                          <div>
                            <h4 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.2rem', fontWeight: 400, color: 'var(--forge-ivory)', marginBottom: '0.25rem' }}>{label}</h4>
                            <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.8rem', color: 'rgba(245,237,216,0.55)', lineHeight: 1.55 }}>{desc}</p>
                          </div>
                          <div style={{ textAlign: 'right', flexShrink: 0 }}>
                            <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--forge-gold)', whiteSpace: 'nowrap' }}>{range}</div>
                            {form.finishLevel === label && (
                              <div style={{ marginTop: '0.4rem', display: 'flex', justifyContent: 'flex-end' }}>
                                <div style={{ width: '1.25rem', height: '1.25rem', borderRadius: '50%', backgroundColor: 'var(--forge-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  <Check size={9} color="var(--forge-black)" strokeWidth={2.5} />
                                </div>
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Budget & Timeline */}
                {step === 4 && (
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.5rem', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '0.35rem' }}>
                      Budget and timeline
                    </h3>
                    <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.82rem', color: 'rgba(245,237,216,0.4)', marginBottom: '1.5rem' }}>
                      All information is completely confidential.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="cta-budget-grid">
                      <div>
                        <label style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.4)', display: 'block', marginBottom: '0.75rem' }}>
                          Total budget
                        </label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          {budgetRanges.map(b => (
                            <button key={b} onClick={() => set('budget', b)} style={{
                              textAlign: 'left', padding: '0.6rem 0.875rem',
                              backgroundColor: form.budget === b ? 'rgba(61,35,20,0.7)' : 'rgba(245,237,216,0.04)',
                              border: `1px solid ${form.budget === b ? 'var(--forge-gold)' : 'rgba(201,168,76,0.12)'}`,
                              fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.78rem',
                              color: form.budget === b ? 'var(--forge-ivory)' : 'rgba(245,237,216,0.6)',
                              cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                              transition: 'all 0.2s ease',
                            }}>
                              {b}
                              {form.budget === b && <Check size={11} color="var(--forge-gold)" />}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.4)', display: 'block', marginBottom: '0.75rem' }}>
                          Start timeline
                        </label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          {timelines.map(t => (
                            <button key={t} onClick={() => set('timeline', t)} style={{
                              textAlign: 'left', padding: '0.6rem 0.875rem',
                              backgroundColor: form.timeline === t ? 'rgba(61,35,20,0.7)' : 'rgba(245,237,216,0.04)',
                              border: `1px solid ${form.timeline === t ? 'var(--forge-gold)' : 'rgba(201,168,76,0.12)'}`,
                              fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.78rem',
                              color: form.timeline === t ? 'var(--forge-ivory)' : 'rgba(245,237,216,0.6)',
                              cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                              transition: 'all 0.2s ease',
                            }}>
                              {t}
                              {form.timeline === t && <Check size={11} color="var(--forge-gold)" />}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Contact */}
                {step === 5 && (
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.5rem', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '0.35rem' }}>
                      How should we reach you?
                    </h3>
                    <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.82rem', color: 'rgba(245,237,216,0.4)', marginBottom: '1.5rem' }}>
                      We follow up within one business day.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="cta-form-two-col">
                        {[
                          { id: 'name', label: 'Full Name *', type: 'text', placeholder: 'Your full name' },
                          { id: 'email', label: 'Email *', type: 'email', placeholder: 'your@email.com' },
                        ].map(({ id, label, type, placeholder }) => (
                          <div key={id}>
                            <label htmlFor={`cta-${id}`} style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.4)', display: 'block', marginBottom: '0.4rem' }}>{label}</label>
                            <input id={`cta-${id}`} type={type} placeholder={placeholder}
                              value={form[id as keyof FormData] as string}
                              onChange={(e) => set(id as keyof FormData, e.target.value)}
                              style={inputStyle}
                              onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)' }}
                              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.18)' }}
                            />
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="cta-form-two-col">
                        {[
                          { id: 'phone', label: 'Phone *', type: 'tel', placeholder: '(000) 000-0000' },
                          { id: 'address', label: 'Project Location', type: 'text', placeholder: 'City, State' },
                        ].map(({ id, label, type, placeholder }) => (
                          <div key={id}>
                            <label htmlFor={`cta-${id}`} style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.4)', display: 'block', marginBottom: '0.4rem' }}>{label}</label>
                            <input id={`cta-${id}`} type={type} placeholder={placeholder}
                              value={form[id as keyof FormData] as string}
                              onChange={(e) => set(id as keyof FormData, e.target.value)}
                              style={inputStyle}
                              onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)' }}
                              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.18)' }}
                            />
                          </div>
                        ))}
                      </div>
                      <div>
                        <label style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.4)', display: 'block', marginBottom: '0.4rem' }}>
                          How did you hear about Forge X?
                        </label>
                        <select value={form.howHeard} onChange={(e) => set('howHeard', e.target.value)}
                          style={{ ...inputStyle, cursor: 'pointer', color: form.howHeard ? 'var(--forge-ivory)' : 'rgba(245,237,216,0.35)' }}>
                          <option value="">Select one</option>
                          {['Google Search','Houzz','Referral from Friend or Family','Referral from Designer or Architect','Instagram','Previous Client','Drove By a Project','Other'].map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      {/* Summary */}
                      <div style={{ backgroundColor: 'rgba(245, 237, 216, 0.04)', border: '1px solid rgba(201,168,76,0.12)', padding: '1.25rem' }}>
                        <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forge-gold)', marginBottom: '0.75rem' }}>Project Summary</div>
                        {[
                          { label: 'Services', value: form.services.join(', ') },
                          { label: 'Finish Level', value: form.finishLevel },
                          { label: 'Budget', value: form.budget },
                          { label: 'Timeline', value: form.timeline },
                          ...(form.rooms.length > 0 ? [{ label: 'Rooms', value: form.rooms.join(', ') }] : []),
                        ].map(({ label, value }) => (
                          <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px solid rgba(201,168,76,0.07)' }}>
                            <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', color: 'var(--forge-bronze)', letterSpacing: '0.06em' }}>{label}</span>
                            <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.78rem', color: 'rgba(245,237,216,0.65)', maxWidth: '60%', textAlign: 'right' }}>{value || '—'}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(201,168,76,0.12)', paddingTop: '1.5rem' }}>
                {!canProceed() && stepHint() && (
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.85rem' }}>
                    <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', fontStyle: 'italic', color: 'rgba(201,168,76,0.6)', letterSpacing: '0.05em' }}>
                      ↑ {stepHint()}
                    </span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {step > 1 ? (
                    <button onClick={() => setStep(s => s - 1)} style={{
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(245,237,216,0.5)', background: 'none',
                      border: '1px solid rgba(201,168,76,0.2)',
                      padding: '0.75rem 1.25rem', cursor: 'pointer', transition: 'all 0.25s ease',
                    }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--forge-ivory)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,237,216,0.5)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)' }}
                    >
                      <ChevronLeft size={12} /> Back
                    </button>
                  ) : <div />}

                  {step < 5 ? (
                    <button
                      onClick={goNext}
                      disabled={!canProceed()}
                      className={canProceed() ? 'continue-btn-active' : ''}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                        fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: canProceed() ? 'var(--forge-black)' : 'rgba(245,237,216,0.25)',
                        backgroundColor: canProceed() ? 'var(--forge-gold)' : 'rgba(201,168,76,0.1)',
                        border: 'none', padding: '0.75rem 1.75rem',
                        cursor: canProceed() ? 'pointer' : 'not-allowed',
                        transition: 'background-color 0.25s ease, box-shadow 0.3s ease, transform 0.2s ease',
                      }}
                      onMouseEnter={(e) => { if (canProceed()) { e.currentTarget.style.backgroundColor = 'var(--forge-brass)'; e.currentTarget.style.transform = 'translateY(-1px)' } }}
                      onMouseLeave={(e) => { if (canProceed()) { e.currentTarget.style.backgroundColor = 'var(--forge-gold)'; e.currentTarget.style.transform = 'translateY(0)' } }}
                    >
                      Continue <ChevronRight size={12} />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!canProceed() || submitting}
                      className={canProceed() && !submitting ? 'continue-btn-active' : ''}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                        fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: canProceed() ? 'var(--forge-black)' : 'rgba(245,237,216,0.25)',
                        backgroundColor: canProceed() ? 'var(--forge-gold)' : 'rgba(201,168,76,0.1)',
                        border: 'none', padding: '0.75rem 2rem',
                        cursor: canProceed() && !submitting ? 'pointer' : 'not-allowed',
                        transition: 'background-color 0.25s ease, box-shadow 0.3s ease, transform 0.2s ease',
                      }}
                      onMouseEnter={(e) => { if (canProceed() && !submitting) { e.currentTarget.style.backgroundColor = 'var(--forge-brass)'; e.currentTarget.style.transform = 'translateY(-1px)' } }}
                      onMouseLeave={(e) => { if (canProceed() && !submitting) { e.currentTarget.style.backgroundColor = 'var(--forge-gold)'; e.currentTarget.style.transform = 'translateY(0)' } }}
                    >
                      {submitting ? 'Submitting...' : 'Submit Request'}
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes hintPulse {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        @keyframes micPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }
        .mic-dot { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: rgba(220,80,80,0.9); animation: micPulse 0.85s ease-in-out infinite; }
        @keyframes panelGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201,168,76,0); }
          50% { box-shadow: 0 0 40px 0 rgba(201,168,76,0.13); }
        }
        @keyframes btnPop {
          0%, 100% { box-shadow: 0 4px 20px rgba(201,168,76,0.25); }
          50% { box-shadow: 0 6px 36px rgba(201,168,76,0.55), 0 0 0 3px rgba(201,168,76,0.12); }
        }
        .step1-hint { animation: hintPulse 2s ease-in-out infinite; }
        .cta-form-panel { animation: panelGlow 3s ease-in-out 0.8s 3; }
        .continue-btn-active { animation: btnPop 1.8s ease-in-out infinite; }
        @media (max-width: 900px) {
          .cta-main-grid { gap: 3rem !important; }
        }
        @media (max-width: 640px) {
          .cta-main-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; padding: 4.5rem 1.25rem !important; }
          .cta-form-panel { padding: 1.5rem 1.25rem !important; }
          .cta-service-grid { grid-template-columns: 1fr 1fr !important; }
          .cta-form-two-col { grid-template-columns: 1fr !important; }
          .cta-budget-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 380px) {
          .cta-service-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
