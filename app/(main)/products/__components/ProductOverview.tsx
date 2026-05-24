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
        <article
          key={section.id}
          className="space-y-2 rounded-xl border border-gray-200 p-4"
        >
          <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>

          <div
            className="
    prose prose-sm sm:prose-base max-w-none
    text-justify text-gray-500
    leading-7
    break-all

    prose-p:mb-4
    prose-p:leading-7

    prose-headings:mt-6
    prose-headings:mb-3
    prose-headings:font-semibold
    prose-headings:text-gray-900

    prose-ul:pl-5
    prose-ol:pl-5

    prose-li:mb-2
    prose-li:leading-7

    prose-strong:text-gray-900
    prose-a:text-primary
  "
            dangerouslySetInnerHTML={{
              __html: section.content,
            }}
          />
        </article>
      ))}
    </section>
  );
}
