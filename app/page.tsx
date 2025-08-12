import AmenitiesSection from "@/components/AmenitiesSection";
import BannerSection from "@/components/BannerSection";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import LocationSection from "@/components/LocationSection";
import PackagesSection from "@/components/PackagesSection";
import ServicesSection from "@/components/ServicesSection";
import WelcomeSection from "@/components/WelcomeSection";
import WhatsAppButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AmenitiesSection />
      <WelcomeSection />
      <GallerySection />
      <ServicesSection />
      <PackagesSection />
      <BannerSection />
      <LocationSection />
      <WhatsAppButton phone={"+543858480489"} />
    </main>
  );
}
