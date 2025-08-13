import Image from "next/image";

const HistorySection = () => {
  return (
    <section id="historia" className="pt-40 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-10">
              Un Proyecto con Identidad Local
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed font-secondary">
              <p className="text-lg">
                Inaugurado en 1960, el Hotel Ambassador forma parte del corazón
                termal de Las Termas de Río Hondo. Con 66 años de historia y 67
                temporadas activas, sigue siendo un emblema de hospitalidad para
                quienes buscan descanso y bienestar.
              </p>
              <p className="text-lg">
                En 2024, el Ambassador reabre sus puertas tras una renovación
                total. Con una inversión significativa y el trabajo de más de
                300 personas de la ciudad, cada detalle fue pensado para
                combinar su esencia colonial con un diseño moderno, elegante y
                minimalista.
              </p>
              <p className="text-lg">
                Sus 87 habitaciones fueron completamente remodeladas,
                incorporando equipamiento de categoría premium y todos los
                servicios que exige la hotelería actual. El resultado: una
                experiencia sofisticada, cálida y funcional.
              </p>
              <p className="text-lg">
                Esta nueva etapa proyecta al Ambassador como un hotel tres
                estrellas superior, con visión de futuro y raíces profundas. Un
                lugar donde tradición, calidad y calidez se encuentran para
                crear momentos memorables.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-light text-primary mb-2">60+</div>
                <div className="text-gray-600">Años de Historia</div>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">
                  50k+
                </div>
                <div className="text-gray-600">Huéspedes Satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">80+</div>
                <div className="text-gray-600">Habitaciones</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <Image
                src="/default-image.jpg"
                alt="Historia del Hotel Elegante"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-lg opacity-30" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-lg opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
