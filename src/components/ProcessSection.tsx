import { MessageCircle, PackageCheck, TruckIcon, HomeIcon } from "lucide-react";

const steps = [
  { icon: MessageCircle, num: "1", title: "Book", desc: "Share details on WhatsApp" },
  { icon: PackageCheck, num: "2", title: "Pack", desc: "Professional packing team arrives" },
  { icon: TruckIcon, num: "3", title: "Transport", desc: "Safe transit in closed trucks" },
  { icon: HomeIcon, num: "4", title: "Deliver", desc: "Unpacking and setup at destination" },
];

const ProcessSection = () => (
  <section id="process" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-20 text-foreground fade-up tracking-tight">
        Simple 4-Step Move
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-[4.5rem] left-[12.5%] right-[12.5%] h-1 bg-border/50 rounded-full" />

        {steps.map((s, i) => (
          <div key={s.num} className="text-center relative zoom-in group" data-delay={String(i * 150)}>
            <div className="w-[5.5rem] h-[5.5rem] bg-surface border border-border/80 shadow-md text-primary rounded-full flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(var(--primary),0.3)]">
              <span className="absolute -top-1 -right-1 w-7 h-7 bg-foreground text-background text-xs font-bold rounded-full flex items-center justify-center border-2 border-background shadow-sm">
                {s.num}
              </span>
              <s.icon className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-foreground text-xl mb-3 tracking-tight">{s.title}</h4>
            <p className="text-muted-foreground leading-relaxed px-4 text-[15px]">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
