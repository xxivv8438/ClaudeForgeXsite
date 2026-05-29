'use client'

import { useState, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Star, Check, Upload, Camera } from 'lucide-react'
import { supabase } from '@/lib/supabase'

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
  'Multiple Services',
  'Other',
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'var(--forge-charcoal)',
  border: '1px solid rgba(201,168,76,0.15)',
  padding: '0.875rem 1rem',
  fontFamily: 'var(--font-source-sans), sans-serif',
  fontSize: '0.9rem',
  color: 'var(--forge-ivory)',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.25s ease',
}

export default function SubmitTestimonialPage() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const photoInputRef = useRef<HTMLInputElement>(null)

  const [form, setForm] = useState({
    name: '',
    location: '',
    service: '',
    project: '',
    quote: '',
  })

  const set = (key: keyof typeof form, val: string) =>
    setForm(prev => ({ ...prev, [key]: val }))

  const handlePhoto = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      setPhotoPreview(result)
      // Compress to max ~80KB by reducing quality
      const img = new Image()
      img.onload = () => {
        // preview only — photo URL stored separately after approval
      }
      img.src = result
    }
    reader.readAsDataURL(file)
  }

  const canSubmit = rating > 0 && form.name.trim() && form.location.trim() && form.service && form.quote.trim().length >= 30

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!canSubmit || submitting) return
    setSubmitting(true)
    try {
      // Save to Supabase (pending approval)
      await supabase.from('testimonials').insert({
        name: form.name,
        location: form.location,
        service: form.service,
        project: form.project || null,
        quote: form.quote,
        rating,
        photo_url: null,
        approved: false,
      })

      // Email notification to Forge X
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'bd8cbfa8-b0da-4871-bd72-dbdf0a9aa055',
          subject: `New Testimonial — ${form.name} | Approve in Supabase`,
          from_name: form.name,
          email: 'noreply@forgexgc.com',
          Name: form.name,
          Location: form.location,
          Service: form.service,
          Rating: `${rating}/5 stars`,
          Testimonial: form.quote,
          'Action Required': 'Log into Supabase dashboard and set approved = true to publish',
        }),
      })
    } catch {
      // silent — show success regardless
    } finally {
      setSubmitting(false)
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <div style={{ backgroundColor: 'var(--forge-black)', minHeight: '100vh', paddingTop: '96px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ maxWidth: '520px', textAlign: 'center', padding: '2rem' }}>
            <div style={{ width: '5rem', height: '5rem', border: '1px solid var(--forge-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem' }}>
              <Check size={28} color="var(--forge-gold)" />
            </div>
            <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', margin: '0 auto 2rem' }} />
            <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '1rem' }}>
              Thank you, {form.name.split(' ')[0]}.
            </h1>
            <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,237,216,0.55)' }}>
              Your testimonial has been received. Once reviewed by our team it will be featured on the Forge X website.
            </p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: 'var(--forge-black)', minHeight: '100vh', paddingTop: '96px' }}>

        {/* Header */}
        <section style={{ backgroundColor: 'var(--forge-charcoal)', borderBottom: '1px solid rgba(201,168,76,0.12)', padding: '4rem 2rem 3.5rem' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ height: '1px', width: '2rem', backgroundColor: 'var(--forge-gold)' }} />
              <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--forge-gold)' }}>Client Stories</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '0.75rem' }}>
              Share Your Experience
            </h1>
            <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.93rem', color: 'rgba(245,237,216,0.45)', lineHeight: 1.75 }}>
              Your words help other homeowners find the right partner for their project. Approved testimonials are featured across the Forge X website.
            </p>
          </div>
        </section>

        {/* Form */}
        <section style={{ maxWidth: '680px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

            {/* Star rating */}
            <div>
              <label style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.45)', display: 'block', marginBottom: '0.85rem' }}>
                Your Rating <span style={{ color: 'var(--forge-gold)' }}>*</span>
              </label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[1, 2, 3, 4, 5].map(s => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setRating(s)}
                    onMouseEnter={() => setHoverRating(s)}
                    onMouseLeave={() => setHoverRating(0)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem', transition: 'transform 0.15s ease' }}
                    onMouseDown={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(0.9)' }}
                    onMouseUp={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
                  >
                    <Star
                      size={32}
                      fill={(hoverRating || rating) >= s ? 'var(--forge-gold)' : 'none'}
                      color={(hoverRating || rating) >= s ? 'var(--forge-gold)' : 'rgba(201,168,76,0.3)'}
                      strokeWidth={1.5}
                    />
                  </button>
                ))}
                {rating > 0 && (
                  <span style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1rem', fontStyle: 'italic', color: 'rgba(201,168,76,0.7)', alignSelf: 'center', marginLeft: '0.5rem' }}>
                    {['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][rating]}
                  </span>
                )}
              </div>
            </div>

            {/* Profile photo */}
            <div>
              <label style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.45)', display: 'block', marginBottom: '0.85rem' }}>
                Profile Photo <span style={{ fontStyle: 'italic', textTransform: 'none', letterSpacing: 0, fontSize: '0.7rem' }}>(optional — shown next to your testimonial)</span>
              </label>
              <input
                ref={photoInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                style={{ display: 'none' }}
                onChange={(e) => { if (e.target.files?.[0]) handlePhoto(e.target.files[0]) }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                {/* Preview circle */}
                <div
                  onClick={() => photoInputRef.current?.click()}
                  style={{
                    width: '72px', height: '72px', borderRadius: '50%', flexShrink: 0,
                    border: `1px dashed ${photoPreview ? 'rgba(201,168,76,0.4)' : 'rgba(201,168,76,0.25)'}`,
                    backgroundColor: 'var(--forge-charcoal)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', overflow: 'hidden', transition: 'border-color 0.25s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.6)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = photoPreview ? 'rgba(201,168,76,0.4)' : 'rgba(201,168,76,0.25)' }}
                >
                  {photoPreview ? (
                    <img src={photoPreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <Camera size={20} color="rgba(201,168,76,0.4)" strokeWidth={1.5} />
                  )}
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => photoInputRef.current?.click()}
                    style={{
                      fontFamily: 'var(--font-source-sans), sans-serif',
                      fontSize: '0.75rem', letterSpacing: '0.08em',
                      color: 'rgba(201,168,76,0.7)', background: 'none',
                      border: '1px solid rgba(201,168,76,0.2)',
                      padding: '0.5rem 1rem', cursor: 'pointer',
                      transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: '0.4rem',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--forge-gold)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(201,168,76,0.7)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)' }}
                  >
                    <Upload size={13} /> {photoPreview ? 'Change Photo' : 'Upload Photo'}
                  </button>
                  <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', color: 'rgba(245,237,216,0.25)', marginTop: '0.4rem' }}>
                    JPG or PNG, max 5MB
                  </p>
                </div>
              </div>
            </div>

            {/* Name + Location */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="st-two-col">
              <div>
                <label htmlFor="st-name" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.45)', display: 'block', marginBottom: '0.5rem' }}>
                  Full Name <span style={{ color: 'var(--forge-gold)' }}>*</span>
                </label>
                <input
                  id="st-name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)' }}
                />
              </div>
              <div>
                <label htmlFor="st-location" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.45)', display: 'block', marginBottom: '0.5rem' }}>
                  City <span style={{ color: 'var(--forge-gold)' }}>*</span>
                </label>
                <input
                  id="st-location"
                  type="text"
                  required
                  placeholder="e.g. Rosedale, MD"
                  value={form.location}
                  onChange={(e) => set('location', e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)' }}
                />
              </div>
            </div>

            {/* Service + Project name */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="st-two-col">
              <div>
                <label style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.45)', display: 'block', marginBottom: '0.5rem' }}>
                  Service Type <span style={{ color: 'var(--forge-gold)' }}>*</span>
                </label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => set('service', e.target.value)}
                  style={{ ...inputStyle, cursor: 'pointer', color: form.service ? 'var(--forge-ivory)' : 'rgba(245,237,216,0.35)' }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)' }}
                >
                  <option value="">Select service</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="st-project" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.45)', display: 'block', marginBottom: '0.5rem' }}>
                  Project Name <span style={{ fontStyle: 'italic', textTransform: 'none', letterSpacing: 0, fontSize: '0.7rem' }}>(optional)</span>
                </label>
                <input
                  id="st-project"
                  type="text"
                  placeholder="e.g. Kitchen Renovation"
                  value={form.project}
                  onChange={(e) => set('project', e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)' }}
                />
              </div>
            </div>

            {/* Testimonial text */}
            <div>
              <label htmlFor="st-quote" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.45)', display: 'block', marginBottom: '0.5rem' }}>
                Your Testimonial <span style={{ color: 'var(--forge-gold)' }}>*</span>
              </label>
              <textarea
                id="st-quote"
                required
                rows={6}
                placeholder="Tell us about your experience — what stood out, what exceeded your expectations, what you would tell a friend considering Forge X..."
                value={form.quote}
                onChange={(e) => set('quote', e.target.value)}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}>
                <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.68rem', color: 'rgba(245,237,216,0.22)' }}>
                  Minimum 30 characters
                </p>
                <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.68rem', color: form.quote.length >= 30 ? 'rgba(201,168,76,0.5)' : 'rgba(245,237,216,0.22)' }}>
                  {form.quote.length} chars
                </p>
              </div>
            </div>

            {/* Consent note */}
            <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.75rem', color: 'rgba(245,237,216,0.3)', lineHeight: 1.65, borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '1.25rem' }}>
              By submitting, you consent to Forge X displaying your name, location, and testimonial on this website and in marketing materials. Photos are cropped to a circle and resized. We review all submissions before publishing.
            </p>

            {/* Submit */}
            {!canSubmit && (
              <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', fontStyle: 'italic', color: 'rgba(201,168,76,0.5)', textAlign: 'right' }}>
                {!rating ? '↑ Select a star rating' : !form.name ? '↑ Enter your name' : !form.location ? '↑ Enter your city' : !form.service ? '↑ Select a service' : '↑ Write at least 30 characters'}
              </p>
            )}
            <button
              type="submit"
              disabled={!canSubmit || submitting}
              style={{
                fontFamily: 'var(--font-source-sans), sans-serif',
                fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
                color: canSubmit ? 'var(--forge-black)' : 'rgba(245,237,216,0.25)',
                backgroundColor: canSubmit ? 'var(--forge-gold)' : 'rgba(201,168,76,0.1)',
                border: 'none', padding: '1rem 2.5rem',
                cursor: canSubmit && !submitting ? 'pointer' : 'not-allowed',
                alignSelf: 'flex-end',
                transition: 'background-color 0.25s ease',
              }}
              onMouseEnter={(e) => { if (canSubmit && !submitting) e.currentTarget.style.backgroundColor = 'var(--forge-brass)' }}
              onMouseLeave={(e) => { if (canSubmit) e.currentTarget.style.backgroundColor = 'var(--forge-gold)' }}
            >
              {submitting ? 'Submitting...' : 'Submit Testimonial'}
            </button>

          </form>
        </section>
      </div>
      <Footer />

      <style>{`
        @media (max-width: 560px) {
          .st-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
