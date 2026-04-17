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

// GET all software
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const products = await db.collection('software').find({}).sort({ order: 1 }).toArray();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

// POST create new software
export async function POST(request: Request) {
  try {
    await verifyAdmin();
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db();
    const result = await db.collection('software').insertOne({ ...body, createdAt: new Date() });
    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
  }
}

// PUT update software
export async function PUT(request: Request) {
  try {
    await verifyAdmin();
    const body = await request.json();
    const { id, ...updateData } = body;
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
    const client = await clientPromise;
    const db = client.db();
    await db.collection('software').updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...updateData, updatedAt: new Date() } }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

// DELETE software
export async function DELETE(request: Request) {
  try {
    await verifyAdmin();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
    const client = await clientPromise;
    const db = client.db();
    await db.collection('software').deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
