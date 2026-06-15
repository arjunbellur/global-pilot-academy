import Link from 'next/link'
import Image from 'next/image'
import Anim from '@/components/ui/Anim'

export default function ProgramsPreviewSection() {
  return (
    <div id="programs" className="programs-section">
      <div className="program-container">
        <div className="program-padding">
          <Anim animation="up">
            <div className="heading-container">
              <h3 className="heading-3m">Program Overview</h3>
            </div>
          </Anim>
          <div className="program-grid" style={{display:'grid'}}>

            {/* US Citizens card */}
            <Anim animation="up" delay={1}>
            <div className="program-content">
              <div className="program-image-wrapper">
                <Image
                  src="/images/gpa-student-training.jpg"
                  alt="Student milestone handshake in front of GPA Cessna"
                  width={1125}
                  height={892}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="program-image"
                />
                {/* US flag icon */}
                <div className="program-icon">
                  <svg viewBox="0 0 32 24" fill="none" style={{width:'2em',height:'1.5em'}} xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#flag_us)">
                      <rect width="32" height="24" fill="white"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H32V24H0V0Z" fill="white"/>
                      {[14.6667,18.3333,7.33331,22,11,0,3.66669].map((y,i) => (
                        <path key={i} fillRule="evenodd" clipRule="evenodd" d={`M0 ${y}V${y+2}H32V${y}H0Z`} fill="#B22234"/>
                      ))}
                      <rect width="20" height="13" fill="#3C3B6E"/>
                    </g>
                    <defs><clipPath id="flag_us"><rect width="32" height="24" fill="currentColor"/></clipPath></defs>
                  </svg>
                </div>
              </div>
              <div className="program-text">
                <h3 className="uui-heading-small">U.S. Citizens &amp; Residents</h3>
                <div className="uui-text-size-medium">We will walk you through each step to reach your aviation goals. Flexible training options and financing available.</div>
              </div>
              <Link href="/admissions/us-requirements" className="button-style-1h">
                <div className="btext-1h">U.S Admissions</div>
                <div className="button-icon1h">
                  <svg viewBox="0 0 24 24" fill="none" style={{width:'1em',height:'1em'}} xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 20L16 12L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </div>
            </Anim>

            {/* International card */}
            <Anim animation="up" delay={2}>
            <div className="program-content">
              <div className="program-image-wrapper">
                <Image
                  src="/images/gpa-history-2.jpg"
                  alt="GPA team and students from around the world"
                  width={1920}
                  height={1280}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="program-image"
                />
                {/* Globe icon */}
                <div className="program-icon">
                  <svg viewBox="0 0 48 48" fill="none" style={{width:'2em',height:'2em'}} xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#globe_prog)">
                      <path d="M23.99 4C12.94 4 4 12.95 4 24C4 35.05 12.94 44 23.99 44C35.04 44 44 35.05 44 24C44 12.95 35.04 4 23.99 4ZM37.84 16H31.94C31.29 13.5 30.38 11.1 29.18 8.88C32.86 10.14 35.92 12.69 37.84 16ZM24 8.07C25.67 10.47 26.97 13.14 27.82 16H20.18C21.03 13.14 22.33 10.47 24 8.07ZM8.52 28C8.19 26.72 8 25.38 8 24C8 22.62 8.19 21.28 8.52 20H15.27C15.11 21.31 15 22.64 15 24C15 25.36 15.11 26.69 15.28 28H8.52ZM10.15 32H16.05C16.7 34.5 17.61 36.9 18.81 39.13C15.13 37.87 12.07 35.31 10.15 32ZM16.05 16H10.15C12.07 12.69 15.13 10.13 18.81 8.87C17.61 11.1 16.7 13.5 16.05 16ZM24 39.93C22.34 37.53 21.04 34.86 20.18 32H27.82C26.96 34.86 25.66 37.53 24 39.93ZM28.68 28H19.32C19.13 26.69 19 25.36 19 24C19 22.64 19.13 21.31 19.32 20H28.68C28.87 21.31 29 22.64 29 24C29 25.36 28.87 26.69 28.68 28ZM29.19 39.12C30.39 36.89 31.3 34.5 31.95 32H37.85C35.92 35.31 32.86 37.86 29.19 39.12ZM32.72 28C32.88 26.69 33 25.36 33 24C33 22.64 32.89 21.31 32.72 20H39.47C39.8 21.28 40 22.62 40 24C40 25.38 39.81 26.72 39.47 28H32.72Z" fill="currentColor"/>
                    </g>
                    <defs><clipPath id="globe_prog"><rect width="48" height="48" fill="currentColor"/></clipPath></defs>
                  </svg>
                </div>
              </div>
              <div className="program-text">
                <h3 className="uui-heading-small">International Students</h3>
                <div className="uui-text-size-medium">Support with student visa process, TSA clearance, and everything needed to train in the U.S. Housing options available.</div>
              </div>
              <Link href="/india-dgca-program" className="button-style-1h">
                <div className="btext-1h">International Admissions</div>
                <div className="button-icon1h">
                  <svg viewBox="0 0 24 24" fill="none" style={{width:'1em',height:'1em'}} xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 20L16 12L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </div>
            </Anim>

          </div>
        </div>
      </div>
    </div>
  )
}
