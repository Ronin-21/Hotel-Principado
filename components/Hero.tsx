const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-dvh bg-cover bg-center bg-[url('/outside-5.webp')] flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 text-shadow-md text-shadow-dark/50">
        <h1 className="text-5xl md:text-8xl mb-6 font-semibold font-hero animate-fade-down animate-once animate-duration-[3000ms]">
          Tu escapada ideal comienza aquí
        </h1>
        <h2 className="text-xl md:text-3xl max-w-3xl mx-auto leading-relaxed italic font-secondary text-primary font-semibold animate-fade-down animate-once animate-duration-[2000ms]">
          Confort, gastronomía y relax termal en pleno centro de Termas
        </h2>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
    </section>
  );
};

export default Hero;
