import Action from "../buttons/Action";
import ArrowIcon from "../icons/ArrowIcon";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

import image_1 from "@/public/process/STEP 1 Card.png";
import image_2 from "@/public/process/STEP 2 Card.png";
import image_3 from "@/public/process/STEP 3 Card .png";
import ProcessCard from "./ProcessCard";

const processSteps = [
  {
    id: 1,
    title: "Advanced Lyophilization Control",
    description:
      "Utilizing precision freeze-drying to maintain molecular stability in a sterile, regulated environment.",
    image: image_1,
  },
  {
    id: 2,
    title: "Sterile Formulation Process",
    description:
      "Ensuring contamination-free preparation with advanced sterile manufacturing systems.",
    image: image_2,
  },
  {
    id: 3,
    title: "Quality Assurance & Validation",
    description:
      "Rigorous testing and validation to ensure pharmaceutical-grade quality standards.",
    image: image_3,
  },
];

export default function OurProcess() {
  return (
    <Container className="py-4">
      <SectionTitle
        title="Our Process"
        icon={
          <Action
            iconPosition="right"
            name="Browse Products"
            icon={
              <ArrowIcon
                bgColor="bg-blue-600"
                size="w-6 h-6"
                iconColor="white"
              />
            }
            className="
              bg-white border border-blue-600
              text-blue-600
              h-10
              pl-6 pr-2
              rounded-full
              text-sm sm:text-base
              font-semibold
              transition-all duration-200
              flex items-center gap-4
            "
          />
        }
      />

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {processSteps.map((step) => (
          <ProcessCard
            key={step.id}
            title={step.title}
            description={step.description}
            image={step.image}
          />
        ))}
      </div>
    </Container>
  );
}
