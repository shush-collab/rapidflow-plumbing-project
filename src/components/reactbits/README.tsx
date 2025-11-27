/**
 * REACTBITS COMPONENT EXAMPLE
 * 
 * This is a placeholder file to demonstrate how to add components from ReactBits.
 * 
 * To add a ReactBits component:
 * 1. Visit https://reactbits.dev/
 * 2. Browse and find a component you like
 * 3. Click on the component to view its code
 * 4. Copy the entire component code
 * 5. Create a new file in this folder (e.g., HeroWithAnimation.tsx)
 * 6. Paste the code
 * 7. Adjust colors to match your design system (use CSS variables)
 * 
 * Example component structure:
 */

import { motion } from 'framer-motion';

// This is just an example - replace with actual ReactBits component
export default function ExampleReactBitsComponent() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4"
        >
            <p className="text-muted-foreground">
                Replace this with your ReactBits component code
            </p>
        </motion.div>
    );
}

/**
 * POPULAR REACTBITS COMPONENTS FOR YOUR SITE:
 * 
 * - Hero Sections: Animated heroes with gradient backgrounds
 * - Feature Grids: Grid layouts with hover animations
 * - Testimonial Carousels: Sliding review cards
 * - Pricing Tables: Animated pricing displays
 * - CTA Sections: Call-to-action with floating elements
 * - Stats Counters: Animated number counters
 * - Timeline Components: Animated service process timelines
 */
