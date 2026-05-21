import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";
import BlogDetails from "./BlogDetails";

export default function RecentBlog() {
  return (
    <Container>
      <SectionTitle title="Recent Blog" />
      <div>
        <BlogDetails />
      </div>
    </Container>
  );
}
