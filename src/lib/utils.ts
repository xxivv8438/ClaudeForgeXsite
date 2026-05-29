import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a number as USD currency.
 * e.g. formatCurrency(1500) → "$1,500"
 * e.g. formatCurrency(285000) → "$285,000"
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format an ISO date string into a human-readable date.
 * e.g. formatDate("2025-04-15") → "April 15, 2025"
 */
export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

/**
 * Convert a plain-text string into a URL-safe slug.
 * e.g. slugify("Kitchen Remodeling & Design") → "kitchen-remodeling-design"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')   // strip non-word chars (except hyphens)
    .trim()
    .replace(/[\s_]+/g, '-')    // spaces and underscores → hyphens
    .replace(/-{2,}/g, '-')     // collapse multiple consecutive hyphens
}

/**
 * Estimate the read time for a piece of content.
 * Assumes an average reading speed of 200 words per minute.
 * Returns at minimum 1 minute.
 * e.g. calculateReadTime("word ".repeat(400)) → 2
 */
export function calculateReadTime(content: string): number {
  const WORDS_PER_MINUTE = 200
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE))
}
