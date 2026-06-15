import Link from 'next/link'
import Image from 'next/image'
import Anim from '@/components/ui/Anim'

const ArrowRight = () => (
  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.6665 9.99984H16.3332M16.3332 9.99984L10.4998 4.1665M16.3332 9.99984L10.4998 15.8332" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <g clipPath="url(#f1)">
          <path d="M23.99 4C12.94 4 4 12.95 4 24C4 35.05 12.94 44 23.99 44C35.04 44 44 35.05 44 24C44 12.95 35.04 4 23.99 4ZM37.84 16H31.94C31.29 13.5 30.38 11.1 29.18 8.88C32.86 10.14 35.92 12.69 37.84 16ZM24 8.07C25.67 10.47 26.97 13.14 27.82 16H20.18C21.03 13.14 22.33 10.47 24 8.07ZM8.52 28C8.19 26.72 8 25.38 8 24C8 22.62 8.19 21.28 8.52 20H15.27C15.11 21.31 15 22.64 15 24C15 25.36 15.11 26.69 15.28 28H8.52ZM10.15 32H16.05C16.7 34.5 17.61 36.9 18.81 39.13C15.13 37.87 12.07 35.31 10.15 32ZM16.05 16H10.15C12.07 12.69 15.13 10.13 18.81 8.87C17.61 11.1 16.7 13.5 16.05 16ZM24 39.93C22.34 37.53 21.04 34.86 20.18 32H27.82C26.96 34.86 25.66 37.53 24 39.93ZM28.68 28H19.32C19.13 26.69 19 25.36 19 24C19 22.64 19.13 21.31 19.32 20H28.68C28.87 21.31 29 22.64 29 24C29 25.36 28.87 26.69 28.68 28ZM29.19 39.12C30.39 36.89 31.3 34.5 31.95 32H37.85C35.92 35.31 32.86 37.86 29.19 39.12ZM32.72 28C32.88 26.69 33 25.36 33 24C33 22.64 32.89 21.31 32.72 20H39.47C39.8 21.28 40 22.62 40 24C40 25.38 39.81 26.72 39.47 28H32.72Z" fill="currentColor"/>
        </g>
        <defs><clipPath id="f1"><rect width="48" height="48" fill="currentColor"/></clipPath></defs>
      </svg>
    ),
    heading: 'Global Airline Placement',
    text: 'Graduates placed with airlines worldwide',
    href: '/program-overview',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <path d="M9 17.5H3.5M6.5 12H2M9 6.5H4M17 3L10.4036 12.235C10.1116 12.6438 9.96562 12.8481 9.97194 13.0185C9.97744 13.1669 10.0486 13.3051 10.1661 13.3958C10.3011 13.5 10.5522 13.5 11.0546 13.5H16L15 21L21.5964 11.765C21.8884 11.3562 22.0344 11.1519 22.0281 10.9815C22.0226 10.8331 21.9514 10.6949 21.8339 10.6042C21.6989 10.5 21.4478 10.5 20.9454 10.5H16L17 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: 'Hands-On Training',
    text: 'Interactive, practical training that builds real airmanship',
    href: '/program-overview',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <g clipPath="url(#f3)">
          <path d="M38 6H29.63C28.81 3.68 26.61 2 24 2C21.39 2 19.19 3.68 18.37 6H10C7.79 6 6 7.79 6 10V38C6 40.21 7.79 42 10 42H38C40.21 42 42 40.21 42 38V10C42 7.79 40.21 6 38 6ZM24 6C25.1 6 26 6.89 26 8C26 9.11 25.1 10 24 10C22.9 10 22 9.11 22 8C22 6.89 22.9 6 24 6ZM20 34L12 26L14.83 23.17L20 28.34L33.17 15.17L36 18L20 34Z" fill="currentColor"/>
        </g>
        <defs><clipPath id="f3"><rect width="48" height="48" fill="currentColor"/></clipPath></defs>
      </svg>
    ),
    heading: 'Self-Examining Authority',
    text: 'Self examining authority for checkride scheduling',
    href: '/program-overview',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <path d="M8.99962 14C8.99962 14 10.3121 15.5 12.4996 15.5C14.6871 15.5 15.9996 14 15.9996 14M15.2496 9H15.2596M9.74962 9H9.75962M12.4996 20C17.194 20 20.9996 16.1944 20.9996 11.5C20.9996 6.80558 17.194 3 12.4996 3C7.8052 3 3.99962 6.80558 3.99962 11.5C3.99962 12.45 4.15547 13.3636 4.443 14.2166C4.55119 14.5376 4.60529 14.6981 4.61505 14.8214C4.62469 14.9432 4.6174 15.0286 4.58728 15.1469C4.55677 15.2668 4.48942 15.3915 4.35472 15.6408L2.71906 18.6684C2.48575 19.1002 2.36909 19.3161 2.3952 19.4828C2.41794 19.6279 2.50337 19.7557 2.6288 19.8322C2.7728 19.9201 3.01692 19.8948 3.50517 19.8444L8.62619 19.315C8.78127 19.299 8.85881 19.291 8.92949 19.2937C8.999 19.2963 9.04807 19.3029 9.11586 19.3185C9.18478 19.3344 9.27145 19.3678 9.44478 19.4345C10.3928 19.7998 11.4228 20 12.4996 20ZM15.7496 9C15.7496 9.27614 15.5258 9.5 15.2496 9.5C14.9735 9.5 14.7496 9.27614 14.7496 9C14.7496 8.72386 14.9735 8.5 15.2496 8.5C15.5258 8.5 15.7496 8.72386 15.7496 9ZM10.2496 9C10.2496 9.27614 10.0258 9.5 9.74962 9.5C9.47348 9.5 9.24962 9.27614 9.24962 9C9.24962 8.72386 9.47348 8.5 9.74962 8.5C10.0258 8.5 10.2496 8.72386 10.2496 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heading: 'Open to All Pilots',
    text: 'Welcomes U.S. and international students',
    href: '/india-dgca-program',
  },
]

export default function FeaturesSection() {
  return (
    <div className="about-section">
      <div className="features-section">
        <div className="features-padding">
          <div className="features-container" style={{display:'grid'}}>
            {/* Left: 2x2 feature grid */}
            <div className="featiures-content">
              <div className="features-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                {FEATURES.map((f, i) => (
                  <Anim key={f.heading} animation="up" delay={i + 1}>
                    <div className="feature-layout">
                      <div className="features-icon">
                        <div className="f-icon">{f.icon}</div>
                      </div>
                      <h3 className="feature-heading-5n">{f.heading}</h3>
                      <div className="features-text">{f.text}</div>
                      <div className="feature-button">
                        <Link href={f.href} className="feature-button-link">
                          <div>Learn more</div>
                          <div className="uui-button-icon"><ArrowRight /></div>
                        </Link>
                      </div>
                    </div>
                  </Anim>
                ))}
              </div>
            </div>
            {/* Right: dark panel with plane SVG */}
            <Anim animation="right">
              <div className="features-image-wrapper">
                <Image
                  src="/images/plane-alt.svg"
                  alt="Plane illustration"
                  width={1440}
                  height={800}
                  className="features-layout-image"
                  style={{width:'48em',minWidth:'48em',filter:'invert(1)',position:'absolute',left:'3rem',transform:'rotateY(180deg)'}}
                />
              </div>
            </Anim>
          </div>
        </div>
      </div>
    </div>
  )
}
