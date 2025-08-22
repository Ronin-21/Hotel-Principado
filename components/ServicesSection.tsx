import Image from "next/image";

const ServicesSection = () => {
  return (
    <section
      id="servicios"
      className="lg:py-40 bg-light py-20 flex items-center justify-center"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Service 1 */}
        <div className="grid mt-10 grid-cols-1 gap-5 lg:mt-0 lg:gap-0 lg:grid-cols-2 items-center">
          {/* images */}
          <div className="order-2 h-[400px] lg:h-[500px]">
            <Image
              src="/bar-4.png"
              alt="Historia del Hotel Elegante"
              width={500}
              height={600}
              className="h-full w-full object-cover shadow-xl"
            />
          </div>
          {/* text content */}
          <div className="order-1 flex flex-col items-center space-y-8 text-center">
            <h4 className="md:text-xl font-bold text-primary font-subtitle uppercase">
              resto
            </h4>
            <h2 className="text-4xl md:text-5xl text-dark font-title">
              Restaurante Regional
            </h2>
            <p className="md:text-lg text-dark/70 leading-relaxed max-w-xl">
              Nuestro restaurante combina lo mejor de la gastronomía regional,
              ofreciendo platos elaborados con ingredientes frescos y de
              calidad. Desde un desayuno completo para comenzar el día con
              energía, hasta almuerzos y cenas que deleitan los sentidos, cada
              comida se convierte en una experiencia única.
            </p>
          </div>
        </div>
        {/* Service 2 */}
        <div className="grid mt-10 grid-cols-1 gap-5 lg:mt-0 lg:gap-0 lg:grid-cols-2 items-center">
          {/* images */}
          <div className="order-2 h-[400px] lg:h-[500px]">
            <Image
              src="/pool-4.jpg"
              alt="Historia del Hotel Elegante"
              width={500}
              height={600}
              className="h-full w-full object-cover shadow-xl"
            />
          </div>
          {/* text content */}
          <div className="order-2 flex flex-col items-center space-y-8 text-center">
            <h4 className="md:text-xl font-bold text-primary font-subtitle uppercase">
              piletas
            </h4>
            <h2 className="text-4xl md:text-5xl text-dark font-title">
              Piscina Termal
            </h2>
            <p className="md:text-lg text-dark/70 leading-relaxed max-w-xl">
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
        <div className="grid mt-10 grid-cols-1 gap-5 lg:mt-0 lg:gap-0 lg:grid-cols-2 items-center">
          {/* images */}
          <div className="order-3 h-[400px] lg:h-[500px]">
            <Image
              src="/outside-3.jpg"
              alt="Historia del Hotel Elegante"
              width={500}
              height={600}
              className="h-full w-full object-cover shadow-xl"
            />
          </div>
          {/* text content */}
          <div className="order-2 flex flex-col items-center space-y-8 text-center">
            <h4 className="md:text-xl font-bold text-primary font-subtitle uppercase">
              solarium
            </h4>
            <h2 className="text-4xl md:text-5xl text-dark font-title">
              Patio & Solárium
            </h2>
            <p className="md:text-lg text-dark/70 leading-relaxed max-w-xl">
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
