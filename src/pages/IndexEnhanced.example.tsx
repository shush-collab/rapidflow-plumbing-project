/**
 * ENHANCED INDEX PAGE - EXAMPLE
 * 
 * This file shows how to enhance your Index.tsx with the new animated components.
 * You can copy sections from this file and integrate them into your actual Index.tsx
 * 
 * The examples below show:
 * 1. Animated Hero Section
 * 2. Animated Service Cards
 * 3. Magnetic Buttons
 * 4. Animated Testimonials
 * 5. Fade-in Sections
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Droplet, Flame, Search, Wrench, Home } from "lucide-react";

// Import our new animated components
import AnimatedServiceCard from '@/components/custom/AnimatedServiceCard';
import MagneticButton from '@/components/custom/MagneticButton';
import FadeIn from '@/components/custom/FadeIn';
import AnimatedTestimonial from '@/components/custom/AnimatedTestimonial';
import FloatingIcon from '@/components/custom/FloatingIcon';

export default function EnhancedIndexExample() {
    return (
        <div className="min-h-screen bg-background">

            {/* ENHANCED HERO SECTION */}
            <section className="py-16 md:py-24 relative overflow-hidden">
                {/* Optional: Add animated gradient background */}
                <div className="absolute inset-0 animated-gradient opacity-10 -z-10" />

                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            {/* Fade in the heading */}
                            <FadeIn direction="up" delay={0}>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                    {/* Optional: Make text gradient */}
                                    <span className="gradient-text">Emergency Plumbing</span>, 24/7.
                                </h1>
                            </FadeIn>

                            <FadeIn direction="up" delay={0.2}>
                                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                                    Licensed, insured plumbers serving homes and small businesses.
                                </p>
                            </FadeIn>

                            {/* Use Magnetic Buttons instead of regular buttons */}
                            <FadeIn direction="up" delay={0.4}>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <MagneticButton
                                        size="lg"
                                        strength={0.4}
                                        className="text-lg hover-glow"
                                    >
                                        <a href="tel:5551234567" className="flex items-center gap-2">
                                            <Phone className="h-5 w-5" />
                                            Call Now
                                        </a>
                                    </MagneticButton>

                                    <MagneticButton
                                        size="lg"
                                        variant="outline"
                                        strength={0.3}
                                        className="text-lg"
                                    >
                                        Request Service
                                    </MagneticButton>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Hero image with fade in */}
                        <FadeIn direction="left" delay={0.3}>
                            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl hover-glow">
                                <img
                                    src="/placeholder-hero.jpg"
                                    alt="Professional plumber"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ENHANCED SERVICES SECTION */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up" className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                            Plumbing Services
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            RapidFlow handles most residential and light commercial plumbing needs.
                        </p>
                    </FadeIn>

                    {/* Replace regular cards with AnimatedServiceCard */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatedServiceCard
                            icon={
                                <FloatingIcon duration={3} delay={0}>
                                    <Droplet className="h-10 w-10 text-accent" />
                                </FloatingIcon>
                            }
                            title="Emergency Leak Repair"
                            description="Fast response to stop leaks and prevent water damage to your property."
                            delay={0}
                        />

                        <AnimatedServiceCard
                            icon={
                                <FloatingIcon duration={3.2} delay={0.5}>
                                    <Search className="h-10 w-10 text-accent" />
                                </FloatingIcon>
                            }
                            title="Drain Cleaning & Unclogging"
                            description="Professional drain clearing using the latest equipment and techniques."
                            delay={0.1}
                        />

                        <AnimatedServiceCard
                            icon={
                                <FloatingIcon duration={2.8} delay={1}>
                                    <Flame className="h-10 w-10 text-accent" />
                                </FloatingIcon>
                            }
                            title="Water Heater Repair"
                            description="Expert service for all types of water heaters, traditional and tankless."
                            delay={0.2}
                        />

                        <AnimatedServiceCard
                            icon={
                                <FloatingIcon duration={3.5} delay={0.2}>
                                    <Search className="h-10 w-10 text-accent" />
                                </FloatingIcon>
                            }
                            title="Sewer Line Inspection"
                            description="Camera inspections to diagnose and solve sewer line issues quickly."
                            delay={0.3}
                        />

                        <AnimatedServiceCard
                            icon={
                                <FloatingIcon duration={3.1} delay={0.8}>
                                    <Home className="h-10 w-10 text-accent" />
                                </FloatingIcon>
                            }
                            title="Bathroom & Kitchen Plumbing"
                            description="Complete plumbing solutions for your kitchen and bathroom spaces."
                            delay={0.4}
                        />

                        <AnimatedServiceCard
                            icon={
                                <FloatingIcon duration={2.9} delay={1.2}>
                                    <Wrench className="h-10 w-10 text-accent" />
                                </FloatingIcon>
                            }
                            title="Fixture Installation"
                            description="Professional installation of faucets, toilets, and garbage disposals."
                            delay={0.5}
                        />
                    </div>
                </div>
            </section>

            {/* ENHANCED REVIEWS SECTION */}
            <section className="py-16 md:py-24 bg-secondary/20">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up" className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                            Customer Reviews
                        </h2>
                    </FadeIn>

                    {/* Replace regular review cards with AnimatedTestimonial */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <AnimatedTestimonial
                            rating={5}
                            review="Quick response to our emergency leak. The plumber was professional and fixed the issue in under an hour. Highly recommend!"
                            author="Sarah M."
                            location="Downtown"
                            delay={0}
                        />

                        <AnimatedTestimonial
                            rating={5}
                            review="Fair pricing and excellent work on our water heater installation. The team was respectful and cleaned up after themselves."
                            author="Michael R."
                            location="Westside"
                            delay={0.1}
                        />

                        <AnimatedTestimonial
                            rating={5}
                            review="Best plumber in town! Fixed our stubborn drain issue that other companies couldn't solve. Will definitely call again."
                            author="Jennifer L."
                            location="Eastbrook"
                            delay={0.2}
                        />
                    </div>
                </div>
            </section>

            {/* ENHANCED CTA SECTION */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up">
                        <div className="glass p-8 md:p-12 rounded-2xl text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Need Plumbing Services?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Our team is ready to help 24/7. Get in touch today!
                            </p>
                            <MagneticButton
                                size="lg"
                                strength={0.5}
                                className="hover-glow pulse-glow"
                            >
                                <Phone className="h-5 w-5 mr-2" />
                                Call (555) 123-4567
                            </MagneticButton>
                        </div>
                    </FadeIn>
                </div>
            </section>

        </div>
    );
}

/**
 * TO INTEGRATE INTO YOUR ACTUAL INDEX.TSX:
 * 
 * 1. Copy the import statements at the top
 * 2. Replace sections one by one:
 *    - Replace Button with MagneticButton where appropriate
 *    - Wrap sections with FadeIn for entrance animations
 *    - Replace Card components in services with AnimatedServiceCard
 *    - Replace review cards with AnimatedTestimonial
 *    - Wrap icons with FloatingIcon for subtle movement
 * 
 * 3. Add CSS classes where needed:
 *    - .gradient-text for gradient text effects
 *    - .glass for glassmorphism cards
 *    - .hover-glow for glow on hover
 *    - .pulse-glow for pulsing glow effect
 * 
 * 4. Test on mobile and adjust delays/animations as needed
 * 
 * 5. Optional: Add animated gradient background to hero section
 */