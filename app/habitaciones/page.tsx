"use client";

import MyButton from "@/components/MyButton";
import PagesHero from "@/components/PagesHero";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const features = [
  "Tv por cable",
  "Wifi",
  "Sommier",
  "Baño privado",
  "Aire acondicionado",
];

type RoomKey = "doble" | "triple" | "cuadruple" | "matrimonial";

interface Tab {
  key: RoomKey;
  label: string;
}

const tabs: Tab[] = [
  { key: "doble", label: "Doble" },
  { key: "triple", label: "Triple" },
  { key: "cuadruple", label: "Cuádruple" },
  { key: "matrimonial", label: "Matrimonial" },
];

const rooms: Record<RoomKey, any[]> = {
  doble: [
    {
      image: "/room-6.jpg",
      estandard: {
        label: "Estandard",
        desayuno: "50.000",
        mediaPension: "80.000",
      },
      superior: {
        label: "Superior",
        desayuno: "70.000",
        mediaPension: "100.000",
      },
    },
  ],
  triple: [
    {
      image: "/room-1.png",
      estandard: {
        label: "Estandard",
        desayuno: "60.000",
        mediaPension: "90.000",
      },
      superior: {
        label: "Superior",
        desayuno: "90.000",
        mediaPension: "110.000",
      },
    },
  ],
  cuadruple: [
    {
      image: "/room-3.jpg",
      estandard: {
        label: "Estandard",
        desayuno: "80.000",
        mediaPension: "100.000",
      },
      superior: {
        label: "Superior",
        desayuno: "100.000",
        mediaPension: "150.000",
      },
    },
  ],
  matrimonial: [
    {
      image: "/room-2.png",
      estandard: {
        label: "Estandard",
        desayuno: "50.000",
        mediaPension: "80.000",
      },
      superior: {
        label: "Superior",
        desayuno: "95.000",
        mediaPension: "115.000",
      },
    },
  ],
};

const RoomsPage = () => {
  const [activeTab, setActiveTab] = useState<RoomKey>("doble");
  const [activeRoom, setActiveRoom] = useState("Estandard");

  return (
    <div className="flex flex-col">
      <PagesHero bgUrl="/lobby-3.png" title="Habitaciones" />
      <section className="py-40 w-full bg-white">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
          Nuestras Habitaciones
        </h2>
        <p className="text-center text-slate-600 mb-20 max-w-3xl mx-auto">
          Choose from our selection of comfortable and luxurious rooms
        </p>
        {/* Habitaciones */}
        <div className="w-[1200px] h-[800px] flex items-center justify-between mx-auto">
          {/* Barra lateral */}
          <div className="flex flex-col items-start justify-start gap-5 w-1/4 h-full p-5">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className="w-40 bg-primary text-white font-medium hover:bg-primary/90 cursor-pointer px-4 py-2"
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Contenido */}
          <div className="flex flex-col items-center justify-between gap-6 w-full h-full">
            {/* Imagenes */}
            {rooms[activeTab].map((room, index) => (
              <div className="relative w-full h-96 shadow-lg shadow-dark/10">
                <Image
                  alt="img"
                  src={room.image}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            {/* Descripcion */}
            <div className="flex flex-col items-start gap-3 w-full px-5">
              <div className="flex items-center gap-5">
                <h3 className="text-3xl font-semibold">
                  Habitación {activeRoom}
                </h3>
                <h3
                  className="text-2xl font-semibold text-dark/75 cursor-pointer"
                  onClick={() => {
                    setActiveRoom(
                      activeRoom === "Estandard" ? "Superior" : "Estandard"
                    );
                  }}
                >
                  Habitación{" "}
                  {activeRoom === "Estandard" ? "Superior" : "Estandard"}
                </h3>
              </div>
              <p className="max-w-3xl text-balance text-dark/75 font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit, voluptas. Aperiam odio voluptatibus dignissimos ut,
                quibusdam sunt in, quas ratione, sint velit rerum expedita
                earum.
              </p>
            </div>
            {/* Caracteristicas y Precio */}
            <div className="w-full flex h-[250px] items-center justify-between border-t-2 border-dark/10">
              {/* Comodidades */}
              <div className="border-r-2 border-dark/10 h-full w-3/5 p-6">
                <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                  {features?.slice(0, 4).map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-dark font-medium"
                    >
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Precios */}
              {rooms[activeTab].map((room, index) => (
                <div className="w-2/5 h-full p-5 flex flex-col items-center text-center gap-5">
                  {/* Si estandard es un objeto */}
                  {room.estandard.label === activeRoom ? (
                    <>
                      <div>
                        <p className="font-medium text-lg">Desayuno</p>
                        <div className="text-2xl font-bold">
                          ${room.estandard.desayuno}{" "}
                          <span className="text-sm font-normal text-slate-600">
                            / por noche
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-lg">Media Pensión</p>
                        <div className="text-2xl font-bold">
                          ${room.estandard.mediaPension}{" "}
                          <span className="text-sm font-normal text-slate-600">
                            / por noche
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <p className="font-medium text-lg">Desayuno</p>
                        <div className="text-2xl font-bold">
                          ${room.superior.desayuno}{" "}
                          <span className="text-sm font-normal text-slate-600">
                            / por noche
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-lg">Media Pensión</p>
                        <div className="text-2xl font-bold">
                          ${room.superior.mediaPension}{" "}
                          <span className="text-sm font-normal text-slate-600">
                            / por noche
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                  <MyButton>
                    <Link href={"/reservas"}>Reservar</Link>
                  </MyButton>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomsPage;
