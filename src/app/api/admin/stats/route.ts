import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'ssic_default_secret');

export async function GET(request: Request) {
  const token = cookies().get('admin_token')?.value;
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    await jwtVerify(token, JWT_SECRET);
    const { searchParams } = new URL(request.url);
    const range = searchParams.get('range') || '7d';
    
    const client = await clientPromise;
    const db = client.db();
    const now = new Date();

    const oneDayAgo  = new Date(now.getTime() - 1  * 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7  * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    // Count visits for each window
    const [dayVisits, weekVisits, monthVisits] = await Promise.all([
      db.collection('visits').countDocuments({ timestamp: { $gte: oneDayAgo } }),
      db.collection('visits').countDocuments({ timestamp: { $gte: sevenDaysAgo } }),
      db.collection('visits').countDocuments({ timestamp: { $gte: thirtyDaysAgo } }),
    ]);

    // Time-series graph based on selected range
    const rangeStart = range === '1d' ? oneDayAgo : range === '7d' ? sevenDaysAgo : thirtyDaysAgo;
    const dateFormat = range === '1d' ? '%H:00' : '%Y-%m-%d';

    const graphData = await db.collection('visits').aggregate([
      { $match: { timestamp: { $gte: rangeStart } } },
      {
        $group: {
          _id: { $dateToString: { format: dateFormat, date: '$timestamp' } },
          visits: { $sum: 1 }
        }
      },
      { $sort: { '_id': 1 } },
      { $project: { name: '$_id', visits: 1, _id: 0 } }
    ]).toArray();

    // Top pages — all time
    const topPages = await db.collection('visits').aggregate([
      { $group: { _id: '$path', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]).toArray();

    // Lead counts
    const [leadCount, courseLeadCount] = await Promise.all([
      db.collection('leads').countDocuments(),
      db.collection('course_leads').countDocuments().catch(() => 0),
    ]);

    return NextResponse.json({
      stats: {
        today: dayVisits,
        week: weekVisits,
        month: monthVisits,
        totalLeads: leadCount + courseLeadCount,
      },
      graphData,
      topPages,
    });

  } catch (error) {
    console.error('Stats fetch error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
