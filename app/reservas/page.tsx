import PagesHero from "@/components/PagesHero";

export default function ReservationsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PagesHero bgUrl="/default-image.jpg" title="Reservas" />

      {/* Rooms Section */}
      <section className="py-16 px-4 bg-slate-50">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
          Reservá tu Habitación
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          Choose from our selection of comfortable and luxurious rooms
        </p>
        <div className="w-full md:mt-10 mx-auto max-w-[1200px] h-auto">
          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://wubook.net/nneb/bk?f=today&n=1&ep=07b058c3&o=1.0.0.0"
              title="Motor de reservas"
              className="w-full h-[600px] sm:h-[700px] md:h-[800px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-12">
            Políticas de Reserva
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold">Check-in / Check-out</h3>
              <p className="mt-2 text-gray-600">
                El horario de check-in es a partir de las 15:00 horas. El
                check-out debe realizarse antes de las 12:00 horas. Consulte
                sobre la posibilidad de early check-in o late check-out (sujeto
                a disponibilidad y cargo adicional).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Cancelaciones</h3>
              <p className="mt-2 text-gray-600">
                Las cancelaciones realizadas con más de 48 horas de antelación
                recibirán un reembolso completo. Las cancelaciones dentro de las
                48 horas previas a la llegada están sujetas a un cargo
                equivalente a una noche de estancia.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Depósito</h3>
              <p className="mt-2 text-gray-600">
                Se requiere un depósito equivalente al costo de una noche al
                momento de la reserva para garantizarla. Este depósito se
                aplicará al costo total de su estancia.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Mascotas</h3>
              <p className="mt-2 text-gray-600">
                Grand Hotel es pet-friendly en habitaciones seleccionadas. Se
                aplica un cargo adicional por mascota. Por favor, infórmenos al
                momento de su reserva si viajará con mascotas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
