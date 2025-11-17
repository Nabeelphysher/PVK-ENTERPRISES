import { Link } from "react-router-dom";
import { Award, Palette, FileText, Stamp, Printer, Monitor, Package, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    icon: Award,
    title: "Trophy & Awards",
    description: "Elegant trophies for every occasion",
    link: "/categories",
  },
  {
    icon: Palette,
    title: "Studio Materials",
    description: "Professional studio supplies",
    link: "/categories",
  },
  {
    icon: FileText,
    title: "Office & Stationery",
    description: "Complete office solutions",
    link: "/categories",
  },
  {
    icon: Stamp,
    title: "Custom Rubber Stamps",
    description: "Personalized stamps",
    link: "/categories",
  },
  {
    icon: Printer,
    title: "Custom Printing",
    description: "High-quality printing services",
    link: "/categories",
  },
  {
    icon: Monitor,
    title: "Computers & Accessories",
    description: "Tech solutions",
    link: "/categories",
  },
  {
    icon: Package,
    title: "Offset Printing",
    description: "Professional printing",
    link: "/categories",
  },
  {
    icon: Smartphone,
    title: "Mobile Accessories",
    description: "Latest accessories",
    link: "/categories",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="surface-panel-gradient hero-gradient text-primary-foreground py-16 md:py-28 px-6 md:px-12 animate-fade-in">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Excellence in Trophy & Awards Manufacturing
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Delivering quality products with creative designs since years. Your trusted partner for
                trophies, office supplies, and printing solutions in Kerala.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/categories">Explore Products</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="surface-panel p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Product Categories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse through our comprehensive range of products designed to meet all your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Link to={category.link} key={index}>
                    <Card className="card-hover-effect border h-full">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">{category.title}</h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* UTI PAN Service Section */}
      <section className="py-16 bg-muted/60">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border shadow-xl rounded-3xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-4">
                    Special Service
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    UTI PAN CARD SERVICE
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    UTI Infrastructure Technology And Services Limited - Get your PAN card services done
                    hassle-free at our center.
                  </p>
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90" asChild>
                    <Link to="/contact">Enquire Now</Link>
                  </Button>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground">
                    <div className="text-center">
                      <FileText className="h-20 w-20 mx-auto mb-2" />
                      <p className="font-bold text-lg">PAN Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="surface-panel p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose PVK Enterprises?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Quality Products</h3>
                  <p className="text-muted-foreground">
                    Elegant, traditional, and modern designs crafted with premium materials
                  </p>
                </CardContent>
              </Card>

              <Card className="border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Experienced Team</h3>
                  <p className="text-muted-foreground">
                    Dedicated professionals with creative approach and years of expertise
                  </p>
                </CardContent>
              </Card>

              <Card className="border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Customer Satisfaction</h3>
                  <p className="text-muted-foreground">
                    Trusted by businesses across Kerala with exceptional service quality
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="surface-panel-gradient bg-primary text-primary-foreground text-center py-14 px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Place Your Order?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get in touch with us today for customized solutions and competitive pricing
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
