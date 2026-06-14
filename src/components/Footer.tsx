import { Phone, Mail, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/918129326323?text=Hello%2C%20I%20need%20house%20shifting%20service.%20Please%20share%20details.";

const Footer = () => (
  <footer className="bg-foreground text-muted pt-24 pb-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
      <div className="md:col-span-2">
        <div className="text-3xl font-extrabold text-primary-foreground mb-6 tracking-tight">MoveBuddy</div>
        <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed text-[15px]">
          The most trusted name in residential and commercial relocation services. Safe, fast, and reliable.
        </p>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex items-start gap-4 text-muted-foreground hover:text-primary-foreground transition-colors group">
            <div className="w-10 h-10 shrink-0 rounded-full bg-muted/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-[15px] font-medium leading-relaxed mt-2 text-left">
              Kochi, Kerala<br />India 682304
            </span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground hover:text-primary-foreground transition-colors cursor-pointer group w-max">
            <div className="w-10 h-10 shrink-0 rounded-full bg-muted/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-[15px] font-medium">+91 8129326323</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground hover:text-primary-foreground transition-colors cursor-pointer group w-max">
            <div className="w-10 h-10 shrink-0 rounded-full bg-muted/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-[15px] font-medium">hello@movebuddy.com</span>
          </div>
        </div>
      </div>

      <div>
        <h5 className="text-primary-foreground font-bold text-lg mb-8">Service Areas</h5>
        <p className="text-[15px] text-muted-foreground leading-relaxed">
          MoveBuddy provides reliable packers and movers services across
          Kochi, Ernakulam, Kakkanad, Edappally, Aluva, and all major
          districts in Kerala. Safe and hassle-free transportation guaranteed.
        </p>
      </div>

      <div>
        <h5 className="text-primary-foreground font-bold text-lg mb-8">Quick Links</h5>
        <ul className="space-y-4 text-[15px] text-muted-foreground font-medium flex flex-col items-start">
          <li><a href="#services" className="hover:text-primary-foreground transition-colors">Services</a></li>
          <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
          <li><a href="#process" className="hover:text-primary-foreground transition-colors">How It Works</a></li>
          <li><a href="#why-us" className="hover:text-primary-foreground transition-colors">Why Us</a></li>
        </ul>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 text-primary font-bold hover:underline">
          Chat with Us →
        </a>
      </div>
    </div>

    <div className="max-w-7xl mx-auto border-t border-muted-foreground/10 mt-20 pt-8 text-[15px] font-medium text-center text-muted-foreground">
      © {new Date().getFullYear()} MoveBuddy Logistics. All rights reserved.
    </div>
  </footer>
);

export default Footer;
