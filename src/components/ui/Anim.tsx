'use client'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { ReactNode, CSSProperties } from 'react'

interface Props {
  children: ReactNode
  animation?: 'up' | 'left' | 'right' | 'scale'
  delay?: number
  style?: CSSProperties
  className?: string
  threshold?: number
}

export default function Anim({
  children,
  animation = 'up',
  delay,
  style,
  className = '',
  threshold,
}: Props) {
  const ref = useScrollAnimation(threshold)
  const classes = [
    'gpa-anim',
    `gpa-anim-${animation}`,
    delay ? `gpa-delay-${delay}` : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  )
}
