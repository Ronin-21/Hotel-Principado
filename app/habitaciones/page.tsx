import PagesHero from "@/components/PagesHero";
import RoomsGallery from "./components/RoomsGallery";

const RoomsPage = () => {
  return (
    <div className="flex flex-col">
      <PagesHero bgUrl="/room-3.webp" />
      <section className="md:pb-40 pb-20 pt-20 w-full bg-light">
        <div className="md:mb-20 mb-10 gap-5 text-center flex flex-col items-center px-4 md:px-0">
          <h2 className="text-4xl font-semibold tracking-tight font-title">
            Nuestras Habitaciones
          </h2>
          <h4 className="md:text-xl text-lg font-semibold text-primary font-subtitle">
            Confort y estilo para cada huésped
          </h4>
          <p className="md:text-lg text-dark/60 max-w-3xl mt-5">
            Descubrí habitaciones diseñadas para brindar descanso y bienestar.
            Desde opciones estándar hasta superiores, cada espacio combina
            comodidad, tranquilidad y detalles pensados para que tu estadía en
            Termas de Río Hondo sea inolvidable
          </p>
        </div>
        {/* Habitaciones */}
        <RoomsGallery />
      </section>
    </div>
  );
};

export default RoomsPage;
