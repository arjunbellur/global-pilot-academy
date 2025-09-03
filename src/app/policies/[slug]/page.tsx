import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, FileText, Shield, Scale, CreditCard, Users } from 'lucide-react'

// Policy data - in a real app, this would come from a CMS
const policies = {
  'privacy': {
    title: 'Privacy Policy',
    icon: Shield,
    lastUpdated: 'December 15, 2024',
    content: `
      <h2>Information We Collect</h2>
      <p>Global Pilot Academy collects information you provide directly to us, such as when you:</p>
      <ul>
        <li>Enroll in flight training programs</li>
        <li>Book discovery flights or campus tours</li>
        <li>Contact us through our website or phone</li>
        <li>Subscribe to our newsletter</li>
        <li>Apply for employment</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide flight training services</li>
        <li>Process payments and enrollment</li>
        <li>Communicate with you about your training</li>
        <li>Send important safety and schedule updates</li>
        <li>Improve our services and website</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>Information Sharing</h2>
      <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
      <ul>
        <li>With your consent</li>
        <li>To comply with legal requirements</li>
        <li>To protect our rights and safety</li>
        <li>With service providers who assist our operations</li>
      </ul>

      <h2>Data Security</h2>
      <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal information</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of your information</li>
        <li>Object to processing of your information</li>
        <li>Data portability</li>
      </ul>

      <h2>Contact Us</h2>
      <p>If you have questions about this Privacy Policy, please contact us at privacy@gpapilot.com or (813) 555-1234.</p>
    `
  },
  'terms': {
    title: 'Terms of Service',
    icon: Scale,
    lastUpdated: 'December 15, 2024',
    content: `
      <h2>Acceptance of Terms</h2>
      <p>By accessing and using Global Pilot Academy's services, you accept and agree to be bound by the terms and provision of this agreement.</p>

      <h2>Flight Training Services</h2>
      <p>Global Pilot Academy provides FAA-certified flight training under Part 141 and Part 61 regulations. All training is subject to:</p>
      <ul>
        <li>FAA regulations and requirements</li>
        <li>Weather conditions and safety considerations</li>
        <li>Instructor and aircraft availability</li>
        <li>Student progress and readiness</li>
      </ul>

      <h2>Payment Terms</h2>
      <p>All payments are due according to the agreed payment schedule. We accept various payment methods including:</p>
      <ul>
        <li>Credit and debit cards</li>
        <li>Bank transfers</li>
        <li>Financing through approved lenders</li>
        <li>Payment plans for qualifying students</li>
      </ul>

      <h2>Refund Policy</h2>
      <p>Refunds are provided according to our published refund policy:</p>
      <ul>
        <li>Full refund within 3 business days of enrollment</li>
        <li>Partial refunds based on completed training</li>
        <li>No refunds for consumed flight time</li>
        <li>Weather-related cancellations may be rescheduled</li>
      </ul>

      <h2>Safety and Conduct</h2>
      <p>All students must adhere to our safety policies and code of conduct:</p>
      <ul>
        <li>Follow all FAA regulations and safety procedures</li>
        <li>Respect instructors and fellow students</li>
        <li>Maintain professional conduct at all times</li>
        <li>Report any safety concerns immediately</li>
      </ul>

      <h2>Limitation of Liability</h2>
      <p>Global Pilot Academy's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.</p>

      <h2>Governing Law</h2>
      <p>These terms are governed by the laws of the State of Florida. Any disputes will be resolved in Tampa County courts.</p>
    `
  },
  'enrollment': {
    title: 'Enrollment Agreement',
    icon: FileText,
    lastUpdated: 'December 15, 2024',
    content: `
      <h2>Program Enrollment</h2>
      <p>This Enrollment Agreement outlines the terms and conditions for participation in Global Pilot Academy's flight training programs.</p>

      <h2>Eligibility Requirements</h2>
      <p>To enroll in our programs, students must:</p>
      <ul>
        <li>Be at least 17 years old (16 with parental consent)</li>
        <li>Hold a valid FAA medical certificate (Class 1, 2, or 3)</li>
        <li>Meet English proficiency requirements</li>
        <li>Complete all required documentation</li>
        <li>Pass any required entrance assessments</li>
      </ul>

      <h2>Program Duration and Completion</h2>
      <p>Program completion timelines are estimates and may vary based on:</p>
      <ul>
        <li>Student progress and aptitude</li>
        <li>Weather conditions affecting flight training</li>
        <li>Aircraft and instructor availability</li>
        <li>Personal circumstances requiring time off</li>
      </ul>

      <h2>Tuition and Fees</h2>
      <p>All tuition rates are subject to change with 30 days notice. Current rates are:</p>
      <ul>
        <li>Private Pilot License: $12,500</li>
        <li>Instrument Rating: $8,500</li>
        <li>Commercial Pilot License: $18,500</li>
        <li>Airline Pilot Program: $63,500</li>
      </ul>

      <h2>Payment Schedule</h2>
      <p>Payments are due according to the following schedule:</p>
      <ul>
        <li>Initial deposit: Due upon enrollment</li>
        <li>Monthly payments: Due on the 1st of each month</li>
        <li>Final payment: Due before graduation</li>
        <li>Late fees: 1.5% per month on overdue balances</li>
      </ul>

      <h2>Program Changes and Cancellations</h2>
      <p>Students may change programs with approval from the Academic Director. Cancellation terms:</p>
      <ul>
        <li>Written notice required for all cancellations</li>
        <li>Refund amounts based on completed training</li>
        <li>No refunds for consumed flight hours</li>
        <li>Administrative fees may apply</li>
      </ul>

      <h2>Academic Standards</h2>
      <p>Students must maintain satisfactory progress defined as:</p>
      <ul>
        <li>Minimum 70% on all written examinations</li>
        <li>Satisfactory performance on flight evaluations</li>
        <li>Regular attendance and participation</li>
        <li>Adherence to safety standards</li>
      </ul>
    `
  },
  'accessibility': {
    title: 'Accessibility Policy',
    icon: Users,
    lastUpdated: 'December 15, 2024',
    content: `
      <h2>Commitment to Accessibility</h2>
      <p>Global Pilot Academy is committed to providing an accessible environment for all individuals, including those with disabilities.</p>

      <h2>Facility Accessibility</h2>
      <p>Our facilities at Tampa Executive Airport include:</p>
      <ul>
        <li>Ramp access to all buildings</li>
        <li>Elevator access to upper levels</li>
        <li>Accessible restrooms</li>
        <li>Designated accessible parking spaces</li>
        <li>Wheelchair-accessible pathways</li>
      </ul>

      <h2>Accommodations for Students with Disabilities</h2>
      <p>We provide reasonable accommodations including:</p>
      <ul>
        <li>Extended testing time for examinations</li>
        <li>Alternative testing formats</li>
        <li>Modified equipment and controls</li>
        <li>Additional instructional support</li>
        <li>Sign language interpreters (advance notice required)</li>
      </ul>

      <h2>Requesting Accommodations</h2>
      <p>To request accommodations:</p>
      <ol>
        <li>Contact our Academic Director at (813) 555-1234</li>
        <li>Provide documentation of the disability</li>
        <li>Submit accommodation request form</li>
        <li>Allow 2-4 weeks for accommodation implementation</li>
      </ol>

      <h2>Service Animals</h2>
      <p>Service animals are welcome in our facilities. Please inform us in advance if you will be bringing a service animal.</p>

      <h2>Emergency Procedures</h2>
      <p>Our emergency evacuation procedures include provisions for individuals with disabilities. All staff are trained in emergency assistance.</p>

      <h2>Contact Information</h2>
      <p>For accessibility questions or to request accommodations, contact our Accessibility Coordinator at accessibility@gpapilot.com or (813) 555-1234.</p>
    `
  }
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const policy = policies[params.slug as keyof typeof policies]

  if (!policy) {
    return {
      title: 'Policy Not Found',
      description: 'The requested policy could not be found.'
    }
  }

  return {
    title: `${policy.title} | Global Pilot Academy`,
    description: `Read our ${policy.title.toLowerCase()} to understand our policies and procedures.`,
    keywords: [
      policy.title.toLowerCase(),
      'flight school policies',
      'aviation academy',
      'terms and conditions'
    ],
    openGraph: {
      title: `${policy.title} | Global Pilot Academy`,
      description: `Read our ${policy.title.toLowerCase()} to understand our policies and procedures.`,
    },
  }
}

export default function PolicyPage({ params }: Props) {
  const policy = policies[params.slug as keyof typeof policies]

  if (!policy) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-accent-300 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <policy.icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="h1 mb-4">{policy.title}</h1>
            <p className="text-gray-200">Last updated: {policy.lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="p-8 lg:p-12">
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: policy.content }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="h2 mb-4">Questions About This Policy?</h2>
          <p className="p max-w-3xl mx-auto mb-8">
            If you have questions about this policy or need clarification, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:info@gpapilot.com" className="btn-primary">
              Email Us
            </a>
            <a href="tel:+18135551234" className="btn-outline">
              Call (813) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Related Policies */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Other Policies</h2>
            <p className="p max-w-3xl mx-auto">
              Review our other important policies and agreements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(policies)
              .filter(([slug]) => slug !== params.slug)
              .map(([slug, policy]) => (
                <Link key={slug} href={`/policies/${slug}`} className="card-hover">
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <policy.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{policy.title}</h3>
                    <p className="text-sm text-gray-600">Updated {policy.lastUpdated}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
