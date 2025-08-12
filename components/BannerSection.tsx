const BannerSection = () => {
  return (
    <div className="h-[700px] xl:h-[500px] bg-cover bg-center bg-[url('/default-image.jpg')] relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-24 bg-black/60">
        <h3 className="xl:text-4xl text-4xl font-semibold text-white text-center font-secondary max-w-5xl italic">
          Descubrí un espacio pensado para el descanso, el bienestar y la
          elegancia
        </h3>
      </div>
    </div>
  );
};

export default BannerSection;
