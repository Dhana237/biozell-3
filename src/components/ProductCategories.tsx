import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Bone, Activity, Brain, Shield, Baby } from 'lucide-react';
import cardiovascularCare from '@/assets/cardiovascular-care.jpg';
import boneHealth from '@/assets/bone-health.jpg';
import gutHealth from '@/assets/gut-health.jpg';
import diabeticCare from '@/assets/diabetic-care.jpg';

const ProductCategories = () => {
  const categories = [
    {
      icon: Heart,
      title: "Cardiovascular Care",
      description: "Comprehensive heart health solutions including medications for hypertension, cholesterol management, and cardiac wellness support.",
      image: cardiovascularCare,
      color: "text-red-500"
    },
    {
      icon: Bone,
      title: "Bone & Joint Health",
      description: "Advanced orthopedic care products, calcium supplements, and joint support medications for optimal bone health.",
      image: boneHealth,
      color: "text-amber-500"
    },
    {
      icon: Activity,
      title: "Gut Health & Digestive Care",
      description: "Probiotics, digestive enzymes, and gastrointestinal health products to support optimal digestive function.",
      image: gutHealth,
      color: "text-green-500"
    },
    {
      icon: Brain,
      title: "Diabetic Care",
      description: "Complete diabetes management solutions including glucose monitoring, insulin products, and metabolic support.",
      image: diabeticCare,
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Immune Support",
      description: "Vitamins, minerals, and natural supplements to boost immunity and overall wellness.",
      image: null,
      color: "text-purple-500"
    },
    {
      icon: Baby,
      title: "Gynaecological Care",
      description: "Women's health products including prenatal vitamins, hormonal support, and reproductive health solutions.",
      image: null,
      color: "text-pink-500"
    }
  ];

  const promotionalSlides = [
    {
      title: "Daily Nutrition Essentials",
      subtitle: "Complete vitamin and mineral supplements for optimal health",
      cta: "Shop Now",
      bgColor: "bg-gradient-primary"
    },
    {
      title: "Innovative Generic Products",
      subtitle: "High-quality generic medications at affordable prices",
      cta: "Explore Range",
      bgColor: "bg-gradient-secondary"
    },
    {
      title: "Premium Natural Extracts",
      subtitle: "Pure botanical extracts for natural wellness solutions",
      cta: "Learn More",
      bgColor: "bg-gradient-accent"
    }
  ];

  return (
    <section id="patient-care" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Promotional Slides */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            Featured <span className="text-primary">Wellness Solutions</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {promotionalSlides.map((slide, index) => (
              <div 
                key={index}
                className={`${slide.bgColor} rounded-2xl p-8 text-center shadow-premium hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <h3 className="text-2xl font-bold text-white mb-4">{slide.title}</h3>
                <p className="text-white/90 mb-6 leading-relaxed">{slide.subtitle}</p>
                <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary">
                  {slide.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Product Categories */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Patient Care <span className="text-primary">Categories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive healthcare solutions across multiple therapeutic areas, 
              designed to meet diverse patient needs with quality and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-medium border border-border hover:shadow-premium transition-all duration-300 hover:scale-105 group"
              >
                {/* Image or Icon Header */}
                <div className="relative h-48 bg-gradient-wellness flex items-center justify-center">
                  {category.image ? (
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <category.icon className={`w-16 h-16 ${category.color}`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{category.description}</p>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 shadow-premium">
              <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Need Personalized Care?
              </h3>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Our healthcare professionals are here to provide personalized consultation 
                and help you find the right wellness solutions for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary">
                  Book Consultation
                </Button>
                <Button variant="premium" size="lg">
                  View All Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;