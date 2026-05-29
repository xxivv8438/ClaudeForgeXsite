export interface ChatSubmission {
  name: string
  email: string
  phone?: string
  message: string
  projectType?: string
  sourcePage?: string
}

export interface ValidationResult {
  valid: boolean
  errors: Record<string, string>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateChatSubmission(data: unknown): ValidationResult {
  const errors: Record<string, string> = {}

  if (!data || typeof data !== 'object') {
    return { valid: false, errors: { general: 'Invalid submission data.' } }
  }

  const d = data as Record<string, unknown>

  if (!d.name || typeof d.name !== 'string' || d.name.trim().length < 2) {
    errors.name = 'Please provide your name.'
  }

  if (!d.email || typeof d.email !== 'string' || !EMAIL_RE.test(d.email.trim())) {
    errors.email = 'Please provide a valid email address.'
  }

  if (!d.message || typeof d.message !== 'string' || d.message.trim().length < 10) {
    errors.message = 'Please enter a message of at least 10 characters.'
  }

  if (d.message && typeof d.message === 'string' && d.message.length > 2000) {
    errors.message = 'Message must be under 2000 characters.'
  }

  return { valid: Object.keys(errors).length === 0, errors }
}

export function sanitizeString(val: unknown): string {
  if (typeof val !== 'string') return ''
  return val.trim().slice(0, 2000)
}
