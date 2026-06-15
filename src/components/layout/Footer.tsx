import Link from 'next/link'
import Image from 'next/image'

const FOOTER_COLS = [
  {
    heading: 'Programs',
    links: [
      { label: 'Overview',                   href: '/program-overview' },
      { label: 'Airline Pilot Pathway',       href: '/airline-pilot-pathway-program' },
      { label: 'Private Pilot',              href: '/private-pilot' },
      { label: 'Instrument Rating',          href: '/instrument-rating' },
      { label: 'Commercial Pilot',           href: '/commercial-pilot' },
      { label: 'Flight Instructor',          href: '/flight-instructor' },
      { label: 'Discovery Flight',           href: '/discovery-flight' },
    ],
  },
  {
    heading: 'Admissions',
    links: [
      { label: 'US Requirements',            href: '/admissions/us-requirements' },
      { label: 'Enroll',                     href: '/enroll' },
      { label: 'International',              href: '/india-dgca-program' },
      { label: 'Accommodations',             href: '/international/accommodations' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'FAQ',          href: '/faq' },
      { label: 'Our Fleet',    href: '/fleet' },
      { label: 'About',        href: '/about' },
      { label: 'Contact',      href: '/contact' },
    ],
  },
  {
    heading: 'Social Media',
    links: [
      { label: 'Instagram', href: 'https://instagram.com/gpapilotvdf' },
      { label: 'LinkedIn',  href: 'https://linkedin.com/company/global-pilot-academy-inc-' },
      { label: 'Facebook',  href: 'https://facebook.com/globalpilot' },
    ],
  },
]

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <section className="footer-section">
        <div className="container-large">
          <div className="footer-grid-regular" style={{display:'grid'}}>
            {/* Left brand column */}
            <div className="footer-column-left">
              <Link href="/" className="footer-logo">
                <Image
                  src="/images/ChatGPT-Image-Sep-24-2025-06_25_55-PM.png"
                  alt="Global Pilot Academy"
                  width={122}
                  height={64}
                  className="image"
                  style={{objectFit:'contain'}}
                />
              </Link>
              <div className="column-x-small">
                <div className="subheading-small">Global Pilot Academy</div>
                <p className="paragraph-regular">
                  Professional flight training from Private Pilot to Airline Track. FAA Part 141 &amp; 61 certified at Tampa Executive Airport (KVDF).
                </p>
                <p className="paragraph-regular" style={{marginTop:'0.5em'}}>
                  <a href="tel:+18136004052" style={{color:'#666',textDecoration:'none'}}>(813) 600-4052</a>
                  <br/>
                  <a href="https://wa.me/18134284423" style={{color:'#666',textDecoration:'none'}}>WhatsApp: (813) 428-4423</a>
                  <br/>
                  <span style={{fontSize:'12px',color:'#999'}}>6530 Tampa Executive Airport Rd, Suite 111, Tampa, FL 33610</span>
                </p>
              </div>
            </div>

            {/* Link columns */}
            <div className="footer-links-grid">
              {FOOTER_COLS.map(col => (
                <div key={col.heading} className="footer-category">
                  <div className="label-regular">{col.heading}</div>
                  <div className="column-regular">
                    {col.links.map(link => (
                      <Link key={link.href} href={link.href} className="footer-link-dark">
                        <div>{link.label}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="footer-legal-section">
        <div className="footer-legal-wrapper">
          <div className="paragraph-small">©2025 Global Pilot Academy Inc. All Rights Reserved.</div>
          <div className="footer-legal-links">
            <Link href="/privacy-policy" className="footer-legal-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-legal-link">Terms of Service</Link>
            <Link href="#" className="footer-legal-link">Cookies Settings</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
