import ZoomComponent from "./animations/ZoomComponent";
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
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-6xl text-dark font-title">
            Paquetes a tu medida
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-dark/60">
            Elegí el régimen que mejor se adapte a tu estadía y disfrutá de la
            mejor gastronomía en un entorno de confort y hospitalidad
          </p>
        </div>
        <div className="container flex flex-col items-center gap-10 mx-auto md:flex-row justify-evenly">
          <ZoomComponent cascade={true} damping={0.2}>
            {packages.map((pkg, index) => (
              <RoomCard
                key={index}
                description={pkg.description}
                features={pkg.features}
                title={pkg.title}
                image={pkg.image}
              />
            ))}
          </ZoomComponent>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
