import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const SINGLE_ENGINE = [
  '86 hrs Aircraft Rental (Cessna 152)',
  '10 hrs Complex Aircraft',
  '24 hrs FAA-Approved Flight Simulator',
  '80 hrs with a Flight Instructor',
  'Certificate: Commercial Pilot Single Engine Land',
]

const MULTI_ENGINE = [
  '10 hrs Aircraft Rental (PA34-200 Piper Seneca)',
  '5 hrs FAA-Approved Flight Simulator',
  '30 hrs with a Flight Instructor',
  'Certificate: Multi-Engine Add-on',
]

export default function CommercialPilotPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <div style={{background:'linear-gradient(180deg,#f8f9ff 0%,#fff 100%)',borderBottom:'1px solid #eaecf0',padding:'5rem 2rem 4rem',textAlign:'center'}}>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="overline-small" style={{color:'#506db2',marginBottom:'1rem'}}>FAA Part 141 &amp; 61</div>
            <h1 style={{fontSize:'2.75rem',fontWeight:700,color:'#000040',margin:'0 0 1rem',lineHeight:1.15}}>Commercial Pilot Program</h1>
            <p style={{color:'#475467',fontSize:'1.05em',lineHeight:1.7,margin:'0 0 2rem'}}>
              You must have a Commercial Pilot Certificate to be compensated as a pilot. To obtain one, you need at least 250 hours total flight time for Part 61 or 190 hours for Part 141.
            </p>
            <div style={{display:'flex',gap:'1em',justifyContent:'center',flexWrap:'wrap'}}>
              <Link href="/enroll" className="button-style-2h">Apply Now</Link>
              <Link href="/instrument-rating" className="button-style-1h">View Instrument Rating</Link>
            </div>
          </div>
        </div>

        {/* Two package cards */}
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'2rem 2rem 4rem',display:'flex',flexDirection:'column',gap:'3rem'}}>

          {/* Package 1: Commercial Single Engine */}
          <div>
            <h2 className="h2-heading" style={{fontSize:'1.8em',marginBottom:'1.5rem'}}>Commercial Single Engine <span style={{color:'#506db2',fontSize:'0.8em'}}>(Part 141)</span></h2>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:'3rem',alignItems:'start'}}>
              <div className="program-content" style={{padding:'2.5rem'}}>
                <div className="overline-small" style={{color:'#88b2ff',marginBottom:'0.5rem'}}>Starting Price</div>
                <div style={{fontSize:'3rem',fontWeight:700,color:'#fff',lineHeight:1}}>$20,500<span style={{fontSize:'0.4em',verticalAlign:'super'}}>*</span></div>
                <div style={{color:'rgba(255,255,255,0.5)',fontSize:'0.85em',marginBottom:'2rem'}}>*prices subject to change</div>
                <div style={{borderTop:'1px solid rgba(255,255,255,0.15)',paddingTop:'1.5rem'}}>
                  <div style={{color:'#88b2ff',fontSize:'0.8em',textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:'1rem'}}>Package Includes</div>
                  <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
                    {SINGLE_ENGINE.map(item => (
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
                  Apply
                </Link>
              </div>

              <div style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
                <div>
                  <h3 className="heading-3m" style={{fontSize:'1.2em',marginBottom:'0.5rem'}}>Prerequisites</h3>
                  <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
                    {[
                      'Private Pilot Certificate + Instrument Rating',
                      '190 total flight hours (Part 141) or 250 hrs (Part 61)',
                      'Valid FAA Medical Certificate',
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
                <div style={{background:'#f9fafb',border:'1px solid #eaecf0',borderRadius:'1rem',padding:'1.5rem'}}>
                  <p style={{color:'#475467',lineHeight:1.7,margin:0,fontSize:'0.95em'}}>
                    The Commercial Single Engine program uses the Cessna 152 for primary training plus complex aircraft hours required by the FAA. Combined with simulator time, this is the most cost-effective path to your Commercial certificate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={{borderTop:'2px solid #eaecf0',paddingTop:'2rem'}}>
            <h2 className="h2-heading" style={{fontSize:'1.8em',marginBottom:'1.5rem'}}>Multi-Engine Rating Add-on <span style={{color:'#506db2',fontSize:'0.8em'}}>(Part 61)</span></h2>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:'3rem',alignItems:'start'}}>
              <div className="program-content" style={{padding:'2.5rem'}}>
                <div className="overline-small" style={{color:'#88b2ff',marginBottom:'0.5rem'}}>Starting Price</div>
                <div style={{fontSize:'3rem',fontWeight:700,color:'#fff',lineHeight:1}}>$8,500<span style={{fontSize:'0.4em',verticalAlign:'super'}}>*</span></div>
                <div style={{color:'rgba(255,255,255,0.5)',fontSize:'0.85em',marginBottom:'2rem'}}>*prices subject to change</div>
                <div style={{borderTop:'1px solid rgba(255,255,255,0.15)',paddingTop:'1.5rem'}}>
                  <div style={{color:'#88b2ff',fontSize:'0.8em',textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:'1rem'}}>Package Includes</div>
                  <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
                    {MULTI_ENGINE.map(item => (
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
                  Apply
                </Link>
              </div>

              <div style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
                <div>
                  <h3 className="heading-3m" style={{fontSize:'1.2em',marginBottom:'0.5rem'}}>Prerequisite</h3>
                  <div style={{display:'flex',gap:'0.75rem',alignItems:'flex-start'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{flexShrink:0,marginTop:'3px'}}>
                      <circle cx="12" cy="12" r="9" stroke="#506db2" strokeWidth="1.5"/>
                      <path d="M9 12l2 2 4-4" stroke="#506db2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{color:'#475467',fontSize:'0.9em',lineHeight:1.5}}>Commercial Pilot Certificate with Instrument Rating</span>
                  </div>
                </div>
                <div style={{background:'#000040',borderRadius:'1rem',padding:'1.5rem'}}>
                  <div style={{color:'#88b2ff',fontWeight:600,marginBottom:'0.5rem'}}>Piper Seneca PA34-200</div>
                  <p style={{color:'#dfdddd',margin:0,fontSize:'0.9em',lineHeight:1.6}}>
                    The multi-engine add-on is flown in GPA's Piper Seneca, a twin-engine aircraft. This rating is required by most regional airlines and significantly expands your employment opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div style={{background:'#000040',padding:'4rem 2rem',textAlign:'center'}}>
          <h2 style={{color:'#fff',fontSize:'2em',fontWeight:700,margin:'0 0 0.5rem'}}>Get Paid to Fly</h2>
          <p style={{color:'#dfdddd',margin:'0 0 2rem'}}>Your Commercial certificate is the key to an aviation career. Apply today.</p>
          <div style={{display:'flex',gap:'1em',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/enroll" className="button-style-2h" style={{display:'inline-flex'}}>Apply Now</Link>
            <Link href="/airline-pilot-pathway-program" className="button-style-1h" style={{display:'inline-flex'}}>View Airline Pathway</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
