/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../TApi";

export const getProducts = (params: URLSearchParams) =>
  api.get<any>(`/products?${params}`, {
    tags: ["product"],
    revalidate: 60,
  });

export const getProductBySlug = (slug: string) =>
  api.get<any>(`/products/${slug}`, {
    tags: ["product"],
    revalidate: 60,
  });
