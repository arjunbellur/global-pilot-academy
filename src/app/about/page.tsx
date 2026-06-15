import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const STATS = [
  { value: '2020', label: 'Founded' },
  { value: 'KVDF', label: 'Tampa Executive Airport' },
  { value: '19+', label: 'Aircraft in Fleet' },
  { value: 'Pt. 141 & 61', label: 'FAA Certified' },
  { value: 'In-House DPE', label: 'Checkride Authority' },
  { value: 'I-20 Auth.', label: 'International Students' },
]

const WHY_GPA = [
  {
    title: 'Largest Fleet in Tampa Bay',
    desc: '19+ aircraft, all IFR equipped with Garmin avionics and maintained by our in-house mechanics.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0011 2a1.5 1.5 0 00-1.5 1.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="#506db2"/>
      </svg>
    ),
  },
  {
    title: 'In-House DPE Authority',
    desc: 'Part 141 students complete their checkrides on-site with our Designated Pilot Examiner — no waiting, no scheduling delays.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#506db2"/>
      </svg>
    ),
  },
  {
    title: 'International Students Welcome',
    desc: 'GPA is authorized to issue I-20 documents for the M-1 student visa. We have trained students from around the world.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#506db2" strokeWidth="1.5"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#506db2" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Housing Recommendations',
    desc: 'GPA can connect international and out-of-state students with vetted housing near KVDF for a seamless experience.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="#506db2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="#506db2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Flexible Financing',
    desc: 'Financing available through Stratus Financial. GI Bill accepted for Instrument through CFI/CFII ratings.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#506db2" strokeWidth="1.5"/>
        <path d="M2 10h20" stroke="#506db2" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'In-House Maintenance',
    desc: 'Our mechanics keep the fleet in peak condition, reducing downtime and keeping your training on schedule.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#506db2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <div style={{
          background:'linear-gradient(180deg,#f8f9ff 0%,#fff 100%)',
          borderBottom:'1px solid #eaecf0',
          padding:'5rem 2rem 4rem',
          textAlign:'center',
        }}>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="overline-small" style={{color:'#506db2',marginBottom:'1rem'}}>Tampa Bay Area</div>
            <h1 className="h2-heading" style={{fontSize:'2.75rem',marginBottom:'1.5rem',lineHeight:1.15}}>About Global Pilot Academy</h1>
          </div>
        </div>

        {/* About copy */}
        <div style={{maxWidth:'760px',margin:'0 auto',padding:'4rem 2rem'}}>
          <p style={{fontSize:'1.1em',lineHeight:1.9,color:'#333',marginBottom:'1.75rem'}}>
            Global Pilot Academy is local to the Tampa Bay Area, but our reputation for exceptional flight training reaches internationally. We are known for our meticulously maintained aircraft, highly trained instructors, and comfortable housing accommodations.
          </p>
          <p style={{fontSize:'1.1em',lineHeight:1.9,color:'#333',marginBottom:'1.75rem'}}>
            Our flight training programs are set in a structured, professional, and safe environment to ensure our students receive the highest quality training while also obtaining their certifications in a timely manner. By having in-house 141 examination authority and in-house maintenance staff, we are able to expedite and provide some of the best maintained and safest aircraft for your flight training.
          </p>
          <p style={{fontSize:'1.1em',lineHeight:1.9,color:'#333',margin:0}}>
            Whether you're enrolling into the Professional Pilot Program, looking to earn an individual rating, or just coming to build time and experience, Global Pilot Academy wants to help you achieve your aviation goals. Come see why we provide the best flight training experience in the Bay Area — we look forward to flying with you!
          </p>
        </div>

        {/* Stats */}
        <div style={{background:'#000040',padding:'4rem 2rem'}}>
          <div style={{maxWidth:'1000px',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.5rem'}}>
            {STATS.map(s => (
              <div key={s.label} style={{textAlign:'center',padding:'1.75rem',border:'1px solid rgba(136,178,255,0.2)',borderRadius:'1rem'}}>
                <div style={{fontSize:'1.75rem',fontWeight:700,color:'#fff',lineHeight:1}}>{s.value}</div>
                <div style={{fontSize:'0.82em',color:'#88b2ff',marginTop:'0.5rem'}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why GPA */}
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'5rem 2rem 4rem'}}>
          <div style={{textAlign:'center',marginBottom:'3rem'}}>
            <div className="overline-small" style={{color:'#506db2',marginBottom:'0.75rem'}}>What Sets Us Apart</div>
            <h2 style={{fontSize:'2rem',fontWeight:700,color:'#000040',margin:0,lineHeight:1.2}}>Why Choose GPA?</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.5rem'}}>
            {WHY_GPA.map(item => (
              <div key={item.title} style={{
                border:'1px solid #eaecf0',
                borderRadius:'1rem',
                padding:'1.5rem',
                display:'flex',
                flexDirection:'column',
                gap:'0.75rem',
                boxShadow:'0 1px 3px rgba(0,0,0,0.04)',
              }}>
                <div style={{width:'2.5rem',height:'2.5rem',background:'#f0f4ff',borderRadius:'0.5rem',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  {item.icon}
                </div>
                <h3 style={{margin:0,fontSize:'1rem',fontWeight:600,color:'#000040'}}>{item.title}</h3>
                <p style={{margin:0,color:'#475467',fontSize:'0.875em',lineHeight:1.6}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div style={{background:'#f9fafb',padding:'3rem 2rem',borderTop:'1px solid #eaecf0',borderBottom:'1px solid #eaecf0'}}>
          <div style={{maxWidth:'600px',margin:'0 auto',textAlign:'center'}}>
            <h2 style={{fontSize:'1.35rem',fontWeight:700,marginBottom:'1rem',color:'#000040'}}>Find Us</h2>
            <p style={{color:'#475467',lineHeight:1.7,marginBottom:'0.75rem'}}>
              6530 Tampa Executive Airport Rd, Suite 111<br/>Tampa, FL 33610
            </p>
            <p style={{color:'#475467',lineHeight:1.7,margin:0}}>
              Tampa Executive Airport (KVDF)<br/>
              <a href="tel:+18136004052" style={{color:'#000040',fontWeight:500,textDecoration:'none'}}>(813) 600-4052</a>
              {' · '}
              <a href="https://wa.me/18134284423" target="_blank" rel="noopener noreferrer" style={{color:'#25D366',fontWeight:500,textDecoration:'none'}}>WhatsApp (813) 428-4423</a>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{background:'#000040',padding:'5rem 2rem',textAlign:'center'}}>
          <h2 style={{color:'#fff',fontSize:'2rem',fontWeight:700,margin:'0 0 0.75rem',lineHeight:1.2}}>Ready to Train with Us?</h2>
          <p style={{color:'rgba(255,255,255,0.65)',margin:'0 0 2rem',lineHeight:1.7}}>From zero to airline — GPA is with you every step of the way.</p>
          <div style={{display:'flex',gap:'1em',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/enroll" className="button-style-2h">Apply Now</Link>
            <Link href="/contact" className="button-style-1h">Contact Us</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
