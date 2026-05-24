import Container from "@/app/components/shared/Container";
import ProductDetails from "../__components/ProductDetails";
import Recommanded from "../__components/Recommanded";
import ResearchSupplyBanner from "../__components/ResearchSupplyBanner";
import { getProductBySlug } from "@/actions/quires/product.api";
import NotFoundMessage from "@/app/components/utils/NotFoundMessage";
import ProductOverview from "../__components/ProductOverview";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (product?.status !== 200) {
    return (
      <NotFoundMessage
        title="No Product Found"
        message="We couldn't find the product you are looking for."
        buttonLink="/products"
        buttonText="Back to Products"
      />
    );
  }

  return (
    <Container>
      <ProductDetails payload={product?.data} />
      <ProductOverview payload={product?.data?.sections} />
      <Recommanded payload={product?.data?.recommended_products || []} />
      <ResearchSupplyBanner />
    </Container>
  );
}
