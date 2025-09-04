# Global Pilot Academy Website

🚀 **CLOUDFLARE PAGES BUILD FIX - LATEST VERSION** 🚀

Latest build fix applied - removed static export configuration for Cloudflare Pages compatibility.
- ✅ Fixed Next.js configuration
- ✅ Removed static export settings  
- ✅ Added @cloudflare/next-on-pages support
- ✅ Disabled buildTraces to fix stack overflow error
- ✅ All dynamic routes working
- ✅ Commit: 35f6551 - Latest working configuration

A modern, responsive website for Global Pilot Academy built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first design with responsive navigation and layouts
- **SEO Optimized**: Comprehensive metadata, Open Graph, and JSON-LD structured data
- **Accessibility**: Skip-to-content links, semantic HTML, and ARIA labels
- **Performance**: Optimized images, lazy loading, and modern web standards
- **Professional UI**: Clean, aviation-themed design with brand colors and components

## 🎯 Pages & Sections

### Core Pages
- **Home** (`/`) - Hero section, programs preview, fleet preview, testimonials
- **Programs** (`/programs`) - Flight training programs with detailed information
- **Pricing** (`/pricing`) - Transparent pricing packages and payment options
- **Fleet** (`/fleet`) - Aircraft fleet with specifications and avionics
- **Enrollment** (`/enroll`) - Enrollment process and forms for domestic/international students

### Additional Pages (To be implemented)
- **Student Life** (`/student-life`) - Housing, accommodations, pilot tools
- **About** (`/about`) - Academy overview, team, reviews
- **Shop** (`/shop`) - Discovery flight certificates, Stripe checkout
- **FAQ** (`/faq`) - General and international FAQs
- **Contact** (`/contact`) - Contact information, maps, inquiry forms

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   ├── programs/          # Programs hub page
│   │   └── [slug]/        # Dynamic program detail pages
│   ├── pricing/           # Pricing page with tabs
│   ├── fleet/             # Fleet hub page
│   │   └── [slug]/        # Dynamic aircraft detail pages
│   ├── enroll/            # Enrollment funnel page
│   ├── portal/            # Student portal gate
│   └── discovery/         # Discovery flight checkout
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
└── types/                 # TypeScript type definitions

public/                    # Static assets
├── images/               # Image files
└── favicon.ico          # Site favicon

tailwind.config.ts        # Tailwind configuration
next.config.js           # Next.js configuration
tsconfig.json            # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd global-pilot-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Brand Colors
- **Primary Blue**: `#1c3faa` - Main brand color
- **Accent Teal**: `#00b3a4` - Secondary accent color
- **Gray Scale**: Full range of grays for text and backgrounds

### Typography
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (body text)

### Component Classes
- `.btn` - Base button styles
- `.btn-primary` - Primary button variant
- `.btn-accent` - Accent button variant
- `.card` - Card component styles
- `.section` - Section spacing utilities
- `.h1`, `.h2`, `.h3` - Typography scale
- `.p`, `.p-sm` - Paragraph styles

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1400px)
- **Grid System**: Responsive grid layouts with auto-fit/auto-fill
- **Navigation**: Mobile hamburger menu with desktop navigation

## 🔍 SEO Features

- **Metadata**: Comprehensive page metadata for search engines
- **Open Graph**: Social media sharing optimization
- **JSON-LD**: Structured data for FlightSchool, LocalBusiness schemas
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Performance**: Optimized images and fast loading times

## ♿ Accessibility

- **Skip Links**: Skip-to-content navigation
- **ARIA Labels**: Proper labeling for screen readers
- **Semantic HTML**: Meaningful structure and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color combinations

## 📋 Content Management

The website is designed to be CMS-friendly with:
- Structured data arrays for easy content updates
- Component-based architecture for modular content
- Placeholder images and content for easy replacement
- Organized content sections for easy management

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Custom domain can be configured in Vercel dashboard

### Other Platforms
- **Netlify**: Use `next build && next export`
- **AWS Amplify**: Connect repository and deploy
- **Traditional hosting**: Build and upload static files

## 🔧 Customization

### Adding New Pages
1. Create new directory in `src/app/`
2. Add `page.tsx` with proper metadata
3. Update navigation in `Header.tsx`

### Modifying Styles
1. Update `tailwind.config.ts` for theme changes
2. Modify `src/app/globals.css` for custom utilities
3. Use component classes for consistent styling

### Content Updates
1. Update data arrays in respective page files
2. Replace placeholder images in `public/images/`
3. Update contact information and business details

## 📞 Support & Contact

For questions about the website or flight training programs:
- **Phone**: (813) 555-1234
- **Email**: info@gpapilot.com
- **Address**: KVDF Airport, Tampa, FL 33619

## 📄 License

This project is proprietary to Global Pilot Academy. All rights reserved.

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Core pages and navigation
- ✅ Responsive design and components
- ✅ SEO optimization and metadata
- ✅ Dynamic routing for programs and fleet
- ✅ Discovery flight checkout page
- ✅ Student portal gate

### Phase 2 (Next)
- [ ] Student Life page with housing information
- [ ] About page with team and academy information
- [ ] FAQ page with comprehensive questions
- [ ] Tour booking page
- [ ] Contact page with maps and forms

### Phase 3 (Future)
- [ ] Student portal full integration
- [ ] Online booking system
- [ ] Blog/news section
- [ ] Multi-language support
- [ ] Advanced search and filtering

---

**Built with ❤️ for Global Pilot Academy**
