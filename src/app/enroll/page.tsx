import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const REQUIREMENTS = [
  'Two valid forms of government ID',
  'FAA Medical Certificate obtained or in process',
  'Non-owned aircraft renters insurance ($75,000 minimum) — AOPA or Avemco',
  '$150 nonrefundable application fee ready',
]

export default function EnrollPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(180deg,#f8f9ff 0%,#fff 100%)',
          borderBottom: '1px solid #eaecf0',
          padding: '5rem 2rem 4rem',
          textAlign: 'center',
        }}>
          <div style={{maxWidth:'660px',margin:'0 auto'}}>
            <div className="overline-small" style={{color:'#506db2',marginBottom:'1rem'}}>Next Intake: August 2026</div>
            <h1 style={{fontSize:'2.75rem',fontWeight:700,color:'#000040',margin:'0 0 1rem',lineHeight:1.15}}>
              Apply to Global Pilot Academy
            </h1>
            <p style={{color:'#475467',fontSize:'1.05em',lineHeight:1.7,margin:0}}>
              A <strong>$150 nonrefundable application fee</strong> is required to complete your application. Review the requirements below before applying.
            </p>
          </div>
        </div>

        {/* Requirements checklist */}
        <div style={{maxWidth:'680px',margin:'0 auto',padding:'3rem 2rem'}}>
          <div style={{background:'#f9fafb',border:'1px solid #eaecf0',borderRadius:'1rem',padding:'2rem'}}>
            <h2 style={{margin:'0 0 1.25rem',fontSize:'1.15em',fontWeight:700,color:'#000040'}}>Before You Apply</h2>
            <div style={{display:'flex',flexDirection:'column',gap:'0.875rem'}}>
              {REQUIREMENTS.map(r => (
                <div key={r} style={{display:'flex',gap:'0.75rem',alignItems:'flex-start'}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{flexShrink:0,marginTop:'2px'}}>
                    <circle cx="12" cy="12" r="10" fill="#000040"/>
                    <path d="M8 12l3 3 5-5" stroke="#88b2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{color:'#344054',lineHeight:1.6,fontSize:'0.95em'}}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two paths */}
        <div style={{maxWidth:'900px',margin:'0 auto',padding:'0 2rem 5rem',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.5rem'}}>
          <div className="program-content" style={{padding:'2.5rem',textAlign:'center'}}>
            <div style={{width:'3rem',height:'3rem',background:'rgba(136,178,255,0.15)',borderRadius:'0.75rem',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 1rem'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#88b2ff"/>
              </svg>
            </div>
            <div className="overline-small" style={{color:'#88b2ff',marginBottom:'0.5rem'}}>U.S. Citizens &amp; Residents</div>
            <h2 style={{color:'#fff',fontSize:'1.4em',fontWeight:700,margin:'0 0 0.75rem'}}>Domestic Application</h2>
            <p style={{color:'rgba(255,255,255,0.65)',fontSize:'0.9em',lineHeight:1.7,margin:'0 0 1.5rem'}}>
              For U.S. citizens, permanent residents, and domestic students.
            </p>
            <Link href="/apply/domestic" className="button-style-2h" style={{justifyContent:'center'}}>
              Apply Now
            </Link>
          </div>

          <div className="program-content" style={{padding:'2.5rem',textAlign:'center'}}>
            <div style={{width:'3rem',height:'3rem',background:'rgba(136,178,255,0.15)',borderRadius:'0.75rem',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 1rem'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#88b2ff" strokeWidth="1.5"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#88b2ff" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="overline-small" style={{color:'#88b2ff',marginBottom:'0.5rem'}}>M-1 Student Visa</div>
            <h2 style={{color:'#fff',fontSize:'1.4em',fontWeight:700,margin:'0 0 0.75rem'}}>International Application</h2>
            <p style={{color:'rgba(255,255,255,0.65)',fontSize:'0.9em',lineHeight:1.7,margin:'0 0 1.5rem'}}>
              GPA is I-20 authorized. We assist with visa applications and TSA clearance.
            </p>
            <Link href="/apply/international" className="button-style-2h" style={{justifyContent:'center'}}>
              Apply Now
            </Link>
          </div>
        </div>

        {/* Contact prompt */}
        <div style={{background:'#000040',padding:'5rem 2rem',textAlign:'center'}}>
          <h2 style={{color:'#fff',fontSize:'2rem',fontWeight:700,margin:'0 0 0.75rem',lineHeight:1.2}}>Questions Before Applying?</h2>
          <p style={{color:'rgba(255,255,255,0.65)',margin:'0 0 2rem',lineHeight:1.7,maxWidth:'460px',marginLeft:'auto',marginRight:'auto'}}>
            Our admissions team is happy to walk you through the process. WhatsApp is the fastest way to reach us.
          </p>
          <div style={{display:'flex',gap:'1em',justifyContent:'center',flexWrap:'wrap'}}>
            <a href="https://wa.me/18134284423" className="button-style-2h" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            <a href="tel:+18136004052" className="button-style-1h">Call Us</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
