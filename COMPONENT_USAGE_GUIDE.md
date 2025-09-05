# Component Usage Guide

## Overview
This guide provides practical examples and usage patterns for the Global Pilot Academy design system components. All components use standardized design tokens for consistent styling and easy customization.

## Table of Contents
1. [Typography Components](#typography-components)
2. [Button Components](#button-components)
3. [Card Components](#card-components)
4. [Form Components](#form-components)
5. [Layout Components](#layout-components)
6. [Navigation Components](#navigation-components)
7. [Animation Components](#animation-components)
8. [Utility Classes](#utility-classes)

---

## Typography Components

### Headings
```html
<!-- Page Title -->
<h1 class="h1">Become a Pilot in Tampa (KVDF)</h1>

<!-- Section Headings -->
<h2 class="h2">Programs Overview</h2>
<h3 class="h3">Private Pilot License</h3>
<h4 class="h4">Training Requirements</h4>
```

### Body Text
```html
<!-- Standard paragraph -->
<p class="p">Structured, hands-on training from Private Pilot to Airline Track with proven graduate success.</p>

<!-- Small text -->
<p class="p-sm">Additional information or captions</p>
```

### Responsive Text
```html
<!-- Responsive text that scales with viewport -->
<p class="text-responsive">Main content text</p>
<p class="text-responsive-sm">Smaller responsive text</p>
<p class="text-responsive-lg">Larger responsive text</p>
```

---

## Button Components

### Primary Buttons
```html
<!-- Main call-to-action -->
<button class="btn btn-primary">Enroll Now</button>

<!-- With icon -->
<button class="btn btn-primary">
  Book Discovery Flight
  <ArrowRight className="w-4 h-4" />
</button>
```

### Accent Buttons
```html
<!-- Secondary actions -->
<button class="btn btn-accent">Get Started</button>
<button class="btn btn-accent">Learn More</button>
```

### Outline Buttons
```html
<!-- Tertiary actions -->
<button class="btn btn-outline">Schedule Tour</button>
<button class="btn btn-outline">Download Brochure</button>
```

### Button States
```html
<!-- Disabled state -->
<button class="btn btn-primary" disabled>Processing...</button>

<!-- Loading state -->
<button class="btn btn-primary">
  <LoadingSpinner className="w-4 h-4" />
  Submitting...
</button>
```

---

## Card Components

### Basic Card
```html
<div class="card">
  <div class="card-content">
    <h3 class="h3">Program Title</h3>
    <p class="p-sm">Program description goes here.</p>
    <button class="btn btn-primary">Learn More</button>
  </div>
</div>
```

### Card with Hover Effect
```html
<div class="card card-hover">
  <div class="card-content">
    <h3 class="h3">Interactive Card</h3>
    <p class="p-sm">This card has hover animations.</p>
  </div>
</div>
```

### Card Padding Variants
```html
<!-- Small padding -->
<div class="card">
  <div class="card-content-sm">
    <p class="p-sm">Compact content</p>
  </div>
</div>

<!-- Large padding -->
<div class="card">
  <div class="card-content-lg">
    <h3 class="h3">Spacious Content</h3>
    <p class="p">More room for content and imagery.</p>
  </div>
</div>
```

---

## Form Components

### Basic Form
```html
<form class="stack">
  <div class="form-group">
    <label class="form-label" for="name">Full Name</label>
    <input 
      type="text" 
      id="name" 
      class="form-input" 
      placeholder="Enter your full name"
      required
    />
  </div>
  
  <div class="form-group">
    <label class="form-label" for="email">Email Address</label>
    <input 
      type="email" 
      id="email" 
      class="form-input" 
      placeholder="your@email.com"
      required
    />
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### Form with Validation States
```html
<!-- Error state -->
<div class="form-group">
  <label class="form-label" for="phone">Phone Number</label>
  <input 
    type="tel" 
    id="phone" 
    class="form-input border-error" 
    placeholder="(555) 123-4567"
  />
  <p class="text-error text-sm mt-1">Please enter a valid phone number</p>
</div>

<!-- Success state -->
<div class="form-group">
  <label class="form-label" for="zip">ZIP Code</label>
  <input 
    type="text" 
    id="zip" 
    class="form-input border-success" 
    placeholder="12345"
  />
  <p class="text-success text-sm mt-1">✓ Valid ZIP code</p>
</div>
```

---

## Layout Components

### Container
```html
<!-- Standard container with responsive padding -->
<div class="container-custom">
  <h1 class="h1">Page Content</h1>
  <p class="p">Your content goes here...</p>
</div>
```

### Sections
```html
<!-- Standard section -->
<section class="section">
  <div class="container-custom">
    <h2 class="h2">Section Title</h2>
    <p class="p">Section content...</p>
  </div>
</section>

<!-- Small section -->
<section class="section-sm bg-gray-50">
  <div class="container-custom">
    <p class="p-sm">Compact section content</p>
  </div>
</section>

<!-- Large section -->
<section class="section-lg">
  <div class="container-custom">
    <h2 class="h2">Hero Section</h2>
    <p class="p text-responsive-lg">Prominent content area</p>
  </div>
</section>
```

### Grid Layouts
```html
<!-- Responsive grid -->
<div class="grid-responsive">
  <div class="card">
    <div class="card-content">
      <h3 class="h3">Card 1</h3>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <h3 class="h3">Card 2</h3>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <h3 class="h3">Card 3</h3>
    </div>
  </div>
</div>

<!-- Small grid -->
<div class="grid-responsive-sm">
  <div class="text-center">
    <h4 class="h4">Feature 1</h4>
  </div>
  <div class="text-center">
    <h4 class="h4">Feature 2</h4>
  </div>
</div>
```

### Flexbox Layouts
```html
<!-- Horizontal layout -->
<div class="flex-responsive">
  <div class="flex-1">
    <h3 class="h3">Main Content</h3>
  </div>
  <div class="flex-shrink-0">
    <button class="btn btn-primary">Action</button>
  </div>
</div>

<!-- Vertical stack -->
<div class="stack">
  <h2 class="h2">Stacked Content</h2>
  <p class="p">First item</p>
  <p class="p">Second item</p>
  <p class="p">Third item</p>
</div>

<!-- Cluster layout -->
<div class="cluster">
  <span class="text-sm">Tag 1</span>
  <span class="text-sm">Tag 2</span>
  <span class="text-sm">Tag 3</span>
  <button class="btn btn-outline btn-sm">Add Tag</button>
</div>
```

---

## Navigation Components

### Navigation Links
```html
<nav class="flex-responsive">
  <a href="/programs" class="nav-link">Programs</a>
  <a href="/pricing" class="nav-link">Pricing</a>
  <a href="/about" class="nav-link nav-link-active">About</a>
  <a href="/contact" class="nav-link">Contact</a>
</nav>
```

### Skip Link (Accessibility)
```html
<!-- Always include for accessibility -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

---

## Animation Components

### Fade Animations
```html
<!-- Fade in on load -->
<div class="animate-fade-in">
  <h1 class="h1">Welcome to GPA</h1>
</div>
```

### Slide Animations
```html
<!-- Slide up -->
<div class="animate-slide-up">
  <p class="p">Content slides up from bottom</p>
</div>

<!-- Slide in from left -->
<div class="animate-slide-in-left">
  <h3 class="h3">Left slide animation</h3>
</div>

<!-- Slide in from right -->
<div class="animate-slide-in-right">
  <h3 class="h3">Right slide animation</h3>
</div>
```

### Staggered Animations
```html
<!-- Multiple elements with delays -->
<div class="grid-responsive">
  <div class="card animate-fade-in" style="animation-delay: 0.1s;">
    <div class="card-content">Card 1</div>
  </div>
  <div class="card animate-fade-in" style="animation-delay: 0.2s;">
    <div class="card-content">Card 2</div>
  </div>
  <div class="card animate-fade-in" style="animation-delay: 0.3s;">
    <div class="card-content">Card 3</div>
  </div>
</div>
```

---

## Utility Classes

### Spacing Utilities
```html
<!-- Padding -->
<div class="p-md">Medium padding</div>
<div class="p-lg">Large padding</div>

<!-- Margin -->
<div class="m-sm">Small margin</div>
<div class="m-xl">Extra large margin</div>
```

### Color Utilities
```html
<!-- Text colors -->
<p class="text-primary">Primary color text</p>
<p class="text-accent">Accent color text</p>
<p class="text-success">Success message</p>
<p class="text-warning">Warning message</p>
<p class="text-error">Error message</p>

<!-- Background colors -->
<div class="bg-primary text-white">Primary background</div>
<div class="bg-accent text-white">Accent background</div>
```

### Border Radius
```html
<div class="rounded-sm">Small radius</div>
<div class="rounded-md">Medium radius</div>
<div class="rounded-lg">Large radius</div>
<div class="rounded-full">Fully rounded</div>
```

### Shadows
```html
<div class="shadow-sm">Small shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-primary">Primary brand shadow</div>
<div class="shadow-accent">Accent brand shadow</div>
```

### Transitions
```html
<div class="transition-fast">Fast transition</div>
<div class="transition-normal">Normal transition</div>
<div class="transition-slow">Slow transition</div>
<div class="transition-ease">Eased transition</div>
```

---

## Best Practices

### Do's
- ✅ Use semantic HTML elements (`<h1>`, `<h2>`, `<button>`, etc.)
- ✅ Include proper ARIA labels for accessibility
- ✅ Use the design system classes consistently
- ✅ Test with real content and data
- ✅ Consider mobile-first responsive design
- ✅ Use appropriate animation timing

### Don'ts
- ❌ Mix design system classes with custom CSS
- ❌ Override design tokens with hard-coded values
- ❌ Skip accessibility considerations
- ❌ Use animations without purpose
- ❌ Ignore responsive breakpoints
- ❌ Create one-off component variations

### Accessibility Checklist
- [ ] All interactive elements have focus states
- [ ] Color contrast meets WCAG AA standards
- [ ] Touch targets are at least 44px
- [ ] Screen reader content is properly labeled
- [ ] Keyboard navigation works correctly
- [ ] Reduced motion preferences are respected

---

## Customization

### Modifying Design Tokens
To customize the design system, edit the values in `src/styles/design-tokens.css`:

```css
:root {
  /* Change primary color */
  --color-primary-500: #your-brand-color;
  
  /* Adjust spacing */
  --space-md: 1.5em;
  
  /* Modify typography */
  --font-size-base: clamp(1.1rem, 1rem + 0.3vw, 1.2rem);
}
```

### Creating Custom Components
When creating new components, follow the established patterns:

```css
/* Custom component using design tokens */
.custom-component {
  background-color: var(--color-primary-500);
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  transition: all var(--duration-normal) var(--ease-in-out);
}
```

---

*This component guide is part of the Global Pilot Academy design system. For questions or contributions, please refer to the main DESIGN_SYSTEM.md documentation.*
