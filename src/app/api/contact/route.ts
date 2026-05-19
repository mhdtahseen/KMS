import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

function sanitize(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, 1000);
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const fullName = sanitize(body.fullName);
  const email = sanitize(body.email);
  const phone = sanitize(body.phone);
  const service = sanitize(body.service);
  const destination = sanitize(body.destination);
  const message = sanitize(body.message);

  // Basic validation
  if (!fullName || fullName.length < 2) {
    return NextResponse.json({ error: 'Full name is required' }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 });
  }
  if (service && !ALLOWED_SERVICES.includes(service)) {
    return NextResponse.json({ error: 'Invalid service selection' }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT ?? '465', 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipientEmail = process.env.CONTACT_EMAIL ?? 'info@kms-consultants.com';

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error('SMTP environment variables not configured');
    return NextResponse.json({ error: 'Email service not configured' }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const htmlBody = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#1a1710;color:#eae1d8;border:1px solid #7f5e15;border-radius:12px;">
      <h2 style="color:#ecc06f;margin-top:0;">New Inquiry — KMS Consultants</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;color:#9a8f7f;width:160px;vertical-align:top;">Full Name</td><td style="padding:8px 0;">${fullName}</td></tr>
        <tr><td style="padding:8px 0;color:#9a8f7f;vertical-align:top;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#ecc06f;">${email}</a></td></tr>
        <tr><td style="padding:8px 0;color:#9a8f7f;vertical-align:top;">Phone</td><td style="padding:8px 0;">${phone || '—'}</td></tr>
        <tr><td style="padding:8px 0;color:#9a8f7f;vertical-align:top;">Service</td><td style="padding:8px 0;">${service || '—'}</td></tr>
        <tr><td style="padding:8px 0;color:#9a8f7f;vertical-align:top;">Destination</td><td style="padding:8px 0;">${destination || '—'}</td></tr>
        <tr><td style="padding:8px 0;color:#9a8f7f;vertical-align:top;">Message</td><td style="padding:8px 0;white-space:pre-wrap;">${message || '—'}</td></tr>
      </table>
      <hr style="border-color:#7f5e15;margin:20px 0;" />
      <p style="color:#9a8f7f;font-size:12px;margin:0;">Submitted via kms-consultants.com contact form</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"KMS Website" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Inquiry from ${fullName}${service ? ` — ${service}` : ''}`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
