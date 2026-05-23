import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";
import ProductList from "./__components/ProductList";

export default function Page() {
  return (
    <Container>
      <div className="pt-20 pb-5">
        <SectionTitle
          titleSize="2xl"
          title="Add to Cart"
          description="Review product quantities and add items to your cart."
        />
      </div>

      <ProductList />
    </Container>
  );
}
