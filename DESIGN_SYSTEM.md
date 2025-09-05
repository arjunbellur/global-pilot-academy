# Global Pilot Academy - Design System

## 🎨 Brand Colors

### Primary Palette
- **Primary Blue**: `#1c3faa` - Main brand color for CTAs and key elements
- **Accent Teal**: `#00b3a4` - Secondary accent for highlights and success states
- **Gray Scale**: Full range from `#f9fafb` to `#111827` for text and backgrounds

### Usage Guidelines
- Use Primary Blue for main CTAs, navigation, and brand elements
- Use Accent Teal for success states, highlights, and secondary actions
- Maintain 4.5:1 contrast ratio minimum for text readability

## 📝 Typography Scale

### Font Stack
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Fluid Typography (using clamp())
- **H1**: `clamp(1.5rem, 2.5vw, 2.25rem)` - Page titles
- **H2**: `clamp(1.25rem, 2vw, 1.875rem)` - Section headers
- **H3**: `clamp(1.125rem, 1.5vw, 1.5rem)` - Subsection headers
- **Body**: `clamp(0.875rem, 1vw, 1rem)` - Main content
- **Small**: `clamp(0.75rem, 0.8vw, 0.875rem)` - Supporting text

## 🧩 Component Library

### Buttons
- **Primary**: Blue background, white text, 0.75em padding
- **Secondary**: White background, blue border, blue text
- **Accent**: Teal background, white text
- **Outline**: Transparent background, colored border

### Cards
- **Base**: White background, subtle shadow, 1em border radius
- **Hover**: Elevated shadow, slight transform
- **Content**: 2em padding, proper spacing

### Navigation
- **Desktop**: Horizontal layout with hover states
- **Mobile**: Hamburger menu with slide-out panel
- **Active States**: Clear visual feedback

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Standards

- **Color Contrast**: WCAG 2.1 AA compliant (4.5:1 minimum)
- **Focus States**: Visible outline with 2px solid border
- **Touch Targets**: Minimum 44x44px for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Semantic HTML and ARIA labels

## 🎭 Animation Guidelines

- **Duration**: 300ms for micro-interactions, 600ms for page transitions
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` for natural motion
- **Reduced Motion**: Respect `prefers-reduced-motion` media query

## 📐 Spacing System

Using `em` units for scalable spacing:
- **xs**: 0.25em
- **sm**: 0.5em
- **md**: 1em
- **lg**: 1.5em
- **xl**: 2em
- **2xl**: 3em

## 🔧 Implementation Notes

- Use Tailwind CSS utility classes for consistency
- Implement custom CSS for complex components
- Maintain component reusability across pages
- Test across all breakpoints and devices
