'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SignaturePad from '@/components/ui/SignaturePad'
import ApplicationWindow from '@/components/ui/ApplicationWindow'
import { supabase } from '@/lib/supabase'

const CERTIFICATES = [
  'Private Pilot License',
  'Instrument Rating',
  'Commercial Single Engine Land',
  'Multi Engine Land',
  'CFI',
  'CFI-I',
  'MEI',
]

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']

// ---- shared styles ----
const label: React.CSSProperties = { display: 'block', fontWeight: 600, color: '#344054', fontSize: '0.9em', marginBottom: '0.4rem' }
const input: React.CSSProperties = { width: '100%', padding: '0.6rem 0.8rem', border: '1px solid #d0d5dd', borderRadius: '0.5rem', fontSize: '0.95em', color: '#101828', background: '#fff', boxSizing: 'border-box' }
const fieldset: React.CSSProperties = { border: 'none', padding: 0, margin: 0 }
const radioRow: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0', color: '#344054', fontSize: '0.95em', cursor: 'pointer' }
const section: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '1.25rem' }
const sectionTitle: React.CSSProperties = { fontSize: '1.05em', fontWeight: 700, color: '#000040', margin: '0 0 0.25rem', paddingBottom: '0.5rem', borderBottom: '1px solid #eaecf0' }

function Radio({ name, value, checked, onChange, children }: { name: string; value: string; checked: boolean; onChange: (v: string) => void; children: React.ReactNode }) {
  return (
    <label style={radioRow}>
      <input type="radio" name={name} value={value} checked={checked} onChange={() => onChange(value)} required />
      {children}
    </label>
  )
}

