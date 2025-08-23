"use client";

import MyButton from "@/components/MyButton";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const features = [
  "Tv por cable",
  "Wifi",
  "Sommier",
  "Baño privado",
  "Aire acondicionado",
];

type RoomKey =
  | "doble"
  | "triple"
  | "cuadruple"
  | "matrimonial"
  | "cuadrupleMatrimonial"
  | "tripleMatrimonial";

interface Tab {
  key: RoomKey;
  label: string;
}

const tabs: Tab[] = [
  { key: "doble", label: "Doble" },
  { key: "matrimonial", label: "Matrimonial" },
  { key: "triple", label: "Triple" },
  { key: "tripleMatrimonial", label: "Matrimonial + Simple" },
  { key: "cuadruple", label: "Cuádruple" },
  { key: "cuadrupleMatrimonial", label: "Cuadruple Matrimonial" },
];

const rooms: Record<RoomKey, any[]> = {
  doble: [
    {
      image: "/room-6.webp",
      estandar: {
        label: "Estándar",
        description:
          "Equipadas con dos camas individuales, pensadas para amigos o compañeros de viaje que desean un descanso práctico y confortable",
        desayuno: "50.000",
        mediaPension: "80.000",
      },
      superior: {
        label: "Superior",
        description:
          "Más amplias, con mayor comodidad y detalles de diseño, para que cada huésped disfrute al máximo de su estadía",
        desayuno: "70.000",
        mediaPension: "100.000",
      },
    },
  ],
  matrimonial: [
    {
      image: "/room-2.webp",
      estandar: {
        label: "Estándar",
        description:
          "Perfectas para parejas que buscan comodidad a un precio accesible, con un ambiente acogedor y todo lo esencial para descansar",
        desayuno: "50.000",
        mediaPension: "80.000",
      },
      superior: {
        label: "Superior",
        description:
          "Habitaciones elegantes y modernas, con detalles que marcan la diferencia para una estadía romántica y placentera",
        desayuno: "95.000",
        mediaPension: "115.000",
      },
    },
  ],
  triple: [
    {
      image: "/room-11.webp",
      estandar: {
        label: "Estándar",
        description:
          "Espacios funcionales y bien distribuidos, ideales para familias pequeñas o grupos reducidos",
        desayuno: "60.000",
        mediaPension: "90.000",
      },
      superior: {
        label: "Superior",
        description:
          "Más amplias y confortables, pensadas para brindar comodidad a todos los huéspedes sin perder intimidad ni descanso",
        desayuno: "90.000",
        mediaPension: "110.000",
      },
    },
  ],
  tripleMatrimonial: [
    {
      image: "/room-3.webp",
      estandar: {
        label: "Estándar",
        description:
          "Una cama matrimonial + una cama simple para 2–3 personas. Ambiente cálido, climatización, Wi-Fi y baño privado. Opción versátil para familias pequeñas",
        desayuno: "50.000",
        mediaPension: "80.000",
      },
      superior: {
        label: "Superior",
        description:
          "Diseño moderno y mayor confort: mejores textiles, iluminación cuidada y amenities superiores. Ideal para quienes desean un plus de espacio y detalle sin perder practicidad",
        desayuno: "95.000",
        mediaPension: "115.000",
      },
    },
  ],
  cuadruple: [
    {
      image: "/room-1.webp",
      estandar: {
        label: "Estándar",
        description:
          "Amplia y funcional para familias o grupos. Configuración habitual: 1 cama matrimonial + 2 camas simples (o 4 simples, según disponibilidad). Climatización, Wi-Fi, TV y baño privado para un descanso práctico y cómodo",
        desayuno: "80.000",
        mediaPension: "100.000",
      },
      superior: {
        label: "Superior",
        description:
          "Más metros y mejor distribución, con espacios de guardado extra y amenities mejorados. Posibles vistas internas/externas, frigobar y detalles de confort pensados para estancias más largas",
        desayuno: "100.000",
        mediaPension: "150.000",
      },
    },
  ],
  cuadrupleMatrimonial: [
    {
      image: "/room-4.webp",
      estandar: {
        label: "Estándar",
        description:
          "Ideal para familias o amigos que prefieren mayor espacio de descanso. Dos camas matrimoniales, climatización, Wi-Fi y baño privado. Comodidad accesible sin resignar practicidad",
        desayuno: "50.000",
        mediaPension: "80.000",
      },
      superior: {
        label: "Superior",
        description:
          "Decoración renovada, superficies más generosas y equipamiento premium. Perfecta para 3–4 huéspedes que buscan confort extra y una experiencia más elevada",
        desayuno: "95.000",
        mediaPension: "115.000",
      },
    },
  ],
};

