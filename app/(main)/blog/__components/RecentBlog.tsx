import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";
import blogImage2 from "@/public/blog/Blog Card 1.png";
import BlogCard from "./BlogCard";

interface Blog {
  id: number;
  title: string;
  image: any;
  description: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Peptide Therapy: A Comprehensive Guide",
    image: blogImage2,
    description:
      "An in-depth exploration of peptide therapy, covering its mechanisms, applications, and recent advancements.",
  },
  {
    id: 2,
    title: "Understanding the Science of Peptides",
    image: blogImage2,
    description:
      "A deep dive into the molecular biology and chemistry behind peptide synthesis and function.",
  },
  {
    id: 3,
    title: "Clinical Trials: What You Need to Know",
    image: blogImage2,
    description:
      "An overview of the clinical trial process for peptides and what patients can expect.",
  },
];

export default function RecentBlog() {
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
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            image={blog.image}
            description={blog.description}
          />
        ))}
      </div>
    </Container>
  );
}
