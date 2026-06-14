import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCall from "@/components/FloatingCall";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <WhyChooseUsSection />
      {/* <GallerySection /> */}
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
      <FloatingCall />
    </div>
  );
};

export default Index;
