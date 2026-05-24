/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../TApi";

export const getBlogs = () =>
  api.get<any>(`/blogs`, {
    tags: ["blogs"],
    revalidate: 60,
  });

export const getBlogBySlug = (slug: string) =>
  api.get<any>(`/blog/${slug}`, {
    tags: ["blog"],
    revalidate: 60,
  });
