import { Users, ShieldCheck, Clock, IndianRupee, Headphones } from "lucide-react";

const features = [
  { icon: Users, title: "Professional Packers", desc: "Trained team with years of hands-on experience." },
  { icon: ShieldCheck, title: "Safe Handling", desc: "Multi-layer packing for maximum protection." },
  { icon: Clock, title: "On-Time Delivery", desc: "We commit to your schedule and deliver on it." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Competitive rates with no hidden charges." },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock assistance for all your queries." },
];

const WhyChooseUsSection = () => (
  <section className="section-padding bg-surface">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground fade-up">
        Why Choose SafeShift?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {features.map((f, i) => (
          <div key={f.title} className="text-center p-6 rounded-2xl bg-card card-shadow hover:card-shadow-hover transition-shadow duration-300 fade-up" data-delay={String(i * 80)}>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <f.icon className="w-7 h-7 text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-2">{f.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
