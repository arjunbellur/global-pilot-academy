import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

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
    <footer className="bg-gray-900 text-white" role="contentinfo">
      {/* Main footer content */}
      <div className="container-custom section">
        <div className="grid-responsive">
          {/* Column 1: Contact Information (NAP, WhatsApp) */}
          <div className="stack">
            <div className="flex items-center" style={{ gap: '0.75em', marginBottom: '1.5em' }}>
              <div className="bg-primary-500 rounded-lg flex items-center justify-center" style={{ width: '2.5em', height: '2.5em' }}>
                <span className="text-white font-bold text-sm">GPA</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Global Pilot Academy</h3>
                <p className="text-xs text-gray-400">Flight School at Tampa Executive Airport (KVDF)</p>
              </div>
            </div>

            <div className="stack-lg">
              <div className="flex items-start" style={{ gap: '0.75em' }}>
                <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0" style={{ marginTop: '0.125em' }} />
                <div>
                  <p className="font-medium text-white">Tampa Executive Airport (KVDF)</p>
                  <p className="text-gray-400 text-responsive-sm">Tampa, FL 33619</p>
                </div>
              </div>

              <div className="flex items-center" style={{ gap: '0.75em' }}>
                <Phone className="w-5 h-5 text-accent-400" />
                <a href="tel:+18135551234" className="hover:text-accent-400 transition-colors duration-300 text-white">
                  (813) 555-1234
                </a>
              </div>

              <div className="flex items-center" style={{ gap: '0.75em' }}>
                <Mail className="w-5 h-5 text-accent-400" />
                <a href="mailto:info@gpapilot.com" className="hover:text-accent-400 transition-colors duration-300 text-white">
                  info@gpapilot.com
                </a>
              </div>

              <div className="flex items-center" style={{ gap: '0.75em' }}>
                <Phone className="w-5 h-5 text-accent-400" />
                <div>
                  <p className="font-medium text-white">WhatsApp</p>
                  <a href="https://wa.me/18135551234" className="text-accent-400 hover:text-white transition-colors duration-300 text-responsive-sm">
                    +1 (813) 555-1234
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="stack">
            <h3 className="text-lg font-semibold text-white" style={{ marginBottom: '1.5em' }}>Quick Links</h3>
            <div className="grid grid-cols-2" style={{ gap: '1em' }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Get Started CTAs */}
          <div className="stack">
            <h3 className="text-lg font-semibold text-white" style={{ marginBottom: '1.5em' }}>Get Started</h3>
            <div className="stack">
              {getStartedLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`w-full text-center ${
                    link.primary
                      ? 'btn-accent'
                      : 'btn-outline border-white text-white hover:bg-white hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Media */}
            <div className="stack" style={{ marginTop: '2em' }}>
              <h4 className="text-sm font-semibold text-gray-400" style={{ marginBottom: '1em' }}>Follow Us</h4>
              <div className="flex" style={{ gap: '0.75em' }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                    style={{ width: '2.5em', height: '2.5em' }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom" style={{ padding: '1.5em 0' }}>
          <div className="flex-responsive-col">
            <div className="text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} Global Pilot Academy. All rights reserved.</p>
            </div>
            <div className="flex" style={{ gap: '1.5em' }}>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
