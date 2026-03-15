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
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground fade-up">
        Simple 4-Step Move
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-border" />

        {steps.map((s, i) => (
          <div key={s.num} className="text-center relative zoom-in" data-delay={String(i * 150)}>
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
              <s.icon className="w-7 h-7" />
            </div>
            <h4 className="font-bold text-foreground text-lg mb-2">{s.title}</h4>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
