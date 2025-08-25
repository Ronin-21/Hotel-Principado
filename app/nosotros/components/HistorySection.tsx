import FadeComponent from "@/components/animations/FadeComponent";
import Image from "next/image";

const HistorySection = () => {
  return (
    <section className="py-20 md:py-40 bg-gray-50">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-20 lg:grid-cols-2">
          <div className="order-1">
            <h2 className="text-5xl md:text-6xl font-title">
              Nuestra Historia
            </h2>
            <h4 className="mt-3 mb-10 text-lg font-semibold md:text-xl text-primary font-secondary">
              Tradición y hospitalidad en cada detalle
            </h4>
            <div className="space-y-6 leading-relaxed text-dark/60">
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
            <div className="grid grid-cols-3 gap-8 mt-8 text-center font-secondary">
              <div>
                <div className="mb-2 text-3xl font-light text-primary">60+</div>
                <div className="font-semibold text-dark/60">
                  Años de Historia
                </div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-light text-primary">
                  50k+
                </div>
                <div className="font-semibold text-dark/60">
                  Huéspedes Satisfechos
                </div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-light text-primary">80+</div>
                <div className="font-semibold text-dark/60">Habitaciones</div>
              </div>
            </div>
          </div>
          {/* Images */}
          <div className="relative order-2 w-full">
            <FadeComponent
              className="relative w-full md:w-[600px] overflow-hidden h-[400px] md:h-[600px] rounded-lg shadow-lg shadow-dark/50"
              direction="down"
              duration={1500}
              triggerOnce={false}
            >
              <Image
                src="/pool.webp"
                alt="Historia del Hotel Elegante"
                fill
                className="object-cover"
                loading="lazy"
                quality={70}
              />
            </FadeComponent>

            <FadeComponent
              direction="left"
              duration={1500}
              delay={500}
              triggerOnce={false}
              className="absolute left-0 w-32 h-32 rounded-lg -bottom-6 md:-left-6 bg-primary/30"
            >
              <div />
            </FadeComponent>

            <FadeComponent
              direction="right"
              duration={1500}
              delay={500}
              triggerOnce={false}
              className="absolute right-0 w-24 h-24 rounded-lg -top-6 md:-right-6 bg-primary/30"
            >
              <div />
            </FadeComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
