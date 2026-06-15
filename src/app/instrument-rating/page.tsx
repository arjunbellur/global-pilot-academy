import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const INCLUDES = [
  '21 hrs Aircraft Rental (Cessna 172)',
  '14 hrs FAA-Approved Flight Simulator',
  '80 hrs with Flight Instructor',
  'Online Ground School Included',
  'Program Length: 6–8 Weeks',
  'Training Schedule: 5x per week',
  'Certificate: Instrument Airplane Rating',
]

export default function InstrumentRatingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <div style={{background:'linear-gradient(180deg,#f8f9ff 0%,#fff 100%)',borderBottom:'1px solid #eaecf0',padding:'5rem 2rem 4rem',textAlign:'center'}}>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="overline-small" style={{color:'#506db2',marginBottom:'1rem'}}>FAA Part 141</div>
            <h1 style={{fontSize:'2.75rem',fontWeight:700,color:'#000040',margin:'0 0 1rem',lineHeight:1.15}}>Instrument Rating Program</h1>
            <p style={{color:'#475467',fontSize:'1.05em',lineHeight:1.7,margin:'0 0 2rem'}}>
              Fly in clouds, low visibility, and IFR airspace. The Instrument Rating is your ticket to all-weather flying and a prerequisite for your Commercial certificate.
            </p>
            <div style={{display:'flex',gap:'1em',justifyContent:'center',flexWrap:'wrap'}}>
              <Link href="/enroll" className="button-style-2h">Apply Now</Link>
              <Link href="/private-pilot" className="button-style-1h">View Private Pilot Program</Link>
            </div>
          </div>
        </div>

        {/* Package + details */}
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'2rem 2rem 4rem',display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:'3rem',alignItems:'start'}}>

          {/* Package card */}
          <div className="program-content" style={{padding:'2.5rem'}}>
            <div className="overline-small" style={{color:'#88b2ff',marginBottom:'0.5rem'}}>Starting Price</div>
            <div style={{fontSize:'3.5rem',fontWeight:700,color:'#fff',lineHeight:1}}>$10,999<span style={{fontSize:'0.4em',verticalAlign:'super'}}>*</span></div>
            <div style={{color:'rgba(255,255,255,0.5)',fontSize:'0.85em',marginBottom:'2rem'}}>*prices subject to change</div>

            <div style={{borderTop:'1px solid rgba(255,255,255,0.15)',paddingTop:'1.5rem'}}>
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

            <Link href="/enroll" className="button-style-2h" style={{marginTop:'2rem',display:'flex',justifyContent:'center'}}>
              Apply for This Program
            </Link>
          </div>

          {/* Details */}
          <div style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
            <div>
              <h2 className="h2-heading" style={{fontSize:'2rem',marginBottom:'0.75rem'}}>What is an Instrument Rating?</h2>
              <p style={{color:'#475467',lineHeight:1.7,margin:'0 0 1rem'}}>
                Your instrument rating will allow you to fly in Instrument Meteorological Conditions (IMC) or IFR required airspace of the Air Traffic Control system. This opens up a huge range of flying that would otherwise be off-limits under Visual Flight Rules alone.
              </p>
              <p style={{color:'#475467',lineHeight:1.7,margin:0}}>
                At GPA, your training combines real aircraft time in our Cessna 172 fleet with hours in our FAA-approved flight simulator — keeping costs down while building the precision skills IFR flying demands.
              </p>
            </div>

            {/* Training breakdown */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'1rem'}}>
              {[
                { label: 'Aircraft Hours', value: '21 hrs', sub: 'Cessna 172' },
                { label: 'Simulator Hours', value: '14 hrs', sub: 'FAA-Approved' },
                { label: 'Instructor Hours', value: '80 hrs', sub: 'Ground + Flight' },
              ].map(s => (
                <div key={s.label} style={{background:'#f9fafb',border:'1px solid #eaecf0',borderRadius:'0.75rem',padding:'1.25rem',textAlign:'center'}}>
                  <div style={{fontSize:'1.8em',fontWeight:700,color:'#000040'}}>{s.value}</div>
                  <div style={{fontSize:'0.75em',color:'#000040',marginTop:'0.1rem',fontWeight:600}}>{s.label}</div>
                  <div style={{fontSize:'0.7em',color:'#667085',marginTop:'0.1rem'}}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Sim callout */}
            <div style={{background:'#000040',borderRadius:'1rem',padding:'1.5rem',display:'flex',gap:'1rem',alignItems:'flex-start'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{flexShrink:0,marginTop:'2px'}}>
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="#88b2ff" strokeWidth="1.5"/>
                <path d="M8 21H16M12 17V21" stroke="#88b2ff" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div>
                <div style={{color:'#fff',fontWeight:600,marginBottom:'0.25rem'}}>Online Ground School Included</div>
                <p style={{color:'#dfdddd',margin:0,fontSize:'0.9em',lineHeight:1.6}}>
                  Comprehensive online ground school is included with your package. Study at your own pace and arrive at each flight lesson prepared. Our instructors cover IFR procedures, weather interpretation, approaches, and ATC communications.
                </p>
              </div>
            </div>

            {/* Prerequisite */}
            <div style={{border:'1px solid #eaecf0',borderRadius:'1rem',padding:'1.5rem'}}>
              <h3 style={{margin:'0 0 0.75rem',fontSize:'1.1em',fontWeight:600}}>Prerequisites</h3>
              <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
                {[
                  'Private Pilot Certificate (any category)',
                  'Valid FAA Medical Certificate',
                  'English language proficiency endorsement',
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
          <h2 style={{color:'#fff',fontSize:'2em',fontWeight:700,margin:'0 0 0.5rem'}}>Fly in Any Weather</h2>
          <p style={{color:'#dfdddd',margin:'0 0 2rem'}}>Add your Instrument Rating in just 6–8 weeks. Training 5 days/week at KVDF, Tampa.</p>
          <Link href="/enroll" className="button-style-2h" style={{display:'inline-flex'}}>Apply Now</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
