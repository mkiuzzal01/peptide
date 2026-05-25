import { api } from "../TApi";

export const getFaq = () =>
  api.get<any>(`/faq`, {
    tags: ["faqs"],
    revalidate: 60,
  });