const RoomsGallery = () => {
  const [activeTab, setActiveTab] = useState<RoomKey>("doble");
  const [activeRoom, setActiveRoom] = useState("Estándar");

  return (
    <div className="w-full md:w-[1200px] md:h-[800px] flex flex-col md:flex-row items-start justify-between mx-auto">
      {/* Barra lateral */}
      <div className="flex flex-col items-center w-full md:w-1/4 md:h-96 md:p-0 px-4 shadow-lg shadow-dark/30 font-secondary">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`w-full text-lg bg-dark text-white font-semibold hover:bg-primary/90 cursor-pointer px-4 py-3 md:h-full ${
              activeTab === tab.key ? "bg-primary" : ""
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Contenido */}
      <div className="flex flex-col items-center justify-between gap-6 w-full h-full px-4 md:px-0 bg-white shadow-lg shadow-dark/30">
        {/* Imagenes */}
        {rooms[activeTab].map((room, index) => (
          <div
            key={index}
            className="relative w-full md:h-96 h-80 shadow-lg shadow-dark/10"
          >
            <Image alt="img" src={room.image} fill className="object-cover" />
          </div>
        ))}
        {/* Descripcion */}
        <div className="flex flex-col items-start gap-3 w-full px-5">
          {/* Tabs */}
          <div className="flex items-center gap-5 font-secondary">
            <h3
              className={`${
                activeRoom === "Estándar"
                  ? "md:text-3xl text-2xl text-primary"
                  : "md:text-2xl text-xl text-dark/75"
              } cursor-pointer text-center md:text-left font-semibold`}
              onClick={() => {
                setActiveRoom("Estándar");
              }}
            >
              Habitación Estándar
            </h3>
            <h3
              className={`${
                activeRoom === "Superior"
                  ? "md:text-3xl text-2xl text-primary"
                  : "md:text-2xl text-xl text-dark/75"
              } cursor-pointer text-center md:text-left font-semibold`}
              onClick={() => {
                setActiveRoom("Superior");
              }}
            >
              Habitación Superior
            </h3>
          </div>
          {/* Description */}
          {rooms[activeTab].map((room, index) => (
            <p
              key={index}
              className="md:max-w-3xl w-full text-center md:text-left text-dark/75 "
            >
              {room.estandar.label === activeRoom ? (
                <>{room.estandar.description}</>
              ) : (
                <>{room.superior.description}</>
              )}
            </p>
          ))}
        </div>
        {/* Caracteristicas y Precio */}
        <div className="w-full flex h-[250px] items-center justify-between border-t-2 border-dark/10">
          {/* Comodidades */}
          <div className="border-r-2 border-dark/10 h-full md:w-3/5 md:px-6 px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-3">
              {features?.slice(0, 4).map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-dark text-lg font-secondary"
                >
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Precios */}
          {rooms[activeTab].map((room, index) => (
            <div
              key={index}
              className="md:w-2/5 h-full p-5 flex flex-col items-center text-center gap-5"
            >
              {room.estandar.label === activeRoom ? (
                <>
                  <div>
                    <p className="font-semibold text-xl font-secondary">
                      Desayuno
                    </p>
                    <div className="text-2xl font-bold">
                      ${room.estandar.desayuno}{" "}
                      <span className="text-sm font-normal text-dark/60">
                        / por noche
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-xl font-secondary">
                      Media Pensión
                    </p>
                    <div className="text-2xl font-bold">
                      ${room.estandar.mediaPension}{" "}
                      <span className="text-sm font-normal text-dark/60">
                        / por noche
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="font-semibold text-xl font-secondary">
                      Desayuno
                    </p>
                    <div className="text-2xl font-bold">
                      ${room.superior.desayuno}{" "}
                      <span className="text-sm font-normal text-dark/60">
                        / por noche
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-xl font-secondary">
                      Media Pensión
                    </p>
                    <div className="text-2xl font-bold">
                      ${room.superior.mediaPension}{" "}
                      <span className="text-sm font-normal text-dark/60">
                        / por noche
                      </span>
                    </div>
                  </div>
                </>
              )}
              <MyButton href={"/reservas"}>Reservar</MyButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsGallery;
