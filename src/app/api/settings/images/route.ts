import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { ObjectId } from 'mongodb';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'ssic_default_secret');

async function verifyAdmin() {
  const token = cookies().get('admin_token')?.value;
  if (!token) throw new Error('Unauthorized');
  await jwtVerify(token, JWT_SECRET);
}

// GET all image placeholders
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const images = await db.collection('site_images').find({}).sort({ page: 1, label: 1 }).toArray();
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

// POST – upsert OR create new placeholder
export async function POST(request: Request) {
  try {
    await verifyAdmin();
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db();

    if (!body.key || !body.label) {
      return NextResponse.json({ error: 'Key and label required' }, { status: 400 });
    }

    await db.collection('site_images').updateOne(
      { key: body.key },
      { $set: { key: body.key, label: body.label, page: body.page || 'General', url: body.url || '', updatedAt: new Date() } },
      { upsert: true }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
  }
}

// DELETE image placeholder by ID
export async function DELETE(request: Request) {
  try {
    await verifyAdmin();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
    const client = await clientPromise;
    const db = client.db();
    await db.collection('site_images').deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
