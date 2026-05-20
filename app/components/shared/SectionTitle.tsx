interface Props {
  title: string;
  icon?: React.ReactNode;
  description?: string;
  align?: "left" | "right";
}

export default function SectionTitle({
  title,
  icon,
  description,
  align = "right",
}: Props) {
  return (
    <div>
      <div className="flex justify-between items-center gap-2">
        {align === "left" && icon}

        <h2 className="text-xl font-bold text-gray-900">{title}</h2>

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
