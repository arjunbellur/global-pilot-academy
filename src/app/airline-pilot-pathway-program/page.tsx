'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { useState } from 'react'

const REQUIREMENTS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z" fill="#506db2"/>
      </svg>
    ),
    heading: 'Licensure',
    text: 'Hold a Commercial Pilot License.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:24,height:24}}>
        <path d="M18.9978 9.62688V5.32688C18.9978 4.77688 18.5478 4.32688 17.9978 4.32688H16.9978C16.4478 4.32688 15.9978 4.77688 15.9978 5.32688V6.92688L12.6678 3.92687C12.2878 3.58687 11.7078 3.58687 11.3278 3.92687L2.96778 11.4569C2.62778 11.7569 2.83778 12.3269 3.29778 12.3269H4.99778V19.3269C4.99778 19.8769 5.44778 20.3269 5.99778 20.3269H8.99778C9.54778 20.3269 9.99778 19.8769 9.99778 19.3269V14.3269H13.9978V19.3269C13.9978 19.8769 14.4478 20.3269 14.9978 20.3269H17.9978C18.5478 20.3269 18.9978 19.8769 18.9978 19.3269V12.3269H20.6978C21.1578 12.3269 21.3778 11.7569 21.0278 11.4569L18.9978 9.62688ZM9.99778 10.3269C9.99778 9.22688 10.8978 8.32688 11.9978 8.32688C13.0978 8.32688 13.9978 9.22688 13.9978 10.3269H9.99778Z" fill="#506db2"/>
      </svg>
    ),
    heading: 'Age',
    text: 'Be at least 21 years of age to hold the ATP certificate. You may begin program training as early as age 17.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 20.7735H4C3.45 20.7735 3 20.3235 3 19.7735V8.46354C3 8.04354 3.25 7.67354 3.64 7.52354L14.64 3.29354C15.3 3.04354 16 3.52354 16 4.23354V9.77354H8C7.45 9.77354 7 10.2235 7 10.7735V20.7735ZM17 11.7735H10C9.45 11.7735 9 12.2235 9 12.7735V19.7735C9 20.3235 9.45 20.7735 10 20.7735H14V16.7735C14 16.2235 14.45 15.7735 15 15.7735C15.55 15.7735 16 16.2235 16 16.7735V20.7735H20C20.55 20.7735 21 20.3235 21 19.7735V11.7735C21 10.6735 20.1 9.77354 19 9.77354C17.9 9.77354 17 10.6735 17 11.7735Z" fill="#506db2"/>
      </svg>
    ),
    heading: 'Flying Time',
    text: 'Have 1,500 hours of total flight time.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.7037 13.209V9.20898C10.7037 8.65898 10.2537 8.20898 9.70374 8.20898H5.70374V6.20898H9.70374C10.2537 6.20898 10.7037 5.75898 10.7037 5.20898C10.7037 4.65898 10.2537 4.20898 9.70374 4.20898H8.20374C8.20374 3.65898 7.75374 3.20898 7.20374 3.20898C6.65374 3.20898 6.20374 3.65898 6.20374 4.20898H4.70374C4.15374 4.20898 3.70374 4.65898 3.70374 5.20898V9.20898C3.70374 9.75898 4.15374 10.209 4.70374 10.209H8.70374V12.209H4.70374C4.15374 12.209 3.70374 12.659 3.70374 13.209C3.70374 13.759 4.15374 14.209 4.70374 14.209H6.20374C6.20374 14.759 6.65374 15.209 7.20374 15.209C7.75374 15.209 8.20374 14.759 8.20374 14.209H9.70374C10.2537 14.209 10.7037 13.759 10.7037 13.209Z" fill="#506db2"/>
        <path d="M18.5837 13.429L13.6337 18.379L11.5137 16.259C11.1237 15.869 10.4937 15.869 10.1037 16.259C9.71374 16.649 9.71374 17.279 10.1037 17.669L12.9337 20.499C13.3237 20.889 13.9537 20.889 14.3437 20.499L20.0037 14.839C20.3937 14.449 20.3937 13.819 20.0037 13.429C19.6037 13.039 18.9737 13.039 18.5837 13.429Z" fill="#506db2"/>
      </svg>
    ),
    heading: 'Medical',
    text: 'Hold a First Class medical certificate.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="#506db2"/>
      </svg>
    ),
    heading: 'ATP CTP',
    text: 'Pass the Airline Transport Pilot Certification Training Program.',
  },
]

const STEPS = [
  {
    step: '01',
    title: 'Get a First Class Medical',
    desc: 'Schedule with an FAA-authorized Aviation Medical Examiner before beginning training. A First Class medical is required to exercise ATP privileges.',
  },
  {
    step: '02',
    title: 'Enroll in the Airline Pilot Program',
    desc: 'Complete the full GPA curriculum: Private Pilot → Instrument Rating → Commercial Pilot (ASEL/AMEL) → CFI → CFI-I. You can start as young as 17.',
  },
  {
    step: '03',
    title: 'Join the GPA Instructor Team',
    desc: 'GPA graduates receive hiring priority. Instruct at GPA for approximately 14 months to build toward the 1,500-hour ATP minimum. Hiring is based on availability and not guaranteed.',
  },
]

