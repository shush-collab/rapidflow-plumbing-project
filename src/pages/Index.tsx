import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Menu, X, Clock, Shield, DollarSign, Star, CheckCircle2, Wrench, Droplet, Flame, Search, Home } from "lucide-react";
import heroImage from "@/assets/plumber.jpg";
import plumberWorking from "@/assets/plumber-working.jpg";
import toolsPipes from "@/assets/tools-pipes.jpg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import MagneticButton from "@/components/custom/MagneticButton";
import FadeIn from "@/components/custom/FadeIn";
import FloatingIcon from "@/components/custom/FloatingIcon";
import AnimatedServiceCard from "@/components/custom/AnimatedServiceCard";
import AnimatedCounter from "@/components/custom/AnimatedCounter";
import AnimatedCheckmark from "@/components/custom/AnimatedCheckmark";
import AnimatedTestimonial from "@/components/custom/AnimatedTestimonial";
import { CardContainer, CardBody, CardItem } from "@/components/custom/ThreeDCardNew";
import WaterDroplets from "@/components/custom/WaterDroplets";
import FloatingBubbles from "@/components/custom/FloatingBubbles";
import WaterWaves from "@/components/custom/WaterWaves";
import Plasma from "@/components/reactbits/Plasma";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(1, "Phone is required").max(20, "Phone must be less than 20 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters").optional().or(z.literal("")),
  address: z.string().trim().max(200, "Address must be less than 200 characters").optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const serviceType = watch("serviceType");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "Request Sent!",
        description: "We've received your service request and will contact you shortly.",
      });
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send your request. Please call us directly at (555) 123-4567.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-primary">RapidFlow Plumbing</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollToSection("why-us")} className="text-sm font-medium hover:text-primary transition-colors">Why Us</button>
              <button onClick={() => scrollToSection("reviews")} className="text-sm font-medium hover:text-primary transition-colors">Reviews</button>
              <button onClick={() => scrollToSection("service-area")} className="text-sm font-medium hover:text-primary transition-colors">Service Area</button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">Contact</button>
              <MagneticButton size="sm" variant="default" strength={0.3} asChild>
                <a href="tel:5551234567" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (555) 123-4567
                </a>
              </MagneticButton>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection("home")} className="text-left py-2 hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection("services")} className="text-left py-2 hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollToSection("why-us")} className="text-left py-2 hover:text-primary transition-colors">Why Us</button>
              <button onClick={() => scrollToSection("reviews")} className="text-left py-2 hover:text-primary transition-colors">Reviews</button>
              <button onClick={() => scrollToSection("service-area")} className="text-left py-2 hover:text-primary transition-colors">Service Area</button>
              <button onClick={() => scrollToSection("contact")} className="text-left py-2 hover:text-primary transition-colors">Contact</button>
              <MagneticButton className="w-full" strength={0.3} asChild>
                <a href="tel:5551234567" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  (555) 123-4567
                </a>
              </MagneticButton>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 md:py-24 bg-secondary/20 relative overflow-hidden">
        {/* Water Effects Background */}
        <WaterDroplets />
        <FloatingBubbles />
        <WaterWaves />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/30 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <FadeIn direction="up" delay={0}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="gradient-text">Emergency Plumbing</span>, 24/7.
                </h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">Licensed, insured plumbers serving homes and small businesses.</p>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton size="lg" strength={0.4} className="text-lg hover-glow" asChild>
                    <a href="tel:5551234567" className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      Call Now
                    </a>
                  </MagneticButton>
                  <MagneticButton size="lg" variant="outline" strength={0.3} className="text-lg" asChild>
                    <button onClick={() => scrollToSection("contact")}>Request Service</button>
                  </MagneticButton>
                </div>
              </FadeIn>
            </div>
            <FadeIn direction="left" delay={0.3}>
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl hover-glow">
                <img src={heroImage} alt="Professional plumber working under kitchen sink" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 border-y border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <FadeIn direction="up" delay={0}>
              <div className="flex flex-col items-center text-center gap-2">
                <FloatingIcon duration={3} delay={0}>
                  <Shield className="h-8 w-8 text-primary" />
                </FloatingIcon>
                <p className="text-sm font-bold shiny-text">
                  Licensed & Insured
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <div className="flex flex-col items-center text-center gap-2">
                <FloatingIcon duration={3.2} delay={0.5}>
                  <Clock className="h-8 w-8 text-primary" />
                </FloatingIcon>
                <p className="text-sm font-bold shiny-text">
                  24/7 Emergency Service
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-col items-center text-center gap-2">
                <FloatingIcon duration={2.8} delay={1}>
                  <DollarSign className="h-8 w-8 text-primary" />
                </FloatingIcon>
                <p className="text-sm font-bold shiny-text">
                  Upfront, Flat-Rate Pricing
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="flex flex-col items-center text-center gap-2">
                <FloatingIcon duration={3.5} delay={1.5}>
                  <Star className="h-8 w-8 text-primary" />
                </FloatingIcon>
                <p className="text-sm font-bold shiny-text">
                  100% Satisfaction Guarantee
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Plumbing Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              RapidFlow handles most residential and light commercial plumbing needs with expertise and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <AnimatedServiceCard
              icon={
                <FloatingIcon delay={0}>
                  <Droplet className="h-10 w-10 text-accent" />
                </FloatingIcon>
              }
              title="Emergency Leak Repair"
              description="Fast response to stop leaks and prevent water damage to your property."
              delay={0}
            />

            <AnimatedServiceCard
              icon={
                <FloatingIcon delay={0.2}>
                  <Search className="h-10 w-10 text-accent" />
                </FloatingIcon>
              }
              title="Drain Cleaning & Unclogging"
              description="Professional drain clearing using the latest equipment and techniques."
              delay={0.1}
            />

            <AnimatedServiceCard
              icon={
                <FloatingIcon delay={0.4}>
                  <Flame className="h-10 w-10 text-accent" />
                </FloatingIcon>
              }
              title="Water Heater Repair & Installation"
              description="Expert service for all types of water heaters, traditional and tankless."
              delay={0.2}
            />

            <AnimatedServiceCard
              icon={
                <FloatingIcon delay={0.6}>
                  <Search className="h-10 w-10 text-accent" />
                </FloatingIcon>
              }
              title="Sewer Line Inspection"
              description="Camera inspections to diagnose and solve sewer line issues quickly."
              delay={0.3}
            />

            <AnimatedServiceCard
              icon={
                <FloatingIcon delay={0.8}>
                  <Home className="h-10 w-10 text-accent" />
                </FloatingIcon>
              }
              title="Bathroom & Kitchen Plumbing"
              description="Complete plumbing solutions for your kitchen and bathroom spaces."
              delay={0.4}
            />

            <AnimatedServiceCard
              icon={
                <FloatingIcon delay={1.0}>
                  <Wrench className="h-10 w-10 text-accent" />
                </FloatingIcon>
              }
              title="Fixture Installation"
              description="Professional installation of faucets, toilets, and garbage disposals."
              delay={0.5}
            />
          </div>

          <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
            <img src={plumberWorking} alt="Plumber repairing pipes in modern home" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Why Choose RapidFlow Plumbing?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine speed, professionalism, and transparency to deliver plumbing services you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <ul className="space-y-4">
                <AnimatedCheckmark
                  title="Fast Response Times"
                  description="We arrive quickly when you need us most, especially for emergencies."
                  delay={0}
                />
                <AnimatedCheckmark
                  title="Clear, Upfront Pricing"
                  description="No hidden fees—you'll know the cost before we start work."
                  delay={0.1}
                />
                <AnimatedCheckmark
                  title="Respect for Your Home"
                  description="We treat your property with care, leaving it clean and tidy."
                  delay={0.2}
                />
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <AnimatedCheckmark
                  title="Fully Licensed & Insured Techs"
                  description="All our plumbers are certified professionals with insurance coverage."
                  delay={0.3}
                />
                <AnimatedCheckmark
                  title="Locally Owned and Operated"
                  description="We're part of your community and committed to serving our neighbors."
                  delay={0.4}
                />
                <AnimatedCheckmark
                  title="Latest Tools & Techniques"
                  description="We use modern equipment to solve problems efficiently and effectively."
                  delay={0.5}
                />
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <FadeIn direction="up" delay={0.6}>
              <Card className="hover-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter value={20} suffix="+" />
                  </p>
                  <p className="text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn direction="up" delay={0.7}>
              <Card className="hover-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter value={4.9} suffix="★" />
                  </p>
                  <p className="text-muted-foreground">Average Rating</p>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn direction="up" delay={0.8}>
              <Card className="hover-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter value={5000} suffix="+" />
                  </p>
                  <p className="text-muted-foreground">Jobs Completed</p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <div className="mt-12 relative h-64 rounded-lg overflow-hidden shadow-xl">
            <img src={toolsPipes} alt="Professional plumbing tools and equipment" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 shiny-text">Customer Reviews</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <AnimatedTestimonial
              quote="Quick response to our emergency leak. The plumber was professional and fixed the issue in under an hour. Highly recommend!"
              author="Sarah M."
              location="Downtown"
              rating={5}
              delay={0}
            />

            <AnimatedTestimonial
              quote="Fair pricing and excellent work on our water heater installation. The team was respectful and cleaned up after themselves."
              author="Michael R."
              location="Westside"
              rating={5}
              delay={0.2}
            />

            <AnimatedTestimonial
              quote="Best plumber in town! Fixed our stubborn drain issue that other companies couldn't solve. Will definitely call again."
              author="Jennifer L."
              location="Eastbrook"
              rating={5}
              delay={0.4}
            />
          </div>

          <div className="text-center">
            <a href="#0" className="text-primary font-medium hover:underline">See more reviews on Google →</a>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section id="service-area" className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Service Area</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide plumbing services throughout the metro area and surrounding communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Areas We Serve:</h3>
              <ul className="grid grid-cols-2 gap-3">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Downtown</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Westside</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Eastbrook</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>North Hills</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>South Valley</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Lake District</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Riverside</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Highland Park</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-card rounded-lg border border-border">
                <p className="font-semibold mb-2">Same-Day & 24/7 Emergency Service Available</p>
                <p className="text-sm text-muted-foreground">We respond quickly to emergencies throughout our entire service area.</p>
              </div>
            </div>
            <div className="h-64 md:h-full bg-muted rounded-lg flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.14308997973!2d-97.9222112284226!3d30.307182414827973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service area map"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Request Service</h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative grid md:grid-cols-2 gap-6 rounded-2xl overflow-hidden">
          <div className="cards-plasma-mask hidden md:block">
            <Plasma
              color="#2563eb"
              speed={0.8}
              direction="forward"
              scale={1.05}
              opacity={1}
              mouseInteractive={true}
            />
          </div>

          <Card className="relative z-10 bg-white/70 backdrop-blur-lg shadow-xl border border-border/40">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6">Call 24/7</h3>
              <MagneticButton size="lg" strength={0.5} className="w-full mb-6 text-lg pulse-glow" asChild>
                <a href="tel:5551234567" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  (555) 123-4567
                </a>
              </MagneticButton>
              <p className="text-center text-muted-foreground mb-6">or</p>
              <p className="text-center text-muted-foreground">Prefer email? Fill out the form and we'll get back to you shortly.</p>
            </CardContent>
          </Card>

          <Card className="relative z-10 bg-white/70 backdrop-blur-lg shadow-xl border border-border/40">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      {...register("address")}
                      placeholder="Street, City, ZIP"
                    />
                    {errors.address && <p className="text-sm text-destructive mt-1">{errors.address.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="service">Service Type *</Label>
                    <Select value={serviceType} onValueChange={(value) => setValue("serviceType", value)}>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Emergency leak">Emergency leak</SelectItem>
                        <SelectItem value="Clogged drain">Clogged drain</SelectItem>
                        <SelectItem value="Water heater issue">Water heater issue</SelectItem>
                        <SelectItem value="Fixture installation">Fixture installation</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.serviceType && <p className="text-sm text-destructive mt-1">{errors.serviceType.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message">Message / Description</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Describe your plumbing issue..."
                      rows={4}
                    />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </Button>
                </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RapidFlow Plumbing</h3>
              <p className="text-sm mb-4">Fast, reliable plumbing when you need it most.</p>
              <p className="text-sm">Licensed & Insured</p>
              <p className="text-sm">License #PL-000000</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  123 Main Street, City, State ZIP
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:5551234567" className="hover:underline">(555) 123-4567</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:help@rapidflowplumbing.com" className="hover:underline">help@rapidflowplumbing.com</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <p className="text-sm mb-2">Open 24/7 for emergencies</p>
              <p className="text-sm">Office Hours:</p>
              <p className="text-sm">Mon–Fri: 8am–6pm</p>
              <div className="mt-4">
                <a href="#0" className="text-sm hover:underline">Facebook</a>
                <span className="mx-2">•</span>
                <a href="#0" className="text-sm hover:underline">Google Maps</a>
              </div>
            </div>
          </div>
          <div className="text-center text-sm border-t border-primary-foreground/20 pt-8">
            <p>© {new Date().getFullYear()} RapidFlow Plumbing. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          "name": "RapidFlow Plumbing",
          "image": "https://rapidflowplumbing.com/logo.png",
          "telephone": "555-123-4567",
          "email": "help@rapidflowplumbing.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Main Street",
            "addressLocality": "City",
            "addressRegion": "State",
            "postalCode": "ZIP",
            "addressCountry": "US"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          },
          "areaServed": "Metropolitan area",
          "priceRange": "$$"
        })}
      </script>
    </div>
  );
};

export default Index;
