// ── Forge X Domain Types ──────────────────────────────────────────────────────

export interface Service {
  id: string
  name: string
  slug: string
  description: string
  shortDesc: string
  icon: string
  timeline: string
  priceRange: string
  features: string[]
  faqs: { q: string; a: string }[]
}

export interface PortfolioProject {
  id: string
  title: string
  slug: string
  category: string
  location: string
  budget: number
  duration: string
  images: string[]
  beforeAfter: { before: string; after: string }[]
  description: string
  materialsUsed: string[]
  challenge: string
  testimonial: {
    author: string
    text: string
  }
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  category: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  readTime: number
}

export interface QuoteRequest {
  id: string
  serviceType: string
  rooms: string[]
  budget: string
  timeline: string
  description: string
  photos: string[]
  contactInfo: {
    name: string
    email: string
    phone: string
  }
}

export type LeadStatus =
  | 'new'
  | 'contacted'
  | 'estimating'
  | 'proposal'
  | 'approved'
  | 'rejected'

export interface Lead {
  id: string
  name: string
  email: string
  phone: string
  service: string
  budget: string
  status: LeadStatus
  createdAt: string
}

export type ProjectStatus = 'planning' | 'active' | 'review' | 'complete'

export interface ProjectMilestone {
  title: string
  date: string
  done: boolean
}

export interface Project {
  id: string
  clientId: string
  title: string
  service: string
  status: ProjectStatus
  progress: number
  startDate: string
  endDate: string
  budget: number
  spent: number
  milestones: ProjectMilestone[]
}

export type InvoiceStatus = 'pending' | 'paid' | 'overdue'

export interface Invoice {
  id: string
  projectId: string
  amount: number
  status: InvoiceStatus
  dueDate: string
  paidAt: string | null
}
