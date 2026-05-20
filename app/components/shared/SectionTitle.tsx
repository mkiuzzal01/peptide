interface Props {
  title: string;
  icon?: React.ReactNode;
  description?: string;
  align?: "left" | "right";
  titleSize?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export default function SectionTitle({
  title,
  icon,
  description,
  align = "right",
  titleSize = "md",
}: Props) {
  return (
    <div>
      <div className="flex justify-between items-center gap-2">
        {align === "left" && icon}

        <h2
          className={`font-bold text-gray-900 ${titleSize === "sm" ? "text-lg" : titleSize === "lg" ? "text-2xl" : titleSize === "xl" ? "text-3xl" : titleSize === "2xl" ? "text-4xl" : "text-xl"}`}
        >
          {title}
        </h2>

        {align === "right" && icon}
      </div>

      {description && (
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
