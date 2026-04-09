import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ProductShowcase from "@/components/ProductShowcase";
import ProcessSection from "@/components/ProcessSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const containerRef = useScrollAnimation();

  return (
    <div ref={containerRef} className="min-h-screen">
      <Header />
      <HeroSection />
      <StorySection />
      <ProductShowcase />
      <ProcessSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
