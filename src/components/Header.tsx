'use client'

import { useState, useEffect, useCallback } from 'react'
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

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      {/* Top bar with contact info */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href="tel:+18135551234"
                className="flex items-center hover:text-accent-300 transition-colors duration-300"
              >
                <Phone className="w-4 h-4 mr-1" />
                <span className="text-sm">(813) 555-1234</span>
              </a>
              <a
                href="mailto:info@gpapilot.com"
                className="flex items-center hover:text-accent-300 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-1" />
                <span className="text-sm">info@gpapilot.com</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <span>KVDF Airport, Tampa, FL</span>
              <span>•</span>
              <span>FAA Part 141 & 61</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`container-custom py-4 ${isScrolled ? 'bg-white' : 'bg-transparent'}`} role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Global Pilot Academy Home">
            <div className="bg-primary-500 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300 w-12 h-12">
              <span className="text-white font-bold text-lg">GPA</span>
            </div>
            <div className="hidden sm:block ml-4">
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Global Pilot Academy</h1>
              <p className={`text-sm ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`}>Professional Flight Training</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium relative group transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-500' 
                    : 'text-white hover:text-accent-300'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-primary-500' : 'bg-accent-300'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Sticky CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/discovery" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-sm px-4 py-2">
              Book Discovery Flight
            </Link>
            <Link href="/tour" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-sm px-4 py-2">
              Schedule Tour
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden rounded-md transition-colors duration-300 p-2 ${
              isScrolled 
                ? 'text-gray-700 hover:text-primary-500 hover:bg-gray-100' 
                : 'text-white hover:text-accent-300 hover:bg-white/10'
            }`}
            onClick={toggleMobileMenu}
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
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg" style={{ marginTop: '0.75em', paddingBottom: '0.75em' }}>
            <div className="stack" style={{ paddingTop: '0.75em' }}>
              {fullNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-md transition-colors duration-300"
                  style={{ padding: '0.5em 0.75em' }}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 stack" style={{ paddingTop: '0.75em' }}>
                <Link
                  href="/discovery"
                  className="btn-primary text-center text-sm px-4 py-2"
                  style={{ margin: '0 0.75em' }}
                  onClick={closeMobileMenu}
                >
                  Book Discovery Flight
                </Link>
                <Link
                  href="/tour"
                  className="btn-outline text-center text-sm px-4 py-2"
                  style={{ margin: '0 0.75em' }}
                  onClick={closeMobileMenu}
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
