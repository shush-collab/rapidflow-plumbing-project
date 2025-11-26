import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Menu, X, Clock, Shield, DollarSign, Star, CheckCircle2, Wrench, Droplet, Flame, Search, Home } from "lucide-react";
import heroImage from "@/assets/hero-plumber.jpg";
import plumberWorking from "@/assets/plumber-working.jpg";
import toolsPipes from "@/assets/tools-pipes.jpg";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              <Button asChild size="sm" variant="default">
                <a href="tel:5551234567" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (555) 123-4567
                </a>
              </Button>
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
              <Button asChild className="w-full">
                <a href="tel:5551234567" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  (555) 123-4567
                </a>
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">Emergency Plumbing, 24/7.</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">Licensed, insured plumbers serving homes and small businesses.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg">
                  <a href="tel:5551234567" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg">
                  <button onClick={() => scrollToSection("contact")}>Request Service</button>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <img src={heroImage} alt="Professional plumber working under kitchen sink" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 border-y border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex flex-col items-center text-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <p className="text-sm font-medium">Licensed & Insured</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Clock className="h-8 w-8 text-primary" />
              <p className="text-sm font-medium">24/7 Emergency Service</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <DollarSign className="h-8 w-8 text-primary" />
              <p className="text-sm font-medium">Upfront, Flat-Rate Pricing</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Star className="h-8 w-8 text-primary" />
              <p className="text-sm font-medium">100% Satisfaction Guarantee</p>
            </div>
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
            <Card>
              <CardContent className="pt-6">
                <Droplet className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Emergency Leak Repair</h3>
                <p className="text-muted-foreground">Fast response to stop leaks and prevent water damage to your property.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Search className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Drain Cleaning & Unclogging</h3>
                <p className="text-muted-foreground">Professional drain clearing using the latest equipment and techniques.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Flame className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Water Heater Repair & Installation</h3>
                <p className="text-muted-foreground">Expert service for all types of water heaters, traditional and tankless.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Search className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sewer Line Inspection</h3>
                <p className="text-muted-foreground">Camera inspections to diagnose and solve sewer line issues quickly.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Home className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Bathroom & Kitchen Plumbing</h3>
                <p className="text-muted-foreground">Complete plumbing solutions for your kitchen and bathroom spaces.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Wrench className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fixture Installation</h3>
                <p className="text-muted-foreground">Professional installation of faucets, toilets, and garbage disposals.</p>
              </CardContent>
            </Card>
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
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Fast Response Times</p>
                    <p className="text-sm text-muted-foreground">We arrive quickly when you need us most, especially for emergencies.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Clear, Upfront Pricing</p>
                    <p className="text-sm text-muted-foreground">No hidden fees—you'll know the cost before we start work.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Respect for Your Home</p>
                    <p className="text-sm text-muted-foreground">We treat your property with care, leaving it clean and tidy.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Fully Licensed & Insured Techs</p>
                    <p className="text-sm text-muted-foreground">All our plumbers are certified professionals with insurance coverage.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Locally Owned and Operated</p>
                    <p className="text-sm text-muted-foreground">We're part of your community and committed to serving our neighbors.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Latest Tools & Techniques</p>
                    <p className="text-sm text-muted-foreground">We use modern equipment to solve problems efficiently and effectively.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Card>
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-primary mb-2">20+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-primary mb-2">4.9★</p>
                <p className="text-muted-foreground">Average Rating</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-primary mb-2">5,000+</p>
                <p className="text-muted-foreground">Jobs Completed</p>
              </CardContent>
            </Card>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Customer Reviews</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">"Quick response to our emergency leak. The plumber was professional and fixed the issue in under an hour. Highly recommend!"</p>
                <p className="font-semibold">Sarah M.</p>
                <p className="text-sm text-muted-foreground">Downtown</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">"Fair pricing and excellent work on our water heater installation. The team was respectful and cleaned up after themselves."</p>
                <p className="font-semibold">Michael R.</p>
                <p className="text-sm text-muted-foreground">Westside</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">"Best plumber in town! Fixed our stubborn drain issue that other companies couldn't solve. Will definitely call again."</p>
                <p className="font-semibold">Jennifer L.</p>
                <p className="text-sm text-muted-foreground">Eastbrook</p>
              </CardContent>
            </Card>
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

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6">Call 24/7</h3>
                <Button asChild size="lg" className="w-full mb-6 text-lg">
                  <a href="tel:5551234567" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    (555) 123-4567
                  </a>
                </Button>
                <p className="text-center text-muted-foreground mb-6">or</p>
                <p className="text-center text-muted-foreground">Prefer email? Fill out the form and we'll get back to you shortly.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" required placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" type="tel" required placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Street, City, ZIP" />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Type</Label>
                    <Select>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency leak</SelectItem>
                        <SelectItem value="drain">Clogged drain</SelectItem>
                        <SelectItem value="heater">Water heater issue</SelectItem>
                        <SelectItem value="fixture">Fixture installation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message / Description</Label>
                    <Textarea id="message" placeholder="Describe your plumbing issue..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full">Submit Request</Button>
                </form>
              </CardContent>
            </Card>
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
