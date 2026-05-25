import Container from "@/app/components/shared/Container";
import BlogDetails from "../__components/BlogDetails";
import RecentBlog from "../__components/RecentBlog";
import { getBlogBySlug, getBlogs } from "@/actions/quires/blog.api";
import NotFoundMessage from "@/app/components/utils/NotFoundMessage";

interface Props {
  params: Promise<{ slug: string }>;
}
export default async function page({ params }: Props) {
  const { slug } = await params;
  const { data: payload } = await getBlogBySlug(slug);
  const { data: recentBlogs } = await getBlogs();

  if (!payload || !recentBlogs) {
    return <NotFoundMessage message="No Blog Found!" />;
  }

  return (
    <Container>
      <BlogDetails payload={payload} />
      <RecentBlog payload={recentBlogs} />
    </Container>
  );
}
