import Image from "next/image";
import MyButton from "./MyButton";

const WelcomeSection = () => {
  return (
    <section className="bg-light flex items-center justify-center py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* images */}
          <div className="order-1 flex justify-center relative h-[300px] md:h-[400px]">
            <Image
              src={"/pool-1.webp"}
              alt="Historia del Hotel Elegante"
              width={600}
              height={600}
              className={`object-cover h-[300px] md:h-[400px] absolute bottom-0 rounded-lg shadow-lg`}
            />
            <Image
              src="/lobby-3.webp"
              alt="Historia del Hotel Elegante"
              width={300}
              height={400}
              className={`absolute h-[250px] md:h-[300px] object-cover md:-bottom-16 md:-left-12 -bottom-5 ring-[10px] ring-light`}
            />
          </div>
          {/* text content */}
          <div className="order-2 flex flex-col items-start space-y-6">
            <h4 className="md:text-xl font-semibold text-primary font-secondary uppercase">
              Tradición, confort y hospitalidad
            </h4>
            <h2 className="text-5xl md:text-6xl font-title text-center md:text-left">
              Bienvenidos al Grand Hotel Principado
            </h2>
            <div className="space-y-6 text-dark/70 leading-relaxed">
              <p className="md:text-lg text-center md:text-left">
                En el corazón de la ciudad, te esperamos con la calidez que nos
                caracteriza, servicios de primer nivel y el inconfundible relax
                de las aguas termales. Aquí comienza tu experiencia de confort y
                bienestar. <br />
                Desde hace años, el Hotel Principado es sinónimo de descanso y
                buena atención en la ciudad. Combinamos modernas instalaciones,
                gastronomía regional y actividades para toda la familia, para
                que tu estadía sea tan especial como la merecés. <br />
                Vas a encontrar más que un hospedaje: una experiencia completa
                que une comodidad, entretenimiento y el poder renovador de las
                termas.
              </p>
            </div>
            <MyButton href="/nosotros" className="self-center md:self-start">
              Leer más
            </MyButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
