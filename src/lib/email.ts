import type { ChatSubmission } from './validation'

const COMPANY_EMAIL = process.env.COMPANY_EMAIL || 'info@forgexgc.com'
const RESEND_API_KEY = process.env.RESEND_API_KEY || ''
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@forgexgc.com'

export async function sendChatInquiryEmail(submission: ChatSubmission): Promise<boolean> {
  if (!RESEND_API_KEY) {
    console.warn('[email] RESEND_API_KEY not set — skipping email send in dev')
    return true
  }

  const subject = `New Forge X Inquiry${submission.projectType ? ` — ${submission.projectType}` : ''}`

  const html = buildEmailHtml(submission)

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [COMPANY_EMAIL],
        reply_to: submission.email,
        subject,
        html,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('[email] Resend API error:', err)
      return false
    }

    return true
  } catch (err) {
    console.error('[email] Failed to send:', err)
    return false
  }
}

function buildEmailHtml(s: ChatSubmission): string {
  const now = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Forge X — New Inquiry</title>
</head>
<body style="margin:0;padding:0;background:#0A0A08;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A08;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#1C1917;border-bottom:1px solid rgba(201,168,76,0.3);padding:32px 40px;">
              <div style="font-family:'Georgia',serif;font-size:22px;letter-spacing:0.3em;color:#C9A84C;text-transform:uppercase;">Forge X</div>
              <div style="font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.15em;color:rgba(245,237,216,0.4);text-transform:uppercase;margin-top:4px;">New Client Inquiry</div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#1C1917;padding:40px;">

              <div style="height:1px;width:32px;background:#C9A84C;margin-bottom:24px;"></div>
              <h1 style="font-family:'Georgia',serif;font-size:24px;font-weight:400;color:#F5EDD8;margin:0 0 8px;">New Inquiry Received</h1>
              <p style="font-family:Arial,sans-serif;font-size:13px;color:rgba(245,237,216,0.5);margin:0 0 32px;">${now} ET${s.sourcePage ? ` · From: ${s.sourcePage}` : ''}</p>

              <!-- Contact info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(10,10,8,0.5);border:1px solid rgba(201,168,76,0.15);margin-bottom:24px;">
                ${[
                  ['Name', s.name],
                  ['Email', `<a href="mailto:${s.email}" style="color:#C9A84C;text-decoration:none;">${s.email}</a>`],
                  ...(s.phone ? [['Phone', `<a href="tel:${s.phone.replace(/\D/g, '')}" style="color:#C9A84C;text-decoration:none;">${s.phone}</a>`]] : []),
                  ...(s.projectType ? [['Project Type', s.projectType]] : []),
                ].map(([label, value]) => `
                  <tr>
                    <td style="padding:12px 20px;border-bottom:1px solid rgba(201,168,76,0.08);font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:#7C5C3A;width:120px;">${label}</td>
                    <td style="padding:12px 20px;border-bottom:1px solid rgba(201,168,76,0.08);font-family:Arial,sans-serif;font-size:14px;color:rgba(245,237,216,0.85);">${value}</td>
                  </tr>
                `).join('')}
              </table>

              <!-- Message -->
              <div style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#7C5C3A;margin-bottom:12px;">Message</div>
              <div style="background:rgba(10,10,8,0.5);border:1px solid rgba(201,168,76,0.15);padding:20px;font-family:'Georgia',serif;font-size:15px;color:rgba(245,237,216,0.8);line-height:1.7;white-space:pre-wrap;">
                ${s.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
              </div>

              <!-- Reply CTA -->
              <div style="text-align:center;margin-top:36px;padding-top:32px;border-top:1px solid rgba(201,168,76,0.12);">
                <a href="mailto:${s.email}?subject=Re: Your Forge X Inquiry" style="display:inline-block;background:#C9A84C;color:#0A0A08;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;text-decoration:none;padding:14px 28px;">
                  Reply to ${s.name.split(' ')[0]}
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0A0A08;border-top:1px solid rgba(201,168,76,0.12);padding:20px 40px;text-align:center;">
              <p style="font-family:Arial,sans-serif;font-size:11px;color:rgba(245,237,216,0.2);margin:0;">
                This inquiry was submitted via the Forge X website chat system.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}
