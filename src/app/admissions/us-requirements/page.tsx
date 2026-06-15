import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const ID_TYPES = [
  'U.S. Passport',
  'Driver\'s License',
  'State-Issued ID',
  'Permanent Resident Card',
  'Birth Certificate',
  'Military ID',
]

const REQUIREMENTS = [
  {
    title: 'Two Valid Forms of Government ID',
    desc: 'Accepted documents include:',
    list: ID_TYPES,
  },
  {
    title: 'FAA Medical Certificate',
    desc: 'Any class is accepted at enrollment. The class required depends on your end certificate:',
    list: [
      '3rd Class — Private Pilot',
      '2nd Class — Commercial Pilot',
      '1st Class — Airline Transport Pilot',
    ],
  },
  {
    title: '$150 Nonrefundable Application Fee',
    desc: 'Required to complete your enrollment application. This fee is nonrefundable.',
    list: [],
  },
  {
    title: 'Non-Owned Aircraft Renters Insurance',
    desc: 'Minimum $75,000 coverage required before solo flight. Accepted providers:',
    list: [
      'AOPA Renter\'s Insurance',
      'Avemco',
    ],
  },
]

export default function USRequirementsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <div style={{background:'linear-gradient(180deg,#f8f9ff 0%,#fff 100%)',borderBottom:'1px solid #eaecf0',padding:'5rem 2rem 4rem',textAlign:'center'}}>
          <div style={{maxWidth:'600px',margin:'0 auto'}}>
            <div className="overline-small" style={{color:'#506db2',marginBottom:'1rem'}}>Domestic Admissions</div>
            <h1 style={{fontSize:'2.75rem',fontWeight:700,color:'#000040',margin:'0 0 1rem',lineHeight:1.15}}>U.S. Student Requirements</h1>
            <p style={{color:'#475467',fontSize:'1.05em',lineHeight:1.7,margin:0}}>
              Everything you need to know before enrolling as a domestic student at Global Pilot Academy.
            </p>
          </div>
        </div>

        {/* Requirements */}
        <div style={{maxWidth:'800px',margin:'0 auto',padding:'0 2rem 4rem',display:'flex',flexDirection:'column',gap:'1.5rem'}}>
          {REQUIREMENTS.map((r, i) => (
            <div key={r.title} style={{border:'1px solid #eaecf0',borderRadius:'1rem',padding:'2rem',display:'flex',gap:'1.5rem',alignItems:'flex-start',boxShadow:'0 1px 2px rgba(0,0,0,0.04)'}}>
              <div style={{width:'2.5rem',height:'2.5rem',background:'#000040',borderRadius:'0.5rem',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,color:'#88b2ff',fontWeight:700,fontSize:'1.1em'}}>
                {i + 1}
              </div>
              <div style={{flex:1}}>
                <h3 style={{margin:'0 0 0.5rem',fontSize:'1.05em',fontWeight:700,color:'#000040'}}>{r.title}</h3>
                <p style={{color:'#475467',margin: r.list.length ? '0 0 0.75rem' : 0,fontSize:'0.9em',lineHeight:1.6}}>{r.desc}</p>
                {r.list.length > 0 && (
                  <div style={{display:'flex',flexDirection:'column',gap:'0.35rem'}}>
                    {r.list.map(item => (
                      <div key={item} style={{display:'flex',gap:'0.5rem',alignItems:'center'}}>
                        <div style={{width:'5px',height:'5px',borderRadius:'50%',background:'#506db2',flexShrink:0}}/>
                        <span style={{color:'#344054',fontSize:'0.9em'}}>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Financing + GI Bill */}
        <div style={{maxWidth:'800px',margin:'0 auto',padding:'0 2rem 5rem',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.5rem'}}>
          <div style={{background:'#000040',borderRadius:'1rem',padding:'1.75rem'}}>
            <div style={{color:'#88b2ff',fontWeight:700,fontSize:'1em',marginBottom:'0.75rem'}}>Student Financing</div>
            <p style={{color:'#dfdddd',margin:'0 0 1rem',fontSize:'0.9em',lineHeight:1.6}}>
              Financing is available through <strong style={{color:'#fff'}}>Stratus Financial</strong>. Pay-as-you-go and customizable installment plans are also accepted. Third-party scholarships and loans are welcome.
            </p>
          </div>
          <div style={{background:'#000040',borderRadius:'1rem',padding:'1.75rem'}}>
            <div style={{color:'#88b2ff',fontWeight:700,fontSize:'1em',marginBottom:'0.75rem'}}>GI Bill Accepted</div>
            <p style={{color:'#dfdddd',margin:'0 0 1rem',fontSize:'0.9em',lineHeight:1.6}}>
              The GI Bill covers <strong style={{color:'#fff'}}>Instrument Rating through CFI/CFII</strong> programs. You must already hold a Private Pilot license to use your benefits at GPA.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{background:'#000040',padding:'4rem 2rem',textAlign:'center'}}>
          <h2 style={{color:'#fff',fontSize:'2em',fontWeight:700,margin:'0 0 0.5rem'}}>Ready to Apply?</h2>
          <p style={{color:'#dfdddd',margin:'0 0 2rem'}}>Next intake: August 2026 · $150 application fee required</p>
          <div style={{display:'flex',gap:'1em',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/enroll" className="button-style-2h" style={{display:'inline-flex'}}>Start Application</Link>
            <Link href="/faq" className="button-style-1h" style={{display:'inline-flex'}}>Read FAQ</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
