import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export default function DiscoveryFlightPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div style={{background:'#000040',padding:'5rem 2rem 4rem',textAlign:'center'}}>
          <div style={{maxWidth:'800px',margin:'0 auto',display:'flex',flexDirection:'column',gap:'1.5rem',alignItems:'center'}}>
            <div className="overline-small" style={{color:'#88b2ff'}}>Experience Aviation</div>
            <h1 className="hero-heading" style={{fontSize:'3.5em',fontWeight:300,margin:0}}>
              Give the Gift of <span className="text-span">Flight</span>
            </h1>
            <p style={{color:'#dfdddd',fontSize:'1.2em',fontWeight:300,lineHeight:1.6,maxWidth:'560px',margin:0}}>
              Experience the thrill of flying firsthand — take the controls with one of our expert instructors.
            </p>
            <div style={{display:'flex',gap:'1em',flexWrap:'wrap',justifyContent:'center'}}>
              <a href="tel:+18136004052" className="button-style-2h">
                <span className="btext-2h">Call to Book</span>
              </a>
              <a href="https://wa.me/18134284423" className="button-style-1h" target="_blank" rel="noopener noreferrer">
                <span className="btext-1h">WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Price card + details */}
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'4rem 2rem'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:'3rem',alignItems:'start'}}>

            {/* Price card */}
            <div className="program-content" style={{padding:'2.5rem',textAlign:'center'}}>
              <div className="overline-small" style={{color:'#88b2ff',marginBottom:'0.5rem'}}>Discovery Flight</div>
              <div style={{fontSize:'5rem',fontWeight:700,color:'#fff',lineHeight:1}}>$99</div>
              <div style={{color:'#dfdddd',fontSize:'0.9em',marginTop:'0.5rem',marginBottom:'2rem'}}>per person</div>
              <div style={{borderTop:'1px solid rgba(255,255,255,0.15)',paddingTop:'1.5rem',textAlign:'left',display:'flex',flexDirection:'column',gap:'0.75rem'}}>
                {[
                  '60-minute total experience',
                  '~30–40 min of actual flight time',
                  '~15–20 min ground instruction before flight',
                  'Flight time counts toward FAA training requirements',
                  'Must call to schedule within 6 months of purchase',
                ].map(item => (
                  <div key={item} style={{display:'flex',gap:'0.75rem',alignItems:'flex-start'}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{flexShrink:0,marginTop:'2px'}}>
                      <path d="M20 6L9 17L4 12" stroke="#88b2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{color:'#dfdddd',fontSize:'0.95em',lineHeight:1.5}}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="tel:+18136004052" className="button-style-2h" style={{marginTop:'2rem',display:'flex'}}>
                <span>Book Your Flight</span>
              </a>
            </div>

            {/* Details */}
            <div style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
              <div>
                <h2 className="h2-heading" style={{fontSize:'2.5em',marginBottom:'0.5rem'}}>What to Expect</h2>
                <p style={{color:'#475467',lineHeight:1.7,margin:0}}>
                  Your Discovery Flight begins with a pre-flight walk-around and a ~15–20 minute ground briefing where your instructor covers the basics of flight. Then you'll take to the skies over the Tampa Bay area — and yes, you'll actually take the controls.
                </p>
              </div>

              <div style={{border:'1px solid #eaecf0',borderRadius:'1rem',padding:'1.5rem',display:'flex',flexDirection:'column',gap:'1rem'}}>
                <h3 className="heading-3m" style={{margin:0,fontSize:'1.2em'}}>Scheduling Notes</h3>
                <div style={{display:'flex',gap:'0.75rem',alignItems:'flex-start'}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{flexShrink:0,marginTop:'2px'}}>
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="#506db2" strokeWidth="1.5"/>
                    <path d="M8 2V6M16 2V6M3 10H21" stroke="#506db2" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span style={{color:'#475467',lineHeight:1.6}}>Saturdays only — subject to reschedule due to weather conditions.</span>
                </div>
                <div style={{display:'flex',gap:'0.75rem',alignItems:'flex-start'}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{flexShrink:0,marginTop:'2px'}}>
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#506db2" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  <span style={{color:'#475467',lineHeight:1.6}}>Gift Certificates Available Upon Request — call or WhatsApp us to arrange.</span>
                </div>
              </div>

              <div style={{background:'#f9fafb',border:'1px solid #eaecf0',borderRadius:'1rem',padding:'1.5rem'}}>
                <h3 className="heading-3m" style={{margin:'0 0 1rem',fontSize:'1.1em'}}>Contact Us to Schedule</h3>
                <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
                  <a href="tel:+18136004052" style={{color:'#000040',textDecoration:'none',fontWeight:500,fontSize:'1.05em'}}>(813) 600-4052</a>
                  <a href="https://wa.me/18134284423" style={{color:'#25D366',textDecoration:'none',fontWeight:500,fontSize:'1.05em'}} target="_blank" rel="noopener noreferrer">WhatsApp (813) 428-4423</a>
                  <p style={{color:'#667085',fontSize:'0.9em',margin:'0.5rem 0 0'}}>Fastest response via WhatsApp.</p>
                </div>
              </div>

              <div style={{background:'#000040',borderRadius:'1rem',padding:'1.5rem'}}>
                <p style={{color:'#dfdddd',margin:0,lineHeight:1.6,fontSize:'0.95em'}}>
                  <strong style={{color:'#88b2ff'}}>Note:</strong> Flight time logged during your Discovery Flight counts toward FAA minimum training requirements — a great head start if you decide to pursue your Private Pilot certificate.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{background:'#000040',padding:'4rem 2rem',textAlign:'center'}}>
          <h2 className="h2-heading" style={{color:'#fff',fontSize:'2.5em',marginBottom:'0.5rem'}}>Ready to Fly?</h2>
          <p style={{color:'#dfdddd',margin:'0 0 2rem',fontSize:'1.1em'}}>Call or WhatsApp us — we'll find a Saturday that works for you.</p>
          <div style={{display:'flex',gap:'1em',justifyContent:'center',flexWrap:'wrap'}}>
            <a href="tel:+18136004052" className="button-style-1h">
              <span>(813) 600-4052</span>
            </a>
            <Link href="/enroll" className="button-style-2h">
              <span>Apply to a Full Program</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
