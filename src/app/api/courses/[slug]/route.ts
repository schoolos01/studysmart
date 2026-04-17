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

// GET single course
export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const course = await db.collection('courses').findOne({ slug: params.slug });
    if (!course) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

// PUT update course
export async function PUT(request: Request, { params }: { params: { slug: string } }) {
  try {
    await verifyAdmin();
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db();
    const { _id, ...updateData } = body;
    await db.collection('courses').updateOne(
      { slug: params.slug },
      { $set: { ...updateData, updatedAt: new Date() } }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

// DELETE course
export async function DELETE(request: Request, { params }: { params: { slug: string } }) {
  try {
    await verifyAdmin();
    const client = await clientPromise;
    const db = client.db();
    await db.collection('courses').deleteOne({ slug: params.slug });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
