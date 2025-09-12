"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { default as MyButton } from "./MyButton";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Sobre Nosotros" },
  { href: "/galeria", label: "Galería" },
  { href: "/habitaciones", label: "Habitaciones" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b backdrop-blur-sm border-dark/10">
      {/* Container */}
      <div className="container flex items-center justify-between h-20 p-2 mx-auto font-secondary">
        {/* Logo */}
        <Link href="/" className="relative w-40 h-full overflow-hidden">
          <Image
            src={"/logo-black.webp"}
            alt="logo"
            fill
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="items-center hidden gap-10 font-semibold md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg transition-colors duration-200 text-dark/70 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <MyButton>
            <Link href={"/reservas"}>Reservar Ahora</Link>
          </MyButton>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            className="text-dark/80 hover:text-primary focus:outline-none"
          >
            {isOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full gap-10 bg-white md:hidden h-dvh -z-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                className="text-3xl font-semibold text-dark/80"
              >
                {item.label}
              </Link>
            ))}
            <MyButton
              href="/reservas"
              size="lg"
              onClick={() => setIsOpen(false)}
            >
              Reservar Ahora
            </MyButton>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
