// Global type definitions for Global Pilot Academy

// Component Props Types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

// Navigation Types
export interface NavigationItem {
  name: string
  href: string
}

export interface FullNavigationItem extends NavigationItem {
  name: string
  href: string
}

// FAQ Types
export interface FAQItem {
  id: number
  category: string
  question: string
  answer: string
}

// Testimonial Types
export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  image: string
}

// Team Member Types
export interface TeamMember {
  name: string
  title: string
  experience: string
  certifications: string[]
  bio: string
  image: string
}

// Program Types
export interface Program {
  id: string
  title: string
  description: string
  duration: string
  price: number
  requirements: string[]
  certifications: string[]
}

// Contact Types
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  program?: string
}

// API Response Types
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

// Error Types
export interface AppError {
  code: string
  message: string
  statusCode?: number
}

// Utility Types
export type Nullable<T> = T | null
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
  [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Keys>>
}[Keys]

// Theme Types
export type ThemeMode = 'light' | 'dark' | 'system'
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

// Form Types
export interface FormFieldProps {
  name: string
  label: string
  placeholder?: string
  required?: boolean
  error?: string
  value: string
  onChange: (value: string) => void
}

// Image Types
export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

// SEO Types
export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  noIndex?: boolean
}

// Animation Types
export type AnimationType =
  | 'fade-in'
  | 'slide-up'
  | 'slide-in-left'
  | 'slide-in-right'
  | 'bounce'
  | 'pulse'

export interface AnimationProps {
  type: AnimationType
  delay?: number
  duration?: number
}
