import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8" role="contentinfo">
      <div className="container py-6">
        <div className="text-center text-caption text-gray-400">
          <p>&copy; {new Date().getFullYear()} Global Pilot Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}