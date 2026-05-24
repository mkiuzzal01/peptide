import { baseApi } from "@/redux/base/baseAPI";

export const wholesaleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    wholeSaleOrder: builder.mutation<any, any>({
      query: (data) => ({
        url: "/wholesale-order",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useWholeSaleOrderMutation } = wholesaleApi;
