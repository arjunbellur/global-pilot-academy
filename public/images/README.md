# Image Assets for Global Pilot Academy

## Required Images

### Hero Section
- `hero-bg.jpg` - Background image for hero section (1920x1080px recommended)
- Alternative: Use CSS gradient (currently implemented)

### Testimonials
- `testimonial-1.jpg` - Sarah Johnson profile photo
- `testimonial-2.jpg` - Michael Chen profile photo  
- `testimonial-3.jpg` - Emily Rodriguez profile photo
- Alternative: Use initials in colored circles (currently implemented)

### Aircraft Fleet
- `c172.jpg` - Cessna 172 image
- `arrow.jpg` - Piper Arrow image
- `seneca.jpg` - Piper Seneca image
- `c152.jpg` - Cessna 152 image

## Image Optimization Guidelines

1. **Format**: Use WebP for modern browsers, JPEG fallback
2. **Sizing**: Provide multiple sizes using `srcset`
3. **Lazy Loading**: Implement for images below the fold
4. **Alt Text**: Descriptive alt text for accessibility
5. **Compression**: Optimize for web (80-90% quality)

## Current Implementation

The site currently uses:
- CSS gradients for hero background (no image needed)
- Initials in colored circles for testimonials (no images needed)
- Placeholder content for aircraft images

## Adding Images

When adding images:
1. Place in appropriate subdirectory
2. Use descriptive filenames
3. Optimize file size
4. Update component references
5. Add proper alt text
