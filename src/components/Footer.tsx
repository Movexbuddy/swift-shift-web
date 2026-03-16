import { Phone, Mail, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/918129326323?text=Hello%2C%20I%20need%20house%20shifting%20service.%20Please%20share%20details.";

const Footer = () => (
  <footer className="bg-foreground text-muted py-16 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-2">
        <div className="text-2xl font-bold text-primary-foreground mb-4">MoveBuddy</div>
        <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
          The most trusted name in residential and commercial relocation services. Safe, fast, and reliable.
        </p>
        <div className="flex items-center gap-3 text-muted-foreground mb-2">
          <Phone className="w-4 h-4" /> <span className="text-sm">+91 98765 43210</span>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <Mail className="w-4 h-4" /> <span className="text-sm">hello@movebuddy.com</span>
        </div>
      </div>

      <div>
        <h5 className="text-primary-foreground font-bold mb-6">Service Areas</h5>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {["Kochi", "Kalamassery", "Kaloor", "Kadavanthra"].map((a) => (
            <li key={a} className="flex items-center gap-2"><MapPin className="w-3 h-3" />{a}</li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="text-primary-foreground font-bold mb-6">Quick Links</h5>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
          <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
          <li><a href="#process" className="hover:text-primary transition-colors">How It Works</a></li>
          <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
        </ul>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-accent font-bold hover:underline text-sm">
          Chat with an Expert →
        </a>
      </div>
    </div>

    <div className="max-w-7xl mx-auto border-t border-muted-foreground/20 mt-16 pt-8 text-sm text-center text-muted-foreground">
      © {new Date().getFullYear()} MoveBuddy Logistics. All rights reserved.
    </div>
  </footer>
);

export default Footer;
