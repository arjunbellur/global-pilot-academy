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
      <div className="bg-primary-600 text-white py-2">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+18135551234" 
                className="flex items-center space-x-1 hover:text-accent-300 transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>(813) 555-1234</span>
              </a>
              <a 
                href="mailto:info@gpapilot.com" 
                className="flex items-center space-x-1 hover:text-accent-300 transition-colors"
              >
                <Mail className="w-3 h-3" />
                <span>info@gpapilot.com</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>KVDF Airport, Tampa, FL</span>
              <span>•</span>
              <span>FAA Part 141 & 61</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
              <span className="text-white font-bold text-xl">GPA</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">Global Pilot Academy</h1>
              <p className="text-sm text-gray-600">Professional Flight Training</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
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
          <div className="hidden lg:flex items-center space-x-4">
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
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-gray-100 transition-colors"
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
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              {fullNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link
                  href="/discovery"
                  className="block mx-4 btn-accent text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Discovery
                </Link>
                <Link
                  href="/tour"
                  className="block mx-4 btn-outline text-center"
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
