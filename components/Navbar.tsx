"use client";

import { Menu } from "lucide-react";
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
    <nav className="fixed top-0 w-full bg-white backdrop-blur-sm border-b border-dark/10 z-50">
      {/* Container */}
      <div className="container mx-auto flex items-center justify-between h-20 p-2">
        {/* Logo */}
        <Link href="/" className="overflow-hidden h-full relative w-40">
          <Image
            src={"/logo-black.png"}
            alt="logo"
            fill
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-dark/70 hover:text-primary transition-colors duration-200"
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
            className="text-dark/80 hover:text-primary focus:outline-none"
          >
            <Menu size={36} />
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-dvh bg-white -z-10 flex flex-col gap-10 items-center justify-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                className="text-dark/80 font-subtitle font-semibold text-3xl"
              >
                {item.label}
              </Link>
            ))}
            <MyButton size="lg">
              <Link href={"/reservas"} onClick={() => setIsOpen(false)}>
                Reservar Ahora
              </Link>
            </MyButton>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
