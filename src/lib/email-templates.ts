/**
 * KMS Consultants — Email Template Helpers
 *
 * Two functions exported:
 *   buildNotificationEmail — internal alert sent to info@kms-consultants.com
 *   buildConfirmationEmail — thank-you sent back to the submitter (EN or AR / RTL)
 *
 * Styling: inline CSS only for maximum email-client compatibility.
 * Brand palette: #1a1710 background, #ecc06f gold, #eae1d8 light text.
 */

export interface EmailData {
  fullName: string;
  email: string;
  phone?: string;
  service?: string;
  destination?: string;
  message?: string;
  locale: 'en' | 'ar';
}

// ─── Shared helpers ─────────────────────────────────────────────────────────

const BRAND_BG = '#1a1710';
const BRAND_GOLD = '#ecc06f';
const BRAND_LIGHT = '#eae1d8';
const BRAND_MUTED = '#9a8f7f';
const BRAND_BORDER = '#7f5e15';
const BRAND_SURFACE = '#221f18';

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 0;color:${BRAND_MUTED};width:160px;vertical-align:top;font-size:13px;">${label}</td>
      <td style="padding:10px 0;color:${BRAND_LIGHT};font-size:13px;">${escapeHtml(value)}</td>
    </tr>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function wrapper(content: string, dir: 'ltr' | 'rtl' = 'ltr'): string {
  return `<!DOCTYPE html>
<html lang="${dir === 'rtl' ? 'ar' : 'en'}" dir="${dir}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>KMS Consultants</title>
</head>
<body style="margin:0;padding:0;background:#111008;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#111008;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:${BRAND_BG};border:1px solid ${BRAND_BORDER};border-radius:16px;overflow:hidden;">
          <!-- Header accent bar -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,${BRAND_GOLD},#7f5e15);"></td>
          </tr>
          <!-- Logo area -->
          <tr>
            <td style="padding:32px 40px 0;background:${BRAND_BG};">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:20px;font-weight:700;color:${BRAND_GOLD};letter-spacing:1px;">KMS Consultants</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Body -->
          ${content}
          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px 32px;border-top:1px solid ${BRAND_BORDER};">
              <p style="margin:0;font-size:11px;color:${BRAND_MUTED};line-height:1.6;">
                &copy; ${new Date().getFullYear()} KMS Consultants &mdash; Doha, Qatar<br/>
                This is an automated message, please do not reply directly to this email.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── 1. Internal Notification Email ────────────────────────────────────────

export function buildNotificationEmail(data: EmailData): string {
  const { fullName, email, phone, service, destination, message } = data;

  const content = `
    <tr>
      <td style="padding:32px 40px 24px;background:${BRAND_BG};">
        <h2 style="margin:0 0 8px;color:${BRAND_GOLD};font-size:22px;font-weight:700;">
          New Inquiry Received
        </h2>
        <p style="margin:0;color:${BRAND_MUTED};font-size:13px;">
          Submitted via kms-consultants.com contact form
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 40px 32px;background:${BRAND_BG};">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid ${BRAND_BORDER};">
          ${row('Full Name', fullName)}
          ${row('Email', email)}
          ${row('Phone', phone || '—')}
          ${row('Service', service || '—')}
          ${row('Destination', destination || '—')}
        </table>
        ${message ? `
        <div style="margin-top:20px;padding:16px;background:${BRAND_SURFACE};border-left:3px solid ${BRAND_GOLD};border-radius:0 8px 8px 0;">
          <p style="margin:0 0 8px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:${BRAND_MUTED};">Message</p>
          <p style="margin:0;color:${BRAND_LIGHT};font-size:13px;white-space:pre-wrap;line-height:1.7;">${escapeHtml(message)}</p>
        </div>` : ''}
        <div style="margin-top:28px;">
          <a href="mailto:${escapeHtml(email)}"
            style="display:inline-block;padding:12px 24px;background:${BRAND_GOLD};color:#1a1100;font-weight:700;font-size:13px;text-decoration:none;border-radius:8px;">
            Reply to ${escapeHtml(fullName)}
          </a>
        </div>
      </td>
    </tr>`;

  return wrapper(content, 'ltr');
}

// ─── 2. Customer Confirmation Email ────────────────────────────────────────

export function buildConfirmationEmail(data: EmailData): string {
  const { fullName, locale } = data;

  if (locale === 'ar') {
    return buildConfirmationAr(fullName);
  }
  return buildConfirmationEn(fullName);
}

function buildConfirmationEn(fullName: string): string {
  const content = `
    <tr>
      <td style="padding:40px 40px 32px;background:${BRAND_BG};text-align:center;">
        <!-- Icon -->
        <div style="width:64px;height:64px;margin:0 auto 24px;background:rgba(236,192,111,0.1);border:1px solid rgba(236,192,111,0.3);border-radius:50%;display:flex;align-items:center;justify-content:center;">
          <span style="font-size:28px;">✓</span>
        </div>
        <h1 style="margin:0 0 12px;color:${BRAND_LIGHT};font-size:26px;font-weight:700;line-height:1.3;">
          Thank You, ${escapeHtml(fullName)}
        </h1>
        <p style="margin:0;color:${BRAND_MUTED};font-size:15px;line-height:1.6;max-width:480px;display:inline-block;">
          Your inquiry has been received by our team at KMS Consultants. A specialist will review your details and be in touch with you shortly.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 40px 40px;background:${BRAND_BG};">
        <!-- What to expect -->
        <div style="background:${BRAND_SURFACE};border:1px solid ${BRAND_BORDER};border-radius:12px;padding:28px;">
          <h3 style="margin:0 0 20px;color:${BRAND_GOLD};font-size:14px;text-transform:uppercase;letter-spacing:2px;font-weight:700;">
            What to Expect
          </h3>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(127,94,21,0.2);">
                <table cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:32px;vertical-align:top;padding-top:2px;color:${BRAND_GOLD};font-size:16px;">→</td>
                    <td style="color:${BRAND_LIGHT};font-size:13px;line-height:1.6;">
                      <strong style="display:block;margin-bottom:2px;">Initial Review</strong>
                      Our team will carefully review your submitted information within 4 business hours.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(127,94,21,0.2);">
                <table cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:32px;vertical-align:top;padding-top:2px;color:${BRAND_GOLD};font-size:16px;">→</td>
                    <td style="color:${BRAND_LIGHT};font-size:13px;line-height:1.6;">
                      <strong style="display:block;margin-bottom:2px;">Personalised Follow-Up</strong>
                      A dedicated consultant will contact you to discuss your specific requirements in detail.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;">
                <table cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:32px;vertical-align:top;padding-top:2px;color:${BRAND_GOLD};font-size:16px;">→</td>
                    <td style="color:${BRAND_LIGHT};font-size:13px;line-height:1.6;">
                      <strong style="display:block;margin-bottom:2px;">Tailored Strategy</strong>
                      We will present you with a bespoke immigration strategy aligned to your goals.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
        <!-- Contact fallback -->
        <p style="margin:28px 0 0;text-align:center;color:${BRAND_MUTED};font-size:13px;">
          Need to reach us sooner? Call us at
          <a href="tel:+97444120578" style="color:${BRAND_GOLD};text-decoration:none;">+974 4412 0578</a>
          or email
          <a href="mailto:info@kms-consultants.com" style="color:${BRAND_GOLD};text-decoration:none;">info@kms-consultants.com</a>
        </p>
      </td>
    </tr>`;

  return wrapper(content, 'ltr');
}

function buildConfirmationAr(fullName: string): string {
  const content = `
    <tr>
      <td style="padding:40px 40px 32px;background:${BRAND_BG};text-align:center;direction:rtl;">
        <!-- Icon -->
        <div style="width:64px;height:64px;margin:0 auto 24px;background:rgba(236,192,111,0.1);border:1px solid rgba(236,192,111,0.3);border-radius:50%;">
          <span style="font-size:28px;line-height:64px;">✓</span>
        </div>
        <h1 style="margin:0 0 12px;color:${BRAND_LIGHT};font-size:26px;font-weight:700;line-height:1.4;">
          شكراً لك، ${escapeHtml(fullName)}
        </h1>
        <p style="margin:0;color:${BRAND_MUTED};font-size:15px;line-height:1.8;max-width:480px;display:inline-block;">
          لقد استلم فريقنا في KMS Consultants استفسارك. سيقوم أحد المختصين لدينا بمراجعة تفاصيلك والتواصل معك في أقرب وقت ممكن.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 40px 40px;background:${BRAND_BG};direction:rtl;">
        <!-- What to expect -->
        <div style="background:${BRAND_SURFACE};border:1px solid ${BRAND_BORDER};border-radius:12px;padding:28px;">
          <h3 style="margin:0 0 20px;color:${BRAND_GOLD};font-size:14px;text-transform:uppercase;letter-spacing:2px;font-weight:700;">
            ماذا تتوقع
          </h3>
          <table width="100%" cellpadding="0" cellspacing="0" dir="rtl">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(127,94,21,0.2);">
                <table cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="width:32px;vertical-align:top;padding-top:2px;color:${BRAND_GOLD};font-size:16px;">←</td>
                    <td style="color:${BRAND_LIGHT};font-size:13px;line-height:1.8;">
                      <strong style="display:block;margin-bottom:2px;">المراجعة الأولية</strong>
                      سيقوم فريقنا بمراجعة المعلومات التي قدّمتها خلال 4 ساعات عمل.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(127,94,21,0.2);">
                <table cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="width:32px;vertical-align:top;padding-top:2px;color:${BRAND_GOLD};font-size:16px;">←</td>
                    <td style="color:${BRAND_LIGHT};font-size:13px;line-height:1.8;">
                      <strong style="display:block;margin-bottom:2px;">متابعة شخصية</strong>
                      سيتواصل معك مستشار متخصص لمناقشة متطلباتك بشكل تفصيلي.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;">
                <table cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="width:32px;vertical-align:top;padding-top:2px;color:${BRAND_GOLD};font-size:16px;">←</td>
                    <td style="color:${BRAND_LIGHT};font-size:13px;line-height:1.8;">
                      <strong style="display:block;margin-bottom:2px;">استراتيجية مخصصة</strong>
                      سنقدم لك استراتيجية هجرة مصممة خصيصاً لأهدافك.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
        <!-- Contact fallback -->
        <p style="margin:28px 0 0;text-align:center;color:${BRAND_MUTED};font-size:13px;">
          هل تحتاج إلى التواصل معنا بشكل أسرع؟ اتصل على
          <a href="tel:+97444120578" style="color:${BRAND_GOLD};text-decoration:none;">+974 4412 0578</a>
          أو راسلنا على
          <a href="mailto:info@kms-consultants.com" style="color:${BRAND_GOLD};text-decoration:none;">info@kms-consultants.com</a>
        </p>
      </td>
    </tr>`;

  return wrapper(content, 'rtl');
}
