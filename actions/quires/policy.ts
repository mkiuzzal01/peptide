import { api } from "../TApi";

export const getPrivacyPolicy = () =>
  api.get<any>(`/privacy-policy`, {
    tags: ["privacy-policy"],
    revalidate: 60,
  });

export const getTermsOfService = () =>
  api.get<any>(`/terms-of-service`, {
    tags: ["terms-of-service"],
    revalidate: 60,
  });
