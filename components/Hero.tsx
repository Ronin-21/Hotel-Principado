import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-dvh bg-cover bg-center bg-[url('/outside-5.jpg')] flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl mb-6 font-semibold uppercase font-hero">
          Descubrí un nuevo modo de vivir Termas
        </h1>
        <h2 className="text-xl md:text-3xl mb-8 font-light max-w-3xl mx-auto leading-relaxed italic font-secondary">
          Tu refugio termal de confort y descanso
        </h2>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
    </section>
  );
};

export default Hero;
