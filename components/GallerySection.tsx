import Image from "next/image";
import MyButton from "./MyButton";
import FadeComponent from "./animations/FadeComponent";

const images = [
  { src: "/room-4.webp", alt: "Habitaciones" },
  { src: "/lobby-1.webp", alt: "Sala principal" },
  {
    src: "/bar-1.webp",
    alt: "Restaurante",
  },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container flex flex-col gap-10 mx-auto">
        <div className="px-4 text-center md:px-0">
          <h2 className="mb-4 text-4xl md:text-6xl text-dark font-title">
            Nuestra Galería
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-dark/60 font-secondary">
            Descubrí la esencia del Hotel Principado en imágenes que reflejan
            confort, estilo y hospitalidad
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-0">
          <FadeComponent cascade={true} damping={0.2} direction="down">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-[4/3]"
              >
                <Image
                  src={image.src || "/default-image.jpg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  quality={70}
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/20 group-hover:opacity-100" />
                <div className="absolute text-white transition-opacity duration-300 opacity-0 bottom-4 left-4 group-hover:opacity-100">
                  <p className="text-lg font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </FadeComponent>
        </div>
        <MyButton className="self-center" href="/galeria">
          Ver más
        </MyButton>
      </div>
    </section>
  );
};

export default GallerySection;
