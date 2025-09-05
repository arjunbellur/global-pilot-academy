import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

// Footer quick links
const quickLinks = [
  { name: 'Programs', href: '/programs' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Fleet', href: '/fleet' },
  { name: 'Student Life', href: '/student-life' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

// Get Started CTAs
const getStartedLinks = [
  { name: 'Book Discovery Flight', href: '/discovery', primary: true },
  { name: 'Schedule Campus Tour', href: '/tour', primary: false },
  { name: 'Enroll Now', href: '/enroll', primary: false },
]

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
        <div className="grid-3">
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

              <div className="flex items-center space-x-inline">
                <Phone className="icon-lg text-accent-400" />
                <div>
                  <p className="text-body text-white font-medium">WhatsApp</p>
                  <a href="https://wa.me/18135551234" className="text-caption text-accent-400 hover:text-white transition-colors">
                    +1 (813) 555-1234
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-stack">
            <h3 className="text-subheading text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-body text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Get Started CTAs */}
          <div className="space-y-stack">
            <h3 className="text-subheading text-white">Get Started</h3>
            <div className="space-y-stack-sm">
              {getStartedLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`btn btn-sm w-full text-center ${
                    link.primary
                      ? 'btn-primary'
                      : 'btn-outline border-white text-white hover:bg-white hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Media */}
            <div className="space-y-stack">
              <h4 className="text-body text-gray-400 font-medium">Follow Us</h4>
              <div className="flex space-x-inline-sm">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="bg-gray-800 rounded-lg w-10 h-10 flex items-center justify-center hover:bg-primary-500 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="icon-lg" />
                  </a>
                ))}
              </div>
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
              <Link href="/sitemap" className="text-caption text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}