import Image from "next/image";

interface HeroProps {
  bgUrl: string;
  alt?: string;
}

const PagesHero = ({ bgUrl, alt = "Imagen de portada" }: HeroProps) => {
  return (
    <div className="relative md:h-[50vh] h-96 w-full overflow-hidden">
      {/* Imagen optimizada */}
      <Image
        src={bgUrl}
        alt={alt}
        fill
        className="object-cover object-center"
        priority
        quality={75}
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50" />
    </div>
  );
};

export default PagesHero;
