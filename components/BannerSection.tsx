import Image from "next/image";
import FadeComponent from "./animations/FadeComponent";

const BannerSection = () => {
  return (
    <div className="h-[600px] md:h-[500px] w-full relative">
      {/* Imagen optimizada con Next */}
      <Image
        src="/outside-1.webp"
        alt="Vista exterior del hotel Ambassador"
        fill
        priority
        quality={80}
        className="object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-24 bg-black/60">
        <FadeComponent direction="up" duration={1500} delay={500}>
          <h3 className="max-w-5xl text-4xl italic font-semibold text-center text-white xl:text-4xl font-secondary leading-14">
            ¡Descubrí un espacio pensado para el descanso, el bienestar y
            confort!
          </h3>
        </FadeComponent>
      </div>
    </div>
  );
};

export default BannerSection;
