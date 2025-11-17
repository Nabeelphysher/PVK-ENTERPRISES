import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Deepak Rao",
    role: "Business Owner",
    content: "Have been doing business with them for a while now. Never been disappointed.",
    rating: 5,
  },
  {
    name: "Venkat Shetty",
    role: "Corporate Client",
    content:
      "We bought trophies from here for my office events. Exceptional quality and service.",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "Event Organizer",
    content:
      "Outstanding craftsmanship! The trophies were delivered on time and exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "School Administrator",
    content:
      "Best place for bulk orders. Quality products at competitive prices. Highly recommended!",
    rating: 5,
  },
  {
    name: "Aisha Mohammed",
    role: "Sports Club Manager",
    content:
      "Elegant designs and excellent customer service. They understood exactly what we needed.",
    rating: 5,
  },
  {
    name: "Suresh Pillai",
    role: "Restaurant Owner",
    content:
      "Got custom trophies for our annual awards. The attention to detail was remarkable.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">What Our Clients Say</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Rating Summary */}
        <div className="max-w-md mx-auto mb-16">
          <Card className="border-2 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-4xl font-bold text-foreground mb-2">5.0</p>
              <p className="text-muted-foreground">Based on {testimonials.length}+ reviews</p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 card-hover-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">{testimonial.content}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 shadow-lg overflow-hidden">
            <div className="hero-gradient p-8 md:p-12 text-center text-primary-foreground">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h2>
              <p className="text-lg mb-6 opacity-90">
                Join hundreds of satisfied customers who trust PVK Enterprises for their trophy and award
                needs
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 smooth-transition"
              >
                Get Started Today
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
