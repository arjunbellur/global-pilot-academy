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
      <div className="bg-primary-600 text-white" style={{ padding: '0.25em 0' }}>
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href="tel:+18135551234"
                className="flex items-center hover:text-accent-300 transition-colors duration-300"
                style={{ gap: '0.25em' }}
              >
                <Phone className="w-3 h-3" />
                <span className="text-xs">(813) 555-1234</span>
              </a>
              <a
                href="mailto:info@gpapilot.com"
                className="flex items-center hover:text-accent-300 transition-colors duration-300"
                style={{ gap: '0.25em' }}
              >
                <Mail className="w-3 h-3" />
                <span className="text-xs">info@gpapilot.com</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-xs">
              <span>KVDF Airport, Tampa, FL</span>
              <span>•</span>
              <span>FAA Part 141 & 61</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom" style={{ padding: '0.5em 0' }}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group" style={{ gap: '0.4em' }}>
            <div className="bg-primary-500 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300" style={{ width: '2em', height: '2em' }}>
              <span className="text-white font-bold text-xs">GPA</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base font-bold text-gray-900" style={{ marginBottom: '0.125em' }}>Global Pilot Academy</h1>
              <p className="text-xs text-gray-600">Professional Flight Training</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1" style={{ gap: '1.2em' }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link relative group text-sm"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Sticky CTAs */}
          <div className="hidden lg:flex items-center" style={{ gap: '0.4em' }}>
            <Link href="/discovery" className="btn-accent text-xs px-2 py-1">
              Book Discovery
            </Link>
            <Link href="/tour" className="btn-outline text-xs px-2 py-1">
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
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg" style={{ marginTop: '0.5em' }}>
            <div className="stack" style={{ padding: '1em 0' }}>
              {fullNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-md transition-colors duration-300"
                  style={{ padding: '0.75em 1em', margin: '0 0.5em' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 stack" style={{ paddingTop: '1em', margin: '0 0.5em' }}>
                <Link
                  href="/discovery"
                  className="btn-accent text-center text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Discovery Flight
                </Link>
                <Link
                  href="/tour"
                  className="btn-outline text-center text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Schedule Campus Tour
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
