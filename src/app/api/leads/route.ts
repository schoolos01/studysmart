import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic server-side validation
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email || '');
    const phoneValid = /^[+]?[0-9]{7,15}$/.test((body.phone || '').replace(/\s+/g, ''));

    if (!emailValid || !phoneValid) {
      return NextResponse.json({ error: 'Invalid email or phone number' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    await db.collection('leads').insertOne({
      name: body.name || null,
      email: body.email,
      phone: body.phone,
      message: body.message || null,
      type: body.type || 'contact',
      courseName: body.courseName || null,
      courseSlug: body.courseSlug || null,
      source: body.source || 'contact_form',
      createdAt: new Date(),
    });

    // Send email notification
    try {
      const port = Number(process.env.EMAIL_PORT) || 465;
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: port,
        secure: port === 465, // true for 465, false for 587 and others
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'hiranmoy.goswami17@gmail.com',
        subject: `New Lead: ${body.courseName || body.type}`,
        text: `New lead received!\n\nDetails:\nName: ${body.name || 'N/A'}\nEmail: ${body.email}\nPhone: ${body.phone}\nMessage: ${body.message || 'N/A'}\nCourse/Type: ${body.courseName || body.type}\nSource: ${body.source}`,
      };

      await transporter.sendMail(mailOptions);
    } catch (mailError) {
      console.error('Failed to send email:', mailError);
      // We don't want to fail the whole request if email fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead save error:', error);
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const leads = await db.collection('leads').find({}).sort({ createdAt: -1 }).limit(100).toArray();
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}
