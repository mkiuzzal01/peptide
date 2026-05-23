import { baseApi } from "@/redux/base/baseAPI";

const authSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),

    verifyOTP: builder.mutation({
      query: (body) => ({
        url: "/verify_otp",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useVerifyOTPMutation,
} = authSlice;
