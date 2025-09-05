import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Award, Users, Clock, MapPin, CheckCircle } from 'lucide-react'

// Why Global Pilot Academy data
const whyGPA = [
  { icon: Users, text: 'Graduates placed with airlines worldwide', color: 'text-primary-500' },
  { icon: Award, text: 'Interactive, practical training that builds real airmanship', color: 'text-accent-500' },
  { icon: Clock, text: 'In-house DPE authorization for efficient checkride scheduling', color: 'text-primary-600' },
  { icon: MapPin, text: 'Welcomes U.S. and international students', color: 'text-accent-600' },
]

// Admissions data
const admissions = [
  {
    id: 'us-admissions',
    title: 'U.S. Citizens & Residents',
    description: 'We will walk you through each step to reach your aviation goals. Flexible training options and financing available.',
    cta: 'U.S. Admissions',
    href: '/enroll#us'
  },
  {
    id: 'international-admissions',
    title: 'International Students',
    description: 'Support with student visa process, TSA clearance, and everything needed to train in the U.S. Housing options available.',
    cta: 'International Admissions',
    href: '/enroll#international'
  }
]

// Graduate success data
const graduateSuccess = [
  {
    name: 'Sarah Johnson',
    role: 'Commercial Pilot',
    company: 'Southwest Airlines',
    content: 'Global Pilot Academy gave me the skills and confidence to pursue my dream career. The instructors are exceptional and the training is world-class.',
    rating: 5,
    image: '/images/testimonial-1.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Flight Instructor',
    company: 'GPA Alumni',
    content: 'The structured approach and experienced instructors made all the difference. I went from zero flight experience to CFI in just 14 months.',
    rating: 5,
    image: '/images/testimonial-2.jpg'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Private Pilot',
    company: 'Recreational Flyer',
    content: 'Amazing experience learning to fly here. The staff is professional, the aircraft are well-maintained, and the training is comprehensive.',
    rating: 5,
    image: '/images/testimonial-3.jpg'
  }
]


export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FlightSchool",
            "name": "Global Pilot Academy",
            "url": "https://www.gpapilot.com",
            "telephone": "+1-813-600-4052",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "6530 Tampa Executive Airport Rd, Suite 111",
              "addressLocality": "Tampa",
              "addressRegion": "FL",
              "postalCode": "33610",
              "addressCountry": "US"
            },
            "areaServed": "US",
            "sameAs": [
              "https://www.instagram.com/",
              "https://www.facebook.com/"
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-800"></div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Become a Pilot in Tampa (KVDF).
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-8 animate-slide-up">
            Structured, hands-on training from <strong>Private Pilot to Airline Track</strong> with proven graduate success.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Link href="/enroll" className="btn-primary text-lg px-8 py-4">
              Enroll
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/discovery" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
              Book Discovery Flight
            </Link>
            <Link href="/tour" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
              Schedule Tour
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Why Global Pilot Academy Section */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="grid-responsive-sm">
            {whyGPA.map((item, index) => (
              <div key={index} className="text-center group stack">
                <div className="mx-auto bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300" style={{ width: '4em', height: '4em', marginBottom: '1em' }}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <p className="text-responsive-sm font-medium text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center stack">
            <h2 className="h2">Programs Overview</h2>
            <p className="p max-w-3xl mx-auto">
              From <strong>Private Pilot</strong> through <strong>Airline Pilot pathways</strong>. Training is personalized to your goals with clear milestones and instructor support.
            </p>
          </div>

          <div className="text-center" style={{ marginTop: '3em' }}>
            <Link href="/programs" className="btn-outline">
              Explore Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Admissions Preview Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid-responsive">
            {admissions.map((admission) => (
              <div key={admission.id} className="card card-hover">
                <div className="card-content">
                  <h3 className="h3">{admission.title}</h3>
                  <p className="p-sm">{admission.description}</p>
                  <div style={{ marginTop: '1.5em' }}>
                    <Link href={admission.href} className="btn-primary w-full text-center">
                      {admission.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduate Success Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center stack">
            <h2 className="h2">Graduate Success</h2>
            <p className="p max-w-3xl mx-auto">
              Real students. Real outcomes. Explore where our alumni are flying today.
            </p>
          </div>

          <div className="grid-responsive">
            {graduateSuccess.map((graduate, index) => (
              <div key={index} className="card card-hover">
                <div className="card-content">
                  <div className="flex items-center" style={{ marginBottom: '1em', gap: '0.125em' }}>
                    {[...Array(graduate.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700" style={{ marginBottom: '1.5em', fontStyle: 'italic' }}>
                    "{graduate.content}"
                  </blockquote>
                  <div className="flex items-center" style={{ gap: '0.75em' }}>
                    <div className="bg-gray-200 rounded-full overflow-hidden" style={{ width: '3em', height: '3em', flexShrink: 0 }}>
                      <Image
                        src={graduate.image}
                        alt={`${graduate.name}, ${graduate.role} at ${graduate.company}`}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-responsive-sm">{graduate.name}</p>
                      <p className="text-responsive-sm text-gray-600">{graduate.role}</p>
                      <p className="text-responsive-sm text-primary-600">{graduate.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3em' }}>
            <Link href="/about/reviews" className="btn-outline">
              See Success Stories
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Questions / Contact Section */}
      <section className="section-lg bg-gradient-hero text-white">
        <div className="container-custom text-center stack">
          <h2 className="h2">Questions?</h2>
          <p className="p text-responsive-lg max-w-3xl mx-auto text-gray-100">
            We're here to help you choose the right starting point and timeline.
          </p>
          <div className="flex-responsive" style={{ justifyContent: 'center' }}>
            <Link href="/contact" className="btn-accent">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-responsive-sm text-gray-300">
            Global Pilot Academy • 6530 Tampa Executive Airport Rd, Suite 111, Tampa, FL 33610<br />
            Phone: (813) 600-4052 • WhatsApp: (813) 428-4423
          </p>
        </div>
      </section>
    </>
  )
}
