import PagesHero from "@/components/PagesHero";
import GalleryGrid from "./components/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PagesHero bgUrl="/bar-4.png" />
      {/* Gallery Section */}
      <section className="pb-40 pt-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="mb-20 gap-5 text-center flex flex-col items-center">
            <h2 className="text-4xl font-semibold tracking-tight font-title">
              Nuestra Galería
            </h2>
            <h4 className="md:text-xl text-lg font-semibold text-primary font-subtitle">
              Cada rincón cuenta su historia
            </h4>
            <p className="md:text-lg text-dark/60 max-w-3xl mt-5">
              Sumergite en nuestra galería y recorré los espacios del Hotel
              Principado: habitaciones, piletas, restaurante y áreas de relax.
              Las fotos reflejan la calidez, elegancia y experiencias únicas que
              te esperan en Termas de Río Hondo
            </p>
          </div>
          <GalleryGrid />
        </div>
      </section>
    </div>
  );
}
