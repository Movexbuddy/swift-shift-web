import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Professional packing services" },
  { src: g2, alt: "Loaded moving truck" },
  { src: g3, alt: "Perfectly arranged living room after move" },
  { src: g4, alt: "Team carrying furniture" },
  { src: g5, alt: "Organized packing boxes" },
  { src: g6, alt: "Office relocation in progress" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground fade-up tracking-tight">
          Our Work in Action
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, i) => (
          <div key={i} className="relative overflow-hidden rounded-[2rem] card-shadow zoom-in group isolate border border-border/20" data-delay={String(i * 100)}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-72 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
