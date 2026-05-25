import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import ProductCard from "./ProductCard";
import { IProduct } from "@/redux/types";

interface Props {
  products: IProduct[];
}

export default function Recent({ products }: Props) {
  return (
    <Container>
      <SectionTitle title="Recent Viewed Products" />

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
        {products?.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </Container>
  );
}
