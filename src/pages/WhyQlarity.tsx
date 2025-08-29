import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Award, Star, CheckCircle, Users, Truck, Heart, Zap } from "lucide-react"

export default function WhyQlarity() {
  const features = [
    {
      icon: Shield,
      title: "100% Transparency",
      description: "Our covers are crystal clear, maintaining your table's natural beauty while providing complete protection."
    },
    {
      icon: Award,
      title: "Premium Quality Materials",
      description: "Made from high-grade, food-safe materials that are durable and long-lasting."
    },
    {
      icon: Star,
      title: "Custom Sizing",
      description: "Every cover is made to your exact table measurements for a perfect fit."
    },
    {
      icon: Users,
      title: "200K+ Happy Customers",
      description: "Trusted by families across India for protecting their valuable furniture."
    },
    {
      icon: Truck,
      title: "Pan India Delivery",
      description: "We deliver to every corner of India with safe and secure packaging."
    },
    {
      icon: Heart,
      title: "Family Business",
      description: "A trusted family business with decades of experience in furniture protection."
    }
  ]

  const benefits = [
    "Protects against spills, scratches, and heat damage",
    "Easy to clean with just a damp cloth",
    "Maintains table's original appearance", 
    "Available in multiple thickness options",
    "UV resistant and non-yellowing",
    "Eco-friendly and recyclable materials"
  ]

  const thicknesses = [
    {
      thickness: "1mm",
      description: "Perfect for light daily use and decorative protection",
      bestFor: "Decorative tables, side tables"
    },
    {
      thickness: "1.5mm", 
      description: "Ideal balance of flexibility and protection",
      bestFor: "Dining tables, coffee tables"
    },
    {
      thickness: "2mm",
      description: "Enhanced durability for regular family use",
      bestFor: "Kitchen tables, study tables"
    },
    {
      thickness: "3mm",
      description: "Maximum protection for heavy-duty applications",
      bestFor: "Office desks, conference tables"
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-orange-light to-background">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/api/placeholder/1920/600" 
            alt="Why Qlarity background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-orange-primary/10 text-orange-primary border-orange-primary/20 animate-bounce-soft">
            The Qlarity Difference
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Why Choose <span className="text-orange-primary">Qlarity</span>?
          </h1>
          
          <p className="text-xl text-muted-foreground animate-fade-in">
            Discover what makes us India's most trusted table cover manufacturer
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground">
              We don't just make table covers - we create peace of mind for your furniture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-8 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Benefits of Our Table Covers
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our table covers provide comprehensive protection while maintaining the aesthetic appeal of your furniture.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center animate-slide-in">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src="/api/placeholder/500/500" 
                  alt="Table protection benefits"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-orange rounded-full flex items-center justify-center animate-glow">
                <Zap className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thickness Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Choose the Perfect Thickness
            </h2>
            <p className="text-lg text-muted-foreground">
              Different thicknesses for different needs - find what's right for your table
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {thicknesses.map((item, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-orange-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-orange-primary">{item.thickness}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.thickness} Thickness</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                  
                  <div className="text-center">
                    <Badge variant="outline" className="text-xs">
                      {item.bestFor}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Manufacturing Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Quality control at every step ensures you get the perfect product
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Measurement", description: "Precise measurement of your table dimensions" },
              { step: "02", title: "Cutting", description: "Precision cutting using advanced machinery" },
              { step: "03", title: "Quality Check", description: "Rigorous quality testing for perfection" },
              { step: "04", title: "Packaging", description: "Secure packaging for safe delivery" }
            ].map((process, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Investment?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust Qlarity for their furniture protection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-primary hover:bg-gray-100 font-bold px-8 py-4"
            >
              Get Custom Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-4"
            >
              View Our Gallery
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}