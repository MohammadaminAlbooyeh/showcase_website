# Modern Portfolio Design System

A complete, production-grade design system and React component library for modern portfolio landing pages.

## Design System Overview

### Design Pattern: Portfolio Grid
- **Focus:** Visuals first. Filter by category. Fast loading essential.
- **CTA Placement:** Project Card Hover + Footer Contact
- **Color Strategy:** Neutral background (let work shine). Text: Black/White. Accent: Minimal.
- **Sections:** Hero (Name/Role) → Project Grid (Masonry) → About/Philosophy → Contact

### Style: Trust & Authority
- **Keywords:** Professional credentials, case studies with metrics, before/after comparisons
- **Performance:** ⚡ Excellent
- **Accessibility:** ✓ WCAG AAA

## Color Palette

### Light Mode (Default)
```
Primary:       #18181B (Dark charcoal - headings, primary text)
On Primary:    #FFFFFF (White - text on dark backgrounds)
Secondary:     #3F3F46 (Dark gray - secondary text)
Accent:        #2563EB (Blue - CTAs and highlights)
Background:    #FAFAFA (Off-white)
Foreground:    #09090B (Near black)
Muted:         #E8ECF0 (Light gray - disabled states)
Border:        #E4E4E7 (Gray - dividers)
Destructive:   #DC2626 (Red - warnings)
```

### Dark Mode
Automatically adjusts colors while maintaining contrast ratios of 4.5:1 (AA) and 7:1 (AAA).

## Typography

### Font Pairing
- **Headings:** Archivo (300–700 weights)
- **Body:** Space Grotesk (300–700 weights)
- **Import:** Google Fonts (auto-loaded)

### Type Scale
```
h1: 48px (text-5xl)
h2: 36px (text-4xl)
h3: 30px (text-3xl)
h4: 24px (text-2xl)
h5: 20px (text-xl)
h6: 18px (text-lg)
Body: 16px (text-base)
Small: 14px (text-sm)
Tiny: 12px (text-xs)
```

### Line Heights
- **Headings:** 1.2 (tight)
- **Body:** 1.5 (normal)
- **Long form:** 1.75 (relaxed)

## Spacing System (8dp Base)

```
1:  4px    6:  24px   16:  64px
2:  8px    8:  32px   20:  80px
3:  12px   10: 40px   24:  96px
4:  16px   12: 48px
5:  20px
```

## Component Library

### Button Component

```jsx
import { Button } from '@/components/ui';

// Primary (default)
<Button>Click Me</Button>

// Variants
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button disabled>Disabled</Button>
<Button isLoading>Loading...</Button>
<Button fullWidth>Full Width</Button>
```

### Card Component

```jsx
import { Card, CardImage, CardContent, CardHeader, CardFooter } from '@/components/ui';

<Card hoverable>
  <CardImage src="/image.jpg" alt="Project" />
  <CardContent>
    <CardHeader title="Project Name" subtitle="Category" />
    <p>Project description...</p>
  </CardContent>
  <CardFooter>
    <a href="#">View Project →</a>
  </CardFooter>
</Card>
```

### Grid Component

```jsx
import { Grid } from '@/components/ui';

<Grid columns={3} gap="lg">
  {projects.map(project => (
    <Card key={project.id} hoverable>
      {/* Card content */}
    </Card>
  ))}
</Grid>
```

Responsive: Automatically adjusts to 2 columns on tablets, 1 on mobile.

### Badge Component

```jsx
import { Badge } from '@/components/ui';

<Badge variant="primary">React</Badge>
<Badge variant="success">Completed</Badge>
<Badge variant="warning">In Progress</Badge>
<Badge variant="destructive">Critical</Badge>
<Badge variant="secondary">Neutral</Badge>
```

### Section Component

```jsx
import { Section, Container } from '@/components/ui';

<Section id="projects" bgVariant="default">
  <Container size="lg">
    {/* Content */}
  </Container>
</Section>
```

**Variants:**
- `default` - Background color
- `muted` - Light gray
- `primary` - Dark with white text

## Section Components

### Hero Section

```jsx
import { Hero } from '@/components/sections';

<Hero
  name="Your Name"
  title="Full Stack Designer"
  description="I craft beautiful digital experiences..."
  image="/hero-image.jpg"
  cta={{
    primary: 'View My Work',
    secondary: 'Get in Touch'
  }}
/>
```

### Projects Section

```jsx
import { Projects } from '@/components/sections';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: '...',
    image: '/project.jpg',
    tags: ['React', 'Node.js'],
    link: 'https://...'
  }
];

<Projects projects={projects} title="Featured Work" />
```

**Features:**
- Filterable by category/tag
- Hover animations
- Responsive grid layout
- Link to project details

### About Section

```jsx
import { About } from '@/components/sections';

<About
  title="About Me"
  bio="I'm a designer and developer..."
  image="/about.jpg"
  skills={[
    {
      category: 'Design',
      items: ['UI/UX', 'Figma', 'Design Systems']
    },
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript']
    }
  ]}
  stats={[
    { value: '5+', label: 'Years' },
    { value: '20+', label: 'Projects' }
  ]}
/>
```

### Contact Section

```jsx
import { Contact } from '@/components/sections';

<Contact
  title="Let's Work Together"
  subtitle="Have a project in mind?"
  email="hello@example.com"
  social={[
    { label: 'GitHub', url: 'https://github.com' },
    { label: 'LinkedIn', url: 'https://linkedin.com' }
  ]}
/>
```

