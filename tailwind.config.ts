import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#1c3faa', // Brand primary blue
          600: '#1e40af',
          700: '#1e3a8a',
          800: '#1e3a8a',
          900: '#1e3a8a',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#00b3a4', // Brand accent teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid typography using clamp() for better responsive scaling - toned down for better readability
        'xs': ['clamp(0.75rem, 0.7rem + 0.15vw, 0.875rem)', '1.5'],
        'sm': ['clamp(0.875rem, 0.8rem + 0.2vw, 1rem)', '1.5'],
        'base': ['clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', '1.5'],
        'lg': ['clamp(1.125rem, 1.05rem + 0.3vw, 1.25rem)', '1.5'],
        'xl': ['clamp(1.25rem, 1.15rem + 0.4vw, 1.5rem)', '1.4'],
        '2xl': ['clamp(1.5rem, 1.35rem + 0.5vw, 1.875rem)', '1.3'],
        '3xl': ['clamp(1.875rem, 1.6rem + 0.6vw, 2.25rem)', '1.2'],
        '4xl': ['clamp(2.25rem, 1.9rem + 0.7vw, 2.75rem)', '1.1'],
        '5xl': ['clamp(3rem, 2.4rem + 0.8vw, 3.5rem)', '1.1'],
        '6xl': ['clamp(3.75rem, 3rem + 0.9vw, 4rem)', '1.1'],
        '7xl': ['clamp(4.5rem, 3.5rem + 1vw, 4.5rem)', '1'],
        '8xl': ['clamp(6rem, 4.5rem + 1.2vw, 5.5rem)', '1'],
        '9xl': ['clamp(8rem, 5.5rem + 1.5vw, 6.5rem)', '1'],
      },
      spacing: {
        // Dynamic spacing system using em units
        'xs': '0.5em',
        'sm': '0.75em',
        'md': '1em',
        'lg': '1.5em',
        'xl': '2em',
        '2xl': '3em',
        '3xl': '4em',
        '4xl': '6em',
        '5xl': '8em',
        '6xl': '12em',
        '7xl': '16em',
        '8xl': '24em',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1em',
          sm: '1.5em',
          md: '2em',
          lg: '3em',
          xl: '4em',
          '2xl': '5em',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
