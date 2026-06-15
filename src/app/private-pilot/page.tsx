import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const INCLUDES = [
  '55 hrs Aircraft Rental (Cessna 152)',
  '60 hrs with Flight Instructor',
  'Program Length: 10–12 Weeks',
  'Training Schedule: 5x per week',
  'Certificate: Private Pilot Single Engine Land',
]

const NOT_INCLUDED = [
  'FAA Medical Certificate',
  'Aircraft Rental Insurance',
]

export default function PrivatePilotPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <div style={{background:'linear-gradient(180deg,#f8f9ff 0%,#fff 100%)',borderBottom:'1px solid #eaecf0',padding:'5rem 2rem 4rem',textAlign:'center'}}>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="overline-small" style={{color:'#506db2',marginBottom:'1rem'}}>FAA Part 141 &amp; 61</div>
            <h1 style={{fontSize:'2.75rem',fontWeight:700,color:'#000040',margin:'0 0 1rem',lineHeight:1.15}}>Private Pilot Program</h1>
            <p style={{color:'#475467',fontSize:'1.05em',lineHeight:1.7,margin:'0 0 2rem'}}>
              Your first step toward an aviation career. Earn your Private Pilot Certificate and open the skies.
            </p>
            <div style={{display:'flex',gap:'1em',justifyContent:'center',flexWrap:'wrap'}}>
              <Link href="/enroll" className="button-style-2h">Apply Now</Link>
              <Link href="/discovery-flight" className="button-style-1h">Try a Discovery Flight</Link>
            </div>
          </div>
        </div>

        {/* Package + details */}
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'2rem 2rem 4rem',display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:'3rem',alignItems:'start'}}>

          {/* Package card */}
          <div className="program-content" style={{padding:'2.5rem'}}>
            <div className="overline-small" style={{color:'#88b2ff',marginBottom:'0.5rem'}}>Starting Price</div>
            <div style={{fontSize:'3.5rem',fontWeight:700,color:'#fff',lineHeight:1}}>$12,999<span style={{fontSize:'0.4em',verticalAlign:'super'}}>*</span></div>
            <div style={{color:'rgba(255,255,255,0.5)',fontSize:'0.85em',marginBottom:'2rem'}}>*prices subject to change</div>

            <div style={{borderTop:'1px solid rgba(255,255,255,0.15)',paddingTop:'1.5rem',marginBottom:'1.5rem'}}>
              <div style={{color:'#88b2ff',fontSize:'0.8em',textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:'1rem'}}>Package Includes</div>
              <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
                {INCLUDES.map(item => (
                  <div key={item} style={{display:'flex',gap:'0.75rem',alignItems:'flex-start'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{flexShrink:0,marginTop:'3px'}}>
                      <path d="M20 6L9 17L4 12" stroke="#88b2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{color:'#dfdddd',fontSize:'0.9em',lineHeight:1.5}}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{borderTop:'1px solid rgba(255,255,255,0.1)',paddingTop:'1rem'}}>
              <div style={{color:'rgba(255,255,255,0.4)',fontSize:'0.8em',textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:'0.75rem'}}>Not Included</div>
              <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
                {NOT_INCLUDED.map(item => (
                  <div key={item} style={{color:'rgba(255,255,255,0.5)',fontSize:'0.85em'}}>— {item}</div>
                ))}
              </div>
            </div>

            <Link href="/enroll" className="button-style-2h" style={{marginTop:'2rem',display:'flex',justifyContent:'center'}}>
              Apply for This Program
            </Link>
          </div>

          {/* Details */}
          <div style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
            <div>
              <h2 className="h2-heading" style={{fontSize:'2rem',marginBottom:'0.75rem'}}>About the Private Pilot Program</h2>
              <p style={{color:'#475467',lineHeight:1.7,margin:'0 0 1rem'}}>
                The Private Pilot Certificate is the foundation of your aviation career. At GPA, we run a structured, intensive program designed to get you licensed in 10–12 weeks — training 5 days a week in our Cessna 152 fleet.
              </p>
            </div>

            {/* FAA minimum stat */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'1rem'}}>
              {[
                { label: 'FAA Minimum (Pt. 141)', value: '35 hrs' },
                { label: 'FAA Minimum (Pt. 61)', value: '40 hrs' },
                { label: 'National Average', value: '65 hrs' },
              ].map(s => (
                <div key={s.label} style={{background:'#f9fafb',border:'1px solid #eaecf0',borderRadius:'0.75rem',padding:'1.25rem',textAlign:'center'}}>
                  <div style={{fontSize:'1.8em',fontWeight:700,color:'#000040'}}>{s.value}</div>
                  <div style={{fontSize:'0.75em',color:'#667085',marginTop:'0.25rem',lineHeight:1.4}}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* In-house DPE callout */}
            <div style={{background:'#000040',borderRadius:'1rem',padding:'1.5rem',display:'flex',gap:'1rem',alignItems:'flex-start'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{flexShrink:0,marginTop:'2px'}}>
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#88b2ff"/>
              </svg>
              <div>
                <div style={{color:'#fff',fontWeight:600,marginBottom:'0.25rem'}}>In-House DPE Advantage</div>
                <p style={{color:'#dfdddd',margin:0,fontSize:'0.9em',lineHeight:1.6}}>
                  GPA holds in-house Designated Pilot Examiner (DPE) authority for all Part 141 students — meaning your checkride happens on-site without waiting for an external examiner. This significantly reduces delays and keeps your training on schedule.
                </p>
              </div>
            </div>

            {/* Requirements */}
            <div style={{border:'1px solid #eaecf0',borderRadius:'1rem',padding:'1.5rem'}}>
              <h3 style={{margin:'0 0 1rem',fontSize:'1.1em',fontWeight:600}}>Before You Enroll</h3>
              <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
                {[
                  'Valid FAA Medical Certificate (3rd Class minimum)',
                  'Two valid forms of government ID',
                  'Non-owned aircraft renters insurance ($75,000 min)',
                  '$150 nonrefundable application fee',
                ].map(r => (
                  <div key={r} style={{display:'flex',gap:'0.75rem',alignItems:'flex-start'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{flexShrink:0,marginTop:'3px'}}>
                      <circle cx="12" cy="12" r="9" stroke="#506db2" strokeWidth="1.5"/>
                      <path d="M9 12l2 2 4-4" stroke="#506db2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{color:'#475467',fontSize:'0.9em',lineHeight:1.5}}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div style={{background:'#000040',padding:'4rem 2rem',textAlign:'center'}}>
          <h2 style={{color:'#fff',fontSize:'2em',fontWeight:700,margin:'0 0 0.5rem'}}>Start Your Journey to the Cockpit</h2>
          <p style={{color:'#dfdddd',margin:'0 0 2rem'}}>Next intake: August 2026 · Training 5 days/week · Tampa Executive Airport (KVDF)</p>
          <Link href="/enroll" className="button-style-2h" style={{display:'inline-flex'}}>Apply Now</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