function FileField({ label: text, file, onChange }: { label: string; file: File | null; onChange: (f: File | null) => void }) {
  return (
    <div>
      <span style={label}>{text} <span style={{ color: '#d92d20' }}>*</span></span>
      <label style={{
        display: 'flex', alignItems: 'center', gap: '0.75rem', border: '1px dashed #d0d5dd',
        borderRadius: '0.5rem', padding: '0.85rem 1rem', cursor: 'pointer', background: file ? '#f0f6ff' : '#f9fafb',
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <path d="M12 16V4m0 0L7 9m5-5l5 5M4 20h16" stroke="#506db2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ fontSize: '0.9em', color: file ? '#000040' : '#667085', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {file ? file.name : 'Upload file (PDF or image, max 10 MB)'}
        </span>
        <input
          type="file"
          accept="image/*,.pdf"
          required={!file}
          style={{ display: 'none' }}
          onChange={e => {
            const f = e.target.files?.[0] ?? null
            if (f && f.size > 10 * 1024 * 1024) { alert('File must be under 10 MB'); return }
            onChange(f)
          }}
        />
      </label>
    </div>
  )
}

export default function DomesticApplicationPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    dobMonth: '', dobDay: '', dobYear: '',
    street: '', street2: '', city: '', region: '', postal: '',
    citizenship: '', firstTime: '', schedule: '', startDate: '',
    transferring: '', aircraft: '', careerGoal: '', flightExperience: '',
    stratus: '', financing: '',
  })
  const [certs, setCerts] = useState<string[]>([])
  const [medicalFile, setMedicalFile] = useState<File | null>(null)
  const [idFile, setIdFile] = useState<File | null>(null)
  const [birthCertFile, setBirthCertFile] = useState<File | null>(null)
  const [signature, setSignature] = useState<string | null>(null)
  const [feeAccepted, setFeeAccepted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const set = (key: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [key]: v }))
  const setInput = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }))

  const toggleCert = (c: string) =>
    setCerts(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c])

  async function uploadFile(folder: string, name: string, file: File) {
    const ext = file.name.split('.').pop()?.toLowerCase() || 'bin'
    const path = `domestic/${folder}/${name}.${ext}`
    const { error } = await supabase.storage.from('applications').upload(path, file)
    if (error) throw new Error(`${name} upload failed: ${error.message}`)
    return path
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (certs.length === 0) { setError('Please select at least one certificate or rating.'); return }
    if (!signature) { setError('Please sign the application before submitting.'); return }
    if (!medicalFile || !idFile || !birthCertFile) { setError('Please attach all three required documents.'); return }

    setSubmitting(true)
    try {
      const folder = crypto.randomUUID()

      // Signature data URL -> PNG blob
      const sigBlob = await (await fetch(signature)).blob()
      const sigPath = `domestic/${folder}/signature.png`
      const { error: sigErr } = await supabase.storage.from('applications').upload(sigPath, sigBlob, { contentType: 'image/png' })
      if (sigErr) throw new Error(`Signature upload failed: ${sigErr.message}`)

      const [medicalPath, idPath, birthCertPath] = await Promise.all([
        uploadFile(folder, 'faa-medical', medicalFile),
        uploadFile(folder, 'government-id', idFile),
        uploadFile(folder, 'birth-certificate', birthCertFile),
      ])

      const monthNum = String(MONTHS.indexOf(form.dobMonth) + 1).padStart(2, '0')
      const dob = `${form.dobYear}-${monthNum}-${String(form.dobDay).padStart(2, '0')}`

      // Generate the id client-side: anon can INSERT but not SELECT (RLS),
      // so we can't read the row back after inserting.
      const appId = crypto.randomUUID()
      const { error: insertErr } = await supabase
        .from('applications')
        .insert({
          id: appId,
          type: 'domestic',
          status: 'applied',
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          phone: form.phone,
          date_of_birth: dob,
          street_address: form.street,
          street_address_2: form.street2 || null,
          city: form.city,
          region: form.region,
          postal_code: form.postal,
          country: 'United States',
          citizenship_status: form.citizenship,
          first_time_applicant: form.firstTime,
          student_schedule: form.schedule,
          prospective_start_date: form.startDate,
          program: certs.join(', '),
          transferring: form.transferring,
          aircraft_preference: form.aircraft,
          career_goal: form.careerGoal,
          flight_experience: form.flightExperience,
          stratus_financing: form.stratus,
          financing: form.stratus === 'Yes' ? 'Stratus Financial' : form.financing,
          medical_file_url: medicalPath,
          id_file_url: idPath,
          birth_cert_file_url: birthCertPath,
          signature_url: sigPath,
          signature_status: 'signed',
          fee_amount: 150,
          fee_paid: false,
          submitted_at: new Date().toISOString(),
        })
      if (insertErr) throw new Error(insertErr.message)

      // Document records so uploads show up in the admin Documents view
      await supabase.from('documents').insert([
        { application_id: appId, type: 'FAA Medical Certificate', status: 'pending', file_path: medicalPath },
        { application_id: appId, type: 'Government ID', status: 'pending', file_path: idPath },
        { application_id: appId, type: 'Birth Certificate / Passport', status: 'pending', file_path: birthCertPath },
      ])

      setDone(true)
      window.scrollTo({ top: 0 })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <>
        <Navbar />
        <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '520px', textAlign: 'center' }}>
            <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: '#000040', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="#88b2ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#000040', margin: '0 0 0.75rem' }}>Application Submitted</h1>
            <p style={{ color: '#475467', lineHeight: 1.7, margin: 0 }}>
              Thank you for applying to Global Pilot Academy. Remember: your application will not be
              considered for acceptance until the <strong>$150 application fee</strong> is paid.
              Our admissions team will contact you at the email you provided.
            </p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <div style={{ background: 'linear-gradient(180deg,#f8f9ff 0%,#fff 100%)', borderBottom: '1px solid #eaecf0', padding: '4.5rem 2rem 3.5rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '660px', margin: '0 auto' }}>
            <div className="overline-small" style={{ color: '#506db2', marginBottom: '1rem' }}>U.S. Citizens &amp; Residents</div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#000040', margin: '0 0 1rem', lineHeight: 1.15 }}>Domestic Application</h1>
            <p style={{ color: '#475467', fontSize: '1.05em', lineHeight: 1.7, margin: 0 }}>
              A <strong>$150 nonrefundable application fee</strong> is required for your application to be considered.
            </p>
          </div>
        </div>

        <ApplicationWindow
          settingKey="domestic_applications_open"
          closedTitle="Applications Are Currently Closed"
          closedMessage="Domestic applications are not being accepted at this time. Please check back soon, or contact admissions@gpapilot.com with any questions."
        >
        <form onSubmit={handleSubmit} style={{ maxWidth: '680px', margin: '0 auto', padding: '3rem 2rem 5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          {/* Contact */}
          <div style={section}>
            <h2 style={sectionTitle}>Contact Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div><span style={label}>First name <span style={{ color: '#d92d20' }}>*</span></span><input style={input} required value={form.firstName} onChange={setInput('firstName')} autoComplete="given-name" /></div>
              <div><span style={label}>Last name <span style={{ color: '#d92d20' }}>*</span></span><input style={input} required value={form.lastName} onChange={setInput('lastName')} autoComplete="family-name" /></div>
              <div><span style={label}>Email <span style={{ color: '#d92d20' }}>*</span></span><input style={input} type="email" required value={form.email} onChange={setInput('email')} autoComplete="email" /></div>
              <div><span style={label}>Phone <span style={{ color: '#d92d20' }}>*</span></span><input style={input} type="tel" required value={form.phone} onChange={setInput('phone')} autoComplete="tel" /></div>
            </div>
            <div>
              <span style={label}>Birthday <span style={{ color: '#d92d20' }}>*</span></span>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '0.75rem' }}>
                <select style={input} required value={form.dobMonth} onChange={setInput('dobMonth')}>
                  <option value="">Month</option>
                  {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <select style={input} required value={form.dobDay} onChange={setInput('dobDay')}>
                  <option value="">Day</option>
                  {Array.from({ length: 31 }, (_, i) => i + 1).map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                <select style={input} required value={form.dobYear} onChange={setInput('dobYear')}>
                  <option value="">Year</option>
                  {Array.from({ length: 80 }, (_, i) => new Date().getFullYear() - 14 - i).map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div><span style={label}>Street address <span style={{ color: '#d92d20' }}>*</span></span><input style={input} required value={form.street} onChange={setInput('street')} autoComplete="address-line1" /></div>
              <div><span style={label}>Street address line 2</span><input style={input} value={form.street2} onChange={setInput('street2')} autoComplete="address-line2" /></div>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '0.75rem' }}>
                <div><span style={label}>City <span style={{ color: '#d92d20' }}>*</span></span><input style={input} required value={form.city} onChange={setInput('city')} autoComplete="address-level2" /></div>
                <div><span style={label}>State <span style={{ color: '#d92d20' }}>*</span></span><input style={input} required value={form.region} onChange={setInput('region')} autoComplete="address-level1" /></div>
                <div><span style={label}>ZIP <span style={{ color: '#d92d20' }}>*</span></span><input style={input} required value={form.postal} onChange={setInput('postal')} autoComplete="postal-code" /></div>
              </div>
            </div>
            <fieldset style={fieldset}>
              <span style={label}>Citizenship status <span style={{ color: '#d92d20' }}>*</span></span>
              <Radio name="citizenship" value="U.S. Citizen" checked={form.citizenship === 'U.S. Citizen'} onChange={set('citizenship')}>I am a U.S. Citizen</Radio>
              <Radio name="citizenship" value="Green card holder" checked={form.citizenship === 'Green card holder'} onChange={set('citizenship')}>I am a green card holder</Radio>
            </fieldset>
          </div>

          {/* Training plans */}
          <div style={section}>
            <h2 style={sectionTitle}>Training Plans</h2>
            <fieldset style={fieldset}>
              <span style={label}>Is this your first time applying to Global Pilot Academy? <span style={{ color: '#d92d20' }}>*</span></span>
              <Radio name="firstTime" value="Yes" checked={form.firstTime === 'Yes'} onChange={set('firstTime')}>Yes</Radio>
              <Radio name="firstTime" value="No" checked={form.firstTime === 'No'} onChange={set('firstTime')}>No</Radio>
            </fieldset>
            <fieldset style={fieldset}>
              <span style={label}>Do you plan to be a full-time or part-time student? <span style={{ color: '#d92d20' }}>*</span></span>
              <Radio name="schedule" value="Full time (5 days a week)" checked={form.schedule === 'Full time (5 days a week)'} onChange={set('schedule')}>Full time (5 days a week)</Radio>
              <Radio name="schedule" value="Part time (3 days a week)" checked={form.schedule === 'Part time (3 days a week)'} onChange={set('schedule')}>Part time (3 days a week)</Radio>
            </fieldset>
            <div>
              <span style={label}>Select a potential start date <span style={{ color: '#d92d20' }}>*</span></span>
              <input style={input} type="date" required value={form.startDate} onChange={setInput('startDate')} />
            </div>
            <fieldset style={fieldset}>
              <span style={label}>What certificates/ratings do you intend to complete? <span style={{ color: '#d92d20' }}>*</span></span>
              {CERTIFICATES.map(c => (
                <label key={c} style={radioRow}>
                  <input type="checkbox" checked={certs.includes(c)} onChange={() => toggleCert(c)} />
                  {c}
                </label>
              ))}
            </fieldset>
            <fieldset style={fieldset}>
              <span style={label}>Will you be transferring from another flight school? <span style={{ color: '#d92d20' }}>*</span></span>
              <Radio name="transferring" value="Yes" checked={form.transferring === 'Yes'} onChange={set('transferring')}>Yes</Radio>
              <Radio name="transferring" value="No" checked={form.transferring === 'No'} onChange={set('transferring')}>No</Radio>
            </fieldset>
            <fieldset style={fieldset}>
              <span style={label}>What is your preferred choice of aircraft? <span style={{ color: '#d92d20' }}>*</span></span>
              <Radio name="aircraft" value="Cessna 152" checked={form.aircraft === 'Cessna 152'} onChange={set('aircraft')}>Cessna 152</Radio>
              <Radio name="aircraft" value="Cessna 172" checked={form.aircraft === 'Cessna 172'} onChange={set('aircraft')}>Cessna 172</Radio>
            </fieldset>
            <div>
              <span style={label}>What is your main career goal? <span style={{ color: '#d92d20' }}>*</span></span>
              <textarea style={{ ...input, minHeight: '90px', resize: 'vertical' }} required value={form.careerGoal} onChange={setInput('careerGoal')} />
            </div>
            <div>
              <span style={label}>Do you have any flight experience? (Discovery flight, prior certificates, hours towards a certificate or rating, etc.) <span style={{ color: '#d92d20' }}>*</span></span>
              <textarea style={{ ...input, minHeight: '90px', resize: 'vertical' }} required value={form.flightExperience} onChange={setInput('flightExperience')} />
            </div>
          </div>

          {/* Financing */}
          <div style={section}>
            <h2 style={sectionTitle}>Financing</h2>
            <fieldset style={fieldset}>
              <span style={label}>Will you be using Stratus Financial to finance your flight training? <span style={{ color: '#d92d20' }}>*</span></span>
              <Radio name="stratus" value="Yes" checked={form.stratus === 'Yes'} onChange={set('stratus')}>Yes</Radio>
              <Radio name="stratus" value="No" checked={form.stratus === 'No'} onChange={set('stratus')}>No</Radio>
            </fieldset>
            {form.stratus === 'No' && (
              <div>
                <span style={label}>How will you be financing your training? <span style={{ color: '#d92d20' }}>*</span></span>
                <input style={input} required value={form.financing} onChange={setInput('financing')} />
              </div>
            )}
          </div>

          {/* Documents */}
          <div style={section}>
            <h2 style={sectionTitle}>Required Documents</h2>
            <FileField label="Copy of your valid FAA medical certificate" file={medicalFile} onChange={setMedicalFile} />
            <FileField label="Copy of your government issued ID" file={idFile} onChange={setIdFile} />
            <FileField label="Birth certificate or passport" file={birthCertFile} onChange={setBirthCertFile} />
          </div>

          {/* Fee + signature */}
          <div style={section}>
            <h2 style={sectionTitle}>Application Fee &amp; Signature</h2>
            <div style={{ background: '#f9fafb', border: '1px solid #eaecf0', borderRadius: '0.75rem', padding: '1.25rem 1.5rem' }}>
              <div style={{ fontWeight: 700, color: '#000040', marginBottom: '0.25rem' }}>Application Fee — $150</div>
              <label style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', cursor: 'pointer', marginTop: '0.75rem' }}>
                <input type="checkbox" required checked={feeAccepted} onChange={e => setFeeAccepted(e.target.checked)} style={{ marginTop: '3px' }} />
                <span style={{ fontSize: '0.875em', color: '#475467', lineHeight: 1.6 }}>
                  I accept that unless an application fee is paid, my application will not be considered for
                  acceptance at Global Pilot Academy. This fee is a one-time, non-refundable fee. This
                  application does not guarantee acceptance to Global Pilot Academy. After the fee is paid,
                  please sign and submit your application below. <span style={{ color: '#d92d20' }}>*</span>
                </span>
              </label>
            </div>
            <div>
              <span style={label}>Signature <span style={{ color: '#d92d20' }}>*</span></span>
              <SignaturePad onChange={setSignature} />
            </div>
          </div>

          {error && (
            <div style={{ background: '#fef3f2', border: '1px solid #fecdca', color: '#b42318', borderRadius: '0.5rem', padding: '0.85rem 1rem', fontSize: '0.9em' }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="button-style-2h"
            style={{ justifyContent: 'center', opacity: submitting ? 0.6 : 1, cursor: submitting ? 'wait' : 'pointer', border: 'none', fontSize: '1em' }}
          >
            {submitting ? 'Submitting…' : 'Submit Application'}
          </button>
        </form>
        </ApplicationWindow>
      </main>
      <Footer />
    </>
  )
}
