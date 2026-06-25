'use client'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const PROGRAMS = [
  {
    title: 'Airline Pilot Pathway',
    tag: 'Zero to Airline',
    desc: 'Complete training from zero hours to airline-ready. Private → Instrument → Commercial → CFI in 12–14 months.',
    href: '/airline-pilot-pathway-program',
    price: 'From $60,999',
    img: '/images/program-images.png',
    accent: '#000040',
  },
  {
    title: 'India DGCA Program',
    tag: 'International',
    desc: 'FAA training structured for DGCA license conversion. Includes documentation support and I-20 authorization.',
    href: '/india-dgca-program',
    price: 'Contact for pricing',
    img: '/images/vivek-arya-_HyaM8bzNEw-unsplash.jpg',
    accent: '#506db2',
  },
  {
    title: 'Private Pilot',
    tag: 'Get Started',
    desc: 'Your first certificate. 55 hrs aircraft rental in Cessna 152. Complete in 10–12 weeks training 5x/week.',
    href: '/private-pilot',
    price: 'From $12,999',
    img: '/images/sam-albury-xgVwnKjKabg-unsplash.jpg',
    accent: '#000040',
  },
  {
    title: 'Instrument Rating',
    tag: 'Part 141',
    desc: 'Fly in IFR conditions and controlled airspace. 21 hrs aircraft + 14 hrs FAA-approved simulator.',
    href: '/instrument-rating',
    price: 'From $10,999',
    img: '/images/oskar-kadaksoo-2Y2MnFyoefs-unsplash.jpg',
    accent: '#000040',
  },
  {
    title: 'Commercial Pilot',
    tag: 'Get Paid to Fly',
    desc: 'Earn your Commercial certificate and Multi-Engine rating. Prerequisite: Private + Instrument.',
    href: '/commercial-pilot',
    price: 'From $20,500',
    img: '/images/alexey-starki-91ykdj2WQeg-unsplash.jpg',
    accent: '#000040',
  },
  {
    title: 'Flight Instructor',
    tag: 'CFI · CFI-I · MEI',
    desc: 'Get paid to build hours as a CFI. GPA graduates get hiring priority when instructor positions open.',
    href: '/flight-instructor',
    price: 'From $4,999',
    img: '/images/pasqualino-capobianco-gpKbg7jdr8Y-unsplash.jpg',
    accent: '#506db2',
  },
]

export default function ProgramOverviewPage() {
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
          <div style={{maxWidth:'600px',margin:'0 auto'}}>
            <div className="overline-small" style={{color:'#506db2',marginBottom:'1rem'}}>Tampa Executive Airport (KVDF)</div>
            <h1 className="h2-heading" style={{fontSize:'2.75rem',marginBottom:'1rem',lineHeight:1.15}}>Our Programs</h1>
            <p style={{color:'#475467',fontSize:'1.05em',lineHeight:1.7,margin:0}}>
              From your first flight to an airline career — GPA offers every certificate and rating you need, all at one school.
            </p>
          </div>
        </div>

        {/* Program cards */}
        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'4rem 2rem 6rem'}}>
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(3,1fr)',
            gap:'1.5rem',
          }}>
            {PROGRAMS.map(p => (
              <Link
                key={p.title}
                href={p.href}
                style={{textDecoration:'none',display:'flex',flexDirection:'column',borderRadius:'1rem',overflow:'hidden',border:'1px solid #eaecf0',background:'#fff',boxShadow:'0 1px 3px rgba(0,0,0,0.06)',transition:'box-shadow 0.2s, transform 0.2s'}}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,64,0.12)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                {/* Image */}
                <div style={{height:'180px',overflow:'hidden',position:'relative',flexShrink:0}}>
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}
                  />
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(0,0,64,0.4) 0%, transparent 60%)'}}/>
                  <div style={{
                    position:'absolute',top:'0.75rem',left:'0.75rem',
                    background:p.accent,
                    color:'#fff',
                    fontSize:'0.7rem',
                    fontWeight:600,
                    letterSpacing:'0.05em',
                    textTransform:'uppercase',
                    padding:'0.25rem 0.6rem',
                    borderRadius:'2rem',
                  }}>{p.tag}</div>
                </div>

                {/* Content */}
                <div style={{padding:'1.25rem',display:'flex',flexDirection:'column',gap:'0.5rem',flex:1}}>
                  <div style={{fontWeight:700,fontSize:'1rem',color:'#000040'}}>{p.title}</div>
                  <p style={{margin:0,color:'#475467',fontSize:'0.85em',lineHeight:1.6,flex:1}}>{p.desc}</p>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'0.75rem',paddingTop:'0.75rem',borderTop:'1px solid #eaecf0'}}>
                    <span style={{fontSize:'0.85rem',fontWeight:600,color:'#000040'}}>{p.price}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M14.5 16L5.9 7.4l1.4-1.4 8.6 8.6V7h2v11H7v-2h7.5z" fill="#506db2"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick stats */}
        <div style={{background:'#000040',padding:'4rem 2rem',textAlign:'center'}}>
          <div style={{maxWidth:'900px',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'2rem'}}>
            {[
              {value:'FAA Pt. 141 & 61',label:'Certification'},
              {value:'In-House DPE',label:'Checkride Authority'},
              {value:'22 Aircraft',label:'IFR-equipped fleet'},
              {value:'I-20 Auth.',label:'International Students'},
            ].map(s => (
              <div key={s.label} style={{borderRight:'1px solid rgba(255,255,255,0.1)'}}>
                <div style={{fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'0.25rem'}}>{s.value}</div>
                <div style={{fontSize:'0.8rem',color:'#88b2ff'}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
