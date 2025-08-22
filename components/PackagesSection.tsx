import { RoomCard } from "./RoomCard";

const packages = [
  {
    title: "Desayuno Buffet",
    description:
      "Comenzá cada mañana con energía. Incluye un variado buffet de productos frescos, regionales y saludables",
    price: 15000,
    image: "/bar-1.webp",
    features: [
      "Tv por cable",
      "Wifi",
      "Sommier",
      "Baño privado",
      "Aire acondicionado",
    ],
    slug: "desayuno",
  },
  {
    title: "Media Pensión",
    description:
      "La opción ideal para quienes desean combinar descanso y buena cocina. Incluye desayuno y una comida principal al día",
    price: 25000,
    image: "/bar-2.webp",
    features: [
      "Tv por cable",
      "Wifi",
      "Sommier",
      "Baño privado",
      "Aire acondicionado",
    ],
    slug: "media-pension",
  },
  {
    title: "Pensión Completa",
    description:
      "La experiencia más completa: desayuno, almuerzo y cena con menú variado y atención personalizada en cada servicio",
    price: 35000,
    image: "/bar-3.webp",
    features: [
      "Tv por cable",
      "Wifi",
      "Sommier",
      "Baño privado",
      "Aire acondicionado",
    ],
    slug: "pension-completa",
  },
];

const PackagesSection = () => {
  return (
    <section id="paquetes" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-dark mb-4 font-title">
            Paquetes a tu medida
          </h2>
          <p className="md:text-xl text-lg text-dark/60 max-w-2xl mx-auto">
            Elegí el régimen que mejor se adapte a tu estadía y disfrutá de la
            mejor gastronomía en un entorno de confort y hospitalidad
          </p>
        </div>
        <div className="container flex flex-col md:flex-row gap-10 items-center justify-evenly mx-auto">
          {packages.map((pkg, index) => (
            <RoomCard
              key={index}
              description={pkg.description}
              features={pkg.features}
              title={pkg.title}
              image={pkg.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
