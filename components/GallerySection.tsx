import Image from "next/image";
import Button from "./MyButton";

const images = [
  { src: "/room-4.jpg", alt: "Habitaciones" },
  { src: "/lobby-1.png", alt: "Sala principal" },
  {
    src: "/bar-1.png",
    alt: "Restaurante",
  },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container flex flex-col gap-10 mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 font-title">
            Galería
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-secondary">
            Descubrí cada rincón del Ambassador
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <Button className="self-center">
          <a href="/galeria" className="text-white">
            Ver más
          </a>
        </Button>
      </div>
    </section>
  );
};

export default GallerySection;
