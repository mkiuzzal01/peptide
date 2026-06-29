import NotFoundMessage from "@/app/components/utils/NotFoundMessage";
import Link from "next/link";

interface Product {
  id: number | string;
  slug: string;
  name: string;
}

interface RelatedProductsProps {
  products?: Product[];
}

export default function RelatedProducts({
  products = [],
}: RelatedProductsProps) {
  if (products.length === 0) {
    return <NotFoundMessage title="No products found" />;
  }

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold border-b-2 py-2">
        Product Catalogue
      </h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.slug}`} className="text-gray-600">
            {product.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
