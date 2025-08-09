'use client';

import { useEffect } from 'react';

interface CrispChatProps {
  websiteId?: string;
}

const CrispChat: React.FC<CrispChatProps> = ({ 
  websiteId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID 
}) => {
  useEffect(() => {
    if (!websiteId) {
      console.warn('Crisp Website ID not found. Please set NEXT_PUBLIC_CRISP_WEBSITE_ID environment variable.');
      return;
    }

    // Check if Crisp is already loaded
    if (typeof window !== 'undefined' && (window as typeof window & { $crisp?: unknown[] }).$crisp) {
      return;
    }

    // Initialize Crisp
    (window as typeof window & { $crisp: unknown[]; CRISP_WEBSITE_ID: string }).$crisp = [];
    (window as typeof window & { $crisp: unknown[]; CRISP_WEBSITE_ID: string }).CRISP_WEBSITE_ID = websiteId;

    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    
    // Add error handling
    script.onerror = () => {
      console.error('Failed to load Crisp chat widget');
    };

    document.head.appendChild(script);

    // Configure Crisp settings
    script.onload = () => {
      const crispWindow = window as typeof window & { $crisp?: { push: (args: unknown[]) => void } };
      if (crispWindow.$crisp) {
        // Set chat configuration
        crispWindow.$crisp.push(['set', 'user:email', '']);
        crispWindow.$crisp.push(['set', 'user:nickname', '']);
        
        // Configure chat appearance
        crispWindow.$crisp.push(['set', 'session:segments', [['website']]]);
        
        // Set availability
        crispWindow.$crisp.push(['set', 'chat:availability', 'online']);
      }
    };

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete (window as typeof window & { $crisp?: unknown; CRISP_WEBSITE_ID?: string }).$crisp;
      delete (window as typeof window & { $crisp?: unknown; CRISP_WEBSITE_ID?: string }).CRISP_WEBSITE_ID;
    };
  }, [websiteId]);

  return null;
};

export default CrispChat;

// Utility functions for Crisp integration
export const crispUtils = {
  // Show/hide chat
  show: () => {
    type CrispWindow = typeof window & { $crisp?: { push: (args: unknown[]) => void } };
    const crispWindow = window as CrispWindow;
    if (typeof window !== 'undefined' && crispWindow.$crisp) {
      crispWindow.$crisp.push(['do', 'chat:show']);
    }
  },
  
  hide: () => {
    type CrispWindow = typeof window & { $crisp?: { push: (args: unknown[]) => void } };
    const crispWindow = window as CrispWindow;
    if (typeof window !== 'undefined' && crispWindow.$crisp) {
      crispWindow.$crisp.push(['do', 'chat:hide']);
    }
  },

  // Open/close chat
  open: () => {
    type CrispWindow = typeof window & { $crisp?: { push: (args: unknown[]) => void } };
    const crispWindow = window as CrispWindow;
    if (typeof window !== 'undefined' && crispWindow.$crisp) {
      crispWindow.$crisp.push(['do', 'chat:open']);
    }
  },
  
  close: () => {
    type CrispWindow = typeof window & { $crisp?: { push: (args: unknown[]) => void } };
    const crispWindow = window as CrispWindow;
    if (typeof window !== 'undefined' && crispWindow.$crisp) {
      crispWindow.$crisp.push(['do', 'chat:close']);
    }
  },

  // Set user information
  setUser: (email: string, name?: string) => {
    type CrispWindow = typeof window & { $crisp?: { push: (args: unknown[]) => void } };
    const crispWindow = window as CrispWindow;
    if (typeof window !== 'undefined' && crispWindow.$crisp) {
      crispWindow.$crisp.push(['set', 'user:email', email]);
      if (name) {
        crispWindow.$crisp.push(['set', 'user:nickname', name]);
      }
    }
  },

  // Send a message
  sendMessage: (message: string) => {
    type CrispWindow = typeof window & { $crisp?: { push: (args: unknown[]) => void } };
    const crispWindow = window as CrispWindow;
    if (typeof window !== 'undefined' && crispWindow.$crisp) {
      crispWindow.$crisp.push(['do', 'message:send', ['text', message]]);
    }
  },
  
  // Set custom data
  setCustomData: (key: string, value: string | number | boolean) => {
    type CrispWindow = typeof window & { $crisp?: { push: (args: unknown[]) => void } };
    const crispWindow = window as CrispWindow;
    if (typeof window !== 'undefined' && crispWindow.$crisp) {
      crispWindow.$crisp.push(['set', 'session:data', [[key, value]]]);
    }
  }
};