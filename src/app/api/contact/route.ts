import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema, AntiSpam, type ContactFormData } from '@/utils/validation';

// Rate limiting and security headers
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' ? 'https://reklix.com' : '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Mock email service (replace with actual service like SendGrid, Resend, etc.)
class EmailService {
  static async sendContactForm(data: ContactFormData): Promise<boolean> {
    // In production, integrate with your email service
    console.log('📧 Contact form submission:', {
      name: data.name,
      email: data.email,
      service: data.service,
      message: data.message.substring(0, 100) + '...'
    });

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demo purposes, randomly succeed/fail
    return Math.random() > 0.1; // 90% success rate
  }

  static async sendAutoReply(email: string, name: string): Promise<void> {
    console.log(`📧 Auto-reply sent to ${email} (${name})`);
  }
}

// Get client IP address
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  return 'unknown';
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: CORS_HEADERS,
  });
}

// Handle POST request
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate request data
    const validationResult = contactFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validationResult.error.issues.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { 
          status: 400,
          headers: CORS_HEADERS
        }
      );
    }

    const formData = validationResult.data;
    const clientIP = getClientIP(request);

    // Anti-spam checks
    const spamCheck = AntiSpam.isSpam(formData, clientIP);
    
    if (spamCheck.isSpam) {
      console.warn(`🚫 Spam detected from IP ${clientIP}: ${spamCheck.reason}`);
      
      // Return success to avoid revealing spam detection
      return NextResponse.json(
        { success: true, message: 'Thank you for your message!' },
        { 
          status: 200,
          headers: CORS_HEADERS
        }
      );
    }

    // Process the form submission
    try {
      // Send email to company
      const emailSent = await EmailService.sendContactForm(formData);
      
      if (!emailSent) {
        throw new Error('Failed to send email');
      }

      // Send auto-reply to user
      await EmailService.sendAutoReply(formData.email, formData.name);

      // Log successful submission
      console.log(`✅ Contact form submitted successfully from IP ${clientIP}`);

      return NextResponse.json(
        {
          success: true,
          message: 'Thank you for your message! We will get back to you soon.'
        },
        {
          status: 200,
          headers: CORS_HEADERS
        }
      );
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to send message. Please try again later.'
        },
        {
          status: 500,
          headers: CORS_HEADERS
        }
      );
    }
  } catch (error) {
    console.error('Contact form API error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error. Please try again later.'
      },
      {
        status: 500,
        headers: CORS_HEADERS
      }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { 
      status: 405,
      headers: {
        ...CORS_HEADERS,
        'Allow': 'POST, OPTIONS'
      }
    }
  );
}