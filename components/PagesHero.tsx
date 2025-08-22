interface HeroProps {
  bgUrl: string;
}

const PagesHero = ({ bgUrl }: HeroProps) => {
  return (
    <div
      className="md:h-[50vh] h-96 w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black/50"></div>
    </div>
  );
};

export default PagesHero;
