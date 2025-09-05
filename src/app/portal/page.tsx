import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Users, Lock, ArrowRight, BookOpen, Calendar, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Student Portal | Global Pilot Academy',
  description: 'Access your student portal to view training progress, schedule flights, and manage your account.',
  keywords: ['student portal', 'flight training portal', 'pilot student login', 'training progress'],
  openGraph: {
    title: 'Student Portal | Global Pilot Academy',
    description: 'Access your training dashboard and student resources.',
  },
}

export default function PortalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="h1 mb-6">Student Portal</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
            Access your training dashboard, schedule flights, and track your progress
          </p>
        </div>
      </section>

      {/* Portal Access */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="h2 mb-4">Portal Access</h2>
              <p className="p max-w-3xl mx-auto">
                Choose your portal access method below. Current students can log in directly, 
                while prospective students can explore our programs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Current Students */}
              <div className="card-hover">
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-primary-600" />
                  </div>
                  <h3 className="h3 mb-4">Current Students</h3>
                  <p className="p mb-6">
                    Access your training dashboard, schedule flights, view progress, and manage your account.
                  </p>
                  
                  <form className="space-y-4 mb-6">
                    <div>
                      <input 
                        type="email" 
                        placeholder="Student Email" 
                        className="form-input text-center"
                        required
                      />
                    </div>
                    <div>
                      <input 
                        type="password" 
                        placeholder="Password" 
                        className="form-input text-center"
                        required
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full">
                      Sign In
                    </button>
                  </form>
                  
                  <div className="space-y-2 text-sm">
                    <Link href="/forgot-password" className="text-primary-600 hover:text-primary-700 block">
                      Forgot Password?
                    </Link>
                    <Link href="/contact" className="text-gray-600 hover:text-gray-700 block">
                      Need Help?
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Prospective Students */}
              <div className="card-hover">
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-10 h-10 text-accent-600" />
                  </div>
                  <h3 className="h3 mb-4">Prospective Students</h3>
                  <p className="p mb-6">
                    Explore our programs, learn about enrollment, and start your aviation journey.
                  </p>
                  
                  <div className="space-y-3">
                    <Link href="/programs" className="btn-outline w-full">
                      View Programs
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    <Link href="/enroll" className="btn-primary w-full">
                      Enroll Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    <Link href="/discovery" className="btn-accent w-full">
                      Book Discovery Flight
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Features */}
      <section className="section-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Portal Features</h2>
            <p className="p max-w-3xl mx-auto">
              Everything you need to manage your flight training in one place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="h3 mb-3">Flight Scheduling</h3>
              <p className="p-sm">Book and manage your flight lessons with our easy-to-use scheduling system.</p>
            </div>
            
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="h3 mb-3">Progress Tracking</h3>
              <p className="p-sm">Monitor your training progress, logbook entries, and certification requirements.</p>
            </div>
            
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="h3 mb-3">Instructor Communication</h3>
              <p className="p-sm">Stay connected with your instructors and receive feedback on your training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Getting Started</h2>
            <p className="p max-w-3xl mx-auto">
              New to Global Pilot Academy? Here's how to get started with your aviation journey.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Book a Discovery Flight</h3>
                      <p className="text-gray-700">
                        Experience flying firsthand with our $99 discovery flight. This is the perfect way to 
                        see if aviation is right for you.
                      </p>
                      <Link href="/discovery" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        Book Discovery Flight →
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Choose Your Program</h3>
                      <p className="text-gray-700">
                        Explore our training programs and choose the path that fits your aviation goals and timeline.
                      </p>
                      <Link href="/programs" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        View Programs →
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Enroll & Start Training</h3>
                      <p className="text-gray-700">
                        Complete enrollment, get your portal access, and begin your flight training journey.
                      </p>
                      <Link href="/enroll" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        Enroll Now →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg bg-gradient-accent text-white">
        <div className="container-custom text-center">
          <h2 className="h2 mb-6">Ready to Start Flying?</h2>
          <p className="p text-xl mb-8 max-w-3xl mx-auto text-gray-100">
            Begin your aviation journey today with Global Pilot Academy. 
            Our experienced instructors are ready to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/discovery" className="btn-primary text-lg px-8 py-4">
              Book Discovery Flight
            </Link>
            <Link href="/enroll" className="btn btn-md btn-outline-white">
              Enroll Now
            </Link>
          </div>
          <p className="text-sm text-gray-300 mt-6">
            Questions? Call us at (813) 555-1234 or email info@gpapilot.com
          </p>
        </div>
      </section>
    </>
  )
}
