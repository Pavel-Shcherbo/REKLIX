import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Zа-яА-Я\s]+$/, 'Name can only contain letters and spaces'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[1-9]?[0-9]{7,15}$/.test(val.replace(/[\s()-]/g, '')),
      'Please enter a valid phone number'
    ),
  
  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional(),
  
  service: z
    .string()
    .min(1, 'Please select a service'),
  
  budget: z
    .string()
    .optional(),
  
  timeline: z
    .string()
    .optional(),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  
  // Honeypot field for spam protection
  website: z
    .string()
    .max(0, 'Spam detected')
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Newsletter subscription validation
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

// Validation error formatter
export const formatValidationErrors = (errors: z.ZodError) => {
  const formattedErrors: Record<string, string> = {};
  
  errors.issues.forEach((error) => {
    const field = error.path[0] as string;
    formattedErrors[field] = error.message;
  });
  
  return formattedErrors;
};

// Anti-spam utilities
export class AntiSpam {
  private static submissions = new Map<string, number[]>();
  private static readonly MAX_SUBMISSIONS = 3;
  private static readonly TIME_WINDOW = 60 * 1000; // 1 minute
  private static readonly BLOCKED_KEYWORDS = [
    'viagra', 'casino', 'lottery', 'bitcoin', 'crypto',
    'investment', 'loan', 'debt', 'mortgage', 'insurance',
    'seo services', 'link building', 'backlinks'
  ];

  // Rate limiting check
  static checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const userSubmissions = this.submissions.get(ip) || [];
    
    // Remove old submissions outside time window
    const recentSubmissions = userSubmissions.filter(
      timestamp => now - timestamp < this.TIME_WINDOW
    );
    
    // Update submissions for this IP
    this.submissions.set(ip, recentSubmissions);
    
    // Check if user has exceeded rate limit
    if (recentSubmissions.length >= this.MAX_SUBMISSIONS) {
      return false;
    }
    
    // Add current submission
    recentSubmissions.push(now);
    this.submissions.set(ip, recentSubmissions);
    
    return true;
  }

  // Content spam detection
  static checkSpamContent(text: string): boolean {
    const lowerText = text.toLowerCase();
    
    // Check for blocked keywords
    const hasBlockedKeywords = this.BLOCKED_KEYWORDS.some(keyword => 
      lowerText.includes(keyword)
    );
    
    if (hasBlockedKeywords) return true;
    
    // Check for excessive links
    const linkCount = (text.match(/https?:\/\//g) || []).length;
    if (linkCount > 2) return true;
    
    // Check for excessive repetition
    const words = text.split(/\s+/);
    const wordCount = new Map<string, number>();
    
    words.forEach(word => {
      const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
      if (cleanWord.length > 3) {
        wordCount.set(cleanWord, (wordCount.get(cleanWord) || 0) + 1);
      }
    });
    
    // Check if any word appears more than 30% of the time
    const totalWords = words.length;
    for (const [, count] of wordCount) {
      if (count / totalWords > 0.3) return true;
    }
    
    return false;
  }

  // Email domain validation
  static checkEmailDomain(email: string): boolean {
    const disposableEmailDomains = [
      '10minutemail.com', 'tempmail.org', 'guerrillamail.com',
      'mailinator.com', 'throwaway.email', 'temp-mail.org'
    ];
    
    const domain = email.split('@')[1]?.toLowerCase();
    return !disposableEmailDomains.includes(domain);
  }

  // Comprehensive spam check
  static isSpam(data: ContactFormData, ip: string): { isSpam: boolean; reason?: string } {
    // Check honeypot
    if (data.website && data.website.length > 0) {
      return { isSpam: true, reason: 'Honeypot triggered' };
    }
    
    // Check rate limiting
    if (!this.checkRateLimit(ip)) {
      return { isSpam: true, reason: 'Rate limit exceeded' };
    }
    
    // Check email domain
    if (!this.checkEmailDomain(data.email)) {
      return { isSpam: true, reason: 'Disposable email detected' };
    }
    
    // Check message content
    if (this.checkSpamContent(data.message)) {
      return { isSpam: true, reason: 'Spam content detected' };
    }
    
    // Check name for spam patterns
    if (this.checkSpamContent(data.name)) {
      return { isSpam: true, reason: 'Spam in name field' };
    }
    
    return { isSpam: false };
  }
}

// Form submission delay (to prevent rapid submissions)
export const createSubmissionDelay = () => {
  let lastSubmission = 0;
  const MIN_DELAY = 3000; // 3 seconds
  
  return (): Promise<void> => {
    return new Promise((resolve) => {
      const now = Date.now();
      const timeSinceLastSubmission = now - lastSubmission;
      
      if (timeSinceLastSubmission < MIN_DELAY) {
        const remainingDelay = MIN_DELAY - timeSinceLastSubmission;
        setTimeout(() => {
          lastSubmission = Date.now();
          resolve();
        }, remainingDelay);
      } else {
        lastSubmission = now;
        resolve();
      }
    });
  };
};