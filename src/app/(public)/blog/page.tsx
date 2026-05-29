'use client'

import { useState } from 'react'
import { BLOG_POSTS } from '@/lib/data'
import { Clock, ArrowRight } from 'lucide-react'

const THUMBS = [
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80',
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80',
  'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80',
]

export default function BlogPage() {
  const categories = ['All', ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))]
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === active)
  const [featured, ...rest] = filtered

  return (
    <div style={{ backgroundColor: 'var(--forge-black)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--forge-charcoal)', padding: '6rem 2rem 4rem', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ height: '1px', width: '2.5rem', backgroundColor: 'var(--forge-gold)' }} />
            <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--forge-gold)' }}>Renovation Journal</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, color: 'var(--forge-ivory)' }}>
            Insights &amp; Inspiration
          </h1>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '1.05rem', color: 'rgba(245,237,216,0.55)', marginTop: '1rem', maxWidth: '500px' }}>
            Expert perspectives on luxury renovation, design trends, and the craft behind enduring homes.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div style={{ borderBottom: '1px solid rgba(201,168,76,0.12)', backgroundColor: 'var(--forge-charcoal)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '0', overflowX: 'auto' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '1.1rem 1.4rem', background: 'none', border: 'none', borderBottom: active === cat ? '2px solid var(--forge-gold)' : '2px solid transparent', color: active === cat ? 'var(--forge-gold)' : 'rgba(245,237,216,0.5)', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'color 0.25s ease' }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem' }}>
        {/* Featured post */}
        {featured && (
          <a href={`/blog/${featured.slug}`} style={{ textDecoration: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', marginBottom: '3rem', border: '1px solid rgba(201,168,76,0.15)', overflow: 'hidden' }}>
            <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
              <img src={THUMBS[0]} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(10%)', transition: 'transform 0.5s ease' }} />
            </div>
            <div style={{ backgroundColor: 'var(--forge-charcoal)', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forge-gold)', marginBottom: '1rem' }}>{featured.category} · Featured</span>
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', fontWeight: 400, color: 'var(--forge-ivory)', lineHeight: 1.2, marginBottom: '1rem' }}>{featured.title}</h2>
              <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.9rem', lineHeight: 1.75, color: 'rgba(245,237,216,0.6)', marginBottom: '1.75rem' }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', color: 'var(--forge-bronze)' }}>
                  <Clock size={12} /> {featured.readTime} min read · {featured.date}
                </div>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--forge-gold)' }}>
                  Read Article <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </a>
        )}

        {/* Post grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5px', backgroundColor: 'rgba(201,168,76,0.08)' }}>
          {rest.map((post, i) => (
            <a key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', backgroundColor: 'var(--forge-black)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src={THUMBS[(i + 1) % THUMBS.length]} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(8%)', transition: 'transform 0.5s ease' }} />
              </div>
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--forge-gold)', marginBottom: '0.75rem' }}>{post.category}</span>
                <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.35rem', fontWeight: 400, color: 'var(--forge-ivory)', lineHeight: 1.25, marginBottom: '0.75rem', flex: 1 }}>{post.title}</h3>
                <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(245,237,216,0.5)', marginBottom: '1.25rem' }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(201,168,76,0.12)', paddingTop: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', color: 'var(--forge-bronze)' }}>{post.author} · {post.readTime} min</span>
                  <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--forge-gold)' }}>Read →</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div style={{ marginTop: '5rem', backgroundColor: 'var(--forge-walnut)', padding: '4rem 3rem', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forge-gold)', marginBottom: '1rem' }}>Stay Informed</div>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 400, color: 'var(--forge-ivory)', marginBottom: '1rem' }}>The Forge X Newsletter</h2>
          <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.95rem', color: 'rgba(245,237,216,0.6)', marginBottom: '2rem' }}>Design insights, material spotlights, and renovation guides delivered monthly.</p>
          <div style={{ display: 'flex', gap: '0', maxWidth: '440px', margin: '0 auto' }}>
            <input type="email" placeholder="your@email.com" style={{ flex: 1, backgroundColor: 'rgba(10,10,8,0.5)', border: '1px solid rgba(201,168,76,0.25)', padding: '0.875rem 1rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.9rem', color: 'var(--forge-ivory)', outline: 'none' }} />
            <button style={{ backgroundColor: 'var(--forge-gold)', border: 'none', padding: '0.875rem 1.5rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forge-black)', cursor: 'pointer' }}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}
