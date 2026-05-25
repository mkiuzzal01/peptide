import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";
import SearchProduct from "./__components/SearchProduct";
import ProductCard from "@/app/components/products/ProductCard";
import ResearchSupplyBanner from "./__components/ResearchSupplyBanner";
import { getProducts } from "@/actions/quires/product.api";
import NotFoundMessage from "@/app/components/utils/NotFoundMessage";
import Pagination from "@/app/components/shared/Pagination";

interface Props {
  searchParams: {
    search?: string;
    min_price?: string;
    max_price?: string;
    sort_by?: string;
    page?: string;
  };
}

export default async function page({ searchParams }: Props) {
  const { search, min_price, max_price, sort_by, page } = await searchParams;

  const query = new URLSearchParams();
  if (search) {
    query.set("search", search);
  }
  if (min_price) {
    query.set("min_price", min_price);
  }
  if (max_price) {
    query.set("max_price", max_price);
  }
  if (sort_by) {
    query.set("sort_by", sort_by);
  }
  if (page) {
    query.set("page", page);
  }

  const products = await getProducts(query);

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
        {/* FILTER */}
        <div>
          <SearchProduct />
        </div>

        {/* PRODUCTS */}
        <div className="w-full">
          {products?.data?.data?.length === 0 ? (
            <NotFoundMessage />
          ) : (
            <div className="grid gap-3 grid-cols-1 lg:grid-cols-3">
              {products?.data?.data?.map((product: any) => (
                <ProductCard key={product?.id} product={product} />
              ))}
            </div>
          )}

          <div className="flex justify-center py-8">
            <Pagination links={products?.data?.links || []} />
          </div>

          <ResearchSupplyBanner />
        </div>
      </div>
    </Container>
  );
}
