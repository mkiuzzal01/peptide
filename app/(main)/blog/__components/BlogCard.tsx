import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  slug: string;
  image: any;
  title: string;
  description: string;
}
export default function BlogCard({
  slug,
  image,
  title,
  description,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="space-y-4">
      <div className="relative aspect-video h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-3xl"
        />
      </div>

      <div>
        <p className="text-gray-500">{title}</p>
        <p className="text-gray-500">{description}</p>
      </div>
    </Link>
  );
}
