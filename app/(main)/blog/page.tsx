import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";
import BlogCard from "./__components/BlogCard";
import FAQ from "@/app/components/FAQ/FAQ";
import { getBlogs } from "@/actions/quires/blog.api";
import { getFaq } from "@/actions/quires/faq.api";
import NotFoundMessage from "@/app/components/utils/NotFoundMessage";

export default async function page() {
  const { data: payload } = await getBlogs();
  const { data: faqs } = await getFaq();

  if (!payload || !faqs) {
    return (
      <NotFoundMessage title="No blogs found" message="Contact with support" />
    );
  }

  return (
    <Container>
      <div className="pt-8">
        <SectionTitle
          titleSize="xl"
          title="Explore Our Blog"
          description="Breaking down the science behind peptide research."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {payload.map((blog: any) => (
            <div key={blog.id} className={blog.id === 1 ? "lg:col-span-3" : ""}>
              <BlogCard
                slug={blog?.slug}
                title={blog?.title}
                image={blog?.image}
                description={blog?.description}
              />
            </div>
          ))}
        </div>

        <div>
          <FAQ faqs={faqs} />
        </div>
      </div>
    </Container>
  );
}
