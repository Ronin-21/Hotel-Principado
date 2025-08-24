"use client";
import { useEffect } from "react";
import { Observer } from "tailwindcss-intersect";

export default function ObserverProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    Observer.start(); // Inicializa solo en cliente
  }, []);

  return <>{children}</>; // Renderiza los hijos normalmente
}
