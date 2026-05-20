import Image, { StaticImageData } from "next/image";
import Action from "../buttons/Action";
import Bag from "../icons/Bag";

interface ProductCardProps {
  cas: string;
  name: string;
  price: string;
  image: StaticImageData;
}

export default function ProductCard({
  cas,
  name,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Content */}
      <div className="p-6">
        {/* Product Info */}
        <div className="text-center space-y-2">
          <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">
            CAS: {cas}
          </p>
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-2xl font-bold text-blue-600">{price}</p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Action
            name="View Details"
            title="View Details"
            className="
              h-11
              px-5
              rounded-full
              border border-gray-200
              bg-white
              text-gray-700
              text-sm font-semibold
              hover:bg-gray-100
              transition-all duration-200
              flex items-center justify-center
            "
          />

          <Action
            name="Add to Cart"
            title="Add to Cart"
            icon={<Bag />}
            iconPosition="right"
            className="
              h-11
              px-5
              rounded-full
              bg-blue-600
              text-white
              text-sm font-semibold
              hover:bg-blue-700
              transition-all duration-200
              flex items-center justify-center gap-2
              shadow-sm
            "
          />
        </div>
      </div>
      {/* Product Image */}
      <div className="flex items-center justify-center p-3">
        <Image
          src={image}
          alt={name}
          className="w-full h-32 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
}
