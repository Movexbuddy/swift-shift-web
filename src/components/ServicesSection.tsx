import { Home, Building2, PackageOpen, Armchair, MapPin, Truck } from "lucide-react";

const services = [
  { icon: Home, title: "Home Shifting Kochi", desc: "Complete residential relocation across Kochi with specialized handling for fragile items." },
  { icon: Building2, title: "Office Relocation", desc: "Efficient commercial moving in Ernakulam to minimize downtime for your business." },
  { icon: PackageOpen, title: "Packing & Unpacking", desc: "Industry-grade materials and techniques to protect your valuables during the move." },
  { icon: Armchair, title: "Furniture Moving", desc: "Careful disassembly, transport, and reassembly of all furniture types." },
  { icon: MapPin, title: "Local Moving (Kakkanad & Aluva)", desc: "Quick and affordable packers and movers services within your city limits, including Edappally." },
  { icon: Truck, title: "Loading & Unloading", desc: "Professional team for efficient and damage-free loading operations in Kerala." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-surface">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground fade-up">Our Professional House Shifting Services in Kochi</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto fade-up" data-delay="100">
          Tailored moving solutions designed to make your relocation stress-free and efficient across Ernakulam.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {services.map((s, i) => (
          <div key={s.title} className="service-card group fade-up" data-delay={String(i * 100)}>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all duration-500">
              <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-500" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground tracking-tight">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-[15px]">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
