import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">PVK ENTERPRISES</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recognized as one of the best trophy and awards manufacturing companies in Kerala.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center smooth-transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center smooth-transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center smooth-transition"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary smooth-transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary smooth-transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-muted-foreground hover:text-primary smooth-transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/maps" className="text-sm text-muted-foreground hover:text-primary smooth-transition">
                  Maps
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact</h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  PVK TOWER, Near Village Office, Maranchery Centre, Marancheri, Malappuram, Kerala 679581
                </span>
              </li>
              <li className="flex gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:pvkmaranchery707@gmail.com" className="hover:text-primary smooth-transition">
                  pvkmaranchery707@gmail.com
                </a>
              </li>
              <li className="flex gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919142107707" className="hover:text-primary smooth-transition">
                    +91-9142107707
                  </a>
                  <a href="tel:+918891515015" className="hover:text-primary smooth-transition">
                    +91-8891515015
                  </a>
                  <a href="tel:+91907233707" className="hover:text-primary smooth-transition">
                    +91-907233707
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Working Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Mon - Sat:</span>
                <br />
                09:00 AM - 07:30 PM
              </li>
              <li>
                <span className="font-medium text-foreground">Sunday:</span>
                <br />
                Closed
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© Copyrights 2025 - 2026. PVK ENTERPRISES. All Rights Reserved.</p>
            <div className="flex items-center gap-2">
              <span>Powered By</span>
              <span className="font-bold text-primary">JustDial</span>
              <span className="text-yellow-500">★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
