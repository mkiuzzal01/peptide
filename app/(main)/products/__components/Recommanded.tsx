import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";
import ProductCard from "@/app/components/products/ProductCard";
import Action from "@/app/components/buttons/Action";
import ArrowIcon from "@/app/components/icons/ArrowIcon";
import Link from "next/link";

interface Props {
  payload: any;
}

export default function Recommanded({ payload }: Props) {
  return (
    <Container>
      <div className="py-4">
        <SectionTitle
          title="Recommanded Products"
          icon={
            <Link href={"/products"}>
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
            </Link>
          }
        />

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
          {payload?.map((product: any) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
