import { baseApi } from "@/redux/base/baseAPI";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    applyCoupon: builder.mutation<any, any>({
      query: (data) => ({
        url: `/coupon/validate`,
        method: "POST",
        body: data,
      }),
    }),

    placeOrder: builder.mutation<any, any>({
      query: (data) => ({
        url: `/checkout`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useApplyCouponMutation, usePlaceOrderMutation } = orderApi;
