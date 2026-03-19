import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL =
  "https://wa.me/918129326323?text=Hello%2C%20I%20need%20house%20shifting%20service.%20Please%20share%20details.";

const stats = [
  { value: "1000+", label: "Homes Moved" },
  { value: "100%", label: "Safe Delivery" },
  { value: "24/7", label: "Support" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

    {/* ── Background image + overlays ── */}
    <div className="absolute inset-0 z-0">
      <img
        src={heroBg}
        alt="Professional house shifting service"
        className="w-full h-full object-cover opacity-25"
        loading="eager"
      />
      {/* Diagonal gradient mask */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/20" />
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>

    {/* ── Decorative accent circle ── */}
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full opacity-10 blur-3xl pointer-events-none z-0"
      style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
    />

    {/* ── Main content ── */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left column – copy */}
        <div>
          {/* Pill badge */}
          <div className="flex items-center gap-2 mb-8 fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Premium Movers in Kochi
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl md:text-[5rem] font-extrabold leading-[1.05] tracking-tighter text-foreground mb-6 fade-up"
            data-delay="100"
          >
            Premium
            <br />
            House{" "}
            <span className="relative inline-block">
              <span className="text-primary">Shifting</span>
              {/* underline accent */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6 Q100 1 198 6"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </span>
            <br />
            in Kochi.
          </h1>

          {/* Sub-copy */}
          <p
            className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg fade-up"
            data-delay="200"
          >
            Top-rated packers and movers. Professional packing, secure transport, and seamless setup.
            We handle the heavy lifting so you can enjoy your new beginning in Kerala.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 fade-up" data-delay="300">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-8 py-4 text-base font-bold text-center flex items-center justify-center gap-3 transition-transform"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get Free Quote
            </a>
            <a
              href="#services"
              className="bg-surface/50 backdrop-blur-sm border border-border/60 px-8 py-4 rounded-xl font-bold text-base hover:bg-surface transition-all duration-300 text-center shadow-sm hover:shadow-md flex items-center justify-center gap-2"
            >
              Our Services
            </a>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-10 fade-up" data-delay="400">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-extrabold text-foreground tracking-tight">
                  {s.value}
                </span>
                <span className="text-sm text-muted-foreground mt-1 font-medium whitespace-nowrap">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column – image card */}
        <div className="hidden lg:flex justify-center items-center fade-up" data-delay="200">
          <div className="relative w-[420px] h-[520px]">
            {/* Rotated border card behind */}
            <div
              className="absolute inset-0 rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-sm"
              style={{ transform: "rotate(3deg) scale(0.97)" }}
            />
            {/* Main image card */}
            <div className="relative rounded-2xl overflow-hidden w-full h-full card-shadow border border-border">
              <img
                src={heroBg}
                alt="Professional house shifting"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Floating info chip */}
              <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Trusted by 1000+ families</p>
                  <p className="text-xs text-muted-foreground">in Kakkanad, Edappally & beyond</p>
                </div>
                <div className="ml-auto flex -space-x-2">
                  {["🏠", "📦", "🚛"].map((e, i) => (
                    <span key={i} className="w-8 h-8 rounded-full bg-surface border-2 border-card flex items-center justify-center text-sm shadow-sm z-[calc(3-var(--i))] relative" style={{ '--i': i } as any}>
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default HeroSection;
