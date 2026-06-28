import Image from "next/image";
import blog from "@/public/blog/Frame 2147228873.png";
import parse from "html-react-parser";

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
      <article className="max-w-none prose prose-md prose-gray">
        {parse(payload?.content)}
      </article>
    </div>
  );
}
