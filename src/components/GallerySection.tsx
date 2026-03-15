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
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground fade-up">
        Our Work in Action
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-2xl card-shadow zoom-in group" data-delay={String(i * 100)}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
