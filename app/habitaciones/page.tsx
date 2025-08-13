import MyButton from "@/components/MyButton";
import PagesHero from "@/components/PagesHero";
import { RoomCard } from "@/components/RoomCard";
import Link from "next/link";

const packages = [
  {
    title: "Desayuno Buffet",
    description: "Disfrutá de un delicioso desayuno buffet",
    price: 15000,
    image: "/default-image.jpg",
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
    image: "/default-image.jpg",
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
    image: "/default-image.jpg",
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

const RoomsPage = () => {
  return (
    <div className="flex flex-col">
      <PagesHero bgUrl="/default-image.jpg" title="Habitaciones" />
      <section className="py-16 px-4 bg-slate-50">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
          Nuestras Habitaciones
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          Choose from our selection of comfortable and luxurious rooms
        </p>
        <div className="container flex items-center justify-evenly mx-auto">
          {packages.map((pkg, index) => (
            <RoomCard
              key={index}
              description={pkg.description}
              features={pkg.features}
              price={pkg.price}
              slug={pkg.slug}
              title={pkg.title}
              image={pkg.image}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <MyButton>
            <Link href="/reservas">Reservar Ahora</Link>
          </MyButton>
        </div>
      </section>
    </div>
  );
};

export default RoomsPage;
