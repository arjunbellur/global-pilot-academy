import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const PACKAGES = [
  {
    title: 'CFI',
    subtitle: 'Certified Flight Instructor',
    price: '$4,999*',
    items: [
      '42 hrs Ground Instruction',
      '17 hrs Flight Instruction',
      '2 hrs Complex Aircraft',
      '10 hrs Cessna 172',
      '2 hrs Simulator',
    ],
  },
  {
    title: 'CFI-I',
    subtitle: 'Certified Flight Instructor — Instrument',
    price: '$2,999*',
    items: [
      '10 hrs Ground Instruction',
      '15 hrs Flight Instruction',
      '10 hrs Cessna 172',
      '5 hrs Simulator',
    ],
  },
  {
    title: 'MEI',
    subtitle: 'Multi-Engine Instructor',
    price: '$6,299*',
    items: [
      '10 hrs Ground Instruction',
      '20 hrs Flight Instruction',
      '15 hrs Piper Seneca',
      '5 hrs Simulator',
    ],
  },
]

export default function FlightInstructorPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <div style={{background:'linear-gradient(180deg,#f8f9ff 0%,#fff 100%)',borderBottom:'1px solid #eaecf0',padding:'5rem 2rem 4rem',textAlign:'center'}}>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="overline-small" style={{color:'#506db2',marginBottom:'1rem'}}>CFI · CFI-I · MEI</div>
            <h1 style={{fontSize:'2.75rem',fontWeight:700,color:'#000040',margin:'0 0 1rem',lineHeight:1.15}}>Flight Instructor Program</h1>
            <p style={{color:'#475467',fontSize:'1.05em',lineHeight:1.7,margin:'0 0 2rem'}}>
              Get paid to fly as a CFI. Preference is given to GPA graduates when the school hires — teach here while you build hours toward 1,500 ATP minimums.
            </p>
            <div style={{display:'flex',gap:'1em',justifyContent:'center',flexWrap:'wrap'}}>
              <Link href="/enroll" className="button-style-2h">Apply Now</Link>
              <Link href="/commercial-pilot" className="button-style-1h">View Commercial Program</Link>
            </div>
          </div>
        </div>

        {/* GPA hiring note */}
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'0 2rem 3rem'}}>
          <div style={{background:'#000040',borderRadius:'1rem',padding:'2rem',display:'flex',gap:'1.5rem',alignItems:'flex-start'}}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{flexShrink:0,marginTop:'2px'}}>
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#88b2ff"/>
            </svg>
            <div>
              <div style={{color:'#fff',fontWeight:700,fontSize:'1.1em',marginBottom:'0.5rem'}}>GPA Graduates Get Hired First</div>
              <p style={{color:'#dfdddd',margin:0,lineHeight:1.7,fontSize:'0.95em'}}>
                When GPA has open CFI positions, preference is given to our own graduates. Instructing at GPA is the fastest way to build flight hours toward the 1,500 hours required for an ATP certificate and regional airline hiring. Hiring based on availability — not guaranteed.
              </p>
            </div>
          </div>
        </div>

        {/* Three package cards */}
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'0 2rem 4rem'}}>
          <h2 className="h2-heading" style={{fontSize:'2rem',marginBottom:'2rem'}}>Choose Your Track</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:'2rem'}}>
            {PACKAGES.map(pkg => (
              <div key={pkg.title} className="program-content" style={{padding:'2rem'}}>
                <div className="overline-small" style={{color:'#88b2ff',marginBottom:'0.5rem'}}>{pkg.subtitle}</div>
                <div style={{fontSize:'2.5rem',fontWeight:700,color:'#fff',lineHeight:1,marginBottom:'0.25rem'}}>{pkg.title}</div>
                <div style={{fontSize:'1.5rem',fontWeight:600,color:'#88b2ff',marginBottom:'0.5rem'}}>{pkg.price}</div>
                <div style={{color:'rgba(255,255,255,0.4)',fontSize:'0.75em',marginBottom:'1.5rem'}}>*prices subject to change</div>
                <div style={{borderTop:'1px solid rgba(255,255,255,0.15)',paddingTop:'1.25rem',display:'flex',flexDirection:'column',gap:'0.6rem'}}>
                  {pkg.items.map(item => (
                    <div key={item} style={{display:'flex',gap:'0.6rem',alignItems:'flex-start'}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{flexShrink:0,marginTop:'3px'}}>
                        <path d="M20 6L9 17L4 12" stroke="#88b2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{color:'#dfdddd',fontSize:'0.875em',lineHeight:1.5}}>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/enroll" className="button-style-2h" style={{marginTop:'1.5rem',display:'flex',justifyContent:'center',fontSize:'0.9em'}}>
                  Apply
                </Link>
              </div>
            ))}
          </div>
          <p style={{color:'#667085',fontSize:'0.85em',marginTop:'1rem'}}>*All prices subject to change.</p>
        </div>

        {/* Hours path */}
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'0 2rem 4rem'}}>
          <h2 className="h2-heading" style={{fontSize:'1.8rem',marginBottom:'1.5rem'}}>Your Path from Student to Airline Pilot</h2>
          <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
            {[
              { step: '01', title: 'Earn your certificates', desc: 'Private → Instrument → Commercial → CFI/CFI-I through GPA\'s structured programs.' },
              { step: '02', title: 'Join the GPA instructor team', desc: 'Teach the next generation of pilots at KVDF while logging hours toward your ATP minimum.' },
              { step: '03', title: 'Hit 1,500 hours — go airline', desc: 'Regional carriers hire at 1,500 hours. Most GPA instructors reach that milestone in ~14 months of full-time instruction.' },
            ].map(s => (
              <div key={s.step} style={{display:'flex',gap:'1.5rem',alignItems:'flex-start',padding:'1.5rem',border:'1px solid #eaecf0',borderRadius:'1rem'}}>
                <div style={{fontSize:'2em',fontWeight:700,color:'#88b2ff',flexShrink:0,lineHeight:1,minWidth:'2.5rem'}}>{s.step}</div>
                <div>
                  <div style={{fontWeight:600,fontSize:'1.05em',marginBottom:'0.25rem'}}>{s.title}</div>
                  <p style={{margin:0,color:'#475467',lineHeight:1.6,fontSize:'0.95em'}}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{background:'#000040',padding:'4rem 2rem',textAlign:'center'}}>
          <h2 style={{color:'#fff',fontSize:'2em',fontWeight:700,margin:'0 0 0.5rem'}}>Get Paid to Build Hours</h2>
          <p style={{color:'#dfdddd',margin:'0 0 2rem'}}>CFI, CFI-I, and MEI programs available. Apply to GPA today.</p>
          <Link href="/enroll" className="button-style-2h" style={{display:'inline-flex'}}>Apply Now</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
