import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const FLEET = [
  { aircraft: 'Cessna 152',         tail: 'N64823',  rate: '$128/hr',        notes: 'Garmin 430 · IFR equipped · Fuel incl.' },
  { aircraft: 'Cessna 152',         tail: 'N95391',  rate: '$128/hr',        notes: 'Garmin 430 · IFR equipped · Fuel incl.' },
  { aircraft: 'Cessna 152',         tail: 'N5120H',  rate: '$128/hr',        notes: 'Fuel incl.' },
  { aircraft: 'Cessna 152',         tail: 'N94500',  rate: '$128/hr',        notes: 'Garmin 430 · IFR equipped · Fuel incl.' },
  { aircraft: 'Cessna 152',         tail: 'N46134',  rate: '$128/hr',        notes: 'Garmin 430 · IFR equipped · Fuel incl.' },
  { aircraft: 'Cessna 152',         tail: 'N24752',  rate: '$128/hr',        notes: 'Garmin 430 · IFR equipped · Fuel incl.' },
  { aircraft: 'Cessna 152',         tail: 'N48810',  rate: '$128/hr',        notes: 'Garmin 430 · IFR equipped · Fuel incl.' },
  { aircraft: 'Cessna 152',         tail: 'N65546',  rate: '$128/hr',        notes: 'Currently out of service' },
  { aircraft: 'Cessna 172L',        tail: 'N3911Q',  rate: '$155/hr',        notes: 'Garmin 430 · IFR equipped · Fuel incl.' },
  { aircraft: 'Cessna 172M',        tail: 'N5095R',  rate: '$160/hr',        notes: 'Fuel incl.' },
  { aircraft: 'Cessna 172M',        tail: 'N64173',  rate: '$160/hr',        notes: 'Fuel incl.' },
  { aircraft: 'Cessna 172M',        tail: 'N759S',   rate: '$160/hr',        notes: 'Garmin 430 · IFR equipped · Fuel incl.' },
  { aircraft: 'Cessna 172M',        tail: 'N1302U',  rate: '$170/hr',        notes: 'Garmin 430 · IFR equipped · Fuel incl.' },
  { aircraft: 'Cessna 172H',        tail: 'N8213L',  rate: '$160/hr',        notes: 'Garmin 430 · IFR equipped · Fuel incl.' },
  { aircraft: 'Cessna 172R',        tail: 'N102MU',  rate: '$160/hr',        notes: 'Garmin 430 · IFR equipped · Fuel incl.' },
  { aircraft: 'Cessna 172N',        tail: 'N4725G',  rate: '$160/hr',        notes: 'Garmin 430 · IFR equipped · Fuel incl.' },
  { aircraft: 'Cessna 172N',        tail: 'N733DN',  rate: '$170/hr',        notes: 'Garmin 430 · IFR equipped · Fuel incl.' },
  { aircraft: 'Cessna 172RG',       tail: 'N5316R',  rate: '$186/hr',        notes: 'Complex aircraft · Fuel incl.' },
  { aircraft: 'Piper Cherokee 140', tail: 'N706PA',  rate: '$155/hr',        notes: 'King KX155 Nav/Com · Fuel incl.' },
  { aircraft: 'Piper Arrow III',    tail: 'N19886H', rate: '$186/hr',        notes: 'Garmin 430 · IFR · Complex · Fuel incl.' },
  { aircraft: 'Piper Seneca',       tail: 'N87MB',   rate: '$410/hr (dual)', notes: 'Garmin 430 · IFR equipped · Fuel incl.' },
  { aircraft: 'Piper Seneca II',    tail: 'N315EB',  rate: '$410/hr (dual)', notes: 'Garmin 530 · IFR · Turbocharged · Fuel incl.' },
  { aircraft: 'Piper Seneca II',    tail: 'N6206H',  rate: '$410/hr (dual)', notes: 'Twin engine · IFR equipped · Fuel incl.' },
]

