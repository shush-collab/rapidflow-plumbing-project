# Custom Animated Components

This folder contains pre-built animated components using **Framer Motion** that you can use throughout your RapidFlow Plumbing website.

## Available Components

### 1. AnimatedServiceCard

An animated card component perfect for displaying services with entrance animations and hover effects.

**Usage:**
```tsx
import AnimatedServiceCard from '@/components/custom/AnimatedServiceCard';
import { Droplet } from 'lucide-react';

<AnimatedServiceCard 
  icon={<Droplet className="h-10 w-10 text-accent" />}
  title="Emergency Leak Repair"
  description="Fast response to stop leaks and prevent water damage."
  delay={0.1}
/>
```

**Props:**
- `icon`: React node (icon element)
- `title`: string
- `description`: string
- `delay`: number (optional, default: 0)

---

### 2. MagneticButton

A button that smoothly follows your cursor with magnetic attraction effect.

**Usage:**
```tsx
import MagneticButton from '@/components/custom/MagneticButton';

<MagneticButton 
  variant="default" 
  size="lg"
  strength={0.5}
  onClick={() => console.log('clicked')}
>
  Call Now
</MagneticButton>
```

**Props:**
- All standard Button props
- `strength`: number (0-1, default: 0.3) - Controls magnetic pull strength
- `variant`: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
- `size`: "default" | "sm" | "lg" | "icon"

---

### 3. FadeIn

A wrapper component for adding fade-in animations to any element.

**Usage:**
```tsx
import FadeIn from '@/components/custom/FadeIn';

<FadeIn direction="up" delay={0.2}>
  <h1>This text will fade in from below</h1>
</FadeIn>
```

**Props:**
- `children`: React node
- `delay`: number (optional, default: 0)
- `direction`: 'up' | 'down' | 'left' | 'right' (default: 'up')
- `className`: string (optional)

---

### 4. AnimatedTestimonial

An animated testimonial card with staggered star animations.

**Usage:**
```tsx
import AnimatedTestimonial from '@/components/custom/AnimatedTestimonial';

<AnimatedTestimonial 
  rating={5}
  review="Quick response to our emergency leak. Highly recommend!"
  author="Sarah M."
  location="Downtown"
  delay={0.1}
/>
```

**Props:**
- `rating`: number (1-5)
- `review`: string
- `author`: string
- `location`: string
- `delay`: number (optional, default: 0)

---

### 5. FloatingIcon

Adds a subtle floating animation to icons or elements.

**Usage:**
```tsx
import FloatingIcon from '@/components/custom/FloatingIcon';
import { Wrench } from 'lucide-react';

<FloatingIcon duration={3} delay={0}>
  <Wrench className="h-10 w-10 text-accent" />
</FloatingIcon>
```

**Props:**
- `children`: React node
- `duration`: number (seconds, default: 3)
- `delay`: number (seconds, default: 0)

---

## CSS Utility Classes

The following utility classes are available in your CSS:

### Gradient & Effects
- `.gradient-text` - Animated gradient text
- `.glass` - Glassmorphism effect
- `.animated-gradient` - Animated gradient background
- `.glow` - Constant glow effect
- `.hover-glow` - Glow on hover
- `.shimmer` - Shimmer animation
- `.float` - Floating animation
- `.pulse-glow` - Pulsing glow effect

### Example Usage:
```tsx
<h1 className="gradient-text text-4xl font-bold">
  RapidFlow Plumbing
</h1>

<div className="glass p-6 rounded-lg">
  Glass card content
</div>

<Button className="hover-glow">
  Hover me
</Button>
```

---

## Integration Example

Here's how to use these components in your Index.tsx:

```tsx
import AnimatedServiceCard from '@/components/custom/AnimatedServiceCard';
import MagneticButton from '@/components/custom/MagneticButton';
import FadeIn from '@/components/custom/FadeIn';
import AnimatedTestimonial from '@/components/custom/AnimatedTestimonial';
import FloatingIcon from '@/components/custom/FloatingIcon';
import { Droplet, Phone } from 'lucide-react';

// In your Hero section:
<FadeIn direction="up">
  <h1 className="gradient-text text-5xl font-bold">
    Emergency Plumbing, 24/7.
  </h1>
</FadeIn>

// Replace regular buttons with magnetic buttons:
<MagneticButton size="lg" strength={0.4}>
  <Phone className="h-5 w-5" />
  Call Now
</MagneticButton>

// In your services section:
<AnimatedServiceCard 
  icon={<FloatingIcon><Droplet className="h-10 w-10 text-accent" /></FloatingIcon>}
  title="Emergency Leak Repair"
  description="Fast response to stop leaks and prevent water damage."
  delay={0}
/>

// In your reviews section:
<AnimatedTestimonial 
  rating={5}
  review="Quick response to our emergency leak. The plumber was professional!"
  author="Sarah M."
  location="Downtown"
  delay={0.1}
/>
```

---

## Tips

1. **Stagger Delays**: For lists of items, add incremental delays (0, 0.1, 0.2, etc.)
2. **Performance**: Use animations sparingly on mobile devices
3. **Accessibility**: Respect `prefers-reduced-motion` for users who need it
4. **Testing**: Test all animations across different browsers

---

## Next Steps

1. Replace existing cards with `AnimatedServiceCard`
2. Replace CTA buttons with `MagneticButton`
3. Wrap sections with `FadeIn` for smooth entrance
4. Replace testimonials with `AnimatedTestimonial`
5. Add `FloatingIcon` to service icons
6. Use CSS utilities for special effects

Enjoy your enhanced, interactive website! 🚀
