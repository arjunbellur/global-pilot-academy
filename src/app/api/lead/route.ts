import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, phone, interest } = body;
    
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the lead submission (replace with actual CRM integration)
    console.log('New lead submission:', {
      name,
      email,
      phone,
      interest: interest || 'Not specified',
      timestamp: new Date().toISOString(),
      source: 'website'
    });

    // TODO: Integrate with your CRM/email service
    // Examples:
    // - Send to HubSpot, Salesforce, etc.
    // - Send email notification
    // - Store in database
    // - Add to mailing list

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead submitted successfully',
        leadId: `lead_${Date.now()}` // Temporary ID for tracking
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Lead submission error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
