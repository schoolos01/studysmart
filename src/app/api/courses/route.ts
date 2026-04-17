import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'ssic_default_secret');

// GET all courses
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const courses = await db.collection('courses').find({}).toArray();
    return NextResponse.json(courses);
  } catch (error) {
    console.error('Fetch courses error:', error);
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 });
  }
}

// POST new course
export async function POST(request: Request) {
  const token = cookies().get('admin_token')?.value;
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    await jwtVerify(token, JWT_SECRET);
    
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db();

    // Basic validation
    if (!body.title || !body.slug) {
      return NextResponse.json({ error: 'Title and slug are required' }, { status: 400 });
    }

    const newCourse = {
      ...body,
      createdAt: new Date(),
    };

    const result = await db.collection('courses').insertOne(newCourse);
    return NextResponse.json({ success: true, id: result.insertedId });

  } catch (error) {
    console.error('Create course error:', error);
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
  }
}
