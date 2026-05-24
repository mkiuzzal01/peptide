import { baseApi } from "@/redux/base/baseAPI";

export const contact = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    contact: builder.mutation({
      query: (body) => ({
        url: "/contact",
        method: "POST",
        body,
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const { useContactMutation } = contact;
