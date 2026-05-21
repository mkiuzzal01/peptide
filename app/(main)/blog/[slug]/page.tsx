import Container from "@/app/components/shared/Container";
import BlogDetails from "../__components/BlogDetails";

interface Props {
  params: Promise<{ slug: string }>;
}
export default async function page({ params }: Props) {
  const { slug } = await params;

  console.log({ slug });

  return (
    <Container>
      <BlogDetails />
    </Container>
  );
}
