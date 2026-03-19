import { useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/918129326323?text=Hello%2C%20I%20need%20house%20shifting%20service.%20Please%20share%20details.";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#gallery", label: "Gallery" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <img src="/movebuddy.webp" alt="MoveBuddy Logo" className="h-12 w-auto transition-transform group-hover:scale-105" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground/80 font-semibold hover:text-primary transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex btn-accent px-8 py-3">
          Book Now
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-nav border-t border-border px-6 pb-6 space-y-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-foreground font-medium py-2">
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block btn-accent px-6 py-3 text-center">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
