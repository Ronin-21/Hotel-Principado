import { Check } from "lucide-react";
import Image from "next/image";
import MyButton from "./MyButton";

interface RoomCardProps {
  title: string;
  description: string;
  image?: string;
  features: string[];
}

export function RoomCard({
  title,
  description,
  image,
  features,
}: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow w-[350px]">
      <div className="relative h-48">
        <Image
          src={image || "/default-image.jpg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 font-secondary">{title}</h3>
        <p className="text-dark/60 mb-4 line-clamp-2">{description}</p>

        <div className="mb-4">
          <div className="grid grid-cols-2 gap-x-2 gap-y-1 font-secondary text-xl">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center text-sm gap-1">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-start mt-8">
          <MyButton href={"/habitaciones"}>Ver más</MyButton>
        </div>
      </div>
    </div>
  );
}
