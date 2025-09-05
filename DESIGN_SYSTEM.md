# Global Pilot Academy Design System

## Overview
This design system establishes consistent visual language, typography, spacing, and component patterns for the Global Pilot Academy website. It ensures brand consistency, accessibility, and maintainability across all digital touchpoints.

## Table of Contents
1. [Brand Identity](#brand-identity)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Sizing](#spacing--sizing)
5. [Component Library](#component-library)
6. [Layout System](#layout-system)
7. [Animation & Motion](#animation--motion)
8. [Accessibility Guidelines](#accessibility-guidelines)
9. [Implementation Guide](#implementation-guide)
10. [Change Tracking](#change-tracking)

---

## Brand Identity

### Brand Values
- **Professional**: Trustworthy, reliable, expert
- **Approachable**: Friendly, supportive, accessible
- **Ambitious**: Goal-oriented, career-focused, aspirational
- **Precise**: Detail-oriented, safety-focused, methodical

### Visual Personality
- Clean and modern
- Aviation-inspired
- Professional yet approachable
- High contrast for readability
- Consistent and systematic

---

## Color System

### Primary Colors
```css
/* Brand Blue - Primary Actions & Branding */
--primary-50: #eff6ff    /* Lightest tint */
--primary-100: #dbeafe   /* Light tint */
--primary-200: #bfdbfe   /* Medium light */
--primary-300: #93c5fd   /* Medium */
--primary-400: #60a5fa   /* Medium dark */
--primary-500: #1c3faa   /* Brand primary */
--primary-600: #1e40af   /* Dark */
--primary-700: #1e3a8a   /* Darker */
--primary-800: #1e3a8a   /* Darkest */
--primary-900: #1e3a8a   /* Maximum contrast */
```

### Accent Colors
```css
/* Aviation Teal - Secondary Actions & Highlights */
--accent-50: #f0fdfa     /* Lightest tint */
--accent-100: #ccfbf1    /* Light tint */
--accent-200: #99f6e4    /* Medium light */
--accent-300: #5eead4    /* Medium */
--accent-400: #2dd4bf    /* Medium dark */
--accent-500: #00b3a4    /* Brand accent */
--accent-600: #0d9488    /* Dark */
--accent-700: #0f766e    /* Darker */
--accent-800: #115e59    /* Darkest */
--accent-900: #134e4a    /* Maximum contrast */
```

### Neutral Colors
```css
/* Grayscale - Text, Backgrounds, Borders */
--gray-50: #f9fafb       /* Lightest background */
--gray-100: #f3f4f6      /* Light background */
--gray-200: #e5e7eb      /* Light border */
--gray-300: #d1d5db      /* Medium light border */
--gray-400: #9ca3af      /* Disabled text */
--gray-500: #6b7280      /* Secondary text */
--gray-600: #4b5563      /* Primary text */
--gray-700: #374151      /* Dark text */
--gray-800: #1f2937      /* Darker text */
--gray-900: #111827      /* Darkest text */
```

### Semantic Colors
```css
/* Status & Feedback */
--success: #10b981       /* Success states */
--warning: #f59e0b       /* Warning states */
--error: #ef4444         /* Error states */
--info: #3b82f6          /* Information states */
```

### Usage Guidelines
- **Primary Blue**: Main CTAs, navigation, brand elements
- **Accent Teal**: Secondary actions, highlights, progress indicators
- **Gray Scale**: Text hierarchy, backgrounds, borders
- **Semantic Colors**: Status messages, form validation, alerts

---

## Typography

### Font Stack
```css
/* System Font Stack for Performance & Reliability */
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Type Scale
```css
/* Fluid Typography with clamp() for responsive scaling */
--text-xs: clamp(0.75rem, 0.7rem + 0.15vw, 0.875rem);    /* 12-14px */
--text-sm: clamp(0.875rem, 0.8rem + 0.2vw, 1rem);        /* 14-16px */
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);    /* 16-18px */
--text-lg: clamp(1.125rem, 1.05rem + 0.3vw, 1.25rem);    /* 18-20px */
--text-xl: clamp(1.25rem, 1.15rem + 0.4vw, 1.5rem);      /* 20-24px */
--text-2xl: clamp(1.5rem, 1.35rem + 0.5vw, 1.875rem);    /* 24-30px */
--text-3xl: clamp(1.875rem, 1.6rem + 0.6vw, 2.25rem);    /* 30-36px */
--text-4xl: clamp(2.25rem, 1.9rem + 0.7vw, 2.75rem);     /* 36-44px */
--text-5xl: clamp(3rem, 2.4rem + 0.8vw, 3.5rem);         /* 48-56px */
--text-6xl: clamp(3.75rem, 3rem + 0.9vw, 4rem);          /* 60-64px */
```

### Line Heights
```css
--leading-tight: 1.1      /* Headlines */
--leading-snug: 1.2       /* Subheadings */
--leading-normal: 1.5     /* Body text */
--leading-relaxed: 1.6    /* Long-form content */
```

### Font Weights
```css
--font-light: 300         /* Light text */
--font-normal: 400        /* Regular text */
--font-medium: 500        /* Medium emphasis */
--font-semibold: 600      /* Strong emphasis */
--font-bold: 700          /* Headlines */
--font-extrabold: 800     /* Display text */
```

### Typography Classes
```css
.h1 { /* Page titles */
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  margin-bottom: 1em;
}

.h2 { /* Section headings */
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  margin-bottom: 0.8em;
}

.h3 { /* Subsection headings */
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  margin-bottom: 0.7em;
}

.p { /* Body text */
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
  margin-bottom: 1em;
}
```

---

## Spacing & Sizing

### Spacing Scale
```css
/* Dynamic spacing using em units for scalability */
--space-xs: 0.5em;        /* 8px */
--space-sm: 0.75em;       /* 12px */
--space-md: 1em;          /* 16px */
--space-lg: 1.5em;        /* 24px */
--space-xl: 2em;          /* 32px */
--space-2xl: 3em;         /* 48px */
--space-3xl: 4em;         /* 64px */
--space-4xl: 6em;         /* 96px */
--space-5xl: 8em;         /* 128px */
```

### Component Sizing
```css
/* Button Heights */
--btn-sm: 2.5em;          /* 40px */
--btn-md: 3em;            /* 48px */
--btn-lg: 3.5em;          /* 56px */

/* Card Padding */
--card-padding: 2em;      /* 32px */
--card-padding-sm: 1.5em; /* 24px */
--card-padding-lg: 3em;   /* 48px */

/* Section Spacing */
--section-padding: clamp(3em, 5vw, 4em);
--section-padding-sm: clamp(1.5em, 3vw, 2.5em);
--section-padding-lg: clamp(4em, 7vw, 5em);
```

### Border Radius
```css
--radius-sm: 0.25em;      /* 4px */
--radius-md: 0.5em;       /* 8px */
--radius-lg: 0.75em;      /* 12px */
--radius-xl: 1em;         /* 16px */
--radius-full: 50%;       /* Circular */
```

---

## Component Library

### Buttons
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-medium);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.75em 1.5em;
  border-radius: var(--radius-md);
  gap: 0.5em;
  font-size: var(--text-sm);
}

.btn-primary {
  background: var(--primary-500);
  color: white;
  box-shadow: 0 0.25em 0.5em rgba(28, 63, 170, 0.2);
}

.btn-accent {
  background: var(--accent-500);
  color: white;
  box-shadow: 0 0.25em 0.5em rgba(0, 179, 164, 0.2);
}

.btn-outline {
  background: transparent;
  color: var(--primary-500);
  border: 2px solid var(--primary-500);
}
```

### Cards
```css
.card {
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  box-shadow: 0 1em 2em rgba(0, 0, 0, 0.15);
  transform: translateY(-0.25em);
}
```

### Forms
```css
.form-input {
  width: 100%;
  padding: 0.625em 0.875em;
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(28, 63, 170, 0.1);
}
```

---

## Layout System

### Container System
```css
.container-custom {
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 1.5em;
  padding-right: 1.5em;
}

/* Responsive breakpoints */
@media (min-width: 640px) { padding: 0 2em; }
@media (min-width: 768px) { padding: 0 3em; }
@media (min-width: 1024px) { padding: 0 4em; }
@media (min-width: 1280px) { padding: 0 5em; }
```

### Grid System
```css
.grid-responsive {
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
}

.grid-responsive-sm {
  gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
}

.grid-responsive-lg {
  gap: 3em;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
}
```

### Flexbox Utilities
```css
.flex-responsive {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5em;
  align-items: center;
}

.stack {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  align-items: center;
}
```

---

## Animation & Motion

### Transition Timing
```css
--transition-fast: 0.15s;
--transition-normal: 0.3s;
--transition-slow: 0.5s;
--transition-ease: cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframe Animations
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    transform: translateY(20px); 
    opacity: 0; 
  }
  to { 
    transform: translateY(0); 
    opacity: 1; 
  }
}
```

### Motion Guidelines
- **Duration**: 0.3s for most interactions
- **Easing**: Use cubic-bezier(0.4, 0, 0.2, 1) for natural feel
- **Reduced Motion**: Respect `prefers-reduced-motion` media query
- **Purpose**: Enhance usability, not decoration

---

## Accessibility Guidelines

### Color Contrast
- **AA Standard**: 4.5:1 for normal text, 3:1 for large text
- **AAA Standard**: 7:1 for normal text, 4.5:1 for large text
- **Interactive Elements**: Minimum 3:1 contrast ratio

### Focus Management
```css
*:focus-visible {
  outline: 2px solid var(--primary-500);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

### Touch Targets
- **Minimum Size**: 44px × 44px
- **Recommended**: 48px × 48px
- **Spacing**: 8px minimum between touch targets

### Screen Reader Support
- Use semantic HTML elements
- Provide alt text for images
- Use ARIA labels where needed
- Ensure proper heading hierarchy

---

## Implementation Guide

### CSS Custom Properties
All design tokens are available as CSS custom properties for easy theming:

```css
:root {
  /* Colors */
  --primary-500: #1c3faa;
  --accent-500: #00b3a4;
  
  /* Typography */
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  
  /* Spacing */
  --space-md: 1em;
  
  /* Components */
  --btn-height: 3em;
  --card-padding: 2em;
}
```

### Tailwind Integration
The design system is built on Tailwind CSS with custom extensions:

```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { /* ... */ },
        accent: { /* ... */ }
      },
      fontSize: {
        // Fluid typography scale
      },
      spacing: {
        // Dynamic spacing system
      }
    }
  }
}
```

---

## Change Tracking

### Version History
- **v1.0.0** (2025-01-05): Initial design system implementation
  - Established color palette
  - Implemented fluid typography
  - Created component library
  - Added accessibility guidelines

### Change Log Template
```markdown
## [Version] - YYYY-MM-DD

### Added
- New component patterns
- Additional color variants
- Enhanced accessibility features

### Changed
- Updated typography scale
- Modified spacing system
- Refined component styles

### Deprecated
- Legacy component classes
- Outdated color values

### Removed
- Unused design tokens
- Deprecated components
```

### Migration Guide
When making breaking changes:

1. **Document Changes**: Update this file with version notes
2. **Provide Migration Path**: Show before/after examples
3. **Maintain Backwards Compatibility**: When possible, support both old and new patterns
4. **Test Thoroughly**: Ensure changes work across all components
5. **Communicate**: Notify team of changes and migration timeline

---

## Best Practices

### Do's
- ✅ Use semantic color names (primary, accent, success)
- ✅ Implement fluid typography for responsive design
- ✅ Follow the spacing scale consistently
- ✅ Test with real content and data
- ✅ Consider accessibility in all decisions
- ✅ Document component usage and variations

### Don'ts
- ❌ Use hard-coded pixel values for spacing
- ❌ Create one-off color variations
- ❌ Ignore accessibility requirements
- ❌ Skip responsive design considerations
- ❌ Use decorative animations without purpose
- ❌ Forget to test with actual content

---

## Resources

### Tools
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color Palette Generator](https://coolors.co/)
- [Typography Scale Calculator](https://type-scale.com/)
- [Accessibility Testing](https://www.w3.org/WAI/ER/tools/)

### References
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Material Design System](https://material.io/design)
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/)

---

*This design system is a living document. Please contribute improvements and report issues to maintain consistency and quality across the Global Pilot Academy digital experience.*
