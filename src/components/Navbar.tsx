import { useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20need%20house%20shifting%20service.%20Please%20share%20details.";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#gallery", label: "Gallery" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-40 glass-nav border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tight text-primary">SafeShift</a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground font-medium hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex btn-accent px-6 py-2.5">
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
