const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 font-title">
            Dónde encontrarnos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-secondary">
            Estratégicamente ubicado para que disfrutes todo lo que ofrece la
            ciudad. <br />
            Cerca del centro y de los principales atractivos turísticos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Dirección
              </h3>
              <p className="text-gray-700 text-lg">
                Av. Manuel Belgrano 345
                <br />
                Las Termas de Río Hondo
                <br />
                Santiago del Estero, Argentina
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Puntos de Interés Cercanos
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Plaza Miguel de Guemes</span>
                  <span className="text-primary">2 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Casino del Sol</span>
                  <span className="text-primary">5 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Iglesia Perpetuo Socorro</span>
                  <span className="text-primary">8 min</span>
                </li>
                <li className="flex justify-between">
                  <span>Aeropuerto Internacional</span>
                  <span className="text-primary">25 min</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Transporte
              </h3>
              <p className="text-gray-700">
                Servicio de traslado gratuito desde el aeropuerto.
                Estacionamiento privado disponible para huéspedes.
              </p>
            </div>
          </div>

          <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
