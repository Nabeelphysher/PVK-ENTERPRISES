import { Award, Palette, FileText, Stamp, Printer, Monitor, Package, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Award,
    title: "Trophy & Awards",
    description: "Elegant trophies for sports, corporate, and academic achievements",
    items: ["Sports Trophies", "Corporate Awards", "Academic Medals", "Custom Trophies"],
  },
  {
    icon: Palette,
    title: "Studio Materials",
    description: "Professional studio supplies for creative work",
    items: ["Art Supplies", "Canvas", "Paints & Brushes", "Easels"],
  },
  {
    icon: FileText,
    title: "Office & Stationery",
    description: "Complete office solutions for your business needs",
    items: ["Paper Products", "Writing Instruments", "Files & Folders", "Desk Accessories"],
  },
  {
    icon: Stamp,
    title: "Custom Rubber Stamps",
    description: "Personalized stamps for every business requirement",
    items: ["Self-inking Stamps", "Date Stamps", "Name Stamps", "Company Seals"],
  },
  {
    icon: Printer,
    title: "Custom Printing",
    description: "High-quality printing services for all materials",
    items: ["Business Cards", "Brochures", "Flyers", "Letterheads"],
  },
  {
    icon: Monitor,
    title: "Computers & Accessories",
    description: "Complete technology solutions",
    items: ["Printers", "Inks & Toners", "Cables", "Computer Peripherals"],
  },
  {
    icon: Package,
    title: "Offset Printing",
    description: "Professional offset printing for bulk orders",
    items: ["Magazines", "Books", "Catalogs", "Posters"],
  },
  {
    icon: Smartphone,
    title: "Mobile Accessories",
    description: "Latest mobile accessories and gadgets",
    items: ["Phone Cases", "Screen Protectors", "Chargers", "Cables"],
  },
];

const Categories = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Product Categories</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of products designed to meet all your business and personal
            needs
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="border-2 card-hover-effect">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <ul className="space-y-2 mb-4">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Enquire Now</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 shadow-lg overflow-hidden">
            <div className="hero-gradient p-8 md:p-12 text-center text-primary-foreground">
              <h2 className="text-3xl font-bold mb-4">Need Something Specific?</h2>
              <p className="text-lg mb-6 opacity-90">
                Can't find what you're looking for? Contact us for custom solutions and special orders
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Categories;
