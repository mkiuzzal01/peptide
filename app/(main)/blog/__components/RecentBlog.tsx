import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";
import BlogCard from "./BlogCard";

interface Props {
  payload: any;
}

export default function RecentBlog({ payload }: Props) {
  return (
    <Container>
      <div className="py-8">
        <SectionTitle
          titleSize="2xl"
          title="Recent Blog"
          description="Explore the latest articles and insights from our community."
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {payload?.data?.map((blog: any) => (
          <BlogCard
            key={blog?.id}
            slug={blog?.slug}
            title={blog?.title}
            image={blog?.image}
            description={blog?.description}
          />
        ))}
      </div>
    </Container>
  );
}
