import Link from "next/link";
import { SearchX } from "lucide-react";

interface Props {
  title?: string;
  message?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function NotFoundMessage({
  title = "No Results Found",
  message = "We couldn’t find anything matching your search. Please try a different keyword or browse other available content.",
  buttonText = "Go Back Home",
  buttonLink = "/",
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 my-8 text-center">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
        <SearchX className="h-10 w-10 text-gray-500" />
      </div>

      <h2 className="mb-3 text-2xl font-semibold text-gray-900">{title}</h2>

      <p className="max-w-md text-sm leading-6 text-gray-600">{message}</p>

      <Link
        href={buttonLink}
        className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
      >
        {buttonText}
      </Link>
    </div>
  );
}
