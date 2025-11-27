# Component Libraries Guide

This guide shows you how to import and use components from **ReactBits** and **21st.dev** in your RapidFlow Plumbing project.

---

## 🎨 ReactBits Components

[ReactBits](https://reactbits.dev/) provides copy-paste React components built with Tailwind CSS and Framer Motion.

### How to Use ReactBits Components

1. **Visit ReactBits**: Go to [https://reactbits.dev/](https://reactbits.dev/)
2. **Browse Components**: Find the component you want (e.g., animated cards, hero sections, testimonials)
3. **Copy the Code**: Click on the component and copy the code
4. **Paste into Your Project**: Create a new file in `/src/components/reactbits/` and paste the code
5. **Import and Use**: Import the component in your pages

#### Example: Using an Animated Card

```tsx
// File: /src/components/reactbits/AnimatedCard.tsx
// (Copy the component code from ReactBits here)

// Then in your Index.tsx:
import AnimatedCard from '@/components/reactbits/AnimatedCard';

// Use it:
<AnimatedCard title="Emergency Service" description="24/7 availability" />
```

### Popular ReactBits Components for This Project

- **Hero Sections** - Animated hero with gradient backgrounds
- **Feature Cards** - Interactive service cards with hover effects
- **Testimonial Sliders** - Animated customer reviews
- **CTA Sections** - Call-to-action with animations
- **Pricing Tables** - Animated pricing displays

---

## 🚀 21st.dev Community Components

[21st.dev](https://21st.dev/community/components) offers a collection of modern, animated React components.

### How to Use 21st.dev Components

1. **Visit 21st.dev**: Go to [https://21st.dev/community/components](https://21st.dev/community/components)
2. **Browse the Library**: Explore components like buttons, cards, navbars, etc.
3. **Copy Component Code**: Click on a component to view its code
4. **Create Component File**: Save it in `/src/components/twentyfirst/`
5. **Install Dependencies**: Make sure you have the required dependencies:
   - `framer-motion` ✅ (Already installed)
   - `@tabler/icons-react` ✅ (Already installed)
   - Additional deps listed in component docs

#### Example: Using a 21st.dev Button

```tsx
// File: /src/components/twentyfirst/GlowButton.tsx
// (Copy the button component from 21st.dev)

// Import in your page:
import GlowButton from '@/components/twentyfirst/GlowButton';

// Use it:
<GlowButton onClick={() => scrollToSection('contact')}>
  Get Started
</GlowButton>
```

### Popular 21st.dev Components for This Project

- **Magnetic Buttons** - Buttons that follow cursor
- **Animated Backgrounds** - Gradient mesh backgrounds
- **Card Hover Effects** - 3D card tilts and glows
- **Text Animations** - Typing effects, gradient text
- **Loading Spinners** - Modern loading states

---

## 📁 Recommended Folder Structure

```
/src
  /components
    /ui                    # ShadCN components (already exists)
    /reactbits            # ReactBits components
      /AnimatedCard.tsx
      /HeroSection.tsx
      /TestimonialSlider.tsx
    /twentyfirst          # 21st.dev components
      /GlowButton.tsx
      /MagneticCard.tsx
      /AnimatedBackground.tsx
    /custom               # Your custom components
      /ServiceCard.tsx
      /ContactForm.tsx
```

---

## ⚡ Already Installed Dependencies

Your project already has these essential packages:

- ✅ **Framer Motion** - For smooth animations
- ✅ **@tabler/icons-react** - Icon library (alternative to lucide)
- ✅ **Tailwind CSS** - Utility-first CSS
- ✅ **ShadCN UI** - Component library

---

## 🎯 Quick Start Examples

### Example 1: Animated Service Card (ReactBits Style)

```tsx
// /src/components/custom/AnimatedServiceCard.tsx
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function AnimatedServiceCard({ icon, title, description }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden border-2 border-transparent hover:border-primary/50 transition-colors">
        <CardContent className="pt-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-semibold mb-2 mt-4">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
```

### Example 2: Magnetic Button (21st.dev Style)

```tsx
// /src/components/custom/MagneticButton.tsx
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function MagneticButton({ children, ...props }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      <Button {...props}>{children}</Button>
    </motion.div>
  );
}
```

---

## 🎨 Tips for Best Results

1. **Keep Components Small**: Break down large components into smaller, reusable ones
2. **Match Your Design System**: Adapt colors to use your existing CSS variables
3. **Test Animations**: Make sure animations work smoothly on mobile devices
4. **Accessibility**: Ensure interactive elements are keyboard accessible
5. **Performance**: Use `React.lazy()` for heavy animated components

---

## 📚 Additional Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [ShadCN UI Components](https://ui.shadcn.com/)
- [React Spring](https://www.react-spring.dev/) - Alternative animation library

---

## 🔥 Next Steps

1. Browse ReactBits and 21st.dev for components you like
2. Copy components into the appropriate folders
3. Customize colors to match your brand
4. Add animations to existing sections
5. Test on mobile devices

**Your project is now ready to use components from both libraries!** 🚀
