'use client'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useState } from 'react'
import Link from 'next/link'

const FAQS = [
  {
    q: 'How do I get started?',
    a: 'We recommend starting with a Discovery Flight ($99) to experience flying firsthand. A discovery flight is a short flight with a certified flight instructor that demonstrates what a typical flight lesson consists of. After your discovery flight, the next step is to get an FAA Medical Certificate before enrolling in a full program.',
  },
  {
    q: 'What is the difference between Part 61 and Part 141?',
    a: 'Global Pilot Academy offers Part 61 and Part 141 training. Consider Part 61 if you are looking for a flexible training program — ideal for students transferring from another school, with work or scheduling needs, or prior flight experience. Consider Part 141 if you are seeking a fast-paced, structured learning environment with stage checks throughout your training.',
  },
  {
    q: 'How do I get a Medical Certificate in the Tampa Bay area?',
    a: 'To make an appointment with an authorized Medical Examiner, create an account on the MedXpress website at medxpress.faa.gov and follow the instructions. You can find a list of authorized FAA Aviation Medical Examiners through the FAA website.',
  },
  {
    q: 'What payment options are available?',
    a: 'We offer flexible payment plans — pay-as-you-go or customizable installments. Some students also utilize scholarships or financial loans from third parties. Financing is available through Stratus Financial.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'We require at least a 24-hour notice for any cancellations. There is a nonrefundable $75/hr charge to your account for a no-call/no-show. To cancel an appointment or flight lesson, call the front desk at (813) 600-4052.',
  },
  {
    q: 'How do I schedule my FAA Knowledge Test?',
    a: 'Schedule at faa.psiexams.com/faa/login. When checking in for your exam, bring your endorsement (if eligible) and government-issued identification. Please arrive at least 15 minutes before your exam to allow for check-in time.',
  },
  {
    q: 'Is the GI Bill accepted?',
    a: 'Yes! We are approved for accepting the GI Bill. GI/Post 9/11 covers training from Instrument through CFI/CFII — you must already have your Private Pilot license to use the bill.',
  },
  {
    q: 'Do you accept international students?',
    a: 'Yes. Global Pilot Academy welcomes international students from all over the world. We are authorized by the U.S. government to issue I-20 documents so our international students can apply for their M-1 Visa.',
  },
]

function AccordionItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{borderBottom:'1px solid #eaecf0'}}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '1.25rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem',
          fontFamily: 'inherit',
        }}
      >
        <span style={{fontWeight:600,fontSize:'1.05em',color:'#000040',lineHeight:1.4}}>{q}</span>
        <svg
          width="20" height="20" viewBox="0 0 24 24" fill="none"
          style={{flexShrink:0,transition:'transform 0.25s ease',transform: open ? 'rotate(180deg)' : 'rotate(0)'}}
        >
          <path d="M6 9L12 15L18 9" stroke="#506db2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div style={{
        maxHeight: open ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, opacity 0.25s ease',
        opacity: open ? 1 : 0,
      }}>
        <div style={{paddingBottom:'1.25rem',color:'#475467',lineHeight:1.8,fontSize:'0.95em'}}>
          {a}
        </div>
      </div>
    </div>
  )
}

export default function FAQPage() {
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
          <div style={{maxWidth:'600px',margin:'0 auto'}}>
            <div className="overline-small" style={{color:'#506db2',marginBottom:'1rem'}}>Got Questions?</div>
            <h1 style={{fontSize:'2.75rem',fontWeight:700,color:'#000040',margin:'0 0 1rem',lineHeight:1.15}}>Frequently Asked Questions</h1>
            <p style={{color:'#475467',fontSize:'1.05em',lineHeight:1.7,margin:0}}>
              Everything you need to know about training at Global Pilot Academy.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div style={{maxWidth:'740px',margin:'0 auto',padding:'2rem 2rem 5rem'}}>
          {FAQS.map((item, i) => (
            <AccordionItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>

        {/* Still have questions */}
        <div style={{background:'#000040',padding:'5rem 2rem',textAlign:'center'}}>
          <h2 style={{color:'#fff',fontSize:'2rem',fontWeight:700,margin:'0 0 0.75rem',lineHeight:1.2}}>Still Have Questions?</h2>
          <p style={{color:'rgba(255,255,255,0.65)',margin:'0 0 2rem',lineHeight:1.7,maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>
            Our team is happy to walk you through everything. Reach out by phone or WhatsApp for the fastest response.
          </p>
          <div style={{display:'flex',gap:'1em',justifyContent:'center',flexWrap:'wrap'}}>
            <a href="https://wa.me/18134284423" className="button-style-2h" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            <Link href="/contact" className="button-style-1h">Contact Form</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
