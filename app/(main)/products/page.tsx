import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";
import SearchProduct from "./__components/SearchProduct";
import ProductCard from "@/app/components/products/ProductCard";
import ResearchSupplyBanner from "./__components/ResearchSupplyBanner";
import { getProducts, getProductsList } from "@/actions/quires/product.api";
import NotFoundMessage from "@/app/components/utils/NotFoundMessage";
import Pagination from "@/app/components/shared/Pagination";
import RelatedProducts from "./__components/RelatedProducts";

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
  const productList = await getProductsList();

  return (
    <Container>
      <div className="py-10">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <aside className="hidden md:block w-full lg:w-72 xl:w-80 shrink-0">
            <div className="lg:sticky lg:top-24">
              <RelatedProducts products={productList?.data?.data} />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <SectionTitle
              title="Explore Research Peptides"
              description="Carefully developed compounds produced with strict quality control standards."
              titleSize="xl"
            />

            <div className="mt-8">
              <SearchProduct />
            </div>

            <div className="mt-8">
              {products?.data?.data?.length === 0 ? (
                <NotFoundMessage />
              ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {products?.data?.data?.map((product: any) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-center mt-10">
              <Pagination links={products?.data?.links || []} />
            </div>

            <div className="mt-12">
              <ResearchSupplyBanner />
            </div>
          </main>
        </div>
      </div>
    </Container>
  );
}
