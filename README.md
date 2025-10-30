# Modern Portfolio Website

A production-ready, single-page portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, accessibility compliance, and full responsive design.

## Features

- **Single-page layout** with smooth scroll navigation
- **Hero section** with vertical timeline (2005-present) and profile image
- **Contributions section** with interactive cards and modals
- **Experience section** with career timeline and detailed modals
- **Skills carousel** with drag, keyboard, and button navigation
- **Contact form** with client-side validation
- **Fully responsive** - mobile-first design
- **Accessible** - WCAG 2.1 AA compliant with keyboard navigation
- **Animations** - Framer Motion with `prefers-reduced-motion` support
- **Lightweight** - Optimized bundle size

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS 3
- Framer Motion
- Vite
- Lucide React (icons)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Type Checking

```bash
npm run typecheck
```

## Customization

### 1. Replace Placeholder Image

The hero section currently uses a placeholder image. Replace it with your photo:

**Location:** `/public/placeholder-person.png`

**Recommended specifications:**
- Format: PNG with transparent background (or WebP for better performance)
- Dimensions: 800x1000px (4:5 portrait ratio)
- File size: < 200KB (optimized)
- Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to optimize

**For better performance, provide multiple formats:**

```html
<!-- Example: Update Hero.jsx -->
<picture>
  <source srcset="/profile.webp" type="image/webp" />
  <source srcset="/profile.png" type="image/png" />
  <img src="/profile.png" alt="Your Name" />
</picture>
```

### 2. Update Personal Information

Edit the following files:

- **Hero section:** `src/components/Hero.jsx`
  - Update name, title, bio
  - Modify CTA buttons (Download CV link, etc.)

- **Timeline data:** `src/data/timeline.js`
  - Customize your journey from 2005 to present

- **Contributions:** `src/data/contributions.js`
  - Add your open-source projects and contributions
  - Update links to actual repositories

- **Experience:** `src/data/experiences.js`
  - Add your work history with achievements

- **Skills:** `src/data/skills.js`
  - Update with your actual skills and proficiency levels

- **Footer/Contact:** `src/components/Footer.jsx`
  - Update email address
  - Update social media links (GitHub, LinkedIn, Twitter)

### 3. Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  accent: {
    400: '#your-color',
    500: '#your-color',
    600: '#your-color',
    700: '#your-color',
  },
}
```

### 4. Add Google Fonts

Add to `index.html` in the `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

Then update `tailwind.config.js`:

```js
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
}
```

## Contact Form Integration

The contact form currently simulates submission. To connect it to a real email service:

### Option 1: Email Service (SendGrid, AWS SES, Mailgun)

Update `src/components/Footer.jsx` in the `handleSubmit` function:

```js
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    alert('An error occurred. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

### Option 2: Formspree (No Backend Required)

```js
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  onSubmit={handleSubmit}
>
```

### Option 3: Netlify Forms

Add `netlify` attribute to form:

```jsx
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  {/* rest of form fields */}
</form>
```

## Accessibility Checklist

- ✅ Semantic HTML (nav, main, section, footer)
- ✅ ARIA labels and roles for modals and navigation
- ✅ Keyboard navigation (Tab, Escape, Arrow keys)
- ✅ Focus states visible on all interactive elements
- ✅ Alt text for images
- ✅ Color contrast ratios meet WCAG AA standards
- ✅ Respects `prefers-reduced-motion`
- ✅ Skip links for screen readers (can be added)
- ✅ Form validation with error messages

## Performance Optimization

- Images use `loading="lazy"` for lazy loading
- Framer Motion animations respect reduced motion preferences
- Tailwind CSS purges unused styles in production
- Vite optimizes bundle splitting automatically

### Additional Optimizations

1. **Enable compression** in your hosting provider
2. **Use CDN** for static assets
3. **Enable caching** headers
4. **Consider route-based code splitting** for very large sites

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Testing Checklist

### Desktop
- [ ] Navigation links scroll to correct sections
- [ ] Navbar shows active section on scroll
- [ ] Contribution cards open modals with correct content
- [ ] Experience cards open modals with correct content
- [ ] Skills carousel navigation (left/right buttons, dots, keyboard arrows)
- [ ] Contact form validation works
- [ ] All hover effects work
- [ ] Modal closes with ESC key and overlay click

### Mobile
- [ ] Hero section stacks correctly
- [ ] Hamburger menu opens and closes
- [ ] Timeline displays in condensed format
- [ ] Cards display in single column
- [ ] Carousel is swipeable
- [ ] Contact form is usable
- [ ] All touch interactions work

### Accessibility
- [ ] Tab navigation works throughout site
- [ ] Focus states are visible
- [ ] Screen reader announces sections correctly
- [ ] Modal traps focus correctly
- [ ] Forms have proper labels

## Deployment

### Netlify

```bash
npm run build
# Deploy the `dist` folder
```

### Vercel

```bash
npm run build
# Deploy the `dist` folder
```

### GitHub Pages

```bash
npm run build
# Configure GitHub Pages to serve from `dist` folder
```

## Project Structure

```
/portfolio
├── public/
│   └── placeholder-person.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Timeline.jsx
│   │   ├── Contributions.jsx
│   │   ├── ContributionCard.jsx
│   │   ├── ContributionModal.jsx
│   │   ├── Experience.jsx
│   │   ├── ExperienceCard.jsx
│   │   ├── ExperienceModal.jsx
│   │   ├── SkillsCarousel.jsx
│   │   ├── SkillCard.jsx
│   │   ├── Footer.jsx
│   │   └── ModalWrapper.jsx
│   ├── data/
│   │   ├── timeline.js
│   │   ├── contributions.js
│   │   ├── experiences.js
│   │   └── skills.js
│   ├── hooks/
│   │   ├── useScrollSpy.js
│   │   ├── useLockBodyScroll.js
│   │   ├── usePrefersReducedMotion.js
│   │   └── useIntersectionObserver.js
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── package.json
└── README.md
```

## License

MIT

## Credits

Built with modern web technologies for optimal performance and user experience.