export default function FleetPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <div style={{background:'linear-gradient(180deg,#f8f9ff 0%,#fff 100%)',borderBottom:'1px solid #eaecf0',padding:'5rem 2rem 4rem',textAlign:'center'}}>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="overline-small" style={{color:'#506db2',marginBottom:'1rem'}}>KVDF, Tampa FL</div>
            <h1 style={{fontSize:'2.75rem',fontWeight:700,color:'#000040',margin:'0 0 1rem',lineHeight:1.15}}>The Largest Training Fleet in Tampa Bay</h1>
            <p style={{color:'#475467',fontSize:'1.05em',lineHeight:1.7,margin:0}}>
              23 aircraft across single-engine and multi-engine platforms. Fuel included across the fleet. In-house maintenance keeps every plane airworthy and ready to fly.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div style={{maxWidth:'900px',margin:'0 auto',padding:'0 2rem 3rem',display:'grid',gridTemplateColumns:'repeat(4, 1fr)',gap:'1.5rem'}}>
          {[
            { value: '23', label: 'Aircraft' },
            { value: 'IFR', label: 'Equipped Fleet' },
            { value: 'Garmin 430', label: 'Standard Avionics' },
            { value: 'Fuel Incl.', label: 'Across Fleet' },
          ].map(s => (
            <div key={s.label} style={{background:'#000040',borderRadius:'1rem',padding:'1.5rem',textAlign:'center'}}>
              <div style={{fontSize:'1.6em',fontWeight:700,color:'#fff'}}>{s.value}</div>
              <div style={{fontSize:'0.8em',color:'#88b2ff',marginTop:'0.25rem'}}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Fleet table */}
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'0 2rem 5rem'}}>
          <div style={{overflowX:'auto',borderRadius:'1rem',border:'1px solid #eaecf0',boxShadow:'0 1px 3px rgba(0,0,0,0.05)'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.95em'}}>
              <thead>
                <tr style={{background:'#000040'}}>
                  <th style={{padding:'1rem 1.25rem',textAlign:'left',color:'#88b2ff',fontWeight:600,fontSize:'0.8em',textTransform:'uppercase',letterSpacing:'0.05em'}}>Aircraft</th>
                  <th style={{padding:'1rem 1.25rem',textAlign:'left',color:'#88b2ff',fontWeight:600,fontSize:'0.8em',textTransform:'uppercase',letterSpacing:'0.05em'}}>N-Number</th>
                  <th style={{padding:'1rem 1.25rem',textAlign:'left',color:'#88b2ff',fontWeight:600,fontSize:'0.8em',textTransform:'uppercase',letterSpacing:'0.05em'}}>Rate</th>
                  <th style={{padding:'1rem 1.25rem',textAlign:'left',color:'#88b2ff',fontWeight:600,fontSize:'0.8em',textTransform:'uppercase',letterSpacing:'0.05em'}}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {FLEET.map((a, i) => (
                  <tr key={`${a.tail}-${i}`} style={{background: i % 2 === 0 ? '#fff' : '#f9fafb', borderTop:'1px solid #eaecf0'}}>
                    <td style={{padding:'0.875rem 1.25rem',fontWeight:600,color:'#000040'}}>{a.aircraft}</td>
                    <td style={{padding:'0.875rem 1.25rem',color:'#506db2',fontFamily:'monospace'}}>{a.tail}</td>
                    <td style={{padding:'0.875rem 1.25rem',color:'#000040',fontWeight:500}}>{a.rate}</td>
                    <td style={{padding:'0.875rem 1.25rem',color:'#475467',fontSize:'0.9em'}}>{a.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{marginTop:'2rem',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.5rem'}}>
            <div style={{background:'#f9fafb',border:'1px solid #eaecf0',borderRadius:'1rem',padding:'1.5rem'}}>
              <h3 style={{margin:'0 0 0.5rem',fontSize:'1em',fontWeight:600}}>In-House Maintenance</h3>
              <p style={{color:'#475467',margin:0,fontSize:'0.9em',lineHeight:1.6}}>
                GPA employs in-house maintenance staff to keep the fleet airworthy and reduce downtime — so your training stays on schedule.
              </p>
            </div>
            <div style={{background:'#f9fafb',border:'1px solid #eaecf0',borderRadius:'1rem',padding:'1.5rem'}}>
              <h3 style={{margin:'0 0 0.5rem',fontSize:'1em',fontWeight:600}}>Renters Insurance Required</h3>
              <p style={{color:'#475467',margin:0,fontSize:'0.9em',lineHeight:1.6}}>
                Non-owned aircraft renters insurance with a minimum of $75,000 is required before solo flight. AOPA Renter's Insurance and Avemco are accepted.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{background:'#000040',padding:'4rem 2rem',textAlign:'center'}}>
          <h2 style={{color:'#fff',fontSize:'2em',fontWeight:700,margin:'0 0 0.5rem'}}>Train in the Best-Maintained Fleet in Tampa Bay</h2>
          <p style={{color:'#dfdddd',margin:'0 0 2rem'}}>All aircraft IFR equipped. Fuel included on select aircraft.</p>
          <div style={{display:'flex',gap:'1em',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/enroll" className="button-style-2h" style={{display:'inline-flex'}}>Apply Now</Link>
            <Link href="/discovery-flight" className="button-style-1h" style={{display:'inline-flex'}}>Try a Discovery Flight</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
