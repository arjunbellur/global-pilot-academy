import Image from 'next/image'
import Link from 'next/link'
import Anim from '@/components/ui/Anim'

// Layout (3-col grid):
//  Row 1: [fleet wide ×2 cols]  [history-1 fills row height]
//  Row 2: [history-3]  [student-training]  [history-2]
const PHOTOS = [
  { src: '/images/gpa-fleet-lineup.jpg',      alt: 'GPA Cessna at sunset, Tampa Executive Airport', caption: 'KVDF — Tampa Executive Airport',    wide: true,  fill: false },
  { src: '/images/gpa-history-1.jpg',         alt: 'GPA staff in the hangar with Diamond aircraft', caption: 'World-Class Instructors',            wide: false, fill: true  },
  { src: '/images/gpa-history-3.jpg',         alt: 'GPA team with ICON A5 in hangar',               caption: 'Our Fleet & Facilities',             wide: false, fill: false },
  { src: '/images/gpa-student-training.jpg',  alt: 'Student and instructor milestone handshake',     caption: 'First Solo & Milestone Moments',     wide: false, fill: false },
  { src: '/images/gpa-history-2.jpg',         alt: 'Full GPA team photo in the hangar',             caption: 'The GPA Family',                     wide: false, fill: false },
]

export default function PhotoGallerySection() {
  return (
    <section style={{ background: '#000040', padding: '5rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Heading */}
        <Anim animation="up">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(136,178,255,0.12)',
              border: '1px solid rgba(136,178,255,0.25)',
              borderRadius: '2rem',
              padding: '0.35rem 1rem',
              marginBottom: '1rem',
            }}>
              <span style={{ color: '#88b2ff', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Life at GPA
              </span>
            </div>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 700, margin: '0 0 0.75rem', lineHeight: 1.2 }}>
              See GPA in Action
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              Real students, real planes, real milestones — at Tampa&apos;s largest flight school.
            </p>
          </div>
        </Anim>

        {/* Photo grid */}
        <div className="gpa-gallery-grid">
          {PHOTOS.map((photo, i) => (
            <Anim
              key={photo.src}
              animation={i === 0 ? 'up' : i === 1 ? 'right' : 'up'}
              delay={i + 1}
              className={photo.wide ? 'gpa-gallery-wide' : ''}
              style={photo.fill ? { alignSelf: 'stretch' } : undefined}
            >
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '0.75rem',
                ...(photo.wide
                  ? { aspectRatio: '16/7' }
                  : photo.fill
                  ? { height: '100%', minHeight: '200px' }
                  : { aspectRatio: '4/3' }),
              }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  className="gpa-gallery-img"
                />
                {/* Overlay with caption */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,40,0.7) 0%, transparent 50%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.25rem',
                }}>
                  <span style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                  }}>
                    {photo.caption}
                  </span>
                </div>
              </div>
            </Anim>
          ))}
        </div>

        {/* CTA */}
        <Anim animation="up" delay={1}>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link
              href="/about-us"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#88b2ff',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 600,
                border: '1px solid rgba(136,178,255,0.3)',
                borderRadius: '0.5rem',
                padding: '0.75rem 1.75rem',
                transition: 'all 0.2s ease',
              }}
              className="button-style-1h"
            >
              Meet Our Team
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </Anim>
      </div>

    </section>
  )
}