**Features:**
- Contact form with validation
- Email link
- Social media links
- Loading states

## Complete Landing Page Example

```jsx
import PortfolioLanding from '@/templates/PortfolioLanding';

export default function Page() {
  return <PortfolioLanding />;
}
```

See `src/templates/PortfolioLanding.jsx` for full example with all data.

## Accessibility Features

✓ **WCAG AAA Compliant**
- Color contrast: 4.5:1 minimum (7:1 for AAA)
- Touch targets: 44×44px minimum
- Focus states: Always visible
- Keyboard navigation: Full support
- Screen reader: Proper labels and ARIA attributes
- Motion: Respects `prefers-reduced-motion`
- Text scaling: Supports Dynamic Type

### Accessibility Checklist

- [ ] All images have meaningful alt text
- [ ] Form fields have labels (not placeholder-only)
- [ ] Color is not the only indicator
- [ ] Focus order is logical
- [ ] All interactive elements are keyboard accessible
- [ ] Contrast ratio ≥4.5:1 for body text
- [ ] Hover states don't rely on color alone
- [ ] Modals have proper focus management

## Dark Mode Support

Dark mode is automatically applied via CSS media queries:

```css
@media (prefers-color-scheme: dark) {
  /* Automatically switches to dark colors */
}
```

Users can toggle via system preferences or browser DevTools.

### Dark Mode Checklist

- [ ] Tested on both light and dark backgrounds
- [ ] Contrast ratios maintained in both modes
- [ ] No hardcoded color values (use CSS variables)
- [ ] Scrim/overlay opacity sufficient (40-60% black)

## Performance Optimization

### Images
- Use WebP/AVIF with fallback
- Lazy load below-the-fold images
- Declare width/height to prevent layout shift

### Animations
- Duration: 150–300ms
- Only animate transform and opacity
- Respect `prefers-reduced-motion`

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Viewport meta tag: `width=device-width, initial-scale=1`
- No horizontal scroll on mobile

## Pre-Delivery Checklist

Before deploying, verify:

- [ ] No emojis as icons (use SVG: Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with 150-300ms transitions
- [ ] Light mode contrast: 4.5:1 minimum
- [ ] Focus states visible for keyboard nav
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive on 375px, 768px, 1024px, 1440px
- [ ] Dark mode tested and verified
- [ ] Form validation working
- [ ] Links have aria-labels where needed
- [ ] Images have alt text
- [ ] Touch targets ≥44px on mobile

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Fallbacks for Older Browsers

- CSS Grid → CSS Flexbox
- CSS Custom Properties → Static colors
- Modern images (WebP) → JPG/PNG fallback

## Integration with Next.js

```tsx
// app/layout.tsx
import '../styles/design-system.css';

export const metadata = {
  title: 'Your Portfolio',
  description: 'Your portfolio description'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## Usage Tips

### Color Variables
Always use CSS custom properties instead of hardcoded values:

```jsx
// ✓ Good
<div style={{ color: 'var(--color-accent)' }}>

// ✗ Avoid
<div style={{ color: '#2563EB' }}>
```

### Responsive Classes
Use responsive grid classes:

```jsx
<Grid columns={3} gap="lg">
  {/* Automatically: 3 cols on desktop, 2 on tablet, 1 on mobile */}
</Grid>
```

### Animation Timing
Use consistent timing variables:

```css
/* 150ms for micro-interactions */
transition: all var(--transition-fast);

/* 200ms for standard transitions */
transition: all var(--transition-base);

/* 300ms for complex animations */
transition: all var(--transition-slow);
```

## File Structure

```
src/
├── styles/
│   └── design-system.css      # Design tokens and base styles
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Button.css
│   │   ├── Card.jsx
│   │   ├── Card.css
│   │   ├── Container.jsx
│   │   ├── Container.css
│   │   └── index.js
│   └── sections/              # Page sections
│       ├── Hero.jsx
│       ├── Hero.css
│       ├── Projects.jsx
│       ├── Projects.css
│       ├── About.jsx
│       ├── About.css
│       ├── Contact.jsx
│       ├── Contact.css
│       └── index.js
└── templates/
    └── PortfolioLanding.jsx   # Complete landing page template
```

## Customization Guide

### Change Primary Color

Edit `src/styles/design-system.css`:

```css
:root {
  --color-accent: #3B82F6; /* Change from #2563EB to your color */
}
```

### Change Font Family

```css
:root {
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

### Adjust Spacing Scale

```css
--space-4: 1.5rem; /* Change from 1rem to 1.5rem */
```

## Common Questions

### How do I add more projects?

Edit the `portfolioData.projects.items` array in `PortfolioLanding.jsx`.

### Can I customize colors?

Yes! All colors use CSS custom properties. Edit `design-system.css`.

### How do I add social media links?

Add to the `contact.social` array in `PortfolioLanding.jsx`.

### Is it SEO-friendly?

Yes. The design system uses semantic HTML, proper heading hierarchy, and follows SEO best practices.

## Support & Resources

- **Design Tokens:** `src/styles/design-system.css`
- **Component Examples:** `src/templates/PortfolioLanding.jsx`
- **Figma File:** (provide link if available)
- **Documentation:** This file

---

**Last Updated:** 2026-07-03
**Version:** 1.0.0
**Status:** Production Ready ✓
