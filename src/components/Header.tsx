'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { NAV, PRIMARY_CTA, PHONE } from '../data/nav'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  return (
    <header className="static bg-white/95 backdrop-blur-sm border-b border-gray-200">

      {/* Top phone bar */}
      <div className="bg-primary-600 text-white py-1">
        <div className="container">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-inline">
              <a href={PHONE.href} className="flex items-center text-white hover:text-accent-300 transition-colors">
                <Phone className="icon-sm mr-1" />
                {PHONE.label}
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-inline-sm">
              <span className="text-white">KVDF Airport, Tampa, FL</span>
              <span className="text-white">•</span>
              <span className="text-white">FAA Part 141 & 61</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-gray-900 rounded-lg w-8 h-8 flex items-center justify-center">
              <span className="text-white font-bold text-xs">GPA</span>
            </div>
            <div className="hidden sm:block ml-2">
              <h1 className="text-xs font-semibold">Global Pilot Academy</h1>
              <p className="text-xs text-gray-600">Professional Flight Training</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {NAV.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    className="nav-link flex items-center"
                    onMouseEnter={() => setDropdownOpen(item.label)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    {item.label}
                    <ChevronDown className="icon-sm ml-1" />
                  </button>
                ) : (
                  <Link href={item.href!} className="nav-link">
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && dropdownOpen === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-3"
                    style={{ zIndex: 1000, minWidth: 'max-content' }}
                    onMouseEnter={() => setDropdownOpen(item.label)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 px-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href!}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-500 transition-colors rounded whitespace-nowrap"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link href={PRIMARY_CTA.href} className="btn btn-xs btn-primary">
              {PRIMARY_CTA.label}
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
          <div className="lg:hidden fixed inset-0 top-0 z-40 bg-white">
            <div className="flex flex-col h-full">
              {/* Mobile header */}
              <div className="flex items-center justify-between p-3 border-b border-gray-200">
                <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <div className="bg-gray-900 rounded-lg w-8 h-8 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">GPA</span>
                  </div>
                  <div className="ml-2">
                    <h1 className="text-xs font-semibold">Global Pilot Academy</h1>
                  </div>
                </Link>
                <button
                  type="button"
                  className="p-2 text-gray-700 hover:text-primary-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="icon-lg" />
                </button>
              </div>

              {/* Mobile navigation */}
              <div className="flex-1 overflow-y-auto px-3 py-4">
                <nav className="space-y-stack">
                  {NAV.map((item) => (
                    <div key={item.label}>
                      {item.children ? (
                        <div>
                          <div className="font-semibold text-base text-gray-900 py-1">
                            {item.label}
                          </div>
                          <div className="ml-4 space-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href!}
                                className="block py-2 text-gray-700 hover:text-primary-500 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href!}
                          className="block py-1 text-base font-semibold text-gray-900 hover:text-primary-500 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Mobile CTA */}
              <div className="p-3 border-t border-gray-200">
                <Link
                  href={PRIMARY_CTA.href}
                  className="btn btn-sm btn-primary w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {PRIMARY_CTA.label}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}