import Container from "@/app/components/shared/Container";
import ProductDetails from "../__components/ProductDetails";
import Recommanded from "../__components/Recommanded";
import ResearchSupplyBanner from "../__components/ResearchSupplyBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: Props) {
  const { slug } = await params;
  return (
    <Container>
      <ProductDetails slug={slug} />
      <Recommanded />
      <ResearchSupplyBanner />
    </Container>
  );
}
