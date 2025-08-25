import Image from "next/image";
import MyButton from "./MyButton";
import FadeComponent from "./animations/FadeComponent";

const WelcomeSection = () => {
  return (
    <section className="flex items-center justify-center py-20 bg-light">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* images */}
          <div className="order-1 flex justify-center relative h-[300px] md:h-[400px]">
            <FadeComponent
              direction="right"
              duration={1500}
              delay={500}
              triggerOnce={false}
              className="h-[300px] md:h-[400px] w-full md:w-[600px] absolute bottom-0 rounded-lg shadow-lg shadow-dark/50 overflow-hidden"
            >
              <Image
                src={"/pool-1.webp"}
                alt="Historia del Hotel Elegante"
                fill
                className="object-cover"
                loading="lazy"
                quality={70}
              />
            </FadeComponent>
            <FadeComponent
              direction="left"
              duration={1500}
              delay={500}
              triggerOnce={false}
              className="absolute h-[250px] md:h-[300px] md:-bottom-16 md:-left-12 -bottom-5 ring-[10px] ring-light w-[300px]"
            >
              <Image
                src="/lobby-3.webp"
                alt="Historia del Hotel Elegante"
                fill
                className="object-cover"
                loading="lazy"
                quality={70}
              />
            </FadeComponent>
          </div>
          {/* text content */}
          <div className="flex flex-col items-start order-2 space-y-6">
            <h4 className="font-semibold uppercase md:text-xl text-primary font-secondary">
              Tradición, confort y hospitalidad
            </h4>
            <h2 className="text-5xl text-center md:text-6xl font-title md:text-left">
              Bienvenidos al Grand Hotel Principado
            </h2>
            <div className="space-y-6 leading-relaxed text-dark/70">
              <p className="text-center md:text-lg md:text-left">
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
