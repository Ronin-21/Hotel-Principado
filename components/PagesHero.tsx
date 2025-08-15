interface HeroProps {
  bgUrl: string;
  title: string;
}

const PagesHero = ({ bgUrl, title }: HeroProps) => {
  return (
    <div
      className="h-[50vh] w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PagesHero;
