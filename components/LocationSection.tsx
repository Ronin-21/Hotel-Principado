import FadeComponent from "./animations/FadeComponent";

const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-6xl text-dark font-title">
            Dónde Encontrarnos
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-dark/60">
            Ubicado en el corazón de Termas de Río Hondo, el Hotel Principado
            combina comodidad y cercanía. Desde aquí podrás acceder fácilmente a
            las principales atracciones turísticas
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-dark font-secondary">
                Dirección
              </h3>
              <p className="text-lg text-dark/70">
                Av. Manuel Belgrano 345
                <br />
                Las Termas de Río Hondo
                <br />
                Santiago del Estero, Argentina
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-dark font-secondary">
                Puntos de Interés Cercanos
              </h3>
              <ul className="space-y-2 text-dark/70">
                <li className="flex justify-between">
                  <span>Plaza Miguel de Guemes</span>
                  <span className="text-primary">2 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Casino del Sol</span>
                  <span className="text-primary">5 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Embalse Rio Hondo</span>
                  <span className="text-primary">15 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Aeropuerto Internacional</span>
                  <span className="text-primary">25 min</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-dark font-secondary">
                Transporte
              </h3>
              <p className="text-dark/70">
                Servicio de traslado gratuito desde el aeropuerto.
                Estacionamiento privado disponible para huéspedes.
              </p>
            </div>
          </div>

          <FadeComponent
            direction="right"
            duration={1500}
            delay={500}
            className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.0669619783175!2d-64.86692582454!3d-27.498292876303015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94236e63f640ac47%3A0x4772044e8cad2ca4!2sPrincipado!5e0!3m2!1ses!2sar!4v1755297893699!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Hotel Principado"
            />
          </FadeComponent>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
