const WHATSAPP_URL = "https://wa.me/918129326323?text=Hello%2C%20I%20need%20house%20shifting%20service.%20Please%20share%20details.";

const CTASection = () => (
  <section className="py-20 px-6">
    <div className="max-w-5xl mx-auto bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden fade-up">
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
          Ready to start moving?
        </h2>
        <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Join 5,000+ happy families who moved safely with MoveBuddy. Get your quote in 5 minutes.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block btn-accent px-10 py-5 text-xl shadow-2xl"
        >
          Message us on WhatsApp
        </a>
      </div>
      {/* Decorative */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-glow rounded-full opacity-40" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary-glow rounded-full opacity-30" />
    </div>
  </section>
);

export default CTASection;
