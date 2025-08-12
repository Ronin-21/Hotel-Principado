import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Button from "./MyButton";

interface RoomCardProps {
  title: string;
  description: string;
  price: number;
  image?: string;
  features: string[];
  slug: string;
}

export function RoomCard({
  title,
  description,
  price,
  image,
  features,
  slug,
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
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-600 mb-4 line-clamp-2">{description}</p>

        <div className="mb-4">
          <div className="grid grid-cols-2 gap-x-2 gap-y-1">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center text-sm gap-1">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-lg font-bold">
            ${price}{" "}
            <span className="text-sm font-normal text-slate-600">/ night</span>
          </div>
          <Button>
            <Link href={`/rooms/${slug}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
