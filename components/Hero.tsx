import Image from "next/image";

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
      <div className="relative z-10 max-w-5xl px-4 mx-auto text-center text-white text-shadow-md text-shadow-dark/50">
        <h1 className="text-5xl md:text-8xl mb-6 font-semibold font-hero animate-fade-down animate-once animate-duration-[3000ms]">
          Tu escapada ideal comienza aquí
        </h1>
        <h2 className="text-xl md:text-3xl max-w-3xl mx-auto leading-relaxed italic font-secondary text-primary font-semibold animate-fade-down animate-once animate-duration-[2000ms]">
          Confort, gastronomía y relax termal en pleno centro de Termas
        </h2>
      </div>
    </section>
  );
};

export default Hero;
