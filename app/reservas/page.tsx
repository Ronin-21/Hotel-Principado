import Button from "@/components/MyButton";
import { RoomCard } from "@/components/RoomCard";
import Image from "next/image";
import Link from "next/link";

export default function ReservationsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/placeholder.jpg?height=800&width=1920"
          alt="Grand Hotel Room"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Reservas
          </h1>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Rooms</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Choose from our selection of comfortable and luxurious rooms
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RoomCard
              title="Standard Room"
              description="Comfortable room with all basic amenities"
              price={99}
              image="/placeholder.jpg?height=300&width=400"
              features={["Queen Bed", "Free Wi-Fi", "TV", "Air Conditioning"]}
              slug="standard-room"
            />
            <RoomCard
              title="Deluxe Room"
              description="Spacious room with premium amenities"
              price={149}
              image="/placeholder.jpg?height=300&width=400"
              features={["King Bed", "Free Wi-Fi", "Smart TV", "Mini Bar"]}
              slug="deluxe-room"
            />
            <RoomCard
              title="Suite"
              description="Luxury suite with separate living area"
              price={249}
              image="/placeholder.jpg?height=300&width=400"
              features={["King Bed", "Living Room", "Jacuzzi", "Ocean View"]}
              slug="suite"
            />
          </div>
          <div className="text-center mt-12">
            <Button>
              <Link href="/rooms">View All Rooms</Link>
            </Button>
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
