'use client'
import { useEffect } from 'react'

export default function RippleInit() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const btn = target.closest('a[class*="button-style"], button[class*="button-style"]') as HTMLElement | null
      if (!btn) return

      const rect = btn.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      const ripple = document.createElement('span')
      ripple.className = 'gpa-ripple'
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`
      btn.appendChild(ripple)
      ripple.addEventListener('animationend', () => ripple.remove(), { once: true })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
