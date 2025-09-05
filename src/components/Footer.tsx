import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { FOOTER_NAV } from '../data/nav'

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8" role="contentinfo">
      {/* Main footer content */}
      <div className="container section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Contact Information */}
          <div className="space-y-stack">
            <div className="flex items-center space-x-inline">
              <div className="bg-primary-500 rounded-lg w-10 h-10 flex items-center justify-center">
                <span className="text-white font-bold text-sm">GPA</span>
              </div>
              <div>
                <h3 className="text-subheading text-white">Global Pilot Academy</h3>
                <p className="text-caption text-gray-400">Flight School at Tampa Executive Airport (KVDF)</p>
              </div>
            </div>

            <div className="space-y-stack">
              <div className="flex items-start space-x-inline">
                <MapPin className="icon-lg text-accent-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-body text-white font-medium">Tampa Executive Airport (KVDF)</p>
                  <p className="text-caption text-gray-400">Tampa, FL 33619</p>
                </div>
              </div>

              <div className="flex items-center space-x-inline">
                <Phone className="icon-lg text-accent-400" />
                <a href="tel:+18135551234" className="text-body text-white hover:text-accent-400 transition-colors">
                  (813) 555-1234
                </a>
              </div>

              <div className="flex items-center space-x-inline">
                <Mail className="icon-lg text-accent-400" />
                <a href="mailto:info@gpapilot.com" className="text-body text-white hover:text-accent-400 transition-colors">
                  info@gpapilot.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Programs */}
          <div className="space-y-stack">
            <h3 className="text-subheading text-white">Programs</h3>
            <div className="space-y-2">
              {FOOTER_NAV.programs.slice(0, 6).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-body text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Admissions */}
          <div className="space-y-stack">
            <h3 className="text-subheading text-white">Admissions</h3>
            <div className="space-y-2">
              {FOOTER_NAV.admissions.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-body text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-stack">
            <h3 className="text-subheading text-white">Resources</h3>
            <div className="space-y-2">
              <Link href="/guide" className="text-body text-gray-400 hover:text-white transition-colors">
                Career Guide
              </Link>
              <Link href="/faq" className="text-body text-gray-400 hover:text-white transition-colors">
                FAQs
              </Link>
              <Link href="/reviews" className="text-body text-gray-400 hover:text-white transition-colors">
                Reviews
              </Link>
              <Link href="/fleet" className="text-body text-gray-400 hover:text-white transition-colors">
                Fleet
              </Link>
              <Link href="/locations" className="text-body text-gray-400 hover:text-white transition-colors">
                Locations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-stack-sm md:space-y-0">
            <div className="text-caption text-gray-400">
              <p>&copy; {new Date().getFullYear()} Global Pilot Academy. All rights reserved.</p>
            </div>
            <div className="flex space-x-inline">
              <Link href="/privacy" className="text-caption text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-caption text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/styleguide" className="text-caption text-gray-400 hover:text-white transition-colors">
                Style Guide
              </Link>
              <Link href="/contact" className="text-caption text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}