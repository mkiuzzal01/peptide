import Link from "next/link";
import Container from "../shared/Container";
import Action from "../buttons/Action";

interface Props {
  buttonTitle: string;
  image?: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

export default function WholeSaleCard({
  image,
  title,
  description,
  buttonTitle,
  link,
}: Props) {
  return (
    <Container>
      <div className="flex rounded-xl p-6 bg-white">
        <div className="space-y-3 flex-1">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {image && (
          <div className="justify-end">
            <div>{image}</div>
          </div>
        )}
      </div>
    </Container>
  );
}
