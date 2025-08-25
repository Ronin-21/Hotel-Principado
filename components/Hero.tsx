import Image from "next/image";
import FadeComponent from "./animations/FadeComponent";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center overflow-hidden min-h-dvh"
    >
      {/* Imagen de fondo optimizada */}
      <Image
        src="/outside-5.webp"
        alt="Vista exterior del Grand Hotel Principado"
        fill
        priority
        quality={75}
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/60" />

      {/* Contenido */}
      <div>
        <FadeComponent
          cascade={true}
          damping={0.2}
          direction="down"
          className="max-w-5xl px-4 mx-auto text-center text-white text-shadow-md text-shadow-dark/50"
        >
          <h1 className="mb-6 text-5xl font-semibold md:text-8xl font-hero">
            Tu escapada ideal comienza aquí
          </h1>
          <h2 className="max-w-3xl mx-auto text-xl italic font-semibold leading-relaxed md:text-3xl font-secondary text-primary">
            Confort, gastronomía y relax termal en pleno centro de Termas
          </h2>
        </FadeComponent>
      </div>
    </section>
  );
};

export default Hero;
