import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Shield, Award, Users, CheckCircle } from "lucide-react"

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "100% Transparency",
      description: "Crystal clear protection that maintains your table's natural beauty"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Made from high-grade materials for long-lasting durability"
    },
    {
      icon: Users,
      title: "200K+ Happy Customers",
      description: "Trusted by families across India for table protection"
    }
  ]

  const productTypes = [
    {
      title: "Glossy",
      description: "The pattern is Glossy on both sides of the cover. Glossy table cover provides maximum transparency, smooth table covers have a elegant thicknesses such as 1mm, 1.5mm, 2mm, 3mm. Thicker cover looks just like the glass and are ideal for make table look luxurious.",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Frosted",
      description: "Frosted table covers are glossy on one side and textured on other side. Frosted table covers bring elegant look to your table.Frosted table cover is highly durable and is textured surface. Frosted table cover can withstand heavy objects.",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Thick Leaf",
      description: "Thick leaf table covers are glossy on one side and textured on other side. If you want to hide the design / Look of your table so you should opt for a Thick Leaf design. The design will have rich texture which enhances the look of your table.",
      image: "/api/placeholder/300/200"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-orange-light to-background overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Table with cover" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-orange-primary/10 text-orange-primary border-orange-primary/20 animate-bounce-soft">
            #1 Table Cover Brand in India
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">Protect Your </span>
            <span className="text-orange-primary">Beautiful</span>
            <br />
            <span className="text-foreground">Table Today</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Premium transparent table covers that preserve your furniture's elegance while providing unmatched protection
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-orange text-white hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
            >
              Buy Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-orange-primary text-orange-primary hover:bg-orange-light transition-all duration-300 text-lg px-8 py-6"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Thickness Information Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What are the different Thicknesses and which one is best for you?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              At Qlarity Covers, we have various types of thicknesses that matches to your exact needs and the pattern you prefer. 
              Additionally, we have 2 more variants in the mix only in thickness but in pattern that is Thick Leaf and Frosted.
            </p>
          </div>

          <div className="mb-12">
            <p className="text-center text-muted-foreground">
              If you want to hide the design / Look of your table so you should opt for a Thick Leaf design. 
              The design will have rich texture to cover your table look. If you want to show out the design / Look of your table so you should opt 
              for a transparent cover.
            </p>
          </div>

          {/* Buy More Save More Section */}
          <Card className="max-w-4xl mx-auto mb-12 overflow-hidden shadow-elegant">
            <CardContent className="p-0">
              <div className="bg-gradient-orange p-8 text-white">
                <h3 className="text-4xl font-bold mb-6 text-center">
                  BUY <span className="text-yellow-300">MORE</span> SAVE <span className="text-yellow-300">MORE</span>
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-yellow-300" />
                    <span>GET <strong>5%</strong> OFF ON ORDERS ABOVE ₹10K</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-yellow-300" />
                    <span>GET <strong>7%</strong> OFF ON ORDERS ABOVE ₹15K</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-yellow-300" />
                    <span>GET <strong>10%</strong> OFF ON ORDERS ABOVE ₹25K</span>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <Button 
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
                  >
                    ORDER NOW
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Video Section */}
          <Card className="max-w-4xl mx-auto shadow-elegant">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  How to find what is the <span className="text-orange-primary">perfect thickness</span> that matches to your table?
                </h3>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-orange-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Custom Size Table Cover Manufacturer in India | 100% Transparency, 200% Protection</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {productTypes.map((product, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="aspect-video bg-gray-100"></div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-center mb-4 text-orange-primary">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Qlarity Covers?
            </h2>
            <p className="text-lg text-muted-foreground">
              We specialize in designing and manufacturing high-quality customized table covers from many shapes and sizes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-8 shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-orange-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-orange-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 shadow-elegant">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Amazing quality! The table cover is so transparent you can barely see it, but it protects perfectly. 
                  Highly recommend for anyone who wants to preserve their beautiful table."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-primary font-semibold">R</span>
                  </div>
                  <div>
                    <p className="font-semibold">Rajesh Kumar</p>
                    <p className="text-sm text-muted-foreground">Mumbai</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-elegant">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Excellent service and product quality. The frosted design looks elegant and the thickness is perfect. 
                  Will definitely order again for my other tables."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-primary font-semibold">P</span>
                  </div>
                  <div>
                    <p className="font-semibold">Priya Sharma</p>
                    <p className="text-sm text-muted-foreground">Delhi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Amazon Section */}
      <section className="py-16 bg-gradient-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Available on Amazon</h2>
          <p className="text-xl mb-8 opacity-90">
            Shop our premium table covers on India's most trusted platform
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-primary hover:bg-gray-100 font-bold px-8 py-4"
          >
            Shop on Amazon
          </Button>
        </div>
      </section>
    </div>
  )
}