'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SignaturePad from '@/components/ui/SignaturePad'
import ApplicationWindow from '@/components/ui/ApplicationWindow'
import { supabase } from '@/lib/supabase'

const PROGRAMS = ['C-152/C-172/Seneca', 'C-172/Seneca', 'C-152/Piper Seneca']

const COUNTRIES = ['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo','Costa Rica','Croatia','Cuba','Cyprus','Czech Republic','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Ivory Coast','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Korea','North Macedonia','Norway','Oman','Pakistan','Palau','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Korea','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe']

// ---- shared styles (mirrors /apply/domestic) ----
const label: React.CSSProperties = { display: 'block', fontWeight: 600, color: '#344054', fontSize: '0.9em', marginBottom: '0.4rem' }
const input: React.CSSProperties = { width: '100%', padding: '0.6rem 0.8rem', border: '1px solid #d0d5dd', borderRadius: '0.5rem', fontSize: '0.95em', color: '#101828', background: '#fff', boxSizing: 'border-box' }
const fieldset: React.CSSProperties = { border: 'none', padding: 0, margin: 0 }
const radioRow: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0', color: '#344054', fontSize: '0.95em', cursor: 'pointer' }
const section: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '1.25rem' }
const sectionTitle: React.CSSProperties = { fontSize: '1.05em', fontWeight: 700, color: '#000040', margin: '0 0 0.25rem', paddingBottom: '0.5rem', borderBottom: '1px solid #eaecf0' }
const req = <span style={{ color: '#d92d20' }}>*</span>

