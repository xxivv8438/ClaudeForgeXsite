import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Forge X General Contracting',
  description: 'Privacy policy for Forge X General Contracting. Learn how we collect, use, and protect your personal information.',
}

const COMPANY = 'Forge X General Contracting'
const EMAIL = 'info@forgexgc.com'
const PHONE = '(443) 272-1048'
const EFFECTIVE = 'May 20, 2025'

const sectionHead: React.CSSProperties = {
  fontFamily: 'var(--font-cormorant), serif',
  fontSize: '1.35rem',
  fontWeight: 400,
  color: 'var(--forge-ivory)',
  marginBottom: '0.75rem',
  marginTop: '2.5rem',
}

const body: React.CSSProperties = {
  fontFamily: 'var(--font-source-sans), sans-serif',
  fontSize: '0.93rem',
  lineHeight: 1.8,
  color: 'rgba(245,237,216,0.6)',
}

const li: React.CSSProperties = {
  ...body,
  marginBottom: '0.4rem',
  paddingLeft: '1rem',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: 'var(--forge-black)', minHeight: '100vh', paddingTop: '96px' }}>

        {/* Header */}
        <section style={{ backgroundColor: 'var(--forge-charcoal)', borderBottom: '1px solid rgba(201,168,76,0.12)', padding: '4rem 2rem 3.5rem' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ height: '1px', width: '2rem', backgroundColor: 'var(--forge-gold)' }} />
              <span style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--forge-gold)' }}>Legal</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--forge-ivory)', marginBottom: '0.5rem' }}>
              Privacy Policy
            </h1>
            <p style={{ fontFamily: 'var(--font-source-sans), sans-serif', fontSize: '0.82rem', color: 'rgba(245,237,216,0.35)' }}>
              Effective date: {EFFECTIVE}
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>

          <p style={body}>
            {COMPANY} (&ldquo;Forge X,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website forgexgc.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit an inquiry. Please read it carefully. If you disagree with its terms, please discontinue use of the site.
          </p>

          {/* 1 */}
          <h2 style={sectionHead}>1. Information We Collect</h2>
          <p style={{ ...body, marginBottom: '0.75rem' }}>We collect information you voluntarily provide when you:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            {[
              'Submit a project estimate request (name, email, phone, address, project details)',
              'Use the live chat widget on our website',
              'Contact us directly by phone or email',
              'Subscribe to our mailing list via the email capture form',
            ].map(t => <li key={t} style={li}>{t}</li>)}
          </ul>
          <p style={body}>
            We may also automatically collect non-personal technical data such as browser type, operating system, referring URLs, and pages visited through standard server logs and analytics tools.
          </p>

          {/* 2 */}
          <h2 style={sectionHead}>2. How We Use Your Information</h2>
          <p style={{ ...body, marginBottom: '0.75rem' }}>We use the information we collect to:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            {[
              'Respond to your estimate requests and project inquiries',
              'Schedule consultations and follow up on project discussions',
              'Send you your requested discount code or promotional offer',
              'Improve our website, services, and customer experience',
              'Comply with legal obligations',
            ].map(t => <li key={t} style={li}>{t}</li>)}
          </ul>
          <p style={body}>
            We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
          </p>

          {/* 3 */}
          <h2 style={sectionHead}>3. Cookies and Tracking Technologies</h2>
          <p style={body}>
            Our website uses cookies — small text files stored on your device — to enhance site functionality and understand how visitors interact with our content. You may accept or decline cookies via the banner displayed on your first visit. Declining cookies will not prevent you from using the site, but some features may be limited.
          </p>
          <p style={{ ...body, marginTop: '0.75rem' }}>
            We may use analytics tools (such as Google Analytics) that collect anonymized usage data. These tools operate under their own privacy policies and are subject to opt-out options provided by those services.
          </p>

          {/* 4 */}
          <h2 style={sectionHead}>4. Third-Party Services</h2>
          <p style={{ ...body, marginBottom: '0.75rem' }}>We use the following third-party services that may process your data on our behalf:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            {[
              'Web3Forms — processes form submissions and routes them to our inbox. Data is transmitted securely and is not stored beyond delivery.',
              'Google Fonts — loads typography assets; may log standard request metadata.',
              'Unsplash — serves background imagery from their CDN.',
            ].map(t => <li key={t} style={li}>{t}</li>)}
          </ul>
          <p style={body}>
            Each third-party provider operates under their own terms and privacy policies. We are not responsible for their practices.
          </p>

          {/* 5 */}
          <h2 style={sectionHead}>5. Data Retention</h2>
          <p style={body}>
            We retain inquiry and contact information only as long as necessary to fulfill the purpose for which it was collected — typically for the duration of a project engagement or a reasonable follow-up period — unless a longer retention period is required by law.
          </p>

          {/* 6 */}
          <h2 style={sectionHead}>6. Data Security</h2>
          <p style={body}>
            We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. All form submissions are transmitted over HTTPS. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          {/* 7 */}
          <h2 style={sectionHead}>7. Your Rights</h2>
          <p style={{ ...body, marginBottom: '0.75rem' }}>Depending on your location, you may have the right to:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            {[
              'Access the personal information we hold about you',
              'Request correction of inaccurate data',
              'Request deletion of your personal information',
              'Opt out of marketing communications at any time',
            ].map(t => <li key={t} style={li}>{t}</li>)}
          </ul>
          <p style={body}>
            To exercise any of these rights, contact us at {EMAIL}. We will respond within 30 days.
          </p>

          {/* 8 */}
          <h2 style={sectionHead}>8. Children&rsquo;s Privacy</h2>
          <p style={body}>
            Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, contact us immediately and we will delete it.
          </p>

          {/* 9 */}
          <h2 style={sectionHead}>9. Changes to This Policy</h2>
          <p style={body}>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date. Continued use of the site after changes are posted constitutes your acceptance of the updated policy.
          </p>

          {/* 10 */}
          <h2 style={sectionHead}>10. Contact Us</h2>
          <p style={body}>
            If you have questions or concerns about this Privacy Policy, please contact us:
          </p>
          <div style={{ marginTop: '1rem', padding: '1.5rem', border: '1px solid rgba(201,168,76,0.15)', backgroundColor: 'var(--forge-charcoal)' }}>
            <p style={{ ...body, marginBottom: '0.3rem', color: 'var(--forge-ivory)' }}>{COMPANY}</p>
            <p style={{ ...body, marginBottom: '0.3rem' }}>Baltimore, Maryland</p>
            <p style={{ ...body, marginBottom: '0.3rem' }}>
              Email:{' '}
              <a href={`mailto:${EMAIL}`} style={{ color: 'var(--forge-gold)', textDecoration: 'none' }}>{EMAIL}</a>
            </p>
            <p style={{ ...body, marginBottom: 0 }}>
              Phone:{' '}
              <a href="tel:+14432721048" style={{ color: 'var(--forge-gold)', textDecoration: 'none' }}>{PHONE}</a>
            </p>
          </div>

        </section>
      </div>
      <Footer />
    </>
  )
}
