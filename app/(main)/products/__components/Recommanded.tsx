import image from "@/public/products/products.png";
import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";
import ProductCard from "@/app/components/products/ProductCard";
import Action from "@/app/components/buttons/Action";
import ArrowIcon from "@/app/components/icons/ArrowIcon";

const products = [
  {
    id: 1,
    cas: "50-78-2",
    name: "Oxytocin",
    price: "$100",
    image: image,
  },
  {
    id: 2,
    cas: "58-08-2",
    name: "Caffeine",
    price: "$75",
    image: image,
  },
  {
    id: 3,
    cas: "60-00-4",
    name: "EDTA",
    price: "$120",
    image: image,
  },
  {
    id: 4,
    cas: "64-17-5",
    name: "Ethanol",
    price: "$90",
    image: image,
  },
];

export default function Recommanded() {
  return (
    <Container>
      <SectionTitle
        title="Recommanded Products"
        icon={
          <Action
            iconPosition="right"
            name={"See All Products"}
            title="Browse Products"
            icon={
              <ArrowIcon
                bgColor="bg-blue-600"
                size="w-6 h-6"
                iconColor="white"
              />
            }
            className="bg-[#FFFFF] border border-blue-600 text-blue-600 h-10 pl-6 pr-2 rounded-full text-sm sm:text-base  font-semibold transition-all duration-200 flex items-center gap-4"
          />
        }
      />

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              id={product.id}
              cas={product.cas}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
