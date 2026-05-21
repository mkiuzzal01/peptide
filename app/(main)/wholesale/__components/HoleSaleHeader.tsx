import WholeSaleCard from "@/app/components/cards/WoleSaleCard";
import Container from "@/app/components/shared/Container";
import whole from "@/public/header/hole_sale.png";
import Image from "next/image";

const holeSale = [
  {
    title: "High-Purity Peptides",
    description: "Best Peptides for Research",
    buttonTitle: "Learn More",
    href: "/blog",
    image: <Image alt="App Store" height={300} width={200} src={whole} />,
  },
  {
    title: "High-Purity Peptides",
    description: "Best Peptides for Research",
    buttonTitle: "Learn More",
    href: "/blog",
    image: <Image alt="App Store" height={300} width={200} src={whole} />,
  },
  {
    title: "High-Purity Peptides",
    description: "Best Peptides for Research",
    buttonTitle: "Learn More",
    href: "/blog",
    image: <Image alt="App Store" height={300} width={200} src={whole} />,
  },
];

export default function HoleSaleHeader() {
  return (
    <Container>
      <div className="space-y-6 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {holeSale.map((item, index) => (
            <WholeSaleCard
              key={index}
              link={item.href}
              title={item.title}
              description={item.description}
              buttonTitle={item.buttonTitle}
              image={item.image}
            />
          ))}
        </div>
        <div className="p-4 bg-white rounded-lg">
          <h1 className="text-xl font-bold text-gray-900">Research Use Only</h1>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            All products are intended solely for laboratory research and are not
            for human or animal consumption. By purchasing, the buyer agrees to
            use these products in compliance with all applicable laws. All
            products currently listed on this site are for research purposes
            ONLY.
          </p>
        </div>
      </div>
    </Container>
  );
}
