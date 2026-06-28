import parse from "html-react-parser";

interface ProductOverviewSection {
  id: string | number;
  title: string;
  content: string;
}

interface Props {
  payload: ProductOverviewSection[];
}

export default function ProductOverview({ payload }: Props) {
  if (!payload?.length) {
    return null;
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2  gap-6">
      {payload.map((section) => (
        <div
          key={section.id}
          className="space-y-2 rounded-xl border border-gray-200 p-4"
        >
          <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>

          <article className="max-w-none prose prose-md prose-gray">
            {parse(section.content)}
          </article>
        </div>
      ))}
    </section>
  );
}
