import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const REQUIREMENTS = [
  {
    title: 'Class-I Medical',
    desc: 'Valid within 12 months. Required for both DGCA and FAA purposes.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="#506db2"/>
        <path d="M12 2a10 10 0 110 20A10 10 0 0112 2zm0 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-1 5v7h2v-7h-2z" fill="#506db2"/>
      </svg>
    ),
  },
  {
    title: 'Age 18+',
    desc: 'Must be 18 or older as per your 10th standard certificate.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" fill="#506db2"/>
      </svg>
    ),
  },
  {
    title: '10+2 Qualification',
    desc: 'Must have passed 10+2 with Physics and Mathematics.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm7 3l-5 9h10L12 6z" fill="#506db2"/>
      </svg>
    ),
  },
  {
    title: 'DGCA Knowledge Tests',
    desc: 'Before traveling to the U.S., you must pass the DGCA Air Regulation, Meteorology, and Navigation exams. Results are valid for 5 years. GPA can recommend prep courses and schools in India.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="#506db2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'RTR(A) License',
    desc: 'Valid Restricted Radio Telephone (Aeronautical) license from the Ministry of Communications.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 6.5C3 4.6 4.6 3 6.5 3S10 4.6 10 6.5c0 3-3.5 7.5-3.5 7.5S3 9.5 3 6.5zm3.5 1a1 1 0 100-2 1 1 0 000 2zM14.5 3C16.4 3 18 4.6 18 6.5c0 3-3.5 7.5-3.5 7.5S11 9.5 11 6.5C11 4.6 12.6 3 14.5 3zm0 4.5a1 1 0 100-2 1 1 0 000 2z" fill="#506db2"/>
        <path d="M8 18h8M12 14v4" stroke="#506db2" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Documentation',
    desc: 'Verification certificates for 10th & 12th, valid foreign license with verification, certified logbook with attested flying statements (within 5 years), and eight passport-size photographs with name printed.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" stroke="#506db2" strokeWidth="1.5"/>
        <path d="M13 3v5a1 1 0 001 1h5M9 13h6M9 17h4" stroke="#506db2" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Pass DGCA Ground Exams in India',
    desc: 'Complete Air Regulation, Meteorology, and Navigation exams before departing for the U.S. GPA recommends study resources.',
  },
  {
    num: '02',
    title: 'Enroll & Train at GPA (Tampa, FL)',
    desc: "Complete your FAA flight training at KVDF. GPA's structured program and in-house DPE authority keep your training on schedule.",
  },
  {
    num: '03',
    title: 'DGCA Conversion & License',
    desc: "Return to India with your FAA certificates and complete the DGCA conversion process with GPA's documentation support.",
  },
]

