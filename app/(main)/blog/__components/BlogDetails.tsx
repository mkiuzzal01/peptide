import Image from "next/image";
import blog from "@/public/blog/Frame 2147228873.png";

interface Props {
  payload: any;
}

export default function BlogDetails({ payload }: Props) {
  return (
    <div className="py-4">
      <div className="space-y-6 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
          {payload?.title}
        </h1>

        <div className="flex items-center justify-center gap-3 text-sm text-gray-500 py-2">
          <span>{payload?.date}</span>
          <span className="w-1 h-1 rounded-full" />
          <span>Research Article</span>
        </div>
      </div>

      {/* FEATURE IMAGE */}
      <div className="relative w-full aspect-video overflow-hidden rounded-3xl mb-12 shadow-sm border border-gray-100">
        <Image
          src={payload?.image || blog}
          alt={payload?.title || ""}
          fill
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* ARTICLE CONTENT */}
      <article>
        <div
          dangerouslySetInnerHTML={{ __html: payload?.content }}
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
        />
      </article>
    </div>
  );
}
