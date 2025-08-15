import Image from "next/image";

const ServicesSection = () => {
  return (
    <section
      id="servicios"
      className="py-40 bg-gray-50 flex items-center justify-center"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* images */}
          <div className="order-2 h-[500px]">
            <Image
              src="/default-image.jpg"
              alt="Historia del Hotel Elegante"
              width={500}
              height={600}
              className="h-full w-full object-cover shadow-xl"
            />
          </div>
          {/* text content */}
          <div className="order-1 flex flex-col items-center space-y-8 px-10">
            <h4 className="md:text-xl font-medium text-primary font-primary uppercase">
              SPA
            </h4>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 font-title">
              Spa y Bienestar
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed font-secondary">
              <p className="text-lg text-center">
                Relajate en un entorno cálido y armonioso. Nuestro spa ofrece
                tratamientos revitalizantes, masajes terapéuticos y circuitos de
                relajación para que tu experiencia sea única.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* images */}
          <div className="order-2 h-[500px]">
            <Image
              src="/default-image.jpg"
              alt="Historia del Hotel Elegante"
              width={500}
              height={600}
              className="h-full w-full object-cover shadow-xl"
            />
          </div>
          {/* text content */}
          <div className="order-2 flex flex-col items-center space-y-8 px-10">
            <h4 className="md:text-xl font-medium text-primary font-primary uppercase">
              GYM
            </h4>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 font-title">
              Gimnasio y Fitness
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed font-secondary">
              <p className="text-lg text-center">
                Mantené tu rutina de ejercicio incluso durante tus vacaciones.
                Equipado con máquinas modernas, nuestro gimnasio está disponible
                para que te sientas bien, cada día.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* images */}
          <div className="order-3 h-[500px]">
            <Image
              src="/default-image.jpg"
              alt="Historia del Hotel Elegante"
              width={500}
              height={600}
              className="h-full w-full object-cover shadow-xl"
            />
          </div>
          {/* text content */}
          <div className="order-2 flex flex-col items-center space-y-8 px-10">
            <h4 className="md:text-xl font-medium text-primary font-primary uppercase">
              SAUNA
            </h4>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 font-title">
              Sauna y Relajación
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed font-secondary">
              <p className="text-lg text-center">
                Conectá con tu bienestar interior. La calidez del sauna te ayuda
                a liberar tensiones, mejorar la circulación y disfrutar un
                momento de desconexión total.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
