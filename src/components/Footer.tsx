import { Link } from "react-router-dom";
import { Mail, Globe, Copyright } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted mt-20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Heartcode</h3>
            <p className="text-muted-foreground text-sm">
              Crafting exceptional digital experiences through innovative web development solutions.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">UI/UX Design</Link></li>
              <li><Link to="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">E-commerce Solutions</Link></li>
              <li><Link to="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">SEO/SEM</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/our-work" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Work</Link></li>
              <li><Link to="/#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/#timeline" className="text-sm text-muted-foreground hover:text-primary transition-colors">Process</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@heartcode.io" className="hover:text-primary transition-colors">
                  hello@heartcode.io
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="h-4 w-4" />
                <a href="https://heartcode.io" className="hover:text-primary transition-colors">
                  heartcode.io
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 flex items-center justify-center text-sm text-muted-foreground">
          <Copyright className="h-4 w-4 mr-2" />
          <p>{currentYear} Heartcode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};