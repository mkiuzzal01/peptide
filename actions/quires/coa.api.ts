/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../TApi";

export const getCoa = () =>
  api.get<any>(`/coa`, {
    tags: ["coa"],
    revalidate: 60,
  });

export const getCoaBySlug = (slug: string) =>
  api.get<any>(`/coa/${slug}`, {
    tags: ["coa"],
    revalidate: 60,
  });
