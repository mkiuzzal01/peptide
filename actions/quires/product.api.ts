/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../TApi";

export const getProducts = () =>
  api.get<any>(`/products`, {
    tags: ["product"],
    revalidate: 60,
  });

export const getProductBySlug = (slug: string) =>
  api.get<any>(`/products/${slug}`, {
    tags: ["product"],
    revalidate: 60,
  });
