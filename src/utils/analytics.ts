// Lightweight analytics utility compatible with gtag
export interface AnalyticsEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

export function track(event: string, payload?: Record<string, any>) {
  // Stub implementation - replace with actual gtag or analytics service
  if (typeof window !== 'undefined') {
    console.log('Analytics Event:', { event, payload });
    
    // Example gtag implementation (uncomment when ready):
    // if (typeof gtag !== 'undefined') {
    //   gtag('event', event, payload);
    // }
  }
}

// Common event tracking functions
export const trackLeadSubmit = (source: string) => {
  track('lead_submit', { source });
};

export const trackFinancingCTA = (location: string) => {
  track('financing_cta', { location });
};

export const trackBookTour = (source: string) => {
  track('book_tour', { source });
};

export const trackRequestInfo = (source: string) => {
  track('request_info', { source });
};
