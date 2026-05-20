import Container from "../shared/Container";
import Action from "../buttons/Action";
import ArrowIcon from "../icons/ArrowIcon";

interface Props {
  buttonTitle: string;
  image?: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

export default function HeaderCard({
  image,
  title,
  description,
  buttonTitle,
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

          <Action
            iconPosition="right"
            name={buttonTitle}
            title="Browse Products"
            icon={<ArrowIcon bgColor="bg-blue-600" iconColor="white" />}
            className="
              bg-[#FFFFF] border border-blue-600
              text-blue-600
              h-14
              pl-6 pr-2
              rounded-full
              text-sm sm:text-base
              font-semibold
              transition-all duration-200
              flex items-center gap-4
            "
          />
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
