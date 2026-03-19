import { Shield, Clock, Award } from "lucide-react";

const highlights = [
  { icon: Shield, label: "Safe Handling", desc: "Industry-grade packing materials" },
  { icon: Clock, label: "On-Time Delivery", desc: "We respect your schedule" },
  { icon: Award, label: "10+ Years", desc: "Trusted by 1,000+ families" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-foreground fade-up tracking-tight leading-[1.1]">
            Relocation experts you can <span className="text-primary relative inline-block">trust
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6 Q100 1 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" opacity="0.4" /></svg>
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 fade-up" data-delay="100">
            With over a decade of experience, MoveBuddy has helped thousands of families and businesses relocate safely. Our trained professionals use industry-grade materials and proven techniques to ensure every item — from fragile glassware to heavy furniture — reaches its destination in perfect condition.
          </p>
          <div className="grid gap-8 fade-up" data-delay="200">
            {highlights.map((h, i) => (
              <div key={h.label} className="flex items-start gap-5 group fade-up" data-delay={String(200 + i * 100)}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                  <h.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-1">{h.label}</h4>
                  <p className="text-muted-foreground">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative zoom-in" data-delay="300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-[2.5rem] transform rotate-3" />
          <div className="bg-surface/50 backdrop-blur-sm border border-border/80 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 relative z-10 shadow-xl">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
              {[
                ["1,000+", "Moves Completed"],
                ["10+", "Years Experience"],
                ["98%", "Client Satisfaction"],
                ["24/7", "Customer Support"],
              ].map(([val, label]) => (
                <div
                  key={label}
                  className="glass-card rounded-2xl p-4 sm:p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-2 tracking-tight break-words">
                    {val}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-muted-foreground">
                    {label}
                  </div>
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
