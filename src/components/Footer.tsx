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
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Contact Information (NAP, WhatsApp) */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GPA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Global Pilot Academy</h3>
                <p className="text-sm text-gray-400">Flight School at Tampa Executive Airport (KVDF)</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Tampa Executive Airport (KVDF)</p>
                  <p className="text-gray-400 text-sm">Tampa, FL 33619</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-400" />
                <a href="tel:+18135551234" className="hover:text-accent-400 transition-colors">
                  (813) 555-1234
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-400" />
                <a href="mailto:info@gpapilot.com" className="hover:text-accent-400 transition-colors">
                  info@gpapilot.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-400" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <a href="https://wa.me/18135551234" className="text-accent-400 hover:text-white transition-colors text-sm">
                    +1 (813) 555-1234
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Get Started CTAs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get Started</h3>
            <div className="space-y-4">
              {getStartedLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block w-full text-center ${
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
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-gray-400 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
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
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} Global Pilot Academy. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
