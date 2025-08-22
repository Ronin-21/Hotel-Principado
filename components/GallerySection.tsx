import Image from "next/image";
import MyButton from "./MyButton";

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
        <div className="text-center px-4 md:px-0">
          <h2 className="text-4xl md:text-5xl text-dark mb-4 font-title">
            Nuestra Galería
          </h2>
          <p className="md:text-xl text-dark/60 text-lg max-w-2xl mx-auto font-secondary">
            Descubrí la esencia del Hotel Principado en imágenes que reflejan
            confort, estilo y hospitalidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
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
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-lg font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
        <MyButton className="self-center">
          <a href="/galeria">Ver más</a>
        </MyButton>
      </div>
    </section>
  );
};

export default GallerySection;
