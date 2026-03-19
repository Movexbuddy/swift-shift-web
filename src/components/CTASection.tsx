import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/918129326323?text=Hello%2C%20I%20need%20house%20shifting%20service.%20Please%20share%20details.";

const CTASection = () => (
  <section className="py-24 px-6 relative">
    <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden fade-up shadow-2xl border border-primary-glow/30">
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-primary-foreground tracking-tight leading-tight">
          Ready to start moving?
        </h2>
        <p className="text-primary-foreground/90 text-lg md:text-xl mb-12 max-w-2xl font-medium leading-relaxed">
          Join 1,000+ happy families who relocated safely with MoveBuddy. Get your free house shifting quote in Kochi today!
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-background text-foreground font-bold px-10 py-5 rounded-2xl text-[1.125rem] hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.25)] transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6 text-green-500" />
          Get Free Quote on WhatsApp
        </a>
      </div>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.1),transparent_50%)] pointer-events-none" />
    </div>
  </section>
);

export default CTASection;
