import Image from "next/image";

const HistorySection = () => {
  return (
    <section className="md:py-40 py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-1">
            <h2 className="text-5xl md:text-6xl font-title">
              Nuestra Historia
            </h2>
            <h4 className="md:text-xl text-lg font-semibold text-primary font-secondary mb-10 mt-3">
              Tradición y hospitalidad en cada detalle
            </h4>
            <div className="space-y-6 text-dark/60 leading-relaxed">
              <p>
                El Hotel Principado nació con una visión clara: ofrecer a cada
                viajero un espacio donde el confort se encuentre con la
                tradición hospitalaria de Termas de Río Hondo. Desde nuestros
                comienzos, hemos trabajado para ser mucho más que un hotel: un
                punto de encuentro para quienes buscan descanso, buena
                gastronomía y experiencias auténticas en el corazón de la
                ciudad.
              </p>
              <p>
                Con el paso de los años, fuimos creciendo y renovándonos para
                mantenernos siempre a la altura de lo que nuestros huéspedes
                merecen. Hoy contamos con modernas instalaciones, un restaurante
                con identidad regional, espacios pensados para la recreación
                familiar y el servicio de nuestro equipo, disponible las 24
                horas para que disfrutes cada momento sin preocupaciones.
              </p>
              <p>
                Lo que nos distingue no es solo nuestra ubicación privilegiada
                ni nuestras comodidades, sino la calidez con la que recibimos a
                cada visitante. En el Hotel Principado entendemos que viajar es
                crear recuerdos, y por eso cada detalle está diseñado para que
                tu estadía sea única. Ya sea que vengas por descanso, turismo o
                negocios, aquí encontrarás un lugar donde siempre querrás
                volver.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-8 text-center font-secondary">
              <div>
                <div className="text-3xl font-light text-primary mb-2">60+</div>
                <div className="text-dark/60 font-semibold">
                  Años de Historia
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">
                  50k+
                </div>
                <div className="text-dark/60 font-semibold">
                  Huéspedes Satisfechos
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">80+</div>
                <div className="text-dark/60 font-semibold">Habitaciones</div>
              </div>
            </div>
          </div>
          {/* Images */}
          <div className="order-2 relative w-full">
            <Image
              src="/pool.webp"
              alt="Historia del Hotel Elegante"
              width={600}
              height={600}
              className="rounded-lg shadow-lg intersect:animate-fade-down intersect:animate-delay-200"
            />
            <div className="absolute -bottom-6 md:-left-6 left-0 w-32 h-32 bg-primary/30 rounded-lg intersect:animate-fade-right intersect:animate-delay-200" />
            <div className="absolute -top-6 md:-right-6 right-0 w-24 h-24 bg-primary/30 rounded-lg intersect:animate-fade-left intersect:animate-delay-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
