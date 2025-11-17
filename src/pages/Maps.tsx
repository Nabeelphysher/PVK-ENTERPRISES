import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Maps = () => {
  const handleGetDirections = () => {
    window.open(
      "https://www.google.com/maps/dir//PVK+ENTERPRISES+Marancheri+Malappuram+Kerala+679581",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Find Us</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Visit our showroom and experience our products firsthand
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Location Card */}
          <Card className="border-2 shadow-lg mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">PVK Enterprises</h2>
                  <p className="text-muted-foreground mb-4">
                    PVK TOWER, Near Village Office
                    <br />
                    Maranchery Centre, Marancheri
                    <br />
                    Malappuram, Kerala 679581
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <p>
                      <span className="font-semibold text-foreground">Phone:</span> +91-9142107707,
                      +91-8891515015
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Working Hours:</span> Mon - Sat:
                      09:00 AM - 07:30 PM
                    </p>
                  </div>
                  <Button onClick={handleGetDirections} size="lg" className="gap-2">
                    <Navigation className="h-5 w-5" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Container */}
          <Card className="border-2 shadow-lg overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.7!2d76.0!3d10.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU0JzAwLjAiTiA3NsKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PVK Enterprises Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🚗</span>
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Easy Access</h3>
                <p className="text-sm text-muted-foreground">
                  Conveniently located near Village Office with ample parking space
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Modern Showroom</h3>
                <p className="text-sm text-muted-foreground">
                  Visit our spacious showroom to explore our complete product range
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Expert Staff</h3>
                <p className="text-sm text-muted-foreground">
                  Our friendly team is ready to assist with your requirements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
