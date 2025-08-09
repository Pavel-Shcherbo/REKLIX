import { NextRequest, NextResponse } from 'next/server';
import { newsletterSchema, AntiSpam } from '@/utils/validation';

// CORS headers
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' ? 'https://reklix.com' : '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Mock newsletter service
class NewsletterService {
  private static subscribers = new Set<string>();

  static async subscribe(email: string): Promise<{ success: boolean; message: string }> {
    // Check if already subscribed
    if (this.subscribers.has(email)) {
      return {
        success: false,
        message: 'This email is already subscribed to our newsletter.'
      };
    }

    // Add to subscribers (in production, save to database)
    this.subscribers.add(email);
    
    console.log(`📧 Newsletter subscription: ${email}`);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      success: true,
      message: 'Successfully subscribed to our newsletter!'
    };
  }

  static async sendWelcomeEmail(email: string): Promise<void> {
    console.log(`📧 Welcome email sent to ${email}`);
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
    const validationResult = newsletterSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please enter a valid email address.',
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

    const { email } = validationResult.data;
    const clientIP = getClientIP(request);

    // Basic anti-spam checks for newsletter
    if (!AntiSpam.checkRateLimit(clientIP)) {
      console.warn(`🚫 Newsletter rate limit exceeded from IP ${clientIP}`);
      
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please try again later.'
        },
        { 
          status: 429,
          headers: CORS_HEADERS
        }
      );
    }

    // Check email domain
    if (!AntiSpam.checkEmailDomain(email)) {
      console.warn(`🚫 Disposable email detected: ${email}`);
      
      return NextResponse.json(
        {
          success: false,
          error: 'Please use a valid email address.'
        },
        { 
          status: 400,
          headers: CORS_HEADERS
        }
      );
    }

    // Subscribe to newsletter
    try {
      const result = await NewsletterService.subscribe(email);
      
      if (!result.success) {
        return NextResponse.json(
          {
            success: false,
            error: result.message
          },
          {
            status: 400,
            headers: CORS_HEADERS
          }
        );
      }

      // Send welcome email
      await NewsletterService.sendWelcomeEmail(email);

      // Log successful subscription
      console.log(`✅ Newsletter subscription successful from IP ${clientIP}: ${email}`);

      return NextResponse.json(
        {
          success: true,
          message: result.message
        },
        {
          status: 200,
          headers: CORS_HEADERS
        }
      );
    } catch (subscriptionError) {
      console.error('Newsletter subscription failed:', subscriptionError);
      
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to subscribe. Please try again later.'
        },
        {
          status: 500,
          headers: CORS_HEADERS
        }
      );
    }
  } catch (error) {
    console.error('Newsletter API error:', error);
    
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