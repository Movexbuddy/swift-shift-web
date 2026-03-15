import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20need%20house%20shifting%20service.%20Please%20share%20details.";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={heroBg} alt="Professional house shifting service" className="w-full h-full object-cover opacity-20" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
      <div className="max-w-3xl">
        <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 tracking-wide uppercase fade-up">
          Premium Moving Service
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-foreground fade-up" data-delay="100">
          Your entire home, <br />
          <span className="text-primary">moved with care.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl fade-up" data-delay="200">
          Professional packing, secure transport, and seamless setup. We handle the heavy lifting so you can enjoy your new beginning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 fade-up" data-delay="300">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-4 text-lg text-center">
            Get Free Quote via WhatsApp
          </a>
          <a href="#services" className="bg-card border border-border px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors text-center card-shadow">
            View Our Services
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
