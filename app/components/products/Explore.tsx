import Action from "../buttons/Action";
import ArrowIcon from "../icons/ArrowIcon";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import image from "@/public/products/products.png";
import ProductCard from "./ProductCard";
import Link from "next/link";

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
  {
    id: 5,
    cas: "67-56-1",
    name: "Methanol",
    price: "$110",
    image: image,
  },
  {
    id: 6,
    cas: "73-78-9",
    name: "Lidocaine",
    price: "$140",
    image: image,
  },
  {
    id: 7,
    cas: "7440-44-0",
    name: "Activated Carbon",
    price: "$60",
    image: image,
  },
  {
    id: 8,
    cas: "7664-93-9",
    name: "Sulfuric Acid",
    price: "$95",
    image: image,
  },
];

export default function Explore() {
  return (
    <Container>
      <SectionTitle
        title="Explore our products"
        icon={
          <Link href="/products">
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
              className="
                      bg-[#FFFFF] border border-blue-600
                      text-blue-600
                      h-10
                      pl-6 pr-2
                      rounded-full
                      text-sm sm:text-base  
                      font-semibold
                      transition-all duration-200
                      flex items-center gap-4
                    "
            />
          </Link>
        }
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 py-4">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              slug={product?.name}
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
