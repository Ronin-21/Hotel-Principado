import PagesHero from "@/components/PagesHero";

export default function ReservationsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PagesHero bgUrl="/lobby-5.webp" />

      {/* Rooms Section */}
      <section className="px-4 pt-20 pb-40 bg-light">
        <div className="flex flex-col items-center gap-5 mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-title">
            Reservá tu estadía
          </h2>
          <h4 className="text-lg font-semibold md:text-xl text-primary font-secondary">
            Tu próxima experiencia en Termas comienza aquí
          </h4>
          <p className="max-w-3xl md:text-lg text-dark/60 md:mt-5">
            Con pocos clics asegurá tu lugar en el Hotel Principado. Elegí tu
            habitación, seleccioná el régimen de comidas que prefieras y
            disfrutá del confort que merecés. Nuestro sistema de reservas es
            rápido, seguro y sin complicaciones.
          </p>
        </div>
        <div className="w-full md:mt-10 mx-auto max-w-[1200px] h-auto">
          <div className="w-full overflow-hidden shadow-lg rounded-xl">
            <iframe
              src="https://wubook.net/nneb/bk/?ep=e610980a&lang=es&c=ARS&f=05%2F09%2F2025&t=06%2F09%2F2025&o=2.0.0.0 "
              title="Motor de reservas"
              className="w-full h-[600px] sm:h-[700px] md:h-[800px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="px-4 py-20 md:py-40 md:px-6">
        <div className="container max-w-4xl mx-auto">
          <h2 className="mb-12 text-5xl text-center md:text-6xl font-title">
            Políticas de Reserva
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold font-secondary">
                Check-in / Check-out
              </h3>
              <p className="mt-2 text-dark/60">
                El horario de check-in es a partir de las 15:00 horas. El
                check-out debe realizarse antes de las 12:00 horas. Consulte
                sobre la posibilidad de early check-in o late check-out (sujeto
                a disponibilidad y cargo adicional).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold font-secondary">
                Cancelaciones
              </h3>
              <p className="mt-2 text-dark/60">
                Las cancelaciones realizadas con más de 48 horas de antelación
                recibirán un reembolso completo. Las cancelaciones dentro de las
                48 horas previas a la llegada están sujetas a un cargo
                equivalente a una noche de estancia.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold font-secondary">Depósito</h3>
              <p className="mt-2 text-dark/60">
                Se requiere un depósito equivalente al costo de una noche al
                momento de la reserva para garantizarla. Este depósito se
                aplicará al costo total de su estancia.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold font-secondary">Mascotas</h3>
              <p className="mt-2 text-dark/60">
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
