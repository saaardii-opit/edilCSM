import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const error = await request.json();

    // Add environment and timestamp
    const enrichedError = {
      ...error,
      environment: process.env.NODE_ENV,
      serverTimestamp: new Date().toISOString()
    };

    // In development, log to console
    if (process.env.NODE_ENV === 'development') {
      console.error('Error report received:', enrichedError);
    }

    // In production, you would send this to your error tracking service
    // await sendToErrorTracking(enrichedError);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing error report:', error);
    return NextResponse.json(
      { error: 'Failed to process error report' },
      { status: 500 }
    );
  }
}