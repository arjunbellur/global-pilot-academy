'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'

// Navigation items
const navigation = [
  { name: 'Programs', href: '/programs' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Fleet', href: '/fleet' },
  { name: 'Enroll', href: '/enroll' },
  { name: 'FAQ', href: '/faq' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      {/* Top contact bar */}
      <div className="bg-primary-600 text-white py-1">
        <div className="container-custom">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-4">
              <a href="tel:+18135551234" className="flex items-center hover:text-accent-300">
                <Phone className="w-3 h-3 mr-1" />
                (813) 555-1234
              </a>
              <a href="mailto:info@gpapilot.com" className="flex items-center hover:text-accent-300">
                <Mail className="w-3 h-3 mr-1" />
                info@gpapilot.com
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <span>KVDF Airport, Tampa, FL</span>
              <span>•</span>
              <span>FAA Part 141 & 61</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-primary-500 rounded-lg w-10 h-10 flex items-center justify-center">
              <span className="text-white font-bold text-sm">GPA</span>
            </div>
            <div className="hidden sm:block ml-3">
              <h1 className="text-lg font-bold text-gray-900">Global Pilot Academy</h1>
              <p className="text-xs text-gray-600">Professional Flight Training</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/discovery" className="btn-outline text-xs px-3 py-1.5">
              Book Discovery Flight
            </Link>
            <Link href="/tour" className="btn-outline text-xs px-3 py-1.5">
              Schedule Tour
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700 hover:text-primary-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-medium text-gray-700 hover:text-primary-500 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  href="/discovery"
                  className="btn-primary text-xs px-3 py-1.5 w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Discovery Flight
                </Link>
                <Link
                  href="/tour"
                  className="btn-outline text-xs px-3 py-1.5 w-full text-center"
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
