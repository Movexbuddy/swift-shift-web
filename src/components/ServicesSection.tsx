import { Home, Building2, PackageOpen, Armchair, MapPin, Truck } from "lucide-react";

const services = [
  { icon: Home, title: "Home Shifting", desc: "Complete residential relocation with specialized handling for fragile items." },
  { icon: Building2, title: "Office Relocation", desc: "Efficient commercial moving to minimize downtime for your business." },
  { icon: PackageOpen, title: "Packing & Unpacking", desc: "Industry-grade materials and techniques to protect your valuables." },
  { icon: Armchair, title: "Furniture Moving", desc: "Careful disassembly, transport, and reassembly of all furniture types." },
  { icon: MapPin, title: "Local Moving", desc: "Quick and affordable moving services within your city limits." },
  { icon: Truck, title: "Loading & Unloading", desc: "Professional team for efficient and damage-free loading operations." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-surface">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground fade-up">Our Moving Solutions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto fade-up" data-delay="100">
          Tailored services designed to make your relocation stress-free and efficient.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={s.title} className="service-card group fade-up" data-delay={String(i * 100)}>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
