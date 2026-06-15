import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const MALIBU_AMENITIES = [
  'Pool & Hot Tub',
  'Tanning Booth',
  'Clubhouse',
  'Fitness Center',
  'Game Room (flat screen TV, lounge, pool table)',
  'Controlled Gate Access',
  'Non-shared rooms',
]

export default function AccommodationsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <div style={{background:'linear-gradient(180deg,#f8f9ff 0%,#fff 100%)',borderBottom:'1px solid #eaecf0',padding:'5rem 2rem 4rem',textAlign:'center'}}>
          <div style={{maxWidth:'600px',margin:'0 auto'}}>
            <div className="overline-small" style={{color:'#506db2',marginBottom:'1rem'}}>International Students</div>
            <h1 style={{fontSize:'2.75rem',fontWeight:700,color:'#000040',margin:'0 0 1rem',lineHeight:1.15}}>Housing &amp; Accommodations</h1>
            <p style={{color:'#475467',fontSize:'1.05em',lineHeight:1.7,margin:0}}>
              GPA does not provide housing or transportation directly — the options below are our recommendations for students training at KVDF.
            </p>
          </div>
        </div>

        {/* Disclaimer banner */}
        <div style={{maxWidth:'800px',margin:'0 auto',padding:'0 2rem 2rem'}}>
          <div style={{background:'#fffbeb',border:'1px solid #fcd34d',borderRadius:'1rem',padding:'1.25rem 1.5rem',display:'flex',gap:'0.75rem',alignItems:'flex-start'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{flexShrink:0,marginTop:'1px'}}>
              <path d="M12 2L22 20H2L12 2Z" stroke="#d97706" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M12 9V13M12 17H12.01" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p style={{margin:0,color:'#92400e',fontSize:'0.9em',lineHeight:1.6}}>
              <strong>Note:</strong> These housing options are recommendations only. GPA does not provide housing or transportation services directly. Students are responsible for their own accommodation arrangements.
            </p>
          </div>
        </div>

        {/* Featured housing */}
        <div style={{maxWidth:'1000px',margin:'0 auto',padding:'0 2rem 4rem'}}>
          <h2 className="h2-heading" style={{fontSize:'2rem',marginBottom:'2rem'}}>Featured Option</h2>

          <div style={{display:'grid',gridTemplateColumns:'1.2fr 1fr',gap:'3rem',alignItems:'start'}}>
            <div>
              <div style={{display:'flex',alignItems:'baseline',gap:'1rem',marginBottom:'0.5rem'}}>
                <h3 style={{margin:0,fontSize:'1.5em',fontWeight:700,color:'#000040'}}>Malibu Apartments</h3>
                <div style={{background:'#000040',color:'#88b2ff',borderRadius:'2rem',padding:'0.25rem 0.75rem',fontSize:'0.8em',fontWeight:600,whiteSpace:'nowrap'}}>
                  $950/month
                </div>
              </div>
              <p style={{color:'#475467',marginBottom:'1.5rem',lineHeight:1.7,fontSize:'0.95em'}}>
                A popular choice for GPA students — comfortable, secure, and close to Tampa Executive Airport.
              </p>

              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.75rem'}}>
                {MALIBU_AMENITIES.map(amenity => (
                  <div key={amenity} style={{display:'flex',gap:'0.6rem',alignItems:'flex-start'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{flexShrink:0,marginTop:'3px'}}>
                      <path d="M20 6L9 17L4 12" stroke="#000040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{color:'#344054',fontSize:'0.875em',lineHeight:1.5}}>{amenity}</span>
                  </div>
                ))}
              </div>

              <div style={{marginTop:'1.5rem',padding:'1rem',background:'#f9fafb',borderRadius:'0.75rem',border:'1px solid #eaecf0'}}>
                <p style={{color:'#667085',margin:0,fontSize:'0.85em',lineHeight:1.6}}>
                  <strong style={{color:'#344054'}}>Note:</strong> Electric charges apply separately. Monthly rate is base rent only.
                </p>
              </div>
            </div>

            <div className="program-content" style={{padding:'2rem'}}>
              <div className="overline-small" style={{color:'#88b2ff',marginBottom:'0.5rem'}}>Monthly Rate</div>
              <div style={{fontSize:'3rem',fontWeight:700,color:'#fff',lineHeight:1,marginBottom:'0.5rem'}}>$950</div>
              <div style={{color:'rgba(255,255,255,0.5)',fontSize:'0.85em',marginBottom:'1.5rem'}}>per month (+ electric)</div>

              <div style={{borderTop:'1px solid rgba(255,255,255,0.15)',paddingTop:'1.25rem',display:'flex',flexDirection:'column',gap:'0.75rem'}}>
                <div style={{color:'#88b2ff',fontSize:'0.8em',textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:'0.25rem'}}>Highlights</div>
                {['Non-shared rooms', 'Controlled gate access', 'Pool & fitness center', 'Close to KVDF'].map(h => (
                  <div key={h} style={{display:'flex',gap:'0.6rem',alignItems:'center'}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#88b2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{color:'#dfdddd',fontSize:'0.875em'}}>{h}</span>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/18134284423" className="button-style-2h" style={{marginTop:'1.5rem',display:'flex',justifyContent:'center'}}
                target="_blank" rel="noopener noreferrer">
                Ask About Housing
              </a>
            </div>
          </div>
        </div>

        {/* More options */}
        <div style={{background:'#f9fafb',borderTop:'1px solid #eaecf0',borderBottom:'1px solid #eaecf0',padding:'3rem 2rem',textAlign:'center'}}>
          <div style={{maxWidth:'600px',margin:'0 auto'}}>
            <h2 style={{fontSize:'1.5em',fontWeight:700,margin:'0 0 0.75rem',color:'#000040'}}>More Options Available</h2>
            <p style={{color:'#475467',lineHeight:1.7,margin:'0 0 1.5rem'}}>
              GPA has a housing PDF with additional options near KVDF. Contact us and we'll send it right over.
            </p>
            <div style={{display:'flex',gap:'1em',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="https://wa.me/18134284423" className="button-style-2h" target="_blank" rel="noopener noreferrer">
                WhatsApp for Housing PDF
              </a>
              <a href="tel:+18136004052" className="button-style-1h">(813) 600-4052</a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{background:'#000040',padding:'4rem 2rem',textAlign:'center'}}>
          <h2 style={{color:'#fff',fontSize:'2em',fontWeight:700,margin:'0 0 0.5rem'}}>Ready to Train at GPA?</h2>
          <p style={{color:'#dfdddd',margin:'0 0 2rem'}}>International students are welcome. GPA is I-20 authorized for the M-1 student visa.</p>
          <div style={{display:'flex',gap:'1em',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/enroll" className="button-style-2h" style={{display:'inline-flex'}}>Apply Now</Link>
            <Link href="/contact" className="button-style-1h" style={{display:'inline-flex'}}>Contact Admissions</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
