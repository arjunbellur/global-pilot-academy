'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'

// Header navigation (Tier 1)
const navigation = [
  { name: 'Programs', href: '/programs' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Fleet', href: '/fleet' },
  { name: 'Enroll', href: '/enroll' },
  { name: 'FAQ', href: '/faq' },
]

// Footer navigation (for mobile dropdown)
const fullNavigation = [
  { name: 'Home', href: '/' },
  { name: 'Programs', href: '/programs' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Fleet', href: '/fleet' },
  { name: 'Enroll', href: '/enroll' },
  { name: 'Student Life', href: '/student-life' },
  { name: 'About', href: '/about' },
  { name: 'Discovery Flight', href: '/discovery' },
  { name: 'Tour', href: '/tour' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white'
    }`}>
      {/* Top bar with contact info */}
      <div className="bg-primary-600 text-white" style={{ padding: '0.375em 0' }}>
        <div className="container-custom">
          <div className="flex-responsive">
            <div className="cluster-sm">
              <a
                href="tel:+18135551234"
                className="flex items-center hover:text-accent-300 transition-colors duration-300"
                style={{ gap: '0.25em' }}
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="text-xs">(813) 555-1234</span>
              </a>
              <a
                href="mailto:info@gpapilot.com"
                className="flex items-center hover:text-accent-300 transition-colors duration-300"
                style={{ gap: '0.25em' }}
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="text-xs">info@gpapilot.com</span>
              </a>
            </div>
            <div className="hidden md:flex items-center cluster-sm text-xs">
              <span>KVDF Airport, Tampa, FL</span>
              <span>•</span>
              <span>FAA Part 141 & 61</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom" style={{ padding: '0.75em 0' }}>
        <div className="flex-responsive">
          {/* Logo */}
          <Link href="/" className="flex items-center group" style={{ gap: '0.625em' }}>
            <div className="bg-primary-500 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300" style={{ width: '2.5em', height: '2.5em' }}>
              <span className="text-white font-bold text-sm">GPA</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900" style={{ marginBottom: '0.125em' }}>Global Pilot Academy</h1>
              <p className="text-xs text-gray-600">Professional Flight Training</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center" style={{ gap: '2em' }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Sticky CTAs */}
          <div className="hidden lg:flex items-center" style={{ gap: '0.75em' }}>
            <Link href="/discovery" className="btn-accent">
              Book Discovery
            </Link>
            <Link href="/tour" className="btn-outline">
              Schedule Tour
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden rounded-md text-gray-700 hover:text-primary-500 hover:bg-gray-100 transition-colors duration-300"
            style={{ padding: '0.5em' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200" style={{ marginTop: '0.75em', paddingBottom: '0.75em' }}>
            <div className="stack" style={{ paddingTop: '0.75em' }}>
              {fullNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-md transition-colors duration-300"
                  style={{ padding: '0.5em 0.75em' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 stack" style={{ paddingTop: '0.75em' }}>
                <Link
                  href="/discovery"
                  className="btn-accent text-center"
                  style={{ margin: '0 0.75em' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Discovery
                </Link>
                <Link
                  href="/tour"
                  className="btn-outline text-center"
                  style={{ margin: '0 0.75em' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Schedule Tour
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
