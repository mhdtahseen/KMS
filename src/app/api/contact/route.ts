import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
  buildNotificationEmail,
  buildConfirmationEmail,
  type EmailData,
} from '@/lib/email-templates';

const ALLOWED_SERVICES = [
  'skilled-immigration',
  'study-permits',
  'business-residency',
  'work-permits',
  'permanent-residency',
  'family-sponsorship',
  'general-inquiry',
  '',
];

function sanitize(value: unknown, maxLen = 1000): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLen);
}

export async function POST(req: NextRequest) {
  // ── 1. Parse body ──────────────────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  // ── 2. Honeypot check ──────────────────────────────────────────────────────
  // If the hidden _gotcha field is filled, silently succeed without sending
  // any email (bots fill all fields; real users never see this field).
  const gotcha = sanitize(body._gotcha, 200);
  if (gotcha) {
    return NextResponse.json({ success: true });
  }

  // ── 3. Extract & sanitise fields ──────────────────────────────────────────
  const fullName = sanitize(body.fullName);
  const email = sanitize(body.email, 320);
  const phone = sanitize(body.phone);
  const service = sanitize(body.service);
  const destination = sanitize(body.destination);
  const message = sanitize(body.message, 4000);
  const rawLocale = sanitize(body.locale, 5);
  const locale: 'en' | 'ar' = rawLocale === 'ar' ? 'ar' : 'en';

  // ── 4. Validation ─────────────────────────────────────────────────────────
  if (!fullName || fullName.length < 2) {
    return NextResponse.json(
      { error: 'Full name is required (minimum 2 characters)' },
      { status: 400 }
    );
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: 'A valid email address is required' },
      { status: 400 }
    );
  }
  if (service && !ALLOWED_SERVICES.includes(service)) {
    return NextResponse.json(
      { error: 'Invalid service selection' },
      { status: 400 }
    );
  }

  // ── 5. SMTP configuration ─────────────────────────────────────────────────
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT ?? '465', 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipientEmail =
    process.env.CONTACT_EMAIL ?? 'info@kms-consultants.com';

  // Detailed diagnostics — logs which specific var is missing (values never logged)
  if (!smtpHost || !smtpUser || !smtpPass) {
    const missing = [
      !smtpHost && 'SMTP_HOST',
      !smtpUser && 'SMTP_USER',
      !smtpPass && 'SMTP_PASS',
    ].filter(Boolean);
    console.error('[contact/route] Missing SMTP env vars:', missing.join(', '));
    console.error('[contact/route] NODE_ENV:', process.env.NODE_ENV);
    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  // ── 6. Build email data ──────────────────────────────────────────────────
  const emailData: EmailData = {
    fullName,
    email,
    phone: phone || undefined,
    service: service || undefined,
    destination: destination || undefined,
    message: message || undefined,
    locale,
  };

  // ── 7. Send both emails ──────────────────────────────────────────────────
  try {
    // (a) Internal notification to KMS team
    await transporter.sendMail({
      from: `"KMS Website" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Inquiry from ${fullName}${service ? ` — ${service}` : ''}`,
      html: buildNotificationEmail(emailData),
    });

    // (b) Confirmation / thank-you to the submitter
    const confirmationSubject =
      locale === 'ar'
        ? 'KMS Consultants — تم استلام استفسارك'
        : 'KMS Consultants — We Have Received Your Inquiry';

    await transporter.sendMail({
      from: `"KMS Consultants" <${smtpUser}>`,
      to: email,
      subject: confirmationSubject,
      html: buildConfirmationEmail(emailData),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact/route] Email send error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to send email — please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
