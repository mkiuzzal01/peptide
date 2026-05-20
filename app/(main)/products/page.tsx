import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";
import AllProducts from "./__components/AllProducts";

export default function page() {
  return (
    <Container>
      <div className="py-10">
        <SectionTitle
          title="Explore Research Peptides"
          description="Carefully developed compounds produced with strict quality control standards."
          titleSize="xl"
        />
      </div>

      <div>
        <AllProducts />
      </div>
    </Container>
  );
}
