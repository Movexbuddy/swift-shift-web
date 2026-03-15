import { Shield, Clock, Award } from "lucide-react";

const highlights = [
  { icon: Shield, label: "Safe Handling", desc: "Industry-grade packing materials" },
  { icon: Clock, label: "On-Time Delivery", desc: "We respect your schedule" },
  { icon: Award, label: "10+ Years", desc: "Trusted by 5,000+ families" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground fade-up">
            Relocation experts you can <span className="text-primary">trust</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 fade-up" data-delay="100">
            With over a decade of experience, SafeShift has helped thousands of families and businesses relocate safely. Our trained professionals use industry-grade materials and proven techniques to ensure every item — from fragile glassware to heavy furniture — reaches its destination in perfect condition.
          </p>
          <div className="grid gap-6 fade-up" data-delay="200">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <h.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{h.label}</h4>
                  <p className="text-muted-foreground text-sm">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative zoom-in">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 gap-6 text-center">
              {[
                ["5,000+", "Moves Completed"],
                ["10+", "Years Experience"],
                ["98%", "Client Satisfaction"],
                ["24/7", "Customer Support"],
              ].map(([val, label]) => (
                <div key={label} className="bg-card rounded-2xl p-6 card-shadow">
                  <div className="text-3xl font-bold text-primary mb-1">{val}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
