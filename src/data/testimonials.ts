export type Testimonial = {
  id: string
  name: string
  location: string
  project: string
  service: string
  quote: string
  rating: number
  photoUrl?: string
  featured: boolean
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-001',
    name: 'Eleanor & James Whitmore',
    location: 'Rosedale, MD',
    project: 'Kitchen & Dining Renovation',
    service: 'Kitchen Remodeling',
    quote: "Forge X didn't just renovate our kitchen — they transformed the heart of our home. The walnut cabinetry and marble counters they sourced are beyond anything we could have imagined. Every guest asks who built it.",
    rating: 5,
    featured: true,
  },
  {
    id: 't-002',
    name: 'Robert Ashford',
    location: 'White Marsh, MD',
    project: 'Master Suite Renovation',
    service: 'Bathroom Remodeling',
    quote: "From the first consultation to the final walkthrough, the team operated with a level of professionalism I've never experienced. They treated our home as if it were their own. The master bath is pure craftsmanship.",
    rating: 5,
    featured: true,
  },
  {
    id: 't-003',
    name: 'Catherine Laurens',
    location: 'Joppatowne, MD',
    project: 'Historic Home Addition',
    service: 'Full Home Renovation',
    quote: "We've hired contractors before and always settled. Forge X showed us what it means to never settle. The addition they built is indistinguishable from the original 1920s structure. Masterful.",
    rating: 5,
    featured: true,
  },
  {
    id: 't-004',
    name: 'Robert & Anne M.',
    location: 'Rosedale, MD',
    project: 'Full First-Floor Renovation',
    service: 'Full Home Renovation',
    quote: "We had used three different contractors on our house over the years and always came away feeling like we had compromised on something. With Forge X, there was no compromise. Every detail we asked for was delivered, and several we did not think to ask for were suggested proactively.",
    rating: 5,
    featured: false,
  },
  {
    id: 't-005',
    name: 'Patricia L.',
    location: 'Joppatowne, MD',
    project: 'Kitchen Renovation',
    service: 'Kitchen Remodeling',
    quote: "The transparency was what set Forge X apart. I knew where my money was going at every stage. When an unexpected structural issue was discovered, James called me within the hour with options and honest cost implications. No contractor I have ever worked with has communicated like that.",
    rating: 5,
    featured: false,
  },
  {
    id: 't-006',
    name: 'Dr. William H.',
    location: 'White Marsh, MD',
    project: 'Primary & Guest Suite Renovation',
    service: 'Bathroom Remodeling',
    quote: "I understand what it means to be accountable for your work. Forge X understands it too. They are the only contractor I have ever worked with who felt like a true professional partner rather than a vendor.",
    rating: 5,
    featured: false,
  },
  {
    id: 't-007',
    name: 'Susan & Mark T.',
    location: 'Middle River, MD',
    project: 'Whole-Home Renovation',
    service: 'Full Home Renovation',
    quote: "Our renovation touched multiple rooms over several months. I expected chaos. What I got was a remarkably organized, predictable process. The daily updates, the clean job sites, the proactive communication — it was everything I hoped a contractor could be and had never experienced before.",
    rating: 5,
    featured: false,
  },
  {
    id: 't-008',
    name: 'Caroline B.',
    location: 'Baltimore, MD',
    project: 'Federal Hill Rowhome Renovation',
    service: 'Interior Design',
    quote: "The rowhome renovation process in Baltimore requires someone who understands the city. Forge X navigated the permit requirements and the historic district considerations better than any contractor we had worked with. They made it look easy.",
    rating: 5,
    featured: false,
  },
]

export function getInitials(name: string): string {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('')
}

export const FEATURED_TESTIMONIALS = TESTIMONIALS.filter(t => t.featured)
