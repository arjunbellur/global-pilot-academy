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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      {/* Top contact bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container">
          <div className="flex items-center justify-between text-small">
            <div className="flex items-center space-x-inline">
              <a href="tel:+18135551234" className="flex items-center hover:text-accent-300 transition-colors">
                <Phone className="icon-sm mr-1" />
                (813) 555-1234
              </a>
              <a href="mailto:info@gpapilot.com" className="flex items-center hover:text-accent-300 transition-colors">
                <Mail className="icon-sm mr-1" />
                info@gpapilot.com
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-inline-sm">
              <span>KVDF Airport, Tampa, FL</span>
              <span>•</span>
              <span>FAA Part 141 & 61</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-primary-500 rounded-lg w-10 h-10 flex items-center justify-center">
              <span className="text-white font-bold text-sm">GPA</span>
            </div>
            <div className="hidden sm:block ml-3">
              <h1 className="text-heading">Global Pilot Academy</h1>
              <p className="text-caption">Professional Flight Training</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-inline">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center space-x-inline-sm">
            <Link href="/discovery" className="btn btn-sm btn-outline">
              Book Discovery Flight
            </Link>
            <Link href="/tour" className="btn btn-sm btn-outline">
              Schedule Tour
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700 hover:text-primary-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="icon-lg" /> : <Menu className="icon-lg" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-stack">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-stack-sm">
                <Link
                  href="/discovery"
                  className="btn btn-sm btn-primary w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Discovery Flight
                </Link>
                <Link
                  href="/tour"
                  className="btn btn-sm btn-outline w-full text-center"
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