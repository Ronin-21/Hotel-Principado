"use client";

import Image from "next/image";
import { useState } from "react";

type TabKey = "habitaciones" | "patio" | "spa" | "salon";

interface Tab {
  key: TabKey;
  label: string;
}

const tabs: Tab[] = [
  { key: "habitaciones", label: "Habitaciones" },
  { key: "patio", label: "Patio" },
  { key: "spa", label: "Piscina" },
  { key: "salon", label: "Salón & Bar" },
];

const images: Record<TabKey, string[]> = {
  habitaciones: [
    "/room-1.webp",
    "/room-2.webp",
    "/room-3.webp",
    "/room-4.webp",
    "/room-7.webp",
    "/room-8.webp",
  ],
  patio: [
    "/outside-1.webp",
    "/outside-2.webp",
    "/outside-3.webp",
    "/outside-4.webp",
    "/outside-5.webp",
    "/outside-6.webp",
  ],
  spa: [
    "/pool-1.webp",
    "/pool-2.webp",
    "/pool-3.webp",
    "/pool-4.webp",
    "/pool-5.webp",
    "/pool-6.webp",
  ],
  salon: [
    "/lobby-1.webp",
    "/lobby-2.webp",
    "/bar-2.webp",
    "/lobby-4.webp",
    "/bar-4.webp",
    "/lobby-6.webp",
  ],
};

const GalleryGrid = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("habitaciones");

  return (
    <div className="mx-auto mt-5 max-w-7xl md:mt-10">
      {/* Botones de pestañas */}
      <div className="grid grid-cols-4 gap-2 mb-8 overflow-hidden bg-white rounded-lg shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            // aria-selected={activeTab === tab.key}
            className={`py-2 md:px-4 font-semibold font-secondary md:text-lg text-center border-b-[3px] cursor-pointer transition-all duration-300 ${
              activeTab === tab.key
                ? "border-primary text-primary"
                : "border-transparent text-dark/60 hover:text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Contenido de cada pestaña */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images[activeTab].map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md h-80 shadow-dark/50"
          >
            <Image
              src={src}
              alt={"Imagen de " + activeTab}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              loading="lazy"
              quality={70}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
