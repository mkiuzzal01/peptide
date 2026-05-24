import { baseApi } from "@/redux/base/baseAPI";

export const subscribeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    subscribe: builder.mutation<any, any>({
      query: (data) => ({
        url: "/newsletter/subscribe",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSubscribeMutation } = subscribeApi;
