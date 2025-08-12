import Image from "next/image";
import HistorySection from "./components/HistorySection";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/hotel-3.webp?height=800&width=1920"
          alt="Grand Hotel Interior"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Sobre Nosotros
          </h1>
        </div>
      </section>

      {/* History Section */}
      <HistorySection />

      {/* Values Section */}
      <section className="bg-white py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 font-title text-center">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-amber-100 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">Excelencia</h3>
              <p className="mt-2 text-gray-600">
                Nos esforzamos por superar las expectativas en cada aspecto de
                nuestro servicio, desde la comodidad de nuestras habitaciones
                hasta la calidad de nuestra gastronomía.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-amber-100 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">Hospitalidad</h3>
              <p className="mt-2 text-gray-600">
                Creemos en el poder de la hospitalidad genuina para crear
                conexiones significativas y experiencias memorables para
                nuestros huéspedes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-amber-100 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">Innovación</h3>
              <p className="mt-2 text-gray-600">
                Constantemente buscamos formas de mejorar y evolucionar,
                integrando nuevas tecnologías y tendencias sin comprometer
                nuestra esencia tradicional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 font-title text-center">
            Nuestro Equipo Directivo
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-64 w-64 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.jpg?height=256&width=256"
                  alt="Director General"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold">Carlos Rodríguez</h3>
              <p className="text-amber-500">Director General</p>
              <p className="mt-2 text-gray-600">
                Con más de 20 años de experiencia en la industria hotelera de
                lujo, Carlos lidera nuestro equipo con visión y pasión.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative h-64 w-64 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.jpg?height=256&width=256"
                  alt="Directora de Operaciones"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold">María González</h3>
              <p className="text-amber-500">Directora de Operaciones</p>
              <p className="mt-2 text-gray-600">
                María asegura que cada aspecto de la experiencia del huésped
                cumpla con nuestros exigentes estándares de calidad.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative h-64 w-64 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.jpg?height=256&width=256"
                  alt="Chef Ejecutivo"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold">Javier Martínez</h3>
              <p className="text-amber-500">Chef Ejecutivo</p>
              <p className="mt-2 text-gray-600">
                Reconocido internacionalmente, Javier crea experiencias
                gastronómicas inolvidables que reflejan lo mejor de la cocina
                local e internacional.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
