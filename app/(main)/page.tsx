import FAQ from "../components/FAQ/FAQ";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import HeroBottom from "../components/hero/HeroBottom";
import OurProcess from "../components/process/OurProcess";
import Explore from "../components/products/Explore";
import Recent from "../components/products/Recent";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroBottom />
      <Header />
      <Explore />
      <Recent />
      <OurProcess />
      <FAQ />
    </>
  );
}
