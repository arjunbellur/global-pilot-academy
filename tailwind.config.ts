import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ─── EXACT tokens from global-pilot-academy.webflow.css :root ───
      colors: {
        'main-blue':      '#000040',   // --main-blue
        'secondary-blue': '#88b2ff',   // --secondary-blue
        'strong-blue':    '#1e00ff',   // --strong-blue
        'accent-1':       '#506db2',   // --accent-1 (testimonial cards, feature links)
        'off-white':      '#dfdddd',   // --subtext-off-white
        'gray-600':       '#475467',   // --untitled-ui--gray600
        'gray-900':       '#101828',   // --untitled-ui--gray900
        'gray-100':       '#f2f4f7',   // --untitled-ui--gray100
        'gray-50':        '#f9fafb',   // --untitled-ui--gray50
        'gray-200':       '#eaecf0',   // --untitled-ui--gray200
        'gray-500':       '#667085',   // --untitled-ui--gray500
        'warning-300':    '#fec84b',   // --untitled-ui--warning300
      },
      fontFamily: {
        // Exact font from Webflow: Figtree, fallback Work Sans
        sans: ['Figtree', 'Work Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Exact from CSS: body font-size: 1rem base, scaled per breakpoint
        'hero':  ['6em',   { lineHeight: '1.1',  fontWeight: '300' }],  // .hero-heading
        'h1':    ['7em',   { lineHeight: '1.1',  fontWeight: '700' }],  // h1
        'h2':    ['4em',   { lineHeight: '1.1',  fontWeight: '700' }],  // h2
        'h3':    ['3em',   { lineHeight: '1.1',  fontWeight: '700' }],  // h3
        'h3h':   ['5em',   { lineHeight: '1',    fontWeight: '400' }],  // .heading-3h
        'h4':    ['2em',   { lineHeight: '1.1',  fontWeight: '700' }],  // h4
        'h1-lg': ['4em',   { lineHeight: '1.2',  fontWeight: '600' }],  // .h1-heading
      },
      maxWidth: {
        'container': '1208px',   // .container-large max-width
        'container-xl': '1280px', // .container-large-2
      },
      borderRadius: {
        'card':    '1em',
        'card-lg': '2em',
        'pill':    '100px',
        'btn':     '1em',
      },
    },
  },
  plugins: [],
}
export default config
