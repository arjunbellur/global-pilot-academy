'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type Phase = 'logo' | 'wordmark' | 'line' | 'plane' | 'exit' | 'done'

export default function Preloader() {
  const [phase, setPhase] = useState<Phase | null>(null)
  const ran = useRef(false)

  useEffect(() => {
    // Guard against React Strict Mode double-invocation
    if (ran.current) return
    ran.current = true

    if (sessionStorage.getItem('gpa:loaded')) {
      window.dispatchEvent(new CustomEvent('gpa:ready'))
      return
    }
    sessionStorage.setItem('gpa:loaded', '1')

    setPhase('logo')
    // No cleanup return — timers must run their course; Strict Mode cleanup
    // would cancel them before they fire, breaking the sequence.
    setTimeout(() => setPhase('wordmark'), 520)
    setTimeout(() => setPhase('line'),     1050)
    setTimeout(() => setPhase('plane'),    1450)
    setTimeout(() => setPhase('exit'),     1900)
    setTimeout(() => {
      setPhase('done')
      window.dispatchEvent(new CustomEvent('gpa:ready'))
    }, 2600)
  }, [])

  if (phase === null || phase === 'done') return null

  const pastWordmark = ['wordmark','line','plane','exit'].includes(phase)
  const pastLine     = ['line','plane','exit'].includes(phase)
  const isPlane      = ['plane','exit'].includes(phase)

  return (
    <div
      id="gpa-preloader"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#000040',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.75rem',
        animation: phase === 'exit'
          ? 'gpa-preloader-exit 0.7s cubic-bezier(0.7,0,0.3,1) forwards'
          : 'none',
      }}
    >
      {/* Logo */}
      <div
        style={{
          animation: 'gpa-logo-reveal 0.75s cubic-bezier(0.16,1,0.3,1) forwards',
          opacity: 0,
        }}
      >
        <Image
          src="/images/ChatGPT-Image-Sep-24-2025-06_25_55-PM.png"
          alt="Global Pilot Academy"
          width={148}
          height={78}
          style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
          priority
        />
      </div>

      {/* Wordmark */}
      <div
        style={{
          textAlign: 'center',
          opacity: pastWordmark ? 1 : 0,
          transform: pastWordmark ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.55s ease, transform 0.55s ease',
        }}
      >
        <div
          style={{
            color: '#fff',
            fontSize: '0.6rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: pastWordmark ? '0.48em' : '0.08em',
            transition: 'letter-spacing 1s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          Global Pilot Academy
        </div>
        <div
          style={{
            color: '#506db2',
            fontSize: '0.55rem',
            letterSpacing: '0.14em',
            marginTop: '0.35rem',
            opacity: pastWordmark ? 1 : 0,
            transition: 'opacity 0.5s ease 0.2s',
          }}
        >
          Professional Flight Training · Tampa, FL
        </div>
      </div>

      {/* Runway line */}
      <div
        style={{
          position: 'relative',
          width: '200px',
          height: '1px',
          overflow: 'visible',
          opacity: pastLine ? 1 : 0,
          transition: 'opacity 0.3s ease',
          marginTop: '-0.25rem',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, transparent, #88b2ff, transparent)',
            transform: pastLine ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 0.55s cubic-bezier(0.16,1,0.3,1)',
            transformOrigin: 'center',
          }}
        />
        {isPlane && (
          <div
            style={{
              position: 'absolute',
              top: '-9px',
              left: 0,
              animation: 'gpa-plane-fly 0.85s cubic-bezier(0.4,0,0.6,1) forwards',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
              <path
                d="M5 38H43V42H5V38ZM44.14 19.27C43.71 17.67 42.07 16.72 40.47 17.15L29.84 20L16.04 7.13L12.18 8.17L20.46 22.52L10.52 25.18L6.59 22.09L3.69 22.87L7.33 29.18L8.86 31.83L12.07 30.97L22.7 28.12L31.39 25.79L42.02 22.94C43.62 22.51 44.57 20.87 44.14 19.27Z"
                fill="#88b2ff"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}
