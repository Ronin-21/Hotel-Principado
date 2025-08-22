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
  { key: "spa", label: "Spa & Piscina" },
  { key: "salon", label: "Salón & Bar" },
];

const images: Record<TabKey, string[]> = {
  habitaciones: [
    "/room-1.png",
    "/room-2.png",
    "/room-3.jpg",
    "/room-4.jpg",
    "/room-7.jpg",
    "/room-8.png",
  ],
  patio: [
    "/outside-1.png",
    "/outside-2.png",
    "/outside-3.jpg",
    "/outside-4.png",
    "/outside-5.jpg",
    "/outside-6.jpg",
  ],
  spa: [
    "/pool-1.jpg",
    "/pool-2.png",
    "/pool-3.png",
    "/pool-4.jpg",
    "/pool-5.jpg",
    "/pool-6.png",
  ],
  salon: [
    "/lobby-1.png",
    "/lobby-2.png",
    "/bar-2.png",
    "/lobby-4.jpg",
    "/bar-4.png",
    "/lobby-6.png",
  ],
};

const GalleryGrid = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("habitaciones");

  return (
    <div className="max-w-7xl mx-auto md:mt-10 mt-5">
      {/* Botones de pestañas */}
      <div className="grid grid-cols-4 gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            // aria-selected={activeTab === tab.key}
            className={`py-2 md:px-4 font-semibold text-center border-b-[3px] cursor-pointer transition-all duration-300 ${
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
          <div key={index} className="overflow-hidden rounded-lg h-80">
            <Image
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
  );
};

export default GalleryGrid;
