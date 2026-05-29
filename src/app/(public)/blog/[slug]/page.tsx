import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/data'
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  return {
    title: post ? `${post.title} — Forge X Journal` : 'Article',
    description: post?.excerpt,
  }
}

const THUMBS = [
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80',
  'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
]

const fullContent: Record<string, string[]> = {
  'kitchen-investment-roi-lifestyle-legacy': [
    'Kitchen renovations occupy a unique place in the world of home improvement. They are simultaneously the highest-cost and highest-return projects a homeowner can undertake. The data from the National Association of Realtors consistently shows kitchen remodels returning 60–80% of their investment at resale — a number that surpasses most other home improvements by a significant margin.',
    'But the resale ROI calculation misses the larger picture. For most homeowners, the kitchen is the most used room in the house. It is where meals are prepared, where families gather in the morning before the day scatters them, and where guests naturally congregate during dinner parties. The daily quality-of-life return on a well-executed kitchen renovation is genuinely immeasurable — and it begins delivering value from day one.',
    'The mistake most homeowners make when evaluating a kitchen renovation is treating it as a cost rather than an investment. Unlike depreciating assets, a well-executed kitchen renovation in a desirable market does not lose value over time. Quality kitchens — those built with proper cabinetry, premium stone countertops, and professional-grade appliances — appreciate alongside the home rather than aging poorly.',
    'The materials you choose matter enormously to the longevity of the return. Custom inset cabinetry from a reputable American manufacturer will outlast flat-pack European alternatives by decades. Genuine marble or high-end quartz countertops, properly sealed and maintained, become more beautiful with age. Solid brass hardware develops a patina that imported zinc substitutes will never replicate. These distinctions are not luxury indulgences — they are investments in longevity.',
    'When evaluating a kitchen renovation budget, the honest framework is this: what is the value of this home, and what kitchen does that value level warrant? A larger home in White Marsh or Rosedale has a different kitchen standard than a starter townhome. Overshooting the market rarely pays off at resale; undershooting it costs you in daily quality of life and eventual resale discount.',
    'At Forge X, we guide every kitchen client through an honest analysis of their home\'s position in its market, the scope that makes sense for their lifestyle and intended tenure, and the material selections that will hold their value over time. The result is a kitchen that delivers returns — both financial and experiential — for years to come.',
  ],
  'unlacquered-brass-design-trend': [
    'Walk through any significant interior design publication today and you will encounter unlacquered brass in some form. On faucets, cabinet hardware, light fixtures, and even furniture legs, the warm, slightly imperfect tone of raw brass has become a defining aesthetic of premium residential design in this decade.',
    'What makes unlacquered brass different from its lacquered counterpart — the polished, sealed brass you have likely seen in older homes — is precisely its refusal to be protected from time. Unlacquered brass is exposed to oxygen and moisture. It reacts. It develops a patina unique to its environment, its handling, and the chemistry of the water that runs over it.',
    'In a kitchen where water is frequently used at a bridge-style Waterworks faucet, the brass around the neck and base will darken and develop character faster than the spout. A cabinet pull handled daily by a cook who regularly uses citrus will develop a lighter area at the contact point. These are not defects. They are the brass telling the story of how the kitchen is lived in.',
    'The commitment this requires is real. Clients who choose unlacquered brass must understand that they are opting for a living finish — one that they should not try to restore to uniform brightness. The homes where unlacquered brass ages most beautifully are those where the owners have accepted its evolution and come to appreciate the authenticity it brings.',
    'Care is simple: clean with mild soap and water, dry promptly, and avoid harsh chemical cleaners. Some homeowners choose to apply a thin coat of paste wax once or twice a year to slow the patina process slightly, but this is optional. The brass will do what it does regardless.',
    'The design case for unlacquered brass is straightforward: it provides warmth, it is distinctly not sterile, and it ages in a way that feels honest rather than decrepit. In an era where so many design choices trend toward the clinical and the replaceable, unlacquered brass is a small act of patience — a willingness to commit to something that gets better, not worse, with time.',
  ],
  'what-to-expect-full-home-renovation': [
    'The most common feedback we receive from clients after completing a major renovation is: "I wish someone had told me what to expect." This guide is that conversation — the honest, week-by-week account of what a well-managed large-scale renovation actually looks and feels like from the client\'s perspective.',
    'Weeks 1–4 involve planning, permitting, and material procurement. You will see almost nothing happen in your home during this period. This is the part that surprises most clients. The design is being finalized, permits are being submitted, and materials are being ordered. Custom cabinetry typically has an 8–12 week lead time. Stone slabs need to be selected, templated, and fabricated. Fixtures need to arrive and be inspected before they are installed. The work of this period is invisible but critical.',
    'Weeks 4–8 bring demolition and rough work. The house will feel like a construction zone. Dust management is a genuine effort, and no matter how diligent the crew, some fine dust will migrate. Wall and ceiling surfaces are opened. Plumbing is rerouted. New electrical circuits are run. Load-bearing walls may be removed with beams installed. It looks chaotic, but this is actually the phase that reveals the hidden conditions of your home — things no one knew about until the walls came open.',
    'Weeks 8–16 are the installation phase. Subfloor is leveled. Flooring is installed. Drywall closes up the walls. Cabinetry arrives and goes in. This is when the vision starts to become visible, and it is typically when clients begin to feel hope and excitement for the first time after weeks of disruption.',
    'The final 2–4 weeks involve finish work. Countertops are templated and installed. Tile work is completed. Fixtures are mounted. Paint is applied. Hardware is installed. Lighting is connected. This phase moves quickly but requires patience — rushing finish work is where mistakes happen, and a good contractor will not cut corners here regardless of schedule pressure.',
    'The most important mindset going in: expect disruption, expect surprises, and trust the process. Every significant renovation will encounter something unexpected once walls are opened. The question is not whether surprises will happen, but how your contractor handles them. A great contractor communicates immediately, presents options with honest cost implications, and helps you make informed decisions without panic.',
  ],
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) notFound()

  const postIndex = BLOG_POSTS.findIndex(p => p.slug === slug)
  const heroImage = THUMBS[postIndex % THUMBS.length]
  const related = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3)
  const content = fullContent[slug] || [post.content, 'This article continues with an in-depth exploration of the topic, drawing on Forge X\'s team experience across renovation projects in Baltimore, Rosedale, White Marsh, Joppatowne, and the surrounding area.', 'The principles outlined here represent our team\'s accumulated knowledge — not theoretical advice, but the hard-won wisdom of practitioners who have encountered virtually every challenge the renovation process presents.', 'We hope this perspective proves valuable as you approach your own project. Our team is always available to discuss the specifics of your situation and how these principles apply to your home, your goals, and your budget.']

  return (
    <div style={{ backgroundColor: 'var(--forge-black)', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ position: 'relative', height: '65vh', minHeight: '480px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,8,0.97) 0%, rgba(10,10,8,0.6) 40%, rgba(10,10,8,0.2) 100%)' }} />

        <Link href="/blog" className="hov-gold" style={{
          position: 'absolute', top: '6rem', left: '2rem',
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'rgba(245,237,216,0.6)', textDecoration: 'none', zIndex: 2, transition: 'color 0.25s ease',
        }}>
          <ArrowLeft size={12} /> Renovation Journal
        </Link>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', padding: '0 2rem 4rem', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forge-gold)', backgroundColor: 'rgba(201,168,76,0.12)', padding: '0.3rem 0.75rem', border: '1px solid rgba(201,168,76,0.25)' }}>{post.category}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.75rem', color: 'var(--forge-bronze)' }}>
              <Clock size={12} /> {post.readTime} min read
            </div>
          </div>
          <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(1.75rem, 4vw, 3.5rem)', fontWeight: 300, color: 'var(--forge-ivory)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ height: '1px', width: '1.5rem', backgroundColor: 'var(--forge-gold)' }} />
            <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.8rem', color: 'rgba(245,237,216,0.55)' }}>{post.author}</span>
            <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.78rem', color: 'rgba(245,237,216,0.3)' }}>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
        <article style={{ padding: '5rem 0 4rem' }}>
          {/* Excerpt / lead */}
          <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontStyle: 'italic', color: 'rgba(245,237,216,0.82)', lineHeight: 1.7, marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
            {post.excerpt}
          </p>

          {/* Body paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {content.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-source-sans), sans-serif',
                  fontSize: '1.025rem',
                  lineHeight: 1.9,
                  color: 'rgba(245,237,216,0.72)',
                  maxWidth: '65ch',
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Pull quote */}
          <blockquote className="glass-panel" style={{ margin: '3.5rem 0', borderLeft: 'none', padding: '2rem 2.5rem' }}>
            <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontStyle: 'italic', color: 'var(--forge-ivory)', lineHeight: 1.6, margin: 0 }}>
              The materials you choose matter enormously to the longevity of the return. Quality kitchens appreciate alongside the home rather than aging poorly.
            </p>
          </blockquote>

          {/* CTA banner */}
          <div style={{ marginTop: '3.5rem', padding: '2.5rem', backgroundColor: 'var(--forge-walnut)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.4rem', color: 'var(--forge-ivory)', marginBottom: '0.35rem' }}>Ready to discuss your project?</h4>
              <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.875rem', color: 'rgba(245,237,216,0.55)' }}>Our team is available for a private, no-obligation consultation.</p>
            </div>
            <Link href="/request-estimate" className="hov-btn-gold" style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forge-black)', backgroundColor: 'var(--forge-gold)', padding: '0.875rem 1.75rem', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'background-color 0.25s ease' }}>
              Request Estimate
            </Link>
          </div>
        </article>
      </div>

      {/* Related articles */}
      <section style={{ borderTop: '1px solid rgba(201,168,76,0.12)', backgroundColor: 'var(--forge-charcoal)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '6rem 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <div style={{ height: '1px', width: '3rem', backgroundColor: 'var(--forge-gold)', marginBottom: '1.5rem' }} />
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '2rem', fontWeight: 300, color: 'var(--forge-ivory)' }}>More from the Journal</h2>
            </div>
            <Link href="/blog" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forge-gold)', textDecoration: 'none' }}>
              All Articles <ArrowRight size={12} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5px', backgroundColor: 'rgba(201,168,76,0.08)' }} className="related-grid">
            {related.map((p, i) => (
              <Link key={p.id} href={`/blog/${p.slug}`} style={{ textDecoration: 'none', backgroundColor: 'var(--forge-charcoal)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img src={THUMBS[(postIndex + i + 1) % THUMBS.length]} alt={p.title} className="hov-img-scale" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(8%)', transition: 'transform 0.5s ease' }} />
                </div>
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--forge-gold)', marginBottom: '0.75rem' }}>{p.category}</span>
                  <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.25rem', fontWeight: 400, color: 'var(--forge-ivory)', lineHeight: 1.25, marginBottom: '0.65rem', flex: 1 }}>{p.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.7rem', color: 'var(--forge-bronze)', marginTop: 'auto', paddingTop: '0.75rem' }}>
                    <Clock size={11} /> {p.readTime} min read
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
