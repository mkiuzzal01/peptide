import Image, { StaticImageData } from "next/image";
import Action from "../buttons/Action";
import Bag from "../icons/Bag";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  cas: string;
  name: string;
  price: string;
  image: StaticImageData;
}

export default function ProductCard({
  id,
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
            CAS #: {cas}
          </p>
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="font-normal"> From {price}</p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href={`/products/${id}`}>
            <Action
              name="View Details"
              title="View Details"
              className="
              h-8
              px-2
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
          </Link>

          <Action
            name="Add to Cart"
            title="Add to Cart"
            icon={<Bag size="w-5 h-5" />}
            iconPosition="right"
            className="
              h-8
              px-2
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
