import { RoomCard } from "./RoomCard";

const packages = [
  {
    title: "Desayuno Buffet",
    description: "Disfrutá de un delicioso desayuno buffet",
    price: 15000,
    image: "/bar-1.png",
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
    description: "Disfrutá de un delicioso desayuno buffet",
    price: 25000,
    image: "/bar-2.png",
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
    description: "Disfrutá de un delicioso desayuno buffet",
    price: 35000,
    image: "/bar-3.png",
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
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 font-title">
            Paquetes Turísticos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-secondary">
            Elegí el paquete ideal para tu próxima escapada
          </p>
        </div>
        <div className="container flex items-center justify-evenly mx-auto">
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
