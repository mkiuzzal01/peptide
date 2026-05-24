import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";
import SearchProduct from "./__components/SearchProduct";
import ProductCard from "@/app/components/products/ProductCard";
import ResearchSupplyBanner from "./__components/ResearchSupplyBanner";
import { getProducts } from "@/actions/quires/product.api";
import NotFoundMessage from "@/app/components/utils/NotFoundMessage";

export default async function page() {
  const products = await getProducts();

  if (!products?.data?.data?.length) {
    return <NotFoundMessage />;
  }

  return (
    <Container>
      <div className="py-10">
        <SectionTitle
          title="Explore Research Peptides"
          description="Carefully developed compounds produced with strict quality control standards."
          titleSize="xl"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div>
          <SearchProduct />
        </div>
        <div>
          <div className="grid gap-3 grid-cols-1 lg:grid-cols-3">
            {products?.data?.data?.map((product: any) => (
              <ProductCard
                key={product?.id}
                id={product?.id}
                slug={product?.slug}
                cas={product?.cas_number}
                name={product?.name}
                price={product?.from_price}
                image={product?.thumbnail}
              />
            ))}
          </div>
          <ResearchSupplyBanner />
        </div>
      </div>
    </Container>
  );
}
