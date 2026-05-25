import { baseApi } from "@/redux/base/baseAPI";

export const cartAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    productDetails: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useProductDetailsQuery } = cartAPI;
