import { Users, ShieldCheck, Clock, IndianRupee, Headphones } from "lucide-react";

const features = [
  { icon: Users, title: "Professional Packers", desc: "Trained team with years of hands-on experience." },
  { icon: ShieldCheck, title: "Safe Handling", desc: "Multi-layer packing for maximum protection." },
  { icon: Clock, title: "On-Time Delivery", desc: "We commit to your schedule and deliver on it." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Competitive rates with no hidden charges." },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock assistance for all your queries." },
];

const WhyChooseUsSection = () => (
  <section id="why-us" className="section-padding bg-surface/50 border-y border-border/40">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground fade-up tracking-tight mb-6">
          Why Choose MoveBuddy?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-up" data-delay="100">
          We combine cutting-edge logistics with a customer-first approach to deliver unmatched reliability.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {features.map((f, i) => (
          <div key={f.title} className="text-center p-8 rounded-2xl glass-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-elevated)] fade-up group" data-delay={String(i * 80)}>
            <div className="w-16 h-16 bg-primary/10 rounded-[1.25rem] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
              <f.icon className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-3 text-lg leading-tight tracking-tight">{f.title}</h4>
            <p className="text-muted-foreground text-[15px] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
