import image from "@/public/products/products.png";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import ProductCard from "./ProductCard";

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

export default function Recent() {
  return (
    <Container>
      <SectionTitle title="Recent Viewed Products" />

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