export default function IndiaDGCAPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <div style={{
          backgroundImage: "url('/images/joel-jasmin-forestbird-P8b0bg-w_YA-unsplash.jpg')",
          backgroundPosition: '50% 40%',
          backgroundSize: 'cover',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 2rem',
        }}>
          <div style={{
            maxWidth: '660px',
            width: '100%',
            background: 'rgba(255,255,255,0.96)',
            borderRadius: '1.5rem',
            padding: '3rem 2.5rem',
            textAlign: 'center',
            boxShadow: '0 12px 40px rgba(0,0,64,0.18)',
          }}>
            <div className="overline-small" style={{color:'#506db2',marginBottom:'1rem'}}>For Indian Pilots</div>
            <h1 style={{fontSize:'2.75rem',fontWeight:700,color:'#000040',margin:'0 0 1rem',lineHeight:1.15}}>
              <span style={{color:'#506db2'}}>India DGCA</span> Program
            </h1>
            <p style={{color:'#475467',fontSize:'1.05em',lineHeight:1.7,margin:'0 0 2rem'}}>
              GPA streamlines your FAA-to-DGCA journey with complete support for training, documentation, and license conversion.
            </p>
            <div style={{display:'flex',gap:'1em',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="#requirements" className="button-style-2h">View Requirements</a>
              <Link href="/admissions/apply-international" className="button-style-1h">Apply Now</Link>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div id="requirements" style={{maxWidth:'1100px',margin:'0 auto',padding:'5rem 2rem 4rem'}}>
          <div style={{textAlign:'center',marginBottom:'3rem'}}>
            <div className="overline-small" style={{color:'#506db2',marginBottom:'0.75rem'}}>Before You Apply</div>
            <h2 style={{fontSize:'2.25rem',fontWeight:700,color:'#000040',margin:0,lineHeight:1.2}}>Program Requirements</h2>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.5rem',marginBottom:'4rem'}}>
            {REQUIREMENTS.map(r => (
              <div key={r.title} style={{
                border:'1px solid #eaecf0',
                borderRadius:'1rem',
                padding:'1.75rem',
                background:'#fff',
                boxShadow:'0 1px 3px rgba(0,0,0,0.06)',
                display:'flex',
                flexDirection:'column',
                gap:'0.75rem',
              }}>
                <div style={{width:'2.5rem',height:'2.5rem',background:'#f0f4ff',borderRadius:'0.5rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  {r.icon}
                </div>
                <div style={{fontWeight:700,fontSize:'1rem',color:'#000040'}}>{r.title}</div>
                <p style={{margin:0,color:'#475467',fontSize:'0.875em',lineHeight:1.6}}>{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Process steps */}
          <div style={{marginBottom:'4rem'}}>
            <h2 style={{fontSize:'1.75rem',fontWeight:700,color:'#000040',marginBottom:'1.5rem'}}>How It Works</h2>
            <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              {STEPS.map(s => (
                <div key={s.num} style={{
                  display:'flex',
                  gap:'1.5rem',
                  alignItems:'flex-start',
                  padding:'1.5rem',
                  border:'1px solid #eaecf0',
                  borderRadius:'1rem',
                  background:'#fff',
                }}>
                  <div style={{fontSize:'1.75rem',fontWeight:700,color:'#88b2ff',flexShrink:0,lineHeight:1,minWidth:'2rem'}}>{s.num}</div>
                  <div>
                    <div style={{fontWeight:600,fontSize:'1.05rem',color:'#000040',marginBottom:'0.35rem'}}>{s.title}</div>
                    <p style={{margin:0,color:'#475467',fontSize:'0.9em',lineHeight:1.6}}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key differentiator */}
          <div style={{
            background:'#f0f4ff',
            border:'1px solid #c7d7ff',
            borderRadius:'1rem',
            padding:'2rem',
            display:'grid',
            gridTemplateColumns:'1fr 1fr 1fr',
            gap:'2rem',
            marginBottom:'4rem',
          }}>
            {[
              {label:'In-House DPE', desc:'Checkrides on-site — no waiting for external examiners'},
              {label:'I-20 Authorized', desc:'GPA issues your M-1 student visa documentation'},
              {label:'Housing Support', desc:'Vetted housing recommendations near KVDF'},
            ].map(d => (
              <div key={d.label} style={{textAlign:'center'}}>
                <div style={{fontWeight:700,fontSize:'1rem',color:'#000040',marginBottom:'0.35rem'}}>{d.label}</div>
                <p style={{margin:0,color:'#475467',fontSize:'0.85em',lineHeight:1.5}}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{background:'#000040',padding:'5rem 2rem',textAlign:'center'}}>
          <div className="overline-small" style={{color:'#88b2ff',marginBottom:'0.75rem'}}>August 2026 Intake Open</div>
          <h2 style={{color:'#fff',fontSize:'2rem',fontWeight:700,margin:'0 0 0.75rem',lineHeight:1.2}}>Ready to Start Your DGCA Journey?</h2>
          <p style={{color:'rgba(255,255,255,0.65)',margin:'0 0 2rem',lineHeight:1.7,maxWidth:'520px',marginLeft:'auto',marginRight:'auto'}}>
            Contact us via WhatsApp for the fastest response. Our team will walk you through every step.
          </p>
          <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/admissions/apply-international" className="button-style-1h">Apply Now</Link>
            <a href="https://wa.me/18134284423" target="_blank" rel="noopener noreferrer" className="button-style-2h">WhatsApp Us</a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
