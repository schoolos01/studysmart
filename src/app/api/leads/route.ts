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
      persona: body.persona || 'student',
      schoolName: body.schoolName || null,
      city: body.city || null,
      designation: body.designation || null,
      interest: body.interest || null,
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
        secure: port === 465,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New ${body.persona || 'Lead'}: ${body.name}`,
        text: `New lead received!\n\n` +
          `Persona: ${body.persona || 'Student'}\n` +
          `Name: ${body.name}\n` +
          `Email: ${body.email}\n` +
          `Phone: ${body.phone}\n` +
          (body.schoolName ? `School: ${body.schoolName}\n` : '') +
          (body.city ? `City: ${body.city}\n` : '') +
          (body.designation ? `Designation: ${body.designation}\n` : '') +
          (body.interest ? `Interest: ${body.interest}\n` : '') +
          `Message: ${body.message || 'N/A'}\n` +
          `Source: ${body.source}`,
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
