import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const { path, referrer } = await request.json();
    const client = await clientPromise;
    const db = client.db();
    
    // Log the visit with a timestamp
    await db.collection('visits').insertOne({
      path: path || '/',
      referrer: referrer || '',
      timestamp: new Date(),
      // We can also log user agent or hashed IP if needed for uniqueness
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Tracking error:', error);
    return NextResponse.json({ error: 'Failed to track visit' }, { status: 500 });
  }
}
