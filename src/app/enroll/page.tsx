import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, FileText, Clock, Users, Award, ArrowRight, Download, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Enroll in Flight Training',
  description: 'Enroll in flight training programs at Global Pilot Academy. Complete enrollment process, required documents, and start your aviation journey.',
  keywords: ['flight training enrollment', 'pilot school application', 'aviation training signup', 'flight academy enrollment'],
  openGraph: {
    title: 'Enroll in Flight Training | Global Pilot Academy',
    description: 'Start your aviation journey with our comprehensive enrollment process.',
  },
}

const enrollmentSteps = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'Schedule a consultation to discuss your aviation goals and training options.',
    duration: '30 minutes',
    requirements: ['Phone or video call', 'Basic information about your goals']
  },
  {
    step: 2,
    title: 'Program Selection',
    description: 'Choose the training program that best fits your career objectives and timeline.',
    duration: '1-2 days',
    requirements: ['Review program details', 'Consider budget and timeline']
  },
  {
    step: 3,
    title: 'Documentation',
    description: 'Submit required documents and complete enrollment forms.',
    duration: '3-5 days',
    requirements: ['Government ID', 'Medical certificate', 'Enrollment forms']
  },
  {
    step: 4,
    title: 'Payment & Scheduling',
    description: 'Complete payment arrangements and schedule your first training session.',
    duration: '1-2 days',
    requirements: ['Payment method', 'Schedule availability']
  },
  {
    step: 5,
    title: 'Orientation',
    description: 'Attend orientation to meet your instructor and learn about training procedures.',
    duration: '2 hours',
    requirements: ['In-person attendance', 'Comfortable clothing']
  }
]

const requiredDocuments = [
  {
    category: 'Personal Identification',
    documents: [
      { name: 'Government-issued photo ID', description: 'Driver\'s license, passport, or state ID', required: true },
      { name: 'Social Security Card', description: 'Original or certified copy', required: true },
      { name: 'Birth Certificate', description: 'Original or certified copy', required: true }
    ]
  },
  {
    category: 'Medical & Health',
    documents: [
      { name: 'FAA Medical Certificate', description: 'Class 1, 2, or 3 depending on program', required: true },
      { name: 'Medical History Form', description: 'Complete health questionnaire', required: true }
    ]
  },
  {
    category: 'Educational',
    documents: [
      { name: 'High School Diploma/GED', description: 'Official transcript or certificate', required: true },
      { name: 'College Transcripts', description: 'If applicable, for advanced programs', required: false }
    ]
  },
  {
    category: 'Financial',
    documents: [
      { name: 'Payment Method', description: 'Credit card, bank transfer, or financing approval', required: true },
      { name: 'Proof of Income', description: 'For payment plan applications', required: false }
    ]
  }
]

const internationalRequirements = [
  'Valid passport with at least 6 months validity',
  'Student visa (F-1) approval',
  'Proof of English proficiency (TOEFL/IELTS)',
  'Financial documentation showing ability to pay',
  'Health insurance coverage',
  'Housing arrangements confirmation',
  'SEVIS fee payment confirmation'
]

