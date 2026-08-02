'use client'
import Link from 'next/link'
import { useState, useRef } from 'react'

const PROGRAMS_LINKS = [
  { label: 'Overview',                  href: '/program-overview' },
  { label: 'Airline Pilot Pathway Program', href: '/airline-pilot-pathway-program' },
  { label: 'India DGCA Program',        href: '/india-dgca-program' },
  { label: 'Private Pilot Program',     href: '/private-pilot' },
  { label: 'Instrument Rating Program', href: '/instrument-rating' },
  { label: 'Commercial Pilot Program',  href: '/commercial-pilot' },
  { label: 'Flight Instructor Program', href: '/flight-instructor' },
  { label: 'Discovery Flight',          href: '/discovery-flight' },
]
const ADMISSIONS_LINKS = [
  { label: 'Domestic Applicants',       href: '/admissions/us-requirements' },
  { label: 'International Applicants',  href: '/admissions/apply-international' },
  { label: 'Accommodations',            href: '/international/accommodations' },
]
const RESOURCES_LINKS = [
  { label: 'FAQ',         href: '/faq' },
  { label: 'Our Fleet',   href: '/fleet' },
]
const ABOUT_LINKS = [
  { label: 'About GPA', href: '/about' },
  { label: 'Fleet',     href: '/fleet' },
  { label: 'Contact',   href: '/contact' },
]

function Dropdown({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav className="drop-down-nav">
      {items.map(i => <Link key={i.href} href={i.href}>{i.label}</Link>)}
    </nav>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleEnter(label: string) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(label)
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(null), 150)
  }

  return (
    <div className="head-component">
      {/* Banner */}
      <div className="banner-component">
        <div className="left-align-banner">
          <a href="tel:+18136004052" className="banner-phone-link">
            <div className="code-embed">
              <svg viewBox="0 0 24 24" fill="none" style={{width:'1em',height:'1em'}} xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9994 16.4765V19.1862C21.0005 19.4377 20.9488 19.6867 20.8479 19.9172C20.7469 20.1477 20.5988 20.3546 20.413 20.5247C20.2273 20.6947 20.008 20.8242 19.7693 20.9048C19.5305 20.9854 19.2775 21.0153 19.0265 20.9927C16.2415 20.6907 13.5664 19.7409 11.216 18.2197C9.02929 16.8329 7.17534 14.9827 5.7858 12.8003C4.25627 10.4439 3.30442 7.76107 3.00735 4.96915C2.98473 4.71938 3.01447 4.46764 3.09468 4.22996C3.17489 3.99229 3.30381 3.77389 3.47323 3.58866C3.64265 3.40343 3.84885 3.25544 4.07872 3.15411C4.30858 3.05278 4.55707 3.00032 4.80837 3.00009H7.52347C7.96269 2.99577 8.3885 3.151 8.72152 3.43683C9.05455 3.72267 9.27207 4.11961 9.33354 4.55366C9.44814 5.42084 9.66067 6.27229 9.96707 7.09177C10.0888 7.41507 10.1152 7.76642 10.043 8.1042C9.97082 8.44198 9.80313 8.75203 9.5598 8.99761L8.41041 10.1447C9.69877 12.406 11.5748 14.2784 13.8406 15.5642L14.99 14.4171C15.2361 14.1742 15.5467 14.0069 15.8852 13.9348C16.2236 13.8628 16.5757 13.8891 16.8996 14.0106C17.7207 14.3164 18.5739 14.5285 19.4428 14.6429C19.8824 14.7048 20.2839 14.9258 20.5709 15.2639C20.858 15.6019 21.0105 16.0335 20.9994 16.4765Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </a>
        </div>
        <div className="right-align-banner">
          <div className="banner-address">KVDF Airport, Tampa, FL</div>
          <div className="dot-seperator" />
          <div className="banner-rating">FAA Part 141 &amp; 61</div>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <div className="nav-menu">
          {/* Branding */}
          <Link href="/" style={{textDecoration:'none'}} className="branding-wrapper">
            <div className="logo-brand" />
            <div className="company-branding">
              <div className="company-name" style={{whiteSpace:'nowrap'}}>Global Pilot Academy</div>
              <div className="company-subheading" style={{whiteSpace:'nowrap'}}>Professional Flight Training</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="menu-link-wrapper" style={{display:'flex'}} role="navigation">
            <Link href="/" className="nav-link">Home</Link>

            {[
              { label: 'Programs',   links: PROGRAMS_LINKS },
              { label: 'Admissions', links: ADMISSIONS_LINKS },
              { label: 'Resources',  links: RESOURCES_LINKS },
              { label: 'About Us',   links: ABOUT_LINKS },
            ].map(menu => (
              <div
                key={menu.label}
                className="dropdown-link-menu"
                style={{position:'relative'}}
                onMouseEnter={() => handleEnter(menu.label)}
                onMouseLeave={handleLeave}
              >
                <button className="dropdown-toggle">
                  <svg style={{width:'0.8em',height:'0.8em',transition:'transform 0.2s',transform: open===menu.label ? 'rotate(180deg)':'rotate(0)'}} viewBox="0 0 24 24" fill="none"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  <div>{menu.label}</div>
                </button>
                {open === menu.label && <Dropdown items={menu.links} />}
              </div>
            ))}

            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Apply CTA */}
          <div className="cta-wrapper">
            <Link href="/enroll" className="cta-button">
              <div className="text-block">Apply</div>
            </Link>
          </div>

          {/* Hamburger — visible on mobile only */}
          <button
            className="gpa-mobile-toggle"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="#000040" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="gpa-mobile-menu">
          <button
            className="gpa-mobile-menu-close"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <Link href="/" className="gpa-mobile-link" onClick={() => setMobileOpen(false)}>Home</Link>

          <div className="gpa-mobile-section-title">Programs</div>
          {PROGRAMS_LINKS.map(l => (
            <Link key={l.href} href={l.href} className="gpa-mobile-link" onClick={() => setMobileOpen(false)}>{l.label}</Link>
          ))}

          <div className="gpa-mobile-section-title">Admissions</div>
          {ADMISSIONS_LINKS.map(l => (
            <Link key={l.href} href={l.href} className="gpa-mobile-link" onClick={() => setMobileOpen(false)}>{l.label}</Link>
          ))}

          <div className="gpa-mobile-section-title">Resources & About</div>
          {[...RESOURCES_LINKS, ...ABOUT_LINKS.filter(a => !RESOURCES_LINKS.some(r => r.href === a.href))].map(l => (
            <Link key={l.href} href={l.href} className="gpa-mobile-link" onClick={() => setMobileOpen(false)}>{l.label}</Link>
          ))}

          <Link href="/enroll" className="gpa-mobile-cta" onClick={() => setMobileOpen(false)}>
            Apply Now →
          </Link>
        </div>
      )}
    </div>
  )
}
