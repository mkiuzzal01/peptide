import Image, { StaticImageData } from "next/image";

interface ProcessCardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export default function ProcessCard({
  title,
  description,
  image,
}: ProcessCardProps) {
  return (
    <div>
      {/* Image */}
      <div className="flex justify-center mb-4">
        <Image src={image} alt={title} className="w-full h-96 object-contain" />
      </div>

      {/* Content */}
      {/* <h3 className="text-lg font-semibold text-gray-900 text-center">
        {title}
      </h3>

      <p className="text-sm text-gray-500 text-center mt-2 leading-relaxed">
        {description}
      </p> */}
    </div>
  );
}
