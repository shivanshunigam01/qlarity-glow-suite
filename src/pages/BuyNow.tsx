import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Calculator, ShoppingCart, Truck, Shield, Star, CheckCircle } from "lucide-react"

export default function BuyNow() {
  const [tableShape, setTableShape] = useState("")
  const [thickness, setThickness] = useState("")
  const [finish, setFinish] = useState("")
  
  const shapes = [
    { id: "rectangle", name: "Rectangle", description: "Most common table shape" },
    { id: "square", name: "Square", description: "Equal length and width" },
    { id: "round", name: "Round/Circular", description: "Circular dining tables" },
    { id: "oval", name: "Oval", description: "Oval and elliptical tables" },
    { id: "custom", name: "Custom Shape", description: "Irregular or unique shapes" }
  ]

  const thicknesses = [
    { value: "1mm", price: "₹89", description: "Light protection, decorative use" },
    { value: "1.5mm", price: "₹109", description: "Balanced protection and flexibility" },
    { value: "2mm", price: "₹129", description: "Enhanced durability, family use" },
    { value: "3mm", price: "₹159", description: "Maximum protection, heavy use" }
  ]

  const finishes = [
    { value: "glossy", name: "Glossy", description: "Crystal clear, both sides glossy" },
    { value: "frosted", name: "Frosted", description: "One side textured, elegant look" },
    { value: "thick-leaf", name: "Thick Leaf", description: "Rich textured design pattern" }
  ]

  const features = [
    "100% Custom Size Manufacturing",
    "Free Pan India Shipping",
    "7-Day Quality Guarantee", 
    "Expert Measurement Guidance",
    "Bulk Order Discounts Available",
    "Premium Food Grade Materials"
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-orange-light to-background">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/api/placeholder/1920/600" 
            alt="Buy Now background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-orange-primary/10 text-orange-primary border-orange-primary/20 animate-bounce-soft">
            Order Your Perfect Cover
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">Custom Table Cover</span>
          </h1>
          
          <p className="text-xl text-muted-foreground animate-fade-in">
            Get a perfectly fitted table cover made specifically for your table size and shape
          </p>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Order Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="flex items-center mb-8">
                    <Calculator className="w-8 h-8 text-orange-primary mr-3" />
                    <h2 className="text-3xl font-bold">Configure Your Table Cover</h2>
                  </div>

                  <form className="space-y-8">
                    {/* Table Shape */}
                    <div>
                      <Label className="text-lg font-semibold mb-4 block">
                        1. Select Table Shape
                      </Label>
                      <RadioGroup value={tableShape} onValueChange={setTableShape}>
                        <div className="grid md:grid-cols-2 gap-4">
                          {shapes.map((shape) => (
                            <div key={shape.id} className="flex items-center space-x-2 p-4 border border-orange-primary/20 rounded-lg hover:bg-orange-light/20 transition-colors">
                              <RadioGroupItem value={shape.id} id={shape.id} />
                              <div className="flex-1">
                                <Label htmlFor={shape.id} className="font-medium cursor-pointer">
                                  {shape.name}
                                </Label>
                                <p className="text-sm text-muted-foreground">{shape.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Dimensions */}
                    <div>
                      <Label className="text-lg font-semibold mb-4 block">
                        2. Enter Table Dimensions
                      </Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {tableShape === "round" ? (
                          <div>
                            <Label htmlFor="diameter">Diameter (in feet)</Label>
                            <Input 
                              id="diameter" 
                              placeholder="e.g., 4"
                              className="border-orange-primary/20 focus:border-orange-primary"
                            />
                          </div>
                        ) : (
                          <>
                            <div>
                              <Label htmlFor="length">Length (in feet)</Label>
                              <Input 
                                id="length" 
                                placeholder="e.g., 6"
                                className="border-orange-primary/20 focus:border-orange-primary"
                              />
                            </div>
                            <div>
                              <Label htmlFor="width">Width (in feet)</Label>
                              <Input 
                                id="width" 
                                placeholder="e.g., 4"
                                className="border-orange-primary/20 focus:border-orange-primary"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Thickness Selection */}
                    <div>
                      <Label className="text-lg font-semibold mb-4 block">
                        3. Choose Thickness
                      </Label>
                      <RadioGroup value={thickness} onValueChange={setThickness}>
                        <div className="grid md:grid-cols-2 gap-4">
                          {thicknesses.map((t) => (
                            <div key={t.value} className="flex items-center space-x-2 p-4 border border-orange-primary/20 rounded-lg hover:bg-orange-light/20 transition-colors">
                              <RadioGroupItem value={t.value} id={t.value} />
                              <div className="flex-1">
                                <Label htmlFor={t.value} className="font-medium cursor-pointer flex items-center justify-between">
                                  <span>{t.value}</span>
                                  <span className="text-orange-primary font-bold">{t.price}/sq ft</span>
                                </Label>
                                <p className="text-sm text-muted-foreground">{t.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Finish Selection */}
                    <div>
                      <Label className="text-lg font-semibold mb-4 block">
                        4. Select Finish Type
                      </Label>
                      <RadioGroup value={finish} onValueChange={setFinish}>
                        <div className="space-y-4">
                          {finishes.map((f) => (
                            <div key={f.value} className="flex items-center space-x-2 p-4 border border-orange-primary/20 rounded-lg hover:bg-orange-light/20 transition-colors">
                              <RadioGroupItem value={f.value} id={f.value} />
                              <div className="flex-1">
                                <Label htmlFor={f.value} className="font-medium cursor-pointer">
                                  {f.name}
                                </Label>
                                <p className="text-sm text-muted-foreground">{f.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Special Instructions */}
                    <div>
                      <Label htmlFor="instructions" className="text-lg font-semibold">
                        5. Special Instructions (Optional)
                      </Label>
                      <Textarea 
                        id="instructions"
                        placeholder="Any special requirements, edge finishing preferences, or additional notes..."
                        rows={3}
                        className="border-orange-primary/20 focus:border-orange-primary"
                      />
                    </div>

                    {/* Customer Information */}
                    <div className="border-t pt-8">
                      <Label className="text-lg font-semibold mb-4 block">
                        Contact Information
                      </Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="customerName">Full Name</Label>
                          <Input 
                            id="customerName"
                            placeholder="Enter your full name"
                            className="border-orange-primary/20 focus:border-orange-primary"
                          />
                        </div>
                        <div>
                          <Label htmlFor="customerPhone">Phone Number</Label>
                          <Input 
                            id="customerPhone"
                            placeholder="Enter your phone number"
                            className="border-orange-primary/20 focus:border-orange-primary"
                          />
                        </div>
                        <div>
                          <Label htmlFor="customerEmail">Email</Label>
                          <Input 
                            id="customerEmail"
                            type="email"
                            placeholder="Enter your email"
                            className="border-orange-primary/20 focus:border-orange-primary"
                          />
                        </div>
                        <div>
                          <Label htmlFor="pincode">Pincode</Label>
                          <Input 
                            id="pincode"
                            placeholder="Delivery pincode"
                            className="border-orange-primary/20 focus:border-orange-primary"
                          />
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-orange text-white hover:shadow-glow text-lg py-6"
                    >
                      <ShoppingCart className="w-6 h-6 mr-3" />
                      Get Instant Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary & Features */}
            <div className="space-y-6">
              {/* Price Calculator */}
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Calculator className="w-6 h-6 text-orange-primary mr-2" />
                    Price Estimate
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Base Price:</span>
                      <span className="font-semibold">₹--/sq ft</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Area:</span>
                      <span className="font-semibold">-- sq ft</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between text-lg">
                      <span className="font-bold">Total:</span>
                      <span className="font-bold text-orange-primary">₹--</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-4">
                    *Final price will be confirmed after measurement verification
                  </p>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Star className="w-6 h-6 text-orange-primary mr-2" />
                    What's Included
                  </h3>
                  
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Info */}
              <Card className="shadow-elegant bg-gradient-orange text-white">
                <CardContent className="p-6 text-center">
                  <Truck className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Free Delivery</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Free shipping across India. Delivered within 7-10 business days.
                  </p>
                  <Badge className="bg-white text-orange-primary">
                    Pan India Service
                  </Badge>
                </CardContent>
              </Card>

              {/* Guarantee */}
              <Card className="shadow-elegant">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-orange-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
                  <p className="text-sm text-muted-foreground">
                    7-day quality guarantee. If you're not satisfied, we'll make it right.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Bulk Orders?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Special pricing available for restaurants, offices, and institutions. 
            Contact us for custom quotes on large quantities.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-orange-primary text-orange-primary hover:bg-orange-light"
          >
            Contact for Bulk Pricing
          </Button>
        </div>
      </section>
    </div>
  )
}