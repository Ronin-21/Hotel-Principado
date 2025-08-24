import Image from "next/image";

const ServicesSection = () => {
  return (
    <section
      id="servicios"
      className="flex items-center justify-center py-20 lg:py-40 bg-light"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Service 1 */}
        <div className="grid items-center grid-cols-1 gap-5 mt-10 lg:mt-0 lg:gap-0 lg:grid-cols-2">
          {/* images */}
          <div className="order-2 h-[400px] lg:h-[500px]">
            <Image
              src="/bar-4.webp"
              alt="Historia del Hotel Elegante"
              width={500}
              height={600}
              className="object-cover w-full h-full shadow-xl intersect:animate-fade-left intersect:animate-delay-200"
              loading="lazy"
              quality={70}
            />
          </div>
          {/* text content */}
          <div className="flex flex-col items-center order-1 space-y-8 text-center">
            <h4 className="font-bold uppercase md:text-xl text-primary font-secondary">
              resto
            </h4>
            <h2 className="text-4xl md:text-5xl text-dark font-title">
              Restaurante Regional
            </h2>
            <p className="max-w-xl leading-relaxed md:text-lg text-dark/70">
              Nuestro restaurante combina lo mejor de la gastronomía regional,
              ofreciendo platos elaborados con ingredientes frescos y de
              calidad. Desde un desayuno completo para comenzar el día con
              energía, hasta almuerzos y cenas que deleitan los sentidos, cada
              comida se convierte en una experiencia única.
            </p>
          </div>
        </div>
        {/* Service 2 */}
        <div className="grid items-center grid-cols-1 gap-5 mt-10 lg:mt-0 lg:gap-0 lg:grid-cols-2">
          {/* images */}
          <div className="order-2 h-[400px] lg:h-[500px]">
            <Image
              src="/pool-4.webp"
              alt="Historia del Hotel Elegante"
              width={500}
              height={600}
              className="object-cover w-full h-full shadow-xl intersect:animate-fade-right intersect:animate-delay-200"
              loading="lazy"
              quality={70}
            />
          </div>
          {/* text content */}
          <div className="flex flex-col items-center order-2 space-y-8 text-center">
            <h4 className="font-bold uppercase md:text-xl text-primary font-secondary">
              piletas
            </h4>
            <h2 className="text-4xl md:text-5xl text-dark font-title">
              Piscina Termal
            </h2>
            <p className="max-w-xl leading-relaxed md:text-lg text-dark/70">
              Sumergite en nuestra piscina de aguas termales, famosas en Termas
              de Río Hondo por sus propiedades curativas y relajantes. El agua
              mineralizada, naturalmente cálida, ayuda a mejorar la circulación,
              aliviar el estrés y revitalizar cuerpo y espíritu. Ya sea para
              nadar, relajarte en un entorno sereno o disfrutar del sol, nuestra
              piscina es el lugar ideal para renovar energías durante tu estadía
            </p>
          </div>
        </div>
        {/* Service 3 */}
        <div className="grid items-center grid-cols-1 gap-5 mt-10 lg:mt-0 lg:gap-0 lg:grid-cols-2">
          {/* images */}
          <div className="order-3 h-[400px] lg:h-[500px]">
            <Image
              src="/outside-3.webp"
              alt="Historia del Hotel Elegante"
              width={500}
              height={600}
              className="object-cover w-full h-full shadow-xl intersect:animate-fade-left intersect:animate-delay-200"
              loading="lazy"
              quality={70}
            />
          </div>
          {/* text content */}
          <div className="flex flex-col items-center order-2 space-y-8 text-center">
            <h4 className="font-bold uppercase md:text-xl text-primary font-secondary">
              solarium
            </h4>
            <h2 className="text-4xl md:text-5xl text-dark font-title">
              Patio & Solárium
            </h2>
            <p className="max-w-xl leading-relaxed md:text-lg text-dark/70">
              Disfrutá de un espacio al aire libre pensado para el descanso y el
              placer. Nuestro patio con solárium te invita a relajarte bajo el
              sol, compartir momentos tranquilos en un entorno acogedor o
              simplemente disfrutar de una buena lectura acompañado de la brisa
              termal. Es el lugar perfecto para desconectarte del ritmo
              cotidiano y aprovechar al máximo tu estadía
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
