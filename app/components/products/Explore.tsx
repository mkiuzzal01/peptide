import Action from "../buttons/Action";
import ArrowIcon from "../icons/ArrowIcon";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { IProduct } from "@/redux/types";

interface ExploreProps {
  products: IProduct[];
}

export default function Explore({ products }: ExploreProps) {
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
        {products?.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </Container>
  );
}
