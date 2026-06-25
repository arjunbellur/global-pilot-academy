'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const STATS = [
  { value: '22',       label: 'Training Aircraft' },
  { value: 'Part 141', label: 'FAA Certified' },
  { value: '12-14 mo', label: 'Months to CFI' },
  { value: 'KVDF',     label: 'Tampa Executive' },
]

export default function HeroSection() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const onReady = () => setReady(true)
    window.addEventListener('gpa:ready', onReady)
    // If preloader was skipped (return visit), event fires before we listen
    // so also check if preloader element is already gone
    if (!document.getElementById('gpa-preloader')) setReady(true)
    return () => window.removeEventListener('gpa:ready', onReady)
  }, [])

  return (
    <div
      className="gpa-hero-section"
      style={{
        flex: 1,
        height: 'auto',
        minHeight: 0,
        overflow: 'hidden',
        position: 'relative',
        backgroundImage: "url('/images/alexey-starki-91ykdj2WQeg-unsplash.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,64,0.90) 0%, rgba(0,0,64,0.72) 50%, rgba(0,0,40,0.55) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          className={`gpa-hero-grid${ready ? ' hero-ready' : ''}`}
        >
          {/* ── Left column ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Badge */}
            <div
              className="hero-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(136,178,255,0.15)',
                border: '1px solid rgba(136,178,255,0.3)',
                borderRadius: '2rem',
                padding: '0.4rem 1rem',
                width: 'fit-content',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#88b2ff"/>
              </svg>
              <span style={{ color: '#88b2ff', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em' }}>
                {"TAMPA'S LARGEST FLIGHT SCHOOL"}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-title"
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              {"Your Career in Aviation "}
              <span
                style={{
                  background: 'linear-gradient(90deg, #88b2ff, #c4d8ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Starts Here
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="hero-sub"
              style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                margin: 0,
                maxWidth: '480px',
              }}
            >
              From your first discovery flight to airline placement — structured,
              hands-on training with{' '}
              <strong style={{ color: '#fff' }}>fuel included</strong> across our
              22-aircraft fleet.
            </p>

            {/* CTAs */}
            <div
              className="hero-ctas"
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <Link
                href="/enroll"
                className="button-style-2h"
                style={{
                  background: '#fff',
                  color: '#000040',
                  padding: '0.9rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                Apply Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="#000040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/discovery-flight"
                className="button-style-1h"
                style={{
                  background: 'transparent',
                  color: '#fff',
                  padding: '0.9rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: '1px solid rgba(255,255,255,0.35)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
                  <path d="M5 38H43V42H5V38ZM44.14 19.27C43.71 17.67 42.07 16.72 40.47 17.15L29.84 20L16.04 7.13L12.18 8.17L20.46 22.52L10.52 25.18L6.59 22.09L3.69 22.87L7.33 29.18L8.86 31.83L12.07 30.97L22.7 28.12L31.39 25.79L42.02 22.94C43.62 22.51 44.57 20.87 44.14 19.27Z" fill="#88b2ff"/>
                </svg>
                Book a Discovery Flight
              </Link>
            </div>

            {/* Contact */}
            <div
              className="hero-contact"
              style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
            >
              <a
                href="tel:+18136004052"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'color 0.2s ease',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                (813) 600-4052
              </a>
              <a
                href="https://wa.me/18134284423"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'color 0.2s ease',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="gpa-hero-right">
            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="hero-stat"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '1rem',
                    padding: '1.25rem 1.5rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#88b2ff', marginTop: '0.35rem', fontWeight: 500 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Programs pricing */}
            <div
              className="hero-programs"
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '1rem',
                padding: '1.25rem 1.5rem',
              }}
            >
              <div style={{ fontSize: '0.75rem', color: '#88b2ff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Programs from
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { name: 'Private Pilot',    price: '$9,999*',  href: '/private-pilot' },
                  { name: 'Instrument Rating',price: '$10,250*', href: '/instrument-rating' },
                  { name: 'Zero to Airline',  price: '$60,999*', href: '/airline-pilot-pathway-program' },
                ].map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                      textDecoration: 'none',
                      color: '#fff',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{p.name}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#88b2ff' }}>{p.price}</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.5rem' }}>
                *Fuel included. Prices subject to change.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        className="hero-scroll-cue"
        onClick={() => document.getElementById('homepage-content')?.scrollIntoView({ behavior: 'smooth' })}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          zIndex: 3,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.5rem',
          lineHeight: 0,
        }}
        aria-label="Scroll down"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="rgba(255,255,255,0.45)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}
