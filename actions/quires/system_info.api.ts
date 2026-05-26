import { api } from "../TApi";

export const getSystemInfo = () =>
  api.get<any>(`/system-info`, {
    tags: ["system-info"],
    revalidate: 60,
  });

export const getSocialLinks = () =>
  api.get<any>(`/social-links`, {
    tags: ["social-links"],
    revalidate: 60,
  });

export const getProofOfManufacturing = () =>
  api.get<any>(`/proof-of-manufacturing`, {
    tags: ["proof-of-manufacturing"],
    revalidate: 60,
  });
