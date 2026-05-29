import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://yfacphfznymootsmctwj.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmYWNwaGZ6bnltb290c21jdHdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0MDgwODIsImV4cCI6MjA5NDk4NDA4Mn0.gdzk1KULfZmFv2RKEvOxRrEJtHhqDbYz7GHoi15HSjI'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export type DBTestimonial = {
  id: string
  created_at: string
  name: string
  location: string
  service: string
  project: string | null
  quote: string
  rating: number
  photo_url: string | null
  approved: boolean
}
