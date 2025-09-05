import Link from 'next/link'
import { ArrowRight, Star, Award, Users, Clock, MapPin, CheckCircle } from 'lucide-react'
import StickyLeadBar from '@/components/StickyLeadBar'
import MicroLeadForm from '@/components/MicroLeadForm'
import MetricsBar from '@/components/MetricsBar'
import ProgramsGrid from '@/components/ProgramsGrid'
import FinancingStrip from '@/components/FinancingStrip'
import TimelineStepper from '@/components/TimelineStepper'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import FAQAccordion from '@/components/FAQAccordion'
import { metrics } from '@/data/metrics'
import { programs } from '@/data/programs'
import { testimonials } from '@/data/testimonials'
import { faqs } from '@/data/faqs'
import { timelineSteps } from '@/data/timeline'

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

// Testimonials data is now imported from @/data/testimonials


export default function HomePage() {
  // JSON-LD structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Global Pilot Academy",
    "url": "https://gpapilot.com",
    "logo": "https://gpapilot.com/logo.png",
    "description": "FAA Part 141 & 61 Flight School in Tampa, FL offering structured flight training from Private Pilot to Airline Track",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6530 Tampa Executive Airport Rd, Suite 111",
      "addressLocality": "Tampa",
      "addressRegion": "FL",
      "postalCode": "33610",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-813-600-4052",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": ["English", "Spanish"]
    },
    "sameAs": [
      "https://www.facebook.com/gpapilot",
      "https://www.instagram.com/gpapilot",
      "https://www.linkedin.com/company/gpapilot"
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Global Pilot Academy"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Adrian Quichocho"
    },
    "reviewBody": "This flight school would work with you and accommodate whatever situation you may have. Since I just recently got out of Active Duty Air Force, my main focus was to fly 5 days a week to get my PPL."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-800"></div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 animate-fade-in">
            Become a Pilot in Tampa (KVDF).
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-100 mb-8 animate-slide-up">
            Structured, hands-on training from <strong>Private Pilot to Airline Track</strong> with proven graduate success.
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 animate-slide-up">
            <Link href="/enroll" className="btn-accent w-full lg:w-auto text-base px-6 py-3">
              Enroll
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/discovery" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 w-full lg:w-auto text-base px-6 py-3">
              Book Discovery Flight
            </Link>
            <Link href="/tour" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 w-full lg:w-auto text-base px-6 py-3">
              Schedule a Tour
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

      {/* Micro Lead Form */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <MicroLeadForm />
        </div>
      </section>

      {/* Metrics Bar */}
      <MetricsBar metrics={metrics} />

      {/* Programs Grid */}
      <ProgramsGrid programs={programs} />

      {/* Financing Strip */}
      <FinancingStrip />

      {/* Timeline Stepper */}
      <TimelineStepper steps={timelineSteps} />

      {/* Why Global Pilot Academy Section */}
      <section className="py-6 lg:py-8 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyGPA.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-2" style={{ width: '2.5em', height: '2.5em' }}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <p className="text-xs font-medium text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="py-6 lg:py-8">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Programs Overview</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From <strong>Private Pilot</strong> through <strong>Airline Pilot pathways</strong>. Training is personalized to your goals with clear milestones and instructor support.
            </p>
          </div>

          <div className="text-center">
            <Link href="/programs" className="btn-outline text-sm px-4 py-2">
              Explore Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Admissions Preview Section */}
      <section className="py-6 lg:py-8 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {admissions.map((admission) => (
              <div key={admission.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{admission.title}</h3>
                <p className="text-gray-600 mb-3 leading-relaxed text-xs">{admission.description}</p>
                <Link href={admission.href} className="btn-primary w-full text-center text-sm px-3 py-2">
                  {admission.cta}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* FAQ Accordion */}
      <FAQAccordion faqs={faqs} />

      {/* Questions / Contact Section */}
      <section className="py-6 lg:py-8 bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Questions?</h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto text-gray-100 mb-4 leading-relaxed">
            We're here to help you choose the right starting point and timeline.
          </p>
          <div className="flex justify-center mb-4">
            <Link href="/contact" className="btn-accent text-sm px-4 py-2">
              Contact Us
              <ArrowRight className="w-4 h-4" />
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