function FileField({ label: text, file, onChange }: { label: string; file: File | null; onChange: (f: File | null) => void }) {
  return (
    <div>
      <span style={label}>{text} {req}</span>
      <label style={{
        display: 'flex', alignItems: 'center', gap: '0.75rem', border: '1px dashed #d0d5dd',
        borderRadius: '0.5rem', padding: '0.85rem 1rem', cursor: 'pointer', background: file ? '#f0f6ff' : '#f9fafb',
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <path d="M12 16V4m0 0L7 9m5-5l5 5M4 20h16" stroke="#506db2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ fontSize: '0.9em', color: file ? '#000040' : '#667085', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {file ? file.name : 'Upload file (PDF or image, max 15 MB)'}
        </span>
        <input
          type="file"
          accept="image/*,.pdf"
          required={!file}
          style={{ display: 'none' }}
          onChange={e => {
            const f = e.target.files?.[0] ?? null
            if (f && f.size > 15 * 1024 * 1024) { alert('File must be under 15 MB'); return }
            onChange(f)
          }}
        />
      </label>
    </div>
  )
}

export default function InternationalApplicationPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phoneCode: '', phone: '', dob: '',
    street: '', street2: '', city: '', region: '', postal: '', country: '',
    program: '', startDate: '', gender: '', height: '', weight: '',
    citizenship: '', passportNumber: '', passportIssue: '', passportExpiry: '',
    referral: '',
  })
  const [passportFile, setPassportFile] = useState<File | null>(null)
  const [financialFile, setFinancialFile] = useState<File | null>(null)
  const [signature, setSignature] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const setInput = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }))

  async function uploadFile(folder: string, name: string, file: File) {
    const ext = file.name.split('.').pop()?.toLowerCase() || 'bin'
    const path = `international/${folder}/${name}.${ext}`
    const { error } = await supabase.storage.from('applications').upload(path, file)
    if (error) throw new Error(`${name} upload failed: ${error.message}`)
    return path
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!signature) { setError('Please sign the application before submitting.'); return }
    if (!passportFile || !financialFile) { setError('Please attach both required documents.'); return }

    setSubmitting(true)
    try {
      const folder = crypto.randomUUID()

      const sigBlob = await (await fetch(signature)).blob()
      const sigPath = `international/${folder}/signature.png`
      const { error: sigErr } = await supabase.storage.from('applications').upload(sigPath, sigBlob, { contentType: 'image/png' })
      if (sigErr) throw new Error(`Signature upload failed: ${sigErr.message}`)

      const [passportPath, financialPath] = await Promise.all([
        uploadFile(folder, 'passport-id', passportFile),
        uploadFile(folder, 'financial-support', financialFile),
      ])

      // Generate the id client-side: anon can INSERT but not SELECT (RLS),
      // so we can't read the row back after inserting.
      const appId = crypto.randomUUID()
      const { error: insertErr } = await supabase
        .from('applications')
        .insert({
          id: appId,
          type: 'international',
          status: 'applied',
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          phone: form.phoneCode ? `${form.phoneCode} ${form.phone}` : form.phone,
          date_of_birth: form.dob,
          street_address: form.street,
          street_address_2: form.street2 || null,
          city: form.city,
          region: form.region,
          postal_code: form.postal,
          country: form.country,
          program: form.program,
          prospective_start_date: form.startDate,
          gender: form.gender,
          height: form.height,
          weight: form.weight,
          nationality: form.citizenship,
          passport_number: form.passportNumber,
          passport_issue_date: form.passportIssue,
          passport_expiration_date: form.passportExpiry,
          referral_source: form.referral,
          passport_file_url: passportPath,
          financial_docs_url: financialPath,
          signature_url: sigPath,
          signature_status: 'signed',
          fee_amount: 400,
          fee_paid: false,
          submitted_at: new Date().toISOString(),
        })
      if (insertErr) throw new Error(insertErr.message)

      // Document records so uploads show up in the admin Documents view
      // (type labels match the migrated Wix data)
      await supabase.from('documents').insert([
        { application_id: appId, type: 'Passport ID', status: 'pending', file_path: passportPath },
        { application_id: appId, type: 'Financial Support', status: 'pending', file_path: financialPath },
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
              Thank you for applying to Global Pilot Academy. Our admissions team will review your
              application and contact you at the email you provided with next steps for the
              M-1 visa process.
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
            <div className="overline-small" style={{ color: '#506db2', marginBottom: '1rem' }}>M-1 Student Visa</div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#000040', margin: '0 0 1rem', lineHeight: 1.15 }}>International Student Application</h1>
            <p style={{ color: '#475467', fontSize: '1.05em', lineHeight: 1.7, margin: 0 }}>
              For students requiring an <strong>M-1 visa</strong> to train in the United States.
            </p>
          </div>
        </div>

        <ApplicationWindow
          settingKey="international_applications_open"
          closedTitle="Applications Are Currently Closed"
          closedMessage="International applications are not being accepted at this time. Please check back soon, or contact admissions@gpapilot.com with any questions."
        >
        <form onSubmit={handleSubmit} style={{ maxWidth: '680px', margin: '0 auto', padding: '3rem 2rem 5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          {/* Contact */}
          <div style={section}>
            <h2 style={sectionTitle}>Contact Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div><span style={label}>First name {req}</span><input style={input} required value={form.firstName} onChange={setInput('firstName')} autoComplete="given-name" /></div>
              <div><span style={label}>Last name / Surname {req}</span><input style={input} required value={form.lastName} onChange={setInput('lastName')} autoComplete="family-name" /></div>
            </div>
            <div><span style={label}>Email {req}</span><input style={input} type="email" required value={form.email} onChange={setInput('email')} autoComplete="email" /></div>
            <div>
              <span style={label}>Phone {req}</span>
              <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '0.75rem' }}>
                <input style={input} placeholder="Code" value={form.phoneCode} onChange={setInput('phoneCode')} aria-label="Country code" />
                <input style={input} type="tel" required value={form.phone} onChange={setInput('phone')} autoComplete="tel" />
              </div>
            </div>
            <div>
              <span style={label}>Date of birth {req}</span>
              <input style={input} type="date" required value={form.dob} onChange={setInput('dob')} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div><span style={label}>Street address {req}</span><input style={input} required value={form.street} onChange={setInput('street')} autoComplete="address-line1" /></div>
              <div><span style={label}>Street address line 2</span><input style={input} value={form.street2} onChange={setInput('street2')} autoComplete="address-line2" /></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div><span style={label}>City {req}</span><input style={input} required value={form.city} onChange={setInput('city')} autoComplete="address-level2" /></div>
                <div><span style={label}>Region / State / Province {req}</span><input style={input} required value={form.region} onChange={setInput('region')} autoComplete="address-level1" /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div><span style={label}>Postal / ZIP code {req}</span><input style={input} required value={form.postal} onChange={setInput('postal')} autoComplete="postal-code" /></div>
                <div>
                  <span style={label}>Country {req}</span>
                  <select style={input} required value={form.country} onChange={setInput('country')} autoComplete="country-name">
                    <option value="">Select a country</option>
                    {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Program */}
          <div style={section}>
            <h2 style={sectionTitle}>Program</h2>
            <div>
              <span style={label}>Program selection {req}</span>
              <select style={input} required value={form.program} onChange={setInput('program')}>
                <option value="">Choose an option</option>
                {PROGRAMS.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <span style={label}>Prospective start date {req}</span>
              <input style={input} type="date" required value={form.startDate} onChange={setInput('startDate')} />
            </div>
          </div>

          {/* Personal */}
          <div style={section}>
            <h2 style={sectionTitle}>Personal Details</h2>
            <fieldset style={fieldset}>
              <span style={label}>Please select your gender {req}</span>
              <label style={radioRow}>
                <input type="radio" name="gender" value="Male" checked={form.gender === 'Male'} onChange={setInput('gender')} required /> Male
              </label>
              <label style={radioRow}>
                <input type="radio" name="gender" value="Female" checked={form.gender === 'Female'} onChange={setInput('gender')} required /> Female
              </label>
            </fieldset>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div><span style={label}>Height {req}</span><input style={input} required value={form.height} onChange={setInput('height')} placeholder={'e.g. 5\'10" or 178 cm'} /></div>
              <div><span style={label}>Weight {req}</span><input style={input} required value={form.weight} onChange={setInput('weight')} placeholder="e.g. 160 lbs or 73 kg" /></div>
            </div>
          </div>

          {/* Passport */}
          <div style={section}>
            <h2 style={sectionTitle}>Citizenship &amp; Passport</h2>
            <div><span style={label}>Country of citizenship {req}</span><input style={input} required value={form.citizenship} onChange={setInput('citizenship')} /></div>
            <div><span style={label}>Passport number {req}</span><input style={input} required value={form.passportNumber} onChange={setInput('passportNumber')} /></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div><span style={label}>Passport issue date {req}</span><input style={input} type="date" required value={form.passportIssue} onChange={setInput('passportIssue')} /></div>
              <div><span style={label}>Passport expiration date {req}</span><input style={input} type="date" required value={form.passportExpiry} onChange={setInput('passportExpiry')} /></div>
            </div>
            <div><span style={label}>Referral source</span><input style={input} value={form.referral} onChange={setInput('referral')} placeholder="How did you hear about us?" /></div>
          </div>

          {/* Documents */}
          <div style={section}>
            <h2 style={sectionTitle}>Required Documents</h2>
            <FileField label="Passport I.D." file={passportFile} onChange={setPassportFile} />
            <FileField label="Financial support documents" file={financialFile} onChange={setFinancialFile} />
          </div>

          {/* Signature */}
          <div style={section}>
            <h2 style={sectionTitle}>Signature</h2>
            <div>
              <span style={label}>Your signature {req}</span>
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
