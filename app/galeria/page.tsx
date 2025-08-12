"use client";

import Image from "next/image";
import { useState } from "react";

type TabKey = "habitaciones" | "restaurante" | "spa" | "eventos";

interface Tab {
  key: TabKey;
  label: string;
}

const tabs: Tab[] = [
  { key: "habitaciones", label: "Habitaciones" },
  { key: "restaurante", label: "Restaurante" },
  { key: "spa", label: "Spa & Piscina" },
  { key: "eventos", label: "Eventos" },
];

const images: Record<TabKey, string[]> = {
  habitaciones: [
    "/room-1.webp",
    "/room-2.webp",
    "/room-3.webp",
    "/room-4.webp",
    "/room-5.webp",
    "/room-6.webp",
  ],
  restaurante: [
    "/dinner-1.webp",
    "/dinner-2.webp",
    "/dinner-3.webp",
    "/dinner-4.webp",
    "/dinner-9.webp",
    "/dinner-10.webp",
  ],
  spa: [
    "/pool-1.webp",
    "/pool-4.webp",
    "/pool-3.webp",
    "/spa-1.webp",
    "/spa.webp",
    "/spa-2.webp",
  ],
  eventos: [
    "/lobby.webp",
    "/services2.webp",
    "/lobby-1.webp",
    "/dinner-5.webp",
    "/pool-5.webp",
    "/hotel-3.webp",
  ],
};

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("habitaciones");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/hotel-3.webp?height=800&width=1920"
          alt="Grand Hotel Gallery"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Galería
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Explore Nuestras Instalaciones
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Descubra la elegancia y el lujo que definen a Grand Hotel a través
              de nuestra galería de imágenes.
            </p>
          </div>

          <div className="w-full">
            {/* Botones de pestañas */}
            <div className="grid grid-cols-4 gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-2 px-4 font-medium text-center border-b-2 ${
                    activeTab === tab.key
                      ? "border-black text-black"
                      : "border-transparent text-gray-500 hover:text-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Contenido de cada pestaña */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {images[activeTab].map((src, index) => (
                <div key={index} className="overflow-hidden rounded-lg h-80">
                  <img
                    src={`${src}?height=400&width=600`}
                    alt={"Imagen de " + activeTab}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
