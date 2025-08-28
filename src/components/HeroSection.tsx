import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Leaf } from 'lucide-react';
import heroWellness from '@/assets/hero-wellness.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroWellness} 
          alt="Natural wellness pharmacy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badges */}
          <div className="flex justify-center gap-6 mb-8 animate-fade-in">
            <div className="flex items-center gap-2 bg-background/20 backdrop-blur-md rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground text-sm font-medium">GMP Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-background/20 backdrop-blur-md rounded-full px-4 py-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground text-sm font-medium">Halal Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-background/20 backdrop-blur-md rounded-full px-4 py-2">
              <Leaf className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground text-sm font-medium">Natural Extracts</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Nurture Your{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Wellness
            </span>{' '}
            Naturally
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Discover premium pharmaceutical solutions crafted with nature's finest ingredients. 
            Your trusted partner in holistic health and wellness.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button variant="hero" size="xl" className="group">
              Explore Our Products
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="bg-background/20 backdrop-blur-md border-primary-foreground/30 text-primary-foreground hover:bg-background/30">
              Learn About Us
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50K+</div>
              <div className="text-primary-foreground/80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-primary-foreground/80">Quality Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-primary-foreground/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;