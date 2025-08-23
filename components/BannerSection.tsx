const BannerSection = () => {
  return (
    <div className="h-[600px] md:h-[500px] bg-cover bg-center bg-[url('/outside-1.webp')] relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-24 bg-black/60">
        <h3 className="xl:text-4xl text-4xl font-semibold text-white text-center font-secondary max-w-5xl italic leading-14 intersect:animate-fade intersect:animate-delay-300">
          ¡Descubrí un espacio pensado para el descanso, el bienestar y confort!
        </h3>
      </div>
    </div>
  );
};

export default BannerSection;
