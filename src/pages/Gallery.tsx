import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "View all" },
    { id: "circular", name: "Circular Table Covers" },
    { id: "oval", name: "Oval Table Covers" },
    { id: "rectangle", name: "Rectangle Table Covers" },
    { id: "square", name: "Square Table Covers" },
  ]

  const galleryItems = {
    square: {
      title: "Square Table Covers",
      subtitle: "Square Table Covers",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
      ]
    },
    oval: {
      title: "Oval Table Covers",
      subtitle: "Oval Table Covers", 
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
      ]
    },
    rectangle: {
      title: "Rectangle Table Cover",
      subtitle: "Rectangle Table Cover",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
      ]
    },
    circular: {
      title: "Round Table Covers",
      subtitle: "Circular Table Covers",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
      ]
    }
  }

  const allImages = Object.values(galleryItems).flatMap(category => 
    category.images.map(image => ({
      src: image,
      category: Object.keys(galleryItems).find(key => galleryItems[key as keyof typeof galleryItems] === category) || 'all'
    }))
  )

  const filteredItems = activeCategory === "all" 
    ? Object.entries(galleryItems)
    : Object.entries(galleryItems).filter(([key]) => key === activeCategory)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-orange-light to-background">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/api/placeholder/1920/600" 
            alt="Gallery background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-orange-primary/10 text-orange-primary border-orange-primary/20 animate-bounce-soft">
            Our Work
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">Gallery</span>
          </h1>
          
          <p className="text-xl text-muted-foreground animate-fade-in">
            Explore our extensive collection of premium table covers in various shapes and styles
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-orange-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-orange-primary hover:bg-orange-dark"
                    : "border-orange-primary/20 text-foreground hover:bg-orange-light"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {activeCategory === "all" ? (
            <div className="grid md:grid-cols-2 gap-12">
              {Object.entries(galleryItems).map(([key, category]) => (
                <Card key={key} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img 
                      src={category.images[0]} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-center mb-2 text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-center mb-4">
                      {category.subtitle}
                    </p>
                    <div className="text-center">
                      <Button 
                        variant="outline"
                        onClick={() => setActiveCategory(key)}
                        className="border-orange-primary text-orange-primary hover:bg-orange-light"
                      >
                        View album →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div>
              {filteredItems.map(([key, category]) => (
                <div key={key} className="animate-fade-in">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                      {category.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {category.subtitle}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {category.images.map((image, index) => (
                      <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 group">
                        <div className="aspect-square bg-gray-100 relative overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${category.title} ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="text-center mt-12">
                    <Button 
                      size="lg"
                      className="bg-gradient-orange text-white hover:shadow-glow px-8 py-4"
                    >
                      Order Custom Size
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Table?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a custom quote for your table size and shape
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
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}