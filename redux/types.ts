export interface IProductVariant {
  id: number;
  size_id: number;
  size: string;
  quantity_id: number;
  quantity: string;
  price: number;
  stock: number;
  image: string;
}

export interface IProduct {
  id: number;
  name: string;
  slug: string;
  cas_number: string;
  thumbnail: string;
  from_price: string;
  variants: IProductVariant[];
}

export interface ICartItem {
  id: number;
  name: string;
  thumbnail: string;
  quantity: number;
  selectedSize: string;
  selectedPack: string;
  variants: IProductVariant[];
}
