import ProductCard from "@/app/components/products/ProductCard";
import image from "@/public/products/products.png";

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
  { id: 10, cas: "9004-34-6", name: "Cellulose", price: "$130", image },
];

export default function AllProducts() {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            cas={product.cas}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
