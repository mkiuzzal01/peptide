import Image from "next/image";

interface BlogCardProps {
  image: any;
  title: string;
  description: string;
}
export default function BlogCard({ image, title, description }: BlogCardProps) {
  return (
    <div>
      <Image src={image} alt={title} />
    </div>
  );
}