export default function AirlinePilotPathwayPage() {
  const [activeTab, setActiveTab] = useState<'requirements' | 'steps'>('requirements')

  return (
    <>
      <Navbar />
      <main>

        {/* Hero header */}
        <div style={{background:'linear-gradient(180deg,#f8f9ff 0%,#fff 100%)',borderBottom:'1px solid #eaecf0',padding:'5rem 2rem 4rem',textAlign:'center'}}>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="overline-small" style={{color:'#506db2',marginBottom:'1rem'}}>Zero to Airline</div>
            <h1 style={{fontSize:'2.75rem',fontWeight:700,color:'#000040',margin:'0 0 1rem',lineHeight:1.15}}>Airline Pilot Pathway Program</h1>
            <p style={{color:'#475467',fontSize:'1.05em',lineHeight:1.7,margin:'0 0 2rem'}}>
              Launch your airline career through our Airline Pathway Program with guided training, flight hours, and airline placement support.
            </p>
            <div style={{display:'flex',gap:'1em',flexWrap:'wrap',justifyContent:'center'}}>
              <Link href="/discovery-flight" className="button-style-2h">Discovery Flight</Link>
              <Link href="/enroll" className="button-style-1h">Apply Now</Link>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div style={{borderRadius:'1.5em',overflow:'hidden',margin:'2em auto',maxWidth:'1200px',height:'400px',padding:'0 2rem'}}>
          <img
            src="/images/alexey-starki-91ykdj2WQeg-unsplash.jpg"
            alt="Airline Pilot Pathway"
            style={{width:'100%',height:'100%',objectFit:'cover',display:'block',borderRadius:'1.5em'}}
          />
        </div>

        {/* Program info */}
        <div className="appp-information-section" style={{maxWidth:'1200px',margin:'0 auto'}}>
          <div style={{display:'flex',flexDirection:'column',gap:'1em',marginBottom:'3em'}}>
            <h3 className="heading-3m">Your Path to the Skies</h3>
            <p className="text-block-5" style={{fontSize:'1.2em',fontWeight:300,maxWidth:'700px',lineHeight:1.6}}>
              Launch your airline career through our <strong>Airline Pathway Program</strong> with guided training, flight hours, and airline placement support.
            </p>
          </div>

          {/* Tabs */}
          <div style={{display:'flex',gap:'0',marginBottom:'2em',borderBottom:'2px solid #eaecf0'}}>
            {(['requirements','steps'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background:'none',
                  border:'none',
                  cursor:'pointer',
                  padding:'0.75em 1.75em',
                  fontSize:'1em',
                  fontWeight: activeTab === tab ? 600 : 400,
                  color: activeTab === tab ? '#000040' : '#506db2',
                  borderBottom: activeTab === tab ? '2px solid #000040' : '2px solid transparent',
                  marginBottom:'-2px',
                  transition:'color 0.15s, border-color 0.15s',
                  textTransform:'capitalize',
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Requirements tab */}
          {activeTab === 'requirements' && (
            <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'2em',marginBottom:'4em'}}>
              {REQUIREMENTS.map(r => (
                <div key={r.heading} className="feature-card" style={{display:'flex',flexDirection:'column',gap:'1em',border:'0.5px solid #d5d9e2',borderRadius:'16px',padding:'2em 1em',boxShadow:'0 1px 2px rgba(35,39,46,0.08)'}}>
                  <div style={{display:'flex',alignItems:'center',gap:'0.75em'}}>
                    <div style={{width:'2.5em',height:'2.5em',display:'flex',alignItems:'center',justifyContent:'center'}}>
                      {r.icon}
                    </div>
                    <h4 className="heading-4n" style={{margin:0}}>{r.heading}</h4>
                  </div>
                  <p className="paragraph" style={{margin:0}}>{r.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* Steps tab */}
          {activeTab === 'steps' && (
            <div style={{display:'flex',flexDirection:'column',gap:'1em',marginBottom:'4em'}}>
              {STEPS.map(s => (
                <div key={s.step} style={{display:'flex',gap:'1.5em',alignItems:'flex-start',padding:'1.5em',border:'1px solid #eaecf0',borderRadius:'1em'}}>
                  <div style={{fontSize:'2em',fontWeight:700,color:'#88b2ff',flexShrink:0,lineHeight:1}}>{s.step}</div>
                  <div>
                    <div style={{fontWeight:600,fontSize:'1.1em',marginBottom:'0.25em'}}>{s.title}</div>
                    <p style={{margin:0,color:'#475467',lineHeight:1.6}}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Program package summary */}
          <div style={{background:'#000040',borderRadius:'1em',padding:'2em',color:'#fff',marginBottom:'4em'}}>
            <h3 className="uui-heading-small" style={{marginBottom:'1em'}}>Zero to Flight Instructor Package</h3>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.5em'}}>
              {[
                { label: 'Starting price', value: '$60,999*' },
                { label: 'Total hours', value: '255 hrs' },
                { label: 'Program length', value: '12–14 Months' },
                { label: 'Schedule', value: '5x per week' },
                { label: 'Single engine', value: '230 hrs' },
                { label: 'Multi-engine', value: '25 hrs' },
              ].map(item => (
                <div key={item.label}>
                  <div style={{fontSize:'0.8em',color:'#88b2ff',textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:'0.25em'}}>{item.label}</div>
                  <div style={{fontSize:'1.3em',fontWeight:600,color:'#fff'}}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{marginTop:'1.5em',fontSize:'0.85em',color:'rgba(255,255,255,0.5)'}}>
              *Certificates earned: Private Pilot · Instrument Rating · Commercial Pilot ASEL/AMEL · CFI · CFI-I
            </div>
          </div>

          {/* CTA */}
          <div style={{textAlign:'center',padding:'3em 0'}}>
            <Link href="/enroll" className="button-style-1h" style={{display:'inline-flex'}}>
              <div className="btext-1h">Apply Now</div>
              <div className="button-icon1h">
                <svg viewBox="0 0 24 24" fill="none" style={{width:'1em',height:'1em'}} xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 20L16 12L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
