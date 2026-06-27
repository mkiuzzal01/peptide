import HeaderCard from "../cards/HeaderCard";
import Image from "next/image";
import Object1 from "@/public/header/Object 1.png";
import MedicineBox from "@/public/header/medicine_box.png";
import Container from "../shared/Container";

const header = [
  {
    title: "High-Purity Peptides",
    description: "Analytically Tested",
    buttonTitle: "View COAs",
    href: "/coa",
    image: <Image alt="App Store" height={300} width={200} src={Object1} />,
  },
  {
    title: "Shop All Peptides",
    description: "The Latest in Peptide Science",
    buttonTitle: "View All",
    href: "/products",
    image: <Image alt="App Store" height={300} width={200} src={MedicineBox} />,
  },
  {
    title: "Learn Articles",
    description: "Best Peptides for Research",
    buttonTitle: "Learn More",
    href: "/blog",
    image: <Image alt="App Store" height={300} width={200} src={MedicineBox} />,
  },
];

export default function Header() {
  return (
    <section className="w-full py-10">
      <Container className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {header.map((item, index) => (
            <HeaderCard
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
      </Container>
    </section>
  );
}
