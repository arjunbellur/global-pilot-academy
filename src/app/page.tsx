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
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Michael Chen',
    role: 'Flight Instructor',
    company: 'GPA Alumni',
    content: 'The structured approach and experienced instructors made all the difference. I went from zero flight experience to CFI in just 14 months.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Private Pilot',
    company: 'Recreational Flyer',
    content: 'Amazing experience learning to fly here. The staff is professional, the aircraft are well-maintained, and the training is comprehensive.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-800"></div>

        {/* Hero Content */}
        <div className="relative z-10 container text-center text-white px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white mb-4">
            Become a Pilot in Tampa (KVDF).
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-white mb-6">
            Structured, hands-on training from <strong>Private Pilot to Airline Track</strong> with proven graduate success.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-x-inline">
            <Link href="/enroll" className="btn btn-md btn-primary">
              Enroll
              <ArrowRight className="icon-md" />
            </Link>
            <Link href="/discovery" className="btn btn-md btn-outline border-white text-white hover:bg-white hover:text-gray-900">
              Book Discovery Flight
            </Link>
            <Link href="/tour" className="btn btn-md btn-outline border-white text-white hover:bg-white hover:text-gray-900">
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
        <div className="container">
          <div className="grid-4">
            {whyGPA.map((item, index) => (
              <div key={index} className="text-center space-y-stack">
                <div className="mx-auto bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                  <item.icon className={`icon-xl ${item.color}`} />
                </div>
                <p className="text-body font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="section">
        <div className="container">
          <div className="text-center space-y-stack">
            <h2 className="text-heading">Programs Overview</h2>
            <p className="text-body max-w-3xl mx-auto">
              From <strong>Private Pilot</strong> through <strong>Airline Pilot pathways</strong>. Training is personalized to your goals with clear milestones and instructor support.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link href="/programs" className="btn btn-md btn-outline">
              Explore Programs
              <ArrowRight className="icon-md" />
            </Link>
          </div>
        </div>
      </section>

      {/* Admissions Preview Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid-2">
            {admissions.map((admission) => (
              <div key={admission.id} className="card">
                <div className="card-body space-y-stack">
                  <h3 className="text-subheading">{admission.title}</h3>
                  <p className="text-body">{admission.description}</p>
                  <Link href={admission.href} className="btn btn-md btn-primary w-full text-center">
                    {admission.cta}
                    <ArrowRight className="icon-md" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduate Success Section */}
      <section className="section">
        <div className="container">
          <div className="text-center space-y-stack">
            <h2 className="text-heading">Graduate Success</h2>
            <p className="text-body max-w-3xl mx-auto">
              Real students. Real outcomes. Explore where our alumni are flying today.
            </p>
          </div>

          <div className="grid-3 mt-12">
            {graduateSuccess.map((graduate, index) => (
              <div key={index} className="card">
                <div className="card-body space-y-stack">
                  <div className="flex items-center space-x-inline-sm">
                    {[...Array(graduate.rating)].map((_, i) => (
                      <Star key={i} className="icon-lg text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-body italic">
                    "{graduate.content}"
                  </blockquote>
                  <div className="flex items-center space-x-inline">
                    <div className="bg-gray-200 rounded-full w-12 h-12 overflow-hidden flex-shrink-0">
                      <Image
                        src={graduate.image}
                        alt={`${graduate.name}, ${graduate.role} at ${graduate.company}`}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-body font-semibold text-gray-900">{graduate.name}</p>
                      <p className="text-caption text-gray-600">{graduate.role}</p>
                      <p className="text-caption text-primary-600">{graduate.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/about/reviews" className="btn btn-md btn-outline">
              See Success Stories
              <ArrowRight className="icon-md" />
            </Link>
          </div>
        </div>
      </section>

      {/* Questions / Contact Section */}
      <section className="section-lg bg-gradient-to-br from-primary-900 via-primary-800 to-accent-800 text-white">
        <div className="container text-center space-y-stack">
          <h2 className="text-xl md:text-2xl font-semibold leading-tight text-white">Questions?</h2>
          <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-gray-100">
            We're here to help you choose the right starting point and timeline.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="btn btn-md btn-primary">
              Contact Us
              <ArrowRight className="icon-md" />
            </Link>
          </div>
          <p className="text-xs text-gray-300">
            Global Pilot Academy • 6530 Tampa Executive Airport Rd, Suite 111, Tampa, FL 33610<br />
            Phone: (813) 600-4052 • WhatsApp: (813) 428-4423
          </p>
        </div>
      </section>
    </>
  )
}