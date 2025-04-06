import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const metrics = await request.json();

    // In production, you would send this to your analytics service
    // For now, we'll just log it in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance metrics received:', metrics);
    }

    // Here you would typically send the metrics to your analytics service
    // await sendToAnalytics(metrics);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing metrics:', error);
    return NextResponse.json(
      { error: 'Failed to process metrics' },
      { status: 500 }
    );
  }
}