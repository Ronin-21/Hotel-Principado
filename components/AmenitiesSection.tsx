import { Car, Coffee, Drama, Waves } from "lucide-react";

const AmenitiesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <Waves className="h-8 w-8 text-slate-700" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Aguas Termales</h4>
            <p className="text-slate-600">
              Pileta interior y exterior con agua termal.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <Coffee className="h-8 w-8 text-slate-700" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Desayuno y Merienda</h4>
            <p className="text-slate-600">Servicio de desayuno y merienda.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <Car className="h-8 w-8 text-slate-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Estacionamiento</h3>
            <p className="text-slate-600">Seguro y exclusivo para huéspedes.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <Drama className="h-8 w-8 text-slate-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Shows y Recreación</h3>
            <p className="text-slate-600">
              Actividades, espectáculos y entretenimiento para toda la familia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
