import { Award, Users, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About PVK Enterprises</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for quality trophies, awards, and business solutions in Kerala
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-2 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  We, <span className="font-bold text-primary">PVK ENTERPRISES</span>, situated at
                  Marancheri, Malappuram, Kerala, are recognized as one of the best trophy and awards
                  manufacturing companies.
                </p>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  We design elegant, traditional and modern trophies made from a selection of metals that
                  the clients can take their pick from. Our extensive range includes trophies for sports,
                  corporate awards, academic achievements, and special recognitions.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  We are committed to deliver quality products to our customers with our creative approach
                  in design and with the help of our dedicated and experienced team. Every piece we create
                  reflects our passion for excellence and attention to detail.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 card-hover-effect">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Quality</h3>
                <p className="text-muted-foreground">
                  Uncompromising standards in every product we create
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 card-hover-effect">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Experience</h3>
                <p className="text-muted-foreground">Decades of expertise in trophy manufacturing</p>
              </CardContent>
            </Card>

            <Card className="border-2 card-hover-effect">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Innovation</h3>
                <p className="text-muted-foreground">Creative designs that stand out from the crowd</p>
              </CardContent>
            </Card>

            <Card className="border-2 card-hover-effect">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Dedication</h3>
                <p className="text-muted-foreground">
                  Committed to exceeding customer expectations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 shadow-lg overflow-hidden">
            <div className="hero-gradient p-8 text-primary-foreground">
              <h2 className="text-3xl font-bold mb-2">Visit Our Showroom</h2>
              <p className="text-lg opacity-90">Experience our products firsthand</p>
            </div>
            <CardContent className="p-8">
              <div className="space-y-4 text-foreground">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    PVK TOWER, Near Village Office
                    <br />
                    Maranchery Centre, Marancheri
                    <br />
                    Malappuram, Kerala 679581
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 09:00 AM - 07:30 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
