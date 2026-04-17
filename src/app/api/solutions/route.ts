import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const solutions = await db.collection('solutions').find({}).toArray();
    return NextResponse.json(solutions);
  } catch (error) {
    console.error('Fetch solutions error:', error);
    return NextResponse.json({ error: 'Failed to fetch solutions' }, { status: 500 });
  }
}
