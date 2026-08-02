'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

// Gates an application form behind its open/closed flag in app_settings,
// which staff control from the admin dashboard. Fails open if the flag
// can't be read so a transient error never blocks a real applicant.
export default function ApplicationWindow({ settingKey, closedTitle, closedMessage, children }: {
  settingKey: 'domestic_applications_open' | 'international_applications_open'
  closedTitle: string
  closedMessage: string
  children: React.ReactNode
}) {
  const [state, setState] = useState<'loading' | 'open' | 'closed'>('loading')

  useEffect(() => {
    supabase
      .from('app_settings')
      .select('value')
      .eq('key', settingKey)
      .maybeSingle()
      .then(({ data }) => setState(data?.value === false ? 'closed' : 'open'))
  }, [settingKey])

  if (state === 'loading') {
    return (
      <div style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#667085', fontSize: '0.95em' }}>
        Loading…
      </div>
    )
  }

  if (state === 'closed') {
    return (
      <div style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '520px', textAlign: 'center' }}>
          <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: '#f2f4f7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="10" width="16" height="10" rx="2" stroke="#667085" strokeWidth="1.75" />
              <path d="M8 10V7a4 4 0 018 0v3" stroke="#667085" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#000040', margin: '0 0 0.75rem' }}>{closedTitle}</h2>
          <p style={{ color: '#475467', lineHeight: 1.7, margin: 0 }}>{closedMessage}</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
