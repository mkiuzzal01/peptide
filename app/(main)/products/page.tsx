import Container from "@/app/components/shared/Container";
import SectionTitle from "@/app/components/shared/SectionTitle";
import SearchProduct from "./__components/SearchProduct";
import image from "@/public/products/products.png";
import ProductCard from "@/app/components/products/ProductCard";
import ResearchSupplyBanner from "./__components/ResearchSupplyBanner";

const products = [
  { id: 1, cas: "50-78-2", name: "Oxytocin", price: "$100", image },
  { id: 2, cas: "58-08-2", name: "Caffeine", price: "$75", image },
  { id: 3, cas: "60-00-4", name: "EDTA", price: "$120", image },
  { id: 4, cas: "64-17-5", name: "Ethanol", price: "$90", image },
  { id: 5, cas: "67-56-1", name: "Methanol", price: "$110", image },
  { id: 6, cas: "73-78-9", name: "Lidocaine", price: "$140", image },
  { id: 7, cas: "7440-44-0", name: "Activated Carbon", price: "$60", image },
  { id: 8, cas: "7664-93-9", name: "Sulfuric Acid", price: "$95", image },
  { id: 9, cas: "7782-44-7", name: "Oxygen", price: "$80", image },
];

export default function page() {
  return (
    <Container>
      <div className="py-10">
        <SectionTitle
          title="Explore Research Peptides"
          description="Carefully developed compounds produced with strict quality control standards."
          titleSize="xl"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div>
          <SearchProduct />
        </div>
        <div>
          <div className="grid gap-3 grid-cols-1 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                cas={product.cas}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
          <ResearchSupplyBanner />
        </div>
      </div>
    </Container>
  );
}
