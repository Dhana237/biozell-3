import { Shield, Award, Leaf, CheckCircle, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QualityStandards = () => {
  const certifications = [
    {
      icon: Shield,
      title: "GMP Certified",
      description: "Good Manufacturing Practice certification ensures our products meet the highest quality standards.",
      color: "text-trust"
    },
    {
      icon: Award,
      title: "Halal Compliant",
      description: "Our products are certified Halal, meeting strict religious and quality requirements.",
      color: "text-accent"
    },
    {
      icon: Leaf,
      title: "Premium Extracts",
      description: "We use only the finest natural extracts sourced from trusted global suppliers.",
      color: "text-primary"
    },
    {
      icon: CheckCircle,
      title: "Lab Tested in Singapore",
      description: "Every product undergoes rigorous testing in our Singapore-based laboratories.",
      color: "text-secondary"
    }
  ];

  const qualityFeatures = [
    "ISO 9001:2015 Quality Management System",
    "WHO-GMP Compliance",
    "Singapore Health Sciences Authority (HSA) Licensed",
    "Regular Third-Party Audits",
    "Continuous Quality Monitoring",
    "Batch-to-Batch Consistency Testing"
  ];

  return (
    <section className="py-20 bg-gradient-wellness">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quality <span className="text-primary">Standards</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our unwavering commitment to quality ensures that every product meets 
            international standards and exceeds patient expectations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 text-center shadow-medium border border-border hover:shadow-premium transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <cert.icon className={`w-10 h-10 text-primary-foreground`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{cert.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Quality Promise */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Our Quality Promise
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Biozell, quality is not just a standard—it's our promise to every patient. 
              We maintain the highest levels of quality control throughout our entire supply chain, 
              from raw material sourcing to final product delivery.
            </p>
            
            <div className="space-y-4 mb-8">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="wellness" size="lg">
              Download Quality Certificate
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-8 text-center shadow-medium border border-border">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">100%</div>
              <div className="text-muted-foreground">Compliance Rate</div>
            </div>
            <div className="bg-card rounded-2xl p-8 text-center shadow-medium border border-border">
              <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">50K+</div>
              <div className="text-muted-foreground">Satisfied Patients</div>
            </div>
            <div className="bg-card rounded-2xl p-8 text-center shadow-medium border border-border">
              <Shield className="w-12 h-12 text-trust mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">99.9%</div>
              <div className="text-muted-foreground">Quality Assurance</div>
            </div>
            <div className="bg-card rounded-2xl p-8 text-center shadow-medium border border-border">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">15+</div>
              <div className="text-muted-foreground">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityStandards;