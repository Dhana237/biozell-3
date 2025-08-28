import { Button } from '@/components/ui/button';
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';
import pharmacyInterior from '@/assets/pharmacy-interior.jpg';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every decision we make prioritizes patient health and well-being above all else."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Committed to the highest standards in pharmaceutical manufacturing and distribution."
    },
    {
      icon: Globe,
      title: "Natural Solutions",
      description: "Harnessing nature's power through science to create effective wellness solutions."
    },
    {
      icon: Users,
      title: "Community Trust",
      description: "Building lasting relationships with healthcare providers and patients across Singapore."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-wellness">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Biozell</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading Singapore's wellness revolution with premium pharmaceutical solutions 
            that blend natural ingredients with scientific innovation.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-premium">
              <img 
                src={pharmacyInterior} 
                alt="Biozell pharmacy interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/20"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-accent rounded-2xl p-6 text-center shadow-premium">
              <div className="text-3xl font-bold text-accent-foreground">15+</div>
              <div className="text-sm text-accent-foreground/80">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Singapore's Trusted Wellness Partner
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded with a vision to revolutionize healthcare through natural wellness solutions, 
                Biozell has been Singapore's trusted pharmaceutical partner for over 15 years. We specialize 
                in premium generic medicines and innovative health products that prioritize both efficacy and safety.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to quality, innovation, and patient care has made us a preferred choice 
                for healthcare professionals and patients seeking reliable, natural wellness solutions.
              </p>
            </div>
            <Button variant="wellness" size="lg">
              Learn More About Our Journey
            </Button>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-card rounded-2xl p-8 shadow-medium border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To provide accessible, high-quality pharmaceutical solutions that enhance the health and 
              well-being of our community. We are committed to delivering innovative medicines and 
              health products that meet the highest standards of safety, efficacy, and affordability.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card rounded-2xl p-8 shadow-medium border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading provider of natural wellness solutions in Southeast Asia, recognized 
              for our commitment to innovation, quality, and patient care. We envision a future where 
              natural health solutions are accessible to all.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-soft border border-border hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;