export default function EnrollPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="h1 mb-6">Enroll in Flight Training</h1>
          <p className="p text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
            Start your aviation journey today. Our streamlined enrollment process makes it easy 
            to begin your flight training at Global Pilot Academy.
          </p>
        </div>
      </section>

      {/* Quick Start CTA */}
      <section className="section-sm bg-accent-500 text-white">
        <div className="container-custom text-center">
          <h2 className="h2 mb-4">Ready to Get Started?</h2>
          <p className="p text-xl mb-6 max-w-3xl mx-auto text-accent-100">
            Choose your enrollment path and begin your aviation career today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#domestic-enrollment" className="btn-primary text-lg px-8 py-4">
              Domestic Student
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="#international-enrollment" className="btn btn-md btn-outline-white">
              International Student
            </Link>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">Enrollment Process</h2>
            <p className="p max-w-3xl mx-auto">
              Our simple 5-step enrollment process gets you from initial interest to your first flight 
              in as little as one week.
            </p>
          </div>
          
          <div className="space-y-8">
            {enrollmentSteps.map((step, index) => (
              <div key={step.step} className="card-hover">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Step Number */}
                  <div className="text-center lg:text-left">
                    <div className="w-20 h-20 mx-auto lg:mx-0 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-3xl font-bold text-primary-600">{step.step}</span>
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="lg:col-span-2">
                    <h3 className="h3 mb-3">{step.title}</h3>
                    <p className="p mb-4">{step.description}</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-accent-500" />
                        <span className="text-sm text-gray-600">Duration: {step.duration}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {step.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Required Documents</h2>
            <p className="p max-w-3xl mx-auto">
              Gather these documents to ensure a smooth enrollment process. 
              We'll help you obtain any missing documents.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requiredDocuments.map((category, index) => (
              <div key={index} className="card">
                <div className="p-6">
                  <h3 className="h3 mb-4">{category.category}</h3>
                  <div className="space-y-4">
                    {category.documents.map((doc, docIndex) => (
                      <div key={docIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          doc.required ? 'bg-red-500' : 'bg-gray-400'
                        }`}></div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{doc.name}</p>
                          <p className="text-sm text-gray-600">{doc.description}</p>
                          {doc.required && (
                            <span className="inline-block mt-1 px-2 py-1 bg-red-100 text-red-700 text-xs rounded">
                              Required
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/documents-checklist.pdf" className="btn-outline inline-flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Download Complete Checklist
            </Link>
          </div>
        </div>
      </section>

      {/* Domestic Enrollment */}
      <section id="domestic-enrollment" className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">Domestic Student Enrollment</h2>
            <p className="p max-w-3xl mx-auto">
              U.S. citizens and permanent residents can enroll directly in our training programs. 
              Complete the form below to get started.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="form-label">First Name *</label>
                      <input type="text" id="firstName" name="firstName" className="form-input" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="form-label">Last Name *</label>
                      <input type="text" id="lastName" name="lastName" className="form-input" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input type="email" id="email" name="email" className="form-input" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="form-label">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" className="form-input" required />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="program" className="form-label">Training Program *</label>
                    <select id="program" name="program" className="form-input" required>
                      <option value="">Select a program</option>
                      <option value="airline-pilot">Airline Pilot Program</option>
                      <option value="private-pilot">Private Pilot License</option>
                      <option value="instrument-rating">Instrument Rating</option>
                      <option value="cfi">CFI Training</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="startDate" className="form-label">Preferred Start Date *</label>
                    <input type="date" id="startDate" name="startDate" className="form-input" required />
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="form-label">Previous Flight Experience</label>
                    <textarea id="experience" name="experience" rows={3} className="form-input" 
                      placeholder="Describe any previous flight experience, aviation background, or specific goals..."></textarea>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="agreement" name="agreement" className="mt-1" required />
                    <label htmlFor="agreement" className="text-sm text-gray-700">
                      I agree to the terms and conditions and understand the enrollment requirements. 
                      I confirm that I have read and understood the program details and pricing.
                    </label>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full text-lg py-4">
                    Submit Enrollment Application
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Enrollment */}
      <section id="international-enrollment" className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">International Student Enrollment</h2>
            <p className="p max-w-3xl mx-auto">
              Specialized support for international students pursuing aviation careers in the United States. 
              We'll guide you through the visa process and provide comprehensive assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <div className="p-8">
                <h3 className="h3 mb-4">International Requirements</h3>
                <ul className="space-y-3 mb-6">
                  {internationalRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-700">
                      <p className="font-medium">Need assistance?</p>
                      <p>Our international student advisor will help with visas, housing, and more.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="p-8">
                <h3 className="h3 mb-4">Contact International Advisor</h3>
                <p className="p-sm mb-6">
                  Schedule a consultation with our international student advisor to discuss your specific needs 
                  and get personalized guidance.
                </p>
                
                <div className="space-y-4">
                  <a href="mailto:international@gpapilot.com" className="btn-outline w-full text-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Advisor
                  </a>
                  <a href="tel:+18135551234" className="btn-primary w-full text-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Advisor
                  </a>
                </div>
                
                <div className="mt-6 p-4 bg-accent-50 rounded-lg">
                  <p className="text-sm text-accent-700">
                    <strong>Note:</strong> International enrollment typically takes 2-3 months for visa processing. 
                    Plan accordingly for your desired start date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Portal */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">Student Portal</h2>
            <p className="p max-w-3xl mx-auto">
              Access your training progress, schedule flights, and manage your account through our secure student portal.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="card">
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="h3 mb-2">Student Login</h3>
                  <p className="text-gray-600">Access your training dashboard</p>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="studentEmail" className="form-label">Student Email</label>
                    <input type="email" id="studentEmail" name="studentEmail" className="form-input" />
                  </div>
                  
                  <div>
                    <label htmlFor="studentPassword" className="form-label">Password</label>
                    <input type="password" id="studentPassword" name="studentPassword" className="form-input" />
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Sign In
                  </button>
                </form>
                
                <div className="mt-6 text-center">
                  <Link href="/forgot-password" className="text-sm text-primary-600 hover:text-primary-700">
                    Forgot your password?
                  </Link>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    New students will receive portal access credentials after enrollment confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="h2 mb-6">Questions About Enrollment?</h2>
          <p className="p text-xl mb-8 max-w-3xl mx-auto text-gray-100">
            Our enrollment team is here to help you get started on your aviation journey. 
            Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+18135551234" className="btn-accent text-lg px-8 py-4">
              Call (813) 555-1234
            </a>
            <a href="mailto:enrollment@gpapilot.com" className="btn btn-md btn-outline-white">
              Email Enrollment Team
            </a>
          </div>
          <p className="text-sm text-gray-300 mt-6">
            Office hours: Mon-Fri 7AM-7PM, Sat-Sun 8AM-6PM
          </p>
        </div>
      </section>
    </>
  )
}
