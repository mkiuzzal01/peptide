import { getProducts } from "@/actions/quires/product.api";
import FAQ from "../components/FAQ/FAQ";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import HeroBottom from "../components/hero/HeroBottom";
import OurProcess from "../components/process/OurProcess";
import Explore from "../components/products/Explore";
import Recent from "../components/products/Recent";
import NotFoundMessage from "../components/utils/NotFoundMessage";

export default async function Home() {
  const { data: allProducts } = await getProducts(null);

  if (!allProducts) {
    return (
      <NotFoundMessage
        title="No products found"
        message="Contact with support"
      />
    );
  }

  return (
    <>
      <Hero />
      <HeroBottom />
      <Header />
      <Explore products={allProducts?.data} />
      <Recent products={allProducts?.data} />
      <OurProcess />
      <FAQ />
    </>
  );
}
