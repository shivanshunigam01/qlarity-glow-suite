import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91-9082397964",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@qlaritycovers.com",
      description: "Send us your queries anytime"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Mumbai, Maharashtra, India",
      description: "Pan India delivery available"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9:00 AM - 7:00 PM",
      description: "Sunday: 10:00 AM - 5:00 PM"
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-orange-light to-background">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/api/placeholder/1920/600" 
            alt="Contact background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-orange-primary/10 text-orange-primary border-orange-primary/20 animate-bounce-soft">
            Get In Touch
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">Contact </span>
            <span className="text-orange-primary">Us</span>
          </h1>
          
          <p className="text-xl text-muted-foreground animate-fade-in">
            Have questions about our table covers? We're here to help you find the perfect solution.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                  <p className="text-orange-primary font-semibold mb-2">{info.details}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-8 h-8 text-orange-primary mr-3" />
                  <h2 className="text-3xl font-bold">Send us a Message</h2>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name"
                        className="border-orange-primary/20 focus:border-orange-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name"
                        className="border-orange-primary/20 focus:border-orange-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email"
                      className="border-orange-primary/20 focus:border-orange-primary"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your phone number"
                      className="border-orange-primary/20 focus:border-orange-primary"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="tableSize">Table Size (if known)</Label>
                    <Input 
                      id="tableSize" 
                      placeholder="e.g., 4ft x 6ft or Round 5ft diameter"
                      className="border-orange-primary/20 focus:border-orange-primary"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      className="border-orange-primary/20 focus:border-orange-primary"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-orange text-white hover:shadow-glow"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Quick Order */}
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-orange-primary">
                    Quick Order via WhatsApp
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    For fastest response, send us your table measurements directly on WhatsApp. 
                    We'll provide an instant quote!
                  </p>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    WhatsApp Now
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-orange-primary mb-2">
                        How do I measure my table?
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Measure length and width for rectangular tables, or diameter for round tables. 
                        We'll add appropriate margins for perfect fit.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-orange-primary mb-2">
                        What's the delivery time?
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Custom covers are manufactured within 3-5 business days and delivered 
                        within 7-10 days across India.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-orange-primary mb-2">
                        Do you provide installation?
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Our covers are designed for easy self-installation. We provide detailed 
                        instructions with every order.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Customer Support */}
              <Card className="shadow-elegant bg-gradient-orange text-white">
                <CardContent className="p-8 text-center">
                  <Phone className="w-12 h-12 mx-auto mb-4 animate-bounce-soft" />
                  <h3 className="text-2xl font-bold mb-4">
                    Need Immediate Help?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Our customer support team is ready to assist you with any questions 
                    about sizing, materials, or orders.
                  </p>
                  <Button 
                    className="bg-white text-orange-primary hover:bg-gray-100 font-bold"
                  >
                    Call +91-9082397964
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Pan India Delivery
            </h2>
            <p className="text-lg text-muted-foreground">
              We deliver premium table covers to every corner of India
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto shadow-elegant overflow-hidden">
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-orange-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Serving All Major Cities
                </h3>
                <p className="text-muted-foreground">
                  Mumbai • Delhi • Bangalore • Chennai • Pune • Hyderabad • Kolkata • Ahmedabad
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}