import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'RupeeLetter Contact <onboarding@resend.dev>',
      to: 'rupeeletter@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Resend Error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
