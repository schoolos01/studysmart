import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

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
