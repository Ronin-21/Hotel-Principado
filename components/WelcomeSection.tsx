"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./MyButton";

const WelcomeSection = () => {
  const [imgPrincipal, setImgPrincipal] = useState(true);

  return (
    <section className="bg-gray-50 flex items-center justify-center py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* images */}
          <div className="order-1 flex justify-center relative h-[300px] md:h-[400px]">
            <Image
              src={"/default-image.jpg"}
              alt="Historia del Hotel Elegante"
              width={600}
              height={600}
              onClick={() => setImgPrincipal(!imgPrincipal)}
              className={`object-cover h-[300px] md:h-[400px] absolute bottom-0 rounded-lg shadow-lg duration-500 ease-in-out transition-opacity ${
                imgPrincipal ? "opacity-100" : "opacity-0"
              }`}
            />
            <Image
              src={"/default-image.jpg"}
              alt="Historia del Hotel Elegante"
              width={600}
              height={600}
              onClick={() => setImgPrincipal(!imgPrincipal)}
              className={`object-cover h-[300px] md:h-[400px] absolute bottom-0 rounded-lg shadow-lg duration-500 ease-in-out transition-opacity ${
                imgPrincipal ? "opacity-0" : "opacity-100"
              }`}
            />
            <Image
              src="/default-image.jpg"
              alt="Historia del Hotel Elegante"
              width={300}
              height={400}
              onClick={() => setImgPrincipal(!imgPrincipal)}
              className={`absolute md:-bottom-16 md:-left-12 -bottom-5 ring-[10px] ring-gray-50 shadow-lg duration-500 ease-in-out transition-opacity ${
                imgPrincipal ? "opacity-0" : "opacity-100"
              }`}
            />
            <Image
              src="/default-image.jpg"
              alt="Historia del Hotel Elegante"
              width={300}
              height={400}
              onClick={() => setImgPrincipal(!imgPrincipal)}
              className={`absolute md:-bottom-16 md:-left-12 -bottom-5 ring-[10px] ring-gray-50 shadow-lg duration-500 ease-in-out transition-opacity ${
                imgPrincipal ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          {/* text content */}
          <div className="order-2 flex flex-col items-start space-y-6">
            <h4 className="md:text-xl font-medium text-[#268367] font-primary uppercase">
              Un Futuro con Historia
            </h4>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 font-title text-center md:text-left">
              Bienvenidos al renovado Hotel Ambassador INN
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed font-secondary">
              <p className="text-lg text-center md:text-left">
                Ícono termal desde 1960, el Hotel Ambassador reabre sus puertas
                completamente renovado para ofrecer una experiencia única en Las
                Termas de Río Hondo. Con un diseño que honra su esencia colonial
                y la elegancia de la hotelería moderna, cada espacio ha sido
                pensado para brindar confort, bienestar y calidez. <br />
                Más que una renovación, es un renacer: 87 habitaciones premium,
                instalaciones de primer nivel y una profunda conexión con la
                comunidad local —más de 300 trabajadores y proveedores termenses
                participaron en esta gran transformación. <br />
                Hoy vuelve a brillar como un símbolo de hospitalidad y
                compromiso con el turismo de calidad.
              </p>
            </div>
            <Button className="self-center md:self-start">
              <Link href="/nosotros" className="text-white">
                Leer más
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
