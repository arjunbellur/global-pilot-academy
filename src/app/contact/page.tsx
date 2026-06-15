'use client'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useState } from 'react'

const SUBJECTS = [
  'General Inquiry',
  'Program Info',
  'Discovery Flight',
  'International Admissions',
  'Other',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: SUBJECTS[0], message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <div style={{background:'linear-gradient(180deg,#f8f9ff 0%,#fff 100%)',borderBottom:'1px solid #eaecf0',padding:'5rem 2rem 4rem',textAlign:'center'}}>
          <div style={{maxWidth:'600px',margin:'0 auto'}}>
            <div className="overline-small" style={{color:'#506db2',marginBottom:'1rem'}}>KVDF, Tampa FL</div>
            <h1 style={{fontSize:'2.75rem',fontWeight:700,color:'#000040',margin:'0 0 1rem',lineHeight:1.15}}>Get In Touch</h1>
            <p style={{color:'#475467',fontSize:'1.05em',lineHeight:1.7,margin:0}}>
              We're here to answer your questions about programs, scheduling, and enrollment. Fastest response via WhatsApp.
            </p>
          </div>
        </div>

        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'0 2rem 5rem',display:'grid',gridTemplateColumns:'1fr 1.5fr',gap:'4rem',alignItems:'start'}}>

          {/* Contact info */}
          <div style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
            <div>
              <h2 className="heading-3m" style={{fontSize:'1.3em',marginBottom:'1.5rem'}}>Contact Details</h2>
              <div style={{display:'flex',flexDirection:'column',gap:'1.25rem'}}>
                {[
                  {
                    label: 'Phone',
                    value: '(813) 600-4052',
                    href: 'tel:+18136004052',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M20.9994 16.4765V19.1862C21.0005 19.4377 20.9488 19.6867 20.8479 19.9172C20.7469 20.1477 20.5988 20.3546 20.413 20.5247C20.2273 20.6947 20.008 20.8242 19.7693 20.9048C19.5305 20.9854 19.2775 21.0153 19.0265 20.9927C16.2415 20.6907 13.5664 19.7409 11.216 18.2197C9.02929 16.8329 7.17534 14.9827 5.7858 12.8003C4.25627 10.4439 3.30442 7.76107 3.00735 4.96915C2.98473 4.71938 3.01447 4.46764 3.09468 4.22996C3.17489 3.99229 3.30381 3.77389 3.47323 3.58866C3.64265 3.40343 3.84885 3.25544 4.07872 3.15411C4.30858 3.05278 4.55707 3.00032 4.80837 3.00009H7.52347C7.96269 2.99577 8.3885 3.151 8.72152 3.43683C9.05455 3.72267 9.27207 4.11961 9.33354 4.55366C9.44814 5.42084 9.66067 6.27229 9.96707 7.09177C10.0888 7.41507 10.1152 7.76642 10.043 8.1042C9.97082 8.44198 9.80313 8.75203 9.5598 8.99761L8.41041 10.1447C9.69877 12.406 11.5748 14.2784 13.8406 15.5642L14.99 14.4171C15.2361 14.1742 15.5467 14.0069 15.8852 13.9348C16.2236 13.8628 16.5757 13.8891 16.8996 14.0106C17.7207 14.3164 18.5739 14.5285 19.4428 14.6429C19.8824 14.7048 20.2839 14.9258 20.5709 15.2639C20.858 15.6019 21.0105 16.0335 20.9994 16.4765Z" stroke="#000040" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    ),
                  },
                  {
                    label: 'Domestic Admissions',
                    value: 'manager@gpapilot.com',
                    href: 'mailto:manager@gpapilot.com',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#000040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 6l-10 7L2 6" stroke="#000040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                  },
                  {
                    label: 'International Admissions',
                    value: 'learn2fly@gpapilot.com',
                    href: 'mailto:learn2fly@gpapilot.com',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#506db2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 6l-10 7L2 6" stroke="#506db2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                  },
                  {
                    label: 'WhatsApp',
                    value: '(813) 428-4423',
                    href: 'https://wa.me/18134284423',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
                      </svg>
                    ),
                  },
                ].map(item => (
                  <div key={item.label} style={{display:'flex',gap:'0.75rem',alignItems:'center'}}>
                    <div style={{width:'2.5rem',height:'2.5rem',background:'#f9fafb',border:'1px solid #eaecf0',borderRadius:'0.5rem',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{fontSize:'0.75em',color:'#667085',fontWeight:500,textTransform:'uppercase',letterSpacing:'0.05em'}}>{item.label}</div>
                      <a href={item.href} style={{color:'#000040',fontWeight:600,textDecoration:'none',fontSize:'1em'}}>{item.value}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="heading-3m" style={{fontSize:'1.1em',marginBottom:'1rem'}}>Address</h3>
              <p style={{color:'#475467',lineHeight:1.7,margin:'0 0 0.25rem',fontSize:'0.95em'}}>
                6530 Tampa Executive Airport Rd, Suite 111<br/>
                Tampa, FL 33610
              </p>
              <p style={{color:'#506db2',margin:0,fontSize:'0.9em',fontWeight:500}}>Tampa Executive Airport (KVDF)</p>
            </div>

            <div>
              <h3 className="heading-3m" style={{fontSize:'1.1em',marginBottom:'1rem'}}>Social Media</h3>
              <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
                {[
                  { label: 'Instagram', handle: '@gpapilotvdf', href: 'https://instagram.com/gpapilotvdf' },
                  { label: 'Facebook', handle: 'facebook.com/globalpilot', href: 'https://facebook.com/globalpilot' },
                  { label: 'LinkedIn', handle: 'Global Pilot Academy Inc.', href: 'https://linkedin.com/company/global-pilot-academy-inc-' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{color:'#475467',textDecoration:'none',fontSize:'0.9em',display:'flex',gap:'0.5rem'}}>
                    <span style={{color:'#506db2',fontWeight:500,minWidth:'5rem'}}>{s.label}</span>
                    <span>{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{border:'1px solid #eaecf0',borderRadius:'1rem',padding:'2rem',boxShadow:'0 1px 3px rgba(0,0,0,0.05)'}}>
            {submitted ? (
              <div style={{textAlign:'center',padding:'3rem 1rem'}}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{marginBottom:'1rem'}}>
                  <circle cx="12" cy="12" r="10" fill="#000040"/>
                  <path d="M8 12l3 3 5-5" stroke="#88b2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 style={{margin:'0 0 0.5rem',fontSize:'1.3em',color:'#000040'}}>Message Sent!</h3>
                <p style={{color:'#475467',lineHeight:1.7,margin:'0 0 1.5rem'}}>
                  Thanks for reaching out. For the fastest response, contact us directly via WhatsApp at (813) 428-4423 — we typically reply within a few hours.
                </p>
                <a href="https://wa.me/18134284423" className="button-style-2h" target="_blank" rel="noopener noreferrer"
                  style={{display:'inline-flex'}}>
                  Message on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'1.25rem'}}>
                <h2 style={{margin:'0 0 0.5rem',fontSize:'1.3em',color:'#000040'}}>Send Us a Message</h2>

                {[
                  { label: 'Name', key: 'name', type: 'text', placeholder: 'Your full name' },
                  { label: 'Email', key: 'email', type: 'email', placeholder: 'your@email.com' },
                  { label: 'Phone', key: 'phone', type: 'tel', placeholder: '(813) 000-0000' },
                ].map(f => (
                  <div key={f.key} style={{display:'flex',flexDirection:'column',gap:'0.4rem'}}>
                    <label style={{fontSize:'0.85em',fontWeight:600,color:'#344054'}}>{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      required={f.key !== 'phone'}
                      value={form[f.key as keyof typeof form]}
                      onChange={e => setForm(prev => ({...prev, [f.key]: e.target.value}))}
                      style={{
                        border:'1px solid #d0d5dd',borderRadius:'0.5rem',padding:'0.75rem 1rem',
                        fontSize:'0.95em',fontFamily:'inherit',outline:'none',
                        color:'#000040',background:'#fff',
                      }}
                    />
                  </div>
                ))}

                <div style={{display:'flex',flexDirection:'column',gap:'0.4rem'}}>
                  <label style={{fontSize:'0.85em',fontWeight:600,color:'#344054'}}>Subject</label>
                  <select
                    value={form.subject}
                    onChange={e => setForm(prev => ({...prev, subject: e.target.value}))}
                    style={{
                      border:'1px solid #d0d5dd',borderRadius:'0.5rem',padding:'0.75rem 1rem',
                      fontSize:'0.95em',fontFamily:'inherit',outline:'none',
                      color:'#000040',background:'#fff',appearance:'auto',
                    }}
                  >
                    {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div style={{display:'flex',flexDirection:'column',gap:'0.4rem'}}>
                  <label style={{fontSize:'0.85em',fontWeight:600,color:'#344054'}}>Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={e => setForm(prev => ({...prev, message: e.target.value}))}
                    style={{
                      border:'1px solid #d0d5dd',borderRadius:'0.5rem',padding:'0.75rem 1rem',
                      fontSize:'0.95em',fontFamily:'inherit',outline:'none',resize:'vertical',
                      color:'#000040',background:'#fff',
                    }}
                  />
                </div>

                <button type="submit" className="button-style-2h" style={{cursor:'pointer',fontFamily:'inherit',fontSize:'1em'}}>
                  Send Message
                </button>
                <p style={{color:'#667085',fontSize:'0.8em',margin:0,textAlign:'center'}}>
                  For fastest response, WhatsApp us at (813) 428-4423
                </p>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
