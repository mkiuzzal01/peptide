import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";
import blogImage1 from "@/public/blog/Frame 2147228873.png";
import blogImage2 from "@/public/blog/Blog Card 1.png";
import BlogCard from "./__components/BlogCard";
import FAQ from "@/app/components/FAQ/FAQ";
import Link from "next/link";

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
    image: blogImage1,
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
  {
    id: 4,
    title: "Peptide Therapy: A Comprehensive Guide",
    image: blogImage2,
    description:
      "An in-depth exploration of peptide therapy, covering its mechanisms, applications, and recent advancements.",
  },
  {
    id: 5,
    title: "Understanding the Science of Peptides",
    image: blogImage2,
    description:
      "A deep dive into the molecular biology and chemistry behind peptide synthesis and function.",
  },
  {
    id: 6,
    title: "Clinical Trials: What You Need to Know",
    image: blogImage2,
    description:
      "An overview of the clinical trial process for peptides and what patients can expect.",
  },
  {
    id: 7,
    title: "Clinical Trials: What You Need to Know",
    image: blogImage2,
    description:
      "An overview of the clinical trial process for peptides and what patients can expect.",
  },
];

export default function page() {
  return (
    <Container>
      <div className="pt-8">
        <SectionTitle
          titleSize="xl"
          title="Explore Our Blog"
          description="Breaking down the science behind peptide research."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {blogs.map((blog) => (
            <Link
              href={`/blog/${blog.id}`}
              key={blog.id}
              className={blog.id === 1 ? "lg:col-span-3" : ""}
            >
              <BlogCard
                title={blog.title}
                image={blog.image}
                description={blog.description}
              />
            </Link>
          ))}
        </div>

        <div>
          <FAQ />
        </div>
      </div>
    </Container>
  );
}
