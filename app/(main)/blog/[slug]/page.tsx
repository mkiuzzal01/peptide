import Container from "@/app/components/shared/Container";
import BlogDetails from "../__components/BlogDetails";
import RecentBlog from "../__components/RecentBlog";

interface Props {
  params: Promise<{ slug: string }>;
}
export default async function page({ params }: Props) {
  const { slug } = await params;

  return (
    <Container>
      <BlogDetails />
      <RecentBlog />
    </Container>
  );
}
