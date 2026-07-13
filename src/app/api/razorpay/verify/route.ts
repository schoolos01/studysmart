import { NextResponse } from 'next/server';
import crypto from 'crypto';
import clientPromise from '@/lib/mongodb';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      studentData 
    } = body;

    const secret = process.env.RAZORPAY_KEY_SECRET || '';

    // Verify signature
    const generated_signature = crypto
      .createHmac('sha256', secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest('hex');

    if (generated_signature !== razorpay_signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Connect to DB and save purchase
    const client = await clientPromise;
    const db = client.db();
    
    const purchaseData = {
      ...studentData,
      razorpay_order_id,
      razorpay_payment_id,
      status: 'completed',
      createdAt: new Date().toISOString(),
    };

    await db.collection('purchases').insertOne(purchaseData);

    // Call the Course Workflow Agent Webhook to start fulfillment
    const WORKFLOW_AGENT_URL = process.env.WORKFLOW_AGENT_URL || 'http://localhost:3002'; // Default local port for agent
    const WORKFLOW_SECRET = process.env.WORKFLOW_SECRET || 'my-super-secret-key';
    
    try {
      const workflowRes = await fetch(`${WORKFLOW_AGENT_URL}/api/webhooks/trigger-workflow`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${WORKFLOW_SECRET}`,
        },
        body: JSON.stringify(purchaseData),
      });

      if (!workflowRes.ok) {
        console.error('Failed to trigger workflow agent:', await workflowRes.text());
        // We do not fail the whole request because payment was successful, 
        // but we might want to flag this in DB for manual retry
        await db.collection('purchases').updateOne(
          { razorpay_order_id },
          { $set: { workflowStatus: 'failed' } }
        );
      } else {
        await db.collection('purchases').updateOne(
          { razorpay_order_id },
          { $set: { workflowStatus: 'triggered' } }
        );
      }
    } catch (workflowErr) {
      console.error('Error triggering workflow agent:', workflowErr);
    }

    return NextResponse.json({ success: true, message: 'Payment verified successfully' });
  } catch (error) {
    console.error("Razorpay Verify Error:", error);
    return NextResponse.json(
      { error: 'Failed to verify payment' },
      { status: 500 }
    );
  }
}
